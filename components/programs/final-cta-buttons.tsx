"use client";

import { ArrowRight } from "lucide-react";

import { useEnquiryModal } from "@/components/faqs/enquiry-modal";
import { programButtonClass } from "@/components/programs/program-ui";
import { programCtas } from "@/content/program-shared";

/** Final-CTA button pair; both open the same enquiry modal as the floating actions. */
export function FinalCtaButtons() {
  const { open, openBrochure } = useEnquiryModal();

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={programButtonClass("white", "h-12 justify-between gap-6 bg-white px-6 text-[15px]")}
      >
        {programCtas.advisor.label}
        <ArrowRight aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={openBrochure}
        className={programButtonClass("outlineWhite", "h-12 border-white/70 px-6 text-[15px]")}
      >
        {programCtas.brochure.label}
      </button>
    </>
  );
}
