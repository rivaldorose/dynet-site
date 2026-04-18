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
      // Bot — fake success, log niks en verstuur niks
      return NextResponse.json({ success: true });
    }

    const {
      bedrijfsnaam,
      voornaam,
      achternaam,
      telefoon,
      email,
      vraag,
      onderwerpen,
    } = data;

    if (!voornaam || !achternaam || !email || !vraag) {
      return NextResponse.json(
        { error: "Verplichte velden ontbreken" },
        { status: 400 }
      );
    }

    const html = `
      <h2>Nieuw contactformulier ingediend</h2>
      <p><strong>Onderwerpen:</strong> ${escapeHtml(onderwerpen?.join(", ") || "-")}</p>
      <p><strong>Bedrijfsnaam:</strong> ${escapeHtml(bedrijfsnaam || "-")}</p>
      <p><strong>Naam:</strong> ${escapeHtml(voornaam)} ${escapeHtml(achternaam)}</p>
      <p><strong>Telefoon:</strong> ${escapeHtml(telefoon || "-")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <hr>
      <p><strong>Vraag:</strong></p>
      <p>${escapeHtml(vraag).replace(/\n/g, "<br>")}</p>
    `;

    const { error } = await getResend().emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Nieuw contactformulier — ${voornaam} ${achternaam}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Versturen mislukt" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
