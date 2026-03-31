import type { Metadata } from "next";
import Image from "next/image";
import AfspraakForm from "./AfspraakForm";

export const metadata: Metadata = {
  title: "Afspraak maken - Dynet Electric",
  description:
    "Maak een afspraak met Dynet Electric voor een vrijblijvend gesprek.",
};

export default function AfspraakMakenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center">
        <Image
          src="/images/glasvezel-hero.jpg"
          alt="Afspraak maken"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Afspraak maken
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            Plan een afspraak met ons team
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-navy-dark mb-4">
                Afspraak maken Dynet
              </h2>
              <p className="text-gray-600 mb-6">
                Om u aan te kunnen sluiten op het glasvezelnetwerk hebben wij uw
                gegevens nodig.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-navy-dark">
                  Contact met Dynet
                </h3>
                <p className="text-gray-600 text-sm">
                  Heeft u vragen? U kunt ons gemakkelijk bereiken via:
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href="tel:0852224002"
                    className="flex items-center gap-2 text-green hover:text-green-dark transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    085-2224002
                  </a>
                  <a
                    href="mailto:info@dynet.nl"
                    className="flex items-center gap-2 text-green hover:text-green-dark transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@dynet.nl
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <AfspraakForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
