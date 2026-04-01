import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bedankt voor uw gegevens - Dynet Infratechniek",
};

export default function BedanktGegevensPage() {
  return (
    <>
      <section className="py-32 bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Bedankt</h1>
          <p className="text-gray-600 text-lg mb-8">
            Wij hebben uw gegevens goed ontvangen.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3.5 bg-green text-white rounded-lg font-semibold hover:bg-green-light transition-colors mb-10"
          >
            Terug naar de homepage
          </Link>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <Image
            src="/images/klantenservice.jpg"
            alt="Klantenservice"
            width={800}
            height={532}
            className="rounded-xl shadow-lg mx-auto mb-10"
          />
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p className="font-bold text-navy text-lg">Beste Bewoner,</p>
            <p>
              Bedankt dat je jouw gegevens met ons hebt gedeeld. We hebben alles goed ontvangen en nemen zo snel mogelijk contact met je op om een afspraak te maken. Heb je in de tussentijd nog vragen of specifieke voorkeuren voor een datum en tijd? Laat het ons gerust weten via info@dynet.nl of 085 222 4002 We kijken ernaar uit om je te spreken!
            </p>
            <p>Met vriendelijke groet,</p>
            <p className="font-bold text-navy">Het team van Dynet</p>
          </div>
        </div>
      </section>
    </>
  );
}
