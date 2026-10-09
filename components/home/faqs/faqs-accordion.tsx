"use client";

import { Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Faq, FaqCategory } from "@/content/home-faqs";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type FaqsAccordionProps = {
  categories: readonly FaqCategory[];
};

export function FaqsAccordion({ categories }: FaqsAccordionProps) {
  const total = categories.reduce((sum, category) => sum + category.faqs.length, 0);

  return (
    <Tabs defaultValue={categories[0].id} className="gap-6">
      <TabsList className="h-auto w-full flex-wrap gap-1 rounded-3xl bg-transparent p-0 lg:flex-nowrap lg:rounded-full">
        {categories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="flex-1 whitespace-normal rounded-full px-4 py-2.5 text-center text-sm font-semibold text-brand-body data-[state=active]:bg-brand-teal data-[state=active]:text-white lg:whitespace-nowrap lg:px-4"
          >
            {category.label} ({category.faqs.length})
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mx-auto w-full max-w-3xl">
          {category.faqs.length > 0 ? (
            <FaqList faqs={category.faqs} total={total} />
          ) : (
            <p className={cn(typography.body, "py-8 text-center")}>
              Questions for this topic are coming soon.
            </p>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}

function FaqList({ faqs, total }: { faqs: readonly Faq[]; total: number }) {
  return (
    <>
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
              <p>{faq.answer}</p>
              {faq.bullets && (
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {faq.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
        <p className="text-sm text-brand-body">
          Showing {faqs.length} of {faqs.length} questions
          <span aria-hidden="true" className="mx-2 text-[#C9D6D3]">
            •
          </span>
          {total} total
        </p>
      </div>
    </>
  );
}
