type FacultyMemberContent = {
  name: string;
  role: string;
  credentials: string;
  image: { src: string; alt: string; width: number; height: number };
};

// TODO: replace the placeholder copy and add faculty members.
export const homeFacultyContent = {
  eyebrow: "OUR FACULTY",
  heading: {
    navy: "Learn From",
    teal: "Experienced Mentors",
  },
  subtext:
    "Our faculty bring professional experience and teaching expertise to guide you through every stage of your journey.",
  members: [] as FacultyMemberContent[],
};
