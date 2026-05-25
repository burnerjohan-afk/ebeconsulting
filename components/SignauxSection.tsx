"use client";

import { motion } from "framer-motion";
import { Ban } from "lucide-react";
import { content } from "@/lib/content";

export default function SignauxSection() {
  const { signaux } = content;

  return (
    <section
      id={signaux.id}
      className="relative section-padding bg-ebe-anthraciteDark overflow-hidden"
      aria-labelledby="signaux-heading"
    >
      <div
        className="absolute top-0 left-[8%] w-px h-20 bg-ebe-orange"
        aria-hidden
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ebe-orange mb-5">
            {signaux.eyebrow}
          </p>
          <h2
            id="signaux-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {signaux.title}
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed">
            {signaux.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 max-w-6xl mx-auto">
          {signaux.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative bg-white/[0.04] hover:bg-white/[0.08] p-8 md:p-10 transition-colors duration-300"
            >
              <span
                className="absolute top-0 left-0 h-0.5 w-0 bg-ebe-orange transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
              <Ban
                className="w-6 h-6 text-white/30 group-hover:text-ebe-orange transition-colors mb-5"
                aria-hidden
              />
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
