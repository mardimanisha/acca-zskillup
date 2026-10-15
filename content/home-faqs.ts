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
      id: "programs-pathways",
      label: "Programs & Pathways",
      faqs: [
        {
          question: "What programs are available through ZSkillup School of Accounting & Management?",
          answer:
            "The current program pathways include the B.Com + Global Finance & AI Professional Program and the BBA + Global Finance & AI Professional Program. These pathways are designed to combine academic learning with ACCA professional Qualification, practical finance skills, digital and AI exposure, and employability development.",
        },
        {
          question: "What is the B.Com + Global Finance & AI Professional Program?",
          answer:
            "It is a pathway designed for students who want to pursue a B.Com while also building professional finance capabilities. The program combines academic learning with ACCA professional Qualification, practical finance learning, digital and AI skills, and career-readiness support.",
        },
        {
          question: "What is the BBA + Global Finance & AI Professional Program?",
          answer:
            "It is a pathway designed for students who want to pursue a BBA while developing professional finance and business capabilities. The program combines academic learning with ACCA professional Qualification, practical finance learning, digital and AI skills, and employability support.",
        },
        {
          question: "How does ACCA preparation fit into these programs?",
          answer:
            "ACCA preparation is integrated as part of the professional learning pathway. The exact ACCA examinations a student may need to complete depend on the university, degree, curriculum, entry route and exemptions awarded by ACCA.",
        },
        {
          question: "Can I pursue ACCA alongside a B.Com or BBA?",
          answer:
            "Yes. ACCA can be pursued alongside an undergraduate degree. The appropriate pathway and potential exemptions depend on the student's university, program and eligibility under ACCA's prevailing rules.",
        },
        {
          question: "Does every student follow the same ACCA pathway?",
          answer:
            "No. The ACCA pathway may differ from student to student depending on academic background, entry route, exemptions, examinations already completed, individual pace and readiness.",
        },
        {
          question: "I have already completed B.Com. Can I still join?",
          answer:
            "Yes. B.Com graduates may be suitable for an ACCA-focused pathway. The ACCA examinations required will depend on the exemptions for which the individual student is eligible.",
        },
        {
          question: "I have already passed some ACCA examinations. Can I still join ZSkillup?",
          answer:
            "Yes. Your learning plan can be based on the ACCA examinations you have already completed and the examinations remaining in your individual pathway.",
        },
      ],
    },
    {
      id: "acca-exemptions",
      label: "ACCA & Exemptions",
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
          question: "What is changing in the ACCA qualification from 2027?",
          answer:
            "ACCA is introducing a redesigned qualification from 2027. The new structure includes Knowledge, Expertise and Strategic Professional levels, together with Essential Employability Modules. ZSkillup's curriculum is being designed around the applicable redesigned ACCA syllabus and examination requirements.",
        },
        {
          question: "What subjects are included at the Expertise level under the redesigned ACCA qualification?",
          answer:
            "The Expertise level includes E1 - Taxation, E2 - Financial Reporting, E3 - Audit, Risk and Control, E4 - Finance and Investment, E5 - Performance with Data Analysis, together with the Digital Tech and Innovation Essential Employability Module.",
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
          question: "How many ACCA exemptions can I receive?",
          answer:
            "The number of exemptions is not the same for every student. Some program pathways may be designed to seek up to 8 ACCA exam exemptions, but the actual exemptions available depend on the university, degree, curriculum and the student's eligibility. Final exemption assessment and award are determined by ACCA.",
        },
        {
          question: "Where can I check my ACCA exemptions?",
          answer:
            "Exemptions should be verified through ACCA's official exemption assessment or exemption calculator. ZSkillup can help students understand their pathway, but the final determination and award of exemptions rests with ACCA.",
        },
        {
          question: "How long does it take to complete ACCA?",
          answer:
            "There is no single completion period applicable to every student. It depends on exemptions, the number of examinations attempted in each session, examination results, entry route and the student's individual pace.",
        },
        {
          question: "Is ACCA easy to pass?",
          answer:
            "ACCA is a rigorous professional qualification. Success requires conceptual understanding, consistent study, question practice and good examination technique. ZSkillup's approach therefore focuses on both concept learning and exam application.",
        },
      ],
    },
    {
      id: "learning-experience",
      label: "Learning Experience",
      faqs: [
        {
          question: "What does ZSkillup add beyond ACCA examination preparation?",
          answer:
            "ZSkillup's approach combines professional qualification preparation with practical skills and employability development. In addition to applicable ACCA preparation, students may receive access to practical, digital, communication and career-readiness learning.",
        },
        {
          question: "How are ZSkillup classes delivered?",
          answer:
            "The programs are designed primarily around structured online learning, including live faculty-led classes, learning content, question practice, revision, mock examinations and exam-focused preparation.",
        },
        {
          question: "Who teaches at ZSkillup?",
          answer:
            "ZSkillup's faculty model combines professional qualifications with practical industry experience. Faculty may include professionals with qualifications such as CA, CS, US CPA, CFA and FRM, including professionals with experience across banking, investment management, financial reporting and other finance functions.",
        },
        {
          question: "What makes ZSkillup's learning approach different?",
          answer:
            "ZSkillup believes passing examinations is only one part of becoming a successful finance professional. The learning approach therefore focuses on Professional Qualification + Practical Skills + Employability.",
        },
        {
          question: "What additional classes or skill sessions may be available?",
          answer:
            "Depending on the program, additional sessions may cover Generative AI and Prompt Engineering, AI and Business Analytics, Financial Literacy, Financial Modelling, Virtual Accounting and Finance Labs, Communicative English, Sustainable Finance and ESG, professional and workplace skills, interview preparation, mock interviews and placement preparation.",
        },
        {
          question: "Are the additional employability classes compulsory?",
          answer:
            "No. ZSkillup's additional employability classes are optional and do not have examinations. They are intended to help students develop practical, digital, communication, professional and career skills and become more job ready.",
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
      ],
    },
    {
      id: "careers-employability",
      label: "Careers & Employability",
      faqs: [
        {
          question: "What career opportunities can I explore after ACCA?",
          answer:
            "Depending on your skills, experience and other qualifications, ACCA can support careers in areas such as accounting, financial reporting, audit, taxation, FP&A, management accounting, corporate finance, banking, consulting and other finance roles across Big 4 firms, banks, GCCs, MNCs and other organisations.",
        },
        {
          question: "Does ZSkillup provide placement support?",
          answer:
            "ZSkillup's programs include career-readiness and placement-preparation support. ZSkillup also works with placement consultants experienced in finance-domain recruitment, with 10+ years of experience and 3,000+ placements of fresh accountants. Placement support does not constitute a guarantee of employment; actual outcomes depend on student performance, skills, eligibility, employer requirements and prevailing job-market conditions.",
        },
        {
          question: "Will ZSkillup help me prepare for interviews?",
          answer:
            "Yes. Optional career-readiness support can include CV and profile preparation, communication development, interview preparation, mock interviews and placement preparation.",
        },
        {
          question: "Will I get exposure to finance professionals from industry?",
          answer:
            "Industry exposure is an important part of ZSkillup's employability philosophy. The programs are designed to provide opportunities for students to learn from experienced finance professionals and understand how accounting and finance concepts are applied in the workplace.",
        },
        {
          question: "Can ZSkillup guarantee that I will get a job after completing the program or ACCA?",
          answer:
            "No responsible education provider should guarantee a job merely on completion of a qualification or program. ZSkillup's role is to help students improve their knowledge, professional skills, communication, practical exposure and interview readiness so that they are better prepared to compete for suitable opportunities.",
        },
      ],
    },
    {
      id: "admissions-fees-support",
      label: "Admissions, Fees & Support",
      faqs: [
        {
          question: "Who can join ZSkillup's programs?",
          answer:
            "ZSkillup's pathways are intended for students at different stages, including students pursuing graduation, B.Com graduates and other eligible learners interested in developing a professional career in finance. The appropriate pathway depends on the student's academic background, chosen program and ACCA eligibility.",
        },
        {
          question: "How do I know which program or pathway is right for me?",
          answer:
            "The right pathway depends on your current academic stage, degree choice, previous qualifications, ACCA eligibility and any exemptions for which you may qualify. ZSkillup can help you understand the available pathways before enrolment.",
        },
        {
          question: "Are ACCA registration, examination and exemption fees included in ZSkillup's program fee?",
          answer:
            "ACCA registration, subscription, exemption and examination charges are levied separately by ACCA unless explicitly stated otherwise in a particular ZSkillup offering. Students should refer to the applicable program terms and ACCA's prevailing fee schedule.",
        },
        {
          question: "Are program fees the same for every university and pathway?",
          answer:
            "No. Fees may vary by university, degree and program pathway. Students should refer to the applicable program or university fee details for the current total fee, available payment structure and other charges.",
        },
        {
          question: "Who makes the final decision on ACCA exemptions?",
          answer:
            "The final determination and award of ACCA exemptions rests with ACCA. ZSkillup can help students understand the likely pathway, but exemptions must be verified through ACCA's official process.",
        },
      ],
    },
  ],
} as const satisfies HomeFaqsContent;
