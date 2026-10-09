"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import {
  BookOpen,
  ChevronDown,
  FileText,
  GraduationCap,
  Info,
  Laptop,
  ReceiptIndianRupee,
  type LucideIcon,
} from "lucide-react";

import { useEnquiryModal } from "@/components/faqs/enquiry-modal";
import { feesSerif } from "@/components/fees/fees-ui";
import { container } from "@/components/programs/program-ui";
import { faqCategories, type FaqCategoryId, type FaqIconName, type FaqItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

const icons: Record<FaqIconName, LucideIcon> = {
  info: Info,
  graduationCap: GraduationCap,
  fileText: FileText,
  bookOpen: BookOpen,
  laptop: Laptop,
  receipt: ReceiptIndianRupee,
};

const linkClass =
  "font-semibold text-fp-green underline underline-offset-2 hover:text-fp-greenHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-green/40";

/** Renders the answer text, turning each configured phrase into a link / enquiry trigger. */
function Answer({ item, onEnquiry }: { item: FaqItem; onEnquiry: () => void }) {
  let nodes: ReactNode[] = [item.a];
  item.links?.forEach((link) => {
    nodes = nodes.flatMap((node, index): ReactNode[] => {
      if (typeof node !== "string") return [node];
      const at = node.indexOf(link.text);
      if (at === -1) return [node];
      const key = `${link.text}-${index}`;
      const anchor =
        "href" in link ? (
          <Link key={key} href={link.href} className={linkClass}>
            {link.text}
          </Link>
        ) : (
          <button key={key} type="button" onClick={onEnquiry} className={cn(linkClass, "cursor-pointer")}>
            {link.text}
          </button>
        );
      return [node.slice(0, at), anchor, node.slice(at + link.text.length)];
    });
  });
  return <>{nodes}</>;
}

export function FaqsExplorer({ initialId }: { initialId: FaqCategoryId }) {
  const [activeId, setActiveId] = useState<FaqCategoryId>(initialId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const uid = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { open: openEnquiry } = useEnquiryModal();

  // Deep links (?category=) can land on a tab that sits off-screen in the scrolling row.
  useEffect(() => {
    const tab = tabRefs.current[faqCategories.findIndex((category) => category.id === initialId)];
    const row = tab?.parentElement;
    if (tab && row && row.scrollWidth > row.clientWidth) {
      row.scrollLeft = tab.offsetLeft - (row.clientWidth - tab.offsetWidth) / 2;
    }
  }, [initialId]);

  const active = faqCategories.find((category) => category.id === activeId) ?? faqCategories[0];
  const ActiveIcon = icons[active.icon];
  const tabId = (id: string) => `${uid}-tab-${id}`;
  const panelId = `${uid}-panel`;

  function select(id: FaqCategoryId) {
    setActiveId(id);
    setOpenIndex(null);
    const url = new URL(window.location.href);
    url.searchParams.set("category", id);
    window.history.replaceState(null, "", url);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = faqCategories.length - 1;
    const next =
      event.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : event.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    select(faqCategories[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section aria-labelledby={`${uid}-heading`} className="bg-white">
      <div className={cn(container, "pb-12 pt-8 sm:pt-10 lg:pb-16")}>
        <div className="mx-auto max-w-[1120px]">
          <div
            role="tablist"
            aria-label="FAQ categories"
            className="-mx-4 flex snap-x snap-mandatory overflow-x-auto border-y border-fp-line bg-white p-1 [scrollbar-width:none] sm:mx-0 sm:rounded-xl sm:border lg:flex-wrap lg:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {faqCategories.map((category, index) => {
              const Icon = icons[category.icon];
              const selected = category.id === activeId;
              const showDivider = index > 0 && !selected && faqCategories[index - 1].id !== activeId;
              return (
                <button
                  key={category.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={tabId(category.id)}
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(category.id)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={cn(
                    "gradient-fade relative flex min-w-[210px] shrink-0 snap-start items-center gap-3 rounded-lg px-4 py-3.5 text-left text-[13px] font-semibold leading-snug transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-fp-green/40 lg:min-w-[200px] lg:flex-1 lg:gap-2.5 lg:px-3",
                    selected ? "is-on text-white" : "text-fp-navy hover:bg-fp-mintSoft",
                    showDivider && "before:absolute before:inset-y-3 before:left-0 before:w-px before:bg-fp-line",
                  )}
                >
                  <Icon aria-hidden="true" className="size-5 shrink-0" strokeWidth={1.6} />
                  <span>
                    {category.label} ({category.items.length})
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId(active.id)}
            className="mt-6 rounded-2xl border border-fp-line/70 bg-white p-4 shadow-[0_14px_40px_-20px_rgba(11,31,77,0.18)] sm:p-6 lg:p-8"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <span
                aria-hidden="true"
                className="flex size-14 shrink-0 items-center justify-center rounded-full bg-fp-mint text-fp-green sm:size-16 [&_svg]:size-6 sm:[&_svg]:size-7"
              >
                <ActiveIcon strokeWidth={1.6} />
              </span>
              <h2
                id={`${uid}-heading`}
                className={cn(feesSerif, "text-[24px] leading-[1.2] text-fp-navy sm:text-[30px]")}
              >
                {active.label}
              </h2>
            </div>

            <ul className="mt-6 space-y-3">
              {active.items.map((item, index) => {
                const isOpen = openIndex === index;
                const buttonId = `${uid}-${active.id}-q${index}`;
                const answerId = `${uid}-${active.id}-a${index}`;
                return (
                  <li
                    key={item.q}
                    className={cn(
                      "rounded-[10px] border bg-white transition-colors duration-300",
                      isOpen ? "border-fp-green/40" : "border-fp-line",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center gap-3 rounded-[10px] px-4 py-3.5 text-left focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-fp-green/40 sm:gap-4 sm:px-5 sm:py-4"
                      >
                        <span
                          aria-hidden="true"
                          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-fp-mint text-xs font-bold tabular-nums text-fp-accent"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-[15px] font-medium leading-snug text-fp-navy">{item.q}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "size-5 shrink-0 transition-transform duration-200",
                            isOpen ? "rotate-180 text-fp-green" : "text-fp-body",
                          )}
                        />
                      </button>
                    </h3>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      inert={!isOpen}
                      className="min-h-0 overflow-hidden px-4 sm:px-5"
                    >
                      <div className="pb-5">
                      <p className="pl-11 text-[15px] leading-[1.7] text-fp-body sm:pl-12">
                        <Answer item={item} onEnquiry={openEnquiry} />
                      </p>
                      {item.bullets && (
                        <ul className="mt-2 list-disc space-y-1 pl-16 text-[15px] leading-[1.7] text-fp-body sm:pl-[4.25rem]">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      </div>
                    </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
