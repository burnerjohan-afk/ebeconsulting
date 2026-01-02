"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface OfferDetailCardsProps {
  deliverables: string[];
  benefits: string[];
}

export default function OfferDetailCards({
  deliverables,
  benefits,
}: OfferDetailCardsProps) {
  return (
    <>
      {deliverables.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3E4A4F] to-[#323C40] group-hover:from-[#F2A12C] group-hover:to-[#C28123] text-white flex items-center justify-center font-bold flex-shrink-0 transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#3E4A4F] mb-1 uppercase tracking-wide">Livrable {index + 1}</p>
                    <p className="text-neutral-700 font-medium">{deliverable}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {benefits.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start p-6 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-green-200 group-hover:bg-green-300 flex items-center justify-center mr-3 flex-shrink-0 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-green-700 mb-1 uppercase tracking-wide">Bénéfice</p>
                  <p className="text-green-900 font-medium">{benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}

