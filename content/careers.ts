// Fixed copy for the careers page (/careers). Hiring-network logos come from data/hiringNetwork.ts.

export const careersCopy = {
  hero: {
    eyebrow: "CAREERS IN FINANCE",
    titleLine1: "Your Finance Career",
    titleLine2: "Can Take Many Directions",
    body: "From reporting and audit to business finance, analytics and strategic decision-making, build professional capabilities for a finance landscape that extends far beyond traditional accounting.",
    explore: { label: "Explore Career Paths", href: "#career-roles" },
    advisor: { label: "Talk to an Advisor", href: "#enquiry-form" },
    // TODO: replace with the supplied HERO_IMAGE (placeholder cropped from the design mockup).
    image: "/images/careers/hero-woman-clean2.jpg",
    imageAlt: "Smiling woman holding a laptop in front of office towers",
    card: [
      { icon: "document", tone: "purple", label: "Audit" },
      { icon: "chart", tone: "purple", label: "Business Finance" },
      { icon: "growth", tone: "blue", label: "Analytics" },
      { icon: "users", tone: "purple", label: "Strategic Decision-Making" },
    ],
  },
  industries: {
    eyebrow: "WHERE FINANCE CAREERS HAPPEN",
    titleLine1: "Build Skills Relevant",
    titleLine2: "Across Industries",
    // TODO: replace with the supplied SECTION_IMAGES (placeholders cropped from the design mockup).
    images: {
      campus: { src: "/images/careers/industries-campus.jpg", alt: "Modern office buildings" },
      office: { src: "/images/careers/industries-office.jpg", alt: "Glass corporate office building" },
    },
    items: [
      {
        icon: "users",
        tone: "purple",
        title: "Professional Services & Consulting",
        body: "Audit, assurance, advisory, taxation and consulting environments.",
      },
      {
        icon: "landmark",
        tone: "orange",
        title: "Banks & Financial Services",
        body: "Finance, risk, reporting, controls, analysis and related functions.",
      },
      {
        icon: "globe",
        tone: "blue",
        title: "Global Capability Centres",
        body: "International finance operations, reporting, FP&A, transformation and analytics.",
      },
      {
        icon: "building",
        tone: "purple",
        title: "MNCs & Corporate Finance",
        body: "Business finance, controllership, financial planning, reporting and strategy.",
      },
      {
        icon: "laptop",
        tone: "green",
        title: "Technology & High-Growth Businesses",
        body: "Finance operations, analytics, commercial finance and decision support.",
      },
    ],
  },
  roles: {
    id: "career-roles",
    eyebrow: "CAREER OPPORTUNITIES",
    titleLine1: "Explore",
    titleLine2: "Career Roles",
    intro: "Discover diverse career roles across finance and build the skills needed to grow in a dynamic, global career landscape.",
    // Two columns, filled column by column: items 1-3 left, items 4-6 right.
    columns: [
      [
        {
          icon: "document",
          tone: "purple",
          card: "lavender",
          title: "Accounting & Reporting",
          roles: ["Financial Accountant", "Financial Reporting Associate", "Management Accountant"],
        },
        {
          icon: "percent",
          tone: "blue",
          card: "blue",
          title: "Taxation",
          roles: ["Tax Associate", "Tax Analyst"],
        },
        {
          icon: "database",
          tone: "orange",
          card: "peach",
          title: "Finance & Investment",
          roles: ["Financial Analyst", "Corporate Finance Associate", "Investment Analysis Roles"],
        },
      ],
      [
        {
          icon: "shield",
          tone: "orange",
          card: "peach",
          title: "Audit, Risk & Controls",
          roles: ["Audit Associate", "Internal Audit Analyst", "Risk & Controls Analyst"],
        },
        {
          icon: "chart",
          tone: "green",
          card: "mint",
          title: "Planning & Business Finance",
          roles: ["FP&A Analyst", "Business Finance Analyst", "Commercial Finance Associate"],
        },
        {
          icon: "gear",
          tone: "purple",
          card: "lavender",
          title: "Finance Transformation",
          roles: ["Finance Transformation Analyst", "Data & Finance Analyst", "Business Analysis Roles"],
        },
      ],
    ],
  },
  journey: {
    eyebrow: "FROM LEARNING TO LEADING",
    titleLine1: "From Learning",
    titleLine2: "to Leading",
    steps: [
      {
        icon: "book",
        tone: "purple",
        title: "Build Your Foundation",
        body: "Develop accounting, business and finance fundamentals.",
      },
      {
        icon: "chart",
        tone: "orange",
        title: "Gain Professional Expertise",
        body: "Build deeper capabilities in reporting, taxation, audit, finance and performance.",
      },
      {
        icon: "bulb",
        tone: "yellow",
        title: "Develop Future Skills",
        body: "Strengthen AI, data, communication and business decision-making capabilities.",
      },
      {
        icon: "briefcase",
        tone: "green",
        title: "Prepare for the Workplace",
        body: "Develop your CV, LinkedIn presence, interview ability and professional communication.",
      },
      {
        icon: "person",
        tone: "purple",
        title: "Make Your Career Transition",
        body: "Practice through mock interviews, group discussions and structured placement preparation.",
      },
    ],
  },
  readiness: {
    eyebrow: "CAREER READINESS",
    titleLine1: "Your Career Preparation Starts",
    titleLine2: "Before Graduation",
    // TODO: replace with the supplied READINESS_IMAGE (placeholder cropped from the design mockup).
    image: "/images/careers/readiness-team.jpg",
    imageAlt: "Three colleagues working together at a laptop",
    items: [
      {
        icon: "document",
        tone: "purple",
        title: "CV & Profile Building",
        body: "Present your academic and professional capabilities effectively.",
      },
      {
        icon: "in",
        tone: "blue",
        title: "LinkedIn Readiness",
        body: "Build a stronger professional digital presence.",
      },
      {
        icon: "chat",
        tone: "blue",
        title: "Interview Preparation",
        body: "Learn how to communicate your knowledge, experience and potential.",
      },
      {
        icon: "users",
        tone: "purple",
        title: "Mock Interviews",
        body: "Practice before facing real recruitment processes.",
      },
      {
        icon: "group",
        tone: "orange",
        title: "Group Discussions",
        body: "Strengthen communication, reasoning and confidence.",
      },
      {
        icon: "target",
        tone: "green",
        title: "Placement Preparation",
        body: "Prepare systematically for recruitment opportunities.",
      },
    ],
  },
  network: {
    eyebrow: "HIRING NETWORK",
    title: "Connect Your Preparation to the World of Work",
  },
  cta: {
    titleLine1: "Don't Just Prepare for Exams.",
    titleLine2: "Prepare for the Career That Comes After Them.",
    button: { label: "Talk to a Career Advisor", href: "#enquiry-form" },
    // TODO: replace with the supplied CTA_IMAGE (placeholder cropped from the design mockup).
    image: "/images/careers/cta-building.jpg",
    imageAlt: "Modern office building lined with trees",
  },
} as const;
