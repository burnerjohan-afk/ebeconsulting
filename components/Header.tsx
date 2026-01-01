"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { content } from "@/lib/content";
import SocialLinks from "./SocialLinks";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-28">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/image/logo.PNG"
                alt={`${content.company.name} - Logo`}
                width={240}
                height={80}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-primary-900 hidden lg:block group-hover:text-accent-600 transition-colors">
              {content.company.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" isActive={isActive("/")}>
              Accueil
            </NavLink>
            <NavLink href="/offres" isActive={isActive("/offres")}>
              Offres
            </NavLink>
            <NavLink href="/copil" isActive={isActive("/copil")}>
              Appui COPIL
            </NavLink>
            <NavLink href="/a-propos" isActive={isActive("/a-propos")}>
              À propos
            </NavLink>
            <NavLink href="/ressources" isActive={isActive("/ressources")}>
              Ressources
            </NavLink>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="btn btn-primary ml-4"
              >
                Contact
              </Link>
            </motion.div>
            <div className="ml-6 pl-6 border-l border-neutral-200">
              <SocialLinks variant="header" />
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="hidden md:flex">
              <SocialLinks variant="header" />
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 text-neutral-700 hover:text-primary-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-6 space-y-2 pt-4 border-t border-neutral-200">
                <MobileNavLink href="/" isActive={isActive("/")} onClick={() => setIsMobileMenuOpen(false)}>
                  Accueil
                </MobileNavLink>
                <MobileNavLink href="/offres" isActive={isActive("/offres")} onClick={() => setIsMobileMenuOpen(false)}>
                  Offres
                </MobileNavLink>
                <MobileNavLink href="/copil" isActive={isActive("/copil")} onClick={() => setIsMobileMenuOpen(false)}>
                  Appui COPIL
                </MobileNavLink>
                <MobileNavLink href="/a-propos" isActive={isActive("/a-propos")} onClick={() => setIsMobileMenuOpen(false)}>
                  À propos
                </MobileNavLink>
                <MobileNavLink href="/ressources" isActive={isActive("/ressources")} onClick={() => setIsMobileMenuOpen(false)}>
                  Ressources
                </MobileNavLink>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="btn btn-primary w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600 mb-3">Suivez-nous</p>
                  <SocialLinks variant="header" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

// Composant pour les liens de navigation desktop
function NavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <motion.div
        className={`relative px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? "text-primary-900 font-semibold"
            : "text-neutral-700 hover:text-primary-900"
        }`}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-600 rounded-full"
            layoutId="activeTab"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  );
}

// Composant pour les liens de navigation mobile
function MobileNavLink({
  href,
  isActive,
  onClick,
  children,
}: {
  href: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        className={`px-4 py-3 rounded-lg transition-colors ${
          isActive
            ? "bg-primary-50 text-primary-900 font-semibold border-l-4 border-accent-600"
            : "text-neutral-700 hover:bg-neutral-50 hover:text-primary-900"
        }`}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}

