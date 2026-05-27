"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { hero } = content;
  const titleParts = hero.title.split(hero.titleHighlight);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden grain"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
        <Image
          src="/image/reunion-ebe.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_28%] sm:object-[center_26%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/42" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary-900/35 via-transparent to-primary-900/50"
          aria-hidden
        />
      </div>

      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-ebe-orange z-10"
        aria-hidden
      />

      <div className="container-custom relative z-10 py-28 md:py-36 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]"
          >
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-7">
              <span className="block w-8 h-px bg-ebe-orange" aria-hidden />
              {hero.eyebrow}
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.12] mb-4 drop-shadow-lg">
              {titleParts[0]}
              <em className="text-ebe-orange not-italic">{hero.titleHighlight}</em>
              {"titleRest" in hero && hero.titleRest}
              {!hero.titleRest && titleParts[1]}
            </h1>

            {"tagline" in hero && hero.tagline && (
              <p className="text-lg md:text-xl text-neutral-200 leading-relaxed max-w-lg mb-6 italic">
                {hero.tagline}
              </p>
            )}

            <div className="border-y border-white/20 py-5 mb-6">
              <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
                {hero.signature.split(hero.signatureHighlight)[0]}
                <span className="text-ebe-orange">{hero.signatureHighlight}</span>
                {hero.signature.split(hero.signatureHighlight)[1]}
              </p>
              <p className="mt-2 text-sm md:text-base italic text-neutral-200">
                {hero.signatureSuite}
              </p>
            </div>

            {hero.highlights && hero.highlights.length > 0 && (
              <ul className="space-y-2.5 mb-8 max-w-lg">
                {hero.highlights.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 text-sm text-neutral-200 leading-relaxed"
                  >
                    <span
                      className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ebe-orange"
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em] bg-ebe-orange text-white rounded-sm hover:bg-accent-600 transition-colors"
              >
                {hero.ctaPrimary}
              </Link>
              <Link
                href={hero.ctaSecondaryHref}
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-white border-b border-white/80 pb-1 hover:text-ebe-orange hover:border-ebe-orange transition-colors"
              >
                {hero.ctaSecondary}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[360px] mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* Chiffres clés — bloc séparé */}
            <div className="w-full rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md px-6 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-5">
                Mon expérience
              </p>
              <div className="space-y-4">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 border-l-2 border-ebe-orange/80 pl-4"
                  >
                    <span className="text-2xl md:text-[1.75rem] font-bold text-white tabular-nums leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/70 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
