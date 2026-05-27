"use client";

import { motion } from "framer-motion";
import { Eye, MapPin, Users, Gauge, Workflow } from "lucide-react";
import { content } from "@/lib/content";

const pillarIcons = [MapPin, Eye, Workflow, Gauge, Users];

export default function TerrainPrincipleSection() {
  const { terrainPrinciple } = content;

  return (
    <section
      id={terrainPrinciple.id}
      className="section-padding bg-ebe-anthraciteDark text-white section-separator"
      aria-labelledby="terrain-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
            {terrainPrinciple.eyebrow}
          </p>
          <h2
            id="terrain-heading"
            className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
          >
            {terrainPrinciple.title}
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            {terrainPrinciple.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 max-w-6xl mx-auto">
          {terrainPrinciple.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-lg border border-white/10 bg-white/5 p-5 text-center hover:bg-white/10 transition-colors"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-ebe-orange/15">
                  <Icon className="h-5 w-5 text-ebe-orange" aria-hidden />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-ebe-orange mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
