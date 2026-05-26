"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import {
  ScanSearch,
  Workflow,
  ShieldCheck,
  BadgeCheck,
  Building2,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const typeIcons: Record<string, LucideIcon> = {
  diagnostic: Building2,
  qualite: ShieldCheck,
  organisation: Workflow,
  apsad: ScanSearch,
  iso: BadgeCheck,
};

export function AuditWhyGrid() {
  const { why } = content.audits;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {why.items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="card-premium h-full"
        >
          <h3 className="text-xl font-bold text-primary-900 mb-3">{item.title}</h3>
          <p className="text-neutral-700 leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function AuditApproachSteps() {
  const { approach } = content.audits;

  return (
    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {approach.steps.map((step, index) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative card-premium h-full list-none"
        >
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ebe-orange text-white text-sm font-bold mb-4"
            aria-hidden
          >
            {index + 1}
          </span>
          <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
          <p className="text-neutral-700 text-sm leading-relaxed">{step.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}

export function AuditTypesGrid() {
  const { types } = content.audits;

  return (
    <div className="space-y-8">
      {types.items.map((audit, index) => {
        const Icon = typeIcons[audit.id] ?? ScanSearch;
        return (
          <motion.article
            key={audit.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            className="card-premium overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-900 to-primary-800 text-white flex items-center justify-center shadow-lg">
                  <Icon className="w-7 h-7" aria-hidden />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-primary-900 mb-3">{audit.title}</h3>
                <p className="text-neutral-700 leading-relaxed mb-5">{audit.description}</p>
                <ul className="space-y-2">
                  {audit.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-neutral-700">
                      <CheckCircle2
                        className="w-5 h-5 text-ebe-orange flex-shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export function AuditDeliverablesList() {
  const { deliverables } = content.audits;

  return (
    <ul className="max-w-2xl mx-auto space-y-4">
      {deliverables.items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="flex items-start gap-3 text-lg text-neutral-700"
        >
          <CheckCircle2 className="w-6 h-6 text-ebe-orange flex-shrink-0 mt-0.5" aria-hidden />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
