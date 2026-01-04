"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
  label: string;
}

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-28 left-6 z-40 md:top-32 md:left-8"
    >
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          {/* Fond glassmorphism avec bordure animée */}
          <div className="relative overflow-hidden rounded-full backdrop-blur-xl bg-white/90 dark:bg-neutral-900/90 border border-white/20 shadow-xl">
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Contenu du bouton */}
            <div className="relative flex items-center gap-3 px-4 py-3 md:px-5 md:py-3.5">
              <motion.div
                animate={{ x: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 text-[#1D1D1F] group-hover:text-[#FF9500] transition-colors duration-300" />
              </motion.div>
              <span className="text-sm md:text-base font-semibold text-[#1D1D1F] group-hover:text-[#FF9500] transition-colors duration-300 whitespace-nowrap">
                {label}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

