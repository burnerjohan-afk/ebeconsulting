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
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MethodSection() {
  const { method } = content;
  const signatureParts = method.signature.split(method.signatureHighlight);

  return (
    <section
      id={method.id}
      className="relative section-padding section-charte section-separator overflow-hidden"
      aria-labelledby="method-heading"
    >
      <div className="container-custom relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
            {method.eyebrow}
          </p>
          <h2
            id="method-heading"
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ebe-anthraciteDark leading-tight mb-4"
          >
            {signatureParts[0]}
            <span className="text-ebe-orange">{method.signatureHighlight}</span>
            {signatureParts[1]}
          </h2>
          {method.signatureLead && (
            <p className="text-base md:text-lg text-ebe-anthracite/85 leading-relaxed">
              {method.signatureLead}
            </p>
          )}
        </motion.div>

        {/* 3 mouvements — une seule barre, sans cartes empilées */}
        {method.signatureSteps && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-5xl mx-auto mb-14 md:mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl border border-ebe-anthracite/10 bg-white shadow-[0_2px_24px_rgba(62,74,79,0.06)] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-ebe-anthracite/10">
              {method.signatureSteps.map((step, index) => (
                <div key={step.label} className="px-6 py-5 md:py-6 md:px-7">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ebe-orange mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-base font-bold text-ebe-anthraciteDark mb-1.5">
                    {step.label}
                  </p>
                  <p className="text-sm md:text-base text-ebe-anthracite/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 4 temps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-10">
            {method.stepsTagline && (
              <p className="text-lg md:text-xl font-semibold text-ebe-anthraciteDark mb-2">
                {method.stepsTagline}
              </p>
            )}
            <p className="text-sm md:text-base text-ebe-anthracite/80 max-w-xl mx-auto leading-relaxed">
              {method.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 md:mb-16">
            {method.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.article
                  key={step.number}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="group relative bg-white rounded-lg p-6 md:p-7 shadow-[0_2px_24px_rgba(62,74,79,0.07)] hover:shadow-[0_12px_40px_rgba(62,74,79,0.11)] border-t-[3px] border-transparent hover:border-ebe-orange transition-all duration-300"
                >
                  <span
                    className="absolute top-0 left-0 h-0.5 w-0 bg-ebe-orange transition-all duration-500 group-hover:w-full"
                    aria-hidden
                  />
                  <span
                    className="absolute top-5 right-6 text-4xl font-bold text-ebe-orange/10 group-hover:text-ebe-orange/20 transition-colors select-none leading-none"
                    aria-hidden
                  >
                    {step.number}
                  </span>

                  <div className="flex items-start gap-4 pr-10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ebe-orange/10 flex items-center justify-center group-hover:bg-ebe-orange transition-colors duration-300">
                      {Icon && (
                        <Icon
                          className="w-5 h-5 text-ebe-orange group-hover:text-white transition-colors duration-300"
                          aria-hidden
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-ebe-anthraciteDark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-ebe-anthracite/90 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Domaines d'intervention — contraste renforcé */}
          <motion.div variants={itemVariants}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-6 text-center">
              Domaines d&apos;intervention
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {method.expertises.map((expertise) => (
                <article
                  key={expertise.tag}
                  className="rounded-lg bg-white border border-ebe-anthracite/12 px-6 py-6 shadow-[0_2px_20px_rgba(62,74,79,0.08)]"
                >
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ebe-orange mb-3">
                    {expertise.tag}
                  </p>
                  <h3 className="text-base md:text-lg font-bold text-ebe-anthraciteDark mb-3 leading-snug">
                    {expertise.title}
                  </h3>
                  <p className="text-sm font-medium text-ebe-anthraciteDark bg-ebe-orange/[0.08] border-l-[3px] border-ebe-orange px-3 py-2.5 mb-4 leading-relaxed">
                    {expertise.trigger}
                  </p>
                  <p className="text-sm md:text-base text-ebe-anthracite/90 leading-relaxed">
                    {expertise.description}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
