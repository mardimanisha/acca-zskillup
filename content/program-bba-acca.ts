// All visible copy for the BBA + ACCA program page. Text is verbatim from the
// approved content brief — do not edit wording here without sign-off.

export const programCtas = {
  advisor: { label: "Talk to an Advisor", href: "#enquiry-form" },
  // TODO: drop the supplied brochure PDF at this path.
  brochure: { label: "Download Brochure", href: "/brochures/bba-acca-brochure.pdf" },
  comparePrograms: { label: "Compare Programs", href: "/programs/bcom-acca" },
} as const;

export const bbaHero = {
  eyebrow: "GLOBAL FINANCE & AI PROFESSIONAL PROGRAM",
  title: { start: "BBA", highlight: " + ACCA" },
  subtitle: "Business Education Meets Professional Finance",
  body: "A three-year online BBA pathway combining business and management education with ACCA-aligned professional finance learning, AI capabilities and structured employability preparation.",
  // `composite` is cut from the design screenshot (copy, note, ACCA card and stats
  // strip painted out; 2x upscale). TODO: replace with the original photo, or supply
  // a cut-out student + campus background via `student` / `background`.
  image: {
    composite: "/images/hero/bba-hero-campus-v3.jpg",
    background: null as string | null,
    student: null as string | null,
    alt: "Student holding a laptop",
  },
  features: [
    { icon: "briefcase", label: "Business & Management" },
    { icon: "landmark", label: "Professional Finance" },
    { icon: "brain", label: "AI & Business Decision-Making" },
    { icon: "users", label: "Career Readiness" },
  ],
  stats: [
    { icon: "graduationCap", label: "3 Years", tone: "mint" },
    { icon: "fileText", label: "6 Semesters", tone: "mint" },
    { icon: "globe", label: "26 Subjects", tone: "mint" },
    { icon: "users", label: "100% Online", tone: "peach" },
  ],
} as const;

export const bbaWhy = {
  eyebrow: "WHY CHOOSE BBA + ACCA?",
  titleLines: ["Build Business Breadth and", "Finance Depth Together"],
  // TODO: replace with the supplied section image asset.
  image: { src: "/images/hero/hero-bg.jpg", alt: "" },
  items: [
    {
      icon: "briefcase",
      title: "Business & Management",
      body: "Study marketing, operations, organisations, international business, strategy and entrepreneurship.",
    },
    {
      icon: "landmark",
      title: "Professional Finance",
      body: "Develop ACCA-aligned capabilities across accounting, taxation, reporting, audit, investment and performance.",
    },
    {
      icon: "brain",
      title: "AI & Business Decision-Making",
      body: "Build practical exposure to AI, financial modelling, analytics and technology-led decision-making.",
    },
    {
      icon: "users",
      title: "Career Readiness",
      body: "Develop communication, professional positioning and interview capabilities throughout your degree.",
    },
  ],
} as const;

// DUMMY partner data for layout only: real university names/logos used as placeholders.
// Replace with the confirmed partner list (names, logos, campus photos, programs) before launch.
// Logos and campus photos are cropped from the design mockup (low resolution).
const universityFeatures = [
  "Globally recognised degree",
  "ACCA-aligned learning",
  "Finance & AI skills",
  "Employability preparation",
] as const;

export const bbaUniversities = {
  eyebrow: "UNIVERSITY PARTNERS",
  title: "Our Reputed University Partners",
  body: "Earn your BBA + ACCA from our reputed university partners while building professional finance, AI and employability skills with ZSkillup.",
  viewAll: { label: "View All Universities", href: "/universities" },
  exploreLabel: "Explore University",
  // Screen-reader-only labels for the carousel controls.
  a11y: { prev: "Previous universities", next: "Next universities", goTo: "Go to university" },
  universities: [
    {
      slug: "northeastern-university",
      name: "Northeastern University",
      logo: "/images/universities/northeastern-logo.png",
      campus: "/images/universities/northeastern-campus.jpg",
      tags: ["B.Com + ACCA", "3 Years", "Online"],
      features: universityFeatures,
    },
    {
      slug: "international-school-of-management",
      name: "International School of Management",
      logo: "/images/universities/ism-logo.png",
      campus: "/images/universities/ism-campus.jpg",
      tags: ["B.Com + ACCA", "3 Years", "Online"],
      features: universityFeatures,
    },
    {
      slug: "eu-business-school",
      name: "EU Business School",
      logo: "/images/universities/eu-business-school-logo.png",
      campus: "/images/universities/eu-business-school-campus.jpg",
      tags: ["BBA + ACCA", "3 Years", "Online"],
      features: universityFeatures,
    },
    {
      slug: "university-of-east-london",
      name: "University of East London",
      logo: "/images/universities/uel-logo.png",
      campus: "/images/universities/uel-campus.jpg",
      tags: ["BBA + ACCA", "3 Years", "Online"],
      features: universityFeatures,
    },
  ],
} as const;

