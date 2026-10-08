import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import {
  ProgramCareers,
  ProgramComparison,
  ProgramFinalCta,
  ProgramAccaLearning,
  ProgramWhoFor,
} from "@/components/programs/sections/program-blocks";
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
      <ProgramHero content={page.hero} brochureHref={page.brochure} />
      <ProgramWhy content={page.why} brochureHref={page.brochure} />
      <ProgramUniversities content={page.universities} />
      <ProgramCurriculum content={page.curriculum} />
      <ProgramAccaLearning id="acca-learning-title" content={page.accaLearning} tone="mint" />
      <ProgramComparison id="compare-title" content={page.comparison} tone="white" />
      <ProgramWhoFor id="who-for-title" content={page.whoFor} tone="mint" />
      <ProgramCareers id="careers-title" content={page.careers} tone="white" />
      <ProgramFinalCta id="final-cta-title" content={page.finalCta} brochureHref={page.brochure} />
      <EnquiryFormSection defaultProgram="BBA + ACCA" />
      <SiteFooter brochureHref={page.brochure} />
    </>
  );
}
