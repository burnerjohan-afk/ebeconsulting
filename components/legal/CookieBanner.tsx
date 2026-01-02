"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COOKIE_CONSENT_KEY, saveConsent, getConsent, type CookieConsent } from "@/lib/legal";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si un consentement existe déjà
    const consent = getConsent();
    if (!consent) {
      // Attendre un peu avant d'afficher le bandeau pour ne pas perturber l'expérience
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: false, // Par défaut, on ne met pas marketing
      functional: true,
    });
    setShowBanner(false);
    // Recharger la page pour charger les scripts analytics si nécessaire
    window.location.reload();
  };

  const handleRejectAll = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
    setShowBanner(false);
  };

  const handleCustomize = () => {
    // Rediriger vers la page de gestion des cookies
    window.location.href = "/cookies";
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#3E4A4F]/20 shadow-lg"
      >
        <div className="container-custom py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-[#3E4A4F] leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience de navigation. 
                Certains cookies sont essentiels au fonctionnement du site, d'autres nous aident à analyser l'utilisation du site. 
                Vous pouvez accepter tous les cookies, les refuser, ou{" "}
                <Link href="/cookies" className="text-[#F2A12C] hover:underline font-medium">
                  personnaliser vos préférences
                </Link>
                .{" "}
                <Link href="/confidentialite" className="text-[#3E4A4F]/70 hover:underline">
                  En savoir plus
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-[#3E4A4F] bg-white border border-[#3E4A4F]/30 rounded-lg hover:bg-[#3E4A4F]/5 transition-colors whitespace-nowrap"
              >
                Tout refuser
              </button>
              <button
                onClick={handleCustomize}
                className="px-4 py-2 text-sm font-medium text-[#3E4A4F] bg-white border border-[#3E4A4F]/30 rounded-lg hover:bg-[#3E4A4F]/5 transition-colors whitespace-nowrap"
              >
                Personnaliser
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 text-sm font-medium text-white bg-[#3E4A4F] rounded-lg hover:bg-[#2A3438] transition-colors whitespace-nowrap"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

