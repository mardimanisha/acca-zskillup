import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import {
  ProgramFeatureGrid,
  ProgramFinalCta,
  ProgramLevels,
  ProgramWhoFor,
} from "@/components/programs/sections/program-blocks";
import { ProgramHiringPartners } from "@/components/programs/sections/program-hiring-partners";
import { ProgramHero } from "@/components/programs/sections/program-hero";
import { EnquiryFormSection } from "@/components/shared/enquiry-form-section";
import { accaOnlyPage as page } from "@/content/program-acca-only";

export const metadata: Metadata = {
  title: "ACCA Only | ZSkillup",
  description: page.hero.body,
};

export default function AccaOnlyPage() {
  return (
    <>
      <ProgramHero content={page.hero} brochureHref={page.brochure} defaultProgram="ACCA Only" />
      <ProgramWhoFor id="who-for-title" content={page.whoFor} tone="mint" />
      <ProgramLevels id="prepare-for-title" content={page.prepareFor} tone="white" />
      <ProgramLevels id="beyond-acca-title" content={page.beyond} tone="mint" />
      <ProgramFeatureGrid id="learn-your-way-title" content={page.learnYourWay} tone="white" />
      <ProgramWhoFor id="current-students-title" content={page.currentStudents} tone="mint" />
      <ProgramHiringPartners id="hiring-partners-title" />
      <ProgramFinalCta id="final-cta-title" content={page.finalCta} brochureHref={page.brochure} />
      <EnquiryFormSection defaultProgram="ACCA Only" hideProgramAndCity />
      <SiteFooter brochureHref={page.brochure} />
    </>
  );
}
