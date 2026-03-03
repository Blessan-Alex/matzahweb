import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#F0EBE2",     // Main Off-white/Beige
          text: "#1A1817",   // Deep Charcoal Umber
        },
        secondary: {
          bg: "#E2DCD3",     // Slightly darker beige for section contrast
          footer: "#D0D5DB", // Footer pale blue/grey
        },
        accent: {
          sage: "#7E8A7B",   // Preloader / Highlight Sage Green
        },
      },
      fontFamily: {
        serif: ["var(--font-moranga)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid typography clamps based on blueprint analysis
        "hero-title": "clamp(80px, 10vw, 150px)",
        "mobile-hero": "clamp(2rem, 15vw, 4rem)",
        "section-title": "clamp(5rem, 10vw, 15rem)",
        "about-text": "clamp(32px, 4vw, 61px)",
        "footer-cta": "clamp(40px, 8vw, 120px)",
      },
      borderRadius: {
        "oval": "215px / 50%",    // Custom hero oval mask
        "card": "40px",           // Heavy rounding for services cards
        "pill": "50vw",           // Used for buttons
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth-wipe": "cubic-bezier(0.12, 0, 0.39, 0)",
      },
    },
  },
  plugins: [],
};
export default config;
