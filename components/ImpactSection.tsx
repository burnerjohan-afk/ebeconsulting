"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { icons } from "@/lib/icons";

export default function ImpactSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background simple */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-white to-neutral-50" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {content.impact.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Avant */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200/50 rounded-2xl p-10 border border-neutral-300/50 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <icons.impact.before className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900">
                  {content.impact.before.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {content.impact.before.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start text-neutral-700"
                  >
                    <icons.impact.before className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Après */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 border border-green-200/50 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <icons.impact.after className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900">
                  {content.impact.after.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {content.impact.after.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start text-neutral-700"
                  >
                    <icons.impact.after className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

