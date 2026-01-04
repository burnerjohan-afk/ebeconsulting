"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { content } from "@/lib/content";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const testimonials = content.testimonials;
  
  // Calculer le nombre de paires (2 témoignages par paire)
  const totalPairs = Math.ceil(testimonials.length / 2);
  
  // Obtenir les 2 témoignages de la paire actuelle
  const getCurrentPair = () => {
    const startIndex = currentPairIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  // Mapping des logos clients
  const clientLogos: Record<string, string> = {
    Neodisplay: "/image/neodisplay.jpg",
    "SELECT Service": "/image/select logo.png",
  };

  const nextPair = () => {
    setCurrentPairIndex((prev) => (prev + 1) % totalPairs);
  };

  const prevPair = () => {
    setCurrentPairIndex((prev) => (prev - 1 + totalPairs) % totalPairs);
  };

  const goToPair = (index: number) => {
    setCurrentPairIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const threshold = 50; // Seuil minimum pour déclencher le changement
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Glissement vers la droite = précédent
        prevPair();
      } else {
        // Glissement vers la gauche = suivant
        nextPair();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  const currentPair = getCurrentPair();

  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Retours clients
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur accompagnement
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Conteneur des témoignages */}
          <div
            ref={containerRef}
            className="relative cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPairIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: dragOffset,
                  transition: { duration: isDragging ? 0 : 0.3 }
                }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {currentPair.map((testimonial, index) => (
                  <motion.div
                    key={`${currentPairIndex}-${index}`}
                    className="group bg-white rounded-xl p-6 border border-[#E5E5EA] shadow-md min-h-[280px] flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 hover:min-h-[400px] hover:p-8"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Logo client */}
                    {clientLogos[testimonial.company] && (
                      <div className="mb-4 group-hover:mb-6 flex items-center justify-center h-12 group-hover:h-16 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300">
                        <Image
                          src={clientLogos[testimonial.company]}
                          alt={`Logo ${testimonial.company} - Témoignage client EBE Consulting`}
                          width={120}
                          height={60}
                          className="h-full w-auto object-contain"
                          unoptimized
                        />
                      </div>
                    )}

                    {/* Citation */}
                    <div className="mb-4 group-hover:mb-6 flex-1 flex flex-col justify-center">
                      <svg
                        className="w-6 h-6 group-hover:w-8 group-hover:h-8 text-[#FF9500]/30 mb-3 group-hover:mb-4 transition-all duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.014-9.57V3.054C9.428 3.054 3.01 8.816 3.01 15.391V21h11.007zm-13.017 0v-7.391c0-5.704 3.748-9.57 9.014-9.57V3.054C-1.563 3.054-8 8.816-8 15.391V21h11.007z" />
                      </svg>
                      <p className="text-neutral-700 leading-relaxed italic text-sm group-hover:text-base md:group-hover:text-lg transition-all duration-300 line-clamp-4 group-hover:line-clamp-none">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Auteur */}
                    <div className="border-t border-[#E5E5EA] pt-3 group-hover:pt-4 transition-all duration-300">
                      <p className="font-bold text-[#1D1D1F] text-sm group-hover:text-base transition-all duration-300">
                        {testimonial.author}
                      </p>
                      <p className="text-xs group-hover:text-sm text-[#1D1D1F]/70 mt-1 transition-all duration-300">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Boutons de navigation */}
            {totalPairs > 1 && (
              <>
                <button
                  onClick={prevPair}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#E5E5EA] shadow-md hover:shadow-lg hover:bg-[#F5F5F7] transition-all duration-300 flex items-center justify-center z-10"
                  aria-label="Paire précédente"
                >
                  <ChevronLeft className="w-5 h-5 text-[#1D1D1F]" />
                </button>
                <button
                  onClick={nextPair}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#E5E5EA] shadow-md hover:shadow-lg hover:bg-[#F5F5F7] transition-all duration-300 flex items-center justify-center z-10"
                  aria-label="Paire suivante"
                >
                  <ChevronRight className="w-5 h-5 text-[#1D1D1F]" />
                </button>
              </>
            )}
          </div>

          {/* Indicateurs de pagination */}
          {totalPairs > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: totalPairs }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPair(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPairIndex
                      ? "bg-[#FF9500] w-8"
                      : "bg-[#E5E5EA] hover:bg-[#D1D1D6]"
                  }`}
                  aria-label={`Aller à la paire ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
