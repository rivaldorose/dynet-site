import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedankt voor uw bericht - Dynet Electric",
};

export default function BedanktContactPage() {
  return (
    <section className="py-32 bg-cream">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Bedankt voor uw bericht!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Wij streven ernaar om binnen 48 uur te reageren, met uitzondering van weekenden en feestdagen.
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
