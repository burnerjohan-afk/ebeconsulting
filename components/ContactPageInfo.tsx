"use client";

import { motion } from "framer-motion";
import { Mail, Clock } from "lucide-react";

export default function ContactPageInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center group"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3E4A4F] to-[#323C40] group-hover:from-[#F2A12C] group-hover:to-[#C28123] text-white flex items-center justify-center mx-auto mb-4 transition-all duration-300">
          <Mail className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-primary-900 mb-2">Email</h3>
        <p className="text-neutral-700">
          <a
            href="mailto:contact@ebe-consulting.fr"
            className="hover:text-[#F2A12C] transition-colors"
          >
            contact@ebe-consulting.fr
          </a>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center group"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3E4A4F] to-[#323C40] group-hover:from-[#F2A12C] group-hover:to-[#C28123] text-white flex items-center justify-center mx-auto mb-4 transition-all duration-300">
          <Clock className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-primary-900 mb-2">Réponse</h3>
        <p className="text-neutral-700">Sous 24h ouvrées</p>
      </motion.div>
    </div>
  );
}

