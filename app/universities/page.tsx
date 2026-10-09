import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { EnquiryFormSection } from "@/components/shared/enquiry-form-section";
import { UniversitiesExplorer } from "@/components/universities/landing/universities-explorer";
import {
  UniversitiesHero,
  UniversitiesPathway,
} from "@/components/universities/landing/universities-landing";
import { universitiesLandingCopy } from "@/content/universities-landing";
import { publishedUniversities } from "@/data/universities";

export const metadata: Metadata = {
  title: "Universities | ZSkillup",
  description: universitiesLandingCopy.hero.body,
};

export default function UniversitiesLandingPage() {
  return (
    <>
      <UniversitiesHero universityCount={publishedUniversities.length} />
      <UniversitiesExplorer universities={publishedUniversities} />
      <UniversitiesPathway />
      <EnquiryFormSection />
      <SiteFooter />
    </>
  );
}
