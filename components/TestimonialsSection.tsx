"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { content } from "@/lib/content";
import Image from "next/image";

// Composant pour le texte de témoignage avec troncature
function TestimonialText({ quote }: { quote: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const shouldTruncate = quote.length > maxLength;
  const displayText = isExpanded || !shouldTruncate ? quote : `${quote.substring(0, maxLength)}...`;

  return (
    <div
      className="relative"
      onMouseEnter={() => shouldTruncate && setIsExpanded(true)}
      onMouseLeave={() => shouldTruncate && setIsExpanded(false)}
    >
      <p className="text-neutral-700 leading-relaxed italic text-base transition-all duration-300">
        "{displayText}"
      </p>
      {shouldTruncate && !isExpanded && (
        <span className="text-xs text-[#F2A12C] italic ml-2">(survoler pour lire la suite)</span>
      )}
    </div>
  );
}

export default function TestimonialsSection() {
  // Mapping des logos clients
  const clientLogos: Record<string, string> = {
    Neodisplay: "/image/neodisplay.jpg",
    "SELECT Service": "/image/select logo.png",
  };

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Retours clients
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur accompagnement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-8 border border-[#3E4A4F]/10 shadow-sm hover:shadow-lg hover:border-[#F2A12C]/30 transition-all duration-300 h-full flex flex-col">
                {/* Logo client */}
                {clientLogos[testimonial.company] && (
                  <div className="mb-6 flex items-center justify-center h-16 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300">
                    <Image
                      src={clientLogos[testimonial.company]}
                      alt={`Logo ${testimonial.company}`}
                      width={120}
                      height={60}
                      className="h-full w-auto object-contain"
                      unoptimized
                    />
                  </div>
                )}

                {/* Citation */}
                <div className="mb-6 flex-1 relative">
                  <svg
                    className="w-8 h-8 text-[#F2A12C]/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.014-9.57V3.054C9.428 3.054 3.01 8.816 3.01 15.391V21h11.007zm-13.017 0v-7.391c0-5.704 3.748-9.57 9.014-9.57V3.054C-1.563 3.054-8 8.816-8 15.391V21h11.007z" />
                  </svg>
                  <TestimonialText quote={testimonial.quote} />
                </div>

                {/* Auteur */}
                <div className="border-t border-[#3E4A4F]/10 pt-4">
                  <p className="font-semibold text-[#3E4A4F]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#3E4A4F]/70">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
