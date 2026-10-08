// Content shapes for the program pages (B.Com + ACCA, BBA + ACCA, ACCA Only).
// Every visible string on a program page comes from one of these objects.

export type ProgramIconName =
  | "graduationCap"
  | "calendar"
  | "fileText"
  | "globe"
  | "briefcase"
  | "landmark"
  | "brain"
  | "users"
  | "bookOpen"
  | "layers"
  | "target"
  | "calculator"
  | "clock"
  | "laptop"
  | "video"
  | "playCircle"
  | "rotate"
  | "messages"
  | "clipboardCheck"
  | "userCheck";

export type SectionTone = "white" | "mint";

export type HeroContent = {
  eyebrow: string;
  title: { start: string; highlight: string };
  subtitle: string;
  body: string;
  image: { composite: string; background: string | null; student: string | null; alt: string };
  features: readonly { icon: ProgramIconName; label: string }[];
  stats: readonly { icon: ProgramIconName; label: string; tone: "mint" | "peach" }[];
};

export type WhyContent = {
  eyebrow: string;
  titleLines: readonly string[];
  body?: string;
  image: { src: string; alt: string };
  items: readonly { icon: ProgramIconName; title: string; body: string }[];
};

export type University = {
  slug: string;
  name: string;
  logo: string;
  campus: string;
  tags: readonly string[];
  features: readonly string[];
};

export type UniversitiesContent = {
  eyebrow: string;
  title: string;
  body: string;
  viewAll: { label: string; href: string };
  exploreLabel: string;
  a11y: { prev: string; next: string; goTo: string };
  universities: readonly University[];
};

export type CurriculumSubject = { name: string; code?: string; badge?: string };

export type CurriculumContent = {
  eyebrow: string;
  title: string;
  body?: string;
  columns: { degree: string; zskillup: string };
  outcomesLabel: string;
  a11y: { tabs: string; years: string };
  semesters: readonly {
    tab: string;
    label: string;
    title: string;
    meta?: string;
    degree: readonly CurriculumSubject[];
    zskillup: readonly CurriculumSubject[];
    outcomes: readonly string[];
  }[];
};

export type LevelsContent = {
  eyebrow: string;
  title?: string;
  body?: string;
  levels: readonly { icon: ProgramIconName; title: string; items: readonly string[] }[];
  highlight?: string;
  footnote?: string;
};

export type FeatureGridContent = {
  eyebrow: string;
  title: string;
  items: readonly { icon: ProgramIconName; title: string; body: string }[];
};

export type ComparisonContent = {
  eyebrow: string;
  title: string;
  cards: readonly { icon: ProgramIconName; title: string; body: string; current: boolean }[];
  cta: { label: string; href: string };
};

export type WhoForContent = {
  eyebrow: string;
  icon: ProgramIconName;
  title?: string;
  /** Large statement line. */
  statement?: string;
  paragraphs?: readonly string[];
  intro?: string;
  bullets?: readonly string[];
  note?: string;
};

export type CareersContent = {
  eyebrow: string;
  title?: string;
  intro?: string;
  roles: readonly string[];
  cta?: { label: string; href: string };
};

export type FinalCtaContent = { title: string; body?: string };
