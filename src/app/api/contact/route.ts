import { NextResponse } from "next/server";
import { getResend, EMAIL_TO, EMAIL_FROM } from "@/lib/resend";
import {
  escapeHtml,
  checkRateLimit,
  getClientIp,
  isHoneypotFilled,
  isAllowedOrigin,
  isValidEmail,
  isValidText,
  isValidLongText,
  isValidPhone,
} from "@/lib/security";

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

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
      bedrijfsnaam,
      voornaam,
      achternaam,
      telefoon,
      email,
      vraag,
      onderwerpen,
    } = data;

    if (!isValidText(voornaam, 100) || !isValidText(achternaam, 100)) {
      return NextResponse.json({ error: "Ongeldige naam" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Ongeldig e-mailadres" }, { status: 400 });
    }
    if (telefoon && !isValidPhone(telefoon)) {
      return NextResponse.json({ error: "Ongeldig telefoonnummer" }, { status: 400 });
    }
    if (!isValidLongText(vraag, 5000)) {
      return NextResponse.json({ error: "Ongeldige vraag" }, { status: 400 });
    }
    if (bedrijfsnaam && typeof bedrijfsnaam === "string" && bedrijfsnaam.length > 200) {
      return NextResponse.json({ error: "Bedrijfsnaam te lang" }, { status: 400 });
    }

    const html = `
      <h2>Nieuw contactformulier ingediend</h2>
      <p><strong>Onderwerpen:</strong> ${escapeHtml(Array.isArray(onderwerpen) ? onderwerpen.join(", ") : "-")}</p>
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
