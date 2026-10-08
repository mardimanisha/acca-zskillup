import { existsSync } from "node:fs";
import path from "node:path";

import { LogoCard } from "@/components/home/partners/logo-card";
import { Eyebrow, SectionTitle, container } from "@/components/programs/program-ui";
import { homePartnersContent } from "@/content/home-partners";
import { hiringNetwork } from "@/content/partners";
import { demoHiringNetwork } from "@/content/partners.demo";
import { cn } from "@/lib/utils";

// TEMPORARY: like the homepage, an empty real list falls back to the unconfirmed demo logos.
// Remove the fallback (and content/partners.demo.ts) before launch.
const logos = (hiringNetwork.length > 0 ? hiringNetwork : demoHiringNetwork).filter((logo) =>
  existsSync(path.join(process.cwd(), "public", logo.file)),
);

const hiring = homePartnersContent.tabs.find((tab) => tab.id === "hiring");

/** Hiring network logos, same data as the homepage "Hiring Network" tab. */
export function ProgramHiringPartners({ id }: { id: string }) {
  if (!hiring || logos.length === 0) return null;

  return (
    <section aria-labelledby={id} className="bg-white">
      <div className={cn(container, "py-14 text-center lg:py-20")}>
        <Eyebrow>{hiring.eyebrow}</Eyebrow>
        <SectionTitle id={id}>
          {hiring.titleStart} <span className="text-zs-green">{hiring.titleHighlight}</span>
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-zs-body md:text-[17px]">{hiring.subtext}</p>
        <ul className="mt-10 grid grid-cols-2 gap-4 text-left sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <li key={logo.file}>
              <LogoCard logo={logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