// Semester split follows "BBA Curriculum Proposal" (Amity University Online x ZSkillUp):
// `degree` = taught by the university, `zskillup` = taught by ZSkillUp. `code` = ACCA paper.
// Subject names are from the approved content brief. Hours lines are from the proposal.
type CurriculumSubject = { name: string; code?: string };

export const bbaCurriculum = {
  eyebrow: "SEMESTER-WISE CURRICULUM",
  title: "Detailed Learning Structure",
  body: "A balanced blend of university-governed BBA curriculum, ACCA-aligned learning and employability skills.",
  columns: { degree: "BBA DEGREE CURRICULUM", zskillup: "ZSKILLUP ACCA PREPARATION" },
  outcomesLabel: "END OF SEMESTER OUTCOMES:",
  // Screen-reader-only label for the semester tabs.
  a11y: { tabs: "Semesters" },
  semesters: [
    {
      tab: "S1",
      label: "Semester 01",
      title: "S1: Business & Accounting Foundations",
      meta: "5 subjects · 275h classroom · 550h self-study",
      degree: [
        { name: "Financial Accounting", code: "K1" },
        { name: "Management Accounting & Business Analytics", code: "K2" },
        { name: "Business Law & Business Environment", code: "K3" },
        { name: "Business Economics" },
      ],
      zskillup: [{ name: "AI, Financial Modelling & Business Decision Making" }],
      outcomes: ["K1 Financial Accounting", "K2 Management Accounting", "K3 Business Law"],
    },
    {
      tab: "S2",
      label: "Semester 02",
      title: "S2: Business & Accounting Foundations",
      meta: "5 subjects · 275h classroom · 550h self-study",
      degree: [{ name: "Principles of Marketing" }],
      zskillup: [
        { name: "Financial Reporting", code: "E2" },
        { name: "Taxation", code: "E1" },
        { name: "Performance Management & Data Analysis", code: "E5" },
        { name: "Business Communication" },
      ],
      outcomes: ["E1 Taxation", "E2 Financial Reporting", "E5 Performance Management & Data Analysis"],
    },
    {
      tab: "S3",
      label: "Semester 03",
      title: "S3: Professional Expertise & Management Breadth",
      meta: "4 subjects · 220h classroom · 440h self-study",
      degree: [{ name: "Management, People & Organisations" }, { name: "Operations Management" }],
      zskillup: [
        { name: "Audit, Risk & Control", code: "E3" },
        { name: "Finance & Investment", code: "E4" },
      ],
      outcomes: ["E3 Audit, Risk & Control", "E4 Finance & Investment"],
    },
    {
      tab: "S4",
      label: "Semester 04",
      title: "S4: Professional Expertise & Management Breadth",
      meta: "4 subjects · 220h classroom · 440h self-study",
      degree: [{ name: "International Business & Marketing" }, { name: "Business Research Methods" }],
      zskillup: [
        { name: "Strategy, Leadership & Governance" },
        { name: "Business & Sustainability Reporting", code: "S1" },
      ],
      outcomes: ["S1 Business & Sustainability Reporting"],
    },
    {
      tab: "S5",
      label: "Semester 05",
      title: "S5: Strategic Professional Learning & Career Transition",
      meta: "4 subjects · 280h classroom · 560h self-study",
      degree: [{ name: "Entrepreneurship & Innovation" }],
      zskillup: [
        { name: "Professional Specialisation" },
        { name: "Strategic Business Leader", code: "S2" },
        { name: "Career Readiness Lab I: CV, LinkedIn & Interview Skills" },
      ],
      outcomes: ["S2 Strategic Business Leader"],
    },
    {
      tab: "S6",
      label: "Semester 06",
      title: "S6: Strategic Professional Learning & Career Transition",
      meta: "4 subjects · 280h classroom · 560h self-study",
      degree: [{ name: "Corporate Strategy & Business Transformation" }],
      zskillup: [
        { name: "Advanced Professional Specialisation" },
        { name: "Strategic Professional Option" },
        { name: "Career Readiness Lab II: Mock Interviews, Group Discussions & Placement Preparation" },
      ],
      outcomes: ["Strategic Professional Option"],
    },
  ] satisfies {
    tab: string;
    label: string;
    title: string;
    meta: string;
    degree: CurriculumSubject[];
    zskillup: CurriculumSubject[];
    outcomes: string[];
  }[],
};

