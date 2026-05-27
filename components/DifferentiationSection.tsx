"use client";

import { motion } from "framer-motion";
import { Briefcase, ClipboardList, Compass, TrendingUp } from "lucide-react";
import { content } from "@/lib/content";

const pointIcons = [Briefcase, Compass, ClipboardList, TrendingUp];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DifferentiationSection() {
  const { differentiation } = content;

  return (
    <section
      id={differentiation.id}
      className="relative section-padding section-charte section-separator overflow-hidden"
      aria-labelledby="pourquoi-heading"
    >
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 bg-ebe-orange/[0.06] rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[45%] h-1/2 bg-gradient-to-tr from-ebe-orange/[0.04] to-transparent pointer-events-none"
        aria-hidden
      />

      <motion.div
        className="absolute top-0 left-[12%] w-px h-16 bg-ebe-orange/60 pointer-events-none"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ transformOrigin: "top" }}
        aria-hidden
      />

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={cardVariants} className="text-center mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
            {differentiation.eyebrow}
          </p>
          <h2
            id="pourquoi-heading"
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ebe-anthraciteDark leading-tight max-w-3xl mx-auto"
          >
            {differentiation.title}{" "}
            <span className="text-ebe-orange">{differentiation.titleAccent}</span>
          </h2>
          {differentiation.subtitle ? (
            <p className="mt-5 text-base md:text-lg text-ebe-anthracite/70 max-w-2xl mx-auto leading-relaxed">
              {differentiation.subtitle}
            </p>
          ) : null}
        </motion.div>

        <motion.blockquote
          variants={cardVariants}
          whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(62,74,79,0.12)" }}
          className="relative max-w-4xl mx-auto mb-12 md:mb-16 text-lg md:text-xl lg:text-2xl italic font-normal text-ebe-anthracite leading-relaxed p-8 md:p-10 bg-white rounded shadow-[0_2px_24px_rgba(62,74,79,0.07)] border-l-[4px] border-ebe-orange overflow-hidden group"
        >
          <span
            className="absolute -top-2 left-4 text-[5rem] md:text-[6rem] leading-none text-ebe-orange/20 select-none transition-colors duration-500 group-hover:text-ebe-orange/30"
            aria-hidden
          >
            &ldquo;
          </span>
          <motion.span
            className="absolute left-0 top-0 w-[4px] h-0 bg-ebe-orangeBright group-hover:h-full transition-all duration-700 ease-out"
            aria-hidden
          />
          <p className="relative z-10 pl-2">{differentiation.quote}</p>
        </motion.blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {differentiation.points.map((point, index) => {
            const Icon = pointIcons[index];
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={point.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group relative bg-white rounded p-7 md:p-8 shadow-[0_2px_24px_rgba(62,74,79,0.07)] hover:shadow-[0_12px_40px_rgba(62,74,79,0.13)] border-t-[3px] border-transparent hover:border-ebe-orange transition-colors duration-300 overflow-hidden"
              >
                <span
                  className="absolute top-0 left-0 h-0.5 w-0 bg-ebe-orange transition-all duration-500 group-hover:w-full"
                  aria-hidden
                />

                <motion.div
                  className="absolute -bottom-6 -right-6 text-7xl font-bold text-ebe-anthracite/[0.04] select-none leading-none transition-colors duration-300 group-hover:text-ebe-orange/10"
                  aria-hidden
                >
                  {number}
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 relative z-10"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-ebe-orange/10 flex items-center justify-center group-hover:bg-ebe-orange group-hover:scale-110 transition-all duration-300">
                    <Icon
                      className="w-5 h-5 text-ebe-orange group-hover:text-white transition-colors duration-300"
                      aria-hidden
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-ebe-orange/70 group-hover:text-ebe-orange transition-colors">
                        {number}
                      </span>
                      <span className="h-px flex-1 bg-ebe-anthracite/10 group-hover:bg-ebe-orange/30 transition-colors" aria-hidden />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-ebe-anthraciteDark mb-2 group-hover:text-ebe-anthracite transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-sm text-ebe-anthracite/70 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
