"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getConsent, saveConsent, clearConsent, type CookieConsent, hasConsent } from "@/lib/legal";
import { CheckCircle2, XCircle, Info } from "lucide-react";

export default function CookiePreferences() {
  const [preferences, setPreferences] = useState<Omit<CookieConsent, "essential" | "timestamp">>({
    analytics: false,
    marketing: false,
    functional: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent) {
      setPreferences({
        analytics: consent.analytics,
        marketing: consent.marketing,
        functional: consent.functional,
      });
    }
  }, []);

  const handleToggle = (category: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
    setSaved(false);
  };

  const handleSave = () => {
    saveConsent({
      essential: true,
      ...preferences,
    });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      // Recharger pour appliquer les changements
      window.location.reload();
    }, 2000);
  };

  const handleRejectAll = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
    setSaved(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: false,
      functional: true,
    });
    setSaved(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#F5F5F7] border border-[#1D1D1F]/10 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#1D1D1F] flex-shrink-0 mt-0.5" />
          <div className="text-sm text-[#1D1D1F]">
            <p className="font-medium mb-1">Gestion de vos préférences cookies</p>
            <p>
              Vous pouvez à tout moment modifier vos préférences. Les cookies essentiels ne peuvent pas être désactivés car ils sont nécessaires au fonctionnement du site.
            </p>
          </div>
        </div>
      </div>

      {/* Cookies essentiels */}
      <div className="border border-[#1D1D1F]/10 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">Cookies essentiels</h3>
            <p className="text-sm text-[#1D1D1F]/70">
              Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#1D1D1F]">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-medium">Toujours actifs</span>
          </div>
        </div>
        <div className="mt-4 text-sm text-[#1D1D1F]/70">
          <p className="mb-2">Ces cookies permettent :</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>La mémorisation de vos préférences de cookies</li>
            <li>Le fonctionnement sécurisé du site</li>
            <li>La gestion de votre session de navigation</li>
          </ul>
        </div>
      </div>

      {/* Analytics */}
      <div className="border border-[#1D1D1F]/10 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">Mesure d'audience</h3>
            <p className="text-sm text-[#1D1D1F]/70">
              Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site.
            </p>
          </div>
          <button
            onClick={() => handleToggle("analytics")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              preferences.analytics ? "bg-[#FF9500]" : "bg-[#1D1D1F]/20"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                preferences.analytics ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        {preferences.analytics && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 text-sm text-[#1D1D1F]/70"
          >
            <p className="mb-2">Ces cookies collectent :</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Le nombre de visiteurs</li>
              <li>Les pages les plus consultées</li>
              <li>Le temps passé sur le site</li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* Marketing */}
      <div className="border border-[#1D1D1F]/10 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">Marketing</h3>
            <p className="text-sm text-[#1D1D1F]/70">
              Ces cookies permettent d'afficher des publicités personnalisées (actuellement non utilisés).
            </p>
          </div>
          <button
            onClick={() => handleToggle("marketing")}
            disabled
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#1D1D1F]/10 cursor-not-allowed opacity-50"
          >
            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
          </button>
        </div>
        <p className="text-xs text-[#1D1D1F]/60 italic">Non utilisé actuellement</p>
      </div>

      {/* Fonctionnels */}
      <div className="border border-[#1D1D1F]/10 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">Cookies fonctionnels</h3>
            <p className="text-sm text-[#1D1D1F]/70">
              Ces cookies améliorent les fonctionnalités du site (préférences, vidéos, etc.).
            </p>
          </div>
          <button
            onClick={() => handleToggle("functional")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              preferences.functional ? "bg-[#FF9500]" : "bg-[#1D1D1F]/20"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                preferences.functional ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          onClick={handleRejectAll}
          className="px-6 py-3 text-sm font-medium text-[#1D1D1F] bg-white border border-[#1D1D1F]/30 rounded-lg hover:bg-[#1D1D1F]/5 transition-colors"
        >
          Tout refuser
        </button>
        <button
          onClick={handleAcceptAll}
          className="px-6 py-3 text-sm font-medium text-[#1D1D1F] bg-white border border-[#1D1D1F]/30 rounded-lg hover:bg-[#1D1D1F]/5 transition-colors"
        >
          Tout accepter
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-3 text-sm font-medium text-white bg-[#1D1D1F] rounded-lg hover:bg-[#2A3438] transition-colors flex-1 sm:flex-initial"
        >
          {saved ? "✓ Préférences enregistrées" : "Enregistrer mes préférences"}
        </button>
      </div>

      {saved && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-sm"
        >
          Vos préférences ont été enregistrées. La page va se recharger pour appliquer les changements.
        </motion.div>
      )}
    </div>
  );
}

