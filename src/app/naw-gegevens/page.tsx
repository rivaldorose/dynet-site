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
          src="/images/hero.jpg"
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

      {/* Form */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-xl font-bold text-navy mb-6">
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
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
