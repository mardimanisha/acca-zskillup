import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { EnquiryFormSection } from "@/components/shared/enquiry-form-section";
import { UniversityHero } from "@/components/universities/university-hero";
import {
  UniversityAdmission,
  UniversityCurriculum,
  UniversityFees,
  UniversityOverview,
  UniversityPathway,
  UniversityWhy,
  hasCurriculum,
  hasWhyContent,
} from "@/components/universities/university-sections";
import type { SectionTone } from "@/components/universities/university-ui";
import { programInterestOptions } from "@/content/home-hero";
import { getUniversityPage, universityPages } from "@/data/universities";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-uni-serif",
  display: "swap",
});

// Only registered universities are published; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return universityPages.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata(props: PageProps<"/universities/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const u = getUniversityPage(slug);
  if (!u) return {};
  return { title: `${u.universityName} ${u.degreeShort} + ACCA | ZSkillup` };
}

type ProgramInterest = (typeof programInterestOptions)[number];

export default async function UniversityPage(props: PageProps<"/universities/[slug]">) {
  const { slug } = await props.params;
  const u = getUniversityPage(slug);
  if (!u) notFound();

  const program = `${u.degreeShort} + ACCA`;
  const defaultProgram = programInterestOptions.find((o): o is ProgramInterest => o === program);

  // Sections after the green band alternate white / warm off-white, skipping hidden ones.
  const showCurriculum = hasCurriculum(u);
  const tones: SectionTone[] = ["white", "cream"];
  let n = 0;
  const nextTone = () => tones[n++ % 2];

  return (
    <div className={fraunces.variable}>
      <UniversityHero university={u} />
      {hasWhyContent(u) && <UniversityWhy university={u} />}
      <UniversityPathway />
      <UniversityOverview university={u} tone={nextTone()} />
      {showCurriculum && <UniversityCurriculum university={u} tone={nextTone()} />}
      <UniversityAdmission tone={nextTone()} />
      <UniversityFees university={u} tone={nextTone()} />
      <EnquiryFormSection defaultProgram={defaultProgram} />
      <SiteFooter />
    </div>
  );
}
