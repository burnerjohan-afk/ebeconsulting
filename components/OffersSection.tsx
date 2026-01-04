"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { content } from "@/lib/content";
import Button from "./ui/Button";
import { icons } from "@/lib/icons";
import { ArrowRight } from "lucide-react";

export default function OffersSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="offers-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="offers-heading" className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
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
                    <h3 className="text-2xl font-bold text-primary-900">
                      {offer.title}
                    </h3>
                  </div>
                </div>
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

