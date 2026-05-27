"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactFormWrapper from "./ContactFormWrapper";
import { content } from "@/lib/content";
import { Phone } from "lucide-react";

export default function FinalCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { contact } = content;

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden bg-ebe-anthraciteDark pb-16 sm:pb-24"
    >
      <div
        className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-ebe-orange pointer-events-none"
        aria-hidden
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {contact.title}
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              {contact.subtitle}
            </p>
          </motion.div>

          {!isFormOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center justify-center px-10 py-4 text-xs font-semibold uppercase tracking-[0.12em] bg-white text-ebe-anthraciteDark rounded-sm hover:bg-ebe-warmWhite transition-colors"
                >
                  M&apos;écrire
                </button>
                <Link
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 text-xs font-semibold uppercase tracking-[0.12em] bg-transparent text-white border border-white/30 rounded-sm hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden />
                  {contact.phone}
                </Link>
              </div>

              <p className="text-sm text-white/40 tracking-wide px-2 sm:px-0 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-0">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-ebe-orange hover:underline"
                >
                  {contact.email}
                </a>
                <span className="hidden sm:inline mx-2" aria-hidden>
                  ·
                </span>
                <span className="text-white/50 sm:text-white/40">{contact.zones}</span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card bg-white/95 backdrop-blur-lg p-8 md:p-12 rounded"
            >
              <div className="flex justify-end mb-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="text-ebe-anthracite/70 hover:text-ebe-anthracite transition-colors"
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
                    aria-hidden
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
