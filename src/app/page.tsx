import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero Banner */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          paddingTop: 150,
          paddingBottom: 150,
        }}
      >
        <div className="text-center">
          <h2
            style={{
              fontFamily: "'PT Sans Caption', sans-serif",
              fontWeight: 700,
              fontSize: 57,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            DYNET INFRATECHNIEK
          </h2>
          <div
            className="mx-auto"
            style={{
              width: "58%",
              marginTop: 16,
            }}
          >
            <p
              style={{
                fontFamily: "'PT Sans', sans-serif",
                fontWeight: 400,
                fontSize: 20,
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Specialist in het aanleggen van glas en koperaansluitingen.
              <br />
              Wij verbinden centrum gebieden en woonwijken doormiddel van
              glasvezel
            </p>
          </div>
          {/* Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4"
            style={{ marginTop: 30 }}
          >
            <Link href="/prijsvergelijker" className="btn-hero">
              Vergelijk uw prijzen
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8l4 4-4 4M8 12h8"
                />
              </svg>
            </Link>
            <Link href="/afspraak-maken" className="btn-hero">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8l-4 4 4 4M16 12H8"
                />
              </svg>
              Maak een afspraak
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Navy Separator Bar */}
      <div
        style={{
          backgroundColor: "#11133D",
          borderBottom: "4px solid #2E9F48",
          height: 10,
        }}
      />

      {/* Section 3: Over Ons */}
      <section
        id="overons"
        style={{
          backgroundColor: "#FDFBF2",
          padding: "50px 0 0 70px",
          scrollMarginTop: 80,
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: 1300, gap: 10 }}
        >
          {/* Left Column */}
          <div className="md:w-1/2" style={{ padding: 30 }}>
            <div className="icon-box-framed" style={{ marginBottom: 16 }}>
              <div className="icon-wrap" style={{ borderColor: "#11133D", color: "#11133D" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'PT Sans Caption', sans-serif",
                  fontWeight: 600,
                  fontSize: 21,
                  color: "#11133D",
                  margin: 0,
                }}
              >
                Wij leggen de verbinding van morgen
              </h3>
            </div>
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 20,
              }}
            >
              Dynet is een vooraanstaand Nederlands bedrijf dat gespecialiseerd
              is in het aanleggen van glasvezelverbindingen. Onze focus ligt
              voornamelijk op het aansluiten van centrumgebieden en woonwijken,
              waarbij we gebruikmaken van de Fiber-to-the-Home technologie.
              Daarnaast zorgen we er doorgaans ook voor dat zakelijke panden
              binnen het gebied worden aangesloten op ons netwerk. Onze missie
              is om heel Nederland te voorzien van snelle en betrouwbare
              verbindingen. We zijn van mening dat iedereen recht heeft op
              toegang tot glasvezel, daarom streven we ernaar om niet alleen
              centrumgebieden, maar ook buitengebieden aan te sluiten. Op deze
              manier willen we ervoor zorgen dat iedereen kan profiteren van de
              voordelen van glasvezel.
            </p>
            <Link href="/#overons" className="btn-navy">
              Over ons
            </Link>
          </div>

          {/* Right Column */}
          <div
            className="md:w-1/2 flex items-start"
            style={{ marginTop: 10 }}
          >
            <Image
              src="/images/glasvezel-2.jpg"
              alt="Glasvezelaanleg"
              width={700}
              height={700}
              style={{
                borderRadius: 35,
                width: "85%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* Section 4: Dynet Electric (Image Left, Content Right) */}
      <section
        style={{
          backgroundColor: "#FDFBF2",
          marginTop: 20,
          padding: "0 0 40px 0",
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: 1330, scrollMarginTop: 80 }}
          id="dynetelectric"
        >
          {/* Left Column - Image */}
          <div className="md:w-1/2 flex items-start" style={{ marginTop: 50 }}>
            <Image
              src="/images/bus-ev.jpg"
              alt="Dynet Electric bus"
              width={700}
              height={500}
              style={{
                borderRadius: 35,
                width: "90%",
                height: "auto",
              }}
            />
          </div>

          {/* Right Column - Content */}
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
              Nederland te beantwoorden. Het beantwoorden van de toenemende
              vraag naar een fossielbrandstof vrij Nederland, doet{" "}
              <strong style={{ color: "#2E9F48" }}>DYNET ELECTRIC</strong>{" "}
              doormiddel van het toepassen van haar kennis en kunde in het
              uitvoeren van de energietransitie vraagstukken, die de
              particuliere en de zakelijke markt van Nederland vraagt.
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
            <Link href="/dynet-electric" className="btn-green">
              Meer Dynet Electric
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Duurzaamheid (Content Left, Image Right) */}
      <section
        id="duurzaamheid"
        style={{
          backgroundColor: "#FDFBF2",
          padding: "20px 0 40px 0",
          scrollMarginTop: 80,
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: 1297 }}
        >
          {/* Left Column - Content */}
          <div className="md:w-1/2" style={{ padding: "30px 30px 30px 0" }}>
            <div className="icon-box-framed" style={{ marginBottom: 16 }}>
              <div className="icon-wrap" style={{ borderColor: "#11133D", color: "#11133D" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'PT Sans Caption', sans-serif",
                  fontWeight: 600,
                  fontSize: 21,
                  color: "#11133D",
                  margin: 0,
                }}
              >
                Dynet kiest voor duurzaamheid
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
              Bij Dynet nemen we onze verantwoordelijkheid voor het milieu
              serieus. We zijn er trots op te kunnen zeggen dat ons pand
              volledig klimaatneutraal is. Dit betekent dat we geen negatieve
              invloed hebben op het klimaat met onze dagelijkse activiteiten.
              Daarnaast streven we ernaar om onze projecten zo dicht mogelijk
              bij huis te realiseren, zodat we niet ver hoeven te rijden. Dit
              vermindert niet alleen de CO2-uitstoot, maar bespaart ook tijd
              en kosten. Om ons personeel en materieel snel en efficient te
              vervoeren, maken we gebruik van bakfietsen voor korte afstanden.
              Dit is niet alleen milieuvriendelijk, maar ook nog eens gezond
              en praktisch.
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
            <p
              style={{
                fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                fontSize: 16,
                lineHeight: "1.3em",
                color: "#000000",
                marginBottom: 20,
              }}
            >
              Bij Dynet gaan we verder dan alleen zorgen voor tevreden klanten.
              We zetten ons in voor een groenere wereld en dragen ons steentje
              bij aan het behoud van onze planeet.
            </p>
            <Link href="/#duurzaamheid" className="btn-navy">
              Over duurzaamheid
            </Link>
          </div>

          {/* Right Column - Image */}
          <div
            className="md:w-1/2 flex items-start"
            style={{ marginTop: 10 }}
          >
            <Image
              src="/images/glasvezel-2.jpg"
              alt="Glasvezelaanleg"
              width={700}
              height={700}
              style={{
                borderRadius: 35,
                width: "85%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* Section 6: Onze Diensten */}
      <section
        id="diensten"
        style={{
          backgroundColor: "#EBEBEB",
          borderTop: "4px solid #2E9F48",
          borderBottom: "4px solid #2E9F48",
          padding: "40px 10px 30px 10px",
          scrollMarginTop: 80,
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1250 }}>
          {/* Section title */}
          <div className="icon-box-framed" style={{ marginBottom: 16 }}>
            <div className="icon-wrap" style={{ borderColor: "#11133D", color: "#11133D" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontWeight: 600,
                fontSize: 21,
                color: "#11133D",
                margin: 0,
              }}
            >
              Onze diensten
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
            Dynet is een Nederlands bedrijf dat gespecialiseerd is in de aanleg
            van glasvezel aansluitingen. Of het nu om ontwerp, realisatie,
            onderhoud of demontage gaat, dankzij onze complete dienstverlening
            op het gebied van gestructureerde netwerkbekabeling staan we midden
            in het proces.
          </p>

          <Link
            href="/#diensten"
            className="btn-navy"
            style={{ marginBottom: 24, display: "inline-block" }}
          >
            Meer over onze diensten
          </Link>

          {/* 3x2 grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            style={{ marginTop: 16 }}
          >
            {/* Card 1: Civiele Werkzaamheden */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#11133D" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                </svg>
              </div>
              <h4>Civiele Werkzaamheden</h4>
              <p>Wij voeren alle graaf- en plaatsingswerkzaamheden uit om de o.a. kabels te kunnen leggen voor o.a glasvezelaanslutingen.</p>
            </div>

            {/* Card 2: Kopertechniek */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#11133D" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h4>Kopertechniek</h4>
              <p>Wij verzorgen de aanleg en installatie van koperen leidingen voor o.a de ouderwetse coax-aansluitng en telefoonaansluitingen.</p>
            </div>

            {/* Card 3: HFC-techniek */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#11133D" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4>HFC-techniek</h4>
              <p>HFC is een netwerk met een combinatie van glasvezel en coax. Bij een HFC-netwerk zijn de core-verbindingen van glasvezelkabels.</p>
            </div>

            {/* Card 4: Mobiele techniek */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#11133D" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h4>Mobiele techniek</h4>
              <p>Wij verzorgen de aanleg en installatie van mobiele netwerken. Denk aan aanslutingen en masten in binnen - en buitengebieden.</p>
            </div>

            {/* Card 5: Glasvezeltechniek */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#11133D" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h4>Glasvezeltechniek</h4>
              <p>Glasvezel is vezel van glas die zo dun is als een haar. Door deze vezel worden signalen en data geschoten met de snelheid van het licht.</p>
            </div>

            {/* Card 6: Preventief en correctief onderhoud */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#11133D" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.61 3.08a1 1 0 01-1.45-1.05l1.07-6.25-4.54-4.42a1 1 0 01.55-1.71l6.27-.91 2.8-5.69a1 1 0 011.8 0l2.8 5.69 6.27.91a1 1 0 01.55 1.71l-4.54 4.42 1.07 6.25a1 1 0 01-1.45 1.05L12 15.17z" />
                </svg>
              </div>
              <h4>Preventief en correctief onderhoud</h4>
              <p>Voor een continue en betrouwbare werking van het netwerk controleren aanslutingen, repareren en vervangen wij kabels waar nodig is.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Onze Projecten (CREAM background, not navy!) */}
      <section
        id="projecten"
        style={{
          backgroundColor: "#FDFBF2",
          padding: "20px 0 40px 0",
          scrollMarginTop: 80,
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: 1297 }}
        >
          {/* Left Column */}
          <div className="md:w-1/2" style={{ padding: "30px 30px 30px 0" }}>
            <div className="icon-box-framed" style={{ marginBottom: 16 }}>
              <div className="icon-wrap" style={{ borderColor: "#11133D", color: "#11133D" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'PT Sans Caption', sans-serif",
                  fontWeight: 600,
                  fontSize: 21,
                  color: "#11133D",
                  margin: 0,
                }}
              >
                Onze projecten
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
              Dynet is gespecialiseerd in de aanleg van glasvezel, mobiele
              aanslutingen binnen Nederland Wij richten vooral op het
              aansluiten van centrumgebieden en woonwijken en niet te vergeten
              zakelijke panden. Het Dynet netwerk wordt steeds groter,
              jaarlijks komen hier honderden kilomters bij.
            </p>

            {/* City list with checkmarks */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
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
                <li
                  key={city}
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "'PT Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#000000",
                    padding: "0",
                  }}
                >
                  <svg
                    className="shrink-0"
                    style={{ width: 16, height: 16, color: "#11133D" }}
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

            <Link href="/#projecten" className="btn-navy">
              Meer over onze projecten
            </Link>
          </div>

          {/* Right Column - Map */}
          <div className="md:w-1/2 flex justify-center items-start">
            <Image
              src="/images/kaart-nederland.png"
              alt="Werkgebied Nederland"
              width={600}
              height={700}
              style={{ width: "auto", maxHeight: 600 }}
            />
          </div>
        </div>
      </section>

      {/* Section 8: Opdrachtgevers carousel - simplified as static logos */}
      <section
        style={{
          backgroundColor: "#FDFBF2",
          padding: "20px 0 40px 0",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1297 }}>
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
          <div className="flex flex-wrap items-center gap-8">
            {["shell", "bmw", "alfen", "bam", "vestel"].map((partner) => (
              <Image
                key={partner}
                src={`/images/partners/${partner}.svg`}
                alt={partner}
                width={100}
                height={50}
                style={{ height: 40, width: "auto", opacity: 0.7 }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
