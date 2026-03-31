"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#overons", label: "Over ons" },
  { href: "/#duurzaamheid", label: "Duurzaamheid" },
  { href: "/#diensten", label: "Diensten" },
  { href: "/#projecten", label: "Projecten" },
  { href: "/dynet-electric", label: "Dynet Electric" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "#FDFBF2",
        borderBottom: "2px solid #11133D",
      }}
    >
      <div
        className="mx-auto flex items-center"
        style={{ maxWidth: 1400, gap: 10, padding: "0" }}
      >
        {/* Column 1 - Logo (11%) */}
        <div className="shrink-0" style={{ width: "11%" }}>
          <Link href="/">
            <Image
              src="/images/logo-infra.png"
              alt="Dynet Infratechniek"
              width={220}
              height={70}
              className="w-full h-auto"
              priority
            />
          </Link>
        </div>

        {/* Column 2 - Navigation (72%) */}
        <nav
          className="hidden lg:flex items-center self-center flex-1"
          style={{ marginLeft: 10 }}
        >
          {navLinks.map((link, index) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="px-3 py-2 transition-colors"
                style={{
                  fontFamily: "'PT Sans Caption', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#11133D",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
              {index < navLinks.length - 1 && (
                <span style={{ color: "#11133D", userSelect: "none" }}>|</span>
              )}
            </span>
          ))}
        </nav>

        {/* Column 3 - Icons (18%) */}
        <div
          className="hidden lg:flex items-center justify-end"
          style={{ width: "18%", gap: 5 }}
        >
          {/* Phone */}
          <a
            href="tel:0852224002"
            className="flex items-center justify-center rounded-full"
            style={{
              width: 38,
              height: 38,
              backgroundColor: "#11133D",
              color: "#FFFFFF",
            }}
            aria-label="Bel ons"
          >
            <svg
              style={{ width: 19, height: 19 }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
          {/* Email */}
          <a
            href="mailto:info@dynet.nl"
            className="flex items-center justify-center rounded-full"
            style={{
              width: 38,
              height: 38,
              backgroundColor: "#11133D",
              color: "#FFFFFF",
            }}
            aria-label="Email ons"
          >
            <svg
              style={{ width: 19, height: 19 }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          {/* User */}
          <a
            href="https://tool.dynet.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full"
            style={{
              width: 38,
              height: 38,
              backgroundColor: "#11133D",
              color: "#FFFFFF",
            }}
            aria-label="Portal"
          >
            <svg
              style={{ width: 19, height: 19 }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 ml-auto mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          style={{ backgroundColor: "#11133D", borderRadius: 4 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="#FDFDFD"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="lg:hidden"
          style={{ backgroundColor: "#FDFBF2", borderTop: "1px solid #11133D" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3"
              style={{
                fontFamily: "'PT Sans Caption', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: "#11133D",
                textDecoration: "none",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 px-4 py-3">
            <a
              href="tel:0852224002"
              className="flex items-center justify-center rounded-full"
              style={{
                width: 34,
                height: 34,
                backgroundColor: "#11133D",
                color: "#FFFFFF",
              }}
            >
              <svg style={{ width: 15, height: 15 }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a
              href="mailto:info@dynet.nl"
              className="flex items-center justify-center rounded-full"
              style={{
                width: 34,
                height: 34,
                backgroundColor: "#11133D",
                color: "#FFFFFF",
              }}
            >
              <svg style={{ width: 15, height: 15 }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://tool.dynet.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full"
              style={{
                width: 34,
                height: 34,
                backgroundColor: "#11133D",
                color: "#FFFFFF",
              }}
            >
              <svg style={{ width: 15, height: 15 }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
