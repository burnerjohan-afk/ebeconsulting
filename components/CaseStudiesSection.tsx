"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { MapPin } from "lucide-react";

export default function CaseStudiesSection() {
  const { caseStudies } = content;

  return (
    <section
      id={caseStudies.id}
      className="section-padding section-charte-alt section-separator"
      aria-labelledby="case-studies-heading"
    >
      <div className="container-custom max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
            {caseStudies.eyebrow}
          </p>
          <h2
            id="case-studies-heading"
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
          >
            {caseStudies.title}
          </h2>
          <p className="text-neutral-600 leading-relaxed">{caseStudies.intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.items.map((item, index) => (
            <motion.article
              key={item.situation}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-premium h-full border-t-[3px] border-ebe-orange/80"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ebe-orange/10">
                <MapPin className="h-5 w-5 text-ebe-orange" aria-hidden />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ebe-orange mb-2">
                Situation
              </p>
              <h3 className="text-lg font-bold text-primary-900 mb-4">
                {item.situation}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ebe-anthracite/50 mb-2">
                Résultat
              </p>
              <p className="text-neutral-700 leading-relaxed text-sm">
                {item.outcome}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
