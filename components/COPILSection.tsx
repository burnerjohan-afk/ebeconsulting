"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { content } from "@/lib/content";
import { icons } from "@/lib/icons";

export default function COPILSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Image de fond comité de direction */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
        {/* Image de fond */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070')] bg-cover bg-center bg-no-repeat" />
        {/* Overlay réduit pour voir plus l'image */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-800/40 to-primary-900/60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.copil.title}
            </h2>
            <p className="text-2xl text-neutral-200 mb-4 font-semibold">
              {content.copil.subtitle}
            </p>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              {content.copil.description}
            </p>
          </motion.div>

          {/* Encart central clair */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01, y: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card bg-white/95 backdrop-blur-lg p-10 md:p-12 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.copil.missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F2A12C]/10 flex items-center justify-center">
                    <icons.copil.check className="w-5 h-5 text-[#F2A12C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      {mission.title}
                    </h3>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Button
              href="/copil"
              variant="primary"
              icon={icons.cta.arrow}
              iconPosition="right"
              className="text-lg px-10 py-4"
            >
              En savoir plus sur l'appui COPIL
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

