export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: readonly NavLink[];
};

export const siteContent = {
  name: "ZSkillup",
  logo: {
    wordmark: "ZSkillup",
    href: "/",
  },
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Programs",
      href: "/programs",
      children: [
        { label: "B.Com + ACCA", href: "/programs/bcom-acca" },
        { label: "BBA + ACCA", href: "/programs/bba-acca" },
        { label: "ACCA Only", href: "/programs/acca" },
      ],
    },
    { label: "Universities", href: "/universities" },
    { label: "Careers", href: "/careers" },
    { label: "Fees", href: "/fees" },
    { label: "FAQs", href: "/faqs" },
  ] satisfies readonly NavItem[],
  ctas: {
    advisor: { label: "Talk to an Advisor", href: "#talk-to-advisor" },
    brochure: { label: "Download Brochure", href: "#download-brochure" },
  },
  // Screen-reader-only labels (never rendered visibly).
  a11y: {
    openMenu: "Open menu",
    menuTitle: "Menu",
    mainNav: "Main",
  },
} as const;
