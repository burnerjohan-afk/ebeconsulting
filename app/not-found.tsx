import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold text-primary-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-primary-900 mb-4">
          Page non trouvée
        </h2>
        <p className="text-lg text-neutral-700 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            Retour à l'accueil
          </Button>
          <Button href="/contact" variant="secondary">
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  );
}

