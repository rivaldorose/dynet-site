import type { Metadata } from "next";
import Image from "next/image";
import AfspraakForm from "./AfspraakForm";

export const metadata: Metadata = {
  title: "Afspraak maken - Dynet Infratechniek",
  description:
    "Maak een afspraak met Dynet voor aansluiting op het glasvezelnetwerk.",
};

export default function AfspraakMakenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-end pb-12">
        <Image
          src="/images/hero.jpg"
          alt="Afspraak maken"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl md:text-[45px] font-bold text-white">
            Afspraak maken
          </h1>
          <p className="text-gray-200 mt-3">
            Om u aan te kunnen sluiten op het glasvezelnetwerk hebben wij uw
            gegevens nodig.
          </p>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Form */}
            <div>
              <h3 className="text-xl font-bold text-navy mb-6">
                Afspraak maken Dynet
              </h3>
              <AfspraakForm />
            </div>

            {/* Right - Contact info */}
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">
                Contact met Dynet
              </h3>
              <p className="text-gray-600 mb-6">
                Heeft u vragen? U kunt ons gemakkelijk bereiken via telefoon of
                e-mail.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-navy rounded-lg p-6 text-white">
                  <h4 className="font-bold mb-3">Telefoon</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    U kunt ons telefonisch bereiken tijdens kantooruren op
                  </p>
                  <a
                    href="tel:0852224002"
                    className="text-green font-semibold hover:underline"
                  >
                    085-2224002
                  </a>
                </div>

                <div className="bg-navy rounded-lg p-6 text-white">
                  <h4 className="font-bold mb-3">E-mail</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    U kunt ons ook een e-mail sturen naar
                  </p>
                  <a
                    href="mailto:info@dynet.nl"
                    className="text-green font-semibold hover:underline"
                  >
                    info@dynet.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
