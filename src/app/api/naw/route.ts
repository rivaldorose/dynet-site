import { NextResponse } from "next/server";
import { getResend, EMAIL_TO, EMAIL_FROM } from "@/lib/resend";
import { escapeHtml, checkRateLimit, getClientIp, isHoneypotFilled } from "@/lib/security";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rate = checkRateLimit(ip);
    if (!rate.ok) {
      return NextResponse.json(
        { error: "Te veel aanvragen, probeer het later opnieuw" },
        { status: 429, headers: { "Retry-After": String(rate.retryAfter) } }
      );
    }

    const data = await request.json();

    if (isHoneypotFilled(data)) {
      return NextResponse.json({ success: true });
    }

    const {
      ubent,
      voornaam,
      achternaam,
      email,
      telefoon,
      straatnaam,
      huisnr,
      postcode,
      woonplaats,
    } = data;

    if (!voornaam || !achternaam || !email) {
      return NextResponse.json(
        { error: "Verplichte velden ontbreken" },
        { status: 400 }
      );
    }

    const html = `
      <h2>Nieuwe NAW gegevens ingediend (via QR code)</h2>
      <p><strong>U bent:</strong> ${escapeHtml(ubent || "-")}</p>
      <p><strong>Naam:</strong> ${escapeHtml(voornaam)} ${escapeHtml(achternaam)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefoon:</strong> ${escapeHtml(telefoon || "-")}</p>
      <hr>
      <p><strong>Adres:</strong><br>
      ${escapeHtml(straatnaam || "-")} ${escapeHtml(huisnr || "")}<br>
      ${escapeHtml(postcode || "-")} ${escapeHtml(woonplaats || "-")}</p>
    `;

    const { error } = await getResend().emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Nieuwe NAW gegevens — ${voornaam} ${achternaam}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Versturen mislukt" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("NAW API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
