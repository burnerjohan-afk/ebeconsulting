"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import Card from "./Card";

export default function TargetAudienceSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {content.target.title}
          </h2>
          <p className="text-lg text-neutral-700">
            {content.target.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {content.target.audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-neutral-700">{audience.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

