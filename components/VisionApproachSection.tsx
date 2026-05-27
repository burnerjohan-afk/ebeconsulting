"use client";

import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";
import { content } from "@/lib/content";

export default function VisionApproachSection() {
  const { visionApproach } = content.positioning;

  return (
    <section
      id="vision-approche"
      className="section-padding section-charte section-separator"
      aria-labelledby="vision-approach-heading"
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
            {visionApproach.eyebrow}
          </p>
          <h2
            id="vision-approach-heading"
            className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight"
          >
            {visionApproach.bridge}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-premium flex flex-col"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ebe-orange/10">
              <Target className="h-6 w-6 text-ebe-orange" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-3">
              {visionApproach.vision.title}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed flex-1">
              {visionApproach.vision.text}
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="card-premium flex flex-col"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ebe-orange/10">
              <Compass className="h-6 w-6 text-ebe-orange" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-3">
              {visionApproach.approach.title}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed flex-1">
              {visionApproach.approach.text}
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
