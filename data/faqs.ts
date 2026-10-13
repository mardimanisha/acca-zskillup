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

const accaIcons = ["graduationCap", "fileText", "laptop", "info", "receipt"] as const satisfies readonly FaqIconName[];

/** The FAQ set shared with the home page (content/home-faqs.ts). */
const accaFaqCategories: readonly FaqCategory[] = homeFaqsContent.categories.map((category, index) => ({
  id: category.id,
  label: category.label,
  icon: accaIcons[index],
  items: category.faqs.map((faq) => ({
    q: faq.question,
    a: faq.answer,
  })),
}));

export const faqCategories: readonly FaqCategory[] = accaFaqCategories;

export const defaultFaqCategoryId = faqCategories[0].id;

export type FaqCategoryId = string;

export function isFaqCategoryId(value: unknown): value is FaqCategoryId {
  return faqCategories.some((category) => category.id === value);
}
