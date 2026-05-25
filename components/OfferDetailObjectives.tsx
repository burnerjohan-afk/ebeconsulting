"use client";

import { motion } from "framer-motion";
import { Crosshair, Flag, Lightbulb, Target } from "lucide-react";

const objectiveIcons = [Target, Crosshair, Lightbulb, Flag];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

interface OfferDetailObjectivesProps {
  objectives: string[];
}

export default function OfferDetailObjectives({ objectives }: OfferDetailObjectivesProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.p
        variants={itemVariants}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-3"
      >
        Ce que nous visons
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="text-2xl md:text-3xl font-bold text-ebe-anthraciteDark mb-8"
      >
        Objectifs
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={containerVariants}>
        {objectives.map((objective, index) => {
          const Icon = objectiveIcons[index % objectiveIcons.length];
          const number = String(index + 1).padStart(2, "0");

          return (
            <motion.article
              key={objective}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group relative bg-white rounded-lg p-6 md:p-7 shadow-[0_2px_24px_rgba(62,74,79,0.07)] hover:shadow-[0_12px_40px_rgba(62,74,79,0.13)] border-t-[3px] border-transparent hover:border-ebe-orange transition-colors duration-300 overflow-hidden"
            >
              <span
                className="absolute top-0 left-0 h-0.5 w-0 bg-ebe-orange transition-all duration-500 group-hover:w-full"
                aria-hidden
              />
              <span
                className="absolute -bottom-3 -right-1 text-6xl font-bold text-ebe-anthracite/[0.04] group-hover:text-ebe-orange/10 transition-colors select-none leading-none"
                aria-hidden
              >
                {number}
              </span>

              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  className="flex-shrink-0 w-11 h-11 rounded-full bg-ebe-orange/10 flex items-center justify-center group-hover:bg-ebe-orange group-hover:scale-110 transition-all duration-300 mt-0.5"
                  whileHover={{ rotate: 8 }}
                >
                  <Icon
                    className="w-5 h-5 text-ebe-orange group-hover:text-white transition-colors duration-300"
                    aria-hidden
                  />
                </motion.div>
                <div className="flex-1 min-w-0 pt-1">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-ebe-orange/70 group-hover:text-ebe-orange transition-colors block mb-2">
                    Objectif {number}
                  </span>
                  <p className="text-base text-ebe-anthracite/85 leading-relaxed group-hover:text-ebe-anthracite transition-colors">
                    {objective}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
