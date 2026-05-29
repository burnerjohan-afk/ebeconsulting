"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { content } from "@/lib/content";
import { testimonialLogos } from "@/lib/client-logos";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const testimonials = content.testimonials;
  const totalPairs = Math.ceil(testimonials.length / 2);

  const getCurrentPair = useCallback(() => {
    const startIndex = currentPairIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  }, [currentPairIndex, testimonials]);

  const nextPair = useCallback(() => {
    setCurrentPairIndex((prev) => (prev + 1) % totalPairs);
  }, [totalPairs]);

  const prevPair = useCallback(() => {
    setCurrentPairIndex((prev) => (prev - 1 + totalPairs) % totalPairs);
  }, [totalPairs]);

  const goToPair = useCallback((index: number) => {
    setCurrentPairIndex(index);
  }, []);

  const currentPair = getCurrentPair();

  return (
    <section className="section-padding section-charte-alt section-separator" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Retours d&apos;expérience
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Ce que disent les dirigeants que j&apos;ai accompagnés
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {totalPairs > 1 && (
            <>
              <button
                type="button"
                onClick={prevPair}
                className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-ebe-anthracite/10 shadow-md hover:shadow-lg hover:bg-ebe-warmWhite transition-shadow duration-300 flex items-center justify-center z-10"
                aria-label="Paire précédente"
              >
                <ChevronLeft className="w-5 h-5 text-[#1D1D1F]" />
              </button>
              <button
                type="button"
                onClick={nextPair}
                className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-ebe-anthracite/10 shadow-md hover:shadow-lg hover:bg-ebe-warmWhite transition-shadow duration-300 flex items-center justify-center z-10"
                aria-label="Paire suivante"
              >
                <ChevronRight className="w-5 h-5 text-[#1D1D1F]" />
              </button>
            </>
          )}

          <div className="relative px-12 md:px-14 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentPairIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {currentPair.map((testimonial, index) => (
                  <article
                    key={`${testimonial.company}-${index}`}
                    className="group bg-white rounded-xl p-6 md:p-8 border border-[#E5E5EA] shadow-md min-h-[280px] flex flex-col transition-shadow duration-300 hover:shadow-lg"
                  >
                    {testimonialLogos[testimonial.company] && (
                      <div className="mb-5 flex items-center justify-center h-12 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                        <Image
                          src={testimonialLogos[testimonial.company]}
                          alt={`Logo ${testimonial.company} — témoignage client EBE Consulting`}
                          width={120}
                          height={60}
                          className="h-full w-auto object-contain"
                          unoptimized
                        />
                      </div>
                    )}

                    <div className="mb-5 flex-1 flex flex-col justify-center">
                      <svg
                        className="w-6 h-6 text-[#FF9500]/30 mb-3 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.014-9.57V3.054C9.428 3.054 3.01 8.816 3.01 15.391V21h11.007zm-13.017 0v-7.391c0-5.704 3.748-9.57 9.014-9.57V3.054C-1.563 3.054-8 8.816-8 15.391V21h11.007z" />
                      </svg>
                      <p className="text-neutral-700 leading-relaxed italic text-sm md:text-base">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    <div className="border-t border-[#E5E5EA] pt-4">
                      <p className="font-bold text-[#1D1D1F] text-sm md:text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-xs md:text-sm text-[#1D1D1F]/70 mt-1">{testimonial.role}</p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {totalPairs > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: totalPairs }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToPair(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPairIndex
                      ? "bg-[#FF9500] w-8"
                      : "w-2 bg-[#E5E5EA] hover:bg-[#D1D1D6]"
                  }`}
                  aria-label={`Aller à la paire ${index + 1}`}
                  aria-current={index === currentPairIndex ? "true" : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
