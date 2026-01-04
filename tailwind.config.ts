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
        // Couleurs premium vives inspirées d'Apple
        ebe: {
          gray: "#1D1D1F", // Noir Apple pour texte
          orange: "#FF9500", // Orange vif et saturé (style Apple)
          offWhite: "#FFFFFF", // Blanc pur
        },
        // Palette premium avec couleurs vives
        primary: {
          50: "#FFFFFF", // Blanc pur
          100: "#F5F5F7", // Gris très clair Apple
          200: "#E5E5EA",
          300: "#D1D1D6",
          400: "#C7C7CC",
          500: "#1D1D1F", // Noir Apple
          600: "#000000", // Noir pur
          700: "#1D1D1F",
          800: "#000000",
          900: "#1D1D1F",
          950: "#000000",
        },
        accent: {
          50: "#FFF5E6",
          100: "#FFEACC",
          200: "#FFD599",
          300: "#FFC066",
          400: "#FFAB33",
          500: "#FF9500", // Orange vif Apple-style
          600: "#E68500",
          700: "#CC7500",
          800: "#B36500",
          900: "#995500",
        },
        neutral: {
          50: "#FFFFFF", // Blanc pur
          100: "#F5F5F7", // Gris très clair Apple
          200: "#E5E5EA",
          300: "#D1D1D6",
          400: "#C7C7CC",
          500: "#8E8E93",
          600: "#636366",
          700: "#48484A",
          800: "#3A3A3C",
          900: "#1D1D1F", // Noir Apple
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-montserrat)", "system-ui", "sans-serif"],
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

