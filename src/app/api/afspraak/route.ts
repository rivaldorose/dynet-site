import { NextResponse } from "next/server";
import { getResend, EMAIL_FROM } from "@/lib/resend";

const AFSPRAAK_EMAIL_TO = process.env.EMAIL_TO_AFSPRAAK || "bevestigingen@dynet.nl";

export async function POST(request: Request) {
  try {
    const data = await request.json();
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

    if (!voornaam || !achternaam || !email || !telefoon) {
      return NextResponse.json(
        { error: "Verplichte velden ontbreken" },
        { status: 400 }
      );
    }

    const bevestigingKleur = bevestiging === "Ja" ? "#2E9F48" : "#c00";

    const html = `
      <h2>Nieuwe afspraak aanvraag</h2>
      <p style="font-size: 18px;"><strong>Bevestiging afspraak:</strong>
        <span style="color: ${bevestigingKleur}; font-weight: bold;">${bevestiging || "-"}</span>
      </p>
      <hr>
      <p><strong>Eigenaar/Huurder:</strong> ${eigenaar || "-"}</p>
      <p><strong>Naam:</strong> ${voornaam} ${achternaam}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefoon:</strong> ${telefoon}</p>
      <hr>
      <p><strong>Adres:</strong><br>
      ${straatnaam || "-"} ${huisnr || ""}<br>
      ${postcode || "-"} ${woonplaats || "-"}</p>
    `;

    const { error } = await getResend().emails.send({
      from: EMAIL_FROM,
      to: AFSPRAAK_EMAIL_TO,
      replyTo: email,
      subject: `Afspraak ${bevestiging === "Ja" ? "BEVESTIGD" : bevestiging === "Nee" ? "GEWEIGERD" : "aanvraag"} — ${voornaam} ${achternaam}`,
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
