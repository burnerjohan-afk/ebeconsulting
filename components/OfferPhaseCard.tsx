"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import { icons } from "@/lib/icons";
import { contactHrefForOffer } from "@/lib/contact-subjects";
import { content } from "@/lib/content";

export type OfferPhase = (typeof content.homepageOffers.phases)[number] & {
  detailHref?: string;
  outcome?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

interface OfferPhaseCardProps {
  phase: OfferPhase;
  index?: number;
  variants?: typeof cardVariants;
  variant?: "preview" | "full";
}

function OfferBlock({
  label,
  children,
  compact = false,
}: {
  label: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "mb-3" : "mb-4"}>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ebe-orange mb-1.5">
        {label}
      </p>
      <div className="text-sm text-ebe-anthracite/80 leading-relaxed">{children}</div>
    </div>
  );
}

export default function OfferPhaseCard({
  phase,
  variants = cardVariants,
  variant = "full",
}: OfferPhaseCardProps) {
  const isPreview = variant === "preview";
  const labels = content.homepageOffers.structureLabels;
  const detailHref = phase.detailHref ?? `/offres/${phase.contactOfferId}`;

  return (
    <motion.article
      id={isPreview ? undefined : phase.id}
      variants={variants}
      whileHover={{ y: isPreview ? -4 : -8, scale: isPreview ? 1.01 : 1.015 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={`group relative bg-white rounded shadow-[0_2px_24px_rgba(62,74,79,0.07)] hover:shadow-[0_16px_48px_rgba(62,74,79,0.15)] border-t-[3px] border-transparent hover:border-ebe-orange transition-colors duration-300 overflow-hidden flex flex-col h-full ${
        isPreview ? "p-6 md:p-7" : "p-8 md:p-10"
      }`}
    >
      <span
        className="absolute top-0 left-0 h-0.5 w-0 bg-ebe-orange transition-all duration-500 group-hover:w-full"
        aria-hidden
      />

      <span
        className={`absolute z-0 font-bold text-ebe-orange/10 group-hover:text-ebe-orange/20 transition-colors duration-300 select-none leading-none pointer-events-none ${
          isPreview
            ? "top-5 right-5 text-3xl sm:text-4xl"
            : "top-6 right-8 text-5xl md:text-6xl"
        }`}
        aria-hidden
      >
        {phase.number}
      </span>

      <div
        className={`relative z-10 flex flex-col flex-1 min-w-0 ${
          isPreview ? "pr-14 sm:pr-16" : "pr-16 md:pr-20"
        }`}
      >
        <div className="mb-3">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ebe-orange mb-2 block">
            {phase.tag}
          </span>
          <h3 className="text-xl font-bold text-ebe-anthraciteDark group-hover:text-ebe-anthracite transition-colors">
            {phase.title}
          </h3>
        </div>

        <OfferBlock label={labels.problem} compact={isPreview}>
          <p className="italic text-ebe-anthracite/90">{phase.hook}</p>
        </OfferBlock>

        {!isPreview && (
          <OfferBlock label={labels.solution}>
            <p>{phase.description}</p>
          </OfferBlock>
        )}

        <OfferBlock label={labels.benefit} compact={isPreview}>
          <p className="bg-ebe-orange/[0.07] border-l-2 border-ebe-orange px-3 py-2.5 rounded-sm text-ebe-anthracite">
            {phase.result}
          </p>
        </OfferBlock>

        {!isPreview && phase.deliverables.length > 0 && (
          <ul className="space-y-2 mb-6 pt-4 mt-1 border-t border-ebe-anthracite/10">
            {phase.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-ebe-anthracite/70 group-hover:text-ebe-anthracite/85 transition-colors"
              >
                <ArrowRight
                  className="w-3.5 h-3.5 text-ebe-orange mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        <motion.div
          className={`flex gap-3 mt-auto pt-4 ${isPreview ? "flex-col" : "flex-col sm:flex-row"}`}
          initial={false}
          whileHover={{ x: 2 }}
        >
          {isPreview ? (
            <Button
              href={detailHref}
              variant="ghost"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full text-sm"
            >
              Voir le détail
            </Button>
          ) : (
            <>
              <Button
                href={contactHrefForOffer(phase.contactOfferId)}
                variant="primary"
                icon={icons.cta.arrow}
                iconPosition="right"
                className="flex-1 text-sm"
              >
                Parlons-en
              </Button>
              <Button
                href={detailHref}
                variant="ghost"
                icon={ArrowRight}
                iconPosition="right"
                className="flex-1 text-sm"
              >
                En savoir plus
              </Button>
            </>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
}

export { cardVariants as offerPhaseCardVariants };
