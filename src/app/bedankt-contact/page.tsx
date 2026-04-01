import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedankt voor uw bericht - Dynet Infratechniek",
};

export default function BedanktContactPage() {
  return (
    <>
      <section className="py-32 bg-cream">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Bedankt</h1>
          <p className="text-gray-600 text-lg mb-8">
            Wij hebben uw formulier goed ontvangen. Wij streven ernaar om binnen 48 uur contact met u telefonisch of per e-mail contact op te nemen, met uitzondering van weekenden en feestdagen.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3.5 bg-green text-white rounded-lg font-semibold hover:bg-green-light transition-colors"
          >
            Terug naar de homepage
          </Link>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-navy text-center mb-8">
            Toch nog vragen? Neem contact met ons op
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Telefoon</h3>
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
              <h3 className="font-bold text-lg mb-3">E-mail</h3>
              <p className="text-gray-300 text-sm mb-2">
                Uw kunt een e-mail sturen naar
              </p>
              <a
                href="mailto:info@dynet.nl"
                className="text-white font-semibold hover:underline"
              >
                info@dynet.nl
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
