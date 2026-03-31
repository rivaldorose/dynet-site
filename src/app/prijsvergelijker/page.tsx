import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prijsvergelijker - Dynet Electric",
  description:
    "Vergelijk prijzen van energieoplossingen en ontdek de beste optie voor uw situatie.",
};

const energyTypes = [
  {
    title: "All-Electric",
    description:
      "Volledig elektrisch wonen. Geen gasaansluiting meer nodig. Duurzaam en toekomstbestendig.",
    image: "/images/allelectric.jpg",
    features: [
      "Geen gaskosten",
      "Lagere energiekosten",
      "Duurzaam en milieuvriendelijk",
      "Toekomstbestendig",
    ],
    highlight: true,
  },
  {
    title: "Hybride",
    description:
      "Combinatie van gas en elektriciteit. Een geleidelijke overgang naar volledig elektrisch.",
    image: "/images/services/hybride.webp",
    features: [
      "Geleidelijke overgang",
      "Lagere investering",
      "Flexibel in gebruik",
      "Geschikt voor oudere woningen",
    ],
    highlight: false,
  },
  {
    title: "Traditioneel (Gas)",
    description:
      "Traditionele gasaansluiting. Wordt op termijn uitgefaseerd in het kader van de energietransitie.",
    image: "/images/services/gas.webp",
    features: [
      "Bekende technologie",
      "Bestaande infrastructuur",
      "Wordt uitgefaseerd",
      "Hogere uitstoot CO2",
    ],
    highlight: false,
  },
];

export default function PrijsvergelijkerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="Prijsvergelijker"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Prijsvergelijker
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            Vergelijk energieoplossingen en ontdek wat het beste bij u past
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Welke oplossing past bij u?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              De energietransitie biedt diverse mogelijkheden. Vergelijk de
              opties en ontdek welke het beste aansluit bij uw situatie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {energyTypes.map((type) => (
              <div
                key={type.title}
                className={`rounded-xl overflow-hidden shadow-md border-2 transition-shadow hover:shadow-xl ${
                  type.highlight
                    ? "border-green"
                    : "border-gray-100"
                }`}
              >
                {type.highlight && (
                  <div className="bg-green text-white text-center py-2 text-sm font-semibold">
                    Aanbevolen
                  </div>
                )}
                <div className="h-48 relative">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-dark mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className={`w-4 h-4 shrink-0 ${
                            type.highlight ? "text-green" : "text-gray-400"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Wilt u weten welke oplossing het beste bij uw situatie past? Neem
              contact met ons op voor een vrijblijvend adviesgesprek.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-green text-white rounded-lg font-semibold hover:bg-green-light transition-colors text-lg"
            >
              Vrijblijvend advies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
