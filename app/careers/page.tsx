import type { Metadata } from "next";

import {
  CareersBlobDefs,
  CareersCta,
  CareersHero,
  CareersHiringNetwork,
  CareersIndustries,
  CareersJourney,
  CareersReadiness,
  CareersRoles,
} from "@/components/careers/careers-sections";
import { SiteFooter } from "@/components/layout/site-footer";
import { EnquiryFormSection } from "@/components/shared/enquiry-form-section";
import { careersCopy } from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers | ZSkillup",
  description: careersCopy.hero.body,
};

export default function CareersPage() {
  return (
    <>
      <CareersBlobDefs />
      <CareersHero />
      <CareersIndustries />
      <CareersRoles />
      <CareersJourney />
      <CareersReadiness />
      <CareersHiringNetwork />
      <CareersCta />
      <EnquiryFormSection />
      <SiteFooter />
    </>
  );
}
