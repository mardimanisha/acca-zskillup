"use client";

import { ArrowRight, MessageSquareText } from "lucide-react";

import { useEnquiryModal } from "@/components/faqs/enquiry-modal";
import { feesSerif } from "@/components/fees/fees-ui";
import { container } from "@/components/programs/program-ui";
import { enquiryFormContent } from "@/content/program-shared";
import { cn } from "@/lib/utils";

export function FaqsHelp() {
  const { open } = useEnquiryModal();

  return (
    <section aria-labelledby="faqs-help-title" className="bg-white pb-10 md:pb-14">
      <div className={container}>
        <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-2xl bg-gradient-to-r from-brand-tealLight to-brand-tealDark px-6 py-8 sm:px-10 sm:py-10">
          {/* Decorative curves. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 320 200"
            className="pointer-events-none absolute -bottom-10 -right-10 hidden h-[260px] w-[420px] text-white/10 sm:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="320" cy="200" r="70" />
            <circle cx="320" cy="200" r="110" />
            <circle cx="320" cy="200" r="150" />
            <circle cx="320" cy="200" r="190" />
          </svg>

          <div className="relative flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-7">
            <span
              aria-hidden="true"
              className="flex size-14 shrink-0 items-center justify-center rounded-full bg-fp-mint text-fp-green"
            >
              <MessageSquareText className="size-6" strokeWidth={1.75} />
            </span>

            <div className="flex-1">
              <h2 id="faqs-help-title" className={cn(feesSerif, "text-[26px] leading-[1.2] text-white sm:text-[32px]")}>
                {enquiryFormContent.title}
              </h2>
              <p className="mt-2 max-w-[520px] text-[15px] leading-[1.65] text-white/80">
                {enquiryFormContent.subtitle}
              </p>
              <button
                type="button"
                onClick={open}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-white px-6 text-[15px] font-semibold text-brand-teal transition-colors hover:bg-fp-mint focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-fp-green sm:w-auto [&_svg]:size-4"
              >
                {enquiryFormContent.submit}
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
