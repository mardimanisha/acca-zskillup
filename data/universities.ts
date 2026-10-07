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
    published: true,
  },
  {
    slug: "chitkara-university",
    officialName: "Chitkara University",
    logo: "/images/universities/chitkara-logo.png",
    campusImage: "/images/universities/chitkara-campus.jpg",
    degree: "B.Com",
    published: true,
  },
  {
    slug: "manipal-university",
    officialName: "Manipal University",
    logo: "/images/universities/manipal-logo.png",
    campusImage: "/images/universities/manipal-campus.jpg",
    degree: "B.Com",
    published: true,
  },
  {
    slug: "upes",
    officialName: "UPES University",
    logo: "/images/universities/upes-logo.png",
    campusImage: "/images/universities/upes-campus.jpg",
    degree: "BBA",
    published: true,
  },
  {
    slug: "amity-university-online",
    officialName: "Amity University Online",
    logo: "/images/universities/amity-logo.png",
    campusImage: "/images/universities/amity-campus.jpg",
    degree: "BBA",
    published: true,
  },
  {
    slug: "sage-university",
    officialName: "SAGE University",
    logo: "/images/universities/sage-logo.png",
    campusImage: "/images/universities/sage-campus.jpg",
    degree: "B.Com",
    published: true,
  },
];

export const publishedUniversities = universities.filter((u) => u.published);
