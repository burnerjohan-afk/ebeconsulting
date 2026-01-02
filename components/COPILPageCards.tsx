"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { CheckCircle2, Target, FileCheck, Globe, Users, Accessibility, Shield, AlertTriangle, Network, MapPin } from "lucide-react";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="card-premium h-full group-hover:border-[#F2A12C]/30 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#3E4A4F]/5 flex items-center justify-center group-hover:bg-[#F2A12C]/10 transition-colors flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#3E4A4F] group-hover:text-[#F2A12C] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary-900">
                  {mission.title}
                </h3>
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
          <div className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-lg border border-[#3E4A4F]/10 hover:border-[#F2A12C]/30 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-[#3E4A4F]/10 group-hover:bg-[#F2A12C]/10 flex items-center justify-center mr-4 flex-shrink-0 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-[#3E4A4F] group-hover:text-[#F2A12C] transition-colors" />
            </div>
            <p className="text-neutral-700 font-medium">{benefit}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function COPILValue() {
  // Mapping des icônes pour chaque badge (identique à BadgesSection)
  const badgeIcons = [
    Target, // Vision transverse
    FileCheck, // Auditeur interne
    MapPin, // Approche terrain
    Globe, // Expérience directionnelle
    Accessibility, // Référent handicap
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {content.badges.map((badge, index) => {
        const Icon = badgeIcons[index] || Target;

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
  );
}

