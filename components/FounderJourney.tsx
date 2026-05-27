"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";

export default function FounderJourney() {
  const { journey } = content.founder;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {journey.map((step, index) => (
        <motion.article
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="card-premium h-full border-t-[3px] border-ebe-orange/80"
        >
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-ebe-orange/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-bold text-primary-900 mt-2 mb-3">{step.title}</h3>
          <p className="text-neutral-700 leading-relaxed text-sm">{step.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
