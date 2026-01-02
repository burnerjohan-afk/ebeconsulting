import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs officielles EBE selon la charte graphique
        ebe: {
          gray: "#3E4A4F", // Gris EBE - Texte / silhouette
          orange: "#F2A12C", // Orange EBE - Accent / étoile / 2e E
          offWhite: "#F7F4EF", // Blanc cassé - Fond
        },
        // Palette étendue basée sur les couleurs officielles
        primary: {
          50: "#F7F4EF", // Blanc cassé EBE
          100: "#EFE8DF",
          200: "#DFD1BF",
          300: "#CFBA9F",
          400: "#BFA37F",
          500: "#3E4A4F", // Gris EBE
          600: "#323C40",
          700: "#262E32",
          800: "#323C40", // Pour compatibilité
          900: "#3E4A4F", // Gris EBE - pour compatibilité avec ancien code
          950: "#262E32",
        },
        accent: {
          50: "#FEF5E6",
          100: "#FDEBCD",
          200: "#FBD79B",
          300: "#F9C369",
          400: "#F7AF37",
          500: "#F2A12C", // Orange EBE
          600: "#C28123", // Pour compatibilité
          700: "#92611A",
          800: "#614012",
          900: "#312009",
        },
        neutral: {
          50: "#F7F4EF", // Blanc cassé EBE
          100: "#EFE8DF",
          200: "#DFD1BF",
          300: "#CFBA9F",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#3E4A4F", // Gris EBE
          800: "#323C40",
          900: "#262E32",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "var(--font-open-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

