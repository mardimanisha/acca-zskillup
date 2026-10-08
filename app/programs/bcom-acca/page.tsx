import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import {
  ProgramCareers,
  ProgramFeatureGrid,
  ProgramFinalCta,
  ProgramAccaLearning,
  ProgramWhoFor,
} from "@/components/programs/sections/program-blocks";
import { ProgramHiringPartners } from "@/components/programs/sections/program-hiring-partners";
import { ProgramCurriculum } from "@/components/programs/sections/program-curriculum";
import { ProgramHero } from "@/components/programs/sections/program-hero";
import { ProgramUniversities } from "@/components/programs/sections/program-universities";
import { ProgramWhy } from "@/components/programs/sections/program-why";
import { EnquiryFormSection } from "@/components/shared/enquiry-form-section";
import { bcomPage as page } from "@/content/program-bcom-acca";

export const metadata: Metadata = {
  title: "B.Com + ACCA | ZSkillup",
  description: page.hero.body,
};

export default function BcomAccaPage() {
  return (
    <>
      <ProgramHero content={page.hero} brochureHref={page.brochure} defaultProgram="B.Com + ACCA" />
      <ProgramWhy content={page.why} brochureHref={page.brochure} />
      <ProgramUniversities content={page.universities} />
      <ProgramCurriculum content={page.curriculum} />
      <ProgramAccaLearning id="acca-learning-title" content={page.accaLearning} tone="mint" />
      <ProgramFeatureGrid id="ai-employability-title" content={page.aiEmployability} tone="white" />
      <ProgramWhoFor id="who-for-title" content={page.whoFor} tone="mint" />
      <ProgramCareers id="careers-title" content={page.careers} tone="white" />
      <ProgramHiringPartners id="hiring-partners-title" />
      <ProgramFinalCta id="final-cta-title" content={page.finalCta} brochureHref={page.brochure} />
      <EnquiryFormSection defaultProgram="B.Com + ACCA" hideProgramAndCity />
      <SiteFooter brochureHref={page.brochure} />
    </>
  );
}
