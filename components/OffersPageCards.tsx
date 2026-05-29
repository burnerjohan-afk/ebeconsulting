"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import OfferPhaseCard, { offerPhaseCardVariants } from "./OfferPhaseCard";
import { getAllOfferPhases } from "@/lib/offers";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export default function OffersPageCards() {
  const { offers } = content;
  const allPhases = getAllOfferPhases();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.p
        variants={offerPhaseCardVariants}
        className="text-center text-base md:text-lg text-ebe-anthracite/75 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        {offers.pageIntro}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-7"
        variants={containerVariants}
      >
        {allPhases.map((phase, index) => (
          <OfferPhaseCard key={phase.id} phase={phase} index={index} variant="full" />
        ))}
      </motion.div>
    </motion.div>
  );
}
