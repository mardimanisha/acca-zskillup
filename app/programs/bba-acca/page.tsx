import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import {
  ProgramCareers,
  ProgramFeatureGrid,
  ProgramFinalCta,
  ProgramAccaLearning,
} from "@/components/programs/sections/program-blocks";
import { ProgramHiringPartners } from "@/components/programs/sections/program-hiring-partners";
import { ProgramCurriculum } from "@/components/programs/sections/program-curriculum";
import { ProgramHero } from "@/components/programs/sections/program-hero";
import { ProgramUniversities } from "@/components/programs/sections/program-universities";
import { ProgramWhy } from "@/components/programs/sections/program-why";
import { EnquiryFormSection } from "@/components/shared/enquiry-form-section";
import { bbaPage as page } from "@/content/program-bba-acca";

export const metadata: Metadata = {
  title: "BBA + ACCA | ZSkillup",
  description: page.hero.body,
};

export default function BbaAccaPage() {
  return (
    <>
      <ProgramHero content={page.hero} brochureHref={page.brochure} defaultProgram="BBA + ACCA" />
      <ProgramWhy content={page.why} brochureHref={page.brochure} />
      <ProgramUniversities content={page.universities} />
      <ProgramCurriculum content={page.curriculum} />
      <ProgramAccaLearning id="acca-learning-title" content={page.accaLearning} tone="mint" />
      <ProgramFeatureGrid id="ai-employability-title" content={page.aiEmployability} tone="white" />
      <ProgramCareers id="careers-title" content={page.careers} tone="mint" />
      <ProgramHiringPartners id="hiring-partners-title" />
      <ProgramFinalCta id="final-cta-title" content={page.finalCta} />
      <EnquiryFormSection defaultProgram="BBA + ACCA" hideProgramAndCity />
      <SiteFooter brochureHref={page.brochure} />
    </>
  );
}
