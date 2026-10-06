import type { Config } from "tailwindcss";

// Loaded from app/globals.css via `@config` (Tailwind v4).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#0E7C70",
          tealDark: "#0B5F57",
          tealLight: "#12877A",
          navy: "#0B1A3D",
          body: "#4B5563",
          eyebrow: "#5B6B7A",
        },
        // Accent colours for the "Why ZSkillup" cards.
        accent: {
          teal: { icon: "#0E7C70", tint: "#E3F4F1", badge: "#0E7C70" },
          purple: { icon: "#8B5CF6", tint: "#EFEAFD", badge: "#A855F7" },
          orange: { icon: "#F28C28", tint: "#FDEEE0", badge: "#F59E0B" },
        },
        // Program-page palette (sampled from the hero design image).
        zs: {
          navy: "#09174D",
          green: "#03714C",
          greenHover: "#025E3F",
          greenDark: "#014331",
          mint: "#E7F5EF",
          mintSoft: "#F4FAF6",
          body: "#5B6475",
          line: "#E3EAE5",
          peach: "#FEEEE0",
          orange: "#F47A2C",
          pillText: "#3F6B5C",
          cardText: "#3E3E5B",
        },
        panel: {
          from: "#F3FBF9",
          to: "#EEF8F5",
          border: "#E3F1ED",
        },
      },
    },
  },
};

export default config;
