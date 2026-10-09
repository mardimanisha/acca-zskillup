import type { Metadata } from "next";

import { FeesExplorer } from "@/components/fees/fees-explorer";
import { FeesCharges, FeesHelp, FeesIncluded } from "@/components/fees/fees-sections";
import { SiteFooter } from "@/components/layout/site-footer";
import { EnquiryFormSection } from "@/components/shared/enquiry-form-section";
import { feesCopy } from "@/content/fees";
import { defaultProgramFeeId, isProgramFeeId } from "@/data/fees";

export const metadata: Metadata = {
  title: "Fees | ZSkillup",
  description: feesCopy.hero.body,
};

export default async function FeesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { program } = await searchParams;
  const initialId = isProgramFeeId(program) ? program : defaultProgramFeeId;

  return (
    <>
      <FeesExplorer initialId={initialId} />
      <FeesIncluded />
      <FeesCharges />
      <FeesHelp />
      <EnquiryFormSection />
      <SiteFooter />
    </>
  );
}
