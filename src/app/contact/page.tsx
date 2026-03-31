import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact - Dynet Infratechniek",
  description:
    "Neem contact op met Dynet Infratechniek. Bel 085-2224002 of mail info@dynet.nl",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero with background image */}
      <section
        className="relative flex items-center justify-center"
        style={{
          paddingTop: 230,
          paddingBottom: 200,
          borderTop: "2px solid #2E9F48",
          borderBottom: "4px solid #2E9F48",
        }}
      >
        <Image
          src="/images/klantenservice2.jpg"
          alt="Contact"
          fill
          className="object-cover"
          style={{ objectPosition: "center center" }}
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "#FDFBF2", opacity: 0.29 }} />
        <div className="relative z-10 text-center w-full">
          <h1
            style={{
              fontFamily: "'PT Sans Caption', sans-serif",
              fontWeight: 700,
              fontSize: 45,
              color: "#11133D",
            }}
          >
            Contact
          </h1>
        </div>
      </section>

      {/* 4 Contact Info Cards */}
      <section style={{ backgroundColor: "#FDFBF2" }}>
        <div
          className="mx-auto flex flex-col sm:flex-row"
          style={{
            maxWidth: 1170,
            marginTop: 5,
            marginBottom: 50,
            gap: 10,
            padding: "0 3px",
          }}
        >
          {[
            {
              title: "Telefoon",
              icon: (
                <svg style={{ width: 30, height: 30 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              ),
              content: (
                <p style={{ fontFamily: "'PT Sans', sans-serif", fontWeight: 500, fontSize: 16, color: "#FFFFFF" }}>
                  U kunt ons telefonisch bereiken tijdens kantooruren op<br />
                  <a href="tel:0852224002" style={{ color: "#FFFFFF" }}>085-2224002</a>
                </p>
              ),
            },
            {
              title: "E-mail",
              icon: (
                <svg style={{ width: 30, height: 30 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
              content: (
                <p style={{ fontFamily: "'PT Sans', sans-serif", fontWeight: 500, fontSize: 16, color: "#FFFFFF" }}>
                  Uw kunt een e-mail sturen naar<br />
                  <strong><a href="mailto:info@dynet.nl" style={{ color: "#FFFFFF" }}>info@dynet.nl</a></strong>
                </p>
              ),
            },
            {
              title: "Bezoek ons",
              icon: (
                <svg style={{ width: 30, height: 30 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              ),
              content: (
                <p style={{ fontFamily: "'PT Sans', sans-serif", fontWeight: 500, fontSize: 16, color: "#FFFFFF" }}>
                  U vindt ons kantoor aan de Keurmeesterstraat 53, 1187ZX Amstelveen
                </p>
              ),
            },
            {
              title: "Openingstijden",
              icon: (
                <svg style={{ width: 30, height: 30 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              ),
              content: (
                <p style={{ fontFamily: "'PT Sans', sans-serif", fontWeight: 500, fontSize: 16, color: "#FFFFFF" }}>
                  Wij te bereiken maandag t/m vrijdag tijdens kantooruren. Van 08.00 tot 17.30 uur.
                </p>
              ),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex-1"
              style={{
                backgroundColor: "#11133D",
                borderRadius: 5,
                border: "3px solid #2E9F48",
                padding: 20,
                marginRight: 10,
                marginBottom: 20,
              }}
            >
              <h3
                style={{
                  fontFamily: "'PT Sans Caption', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#FFFFFF",
                  textAlign: "center",
                  marginBottom: 12,
                }}
              >
                {card.title}
              </h3>
              <div className="flex justify-center" style={{ color: "#FFFFFF", marginBottom: 12 }}>
                {card.icon}
              </div>
              {card.content}
            </div>
          ))}
        </div>
      </section>

      {/* Contact info + icon box */}
      <section style={{ backgroundColor: "#FDFBF2", padding: "20px 0" }}>
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <div className="icon-box-framed" style={{ marginBottom: 16, justifyContent: "center" }}>
            <div className="icon-wrap" style={{ borderColor: "#11133D", color: "#11133D" }}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontWeight: 600,
                fontSize: 21,
                color: "#11133D",
                margin: 0,
              }}
            >
              Contact met Dynet Infratechniek
            </h3>
          </div>

          <div className="mx-auto" style={{ width: "90%" }}>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              U kunt eenvoudig contact opnemen met Dynet Infratechniek via
              telefoon, e-mail of door het invullen van het contactformulier naast
              deze tekst. Ons toegewijde team staat klaar om al uw vragen te
              beantwoorden. Bij ons kunt u terecht voor diverse onderwerpen,
              waaronder:
            </p>
          </div>

          {/* Inline icon list */}
          <div className="flex flex-wrap gap-4 justify-center" style={{ marginBottom: 16 }}>
            {["Algemene vragen", "Facturatie", "Project aanvragen", "Vacatures"].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'PT Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  color: "#000000",
                }}
              >
                <svg style={{ width: 14, height: 14, color: "#11133D" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>

          <div className="mx-auto" style={{ width: "75%", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
              }}
            >
              Indien u liever telefonisch of per e-mail contact met ons wilt
              opnemen, vindt u hieronder onze contactgegevens. Als u een afspraak
              op ons kantoor wilt plannen, raden wij u aan om vooraf contact met
              ons op te nemen via het contactformulier. Wij streven ernaar om
              binnen 48 uur te reageren op uw e-mail of contactformulier, met
              uitzondering van weekenden en feestdagen.
            </p>
          </div>
        </div>
      </section>

      {/* Map + Form side by side */}
      <section
        style={{
          backgroundColor: "#FDFBF2",
          borderBottom: "4px solid #2E9F48",
          padding: "40px 0 40px 55px",
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row gap-8"
          style={{ maxWidth: 1300 }}
        >
          {/* Left: Map */}
          <div className="md:w-1/2">
            <iframe
              src="https://maps.google.com/maps?q=keurmeesterstraat%2053%2C%201187%20ZX%2C%20Amstelveen&t=m&z=14&output=embed&iwloc=near"
              title="Dynet - Keurmeesterstraat 53, Amstelveen"
              style={{ width: "100%", height: 493, border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Right: Contact Form */}
          <div
            className="md:w-1/2"
            style={{
              backgroundColor: "#11133D",
              padding: 30,
              borderRadius: 4,
            }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
