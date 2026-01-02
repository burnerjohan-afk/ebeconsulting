"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { icons } from "@/lib/icons";
import { Globe, FileCheck, Accessibility } from "lucide-react";

export default function BadgesSection() {
  // Mapping des icônes pour chaque badge
  const badgeIcons = [
    icons.hero.vision, // Vision transverse
    FileCheck, // Auditeur interne
    icons.hero.terrain, // Approche terrain
    Globe, // Expérience directionnelle
    Accessibility, // Référent handicap
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#F7F4EF] to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {content.badges.map((badge, index) => {
            const Icon = badgeIcons[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-xl p-6 border border-[#3E4A4F]/10 shadow-sm hover:shadow-lg hover:border-[#F2A12C]/30 transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F2A12C]/0 to-[#F2A12C]/0 group-hover:from-[#F2A12C]/5 group-hover:to-transparent transition-all duration-300" />
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Icône */}
                    <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#3E4A4F]/10 to-[#3E4A4F]/5 group-hover:from-[#F2A12C]/15 group-hover:to-[#F2A12C]/5 transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#3E4A4F] group-hover:text-[#F2A12C] transition-colors duration-300" aria-hidden="true" />
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-base font-bold text-[#3E4A4F] mb-2 group-hover:text-[#3E4A4F] transition-colors">
                      {badge.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-[#3E4A4F]/70 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                  
                  {/* Ligne décorative en bas */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3E4A4F]/10 to-transparent group-hover:via-[#F2A12C]/30 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
