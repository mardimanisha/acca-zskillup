type FacultyMemberContent = {
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
};

// TODO: placeholder faculty copy from the design mockup; replace with real faculty before launch.
export const homeFacultyContent = {
  eyebrow: "MEET YOUR FACULTY",
  heading: {
    navy: "Academic Toppers.",
    teal: "Deep Industry Experts.",
  },
  subtext: [
    "Learn from faculty members who combine strong academic credentials with real industry experience across accounting, finance, audit, taxation, risk, strategy and global business.",
    "Our faculty includes professionals and academic achievers across qualifications such as CA, CS, ACCA, CPA and FRM, helping make complex concepts easier to understand, practical and relevant to the real world of finance.",
  ],
  members: [
    {
      name: "Prof. Arvind Mehta",
      image: { src: "/images/faculty/arvind-mehta.jpg", alt: "Portrait of Prof. Arvind Mehta", width: 896, height: 1120 },
      credentials: ["CA", "CPA"],
      achievement: "All India Rank 5 (CA)",
      experience:
        "20+ years of experience across finance, accounting, professional education and industry leadership.",
      accent: "purple",
    },
    {
      name: "Ritika Sharma",
      image: { src: "/images/faculty/ritika-sharma.jpg", alt: "Portrait of Ritika Sharma", width: 896, height: 1120 },
      credentials: ["ACCA", "MBA"],
      achievement: "Global Rank 3 (ACCA)",
      experience: "10+ years of experience in audit, risk advisory and international finance.",
      accent: "orange",
    },
    {
      name: "Karan Malhotra",
      image: { src: "/images/faculty/karan-malhotra.jpg", alt: "Portrait of Karan Malhotra", width: 896, height: 1120 },
      credentials: ["CA", "CS"],
      achievement: "All India Rank 8 (CA)",
      experience:
        "8+ years of experience in taxation, corporate advisory and business strategy.",
      accent: "purple",
    },
    {
      name: "Sneha Iyer",
      image: { src: "/images/faculty/sneha-iyer.jpg", alt: "Portrait of Sneha Iyer", width: 896, height: 1120 },
      credentials: ["ACCA", "CPA"],
      achievement: "Exam Topper (ACCA)",
      experience:
        "7+ years of experience in audit, financial reporting and global accounting standards.",
      accent: "orange",
    },
    {
      name: "Aditya Rao",
      image: { src: "/images/faculty/aditya-rao.jpg", alt: "Portrait of Aditya Rao", width: 896, height: 1120 },
      credentials: ["CA", "FRM"],
      achievement: "All India Rank 12 (CA)",
      experience:
        "6+ years of experience in risk management, financial modelling and investment analysis.",
      accent: "purple",
    },
    {
      name: "Neha Kapoor",
      image: { src: "/images/faculty/neha-kapoor.jpg", alt: "Portrait of Neha Kapoor", width: 896, height: 1120 },
      credentials: ["CS", "ACCA"],
      achievement: "Gold Medalist (CS)",
      experience:
        "8+ years of experience in corporate governance, compliance and strategic advisory.",
      accent: "orange",
    },
  ] as FacultyMemberContent[],
};
