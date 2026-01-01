"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { content } from "@/lib/content";

const words = content.hero.title.split(".").filter((word) => word.trim());

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient avec effet animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(51,78,104,0.1),transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Titre principal avec animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="relative inline-block"
                  >
                    <motion.span
                      className="relative z-10 inline-block"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="relative z-10 bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900 bg-clip-text text-transparent drop-shadow-sm">
                        {word.trim()}
                      </span>
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                    {index < words.length - 1 && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 0.5 + index * 0.15, 
                          duration: 0.4,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="inline-flex items-center justify-center mx-3 md:mx-4"
                      >
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent-500 shadow-lg shadow-accent-500/50" />
                        <span className="w-8 h-px md:w-12 bg-gradient-to-r from-accent-400 to-transparent mx-1" />
                      </motion.span>
                    )}
                  </motion.span>
                ))}
              </div>
            </h1>
          </motion.div>

          {/* Sous-titre avec animation */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl lg:text-3xl text-neutral-700 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            <span className="italic text-primary-800">
              {content.hero.subtitle}
            </span>
          </motion.p>

          {/* Boutons CTA avec animation */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4 shadow-lg">
                {content.hero.ctaPrimary}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/offres" variant="secondary" className="text-lg px-8 py-4">
                {content.hero.ctaSecondary}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Éléments décoratifs animés */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
    </section>
  );
}

