"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";

import { container } from "@/components/programs/program-ui";
import type { UniversitiesContent } from "@/content/program-types";
import { cn } from "@/lib/utils";

// Values sampled from the University Partners design image.
const arrowClass =
  "absolute top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zs-navy shadow-[0_6px_18px_-6px_rgba(0,0,0,0.4)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white/60 disabled:pointer-events-none disabled:opacity-40 lg:flex";

export function ProgramUniversities({ content }: { content: UniversitiesContent }) {
  const { eyebrow, title, body, viewAll, exploreLabel, a11y, universities } = content;
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: true });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : 1;
    setActive(Math.min(universities.length - 1, Math.round(el.scrollLeft / step)));
    setEdges({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  }, [universities.length]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  function scrollToIndex(i: number) {
    const el = trackRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }

  function scrollBy(dir: 1 | -1) {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (el && card) el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  }

  return (
    <section
      aria-labelledby="program-universities-title"
      className="relative overflow-hidden bg-zs-greenDark text-white"
    >
      {/* Soft lighting so the band isn't a flat fill, as in the design. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_15%_0%,rgba(255,255,255,0.06),transparent_70%),radial-gradient(ellipse_50%_70%_at_90%_100%,rgba(0,0,0,0.18),transparent_70%)]"
      />

      <div className={cn(container, "relative py-14 lg:py-16")}>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.04em] text-white">{eyebrow}</p>
            <h2
              id="program-universities-title"
              className="mt-2 text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] md:text-4xl xl:text-[40px]"
            >
              {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/85 md:text-[17px]">{body}</p>
          </div>
          <Link
            href={viewAll.href}
            className="inline-flex h-12 shrink-0 items-center gap-2.5 self-start rounded-full border-[1.5px] border-white/80 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white/60"
          >
            {viewAll.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="relative mt-8">
          <button
            type="button"
            aria-label={a11y.prev}
            onClick={() => scrollBy(-1)}
            disabled={edges.start}
            className={cn(arrowClass, "-left-12 xl:-left-14")}
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>

          <ul
            ref={trackRef}
            onScroll={update}
            className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:scroll-px-6 lg:scroll-px-0 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {universities.map((uni) => (
              <li
                key={uni.slug}
                className="flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-xl bg-white text-zs-navy shadow-[0_16px_40px_-18px_rgba(0,0,0,0.55)] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
              >
                <div className="relative aspect-[2.05/1]">
                  <Image
                    src={uni.campus}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4 xl:px-6">
                  <div className="flex h-14 items-center">
                    <Image
                      src={uni.logo}
                      alt={uni.name}
                      width={600}
                      height={160}
                      className="h-auto max-h-12 w-auto max-w-[85%] object-contain object-left"
                    />
                  </div>
                  <ul className="mt-3 flex w-fit items-center rounded-md bg-[#F1F4F7] px-2 py-1 text-xs font-semibold text-[#5B6478]">
                    {uni.tags.map((tag, i) => (
                      <li key={tag} className={cn("px-1.5", i > 0 && "border-l border-[#D3D9E2]")}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 space-y-2.5">
                    {uni.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-[#6B7186]">
                        <Check aria-hidden="true" className="size-4 shrink-0 text-zs-green" strokeWidth={2.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/universities/${uni.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[15px] font-bold text-zs-green transition-colors hover:text-zs-greenHover"
                  >
                    {exploreLabel}
                    <ArrowRight aria-hidden="true" className="size-4" />
                    <span className="sr-only">: {uni.name}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={a11y.next}
            onClick={() => scrollBy(1)}
            disabled={edges.end}
            className={cn(arrowClass, "-right-12 xl:-right-14")}
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {universities.map((uni, i) => (
            <button
              key={uni.slug}
              type="button"
              aria-label={`${a11y.goTo}: ${uni.name}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                i === active ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
