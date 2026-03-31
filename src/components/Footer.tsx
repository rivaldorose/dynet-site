import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FDFBF2",
        borderLeft: "20px solid #11133D",
        borderRight: "20px solid #11133D",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: 1400,
          borderTop: "1px solid rgba(3,53,55,0.2)",
          minHeight: 150,
          padding: "20px 36px",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Column 1: Logo */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo-infra.png"
                alt="Dynet Infratechniek"
                width={160}
                height={53}
                className="h-auto"
                style={{ width: "100%", maxWidth: 160 }}
              />
            </Link>
          </div>

          {/* Column 2: Over Dynet Infratechniek */}
          <div>
            <h3
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#11133D",
                paddingTop: 20,
                marginBottom: 12,
              }}
            >
              Over Dynet Infratechniek
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="flex items-start gap-2" style={{ marginBottom: 8 }}>
                <svg
                  className="shrink-0"
                  style={{ width: 16, height: 16, color: "#091441", marginTop: 3 }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#091441",
                  }}
                >
                  Keurmeesterstraat 53<br />1187ZX Amstelveen
                </span>
              </li>
              <li className="flex items-center gap-2" style={{ marginBottom: 8 }}>
                <svg
                  className="shrink-0"
                  style={{ width: 16, height: 16, color: "#091441" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a
                  href="tel:0852224002"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#091441",
                    textDecoration: "none",
                  }}
                >
                  085-2224002
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="shrink-0"
                  style={{ width: 16, height: 16, color: "#091441" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:info@dynet.nl"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#091441",
                    textDecoration: "none",
                  }}
                >
                  info@dynet.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Links (first set) */}
          <div>
            <h3
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#11133D",
                paddingTop: 20,
                marginBottom: 12,
              }}
            >
              Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Home", href: "/" },
                { label: "Over ons", href: "/#overons" },
                { label: "Duurzaamheid", href: "/#duurzaamheid" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2"
                  style={{ marginBottom: 6 }}
                >
                  <svg
                    className="shrink-0"
                    style={{ width: 14, height: 14, color: "#2E9F48" }}
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
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#091441",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Links (second set) */}
          <div>
            <h3
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#11133D",
                paddingTop: 20,
                marginBottom: 12,
              }}
            >
              Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Diensten", href: "/#diensten" },
                { label: "Projecten", href: "/#projecten" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2"
                  style={{ marginBottom: 6 }}
                >
                  <svg
                    className="shrink-0"
                    style={{ width: 14, height: 14, color: "#2E9F48" }}
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
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#091441",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Volg ons op social media */}
          <div>
            <h3
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#11133D",
                paddingTop: 20,
                marginBottom: 12,
              }}
            >
              Volg ons op social media
            </h3>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dynet-bv-05472b196/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: "#11133D",
                  color: "#FFFFFF",
                }}
                aria-label="LinkedIn"
              >
                <svg style={{ width: 18, height: 18 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/dynetinfratechniek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: "#11133D",
                  color: "#FFFFFF",
                }}
                aria-label="Facebook"
              >
                <svg style={{ width: 18, height: 18 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/31852224002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: "#33CC33",
                  color: "#FFFFFF",
                }}
                aria-label="WhatsApp"
              >
                <svg style={{ width: 18, height: 18 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        style={{
          borderTop: "1px solid rgba(3,53,55,0.2)",
          padding: "12px 36px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 14,
            color: "#091441",
            margin: 0,
          }}
        >
          Copyright &copy; 2023 Dynet Infratechniek &nbsp;&nbsp;&nbsp;&nbsp;
          Ontwikkeld{" "}
          <a
            href="https://bizzzmediasolutions.nl"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#091441", textDecoration: "none" }}
          >
            Bizzz Media Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
