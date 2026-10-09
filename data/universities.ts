// Confirmed university partners shown on /universities, in display order.
// One entry per university + degree pathway. Only `published: true` entries are rendered,
// and the cards section is hidden entirely while none are published.

export type UniversityListing = {
  /** Links to /universities/[slug]. */
  slug: string;
  /** Full official university name. */
  officialName: string;
  /** Official logo file (path under /public or absolute URL). */
  logo: string;
  /** The university's own campus photo (path under /public or absolute URL). */
  campusImage: string;
  degree: "B.Com" | "BBA";
  /** City, state shown on program-page cards. */
  location: string;
  /** True only when the partnership and admissions are confirmed. */
  published: boolean;
};

// DUMMY entries for layout only: logos and campus photos are low-res crops of the design
// mockup. Replace with the confirmed universities and official assets supplied by ZSkillup
// before launch.
export const universities: readonly UniversityListing[] = [
  {
    slug: "op-jindal-global-university",
    officialName: "O.P. Jindal Global University",
    logo: "/images/universities/op-jindal-logo.png",
    campusImage: "/images/universities/op-jindal-campus.jpg",
    degree: "B.Com",
    location: "Sonipat, Haryana",
    published: true,
  },
  {
    slug: "chitkara-university",
    officialName: "Chitkara University",
    logo: "/images/universities/chitkara-logo.png",
    campusImage: "/images/universities/chitkara-campus.jpg",
    degree: "B.Com",
    location: "Rajpura, Punjab",
    published: true,
  },
  {
    slug: "manipal-university",
    officialName: "Manipal Academy of Higher Education (Online Manipal)",
    logo: "/images/universities/manipal-logo.png",
    campusImage: "/images/universities/manipal-campus.jpg",
    degree: "B.Com",
    location: "Manipal, Karnataka",
    published: true,
  },
  {
    slug: "upes",
    officialName: "UPES University",
    logo: "/images/universities/upes-logo.png",
    campusImage: "/images/universities/upes-campus.jpg",
    degree: "BBA",
    location: "Dehradun, Uttarakhand",
    published: true,
  },
  {
    slug: "amity-university-online",
    officialName: "Amity University Online",
    logo: "/images/universities/amity-logo.png",
    campusImage: "/images/universities/amity-campus.jpg",
    degree: "BBA",
    location: "Noida, Uttar Pradesh",
    published: true,
  },
  {
    slug: "sage-university",
    officialName: "SAGE University",
    logo: "/images/universities/sage-logo.png",
    campusImage: "/images/universities/sage-campus.jpg",
    degree: "B.Com",
    location: "Indore, Madhya Pradesh",
    published: true,
  },
  {
    slug: "amrita-vishwa-vidyapeetham",
    officialName: "Amrita Vishwa Vidyapeetham",
    logo: "/images/universities/amrita-logo.png",
    campusImage: "/images/universities/amrita-campus.jpg",
    degree: "B.Com",
    location: "Coimbatore, Tamil Nadu",
    published: true,
  },
  {
    slug: "jain-university",
    officialName: "Jain University",
    logo: "/images/universities/jain-logo.png",
    campusImage: "/images/universities/jain-campus.jpg",
    degree: "B.Com",
    location: "Bengaluru, Karnataka",
    published: true,
  },
  {
    slug: "sharda-university",
    officialName: "Sharda University",
    logo: "/images/universities/sharda-university-logo.png",
    campusImage: "/images/universities/sharda-campus.jpg",
    degree: "BBA",
    location: "Greater Noida, Uttar Pradesh",
    published: true,
  },
  {
    slug: "nmims-university",
    officialName: "NMIMS University",
    logo: "/images/universities/nmims-logo.png",
    campusImage: "/images/universities/nmims-campus.jpg",
    degree: "BBA",
    location: "Mumbai, Maharashtra",
    published: true,
  },
  {
    slug: "chandigarh-university",
    officialName: "Chandigarh University",
    logo: "/images/universities/chandigarh-university-logo.png",
    campusImage: "/images/universities/chandigarh-university-campus.jpg",
    degree: "BBA",
    location: "Mohali, Punjab",
    published: true,
  },
  {
    slug: "lovely-professional-university",
    officialName: "Lovely Professional University",
    logo: "/images/universities/lpu-logo.png",
    campusImage: "/images/universities/lpu-campus.jpg",
    degree: "B.Com",
    location: "Phagwara, Punjab",
    published: true,
  },
  {
    slug: "symbiosis-online",
    officialName: "Symbiosis School for Online and Digital Learning",
    logo: "/images/universities/symbiosis-logo.png",
    campusImage: "/images/universities/symbiosis-campus.jpg",
    degree: "BBA",
    location: "Pune, Maharashtra",
    published: true,
  },
  {
    slug: "manipal-university-jaipur",
    officialName: "Manipal University Jaipur Online",
    logo: "/images/universities/muj-logo.png",
    campusImage: "/images/universities/muj-campus.jpg",
    degree: "B.Com",
    location: "Jaipur, Rajasthan",
    published: true,
  },
];

export const publishedUniversities = universities.filter((u) => u.published);

export type DegreeProgram = UniversityListing["degree"];

/** Program ids used across the site (/fees tabs, program pages) mapped to the degree a listing carries. */
export const degreeByProgramId = { bcom: "B.Com", bba: "BBA" } as const satisfies Record<string, DegreeProgram>;

export type DegreeProgramId = keyof typeof degreeByProgramId;

/**
 * Single source of truth for "which universities offer this program". Every place that lists
 * universities per program (program pages, /fees, /universities filter) goes through here, so
 * adding a university to `universities` above is enough for it to show up everywhere it applies.
 * Pass `null`/`"all"` for no filtering.
 */
export function filterUniversities(
  program: DegreeProgram | DegreeProgramId | "all" | null = "all",
): readonly UniversityListing[] {
  if (program === null || program === "all") return publishedUniversities;
  const degree = program in degreeByProgramId ? degreeByProgramId[program as DegreeProgramId] : program;
  return publishedUniversities.filter((u) => u.degree === degree);
}
