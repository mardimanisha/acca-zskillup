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
          navy: "#0B1A3D",
          green: "#0E7C70",
          greenHover: "#0B5F57",
          greenDark: "#0B5F57",
          mint: "#E3F4F1",
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
          navy: "#0B1A3D",
          green: "#0E7C70",
          greenHover: "#0B5F57",
          greenDark: "#0B5F57",
          mint: "#E3F4F1",
          cream: "#FBF8F3",
          body: "#5B6475",
          line: "#E4E8E2",
          // University-page hero (sampled from the hero design image).
          hero: {
            navy: "#0B1A3D",
            ink: "#0B1A3D",
            eyebrow: "#0E7C70",
            body: "#6E7191",
            button: "#0E7C70",
            buttonHover: "#0B5F57",
            deep: "#0B5F57",
            mint: "#E3F4F1",
            icon: "#0E7C70",
            stat: "#1E1F4A",
            line: "#E6E8EA",
            bg: "#FCFBF7",
            // "Why choose" band.
            cream: "#FEFAF4",
            card: "#F7FCFA",
            recIcon: "#12877A",
            uspTitle: "#2D3359",
          },
          // Program overview band ("Program Highlights" design).
          band: {
            DEFAULT: "#0B5F57",
            eyebrow: "#A3C3BC",
            card: "#FCFCF9",
            num: "#7A8696",
            title: "#2A2A54",
            label: "#8C8CA3",
          },
          // Curriculum section ("Curriculum Journey" design).
          cur: {
            active: "#0E7C70",
            activeIcon: "#12877A",
            tab: "#0E7C70",
            tabIdle: "#F5F7FD",
            text: "#3C4270",
            meta: "#9CA2C0",
            chip: "#E3F4F1",
            peach: "#FCE7C3",
            peachText: "#6B4E1F",
            link: "#0E7C70",
            line: "#EEF0F5",
            border: "#CFE9DE",
            timeline: "#AEC6C6",
          },
          // Admission process ("Clear Division of Expertise" design).
          adm: {
            blue: "#1265AF",
            green: "#0E7C70",
            num: "#0E7C70",
            title: "#2A3066",
            text: "#7E84A3",
          },
          // Fees + closing CTA ("Program Fees" design).
          fee: {
            bg: "#FBF9F5",
            band: "#EAF6F3",
            icon: "#0E7C70",
            pill: "#E3F4F1",
            value: "#0E7C70",
            check: "#12877A",
          },
        },
        // Universities landing palette (sampled from the /universities design).
        ul: {
          navy: "#0B1A3D",
          green: "#0E7C70",
          greenHover: "#0B5F57",
          mint: "#F1FBF9",
          mintBlob: "#DDF3EC",
          lavender: "#E6E1FA",
          body: "#646B85",
          meta: "#7A8199",
          line: "#C9CDDA",
        },
        // Careers page palette (sampled from the /careers design).
        cr: {
          navy: "#0B1A3D",
          green: "#0E7C70",
          greenHover: "#0B5F57",
          body: "#5B6475",
          line: "#DDE2EC",
          lavender: "#F6F2FD",
          peach: "#FEF6EE",
          sky: "#F3F8FE",
          mint: "#F1FAF6",
        },
        // Fees page palette (sampled from the /fees design).
        fp: {
          navy: "#0B1A3D",
          green: "#0E7C70",
          greenHover: "#0B5F57",
          accent: "#12877A",
          mint: "#E3F4F1",
          mintSoft: "#F5FAF8",
          body: "#5B6475",
          line: "#DDE8E2",
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
