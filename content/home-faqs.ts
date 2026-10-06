export type Faq = { question: string; answer: string };

type HomeFaqsContent = {
  eyebrow: string;
  heading: { navy: string; teal: string };
  subtext: string;
  cta: { label: string; href: string };
  faqs: readonly Faq[];
};

export const homeFaqsContent = {
  eyebrow: "FAQs",
  heading: {
    navy: "Everything You Need",
    teal: "to Know",
  },
  subtext:
    "Answers about programs, universities, ACCA, exemptions, online learning, fees and career preparation.",
  cta: { label: "View All FAQs", href: "/faqs" },
  faqs: [
    {
      question: "What is the Global Finance & AI Professional Program?",
      answer:
        "It is a professional learning ecosystem combining ACCA-aligned finance education, AI and digital finance capabilities, employability preparation and, in selected pathways, an online B.Com or BBA degree.",
    },
    {
      question: "Which programs can I choose from?",
      answer:
        "You can choose from B.Com + ACCA, BBA + ACCA or ACCA Only depending on your current education and career plans.",
    },
    {
      question: "Are B.Com + ACCA and BBA + ACCA online?",
      answer:
        "Yes. Both degree-integrated pathways are designed as three-year, six-semester online programs.",
    },
    {
      question: "Is ACCA Only a degree program?",
      answer:
        "No. ACCA Only is a professional preparation pathway and does not award a B.Com or BBA degree.",
    },
    {
      question: "Are ACCA exemptions available?",
      answer:
        "The proposed degree-integrated curriculum is designed to seek up to 8 ACCA exam exemptions, subject to formal ACCA exemption accreditation, the final university curriculum and individual eligibility.",
    },
    {
      question: "I am not sure which pathway is right for me. What should I do?",
      answer:
        "Talk to our program advisory team. We will understand your current education, career plans and preferred learning pathway before helping you explore the available options.",
    },
  ],
} as const satisfies HomeFaqsContent;
