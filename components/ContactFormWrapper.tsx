"use client";

import { Suspense } from "react";
import ContactForm from "./ContactForm";

export default function ContactFormWrapper() {
  return (
    <Suspense fallback={<div className="text-center text-neutral-600">Chargement du formulaire...</div>}>
      <ContactForm />
    </Suspense>
  );
}

