import { homeFaqsContent } from "@/content/home-faqs";

export type FaqIconName = "info" | "graduationCap" | "fileText" | "bookOpen" | "laptop" | "receipt";

/** A phrase inside an answer that renders as a link, or opens the enquiry form. */
export type FaqLink = { text: string } & ({ href: string } | { action: "enquiry" });

export type FaqItem = { q: string; a: string; bullets?: readonly string[]; links?: readonly FaqLink[] };

export type FaqCategory = {
  id: string;
  label: string;
  icon: FaqIconName;
  items: readonly FaqItem[];
};

const accaIcons = ["fileText", "graduationCap", "laptop", "info"] as const satisfies readonly FaqIconName[];

/** The ACCA FAQ set shared with the home page (content/home-faqs.ts). */
const accaFaqCategories: readonly FaqCategory[] = homeFaqsContent.categories.map((category, index) => ({
  id: category.id,
  label: category.label,
  icon: accaIcons[index],
  items: category.faqs.map((faq) => ({
    q: faq.question,
    a: faq.answer,
    ...("bullets" in faq ? { bullets: faq.bullets } : {}),
  })),
}));

const programFaqCategories = [
  {
    id: "program",
    label: "About the Program",
    icon: "info",
    items: [
      {
        q: "What is the Global Finance & AI Professional Program?",
        a: "It is ZSkillup's umbrella professional learning offering combining ACCA-aligned finance education, AI and digital finance capabilities, employability preparation and selected university degree pathways.",
      },
      {
        q: "What are the three pathways?",
        a: "B.Com + ACCA, BBA + ACCA and ACCA Only (To Be Announced).",
      },
      {
        q: "How do I choose between them?",
        a: "Choose B.Com + ACCA if you want a commerce-led undergraduate pathway, BBA + ACCA if you prefer broader business and management education, and ACCA Only if your primary requirement is structured ACCA preparation without an integrated B.Com or BBA degree.",
      },
    ],
  },
  {
    id: "degree",
    label: "B.Com + ACCA / BBA + ACCA",
    icon: "graduationCap",
    items: [
      {
        q: "Are these degree programs?",
        a: "Yes. The B.Com and BBA pathways include an online undergraduate degree awarded by the selected university partner, subject to the university's admission and academic requirements.",
      },
      {
        q: "Who awards the degree?",
        a: "The degree is awarded by the university selected for your program.",
      },
      {
        q: "How long are the programs?",
        a: "Both pathways are designed across three years and six semesters.",
      },
      {
        q: "Are the programs online?",
        a: "Yes.",
      },
      {
        q: "What is the difference between B.Com + ACCA and BBA + ACCA?",
        a: "B.Com places greater academic emphasis on commerce, accounting and related disciplines. BBA adds broader management learning across areas such as marketing, operations, organisations, strategy and entrepreneurship.",
      },
      {
        q: "Can I choose my university?",
        a: "Available university options will be displayed on the website as partnerships and admissions open.",
      },
      {
        q: "What are the eligibility requirements?",
        a: "Eligibility depends on the university chosen. The applicable requirements will be displayed on each university-specific page.",
      },
    ],
  },
  {
    id: "acca",
    label: "ACCA",
    icon: "fileText",
    items: [
      {
        q: "What is ACCA?",
        a: "ACCA is a globally recognised professional accountancy body with members and future members across 180 countries.",
      },
      {
        q: "How many ACCA exemptions can I get?",
        a: "The proposed integrated degree pathways are designed to seek up to 8 ACCA exam exemptions. The final number will depend on formal ACCA accreditation, the approved university curriculum and the student's eligibility.",
      },
      {
        q: "Are Strategic Professional exams exempted?",
        a: "No. Strategic Professional examinations are not exemptible.",
      },
      {
        q: "Is ACCA changing its qualification structure?",
        a: "Yes. ACCA is introducing a redesigned structure consisting of Knowledge, Expertise and Strategic Professional levels, with transition beginning in 2027.",
      },
      {
        q: "What if I have already started ACCA?",
        a: "Your starting point and study plan should be mapped based on the exams or exemptions you already hold and ACCA's applicable transition rules.",
      },
    ],
  },
  {
    id: "acca-only",
    label: "ACCA Only (To Be Announced)",
    icon: "bookOpen",
    items: [
      {
        q: "Is ACCA Only (To Be Announced) a degree?",
        a: "No. It is a professional preparation program.",
      },
      {
        q: "How long does ACCA Only take?",
        a: "The learning pathway is self-paced. Your overall ACCA journey depends on your starting level, exemptions, examination progress and study pace.",
      },
      {
        q: "Do I need to be a B.Com student?",
        a: "No. ZSkillup's ACCA preparation pathway is not restricted to B.Com students.",
      },
      {
        q: "Are classes live or recorded?",
        a: "The program includes live online and recorded learning.",
      },
    ],
  },
  {
    id: "learning",
    label: "Learning",
    icon: "laptop",
    items: [
      {
        q: "What will I learn apart from ACCA subjects?",
        a: "The proposed curriculum adds AI and financial modelling, business communication, CV and LinkedIn preparation, interview skills, mock interviews, group discussions and placement preparation.",
      },
      {
        q: "Is AI included in the program?",
        a: "Yes. AI, Financial Modelling & Business Decision Making forms part of the proposed integrated curriculum.",
      },
      {
        q: "Will I receive career support?",
        a: "Career-readiness learning is built into the curriculum. The exact career and placement services available may vary by program and university.",
      },
      {
        q: "Does ZSkillup guarantee a job?",
        a: "No. The program provides learning and career-preparation support but does not guarantee employment.",
      },
    ],
  },
  {
    id: "fees",
    label: "Fees & Admissions",
    icon: "receipt",
    items: [
      {
        q: "What is the program fee?",
        a: "Fees vary across the three pathways and, for degree programs, by university partner. Refer to the Fees page or speak with an advisor for the applicable fee sheet.",
        links: [{ text: "Fees page", href: "/fees" }],
      },
      {
        q: "Are ACCA fees included?",
        a: "The final fee sheet will specify what is included. ACCA registration, subscription, examination and exemption fees may be separately payable.",
      },
      {
        q: "Are instalment options available?",
        a: "Payment options depend on the selected program and university partner.",
      },
      {
        q: "How do I apply?",
        a: "Complete the enquiry form or select Talk to an Advisor. The team will help you identify the relevant pathway and guide you through the next steps.",
        links: [{ text: "Talk to an Advisor", action: "enquiry" }],
      },
    ],
  },
] as const satisfies readonly FaqCategory[];

export const faqCategories: readonly FaqCategory[] = [...accaFaqCategories, ...programFaqCategories];

export const defaultFaqCategoryId = faqCategories[0].id;

export type FaqCategoryId = string;

export function isFaqCategoryId(value: unknown): value is FaqCategoryId {
  return faqCategories.some((category) => category.id === value);
}
