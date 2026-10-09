export const currentEducationOptions = [
  "Class 11",
  "Class 12",
  "Undergraduate Student",
  "Graduate",
  "Postgraduate",
  "Working Professional",
  "Other",
] as const;

export const programInterestOptions = [
  "B.Com + ACCA",
  "BBA + ACCA",
  "ACCA Only (To Be Announced)",
  "Not Sure Yet",
] as const;

/** Bold line above the hero CTAs on the homepage, program pages and university pages. */
export const exemptionsLine = "Designed to seek up to 8 ACCA exam exemptions*";

export const heroContent = {
  eyebrow: {
    muted: "GLOBAL FINANCE &",
    highlight: "AI PROFESSIONAL PROGRAM",
  },
  headline: {
    line1: "Build Your Path to a",
    line2Highlight: "Global Finance",
    line2Rest: "Career",
  },
  subtext:
    "Choose a degree-integrated B.Com or BBA pathway, or pursue ACCA preparation independently. Build professional finance knowledge, AI capabilities and career-ready skills through one structured online learning experience.",
  ctas: {
    advisor: { label: "Talk to an Advisor", href: "#talk-to-advisor" },
    brochure: { label: "Download Brochure", href: "#download-brochure" },
  },
  background: {
    src: "/images/hero/homepage-hero-bg.jpg",
    alt: "",
  },
  video: {
    thumbnail: "/images/hero/hero-video-thumb.jpg",
    thumbnailAlt: "",
    // TODO: supply the hero video URL.
    url: "",
    // Screen-reader-only labels (never rendered visibly).
    a11y: {
      play: "Play video",
      dialogTitle: "Video",
    },
  },
  trust: [
    { icon: "route", label: "3 Program\nPathways" },
    { icon: "laptop", label: "100%\nOnline" },
    { icon: "graduationCap", label: "ACCA-Aligned\nLearning" },
    { icon: "brainCircuit", label: "AI +\nEmployability" },
  ],
  form: {
    title: "Get Program Details",
    subtitle:
      "Tell us where you are in your education journey and our team will help you explore the right pathway.",
    fields: {
      fullName: { label: "Full Name" },
      mobile: { label: "Mobile Number", countryCode: "+91" },
      email: { label: "Email Address" },
      currentEducation: {
        label: "Current Education",
        options: currentEducationOptions,
      },
      programInterest: {
        label: "Program Interested In",
        options: programInterestOptions,
      },
      city: { label: "City" },
    },
    submit: "Get Program Details",
    consent:
      "By submitting this form, you agree to be contacted regarding program information, admissions and related updates.",
  },
} as const;

export type TrustIcon = (typeof heroContent.trust)[number]["icon"];
