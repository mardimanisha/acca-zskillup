"use client";

import { Trophy } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { FacultyMemberContent } from "@/content/home-faculty";
import { cn } from "@/lib/utils";

const accentStyles = {
  purple: {
    bar: "bg-[#6B2FA0]",
    creds: "text-[#6B2FA0]",
    badge: "bg-[#F3EAFB] text-[#5B2A86]",
    trophy: "text-[#6B2FA0]",
  },
  orange: {
    bar: "bg-[#F59E0B]",
    creds: "text-accent-teal-icon",
    badge: "bg-[#E6F6F1] text-[#0B6B57]",
    trophy: "text-brand-teal",
  },
} as const;

function initials(name: string) {
  return name
    .replace(/^Prof\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function FacultyCard({ member, hidden }: { member: FacultyMemberContent; hidden?: boolean }) {
  const accent = accentStyles[member.accent];
  const measureRef = useRef<HTMLParagraphElement>(null);
  const [truncated, setTruncated] = useState(false);

  // A bio longer than 4 lines shows 3 lines plus a "View more" line; measured on an invisible 4-line clone.
  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const check = () => setTruncated(el.scrollHeight > el.clientHeight + 1);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [member.experience]);

  const portrait = member.image ? (
    <Image
      src={member.image.src}
      alt={member.image.alt}
      width={member.image.width}
      height={member.image.height}
      sizes="260px"
      // The track extends past the viewport; lazy loading would leave off-screen cards blank.
      loading="eager"
      className="h-full w-full object-cover object-top"
    />
  ) : (
    <div
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center text-5xl font-extrabold text-brand-navy/25"
    >
      {initials(member.name)}
    </div>
  );

  return (
    <Dialog>
      <article className="flex h-full flex-col rounded-2xl border border-[#E6EDF2] bg-white p-3 shadow-[0_10px_30px_-18px_rgba(11,26,61,0.22)]">
        <DialogTrigger asChild>
          <button
            type="button"
            tabIndex={hidden ? -1 : undefined}
            aria-label={`View profile of ${member.name}`}
            className="relative block aspect-[4/4.2] w-full cursor-pointer overflow-hidden rounded-xl bg-[#F1F4F8] focus-visible:ring-2 focus-visible:ring-brand-teal focus:outline-hidden"
          >
            {portrait}
            <span className={cn("absolute inset-x-0 bottom-0 h-1", accent.bar)} />
          </button>
        </DialogTrigger>

        <div className="flex flex-1 flex-col px-1 pt-4">
          <h3 className="text-base font-extrabold text-brand-navy">
            <DialogTrigger asChild>
              <button
                type="button"
                tabIndex={hidden ? -1 : undefined}
                className="cursor-pointer text-left hover:underline focus-visible:underline focus:outline-hidden"
              >
                {member.name}
              </button>
            </DialogTrigger>
          </h3>
          <p className={cn("mt-1 text-sm font-bold", accent.creds)}>
            {member.credentials.join("  |  ")}
          </p>
          <p
            className={cn(
              "mt-3 inline-flex items-center gap-1.5 self-start rounded-md px-2.5 py-1.5 text-xs font-semibold",
              accent.badge,
            )}
          >
            <Trophy aria-hidden="true" className={cn("size-3.5", accent.trophy)} />
            {member.achievement}
          </p>
          <div className="relative mt-3">
            <p
              ref={measureRef}
              aria-hidden="true"
              className="pointer-events-none invisible absolute inset-x-0 top-0 line-clamp-4 text-sm leading-relaxed"
            >
              {member.experience}
            </p>
            <p
              className={cn(
                "text-sm leading-relaxed text-brand-body",
                truncated ? "line-clamp-3" : "line-clamp-4",
              )}
            >
              {member.experience}
            </p>
            {truncated && (
              <DialogTrigger asChild>
                <button
                  type="button"
                  tabIndex={hidden ? -1 : undefined}
                  className={cn(
                    "text-sm font-semibold leading-relaxed hover:underline focus-visible:underline focus:outline-hidden",
                    accent.creds,
                  )}
                >
                  View more
                </button>
              </DialogTrigger>
            )}
          </div>
        </div>
      </article>

      <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-md">
        <div className="relative aspect-[4/3.5] overflow-hidden rounded-t-2xl bg-[#F1F4F8]">
          {member.image ? (
            <Image
              src={member.image.src}
              alt={member.image.alt}
              width={member.image.width}
              height={member.image.height}
              sizes="448px"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            portrait
          )}
          <span className={cn("absolute inset-x-0 bottom-0 h-1", accent.bar)} />
        </div>
        <div className="px-6 pb-6">
          <DialogTitle className="text-xl font-extrabold leading-tight text-brand-navy">
            {member.name}
          </DialogTitle>
          <p className={cn("mt-1 text-sm font-bold", accent.creds)}>
            {member.credentials.join("  |  ")}
          </p>
          <p
            className={cn(
              "mt-3 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold",
              accent.badge,
            )}
          >
            <Trophy aria-hidden="true" className={cn("size-3.5", accent.trophy)} />
            {member.achievement}
          </p>
          <DialogDescription className="mt-3 text-sm leading-relaxed text-brand-body">
            {member.experience}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
