import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projecten - Dynet Infratechniek",
  description:
    "Onze projecten op het gebied van glasvezel, infratechniek en elektrische installaties door heel Nederland.",
};

export default function ProjectenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-end pb-12">
        <Image
          src="/images/hero.jpg"
          alt="Projecten"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl md:text-[45px] font-bold text-white">
            Projecten
          </h1>
          <p className="text-gray-200 mt-3">
            Een overzicht van onze werkzaamheden en werkgebieden
          </p>
        </div>
      </section>

      {/* Project locations */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Onze werkgebieden
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dynet is gespecialiseerd in de aanleg van glasvezel, mobiele
                aanslutingen binnen Nederland Wij richten vooral op het
                aansluiten van centrumgebieden en woonwijken en niet te vergeten
                zakelijke panden. Het Dynet netwerk wordt steeds groter,
                jaarlijks komen hier honderden kilomters bij.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Amsterdam",
                  "Rotterdam",
                  "Utrecht",
                  "Wageningen",
                  "Zwolle",
                  "Drachten",
                  "Heerenveen",
                  "Winsum",
                  "Groningen",
                  "Rotterdam Maasvlakte",
                  "Zeist",
                  "Amstelveen",
                  "Surhuisterveen",
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-4 h-4 text-green shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/kaart-nederland.png"
                alt="Werkgebied Nederland"
                width={600}
                height={700}
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 bg-gray-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Onze specialisaties
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Glasvezel (FttH)",
                desc: "Fiber-to-the-Home aansluitingen voor woningen en bedrijven.",
                image: "/images/services/glasvezel.webp",
              },
              {
                title: "Elektrische Installaties",
                desc: "Complete elektrische installaties conform NEN 1010 en NEN 3410.",
                image: "/images/services/electriciteit.webp",
              },
              {
                title: "LED Lichttechniek",
                desc: "Vervangen en onderhouden van openbare verlichting met LED.",
                image: "/images/services/hoogwerker.webp",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-cream rounded-lg overflow-hidden shadow-sm"
              >
                <div className="h-48 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Heeft u een project voor ons?
          </h2>
          <p className="text-gray-300 mb-6">
            Neem contact met ons op om uw project te bespreken.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-green text-white rounded font-medium hover:bg-green-light transition-colors"
          >
            Contact opnemen
          </Link>
        </div>
      </section>
    </>
  );
}
