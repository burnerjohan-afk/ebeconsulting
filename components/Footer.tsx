import Link from "next/link";
import Image from "next/image";
import { content } from "@/lib/content";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#3E4A4F]/10">
      <div className="container-custom py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4 hover:opacity-90 transition-opacity">
              <Image
                src="/image/logo.PNG"
                alt={`${content.company.name} - Logo`}
                width={200}
                height={70}
                className="h-12 md:h-14 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-[#3E4A4F]/80 mb-3 max-w-md text-xs leading-relaxed">
              {content.footer.description}
            </p>
            <p className="text-[#3E4A4F]/60 text-xs italic mb-4">
              {content.company.mission}
            </p>
            <div className="mb-4">
              <p className="text-[#3E4A4F]/90 text-xs mb-2 font-semibold">Contact</p>
              <a
                href="mailto:eb@ebeconsulting.fr"
                className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
              >
                eb@ebeconsulting.fr
              </a>
            </div>
            <div>
              <p className="text-[#3E4A4F]/90 text-xs mb-2 font-semibold">Suivez-nous</p>
              <SocialLinks variant="footer" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 text-[#3E4A4F] text-sm">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/offres"
                  className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
                >
                  {content.footer.links.offers}
                </Link>
              </li>
              <li>
                <Link
                  href="/copil"
                  className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
                >
                  Appui COPIL
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
                >
                  {content.footer.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/ressources"
                  className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
                >
                  {content.footer.links.resources}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
                >
                  {content.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 text-[#3E4A4F] text-sm">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
                >
                  {content.footer.links.legal}
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
                >
                  {content.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-[#3E4A4F]/70 hover:text-[#F2A12C] transition-colors text-sm"
                >
                  Gérer mes cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3E4A4F]/10 mt-6 pt-4">
          <div className="text-center text-[#3E4A4F]/60 text-xs space-y-2">
            <p>
              © {currentYear} {content.company.name}. Tous droits réservés.
            </p>
            <p className="text-[#3E4A4F]/70">
              Données personnelles : le site applique les principes RGPD.{" "}
              <Link
                href="/confidentialite"
                className="text-[#F2A12C] hover:underline"
              >
                Détails
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