export const bbaAccaLearning = {
  eyebrow: "ACCA-ALIGNED LEARNING",
  title: "Build Professional Finance Knowledge Alongside Your Degree",
  levels: [
    {
      icon: "bookOpen",
      title: "Knowledge",
      items: ["Financial Accounting", "Management Accounting", "Business Law"],
    },
    {
      icon: "layers",
      title: "Expertise",
      items: [
        "Taxation",
        "Financial Reporting",
        "Audit, Risk & Control",
        "Finance & Investment",
        "Performance Management & Data Analysis",
      ],
    },
    {
      icon: "target",
      title: "Strategic Professional",
      items: [
        "Business & Sustainability Reporting",
        "Strategic Business Leader",
        "One Strategic Professional Option",
      ],
    },
  ],
  highlight: "Designed to seek up to 8 ACCA exam exemptions*",
  footnote:
    "*Subject to formal ACCA exemption accreditation, the final accredited university curriculum and individual eligibility. Strategic Professional examinations are not exemptible.",
} as const;

export const bbaComparison = {
  eyebrow: "BBA OR B.COM?",
  title: "Choose the Academic Foundation That Fits You",
  cards: [
    {
      icon: "briefcase",
      title: "BBA + ACCA",
      body: "A broader business and management pathway covering areas such as operations, marketing, entrepreneurship, people and strategy alongside professional finance.",
      current: true,
    },
    {
      icon: "calculator",
      title: "B.Com + ACCA",
      body: "A commerce-focused pathway with greater academic emphasis on accounting, commerce, corporate finance and related disciplines.",
      current: false,
    },
  ],
} as const;

export const bbaWhoFor = {
  eyebrow: "WHO IS THIS FOR?",
  body: "Ideal for students who want to combine business and management education, professional finance learning, ACCA-aligned preparation, AI capabilities and career-readiness development.",
  note: "Eligibility: As prescribed by the selected university partner.",
} as const;

export const bbaCareers = {
  eyebrow: "CAREER POSSIBILITIES",
  roles: [
    "Business Finance Analyst",
    "Financial Analyst",
    "Audit Associate",
    "FP&A Analyst",
    "Finance & Strategy Associate",
    "Risk Analyst",
    "Management Accountant",
    "Corporate Finance Associate",
    "Business Analyst",
  ],
} as const;

export const bbaFinalCta = {
  title: "Build the Business Perspective. Build the Finance Expertise.",
} as const;

export const enquiryFormContent = {
  id: "enquiry-form",
  title: "Not Sure Which Program Is Right for You?",
  subtitle:
    "Tell us where you are today. We'll help you understand the available pathways.",
  fields: {
    fullName: "Full Name",
    mobile: "Mobile Number",
    email: "Email Address",
    currentEducation: "Current Education",
    programInterest: "Interested In",
    city: "City",
  },
  submit: "Talk to an Advisor",
  consent:
    "By submitting this form, you agree to be contacted regarding program information, admissions and related updates.",
} as const;

export const footerContent = {
  about:
    "Building pathways that connect academic learning, professional capabilities and career readiness for the future of work.",
  columns: [
    {
      title: "Programs",
      links: [
        { label: "B.Com + ACCA", href: "/programs/bcom-acca" },
        { label: "BBA + ACCA", href: "/programs/bba-acca" },
        { label: "ACCA Only", href: "/programs/acca" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Universities", href: "/universities" },
        { label: "Careers", href: "/careers" },
        { label: "Fees", href: "/fees" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
  ],
  contact: {
    title: "Get in Touch",
    email: "acca@zskillup.com",
    phone: "+91 9153005252",
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
  copyright: "© 2026 ZSkillup Education Private Limited. All rights reserved.",
} as const;
