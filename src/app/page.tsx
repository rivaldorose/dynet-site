import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Elektrische Laadoplossingen",
    description:
      "Leveren, aansluiten en gebruiksklaar maken van elektrische laadoplossingen voor heel Nederland. Zowel voor de zakelijke als particuliere markt.",
    image: "/images/services/emobility.webp",
  },
  {
    title: "LED Lichttechniek",
    description:
      "Energie zuinige LED verlichting voor het verduurzamen van het openbare lichtnetwerk. Vervangen en onderhouden van straatverlichting.",
    image: "/images/services/hoogwerker.webp",
  },
  {
    title: "Elektrische Installaties",
    description:
      "Complete elektrische installaties uitgevoerd door gespecialiseerde elektromonteurs conform NEN 1010 en NEN 3410 voorwaarden.",
    image: "/images/services/electriciteit.webp",
  },
  {
    title: "Glasvezel & Infra",
    description:
      "Aanleg en onderhoud van glasvezelnetwerken en bijbehorende infrastructuur voor een toekomstbestendig Nederland.",
    image: "/images/services/glasvezel.webp",
  },
];

const partners = [
  { name: "Shell", logo: "/images/partners/shell.svg" },
  { name: "Shell Recharge", logo: "/images/partners/shell-recharge.svg" },
  { name: "Alfen", logo: "/images/partners/alfen.svg" },
  { name: "BAM", logo: "/images/partners/bam.svg" },
  { name: "BMW", logo: "/images/partners/bmw.svg" },
  { name: "Vestel", logo: "/images/partners/vestel.svg" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="Dynet Electric - Smart City"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              DYNET <span className="text-green">ELECTRIC</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Verzorgt oplossingen in de vraag naar elektrische
              installatiemogelijkheden voor de particuliere als voor de zakelijke
              markt.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-green text-white rounded-lg font-semibold hover:bg-green-light transition-colors text-lg"
              >
                Contact opnemen
              </Link>
              <Link
                href="/projecten"
                className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Onze projecten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="dynetelectric" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">
                Over <span className="text-green">Dynet Electric</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>DYNET ELECTRIC</strong> is de
                elektro-ingenieursafdeling van{" "}
                <strong>DYNET INFRATECHNIEK</strong>. Zij zorgt voor oplossingen
                in de vraag naar elektrische installatiemogelijkheden voor de
                particuliere als voor de zakelijke markt.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Door de oplopende vraag en belangstelling voor de hedendaagse en
                toekomstige energietransitie, die Nederland fossielbrandstof
                vrij moet maken, heeft DYNET ELECTRIC zich toegespitst om deze
                vraagstelling eigen te maken.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                DYNET ELECTRIC bestaat uit ingenieurs en gespecialiseerde
                elektromonteurs, die voldoen aan de huidige NEN 1010 en NEN 3410
                voorwaarden.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-green font-semibold hover:text-green-dark transition-colors"
              >
                Neem contact op
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/bus-ev.jpg"
                alt="Elektrisch busje Dynet"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green text-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">NEN</p>
                <p className="text-sm">1010 & 3410 gecertificeerd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Onze <span className="text-green">Diensten</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              DYNET ELECTRIC heeft zich gespecialiseerd in het leveren,
              aansluiten en gebruiksklaar maken van diverse elektrische
              oplossingen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "NEN 1010", label: "Gecertificeerd" },
              { value: "NEN 3410", label: "Gecertificeerd" },
              { value: "100%", label: "Veilig & verzekerd" },
              { value: "NL", label: "Landelijk dekkend" },
            ].map((stat) => (
              <div key={stat.label + stat.value}>
                <p className="text-3xl md:text-4xl font-bold text-green mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark text-center mb-4">
            Onze <span className="text-green">Opdrachtgevers</span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Wij werken samen met toonaangevende bedrijven in de energie- en
            mobiliteitssector.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lichttechniek Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/services/hoogwerker.webp"
                alt="Hoogwerker LED verlichting"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">
                <span className="text-green">Licht</span>techniek
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Energie zuinige LED is het antwoord op het verduurzamen van het
                openbare lichtnetwerk van Nederland. De bestaande openbare
                lichtarmaturen (straatverlichting) worden vervangen door energie
                zuinige LED verlichting.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wij beschikken over verschillende hoogwerkers waardoor wij
                gemakkelijk op een hoogte van 4 of 6 meter de lichtarmaturen
                kunnen vervangen en onderhouden.
              </p>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Conditie bepalen van de bestaande lichtarmaturen",
                  "Openbare verlichting installeren en vervangen",
                  "Vervanging van lampen in totale groepen",
                  "Controles uitvoeren aan de openbare verlichting",
                  "Onderhoud en Storing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bent u opzoek naar een samenwerking?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvend gesprek over uw project
            of stuur een e-mail naar{" "}
            <a href="mailto:info@dynet.nl" className="underline font-semibold">
              info@dynet.nl
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-green rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Contact opnemen
            </Link>
            <a
              href="tel:0852224002"
              className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              085-2224002
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
