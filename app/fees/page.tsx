import type { Metadata } from "next";

import { FeesExplorer } from "@/components/fees/fees-explorer";
import { FeesCharges, FeesHelp, FeesIncluded } from "@/components/fees/fees-sections";
import { SiteFooter } from "@/components/layout/site-footer";
import { EnquiryFormSection } from "@/components/shared/enquiry-form-section";
import { feesCopy } from "@/content/fees";

export const metadata: Metadata = {
  title: "Fees | ZSkillup",
  description: feesCopy.hero.body,
};

export default function FeesPage() {
  return (
    <>
      <FeesExplorer />
      <FeesIncluded />
      <FeesCharges />
      <FeesHelp />
      <EnquiryFormSection />
      <SiteFooter />
    </>
  );
}
