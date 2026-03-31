import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Thin navy separator bar (no hero image) */}
      <section className="py-3 bg-navy" />

      {/* Over ons Section */}
      <section id="overons" className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* Broadcast/signal icon */}
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-navy">
                  Wij leggen de verbinding van morgen
                </h3>
              </div>
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
                className="inline-block px-6 py-3 bg-navy text-white rounded font-medium hover:bg-navy/80 transition-colors"
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
              <div className="flex items-center gap-3 mb-6">
                {/* Globe/earth icon */}
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-navy">
                  Dynet kiest voor duurzaamheid
                </h3>
              </div>
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
                className="inline-block px-6 py-3 bg-navy text-white rounded font-medium hover:bg-navy/80 transition-colors"
              >
                Over duurzaamheid
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section id="diensten" className="py-16 md:py-24 bg-cream">
        {/* Green/teal gradient separator line */}
        <div className="h-1 w-full bg-gradient-to-r from-green to-accent mb-16" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              {/* Gear/maintenance icon */}
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-navy">
                Onze diensten
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dynet is een Nederlands bedrijf dat gespecialiseerd is in de aanleg
              van glasvezel aansluitingen. Of het nu om ontwerp, realisatie,
              onderhoud of demontage gaat, dankzij onze complete dienstverlening
              op het gebied van gestructureerde netwerkbekabeling staan we midden
              in het proces.
            </p>
            <Link
              href="/#diensten"
              className="inline-block mt-4 px-6 py-3 bg-navy text-white rounded font-medium hover:bg-navy/80 transition-colors"
            >
              Meer over onze diensten
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Civiele Werkzaamheden",
                desc: "Wij voeren alle graaf- en plaatsingswerkzaamheden uit om de o.a. kabels te kunnen leggen voor o.a glasvezelaanslutingen.",
                icon: (
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                ),
              },
              {
                title: "Kopertechniek",
                desc: "Wij verzorgen de aanleg en installatie van koperen leidingen voor o.a de ouderwetse coax-aansluitng en telefoonaansluitingen.",
                icon: (
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.61 3.08a1 1 0 01-1.45-1.05l1.07-6.25-4.54-4.42a1 1 0 01.55-1.71l6.27-.91 2.8-5.69a1 1 0 011.8 0l2.8 5.69 6.27.91a1 1 0 01.55 1.71l-4.54 4.42 1.07 6.25a1 1 0 01-1.45 1.05L12 15.17z" />
                  </svg>
                ),
              },
              {
                title: "HFC-techniek",
                desc: "HFC is een netwerk met een combinatie van glasvezel en coax. Bij een HFC-netwerk zijn de core-verbindingen van glasvezelkabels.",
                icon: (
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75h.008v.008H12v-.008z" />
                  </svg>
                ),
              },
              {
                title: "Mobiele techniek",
                desc: "Wij verzorgen de aanleg en installatie van mobiele netwerken . Denk aan aanslutingen en masten in binnen - en buitengebieden.",
                icon: (
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                ),
              },
              {
                title: "Glasvezeltechniek",
                desc: "Glasvezel is vezel van glas die zo dun is als een haar.Door deze vezel worden signalen en data geschoten met de snelheid van het licht.",
                icon: (
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Preventief en correctief onderhoud",
                desc: "Voor een continue en betrouwbare werking van het netwerk controleren aanslutingen, repareren en vervangen wij kabels waar nodig is.",
                icon: (
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.61 3.08a1 1 0 01-1.45-1.05l1.07-6.25-4.54-4.42a1 1 0 01.55-1.71l6.27-.91 2.8-5.69a1 1 0 011.8 0l2.8 5.69 6.27.91a1 1 0 01.55 1.71l-4.54 4.42 1.07 6.25a1 1 0 01-1.45 1.05L12 15.17z" />
                  </svg>
                ),
              },
            ].map((dienst) => (
              <div
                key={dienst.title}
                className="border-2 border-gray-300 rounded-lg p-6 text-center hover:border-navy transition-colors bg-white"
              >
                <div className="flex justify-center mb-4">
                  {dienst.icon}
                </div>
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

      {/* Projecten Section - Dark Navy background */}
      <section id="projecten" className="py-16 md:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* Projecten icon */}
                <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Onze projecten
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dynet is gespecialiseerd in de aanleg van glasvezel, mobiele
                aanslutingen binnen Nederland Wij richten vooral op het
                aansluiten van centrumgebieden en woonwijken en niet te vergeten
                zakelijke panden. Het Dynet netwerk wordt steeds groter,
                jaarlijks komen hier honderden kilomters bij.
              </p>
              <ul className="space-y-2 text-gray-300">
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
                  <li key={city} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
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
    </>
  );
}
