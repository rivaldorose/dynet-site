import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prijsvergelijker - Dynet Infratechniek",
  description:
    "Vergelijk prijzen voor glasvezelaansluitingen en energieoplossingen.",
};

export default function PrijsvergelijkerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="Prijsvergelijker"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-3xl md:text-[45px] font-bold text-white mb-8">
            Prijsvergelijker
          </h1>

          <div className="bg-white/95 rounded-lg p-8 max-w-2xl mx-auto text-left mb-8">
            <p className="text-gray-600 text-center mb-6">
              Wilt u weten wat de kosten zijn voor een glasvezelaansluiting of
              energieoplossing? Neem contact met ons op voor een vrijblijvende
              offerte op maat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-cream rounded-lg">
                <p className="text-2xl font-bold text-green">FttH</p>
                <p className="text-sm text-gray-600 mt-1">Glasvezel</p>
              </div>
              <div className="p-4 bg-cream rounded-lg">
                <p className="text-2xl font-bold text-green">Koper</p>
                <p className="text-sm text-gray-600 mt-1">Coax & telefoon</p>
              </div>
              <div className="p-4 bg-cream rounded-lg">
                <p className="text-2xl font-bold text-green">HFC</p>
                <p className="text-sm text-gray-600 mt-1">Hybride netwerk</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-[35px] font-bold text-white mb-6">
            Vragen?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-green text-white rounded font-medium hover:bg-green-light transition-colors text-lg"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
