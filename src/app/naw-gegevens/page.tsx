import type { Metadata } from "next";
import Image from "next/image";
import NawForm from "./NawForm";

export const metadata: Metadata = {
  title: "NAW Gegevens - Dynet Electric",
  description: "Vul uw NAW gegevens in voor aansluiting op het glasvezelnetwerk.",
};

export default function NawGegevensPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center">
        <Image
          src="/images/glasvezel-hero.jpg"
          alt="NAW Gegevens"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Uw NAW-gegevens
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            Om u aan te kunnen sluiten op het glasvezelnetwerk hebben wij uw gegevens nodig
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-navy-dark mb-6">
                Vul hier NAW gegevens in
              </h2>
              <NawForm />
            </div>
            <div className="md:col-span-2">
              <Image
                src="/images/bewoner.jpg"
                alt="Bewoner"
                width={535}
                height={301}
                className="rounded-xl shadow-lg w-full"
              />
              <div className="mt-6 bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-navy-dark mb-2">
                  Waarom uw gegevens?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Wij gebruiken uw gegevens uitsluitend om u aan te sluiten op
                  het glasvezelnetwerk. Uw gegevens worden vertrouwelijk
                  behandeld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
