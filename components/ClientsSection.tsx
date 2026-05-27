"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { trustSectionLogos } from "@/lib/client-logos";

export default function ClientsSection() {
  return (
    <section className="section-padding section-charte section-separator" aria-labelledby="clients-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 id="clients-heading" className="text-2xl md:text-3xl font-bold text-[#1D1D1F] mb-2">
            Ils nous font confiance
          </h2>
          <p className="text-sm text-[#1D1D1F]/70">
            Expériences et collaborations
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 md:gap-8 max-w-6xl mx-auto">
          {trustSectionLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center h-16 md:h-20 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={`Logo ${client.name} — collaboration EBE Consulting`}
                width={150}
                height={80}
                className="h-full w-auto object-contain"
                unoptimized
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

