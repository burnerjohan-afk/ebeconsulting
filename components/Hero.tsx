"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { content } from "@/lib/content";
import CTAGroup from "./ui/CTAGroup";
import { icons } from "@/lib/icons";

const words = content.hero.title.split(".").filter((word) => word.trim());

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grain">
      {/* Image de fond premium */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
        {/* Image de fond - dirigeant en réflexion stratégique */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center bg-no-repeat" />
        {/* Overlay réduit pour voir plus l'image */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-transparent to-primary-900/40" />
      </div>

      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Titre principal avec animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white leading-tight">
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="relative inline-block"
                  >
                    <span className="relative z-10 text-white drop-shadow-2xl">
                      {word.trim()}
                    </span>
                    {index < words.length - 1 && (
                      <span className="inline-block mx-2 md:mx-4 text-accent-500 text-3xl md:text-4xl font-light">
                        •
                      </span>
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
            className="text-xl md:text-2xl lg:text-3xl text-neutral-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed font-serif italic"
          >
            {content.hero.subtitle}
          </motion.p>

          {/* Boutons CTA avec animation */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <CTAGroup
              primary={{
                label: "Discutons de votre situation",
                href: "/contact",
                icon: icons.cta.message,
              }}
              secondary={{
                label: "Planifier un échange",
                href: "/contact",
                icon: icons.cta.calendar,
              }}
              className="[&_button]:bg-white/95 [&_button]:text-[#3E4A4F] [&_button:hover]:bg-white [&_button:last-child]:bg-white/10 [&_button:last-child]:text-white [&_button:last-child]:border-white/30 [&_button:last-child]:hover:bg-white/20"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
