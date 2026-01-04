"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { content } from "@/lib/content";
import Button from "./ui/Button";
import { icons } from "@/lib/icons";
import { ArrowRight } from "lucide-react";

export default function OffersPageCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {content.offers.list.map((offer, index) => (
        <motion.div
          key={offer.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <div className="card-premium h-full group">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1D1D1F] to-black text-white flex items-center justify-center shadow-lg group-hover:from-[#FF9500] group-hover:to-[#E68500] transition-all duration-300">
                  {offer.id === "clarifier" && (
                    <icons.offers.clarifier className="w-6 h-6" />
                  )}
                  {offer.id === "structurer" && (
                    <icons.offers.structurer className="w-6 h-6" />
                  )}
                  {offer.id === "comprendre" && (
                    <icons.offers.comprendre className="w-6 h-6" />
                  )}
                  {offer.id === "securiser" && (
                    <icons.offers.securiser className="w-6 h-6" />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#FF9500] uppercase tracking-wider block mb-1">
                  {offer.subtitle}
                </span>
                <h2 className="text-2xl font-bold text-primary-900">
                  {offer.title}
                </h2>
              </div>
            </div>
            <p className="text-neutral-700 mb-6 leading-relaxed">{offer.description}</p>

            {/* Objectifs en encarts */}
            <div className="mb-6">
              <h3 className="font-semibold text-primary-900 mb-3 text-sm uppercase tracking-wide">
                Objectifs
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {offer.objectives.slice(0, 3).map((obj, objIndex) => (
                  <div
                    key={objIndex}
                    className="flex items-start p-3 bg-[#1D1D1F]/5 rounded-lg border border-[#1D1D1F]/10 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-[#FF9500] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-neutral-700 leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                href={`/contact?subject=${encodeURIComponent(`Offre : ${offer.title}`)}&offer=${offer.id}`}
                variant="primary"
                className="flex-1"
                icon={icons.cta.arrow}
                iconPosition="right"
              >
                Demander un devis
              </Button>
              <Button
                href={`/offres/${offer.id}`}
                variant="ghost"
                icon={ArrowRight}
                iconPosition="right"
                className="flex-1"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

