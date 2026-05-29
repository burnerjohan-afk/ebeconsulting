"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { content } from "@/lib/content";
import { MapPin } from "lucide-react";

function CaseBlock({
  label,
  children,
  accent = false,
}: {
  label: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={accent ? "mt-4 pt-4 border-t border-neutral-100" : "mb-4 last:mb-0"}>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ebe-orange mb-1.5">
        {label}
      </p>
      <div className="text-sm text-neutral-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const { caseStudies } = content;
  const labels = caseStudies.structureLabels;

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.items.map((item, index) => (
            <motion.article
              key={item.situation}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-premium h-full border-t-[3px] border-ebe-orange/80 flex flex-col"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ebe-orange/10">
                <MapPin className="h-5 w-5 text-ebe-orange" aria-hidden />
              </div>
              <p className="text-xs font-medium text-ebe-anthracite/60 mb-3">
                {item.sector}
              </p>
              <h3 className="text-lg font-bold text-primary-900 mb-4 leading-snug">
                {item.situation}
              </h3>

              <CaseBlock label={labels.context}>{item.context}</CaseBlock>
              <CaseBlock label={labels.problem}>{item.problem}</CaseBlock>
              <CaseBlock label={labels.intervention}>{item.intervention}</CaseBlock>
              <CaseBlock label={labels.outcome} accent>
                <span className="font-medium text-primary-900">{item.outcome}</span>
              </CaseBlock>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center text-xs text-neutral-500 max-w-2xl mx-auto leading-relaxed"
        >
          {caseStudies.footnote}
        </motion.p>
      </div>
    </section>
  );
}
