import { NextResponse } from "next/server";
import { getResend, EMAIL_TO, EMAIL_FROM } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const data = await request.json();
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
      <p><strong>Onderwerpen:</strong> ${onderwerpen?.join(", ") || "-"}</p>
      <p><strong>Bedrijfsnaam:</strong> ${bedrijfsnaam || "-"}</p>
      <p><strong>Naam:</strong> ${voornaam} ${achternaam}</p>
      <p><strong>Telefoon:</strong> ${telefoon || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr>
      <p><strong>Vraag:</strong></p>
      <p>${vraag.replace(/\n/g, "<br>")}</p>
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
