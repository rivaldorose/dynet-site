import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact - Dynet Electric",
  description:
    "Neem contact op met Dynet Electric. Bel 085-2224002 of mail info@dynet.nl",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center">
        <Image
          src="/images/hero-contact.jpg"
          alt="Contact Dynet Electric"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact</h1>
          <p className="text-gray-200 mt-4 text-lg">
            Neem eenvoudig contact op met Dynet Infratechniek
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy-dark mb-8">
                Contactgegevens
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-dark">
                      Telefoon
                    </h3>
                    <p className="text-gray-600 mt-1">
                      U kunt ons telefonisch bereiken tijdens kantooruren op
                    </p>
                    <a
                      href="tel:0852224002"
                      className="text-green font-semibold text-lg hover:text-green-dark transition-colors"
                    >
                      085-2224002
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-dark">
                      E-mail
                    </h3>
                    <p className="text-gray-600 mt-1">
                      U kunt een e-mail sturen naar
                    </p>
                    <a
                      href="mailto:info@dynet.nl"
                      className="text-green font-semibold text-lg hover:text-green-dark transition-colors"
                    >
                      info@dynet.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-dark">
                      Bezoek ons
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Keurmeesterstraat 53
                      <br />
                      1187 ZX Amstelveen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-dark">
                      Openingstijden
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Maandag t/m vrijdag
                      <br />
                      08:00 - 17:30 uur
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-gray-600 mb-4">
                  U kunt bij ons terecht voor:
                </p>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Algemene vragen",
                    "Facturatie",
                    "Project aanvragen",
                    "Vacatures",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-green shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy-dark mb-8">
                Contact met Dynet Infratechniek
              </h2>
              <p className="text-gray-600 mb-8">
                Wij streven ernaar om binnen 48 uur te reageren op uw e-mail of
                contactformulier, met uitzondering van weekenden en feestdagen.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
        <iframe
          src="https://maps.google.com/maps?q=keurmeesterstraat%2053%2C%201187%20ZX%2C%20Amstelveen&t=m&z=14&output=embed&iwloc=near"
          title="Dynet Electric - Keurmeesterstraat 53, Amstelveen"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </section>
    </>
  );
}
