"use client";

import { Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/content/home-faqs";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type FaqsAccordionProps = {
  faqs: readonly Faq[];
};

export function FaqsAccordion({ faqs }: FaqsAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`faq-${index}`}
          className="rounded-xl border border-[#E6F0EE] bg-white px-4 shadow-sm transition-[border-color,box-shadow] duration-200 last:border-b data-[state=open]:border-brand-teal data-[state=open]:shadow-md md:px-5"
        >
          <AccordionTrigger
            className="group items-center gap-4 py-4 hover:no-underline"
            indicator={
              <span
                aria-hidden="true"
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#F1F5F4] text-brand-body transition-colors duration-200 group-data-[state=open]:bg-brand-teal group-data-[state=open]:text-white"
              >
                <Plus className="size-4 group-data-[state=open]:hidden" />
                <Minus className="hidden size-4 group-data-[state=open]:block" />
              </span>
            }
          >
            <span aria-hidden="true" className={cn(typography.faqNumber, "w-6 shrink-0")}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={cn(typography.faqQuestion, "flex-1")}>{faq.question}</span>
          </AccordionTrigger>
          <AccordionContent className={cn(typography.body, "pb-5 pl-0 leading-relaxed md:pl-10")}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
