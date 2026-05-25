"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

interface OfferDetailOverviewProps {
  tag?: string;
  number?: string;
  hook?: string;
  description: string;
  result?: string;
}

export default function OfferDetailOverview({
  tag,
  number,
  hook,
  description,
  result,
}: OfferDetailOverviewProps) {
  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group relative bg-white rounded-lg p-8 md:p-10 shadow-[0_2px_24px_rgba(62,74,79,0.07)] hover:shadow-[0_12px_40px_rgba(62,74,79,0.13)] border-t-[3px] border-transparent hover:border-ebe-orange transition-colors duration-300 overflow-hidden"
    >
      <span
        className="absolute top-0 left-0 h-0.5 w-0 bg-ebe-orange transition-all duration-500 group-hover:w-full"
        aria-hidden
      />

      {number && (
        <motion.span
          variants={itemVariants}
          className="absolute top-5 right-6 md:top-6 md:right-8 text-5xl md:text-6xl font-bold text-ebe-orange/10 group-hover:text-ebe-orange/20 transition-colors duration-300 select-none leading-none"
          aria-hidden
        >
          {number}
        </motion.span>
      )}

      {tag && (
        <motion.span
          variants={itemVariants}
          className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ebe-orange mb-3 block"
        >
          {tag}
        </motion.span>
      )}

      {hook && (
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-semibold text-ebe-orange mb-5 pr-14 leading-snug group-hover:text-ebe-orange/90 transition-colors"
        >
          {hook}
        </motion.p>
      )}

      <motion.p
        variants={itemVariants}
        className="text-base text-ebe-anthracite/80 leading-relaxed mb-6 group-hover:text-ebe-anthracite/90 transition-colors"
      >
        {description}
      </motion.p>

      {result && (
        <motion.div
          variants={itemVariants}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative bg-ebe-orange/[0.07] border-l-[3px] border-ebe-orange px-4 py-4 rounded-sm text-ebe-anthracite flex items-start gap-3 overflow-hidden"
        >
          <span
            className="absolute inset-0 bg-ebe-orange/5 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"
            aria-hidden
          />
          <motion.span
            className="relative flex-shrink-0 w-8 h-8 rounded-full bg-ebe-orange/15 flex items-center justify-center group-hover:bg-ebe-orange transition-colors duration-300"
            whileHover={{ rotate: -8, scale: 1.1 }}
          >
            <ArrowRight
              className="w-4 h-4 text-ebe-orange group-hover:text-white transition-colors duration-300"
              aria-hidden
            />
          </motion.span>
          <p className="relative text-sm md:text-base leading-relaxed">
            <strong className="font-semibold text-ebe-anthraciteDark">
              Résultat attendu :
            </strong>{" "}
            {result}
          </p>
        </motion.div>
      )}
    </motion.article>
  );
}
