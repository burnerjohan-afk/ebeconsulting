"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { CheckCircle2, XCircle, Target, Users, TrendingUp, Shield } from "lucide-react";

// Mapping des icônes pour les valeurs
const valueIcons = [Target, Users, TrendingUp, Shield];

export function AboutValues() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {content.about.values.map((value, index) => {
        const Icon = valueIcons[index] || Target;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="card-premium h-full">
              <div className="mb-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#3E4A4F]/5 flex items-center justify-center group-hover:bg-[#F2A12C]/10 transition-colors">
                  <Icon className="w-6 h-6 text-[#3E4A4F] group-hover:text-[#F2A12C] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary-900">
                  {value.title}
                </h3>
              </div>
              <p className="text-neutral-700">{value.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function AboutCapabilities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Can */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.02, y: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group"
      >
        <div className="card-premium bg-green-50 border-2 border-green-200 h-full">
          <div className="mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-200 group-hover:bg-green-300 flex items-center justify-center transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-2xl font-bold text-green-900">
              {content.capabilities.can.title}
            </h3>
          </div>
          <ul className="space-y-3">
            {content.capabilities.can.items.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-green-800 group-hover:text-green-900 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-green-200 group-hover:bg-green-300 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-green-700" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Cannot */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.02, y: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group"
      >
        <div className="card-premium bg-neutral-50 border-2 border-neutral-200 h-full">
          <div className="mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-neutral-200 group-hover:bg-neutral-300 flex items-center justify-center transition-colors">
              <XCircle className="w-6 h-6 text-neutral-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">
              {content.capabilities.cannot.title}
            </h3>
          </div>
          <ul className="space-y-3">
            {content.capabilities.cannot.items.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-neutral-700 group-hover:text-neutral-800 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-neutral-200 group-hover:bg-neutral-300 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 transition-colors">
                  <XCircle className="w-4 h-4 text-neutral-600" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

