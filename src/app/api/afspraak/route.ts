import { NextResponse } from "next/server";
import { getResend, EMAIL_TO, EMAIL_FROM } from "@/lib/resend";

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
    } = data;

    if (!voornaam || !achternaam || !email || !telefoon) {
      return NextResponse.json(
        { error: "Verplichte velden ontbreken" },
        { status: 400 }
      );
    }

    const html = `
      <h2>Nieuwe afspraak aanvraag</h2>
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
      to: EMAIL_TO,
      replyTo: email,
      subject: `Nieuwe afspraak aanvraag — ${voornaam} ${achternaam}`,
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
