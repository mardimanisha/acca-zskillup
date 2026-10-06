import { AdvisorButton, BrochureButton, container } from "@/components/programs/program-ui";
import { bbaFinalCta } from "@/content/program-bba-acca";
import { cn } from "@/lib/utils";

export function BbaFinalCta() {
  return (
    <section aria-labelledby="bba-final-cta-title" className="bg-zs-greenDark text-white">
      <div className={cn(container, "flex flex-col items-center py-16 text-center lg:py-20")}>
        <h2
          id="bba-final-cta-title"
          className="max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] md:text-[40px]"
        >
          {bbaFinalCta.title}
        </h2>
        <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <AdvisorButton variant="white" arrow />
          <BrochureButton variant="outlineWhite" />
        </div>
      </div>
    </section>
  );
}
