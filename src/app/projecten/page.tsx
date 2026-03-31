import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projecten - Dynet Electric",
  description:
    "Bekijk onze projecten op het gebied van elektrische laadoplossingen, LED lichttechniek en glasvezel infrastructuur.",
};

const projects = [
  {
    title: "Elektrische Laadinfrastructuur",
    description:
      "Leveren, plaatsen en gebruiksklaar maken van elektrische laadstations voor bedrijventerreinen en parkeergarages door heel Nederland.",
    image: "/images/services/emobility.webp",
    category: "E-Mobiliteit",
  },
  {
    title: "Openbare LED Verlichting",
    description:
      "Vervanging van bestaande straatverlichting door energie zuinige LED armaturen. Inclusief conditie-bepaling, installatie en onderhoud.",
    image: "/images/services/hoogwerker.webp",
    category: "Lichttechniek",
  },
  {
    title: "Elektrische Installaties",
    description:
      "Complete elektrische installaties voor zowel de particuliere als zakelijke markt, conform NEN 1010 en NEN 3410 voorwaarden.",
    image: "/images/services/electriciteit.webp",
    category: "Installaties",
  },
  {
    title: "Glasvezel Infrastructuur",
    description:
      "Aanleg van glasvezelnetwerken voor snelle en betrouwbare connectiviteit. Van woningen tot bedrijventerreinen.",
    image: "/images/services/glasvezel.webp",
    category: "Glasvezel",
  },
  {
    title: "Hybride Energieoplossingen",
    description:
      "Implementatie van hybride energiesystemen die traditionele en duurzame energiebronnen combineren voor optimale efficiëntie.",
    image: "/images/services/hybride.webp",
    category: "Energie",
  },
  {
    title: "All-Electric Woningen",
    description:
      "Volledige elektrificatie van woningen als onderdeel van de energietransitie naar een fossielbrandstof vrij Nederland.",
    image: "/images/allelectric.jpg",
    category: "Woningen",
  },
];

export default function ProjectenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="Projecten Dynet Electric"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Projecten
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            Een overzicht van onze werkzaamheden en specialisaties
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-gray-100"
              >
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-dark mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Heeft u een project voor ons?
          </h2>
          <p className="text-gray-300 mb-8">
            Neem contact met ons op om uw project te bespreken. Wij denken graag
            met u mee.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-green text-white rounded-lg font-semibold hover:bg-green-light transition-colors text-lg"
          >
            Contact opnemen
          </Link>
        </div>
      </section>
    </>
  );
}
