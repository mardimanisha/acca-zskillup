import Image from "next/image";

import { serif } from "@/components/universities/university-ui";
import type { HiringNetworkCompany, HiringNetworkGroup } from "@/data/hiringNetwork";
import { cn } from "@/lib/utils";

// Minimum cards per copy so a short category (e.g. Big 4) still fills a wide screen.
const MIN_CARDS = 10;

function LogoCard({ company }: { company: HiringNetworkCompany }) {
  return (
    <div className="flex h-24 w-40 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border border-cr-line bg-white px-5 shadow-[0_8px_24px_-12px_rgba(11,26,61,0.12)] md:h-28 md:w-44">
      {company.logo ? (
        <>
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={160}
            height={48}
            unoptimized
            loading="eager"
            className="h-9 w-full object-contain md:h-11"
          />
          {company.showName && <span className="text-xs font-semibold leading-tight text-cr-navy">{company.name}</span>}
        </>
      ) : (
        <span className="text-center text-base font-bold leading-tight text-cr-navy md:text-lg">{company.name}</span>
      )}
    </div>
  );
}

function LogoStrip({ companies, leftToRight }: { companies: HiringNetworkCompany[]; leftToRight: boolean }) {
  const repeats = Math.ceil(MIN_CARDS / companies.length);
  const copy = Array.from({ length: repeats }, (_, r) => companies.map((company) => ({ company, r }))).flat();
  const duration = copy.length * 3.5;

  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)] motion-reduce:overflow-x-auto">
      <ul
        className="flex w-max motion-reduce:animate-none group-hover:[animation-play-state:paused]"
        style={{
          animation: `logo-marquee ${duration}s linear infinite`,
          animationDirection: leftToRight ? "reverse" : "normal",
        }}
      >
        {[false, true].map((hidden) =>
          copy.map(({ company, r }) => (
            <li key={`${hidden}-${r}-${company.name}`} aria-hidden={hidden || r > 0 || undefined} className="pr-4">
              <LogoCard company={company} />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

/** One category: centered headline, then a moving logo strip. */
export function HiringNetworkRow({ group, index }: { group: HiringNetworkGroup; index: number }) {
  return (
    <div className="text-center">
      <h3 className={cn(serif, "text-[24px] font-bold tracking-[-0.02em] text-cr-navy sm:text-[30px]")}>{group.category}</h3>
      <div className="mt-4">
        <LogoStrip companies={group.companies} leftToRight={index % 2 === 0} />
      </div>
    </div>
  );
}
