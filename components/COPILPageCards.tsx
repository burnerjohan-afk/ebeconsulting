"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { icons } from "@/lib/icons";
import { CheckCircle2, FileCheck, Globe, Users, Accessibility, Shield, AlertTriangle, Network, Target } from "lucide-react";

interface COPILMissionsProps {
  missions: typeof content.copil.missions;
}

export function COPILMissions({ missions }: COPILMissionsProps) {
  // Mapping des icônes pour les missions
  const missionIcons = [
    Shield, // Sécurisation des décisions
    AlertTriangle, // Anticipation des risques
    Target, // Traduction stratégie → terrain
    Users, // Accompagnement des directeurs
    FileCheck, // Veille qualité & conformité
    Network, // Vision globale transverse
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {missions.map((mission, index) => {
        const Icon = missionIcons[index] || Shield;
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
              <div className="mb-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1D1D1F] to-black text-white flex items-center justify-center shadow-lg group-hover:from-[#FF9500] group-hover:to-[#E68500] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-900">
                    {mission.title}
                  </h3>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed">{mission.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

interface COPILBenefitsProps {
  benefits: typeof content.copil.benefits;
}

export function COPILBenefits({ benefits }: COPILBenefitsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <div className="flex items-center p-6 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-green-200 group-hover:bg-green-300 flex items-center justify-center mr-3 flex-shrink-0 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-green-700" />
            </div>
            <div className="flex-1">
              <p className="text-green-900 font-medium">{benefit}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function COPILValue() {
  // Mapping des icônes pour chaque badge (identique à BadgesSection)
  const badgeIcons = [
    icons.hero.vision, // Vision transverse
    FileCheck, // Auditeur interne
    icons.hero.terrain, // Approche terrain
    Globe, // Expérience directionnelle
    Accessibility, // Référent handicap
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
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
            <div className="relative h-full bg-white rounded-xl p-6 border border-[#E5E5EA] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
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
  );
}

