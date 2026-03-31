import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & about */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Dynet Electric"
              width={160}
              height={53}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              DYNET ELECTRIC verzorgt oplossingen in de vraag naar elektrische
              installatiemogelijkheden voor de particuliere als voor de zakelijke
              markt.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigatie
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projecten"
                  className="hover:text-green transition-colors"
                >
                  Projecten
                </Link>
              </li>
              <li>
                <Link
                  href="/prijsvergelijker"
                  className="hover:text-green transition-colors"
                >
                  Prijsvergelijker
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/afspraak-maken"
                  className="hover:text-green transition-colors"
                >
                  Afspraak maken
                </Link>
              </li>
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Diensten
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Elektrische laadoplossingen</li>
              <li>LED Lichttechniek</li>
              <li>Elektrische installaties</li>
              <li>Energietransitie</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 text-green shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Keurmeesterstraat 53
                  <br />
                  1187 ZX Amstelveen
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:0852224002"
                  className="hover:text-green transition-colors"
                >
                  085-2224002
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@dynet.nl"
                  className="hover:text-green transition-colors"
                >
                  info@dynet.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Dynet Electric. Alle rechten
            voorbehouden.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>
              Ma-Vr: 08:00 - 17:30
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
