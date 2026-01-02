"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { icons } from "@/lib/icons";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {content.faq.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {content.faq.items.map((item, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-3 flex-1">
                  <icons.faq.chevron
                    className={`w-5 h-5 text-[#F2A12C] flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-primary-900">
                    {item.question}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-neutral-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

