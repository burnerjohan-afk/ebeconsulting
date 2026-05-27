"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { icons } from "@/lib/icons";

const stepIcons = [
  icons.method.voir,
  icons.method.comprendre,
  icons.method.structurer,
  icons.method.transmettre,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MethodSection() {
  const { method } = content;

  return (
    <section
      id={method.id}
      className="relative section-padding section-charte section-separator overflow-hidden"
      aria-labelledby="method-heading"
    >
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-ebe-orange/[0.05] rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="absolute top-0 right-[8%] w-px h-20 bg-ebe-orange/50 pointer-events-none"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
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
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
            {method.eyebrow}
          </p>
          <h2
            id="method-heading"
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ebe-anthraciteDark mb-6 leading-tight"
          >
            {method.title}
          </h2>
          <p className="text-lg font-semibold text-ebe-anthracite border-l-[3px] border-ebe-orange pl-6 leading-relaxed text-left md:text-center md:border-l-0 md:pl-0 md:max-w-2xl md:mx-auto mb-3">
            {method.subtitle}
          </p>
          {"intro" in method && method.intro && (
            <p className="text-base text-ebe-anthracite/75 max-w-2xl md:mx-auto leading-relaxed">
              {method.intro}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hidden md:flex justify-center gap-3 lg:gap-6 mb-12 max-w-4xl mx-auto"
          aria-hidden
        >
          {method.steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1 min-w-0">
              <div className="flex flex-col items-center flex-1 min-w-0">
                <motion.div
                  className="w-10 h-10 rounded-full bg-ebe-orange/10 border-2 border-ebe-orange/30 flex items-center justify-center text-xs font-bold text-ebe-orange"
                  whileHover={{ scale: 1.15, backgroundColor: "rgba(242,161,44,0.2)" }}
                >
                  {step.number}
                </motion.div>
                <span className="text-[0.6rem] uppercase tracking-wider text-ebe-anthracite/60 mt-2 text-center truncate w-full px-1">
                  {step.title.split(" ")[0]}
                </span>
              </div>
              {index < method.steps.length - 1 && (
                <div className="h-px flex-1 bg-ebe-anthracite/15 mx-1 mt-[-1rem]" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto"
          variants={containerVariants}
        >
          <div className="relative">
            <div
              className="absolute left-[1.65rem] top-10 bottom-10 w-px bg-gradient-to-b from-ebe-orange/40 via-ebe-anthracite/15 to-ebe-orange/40 hidden sm:block"
              aria-hidden
            />
            <motion.div className="space-y-5" variants={containerVariants}>
              {method.steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <motion.article
                    key={step.number}
                    variants={itemVariants}
                    whileHover={{ x: 6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 350, damping: 24 }}
                    className="group relative bg-white rounded p-6 md:p-7 shadow-[0_2px_24px_rgba(62,74,79,0.07)] hover:shadow-[0_12px_40px_rgba(62,74,79,0.12)] border-l-[3px] border-transparent hover:border-ebe-orange transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0 w-11 h-11 rounded-full bg-ebe-orange/10 flex items-center justify-center group-hover:bg-ebe-orange group-hover:scale-110 transition-all duration-300 mt-0.5"
                        whileHover={{ rotate: 8 }}
                      >
                        {Icon && (
                          <Icon
                            className="w-5 h-5 text-ebe-orange group-hover:text-white transition-colors duration-300"
                            aria-hidden
                          />
                        )}
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-ebe-anthraciteDark group-hover:text-ebe-anthracite transition-colors pr-2">
                            {step.title}
                          </h3>
                          <span
                            className="text-xl md:text-2xl font-bold text-ebe-orange/25 group-hover:text-ebe-orange/45 transition-colors flex-shrink-0 leading-none"
                            aria-hidden
                          >
                            {step.number}
                          </span>
                        </div>
                        <p className="text-sm text-ebe-anthracite/75 leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                          {step.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-1.5 text-xs text-ebe-anthracite/65"
                            >
                              <span className="text-ebe-orange mt-0.5">·</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>

          <motion.div className="space-y-5" variants={containerVariants}>
            {method.expertises.map((expertise, index) => (
              <motion.article
                key={expertise.tag}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group relative bg-white rounded p-8 shadow-[0_2px_24px_rgba(62,74,79,0.07)] hover:shadow-[0_14px_44px_rgba(62,74,79,0.13)] border-t-[3px] border-transparent hover:border-ebe-orange transition-colors duration-300 overflow-hidden"
              >
                <span
                  className="absolute top-0 left-0 h-0.5 w-0 bg-ebe-orange transition-all duration-500 group-hover:w-full"
                  aria-hidden
                />
                <span
                  className="absolute -bottom-4 -right-2 text-6xl font-bold text-ebe-anthracite/[0.04] group-hover:text-ebe-orange/10 transition-colors select-none"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-ebe-orange block mb-3">
                  {expertise.tag}
                </span>
                <h3 className="text-lg font-bold text-ebe-anthraciteDark mb-2 relative z-10">
                  {expertise.title}
                </h3>
                <p className="text-sm italic text-ebe-orange mb-3 relative z-10">
                  {expertise.trigger}
                </p>
                <p className="text-sm text-ebe-anthracite/75 leading-relaxed relative z-10">
                  {expertise.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
