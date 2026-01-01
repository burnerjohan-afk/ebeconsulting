import Link from "next/link";
import Image from "next/image";
import { content } from "@/lib/content";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/image/logo.PNG"
                alt={`${content.company.name} - Logo`}
                width={280}
                height={100}
                className="h-20 md:h-24 lg:h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-300 mb-4 max-w-md">
              {content.footer.description}
            </p>
            <p className="text-neutral-400 text-sm italic mb-6">
              {content.company.mission}
            </p>
            <div>
              <p className="text-neutral-300 text-sm mb-3 font-semibold">Suivez-nous</p>
              <SocialLinks variant="footer" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/offres"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {content.footer.links.offers}
                </Link>
              </li>
              <li>
                <Link
                  href="/copil"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Appui COPIL
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {content.footer.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/ressources"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {content.footer.links.resources}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {content.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {content.footer.links.legal}
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {content.footer.links.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>
            © {currentYear} {content.company.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

