"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import { icons } from "@/lib/icons";

export type OfferPhase = {
  id: string;
  number: string;
  tag: string;
  title: string;
  hook: string;
  description: string;
  deliverables: string[];
  result: string;
  outcome?: string;
  contactOfferId: string;
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

export default function OfferPhaseCard({
  phase,
  index = 0,
  variants = cardVariants,
  variant = "full",
}: OfferPhaseCardProps) {
  const isPreview = variant === "preview";

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
        <div className="mb-2">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ebe-orange mb-3 block">
            {phase.tag}
          </span>
          <h3 className="text-xl font-bold text-ebe-anthraciteDark mb-2 group-hover:text-ebe-anthracite transition-colors">
            {phase.title}
          </h3>
        </div>

        <p className="text-sm italic text-ebe-orange mb-4">{phase.hook}</p>

      {!isPreview && (
        <p className="text-sm text-ebe-anthracite/75 leading-relaxed mb-5 flex-1">
          {phase.description}
        </p>
      )}

      {isPreview && (
        <p className="text-sm bg-ebe-orange/[0.07] border-l-2 border-ebe-orange px-4 py-3 rounded-sm text-ebe-anthracite mb-5 flex-1">
          {phase.outcome ?? phase.result}
        </p>
      )}

      {!isPreview && (
        <>
          <ul className="space-y-2 mb-6 pt-5 border-t border-ebe-anthracite/10">
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

          <motion.p
            className="text-sm bg-ebe-orange/[0.07] border-l-2 border-ebe-orange px-4 py-3 rounded-sm text-ebe-anthracite mb-6"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <strong className="font-semibold text-ebe-anthraciteDark">
              Résultat attendu :
            </strong>{" "}
            {phase.result}
          </motion.p>
        </>
      )}

      <motion.div
        className={`flex gap-3 mt-auto ${isPreview ? "flex-col" : "flex-col sm:flex-row"}`}
        initial={false}
        whileHover={{ x: 2 }}
      >
        {isPreview ? (
          <Button
            href={`/offres/${phase.contactOfferId}`}
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
              href={`/contact?subject=${encodeURIComponent(`Offre : ${phase.title}`)}&offer=${phase.contactOfferId}`}
              variant="primary"
              icon={icons.cta.arrow}
              iconPosition="right"
              className="flex-1 text-sm"
            >
              Parlons-en
            </Button>
            <Button
              href={`/offres/${phase.contactOfferId}`}
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
