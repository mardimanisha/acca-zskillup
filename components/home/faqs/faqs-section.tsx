import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FaqsAccordion } from "@/components/home/faqs/faqs-accordion";
import { SectionEyebrow, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { homeFaqsContent } from "@/content/home-faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqsContent.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function FaqsSection() {
  const { eyebrow, heading, subtext, cta, faqs } = homeFaqsContent;

  return (
    <section aria-labelledby="faqs-heading" className="bg-[#F5FBFA] py-12 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionEyebrow eyebrow={eyebrow} variant="line-left" className="mb-6" />

        <SectionHeader
          id="faqs-heading"
          align="center"
          titleStart={heading.navy}
          titleHighlight={heading.teal}
          subtext={subtext}
          className="mb-10 max-w-3xl items-start text-left md:mx-auto md:items-center md:text-center"
          subtextClassName="mt-3 xl:mt-3"
        />

        <div className="mx-auto max-w-3xl">
          <FaqsAccordion faqs={faqs} />

          <div className="mt-8 flex justify-center">
            <Button asChild variant="brandOutlineSm" className="w-full md:w-auto">
              <Link href={cta.href}>
                {cta.label}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
