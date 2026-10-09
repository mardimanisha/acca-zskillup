import { existsSync } from "node:fs";
import path from "node:path";

import { homePartnersContent } from "@/content/home-partners";
import type { PartnerLogo } from "@/content/partners";
import { demoHiringMarquee, demoHiringNetwork, demoUniversityPartners } from "@/content/partners.demo";

import { PartnersTabs, type PartnersTabData } from "./partners-tabs";

// Only logos the fetch script actually saved are shown; a failed download means no card.
function hasLocalFile(logo: PartnerLogo): boolean {
  return existsSync(path.join(process.cwd(), "public", logo.file));
}

const demoLogos = {
  universities: demoUniversityPartners,
  hiring: demoHiringNetwork,
} as const;

// TEMPORARY: an empty list falls back to demo data in every environment, production included.
// Remove this fallback (and content/partners.demo.ts) before launch.
function logosFor(id: keyof typeof demoLogos, logos: readonly PartnerLogo[]): readonly PartnerLogo[] {
  if (logos.length > 0) return logos;
  return demoLogos[id];
}

function marqueeRows() {
  return demoHiringMarquee.map((row) => row.filter((company) => !company.file || hasLocalFile({ file: company.file } as PartnerLogo)));
}

export function PartnersSection() {
  const tabs: PartnersTabData[] = homePartnersContent.tabs
    .map((tab) => ({
      id: tab.id,
      label: tab.label,
      icon: tab.icon,
      eyebrow: tab.eyebrow,
      titleStart: tab.titleStart,
      titleHighlight: tab.titleHighlight,
      subtext: tab.subtext,
      cta: tab.cta,
      // TEMPORARY: with no confirmed hiring partners, the demo marquee rows stand in.
      marquee: tab.id === "hiring" && tab.logos.length === 0 ? marqueeRows() : undefined,
      logos: logosFor(tab.id, tab.logos).filter(hasLocalFile).map(({ name, file }) => ({ name, file })),
    }))
    .filter((tab) => tab.logos.length > 0 || tab.marquee);

  if (tabs.length === 0) return null;

  return (
    <section aria-labelledby="partners-heading" className="relative overflow-hidden bg-white section-y">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-56 size-[560px] rounded-full bg-panel-from" />
        <div className="absolute -right-10 -top-24 size-[300px] rounded-full bg-panel-to/70" />
        <div className="absolute -bottom-64 -left-48 size-[560px] rounded-full bg-panel-from" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartnersTabs tabs={tabs} />
      </div>
    </section>
  );
}
