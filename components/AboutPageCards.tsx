"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { CheckCircle2, XCircle, Target, Users, TrendingUp, Shield, Network } from "lucide-react";

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
                <h3 className="text-xl font-bold text-primary-900">{value.title}</h3>
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
  const { capabilities } = content;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              <h3 className="text-xl font-bold text-green-900">{capabilities.direct.title}</h3>
            </div>
            <ul className="space-y-3">
              {capabilities.direct.items.map((item) => (
                <li
                  key={item}
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="group"
        >
          <div className="card-premium bg-ebe-orange/[0.06] border-2 border-ebe-orange/25 h-full">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-ebe-orange/15 group-hover:bg-ebe-orange/25 flex items-center justify-center transition-colors">
                <Network className="w-6 h-6 text-ebe-orange" />
              </div>
              <h3 className="text-xl font-bold text-ebe-anthraciteDark">
                {capabilities.network.title}
              </h3>
            </div>
            <ul className="space-y-3 mb-4">
              {capabilities.network.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start text-ebe-anthracite/85 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-ebe-orange/15 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-ebe-orange" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-ebe-anthracite/70 leading-relaxed border-l-2 border-ebe-orange pl-3">
              {capabilities.network.footnote}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="group"
        >
          <div className="card-premium h-full">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-200 group-hover:bg-neutral-300 flex items-center justify-center transition-colors">
                <XCircle className="w-6 h-6 text-neutral-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{capabilities.limits.title}</h3>
            </div>
            <ul className="space-y-3 mb-4">
              {capabilities.limits.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start text-neutral-700 group-hover:text-neutral-800 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-neutral-200 group-hover:bg-neutral-300 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 transition-colors">
                    <XCircle className="w-4 h-4 text-neutral-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-600 leading-relaxed border-l-2 border-neutral-300 pl-3">
              {capabilities.limits.footnote}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
