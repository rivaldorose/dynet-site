import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Logo */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-infra.png"
              alt="Dynet Infratechniek"
              width={160}
              height={53}
              className="h-12 w-auto brightness-200 mb-4"
            />
          </div>

          {/* Column 2: Over Dynet Infratechniek */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold mb-4 text-sm font-[family-name:var(--font-heading)]">
              Over Dynet Infratechniek
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-green mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Keurmeesterstraat 53<br />1187ZX Amstelveen</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0852224002" className="hover:text-green transition-colors">085-2224002</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@dynet.nl" className="hover:text-green transition-colors">info@dynet.nl</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Links 1 */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm font-[family-name:var(--font-heading)]">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Over ons", "Duurzaamheid"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <Link
                    href={item === "Home" ? "/" : `/#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:text-green transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Links 2 */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm font-[family-name:var(--font-heading)]">
              &nbsp;
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Diensten", href: "/#diensten" },
                { label: "Projecten", href: "/#projecten" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <Link
                    href={item.href}
                    className="hover:text-green transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Social media */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm font-[family-name:var(--font-heading)]">
              Volg ons op social media
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/dynet-infratechniek"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/dynetinfratechniek"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>Copyright &copy; 2023 Dynet Infratechniek</p>
          <p>Ontwikkeld <a href="https://bizzzmediasolutions.nl" target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">Bizzz Media Solutions</a></p>
        </div>
      </div>
    </footer>
  );
}
