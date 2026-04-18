import { NextResponse } from "next/server";
import { getResend, EMAIL_TO, EMAIL_FROM } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const data = await request.json();
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
      <p><strong>U bent:</strong> ${ubent || "-"}</p>
      <p><strong>Naam:</strong> ${voornaam} ${achternaam}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefoon:</strong> ${telefoon || "-"}</p>
      <hr>
      <p><strong>Adres:</strong><br>
      ${straatnaam || "-"} ${huisnr || ""}<br>
      ${postcode || "-"} ${woonplaats || "-"}</p>
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
