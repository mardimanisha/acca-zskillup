"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, type LucideIcon } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { PartnersTab, PartnersTabIcon } from "@/content/home-partners";
import type { PartnerLogo } from "@/content/partners";
import type { MarqueeCompany } from "@/content/partners.demo";

import { LogoCard } from "./logo-card";
import { LogoMarquee } from "./logo-marquee";

export type PartnersTabData = Omit<PartnersTab, "logos"> & {
  logos: Pick<PartnerLogo, "name" | "file">[];
  /** When set, shown as scrolling rows instead of the logo grid. */
  marquee?: MarqueeCompany[][];
};

const tabIcons: Record<PartnersTabIcon, LucideIcon> = {
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
};

function TabIntro({ tab }: { tab: PartnersTabData }) {
  return (
    // Re-keyed per tab so the copy fades in on switch.
    <div key={tab.id} className="animate-in fade-in duration-200">
      <SectionHeader
        id="partners-heading"
        variant="line"
        align="left"
        eyebrow={tab.eyebrow}
        titleStart={tab.titleStart}
        titleHighlight={tab.titleHighlight}
        subtext={tab.subtext}
      />
      {tab.cta && (
        <Button asChild variant="brand" className="mt-8 w-full md:w-auto">
          <Link href={tab.cta.href}>
            {tab.cta.label}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      )}
    </div>
  );
}

function LogoGrid({ logos, marquee }: Pick<PartnersTabData, "logos" | "marquee">) {
  if (marquee) return <LogoMarquee rows={marquee} />;
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {logos.map((logo) => (
        <li key={logo.file}>
          <LogoCard logo={logo} />
        </li>
      ))}
    </ul>
  );
}

const layoutClass = "grid grid-cols-1 items-start gap-12 lg:grid-cols-12";

export function PartnersTabs({ tabs }: { tabs: PartnersTabData[] }) {
  const [active, setActive] = useState<string>(tabs[0]?.id ?? "universities");
  const activeTab = tabs.find((tab) => tab.id === active) ?? tabs[0];

  if (!activeTab) return null;

  // A single tab with logos: no tab list, show its content directly.
  if (tabs.length === 1) {
    return (
      <div className={layoutClass}>
        <div className="lg:col-span-4">
          <TabIntro tab={activeTab} />
        </div>
        <div className="lg:col-span-8">
          <LogoGrid logos={activeTab.logos} marquee={activeTab.marquee} />
        </div>
      </div>
    );
  }

  return (
    <Tabs value={activeTab.id} onValueChange={setActive} className={layoutClass}>
      <div className="lg:col-span-4">
        <TabIntro tab={activeTab} />
      </div>

      <div className="min-w-0 lg:col-span-8">
        <TabsList className="-mx-4 mb-8 flex w-auto flex-nowrap justify-start gap-3 overflow-x-auto bg-transparent p-0 px-4 py-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const Icon = tabIcons[tab.icon];
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="h-14 shrink-0 gap-3 rounded-full border-[1.5px] border-[#E6EBEA] bg-white px-7 text-base font-medium text-brand-body data-[state=inactive]:hover:border-brand-teal/50 data-[state=active]:border-brand-teal data-[state=active]:bg-[#E3F4F1] data-[state=active]:text-brand-navy"
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <LogoGrid logos={tab.logos} marquee={tab.marquee} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
