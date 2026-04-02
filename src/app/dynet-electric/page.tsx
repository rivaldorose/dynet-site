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
      {/* Hero - same background as homepage hero */}
      <section
        className="relative bg-cover bg-center pt-[60px] pb-[100px] md:pt-[150px] md:pb-[150px]"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="text-center px-4">
          <h1
            className="text-[25px] md:text-[57px]"
            style={{
              fontFamily: "'PT Sans Caption', sans-serif",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            DYNET ELECTRIC
          </h1>
          <div className="mx-auto w-[85%] md:w-[58%]" style={{ marginTop: 16 }}>
            <p
              style={{
                fontFamily: "'PT Sans', sans-serif",
                fontWeight: 400,
                fontSize: 20,
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Verzorgt oplossingen in de vraag naar elektrische
              installatiemogelijkheden voor de particulieren als voor de
              zakelijke markt.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Dynet Electric Info (Two Column) */}
      <section
        id="dynetelectric"
        className="px-4 md:px-0"
        style={{
          backgroundColor: "#FDFBF2",
          borderBottom: "4px solid #2E9F48",
          padding: "20px 0 40px 0",
          scrollMarginTop: 80,
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: 1350 }}
        >
          {/* Left column */}
          <div className="md:w-1/2" style={{ padding: 30 }}>
            <div className="icon-box-framed" style={{ marginBottom: 16 }}>
              <div className="icon-wrap" style={{ borderColor: "#2E9F48", color: "#2E9F48" }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 7h-1V2H6v5H5a3 3 0 00-3 3v5h2v2h2v-2h12v2h2v-2h2v-5a3 3 0 00-3-3zM8 4h8v3H8V4zm11 9H5v-3a1 1 0 011-1h12a1 1 0 011 1v3z" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 600,
                  fontSize: 21,
                  color: "#2E9F48",
                  margin: 0,
                }}
              >
                Dynet Electric
              </h3>
            </div>

            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              <strong style={{ color: "#2E9F48" }}>DYNET ELECTRIC</strong> is
              de elektro-ingenieursafdeling van{" "}
              <strong style={{ color: "#11133D" }}>DYNET INFRATECHNIEK</strong>.
              Zij zorgt voor oplossingen in de vraag naar elektrische
              installatiemogelijkheden voor de particulieren als voor de
              zakelijke markt.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Door de oplopende vraag en belangstelling voor de hedendaagse en
              toekomstige energietransitie, die Nederland fossielbrandstof vrij
              moet maken, heeft{" "}
              <strong style={{ color: "#2E9F48" }}>DYNET ELECTRIC</strong> zich
              toegespitst om deze vraagstelling eigen te maken en hiervoor de
              kennis en kunde van{" "}
              <strong style={{ color: "#2E9F48" }}>DYNET ELECTRIC</strong> te
              gebruiken om de toenemende vraag naar een fossielbrandstof vrij
              Nederland te beantwoorden.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              <strong style={{ color: "#2E9F48" }}>DYNET ELECTRIC</strong>{" "}
              bestaat uit ingenieurs, maar ook uit gespecialiseerde
              elektromonteurs, die voldoen aan de huidige NEN 1010 en NEN 3410
              voorwaarden. Hierdoor valt de door{" "}
              <strong style={{ color: "#2E9F48" }}>DYNET ELECTRIC</strong>{" "}
              geleverde, geinstalleerde en gebruiksklaar gemaakte elektrische
              laadinstallatie binnen de eisen die verzekeraars stellen omtrent
              het veilig opleveren van de elektrische laadinstallaties.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 20,
              }}
            >
              Bent u opzoek naar een samenwerking, dan kunt u een e-mail sturen
              naar{" "}
              <a
                href="mailto:info@dynet.nl"
                style={{ color: "#2E9F48", fontWeight: 700 }}
              >
                info@dynet.nl
              </a>
            </p>
            <Link href="#dynetelectric" className="btn-green">
              Meer Dynet Electric
            </Link>
          </div>

          {/* Right column */}
          <div className="md:w-1/2" style={{ padding: 30 }}>
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: 18,
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Onze opdrachtgevers zijn o.a.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              {[
                { name: "Alfen", logo: "/images/partners/alfen.svg" },
                { name: "Shell Recharge", logo: "/images/partners/shell-recharge.svg" },
                { name: "BMW", logo: "/images/partners/bmw.svg" },
                { name: "Vestel", logo: "/images/partners/vestel.svg" },
                { name: "Eneco", logo: "/images/partners/eneco.webp" },
                { name: "Shell", logo: "/images/partners/shell.svg" },
                { name: "BAM", logo: "/images/partners/bam.svg" },
              ].map((partner) => (
                <Image
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={40}
                  style={{ height: 40, width: "auto" }}
                />
              ))}
            </div>

            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              <strong style={{ color: "#2E9F48" }}>DYNET ELECTRIC</strong> heeft
              zich gespecialiseerd in het leveren, aansluiten en gebruiksklaar
              maken van de elektrische laadoplossingen voor heel Nederland. Dit
              doen wij in opdracht van de veelal zakelijke markten, maar ook
              voor de particulieren markten.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                fontWeight: 700,
              }}
            >
              Zo hebben wij ervaring met het leveren, plaatsen en
              gebruiksklaar maken van de volgende laadmogelijkheden van:
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Lichttechniek */}
      <section
        className="px-4 md:px-0"
        style={{
          backgroundColor: "#FDFBF2",
          borderBottom: "4px solid #2E9F48",
          padding: "20px 0 40px 0",
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: 1350 }}
        >
          <div className="md:w-1/2" style={{ padding: 30 }}>
            <p
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontSize: 21,
                lineHeight: "1.3em",
                color: "#2E9F48",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Lichttechniek
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Energie zuinige LED is het antwoord op het verduurzamen van het
              openbare lichtnetwerk van Nederland, hierdoor wordt de bestaande
              openbare lichtarmaturen(straatverlichting) vervangen door de
              energie zuinige Ledverlichting. Het voordeel van Ledverlichting
              is naast dat het aan het verduurzaming effect werkt, ook meer
              voor een aangenaam en veilig gevoel op de openbare straat en weg
              gaat creeren.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Wij hebben hiervoor verschillende hoogwerkers, waardoor wij
              gemakkelijk op een hoogte van 4 of 6 meter de lichtarmaturen
              kunnen vervangen en onderhouden.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 8,
              }}
            >
              Onze werkzaamheden bestaan uit de volgende punten:
            </p>
            <ul
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.6em",
                color: "#000000",
                paddingLeft: 20,
              }}
            >
              <li>Conditie bepalen van de bestaande lichtarmaturen</li>
              <li>Openbare verlichting instaleren en vervangen</li>
              <li>Vervanging van lampen in totale groepen</li>
              <li>Controles uitvoeren aan de openbare verlichting installaties</li>
              <li>Onderhoud en Storing</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex items-center justify-center" style={{ padding: 30 }}>
            <Image
              src="/images/services/hoogwerker.webp"
              alt="Hoogwerker lichttechniek"
              width={800}
              height={553}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </div>
        </div>
      </section>

      {/* Additional sections below (sanering, warmtepompen) use same pattern */}
      <section
        className="px-4 md:px-0"
        style={{
          backgroundColor: "#FDFBF2",
          borderBottom: "4px solid #2E9F48",
          padding: "20px 0 40px 0",
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: 1350 }}
        >
          <div className="md:w-1/2" style={{ padding: 30 }}>
            <p
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontSize: 21,
                lineHeight: "1.3em",
                color: "#2E9F48",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Sanering elektro
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Door toenemende vraag vanuit de particuliere
              stroomverbruikersmarkt, wordt deze vraag beantwoordt doormiddel
              van meer stroom op het elektriciteitsnetwerk. Deze toenemende
              vraag naar meer stroom zorgt ervoor dat Nederland zich moet gaan
              voorbereiden d.m.v. het bestaande stroomnetwerk te versterken,
              dit wordt vakkundig &quot;<em>elektro sanering</em>&quot; genoemd.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
              }}
            >
              Bij elektro sanering worden in Nederland alle bestaande
              straatbekabelingen van de hoofddistributiekabel tot aan de
              gebouwen d.m.v. het plaatsen van een aan de vraag bestendige
              aftakmof gesaneerd en daar komt in plaats terug een{" "}
              <em>dikkere koper</em> of <em>aluminium</em> kabel. De &quot;<em>
              elektro sanering</em>&quot; zorgt ervoor dat Nederland voorbereid
              is op de toekomst van totale onafhankelijkheid van gas.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center" style={{ padding: 30 }}>
            <Image
              src="/images/services/electriciteit.webp"
              alt="Sanering elektro"
              width={750}
              height={450}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </div>
        </div>
      </section>

      <section
        className="px-4 md:px-0"
        style={{
          backgroundColor: "#FDFBF2",
          borderBottom: "4px solid #2E9F48",
          padding: "20px 0 40px 0",
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: 1350 }}
        >
          <div className="md:w-1/2" style={{ padding: 30 }}>
            <p
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontSize: 21,
                lineHeight: "1.3em",
                color: "#2E9F48",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Sanering gasaansluiting
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Het afnemende imago van een gasaansluiting in Nederland zorgt
              ervoor, dat Nederland in rap tempo van het gas af wilt gaan. Wij
              hebben hier de juiste werkmethode voor. We saneren de gasleiding
              in en om het gebouw en kunnen hiervoor de juiste bekabeling
              aanleggen voor bijvoorbeeld energieneutraal te zijn.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
              }}
            >
              Maakt u wel een melding bij www.mijnaansluiting.nl als u van plan
              bent om van het gas af te gaan? Op{" "}
              <strong>www.mijnaansluiting.nl</strong> kunt u de gastoevoer
              afmelden, dit zorgt ervoor dat wij ons werk vakkundig en veilig
              kunnen uitvoeren.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center" style={{ padding: 30 }}>
            <Image
              src="/images/services/gas.webp"
              alt="Sanering gasaansluiting"
              width={800}
              height={534}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </div>
        </div>
      </section>

      <section
        className="px-4 md:px-0"
        style={{
          backgroundColor: "#FDFBF2",
          padding: "20px 0 40px 0",
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: 1350 }}
        >
          <div className="md:w-1/2" style={{ padding: 30 }}>
            <p
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontSize: 21,
                lineHeight: "1.3em",
                color: "#2E9F48",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Warmtepompen
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Voor de toepassing van warmtepompen in domicilie gebruik, bestaan
              er drie soorten technieken waar wij in zijn gespecialiseerd:{" "}
              <em>Lucht-Water techniek</em>, <em>Water-Water techniek</em> en{" "}
              <em>Lucht-Lucht techniek.</em>
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Bij de lucht-lucht techniek en lucht-water techniek heb je te
              maken met een airco die de warmte uit de buitenlucht haalt en
              deze omvormt naar warmte energie die gebruikt kan worden voor de
              verwarming van de radiatoren en warm tap water.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              <strong>All Electric:</strong>
              <br /><br />
              Bij All Electric wordt alles aangestuurd door elektriciteit via
              de Hr-ketel. De Hr-Ketel wordt hiervoor aangesloten op het thuis
              elektranetwerk.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              <strong>Hybride:</strong>
              <br /><br />
              Bij Hybride wordt een gedeelte aangestuurd doormiddel van
              elektriciteit en het andere gedeelte doormiddel van gas.
            </p>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
              }}
            >
              <strong>Merken:</strong>
              <br /><br />
              <strong>
                Vliesmann, Remeha, Vaillant, NIBE, Daikin, Panasonic,
                Itho Daalderop en Nefit Bosch, Remeha, Intergas, Junkers,
                Buderus, Inventum, Rotex, Elco, Hautec, Panasonic en SPRUN.
              </strong>
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col gap-6 items-center" style={{ padding: 30 }}>
            <Image
              src="/images/allelectric.jpg"
              alt="All Electric"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
            <Image
              src="/images/services/hybride.webp"
              alt="Hybride"
              width={800}
              height={502}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
