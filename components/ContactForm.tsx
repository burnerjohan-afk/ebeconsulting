"use client";

import { useState, FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { content } from "@/lib/content";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const urlSubject = searchParams.get("subject");
  const urlOffer = searchParams.get("offer");

  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    email: "",
    phone: "",
    company: "",
    size: "",
    subject: urlSubject || "",
    message: urlOffer
      ? `Bonjour,\n\nJe suis intéressé(e) par l'offre suivante : ${urlSubject || "Demande de devis"}.\n\nPourriez-vous me faire parvenir un devis personnalisé ?\n\nMerci par avance.`
      : "",
    honeypot: "", // Anti-spam
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Mettre à jour le sujet si présent dans l'URL
  useEffect(() => {
    if (urlSubject && !formData.subject) {
      setFormData((prev) => ({ ...prev, subject: urlSubject }));
    }
  }, [urlSubject, formData.subject]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    setStatus("idle");

    try {
      // Try to use API route first
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Reset form
        setFormData({
          name: "",
          firstName: "",
          email: "",
          phone: "",
          company: "",
          size: "",
          subject: "",
          message: "",
          honeypot: "",
        });
      } else {
        // Fallback to mailto if API fails
        const mailtoLink = `mailto:contact@ebe-consulting.fr?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Nom: ${formData.name}\nPrénom: ${formData.firstName}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nSociété: ${formData.company}\nTaille: ${formData.size}\n\nMessage:\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;
        setStatus("success");
      }
    } catch (error) {
      // Fallback to mailto on error
      const mailtoLink = `mailto:contact@ebe-consulting.fr?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nPrénom: ${formData.firstName}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nSociété: ${formData.company}\nTaille: ${formData.size}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      setStatus("success");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {content.contact.form.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            {content.contact.form.firstName} *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {content.contact.form.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            {content.contact.form.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            {content.contact.form.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="size" className="block text-sm font-medium mb-2">
            {content.contact.form.size}
          </label>
          <select
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent"
          >
            <option value="">Sélectionnez...</option>
            {content.contact.companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          {content.contact.form.subject} *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent"
        >
          <option value="">Sélectionnez un sujet...</option>
          {content.contact.subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {content.contact.form.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-900 focus:border-transparent"
        />
      </div>

      {status === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          {content.contact.form.success}
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          {content.contact.form.error}
        </div>
      )}

      <button type="submit" className="btn btn-primary w-full md:w-auto">
        {content.contact.form.submit}
      </button>
    </form>
  );
}

