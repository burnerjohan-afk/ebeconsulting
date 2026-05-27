"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pageImages } from "@/lib/page-images";

export default function AboutFounderGallery() {
  const { gallery } = pageImages.about;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      {gallery.map((item, index) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(62,74,79,0.12)] ring-1 ring-ebe-anthracite/10 ${
            index === gallery.length - 1 ? "col-span-2 sm:col-span-1" : ""
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
            className="object-cover object-center"
          />
        </motion.div>
      ))}
    </div>
  );
}
