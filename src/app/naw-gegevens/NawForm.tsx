"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function NawForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/bedankt-voor-uw-gegevens");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="ubent" className="block text-sm font-medium text-gray-700 mb-1.5">U bent *</label>
        <select
          id="ubent"
          name="ubent"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors"
        >
          <option value="">Selecteer...</option>
          <option value="eigenaar">Eigenaar</option>
          <option value="huurder">Huurder</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="voornaam" className="block text-sm font-medium text-gray-700 mb-1.5">Voornaam *</label>
          <input type="text" id="voornaam" name="voornaam" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="achternaam" className="block text-sm font-medium text-gray-700 mb-1.5">Achternaam *</label>
          <input type="text" id="achternaam" name="achternaam" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">E-mailadres *</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors" />
      </div>

      <div>
        <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1.5">Telefoonnummer *</label>
        <input type="tel" id="telefoon" name="telefoon" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="straatnaam" className="block text-sm font-medium text-gray-700 mb-1.5">Straatnaam *</label>
          <input type="text" id="straatnaam" name="straatnaam" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="huisnr" className="block text-sm font-medium text-gray-700 mb-1.5">Huisnr &amp; toevoeging *</label>
          <input type="text" id="huisnr" name="huisnr" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1.5">Postcode *</label>
          <input type="text" id="postcode" name="postcode" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="woonplaats" className="block text-sm font-medium text-gray-700 mb-1.5">Woonplaats *</label>
          <input type="text" id="woonplaats" name="woonplaats" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors" />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-3.5 bg-green text-white rounded-lg font-semibold hover:bg-green-light transition-colors text-lg disabled:opacity-50"
      >
        {loading ? "Bezig met versturen..." : "Gegevens versturen"}
      </button>
    </form>
  );
}
