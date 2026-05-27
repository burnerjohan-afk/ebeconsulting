"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";

export default function FounderSection() {
  const { founder } = content;

  return (
    <section
      id="fondateur"
      className="section-padding section-charte-alt section-separator"
      aria-labelledby="founder-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative z-10 w-[78%] max-w-[18rem] sm:max-w-[20rem] mx-auto lg:mx-0">
              <Image
                src={founder.portrait.src}
                alt={founder.portrait.alt}
                width={731}
                height={1024}
                sizes="(max-width: 1024px) 320px, 20rem"
                className="w-full h-auto rounded-2xl shadow-[0_24px_60px_rgba(62,74,79,0.18)] ring-1 ring-ebe-anthracite/10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-4">
              {founder.eyebrow}
            </p>
            <h2
              id="founder-heading"
              className="text-3xl md:text-4xl font-bold text-ebe-anthraciteDark mb-6 leading-tight"
            >
              {founder.title}
            </h2>
            <p className="text-lg md:text-xl text-ebe-anthracite leading-relaxed mb-8 border-l-[3px] border-ebe-orange pl-5">
              {founder.lead}
            </p>
            <ul className="space-y-4 mb-8">
              {founder.journey.map((step) => (
                <li key={step.title} className="flex gap-3">
                  <span
                    className="mt-2 block w-2 h-2 flex-shrink-0 rounded-full bg-ebe-orange"
                    aria-hidden
                  />
                  <div>
                    <p className="font-semibold text-ebe-anthraciteDark">{step.title}</p>
                    <p className="text-sm text-ebe-anthracite/70 leading-relaxed mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href={founder.ctaHref}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ebe-anthraciteDark border-b border-ebe-orange pb-1 hover:text-ebe-orange transition-colors"
            >
              {founder.ctaLabel}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
