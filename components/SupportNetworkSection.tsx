"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Compass,
  Cloud,
  Calculator,
  Users,
  Layers,
  MapPin,
  UserCheck,
  GitBranch,
} from "lucide-react";
import { content } from "@/lib/content";

const domainIcons = [Scale, Compass, Cloud, Calculator, Users, Layers];
const stepIcons = [MapPin, UserCheck, GitBranch];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

export default function SupportNetworkSection() {
  const { supportNetwork } = content;

  return (
    <section
      id={supportNetwork.id}
      className="relative section-padding section-charte-alt section-separator overflow-hidden"
      aria-labelledby="support-network-heading"
    >
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-ebe-orange/[0.05] rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
            {supportNetwork.eyebrow}
          </p>
          <h2
            id="support-network-heading"
            className="text-3xl md:text-4xl font-bold text-ebe-anthraciteDark mb-5 leading-tight"
          >
            {supportNetwork.title}{" "}
            <span className="text-ebe-orange italic">{supportNetwork.titleAccent}</span>
          </h2>
          <p className="text-base md:text-lg text-ebe-anthracite/70 leading-relaxed">
            {supportNetwork.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {supportNetwork.domains.map((domain, index) => {
            const Icon = domainIcons[index % domainIcons.length];
            return (
              <motion.article
                key={domain.title}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group bg-white rounded-lg p-6 shadow-[0_2px_24px_rgba(62,74,79,0.07)] hover:shadow-[0_12px_40px_rgba(62,74,79,0.12)] border-t-[3px] border-transparent hover:border-ebe-orange transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-ebe-orange/10 flex items-center justify-center mb-4 group-hover:bg-ebe-orange transition-colors duration-300">
                  <Icon
                    className="w-5 h-5 text-ebe-orange group-hover:text-white transition-colors duration-300"
                    aria-hidden
                  />
                </div>
                <h3 className="text-lg font-bold text-ebe-anthraciteDark mb-2">
                  {domain.title}
                </h3>
                <p className="text-sm text-ebe-anthracite/75 leading-relaxed">
                  {domain.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-ebe-anthraciteDark mb-2">
              {supportNetwork.stepsTitle}
            </h3>
            <p className="text-sm md:text-base text-ebe-anthracite/70 leading-relaxed">
              {supportNetwork.stepsIntro}
            </p>
          </div>

          <ol className="relative space-y-0" aria-label={supportNetwork.stepsTitle}>
            {supportNetwork.steps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isLast = index === supportNetwork.steps.length - 1;

              return (
                <li
                  key={step.title}
                  className={`relative pl-16 sm:pl-[4.5rem] ${isLast ? "pb-0" : "pb-10"}`}
                >
                  {!isLast && (
                    <span
                      className="absolute left-5 sm:left-[1.65rem] top-12 bottom-0 w-px bg-gradient-to-b from-ebe-orange/50 to-ebe-anthracite/10"
                      aria-hidden
                    />
                  )}
                  <span
                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-ebe-orange text-sm font-bold text-white shadow-md"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <article className="rounded-lg border border-ebe-anthracite/10 bg-white p-5 shadow-[0_2px_16px_rgba(62,74,79,0.06)]">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ebe-orange/10">
                        <Icon className="h-4 w-4 text-ebe-orange" aria-hidden />
                      </span>
                      <h4 className="text-base font-bold text-ebe-anthraciteDark sm:text-lg">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-ebe-anthracite/80">
                      {step.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-ebe-anthracite/65 text-center max-w-3xl mx-auto leading-relaxed rounded-lg bg-white/60 border border-ebe-anthracite/10 px-5 py-4"
        >
          {supportNetwork.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
