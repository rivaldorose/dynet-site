import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="Dynet Infratechniek"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-[57px] font-bold text-white mb-4 leading-tight">
              DYNET INFRATECHNIEK
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              Specialist in het aanleggen van glas en koperaansluitingen.
              <br />
              Wij verbinden centrum gebieden en woonwijken doormiddel van
              glasvezel
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/prijsvergelijker"
                className="px-6 py-3 bg-green text-white rounded font-medium hover:bg-green-light transition-colors"
              >
                Vergelijk uw prijzen
              </Link>
              <Link
                href="/afspraak-maken"
                className="px-6 py-3 border-2 border-white text-white rounded font-medium hover:bg-white/10 transition-colors"
              >
                Maak een afspraak
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Over ons Section */}
      <section id="overons" className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-6">
                Wij leggen de verbinding van morgen
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dynet is een vooraanstaand Nederlands bedrijf dat gespecialiseerd
                is in het aanleggen van glasvezelverbindingen. Onze focus ligt
                voornamelijk op het aansluiten van centrumgebieden en
                woonwijken, waarbij we gebruikmaken van de Fiber-to-the-Home
                technologie. Daarnaast zorgen we er doorgaans ook voor dat
                zakelijke panden binnen het gebied worden aangesloten op ons
                netwerk. Onze missie is om heel Nederland te voorzien van snelle en
                betrouwbare verbindingen. We zijn van mening dat iedereen recht
                heeft op toegang tot glasvezel, daarom streven we ernaar om niet
                alleen centrumgebieden, maar ook buitengebieden aan te sluiten.
                Op deze manier willen we ervoor zorgen dat iedereen kan profiteren
                van de voordelen van glasvezel.
              </p>
              <Link
                href="/#overons"
                className="inline-block px-6 py-3 bg-green text-white rounded font-medium hover:bg-green-light transition-colors"
              >
                Over ons
              </Link>
            </div>
            <div>
              <Image
                src="/images/glasvezel-2.jpg"
                alt="Glasvezelaanleg"
                width={1080}
                height={675}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Duurzaamheid Section */}
      <section id="duurzaamheid" className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/bus-ev.jpg"
                alt="Dynet busje"
                width={1024}
                height={576}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-6">
                Dynet kiest voor duurzaamheid
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bij Dynet nemen we onze verantwoordelijkheid voor het milieu
                serieus. We zijn er trots op te kunnen zeggen dat ons pand
                volledig klimaatneutraal is. Dit betekent dat we geen negatieve
                invloed hebben op het klimaat met onze dagelijkse activiteiten.
                Daarnaast streven we ernaar om onze projecten zo dicht mogelijk
                bij huis te realiseren, zodat we niet ver hoeven te rijden. Dit
                vermindert niet alleen de CO2-uitstoot, maar bespaart ook tijd
                en kosten. Om ons personeel en materieel snel en effici&euml;nt te
                vervoeren, maken we gebruik van bakfietsen voor korte afstanden.
                Dit is niet alleen milieuvriendelijk, maar ook nog eens gezond
                en praktisch.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Maar dat is niet alles. Om onze impact op het milieu verder te
                verminderen, stimuleren we onze werknemers om steeds vaker te
                kiezen voor schonere auto&apos;s. We zijn zelfs bezig met het
                overstappen naar elektrische en hybride voertuigen. Op die manier
                minimaliseren we onze CO2-uitstoot en dragen we bij aan een
                duurzame toekomst. Ook streven we ernaar om ons afval zoveel
                mogelijk te hergebruiken en te recyclen. Op die manier voorkomen
                we dat we grondstoffen en materialen uitputten. We zijn continu
                op zoek naar innovatieve manieren om onze processen en
                werkzaamheden nog duurzamer te maken.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bij Dynet gaan we verder dan alleen zorgen voor tevreden klanten.
                We zetten ons in voor een groenere wereld en dragen ons steentje
                bij aan het behoud van onze planeet.
              </p>
              <Link
                href="/#duurzaamheid"
                className="inline-block px-6 py-3 bg-green text-white rounded font-medium hover:bg-green-light transition-colors"
              >
                Over duurzaamheid
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section id="diensten" className="py-16 md:py-24 bg-gray-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">
              Onze diensten
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dynet is een Nederlands bedrijf dat gespecialiseerd is in de aanleg
              van glasvezel aansluitingen. Of het nu om ontwerp, realisatie,
              onderhoud of demontage gaat, dankzij onze complete dienstverlening
              op het gebied van gestructureerde netwerkbekabeling staan we midden
              in het proces.
            </p>
            <Link
              href="/#diensten"
              className="inline-block mt-4 px-6 py-3 bg-green text-white rounded font-medium hover:bg-green-light transition-colors"
            >
              Meer over onze diensten
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Civiele Werkzaamheden",
                desc: "Wij voeren alle graaf- en plaatsingswerkzaamheden uit om de o.a. kabels te kunnen leggen voor o.a glasvezelaanslutingen.",
              },
              {
                title: "Kopertechniek",
                desc: "Wij verzorgen de aanleg en installatie van koperen leidingen voor o.a de ouderwetse coax-aansluitng en telefoonaansluitingen.",
              },
              {
                title: "HFC-techniek",
                desc: "HFC is een netwerk met een combinatie van glasvezel en coax. Bij een HFC-netwerk zijn de core-verbindingen van glasvezelkabels.",
              },
              {
                title: "Mobiele techniek",
                desc: "Wij verzorgen de aanleg en installatie van mobiele netwerken . Denk aan aanslutingen en masten in binnen - en buitengebieden.",
              },
              {
                title: "Glasvezeltechniek",
                desc: "Glasvezel is vezel van glas die zo dun is als een haar.Door deze vezel worden signalen en data geschoten met de snelheid van het licht.",
              },
              {
                title: "Preventief en correctief onderhoud",
                desc: "Voor een continue en betrouwbare werking van het netwerk controleren aanslutingen, repareren en vervangen wij kabels waar nodig is.",
              },
            ].map((dienst) => (
              <div
                key={dienst.title}
                className="bg-cream rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-bold text-navy mb-3">
                  {dienst.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dienst.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projecten Section */}
      <section id="projecten" className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-6">
                Onze projecten
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dynet is gespecialiseerd in de aanleg van glasvezel, mobiele
                aanslutingen binnen Nederland Wij richten vooral op het
                aansluiten van centrumgebieden en woonwijken en niet te vergeten
                zakelijke panden. Het Dynet netwerk wordt steeds groter,
                jaarlijks komen hier honderden kilomters bij.
              </p>
              <ul className="space-y-2 text-gray-600">
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
                ].map((city) => (
                  <li key={city} className="flex items-center gap-2">
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
                  </li>
                ))}
              </ul>
              <Link
                href="/projecten"
                className="inline-block mt-6 px-6 py-3 bg-green text-white rounded font-medium hover:bg-green-light transition-colors"
              >
                Meer over onze projecten
              </Link>
            </div>
            <div>
              <Image
                src="/images/kaart-nederland.png"
                alt="Werkgebied Nederland"
                width={600}
                height={700}
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dark spacer */}
      <section className="py-12 bg-navy" />
    </>
  );
}
