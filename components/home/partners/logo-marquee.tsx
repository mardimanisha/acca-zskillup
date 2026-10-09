import Image from "next/image";

import type { MarqueeCompany } from "@/content/partners.demo";

const CARD =
  "flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-[#EEF2F1] bg-white px-5 shadow-[0_8px_24px_-12px_rgba(11,26,61,0.12)] md:h-28 md:w-44";

function MarqueeCard({ company }: { company: MarqueeCompany }) {
  return (
    <div className={CARD}>
      {company.file ? (
        <div className="flex w-full flex-col items-center gap-1.5">
          <Image
            src={company.file}
            alt={`${company.name} logo`}
            width={160}
            height={48}
            sizes="160px"
            // The track extends past the viewport; lazy loading would leave off-screen cards blank until they scroll in.
            loading="eager"
            // Fetched at page load but behind the hero's own images, so they are ready before the section is reached.
            fetchPriority="low"
            unoptimized={company.file.endsWith(".svg")}
            // Fixed height + full width with object-contain: SVGs that only have a viewBox (e.g. Protiviti) have no intrinsic width and collapsed to a blank card with w-auto.
            style={company.scale ? { transform: `scale(${company.scale})` } : undefined}
            className="h-9 w-full max-w-[112px] object-contain md:h-10 md:max-w-[128px]"
          />
          {company.showName && (
            <span className="text-xs font-semibold leading-tight text-brand-navy">{company.name}</span>
          )}
        </div>
      ) : (
        <span className="text-center text-base font-bold leading-tight tracking-tight text-brand-navy md:text-lg">
          {company.name}
        </span>
      )}
    </div>
  );
}

function MarqueeRow({ companies, reverse, duration }: { companies: MarqueeCompany[]; reverse: boolean; duration: number }) {
  // Two copies side by side; the second is hidden from assistive tech.
  const copies = [false, true];
  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)] motion-reduce:overflow-x-auto">
      <ul
        className="flex w-max motion-reduce:animate-none group-hover:[animation-play-state:paused]"
        style={{
          animation: `logo-marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {copies.map((hidden) =>
          companies.map((company) => (
            <li key={`${hidden}-${company.name}`} aria-hidden={hidden || undefined} className="pr-4">
              <MarqueeCard company={company} />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

export function LogoMarquee({ rows }: { rows: MarqueeCompany[][] }) {
  return (
    <div className="flex flex-col gap-4">
      {rows.map((companies, index) => (
        <MarqueeRow key={index} companies={companies} reverse={index % 2 === 1} duration={companies.length * 3.5} />
      ))}
    </div>
  );
}
