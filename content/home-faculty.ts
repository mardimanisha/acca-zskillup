export type FacultyMemberContent = {
  name: string;
  /** Qualifications, e.g. ["CA", "CPA"]. */
  credentials: string[];
  achievement: string;
  /** Short experience blurb shown under the badge. */
  experience: string;
  /** Card accent colour. */
  accent: "purple" | "orange";
  // TODO: portraits are AI-generated placeholders; replace with real faculty photos. Falls back to initials if omitted.
  image?: { src: string; alt: string; width: number; height: number };
  /** Vertical crop (CSS object-position y) for the card portrait, tuned so every head sits at the same height. */
  imageY?: string;
  /** Pushes the card portrait down by this much (CSS length) for photos with no headroom; the gap is filled by `imageFill`. */
  imageShift?: string;
  /** Background (CSS) matching the photo's top edge, shown in the gap left by `imageShift`. */
  imageFill?: string;
};

// TODO: placeholder faculty copy from the design mockup; replace with real faculty before launch.
export const homeFacultyContent = {
  eyebrow: "MEET YOUR FACULTY",
  heading: {
    navy: "Academic Toppers.",
    teal: "Deep Industry Experts.",
  },
  subtext:
    "Learn from accomplished faculty and industry professionals across CA, CS, ACCA, CPA and FRM, bringing real-world expertise in accounting, finance, audit, taxation, risk and strategy into the classroom.",
  members: [
    {
      name: "Arpit Jain",
      image: { src: "/images/faculty/arpit-jain.jpeg", alt: "Portrait of Arpit Jain", width: 864, height: 1152 },
      imageShift: "4px",
      imageFill: "linear-gradient(to right, rgb(204,202,190), rgb(211,208,201) 25%, rgb(218,218,210) 50%, rgb(222,222,214) 75%, rgb(219,219,211))",
      credentials: ["CA", "CS", "Entrepreneur"],
      achievement: "Founder, JustSkill.ai",
      experience:
        "Former Head of Finance, Ezetap. 15+ years in finance leadership across manufacturing, IT services and fintech.",
      accent: "purple",
    },
    {
      name: "Khushbu Sinwal",
      image: { src: "/images/faculty/khushbu-sinwal.jpeg", alt: "Portrait of Khushbu Sinwal", width: 1254, height: 1254 },
      credentials: ["Chartered Accountant", "DipIFR"],
      achievement: "Assistant Vice President – Macquarie",
      experience:
        "Finance professional with experience in global banking and regulatory reporting. ACCA Diploma in International Financial Reporting (DipIFR).",
      accent: "orange",
    },
    {
      name: "Lokesh Mathur",
      image: { src: "/images/faculty/lokesh-mathur.webp", alt: "Portrait of Lokesh Mathur", width: 1122, height: 1402 },
      imageY: "14%",
      credentials: ["Engineer", "Executive MBA (IIM Calcutta)"],
      achievement: "Founder & Director",
      experience:
        "19+ years of experience in technology, education and career services. Previously led Career Services at upGrad.",
      accent: "purple",
    },
    {
      name: "Manish Temani",
      image: { src: "/images/faculty/manish-temani.webp", alt: "Portrait of Manish Temani", width: 1122, height: 1402 },
      imageY: "30%",
      credentials: ["CA (AIR 26)", "CS (AIR 1)", "US CPA"],
      achievement: "CS All India Rank 1",
      experience:
        "20+ years of experience in finance and professional education. Guides students on finance career paths, the skills employers value and the roadmap to a ₹10 LPA first salary.",
      accent: "orange",
    },
  ] as FacultyMemberContent[],
};
