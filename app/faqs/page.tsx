import type { Metadata } from "next";

import { EnquiryModalProvider } from "@/components/faqs/enquiry-modal";
import { FaqIllustration } from "@/components/faqs/faq-illustration";
import { FaqsExplorer } from "@/components/faqs/faqs-explorer";
import { FaqsHelp } from "@/components/faqs/faqs-help";
import { Eyebrow } from "@/components/fees/fees-explorer";
import { feesSerif } from "@/components/fees/fees-ui";
import { SiteFooter } from "@/components/layout/site-footer";
import { defaultFaqCategoryId, faqCategories, isFaqCategoryId } from "@/data/faqs";
import { cn } from "@/lib/utils";

const hero = {
  eyebrow: "FAQs",
  titleLine1: "Everything You",
  titleLine2: "Need to Know",
  body: "Answers about programs, universities, ACCA, exemptions, online learning, fees and career preparation.",
} as const;

export const metadata: Metadata = {
  title: "FAQs | ZSkillup",
  description: hero.body,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

export default async function FaqsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await searchParams;
  const initialId = isFaqCategoryId(category) ? category : defaultFaqCategoryId;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <section
        aria-labelledby="faqs-hero-title"
        className="relative overflow-hidden bg-gradient-to-r from-[#F1F9F5] via-[#EDF7F2] to-[#E3F4EB]"
      >
        {/* Large pale curve behind the illustration. */}
        <span
          aria-hidden="true"
          className="absolute -right-40 top-[-40%] hidden size-[640px] rounded-full bg-gradient-to-br from-[#E6F5EE] to-[#D3EDE0] md:block lg:right-[-8%]"
        />
        <div className="relative mx-auto flex w-full max-w-[1120px] flex-col px-4 pt-8 sm:px-6 md:min-h-[300px] md:justify-center md:py-12">
          <FaqIllustration className="mx-auto mb-4 h-auto w-full max-w-[220px] md:hidden" />
          <div className="relative z-10">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1
              id="faqs-hero-title"
              className={cn(feesSerif, "mt-5 text-[36px] leading-[1.12] md:text-[44px] xl:text-[52px]")}
            >
              <span className="block text-fp-navy">{hero.titleLine1}</span>
              <span className="block text-fp-accent">{hero.titleLine2}</span>
            </h1>
            <p className="mt-5 max-w-[520px] pb-8 text-base leading-[1.7] text-fp-body md:pb-0">{hero.body}</p>
          </div>
        </div>
        <FaqIllustration className="pointer-events-none absolute bottom-0 right-[4%] hidden h-[86%] w-auto md:block lg:right-[8%]" />
      </section>

      <EnquiryModalProvider>
        <FaqsExplorer initialId={initialId} />
        <FaqsHelp />
      </EnquiryModalProvider>

      <SiteFooter />
    </>
  );
}
