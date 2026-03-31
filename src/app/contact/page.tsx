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
      <section className="relative h-[300px] flex items-end pb-12">
        <Image
          src="/images/klantenservice.jpg"
          alt="Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-cream/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl md:text-[45px] font-bold text-navy">
            Contact
          </h1>
        </div>
      </section>

      {/* 4 Contact Info Cards - dark navy */}
      <section className="py-8 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Telefoon</h3>
              <p className="text-gray-300 text-sm">
                U kunt ons telefonisch bereiken tijdens kantooruren op
              </p>
              <a
                href="tel:0852224002"
                className="text-green font-semibold mt-2 inline-block hover:underline"
              >
                085-2224002
              </a>
            </div>

            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-3">E-mail</h3>
              <p className="text-gray-300 text-sm">
                U kunt een e-mail sturen naar
              </p>
              <a
                href="mailto:info@dynet.nl"
                className="text-green font-semibold mt-2 inline-block hover:underline"
              >
                info@dynet.nl
              </a>
            </div>

            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Bezoek ons</h3>
              <p className="text-gray-300 text-sm">
                U vindt ons kantoor aan de Keurmeesterstraat 53, 1187ZX
                Amstelveen
              </p>
            </div>

            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Openingstijden</h3>
              <p className="text-gray-300 text-sm">
                Wij te bereiken maandag t/m vrijdag tijdens kantooruren. Van
                08.00 tot 17.30 uur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info + text */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-navy mb-4">
            Contact met Dynet Infratechniek
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            U kunt eenvoudig contact opnemen met Dynet Infratechniek via
            telefoon, e-mail of door het invullen van het contactformulier. Ons
            toegewijde team staat klaar om al uw vragen te beantwoorden. Bij ons
            kunt u terecht voor diverse onderwerpen, waaronder:
          </p>
          <ul className="space-y-1 text-gray-600 mb-6">
            {["Algemene vragen", "Facturatie", "Project aanvragen", "Vacatures"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green rounded-full shrink-0" />
                  {item}
                </li>
              )
            )}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Indien u liever telefonisch of per e-mail contact met ons wilt
            opnemen, vindt u hieronder onze contactgegevens. Als u een afspraak
            op ons kantoor wilt plannen, raden wij u aan om vooraf contact met
            ons op te nemen via het contactformulier. Wij streven ernaar om
            binnen 48 uur te reageren op uw e-mail of contactformulier, met
            uitzondering van weekenden en feestdagen.
          </p>
        </div>
      </section>

      {/* Map + Form side by side */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=keurmeesterstraat%2053%2C%201187%20ZX%2C%20Amstelveen&t=m&z=14&output=embed&iwloc=near"
                title="Dynet - Keurmeesterstraat 53, Amstelveen"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-6">
                Contactformulier
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
