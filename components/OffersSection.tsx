"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import OfferPhaseCard, { offerPhaseCardVariants } from "./OfferPhaseCard";
import Button from "./ui/Button";
import { icons } from "@/lib/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

export default function OffersSection() {
  const { homepageOffers } = content;

  return (
    <section
      id={homepageOffers.id}
      className="relative section-padding section-charte-alt section-separator overflow-hidden"
      aria-labelledby="offers-heading"
    >
      <motion.div
        className="absolute top-1/4 -right-20 w-72 h-72 bg-ebe-orange/[0.04] rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div
          variants={offerPhaseCardVariants}
          className="text-center mb-6 max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
            {homepageOffers.eyebrow}
          </p>
          <h2
            id="offers-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ebe-anthraciteDark mb-4 leading-tight"
          >
            {homepageOffers.title}{" "}
            <span className="text-ebe-orange italic">
              {homepageOffers.titleHighlight}
            </span>
          </h2>
        </motion.div>

        <motion.p
          variants={offerPhaseCardVariants}
          className="text-center text-sm md:text-base text-ebe-anthracite/65 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {homepageOffers.intro}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto mb-10"
          variants={containerVariants}
        >
          {homepageOffers.phases.map((phase, index) => (
            <OfferPhaseCard
              key={phase.id}
              phase={phase}
              index={index}
              variant="preview"
            />
          ))}
        </motion.div>

        <motion.div
          variants={offerPhaseCardVariants}
          className="text-center"
        >
          <Button
            href="/offres"
            variant="primary"
            icon={icons.cta.arrow}
            iconPosition="right"
            className="text-base px-8 py-4"
          >
            Explorer nos offres en détail
          </Button>
          <p className="text-xs text-ebe-anthracite/50 mt-4">
            Livrables, résultats attendus et modalités sur la page dédiée
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
