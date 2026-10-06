import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { BbaAccaLearning } from "@/components/programs/bba/bba-acca-learning";
import { BbaComparison } from "@/components/programs/bba/bba-comparison";
import { BbaCurriculum } from "@/components/programs/bba/bba-curriculum";
import { BbaFinalCta } from "@/components/programs/bba/bba-final-cta";
import { BbaHero } from "@/components/programs/bba/bba-hero";
import { BbaUniversities } from "@/components/programs/bba/bba-universities";
import { BbaCareers, BbaWhoFor } from "@/components/programs/bba/bba-who-careers";
import { BbaWhy } from "@/components/programs/bba/bba-why";
import { EnquiryFormSection } from "@/components/shared/enquiry-form-section";
import { bbaHero } from "@/content/program-bba-acca";

export const metadata: Metadata = {
  title: "BBA + ACCA | ZSkillup",
  description: bbaHero.body,
};

export default function BbaAccaPage() {
  return (
    <>
      <BbaHero />
      <BbaWhy />
      <BbaUniversities />
      <BbaCurriculum />
      <BbaAccaLearning />
      <BbaComparison />
      <BbaWhoFor />
      <BbaCareers />
      <BbaFinalCta />
      <EnquiryFormSection defaultProgram="BBA + ACCA" />
      <SiteFooter />
    </>
  );
}
