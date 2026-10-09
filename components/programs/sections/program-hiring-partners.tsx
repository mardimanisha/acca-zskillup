import { existsSync } from "node:fs";
import path from "node:path";

import { LogoMarquee } from "@/components/home/partners/logo-marquee";
import { Eyebrow, SectionTitle, container } from "@/components/programs/program-ui";
import { homePartnersContent } from "@/content/home-partners";
import { demoHiringMarquee } from "@/content/partners.demo";
import { cn } from "@/lib/utils";

// TEMPORARY: like the homepage, the unconfirmed demo marquee rows stand in for the hiring network.
// Remove the fallback (and content/partners.demo.ts) before launch.
const rows = demoHiringMarquee.map((row) =>
  row.filter((company) => !company.file || existsSync(path.join(process.cwd(), "public", company.file))),
);

const hiring = homePartnersContent.tabs.find((tab) => tab.id === "hiring");

/** Hiring network logos, same data as the homepage "Hiring Network" tab. */
export function ProgramHiringPartners({ id }: { id: string }) {
  if (!hiring || rows.every((row) => row.length === 0)) return null;

  return (
    <section aria-labelledby={id} className="bg-white">
      <div className={cn(container, "py-10 text-center lg:py-12")}>
        <Eyebrow>{hiring.eyebrow}</Eyebrow>
        <SectionTitle id={id}>
          {hiring.titleStart} <span className="text-zs-green">{hiring.titleHighlight}</span>
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-zs-body md:text-[17px]">{hiring.subtext}</p>
        <div className="mt-10 text-left">
          <LogoMarquee rows={rows} />
        </div>
      </div>
    </section>
  );
}
