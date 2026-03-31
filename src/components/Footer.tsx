import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Dynet"
              width={160}
              height={53}
              className="h-10 w-auto mb-4 brightness-200"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Wij verzorgen de verbinding van morgen. Specialist in glasvezel,
              infratechniek en elektrische installaties.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Navigatie
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-green transition-colors">Home</Link></li>
              <li><Link href="/dynet-electric" className="hover:text-green transition-colors">Dynet Electric</Link></li>
              <li><Link href="/prijsvergelijker" className="hover:text-green transition-colors">Prijsvergelijker</Link></li>
              <li><Link href="/contact" className="hover:text-green transition-colors">Contact</Link></li>
              <li><Link href="/afspraak-maken" className="hover:text-green transition-colors">Afspraak maken</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Diensten
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Glasvezelaansluitingen</li>
              <li>Civiele werkzaamheden</li>
              <li>Kopertechniek</li>
              <li>Mobiele techniek</li>
              <li>Elektrische installaties</li>
              <li>LED Lichttechniek</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                Keurmeesterstraat 53<br />
                1187 ZX Amstelveen
              </li>
              <li>
                <a href="tel:0852224002" className="hover:text-green transition-colors">
                  085-2224002
                </a>
              </li>
              <li>
                <a href="mailto:info@dynet.nl" className="hover:text-green transition-colors">
                  info@dynet.nl
                </a>
              </li>
              <li>Ma-Vr: 08:00 - 17:30</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dynet Infratechniek. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
