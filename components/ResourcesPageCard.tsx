"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Button from "./ui/Button";

export default function ResourcesPageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="card-premium text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3E4A4F]/10 to-[#3E4A4F]/5 group-hover:from-[#F2A12C]/15 group-hover:to-[#F2A12C]/5 flex items-center justify-center transition-all duration-300">
            <BookOpen className="w-10 h-10 text-[#3E4A4F] group-hover:text-[#F2A12C] transition-colors" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-primary-900 mb-4">
          Ressources à venir
        </h2>
        <p className="text-neutral-700 mb-6">
          Je prépare actuellement des articles et ressources sur
          l&apos;accompagnement organisationnel, le pilotage opérationnel et le
          management de terrain. Revenez bientôt pour découvrir mes analyses.
        </p>
        <p className="text-neutral-600 mb-8">
          En attendant, n&apos;hésitez pas à me contacter pour échanger sur vos
          enjeux.
        </p>
        <Button href="/contact" variant="primary">
          Me contacter
        </Button>
      </div>
    </motion.div>
  );
}

