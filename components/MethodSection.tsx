"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { icons } from "@/lib/icons";
import { CheckCircle2 } from "lucide-react";

export default function MethodSection() {
  return (
    <section className="relative section-padding overflow-hidden" aria-labelledby="method-heading">
      {/* Background abstrait */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100" />
        {/* Pattern abstrait */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-primary-900" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 id="method-heading" className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {content.method.title}
          </h2>
          <p className="text-xl text-neutral-600 font-serif italic leading-relaxed">
            {content.method.subtitle}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.method.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover:bg-white/20 transition-all duration-500">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1D1D1F] to-black text-white flex items-center justify-center shadow-lg group-hover:from-[#FF9500] group-hover:to-[#E68500] transition-all duration-300">
                      {index === 0 && <icons.method.comprendre className="w-8 h-8" />}
                      {index === 1 && <icons.method.decider className="w-8 h-8" />}
                      {index === 2 && <icons.method.structurer className="w-8 h-8" />}
                      {index === 3 && <icons.method.securiser className="w-8 h-8" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-primary-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-neutral-700 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start text-neutral-600 group-hover:text-neutral-800 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#FF9500] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

