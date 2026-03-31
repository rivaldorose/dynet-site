import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedankt - Dynet Electric",
};

export default function BedanktPage() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Bedankt!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Wij hebben uw aanvraag goed ontvangen. Wij nemen zo snel mogelijk contact met u op.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3.5 bg-green text-white rounded-lg font-semibold hover:bg-green-light transition-colors"
        >
          Terug naar de homepage
        </Link>
      </div>
    </section>
  );
}
