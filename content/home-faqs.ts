export type Faq = {
  question: string;
  answer: string;
  /** Optional list rendered under the answer. */
  bullets?: readonly string[];
};

type HomeFaqsContent = {
  eyebrow: string;
  heading: { navy: string; teal: string };
  subtext: string;
  help: { title: string; body: string; cta: { label: string; href: string } };
  categories: readonly FaqCategory[];
};

export type FaqCategory = { id: string; label: string; faqs: readonly Faq[] };

export const homeFaqsContent = {
  eyebrow: "FAQs",
  heading: {
    navy: "Frequently Asked",
    teal: "Questions",
  },
  subtext: "Everything you need to know about ACCA and the ZSkillup programs.",
  help: {
    title: "Still have a question?",
    body: "Our team is here to help you with personalized guidance.",
    cta: { label: "Talk to Our Team", href: "#enquiry-form" },
  },
  categories: [
    {
      id: "about-acca",
      label: "About ACCA",
      faqs: [
        {
          question: "What is ACCA?",
          answer:
            "ACCA (Association of Chartered Certified Accountants) is a globally recognised professional accountancy qualification. It develops knowledge and skills across accounting, financial reporting, audit, taxation, finance, performance management, business leadership and related areas.",
        },
        {
          question: "Is ACCA recognised globally?",
          answer:
            "Yes. ACCA is an international professional accountancy body with members and future members across the world. The qualification is recognised by employers across multiple countries and industries.",
        },
        {
          question: "What career opportunities can I explore after ACCA?",
          answer:
            "Depending on your skills, experience and other qualifications, ACCA can support careers in areas such as accounting, financial reporting, audit, taxation, FP&A, management accounting, corporate finance, banking, consulting and other finance roles across Big 4 firms, banks, GCCs, MNCs and other organisations.",
        },
        {
          question: "What is changing in the ACCA qualification from 2027?",
          answer:
            "ACCA is introducing a redesigned qualification from 2027. The new structure includes Knowledge, Expertise and Strategic Professional levels, together with Essential Employability Modules. ZSkillup's curriculum is being designed around the applicable redesigned ACCA syllabus and examination requirements.",
        },
        {
          question: "What subjects are included at the Expertise level under the redesigned ACCA qualification?",
          answer: "The Expertise level includes:",
          bullets: [
            "E1 - Taxation",
            "E2 - Financial Reporting",
            "E3 - Audit, Risk and Control",
            "E4 - Finance and Investment",
            "E5 - Performance with Data Analysis",
            "Digital Tech and Innovation - Essential Employability Module",
          ],
        },
        {
          question: "What subjects are included at Strategic Professional level?",
          answer:
            "Students complete S1 - Business and Sustainability Reporting, S2 - Strategic Business Leader, and one Strategic Professional option. The available options include Audit and Assurance Professional, Corporate Finance Professional, Data Science Professional, Performance and Insights Professional, and Taxation Advisory Professional.",
        },
        {
          question: "Do I need to complete every ACCA examination?",
          answer:
            "Not necessarily. The examinations you need to complete depend on your previous academic qualifications and the exemptions awarded by ACCA. Exemptions are determined by ACCA and may differ by university, degree, curriculum and individual student.",
        },
        {
          question: "Can a B.Com student pursue ACCA?",
          answer:
            "Yes. ACCA can be pursued alongside or after a B.Com. The appropriate pathway and potential exemptions depend on the student's university, programme and eligibility under ACCA's prevailing rules.",
        },
        {
          question: "How long does it take to complete ACCA?",
          answer:
            "There is no single completion period applicable to every student. It depends on exemptions, number of examinations attempted in each session, examination results, entry route and the student's individual pace.",
        },
        {
          question: "Is ACCA easy to pass?",
          answer:
            "ACCA is a rigorous professional qualification. Success requires conceptual understanding, consistent study, question practice and good examination technique. ZSkillup's approach therefore focuses on both concept learning and exam application.",
        },
      ],
    },
    {
      id: "zskillup-offering",
      label: "About ZSkillup's ACCA Offering",
      faqs: [
        {
          question: "What is the ZSkillup ACCA Global Employability Program?",
          answer:
            "It is designed to combine ACCA preparation with employability development. In addition to preparing students for applicable ACCA examinations, ZSkillup provides access to additional sessions intended to develop practical, digital, communication and career-readiness skills. Employability First. Always.",
        },
        {
          question: "How are ZSkillup ACCA classes delivered?",
          answer:
            "The programme is designed primarily around structured online learning, including live faculty-led classes, learning content, question practice, revision, mock examinations and exam-focused preparation.",
        },
        {
          question: "Who teaches at ZSkillup?",
          answer:
            "ZSkillup's faculty model combines professional qualifications with practical industry experience. Our faculty includes professionals with qualifications such as CA, CS, US CPA, CFA and FRM, including professionals who have worked in senior roles across banking, investment management, financial reporting and other finance functions.",
        },
        {
          question: "What makes ZSkillup's approach different?",
          answer:
            "We believe passing examinations is only one part of becoming a successful finance professional. Our programme therefore focuses on Professional Qualification + Practical Skills + Employability.",
        },
        {
          question: "What additional classes does ZSkillup provide?",
          answer: "Depending on the programme, additional sessions may cover areas such as:",
          bullets: [
            "Generative AI and Prompt Engineering",
            "AI and Business Analytics",
            "Financial Literacy",
            "Financial Modelling",
            "Virtual Accounting and Finance Labs",
            "Communicative English",
            "Sustainable Finance & ESG",
            "Professional and workplace skills",
            "Interview preparation",
            "Mock interviews",
            "Placement preparation",
          ],
        },
        {
          question: "Are ZSkillup's additional employability classes compulsory?",
          answer:
            "No. ZSkillup's additional employability classes are optional and do not have examinations. They are provided to help students develop practical, digital, communication, professional and career skills and become more job ready. Participation in these additional classes is not mandatory.",
        },
        {
          question: "Does ZSkillup provide exam preparation and mock examinations?",
          answer:
            "Yes. The learning approach includes concept teaching, question practice, revision, exam technique and mock examination support appropriate to the student's ACCA pathway.",
        },
        {
          question: "What support is available if I have questions or need help?",
          answer:
            "Students have access to a dedicated support SPOC for day-to-day requirements, together with a senior escalation point where additional assistance is required. A dedicated email support channel is also available.",
        },
        {
          question: "Does every student follow the same ACCA exam schedule?",
          answer:
            "No. ACCA examinations, their sequence and timing can differ between students depending on their entry route, exemptions, individual pace, readiness and when they choose to schedule their examinations. ZSkillup helps students understand and plan an appropriate learning pathway.",
        },
      ],
    },
    {
      id: "careers",
      label: "Careers & Employability",
      faqs: [
        {
          question: "Does ZSkillup provide placement support?",
          answer:
            "ZSkillup's programme includes career-readiness and placement-preparation support. ZSkillup also works with placement consultants experienced in finance-domain recruitment, with 10+ years of experience and 3,000+ placements of fresh accountants. Placement support does not constitute a guarantee of employment; actual outcomes depend on factors including student performance, skills, eligibility, employer requirements and prevailing job-market conditions.",
        },
        {
          question: "Will ZSkillup help me prepare for interviews?",
          answer:
            "Yes. Optional career-readiness support can include CV and profile preparation, communication development, interview preparation, mock interviews and placement preparation.",
        },
        {
          question: "Will I get exposure to finance professionals from industry?",
          answer:
            "Industry exposure is an important part of ZSkillup's employability philosophy. The programme is designed to provide opportunities for students to learn from experienced finance professionals and understand how accounting and finance concepts are applied in the workplace.",
        },
        {
          question: "Can ZSkillup guarantee that I will get a job after ACCA?",
          answer:
            "No responsible education provider should guarantee a job merely on completion of a qualification. ZSkillup's role is to help students improve their knowledge, professional skills, communication, practical exposure and interview readiness so that they are better prepared to compete for suitable opportunities.",
        },
      ],
    },
    {
      id: "admissions",
      label: "Admissions & Eligibility",
      faqs: [
        {
          question: "Who can join ZSkillup's ACCA programs?",
          answer:
            "ZSkillup's ACCA pathways are intended for students at different stages, including students pursuing graduation, B.Com graduates and other eligible learners interested in developing a professional career in finance. The appropriate pathway depends on the student's academic background and ACCA eligibility.",
        },
        {
          question: "I have already completed B.Com. Can I join?",
          answer:
            "Yes. B.Com graduates may be suitable for ZSkillup's ACCA Fast Track pathway. The ACCA papers required will depend on the exemptions for which the individual student is eligible.",
        },
        {
          question: "I have already passed some ACCA papers. Can I still join ZSkillup?",
          answer:
            "Yes. Your learning plan can be based on the ACCA examinations you have already completed and the examinations remaining in your individual pathway.",
        },
        {
          question: "Are ACCA registration, examination and exemption fees included in ZSkillup's programme fee?",
          answer:
            "ACCA registration, subscription, exemption and examination charges are levied separately by ACCA unless explicitly stated otherwise in a particular ZSkillup offering. Students should refer to the applicable programme terms and ACCA's prevailing fee schedule.",
        },
        {
          question: "Where can I check my ACCA exemptions?",
          answer:
            "Exemptions should be verified through ACCA's official exemption assessment/calculator. ZSkillup can help students understand their pathway, but the final determination and award of exemptions rests with ACCA.",
        },
      ],
    },
  ],
} as const satisfies HomeFaqsContent;
