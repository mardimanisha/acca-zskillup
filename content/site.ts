/** Label for programs that are not yet open (ACCA Only). */
export const toBeAnnounced = "To Be Announced";

export type NavLink = {
  label: string;
  href: string;
  /** Not yet open: shown with a "To Be Announced" badge and not clickable. */
  comingSoon?: boolean;
};

export type NavItem = NavLink & {
  children?: readonly NavLink[];
};

export const siteContent = {
  name: "ZSkillup",
  logo: {
    wordmark: "ZSkillup",
    src: "/images/brand/zskillup-logo-black.png",
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
        { label: "ACCA Only", href: "/programs/acca", comingSoon: true },
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
