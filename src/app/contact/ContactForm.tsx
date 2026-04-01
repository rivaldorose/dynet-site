"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/bedankt-contact");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          className="block text-sm font-medium text-white mb-2"
        >
          Waarmee kunnen we u helpen?
        </label>
        <div className="flex flex-wrap gap-4">
          {["Facturatie", "Projecten", "Bezoek plannen"].map((option) => (
            <label key={option} className="flex items-center gap-2 text-white text-sm cursor-pointer">
              <input
                type="checkbox"
                name="subject"
                value={option.toLowerCase()}
                className="h-4 w-4 accent-green"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="bedrijfsnaam"
          className="block text-sm font-medium text-white mb-2"
        >
          Bedrijfsnaam
        </label>
        <input
          type="text"
          id="bedrijfsnaam"
          name="bedrijfsnaam"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-white mb-2"
          >
            Voornaam *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-white mb-2"
          >
            Achternaam *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white mb-2"
          >
            Telefoonnummer *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            E-mailadres *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-2"
        >
          Uw vraag *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-3.5 text-white rounded-lg font-semibold transition-colors text-lg disabled:opacity-50"
        style={{ backgroundColor: "#2E9F48" }}
      >
        {loading ? "Bezig met verzenden..." : "Verzenden"}
      </button>
    </form>
  );
}
