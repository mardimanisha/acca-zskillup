import { hiringNetwork, universityPartners } from "@/content/partners";

export const homePartnersContent = {
  tabs: [
    {
      id: "universities",
      label: "University Partners",
      icon: "graduation-cap",
      eyebrow: "UNIVERSITY PARTNERS",
      titleStart: "Earn Your Degree from a",
      titleHighlight: "Leading University",
      subtext:
        "Explore B.Com and BBA pathways offered with our university partners while building professional finance, AI and career-ready capabilities through the Global Finance & AI Professional Program.",
      cta: { label: "Explore Universities", href: "/universities" },
      logos: universityPartners,
    },
    {
      id: "hiring",
      label: "Hiring Network",
      icon: "briefcase",
      eyebrow: "HIRING NETWORK",
      titleStart: "Preparing You for the",
      titleHighlight: "World of Finance",
      subtext:
        "Build capabilities relevant to opportunities across professional services, banks, GCCs, financial institutions, consulting firms and global businesses.",
      cta: null,
      logos: hiringNetwork,
    },
  ],
} as const;

export type PartnersTab = (typeof homePartnersContent.tabs)[number];
export type PartnersTabIcon = PartnersTab["icon"];
