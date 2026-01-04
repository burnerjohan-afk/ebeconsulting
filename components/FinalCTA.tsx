"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactFormWrapper from "./ContactFormWrapper";
import Button from "./ui/Button";
import { icons } from "@/lib/icons";

export default function FinalCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Image de fond sobre */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
        {/* Image abstraite ou bureau direction */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center bg-no-repeat" />
        {/* Overlay réduit */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-transparent to-primary-900/60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Parlez-nous de votre situation
            </h2>
            <p className="text-xl text-neutral-200 leading-relaxed max-w-2xl mx-auto">
              Échangeons sur vos enjeux et définissons ensemble la meilleure
              approche pour votre organisation.
            </p>
          </motion.div>

          {!isFormOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <motion.button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold bg-white text-[#1D1D1F] hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Ouvrir le formulaire de contact</span>
                {icons.cta.message && (
                  <icons.cta.message className="w-5 h-5" aria-hidden="true" />
                )}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card bg-white/95 backdrop-blur-lg p-8 md:p-12"
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-[#1D1D1F]/70 hover:text-[#1D1D1F] transition-colors"
                  aria-label="Fermer le formulaire"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ContactFormWrapper />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

