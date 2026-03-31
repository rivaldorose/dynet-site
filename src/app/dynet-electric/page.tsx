import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dynet Electric - Elektrische Installatiemogelijkheden",
  description:
    "DYNET ELECTRIC verzorgt oplossingen in de vraag naar elektrische installatiemogelijkheden voor de particuliere als voor de zakelijke markt.",
};

export default function DynetElectricPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="Dynet Electric"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl md:text-[57px] font-bold text-white leading-tight">
            DYNET ELECTRIC
          </h1>
          <p className="text-gray-200 mt-4 text-base md:text-lg max-w-xl">
            Verzorgt oplossingen in de vraag naar elektrische
            installatiemogelijkheden voor de particulieren als voor de zakelijke
            markt.
          </p>
        </div>
      </section>

      {/* About Section - Two columns */}
      <section id="dynetelectric" className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column */}
            <div>
              {/* Charging station icon */}
              <svg className="w-10 h-10 text-green mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-6">
                Dynet Electric
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-green">DYNET ELECTRIC</strong> is de
                elektro-ingenieursafdeling van{" "}
                <strong className="text-navy">DYNET INFRATECHNIEK</strong>. Zij zorgt voor oplossingen
                in de vraag naar elektrische installatiemogelijkheden voor de
                particulieren als voor de zakelijke markt.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Door de oplopende vraag en belangstelling voor de hedendaagse en
                toekomstige energietransitie, die Nederland fossielbrandstof vrij
                moet maken, heeft{" "}
                <strong className="text-green">DYNET ELECTRIC</strong> zich
                toegespitst om deze vraagstelling eigen te maken en hiervoor de
                kennis en kunde van{" "}
                <strong className="text-green">DYNET ELECTRIC</strong>{" "}
                te gebruiken om de toenemende vraag naar een fossielbrandstof vrij
                Nederland te beantwoorden. Het beantwoorden van de toenemende
                vraag naar een fossielbrandstof vrij Nederland, doet{" "}
                <strong className="text-green">DYNET ELECTRIC</strong>{" "}
                doormiddel van het toepassen van haar kennis en kunde in het
                uitvoeren van de energietransitie vraagstukken, die de
                particuliere en de zakelijke markt van Nederland vraagt.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-green">DYNET ELECTRIC</strong> bestaat
                uit ingenieurs, maar ook uit gespecialiseerde elektromonteurs,
                die voldoen aan de huidige NEN 1010 en NEN 3410 voorwaarden.
                Hierdoor valt de door{" "}
                <strong className="text-green">DYNET ELECTRIC</strong> geleverde,
                ge&iuml;nstalleerde en gebruiksklaar gemaakte elektrische
                laadinstallatie binnen de eisen die verzekeraars stellen omtrent
                het veilig opleveren van de elektrische laadinstallaties.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bent u opzoek naar een samenwerking, dan kunt u een e-mail
                sturen naar{" "}
                <a
                  href="mailto:info@dynet.nl"
                  className="text-green font-semibold hover:underline"
                >
                  info@dynet.nl
                </a>
              </p>
              <Link
                href="#dynetelectric"
                className="inline-block px-6 py-3 bg-green text-white rounded font-medium hover:bg-green-light transition-colors"
              >
                Meer Dynet Electric
              </Link>
            </div>

            {/* Right column */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-green">DYNET ELECTRIC</strong> heeft
                zich gespecialiseerd in het leveren, aansluiten en gebruiksklaar
                maken van de elektrische laadoplossingen voor heel Nederland. Dit
                doen wij in opdracht van de veelal zakelijke markten, maar ook
                voor de particulieren markten.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>
                  Zo hebben wij ervaring met het leveren, plaatsen en
                  gebruiksklaar maken van de volgende laadmogelijkheden van:
                </strong>
              </p>
              <div className="mb-8">
                <h4 className="text-lg font-bold text-navy mb-2">
                  Onze opdrachtgevers zijn o.a.
                </h4>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    { name: "Alfen", logo: "/images/partners/alfen.png" },
                    { name: "Shell Recharge", logo: "/images/partners/shell-recharge.svg" },
                    { name: "BMW", logo: "/images/partners/bmw.svg" },
                    { name: "Vestel", logo: "/images/partners/vestel.svg" },
                    { name: "Eneco", logo: "/images/partners/eneco.webp" },
                    { name: "Shell", logo: "/images/partners/shell.svg" },
                    { name: "BAM", logo: "/images/partners/bam.svg" },
                  ].map((partner) => (
                    <div
                      key={partner.name}
                      className="flex items-center justify-center p-3 bg-white rounded-lg"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={80}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lichttechniek */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-navy mb-4">Lichttechniek</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Energie zuinige LED is het antwoord op het verduurzamen van het
                openbare lichtnetwerk van Nederland, hierdoor wordt de bestaande
                openbare lichtarmaturen(straatverlichting) vervangen door de
                energie zuinige Ledverlichting. Het voordeel van Ledverlichting
                is naast dat het aan het verduurzaming effect werkt, ook meer
                voor een aangenaam en veilig gevoel op de openbare straat en weg
                gaat cre&euml;ren.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wij hebben hiervoor verschillende hoogwerkers , waardoor wij
                gemakkelijk op een hoogte van 4 of 6 meter de lichtarmaturen
                kunnen vervangen en onderhouden.
              </p>
              <p className="text-gray-600 mb-3">
                Onze werkzaamheden bestaan uit de volgende punten:
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Conditie bepalen van de bestaande lichtarmaturen;</li>
                <li>Openbare verlichting instaleren en vervangen;</li>
                <li>Vervanging van lampen in totale groepen;</li>
                <li>
                  Controles uitvoeren aan de openbare verlichting installaties.
                </li>
                <li>Onderhoud en Storing.</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/services/hoogwerker.webp"
                alt="Hoogwerker lichttechniek"
                width={800}
                height={553}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sanering elektro */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-navy mb-4">
                Sanering elektro
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Door toenemende vraag vanuit de particuliere
                stroomverbruikersmarkt, wordt deze vraag beantwoordt doormiddel
                van meer stroom op het elektriciteitsnetwerk. Deze toenemende
                vraag naar meer stroom zorgt ervoor dat Nederland zich moet gaan
                voorbereiden d.m.v. het bestaande stroomnetwerk te versterken,
                dit wordt vakkundig &quot;<em>elektro sanering</em>&quot; genoemd.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bij elektro sanering worden in Nederland alle bestaande
                straatbekabelingen van de hoofddistributiekabel tot aan de
                gebouwen d.m.v. het plaatsen van een aan de vraag bestendige
                aftakmof gesaneerd en daar komt in plaats terug een{" "}
                <em>dikkere koper</em> of <em>aluminium</em> kabel. De &quot;<em>elektro
                sanering</em>&quot; zorgt ervoor dat Nederland voorbereid is op
                de toekomst van totale onafhankelijkheid van gas.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/electriciteit.webp"
                alt="Sanering elektro"
                width={750}
                height={450}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sanering gasaansluiting */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-navy mb-4">
                Sanering gasaansluiting
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Het afnemende imago van een gasaansluiting in Nederland zorgt
                ervoor, dat Nederland in rap tempo van het gas af wilt gaan. Wij
                hebben hier de juiste werkmethode voor. We saneren de gasleiding
                in en om het gebouw en kunnen hiervoor de juiste bekabeling
                aanleggen voor bijvoorbeeld energieneutraal te zijn. Dit doen wij
                door de elektrische bekabeling in het huis aan te passen voor het
                gebruik van zonnepanelen en een warmtepomp.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Maakt u wel een melding bij www.mijnaansluiting.nl als u van plan
                bent om van het gas af te gaan? Op{" "}
                <strong>www.mijnaansluiting.nl</strong> kunt u de gastoevoer
                afmelden, dit zorgt ervoor dat wij ons werk vakkundig en veilig
                kunnen uitvoeren.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/gas.webp"
                alt="Sanering gasaansluiting"
                width={800}
                height={534}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warmtepompen */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg font-bold text-navy mb-4">Warmtepompen</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor de toepassing van warmtepompen in domicilie gebruik, bestaan
                er drie soorten technieken waar wij in zijn gespecialiseerd:{" "}
                <em>Lucht-Water techniek</em>, <em>Water-Water techniek</em> en{" "}
                <em>Lucht-Lucht techniek.</em>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bij de lucht-lucht techniek en lucht-water techniek heb je te
                maken met een airco die de warmte uit de buitenlucht haalt en
                deze omvormt naar warmte energie die gebruikt kan worden voor de
                verwarming van de radiatoren en warm tap water.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                De <em>Water-Water techniek</em> wordt veelal gebruik gemaakt
                wanneer er een warmtebron is aangebracht en deze het warme
                bronwater omzet in warmte voor de radiatoren en voor warm tap
                water.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor het omzetten van deze bovengenoemde warmtepomp technieken
                heb je een keuze uit twee soorten hoge rendement ketels:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>All Electric:</strong>
                <br /><br />
                Bij All Electric wordt alles aangestuurd door elektriciteit via
                de Hr-ketel. De Hr-Ketel wordt hiervoor aangesloten op het thuis
                elektranetwerk. Om maximale stroom te benutten worden de
                zonnepanelen direct op de Hr-ketel aangesloten, zodat er geen
                onnodige energie terug geleverd wordt aan de
                energie/netbeheerder. Dit zorgt voor een optimale dichte
                energiekring in het huis, waardoor er een semi zelfvoorzienend
                huis ontstaat. Deze optie wordt voornamelijk bij nieuwbouw
                projecten toegepast.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Hybride:</strong>
                <br /><br />
                Bij Hybride wordt &eacute;&eacute;n gedeelte aangestuurd
                doormiddel van elektriciteit en het andere gedeelte doormiddel
                van gas. Ondanks dat Nederland van het gas af moet, is deze optie
                nog steeds een veel toegepaste methode bij voornamelijk renovatie
                projecten van de woningbouw.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Merken:</strong>
                <br /><br />
                <strong>Vliesmann, Remeha, Vaillant, NIBE, Daikin, Panasonic,
                Itho Daalderop en Nefit Bosch, Remeha, Intergas, Junkers,
                Buderus, Inventum, Rotex, Elco, Hautec, Panasonic en SPRUN.</strong>
              </p>
            </div>
            <div className="space-y-6">
              <Image
                src="/images/allelectric.jpg"
                alt="All Electric"
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full"
              />
              <Image
                src="/images/services/hybride.webp"
                alt="Hybride"
                width={800}
                height={502}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
