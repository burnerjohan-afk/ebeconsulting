"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { content } from "@/lib/content";
import Button from "./ui/Button";
import { icons } from "@/lib/icons";
import { ArrowRight } from "lucide-react";

export default function OffersSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {content.offers.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {content.offers.subtitle}
          </p>
        </motion.div>

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
                  <div className="w-12 h-12 rounded-lg bg-[#3E4A4F]/5 flex items-center justify-center group-hover:bg-[#F2A12C]/10 transition-colors">
                    {offer.id === "clarifier" && (
                      <icons.offers.clarifier className="w-6 h-6 text-[#3E4A4F] group-hover:text-[#F2A12C] transition-colors" />
                    )}
                    {offer.id === "structurer" && (
                      <icons.offers.structurer className="w-6 h-6 text-[#3E4A4F] group-hover:text-[#F2A12C] transition-colors" />
                    )}
                    {offer.id === "comprendre" && (
                      <icons.offers.comprendre className="w-6 h-6 text-[#3E4A4F] group-hover:text-[#F2A12C] transition-colors" />
                    )}
                    {offer.id === "securiser" && (
                      <icons.offers.securiser className="w-6 h-6 text-[#3E4A4F] group-hover:text-[#F2A12C] transition-colors" />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-[#F2A12C] uppercase tracking-wider">
                    {offer.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  {offer.title}
                </h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  {offer.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Button
                    href={`/contact?subject=${encodeURIComponent(`Offre : ${offer.title}`)}&offer=${offer.id}`}
                    variant="primary"
                    icon={icons.cta.arrow}
                    iconPosition="right"
                    className="flex-1 text-sm"
                  >
                    Demander un devis
                  </Button>
                  <Button
                    href={`/offres/${offer.id}`}
                    variant="ghost"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="flex-1 text-sm"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

