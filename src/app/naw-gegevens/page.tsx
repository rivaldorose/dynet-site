import type { Metadata } from "next";
import Image from "next/image";
import NawForm from "./NawForm";

export const metadata: Metadata = {
  title: "NAW Gegevens - Dynet Infratechniek",
  description: "Vul uw NAW gegevens in voor aansluiting op het glasvezelnetwerk.",
};

export default function NawGegevensPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-end pb-12">
        <Image
          src="/images/glas3.webp"
          alt="NAW Gegevens"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl md:text-[45px] font-bold text-white">
            Uw NAW-gegevens
          </h1>
          <p className="text-gray-200 mt-3">
            Om u aan te kunnen sluiten op het glasvezelnetwerk hebben wij uw gegevens nodig.
          </p>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Form */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-6">
                Vul hier uw NAW gegevens in
              </h2>
              <Image
                src="/images/bewoner.jpg"
                alt="Bewoner"
                width={535}
                height={301}
                className="rounded-lg shadow-lg w-full mb-8"
              />
              <NawForm />
            </div>

            {/* Right - Contact info */}
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">
                Contact met Dynet
              </h3>
              <p className="text-gray-600 mb-6">
                Heeft u in de tussentijd nog vragen? U kunt ons gemakkelijk
                bereiken via telefoon tijdens kantooruren of via e-mail. Wij
                staan klaar om al uw vragen te beantwoorden.
              </p>
              <Image
                src="/images/klantenservice2.jpg"
                alt="Klantenservice"
                width={535}
                height={301}
                className="rounded-lg shadow-lg w-full mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-navy rounded-lg p-6 text-white">
                  <h4 className="font-bold mb-3">Telefoon</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    U kunt ons telefonisch bereiken
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
                    Uw kunt ons ook een e-mail sturen naar
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
