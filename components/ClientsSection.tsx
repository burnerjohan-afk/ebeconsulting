"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Liste des logos clients (ajustez selon vos fichiers)
const clients = [
  {
    name: "Neodisplay",
    logo: "/image/neodisplay.jpg",
  },
  {
    name: "Select",
    logo: "/image/select logo.png",
  },
];

export default function ClientsSection() {
  return (
    <section className="section-padding bg-[#F7F4EF]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#3E4A4F] mb-2">
            Ils nous font confiance
          </h2>
          <p className="text-sm text-[#3E4A4F]/70">
            Entreprises pour lesquelles nous avons effectué des prestations
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center h-16 md:h-20 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                width={150}
                height={80}
                className="h-full w-auto object-contain"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

