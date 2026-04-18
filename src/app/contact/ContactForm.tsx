"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const onderwerpen: string[] = [];
    formData.getAll("subject").forEach((v) => {
      if (typeof v === "string") onderwerpen.push(v);
    });

    const payload = {
      onderwerpen,
      bedrijfsnaam: formData.get("bedrijfsnaam"),
      voornaam: formData.get("firstName"),
      achternaam: formData.get("lastName"),
      telefoon: formData.get("phone"),
      email: formData.get("email"),
      vraag: formData.get("message"),
      website: formData.get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Versturen mislukt");
      }

      router.push("/bedankt-contact");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis");
      setLoading(false);
    }
  }

  const labelStyle = {
    fontFamily: "'PT Sans', sans-serif",
    fontSize: 16,
    fontWeight: 600,
    color: "#FFFFFF",
    marginBottom: 5,
    display: "block" as const,
  };

  const requiredStyle = { color: "#2E9F48" };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot - bots vullen dit in, mensen niet */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
      />
      <div>
        <span style={labelStyle}>Waarmee kunnen we u helpen?</span>
        <div className="flex flex-wrap gap-4 mt-2">
          {["Facturatie", "Projecten", "Bezoek plannen"].map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer" style={{ fontSize: 16, color: "#FFFFFF" }}>
              <input type="checkbox" name="subject" value={option} className="h-4 w-4" />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="bedrijfsnaam" style={labelStyle}>
          Bedrijfsnaam <span style={requiredStyle}>*</span>
        </label>
        <input type="text" id="bedrijfsnaam" name="bedrijfsnaam" placeholder="Bedrijfsnaam" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green outline-none text-white placeholder-white/50 bg-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" style={labelStyle}>
            Voornaam <span style={requiredStyle}>*</span>
          </label>
          <input type="text" id="firstName" name="firstName" placeholder="Voornaam" required className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green outline-none text-white placeholder-white/50 bg-transparent" />
        </div>
        <div>
          <label htmlFor="lastName" style={labelStyle}>
            Achternaam <span style={requiredStyle}>*</span>
          </label>
          <input type="text" id="lastName" name="lastName" placeholder="Achternaam" required className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green outline-none text-white placeholder-white/50 bg-transparent" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" style={labelStyle}>
            Telefoonnummer <span style={requiredStyle}>*</span>
          </label>
          <input type="tel" id="phone" name="phone" placeholder="Telefoonnummer" required className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green outline-none text-white placeholder-white/50 bg-transparent" />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            E-mailadres <span style={requiredStyle}>*</span>
          </label>
          <input type="email" id="email" name="email" placeholder="E-mailadres" required className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green outline-none text-white placeholder-white/50 bg-transparent" />
        </div>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          Uw vraag <span style={requiredStyle}>*</span>
        </label>
        <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green outline-none resize-none text-white placeholder-white/50 bg-transparent" />
      </div>

      {error && (
        <div className="p-3 rounded" style={{ backgroundColor: "#fee", color: "#c00", fontSize: 14 }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 text-white rounded font-semibold transition-colors disabled:opacity-50"
        style={{ backgroundColor: "#2E9F48", fontSize: 16 }}
      >
        {loading ? "Bezig met verzenden..." : "Verzenden"}
      </button>
    </form>
  );
}
