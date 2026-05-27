"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { icons } from "@/lib/icons";
import { Globe, FileCheck, Gauge, Users } from "lucide-react";

export default function BadgesSection() {
  const badgeIcons = [
    icons.hero.vision,
    FileCheck,
    icons.hero.terrain,
    Gauge,
    Users,
    Globe,
  ];

  return (
    <section className="section-padding bg-ebe-anthraciteDark section-separator">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {content.badges.map((badge, index) => {
            const Icon = badgeIcons[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-xl p-6 border border-ebe-anthracite/10 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Contenu */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icône */}
                    <div className="mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1D1D1F] to-black text-white flex items-center justify-center shadow-lg group-hover:from-[#FF9500] group-hover:to-[#E68500] transition-all duration-300">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-base font-bold text-[#1D1D1F] mb-2 transition-colors leading-tight">
                      {badge.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-[#1D1D1F]/70 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
