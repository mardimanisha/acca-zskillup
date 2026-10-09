"use client";

import { ArrowRight } from "lucide-react";

import { useEnquiryModal } from "@/components/faqs/enquiry-modal";
import { Button } from "@/components/ui/button";

/** Opens the same advisor enquiry dialog as the floating "Talk to an Advisor" button. */
export function FaqsHelpButton({ label }: { label: string }) {
  const { open } = useEnquiryModal();

  return (
    <Button
      type="button"
      onClick={open}
      className="mt-5 w-full bg-white text-brand-tealDark shadow-none hover:bg-white/90 sm:w-auto"
    >
      {label}
      <ArrowRight aria-hidden="true" />
    </Button>
  );
}
