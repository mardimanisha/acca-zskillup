import type { Config } from "tailwindcss";

// Loaded from app/globals.css via `@config` (Tailwind v4).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
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
        // University-page palette (sampled from the university page design).
        uni: {
          navy: "#0B1F4D",
          green: "#0E6B3F",
          greenHover: "#0B5A34",
          greenDark: "#0B4A2E",
          mint: "#E6F2EA",
          cream: "#FBF8F3",
          body: "#5B6475",
          line: "#E4E8E2",
          // University-page hero (sampled from the hero design image).
          hero: {
            navy: "#0A0F4B",
            ink: "#15173D",
            eyebrow: "#136B52",
            body: "#6E7191",
            button: "#007A60",
            buttonHover: "#00664F",
            deep: "#015743",
            mint: "#E8F8EE",
            icon: "#1F7A5C",
            stat: "#1E1F4A",
            line: "#E6E8EA",
            bg: "#FCFBF7",
            // "Why choose" band.
            cream: "#FEFAF4",
            card: "#F7FCFA",
            recIcon: "#3AA383",
            uspTitle: "#2D3359",
          },
          // Program overview band ("Program Highlights" design).
          band: {
            DEFAULT: "#013C31",
            eyebrow: "#A3C3BC",
            card: "#FCFCF9",
            num: "#7A8696",
            title: "#2A2A54",
            label: "#8C8CA3",
          },
          // Curriculum section ("Curriculum Journey" design).
          cur: {
            active: "#026F58",
            activeIcon: "#12A581",
            tab: "#078968",
            tabIdle: "#F5F7FD",
            text: "#3C4270",
            meta: "#9CA2C0",
            chip: "#EDF7F3",
            peach: "#FCE7C3",
            peachText: "#6B4E1F",
            link: "#1E8A6A",
            line: "#EEF0F5",
            border: "#CFE9DE",
            timeline: "#AEC6C6",
          },
          // Admission process ("Clear Division of Expertise" design).
          adm: {
            blue: "#1265AF",
            green: "#0F9C7B",
            num: "#1E9C78",
            title: "#2A3066",
            text: "#7E84A3",
          },
          // Fees + closing CTA ("Program Fees" design).
          fee: {
            bg: "#FBF9F5",
            band: "#EDF9F2",
            icon: "#018866",
            pill: "#EAF7F0",
            value: "#0B6E52",
            check: "#3FA683",
          },
        },
        // Universities landing palette (sampled from the /universities design).
        ul: {
          navy: "#0A1758",
          green: "#05AC88",
          greenHover: "#049576",
          mint: "#F1FBF9",
          mintBlob: "#DDF3EC",
          lavender: "#E6E1FA",
          body: "#646B85",
          meta: "#7A8199",
          line: "#C9CDDA",
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
