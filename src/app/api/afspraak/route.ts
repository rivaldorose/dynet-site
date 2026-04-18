import { NextResponse } from "next/server";
import { getResend, EMAIL_FROM } from "@/lib/resend";
import {
  escapeHtml,
  checkRateLimit,
  getClientIp,
  isHoneypotFilled,
  isAllowedOrigin,
  isValidEmail,
  isValidText,
  isValidPhone,
} from "@/lib/security";

const AFSPRAAK_EMAIL_TO = process.env.EMAIL_TO_AFSPRAAK || "bevestigingen@dynet.nl";

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
      eigenaar,
      voornaam,
      achternaam,
      email,
      telefoon,
      straatnaam,
      huisnr,
      postcode,
      woonplaats,
      bevestiging,
    } = data;

    if (!isValidText(voornaam, 100) || !isValidText(achternaam, 100)) {
      return NextResponse.json({ error: "Ongeldige naam" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Ongeldig e-mailadres" }, { status: 400 });
    }
    if (!isValidPhone(telefoon)) {
      return NextResponse.json({ error: "Ongeldig telefoonnummer" }, { status: 400 });
    }
    if (bevestiging !== "Ja" && bevestiging !== "Nee") {
      return NextResponse.json({ error: "Bevestiging is verplicht" }, { status: 400 });
    }

    const bevestigingKleur = bevestiging === "Ja" ? "#2E9F48" : "#c00";

    const html = `
      <h2>Nieuwe afspraak aanvraag</h2>
      <p style="font-size: 18px;"><strong>Bevestiging afspraak:</strong>
        <span style="color: ${bevestigingKleur}; font-weight: bold;">${escapeHtml(bevestiging)}</span>
      </p>
      <hr>
      <p><strong>Eigenaar/Huurder:</strong> ${escapeHtml(eigenaar || "-")}</p>
      <p><strong>Naam:</strong> ${escapeHtml(voornaam)} ${escapeHtml(achternaam)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefoon:</strong> ${escapeHtml(telefoon)}</p>
      <hr>
      <p><strong>Adres:</strong><br>
      ${escapeHtml(straatnaam || "-")} ${escapeHtml(huisnr || "")}<br>
      ${escapeHtml(postcode || "-")} ${escapeHtml(woonplaats || "-")}</p>
    `;

    const { error } = await getResend().emails.send({
      from: EMAIL_FROM,
      to: AFSPRAAK_EMAIL_TO,
      replyTo: email,
      subject: `Afspraak ${bevestiging === "Ja" ? "BEVESTIGD" : "GEWEIGERD"} — ${voornaam} ${achternaam}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Versturen mislukt" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Afspraak API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
