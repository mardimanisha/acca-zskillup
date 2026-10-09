import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { AdvisorButton, BrochureButton, container } from "@/components/programs/program-ui";
import { footerContent } from "@/content/program-shared";
import { TbaBadge } from "@/components/shared/tba-badge";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

const headingClass = "text-sm font-bold uppercase tracking-[0.04em] text-white";
const linkClass = "text-[15px] text-white/75 transition-colors hover:text-white";

const iconProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  className: "size-4",
} as const;

const socialLinks = [
  {
    label: "ZSkillup on LinkedIn",
    href: "https://www.linkedin.com/company/zskillup/home/",
    bg: "bg-[#0A66C2]",
    icon: (
      <svg {...iconProps}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "ZSkillup on Instagram",
    href: "https://www.instagram.com/zskillup_/",
    bg: "bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>
    ),
  },
  {
    label: "ZSkillup on YouTube",
    href: "https://www.youtube.com/@bylokeshmathur",
    bg: "bg-[#FF0000]",
    icon: (
      <svg {...iconProps}>
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
      </svg>
    ),
  },
];

export function SiteFooter({
  brochureHref = siteContent.ctas.brochure.href,
}: {
  brochureHref?: string;
}) {
  const { about, columns, contact, legal, copyright } = footerContent;

  return (
    <footer className="bg-[#014331] text-white">
      <div className={cn(container, "py-14 lg:py-16")}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Link href={siteContent.logo.href} className="inline-block">
              <Image
                src="/images/brand/zskillup-logo-white.png"
                alt={siteContent.name}
                width={800}
                height={270}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/75">{about}</p>
            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, bg, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full text-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                      bg,
                    )}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className={headingClass}>{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {"comingSoon" in link && link.comingSoon ? (
                      <span className="inline-flex items-center gap-2 text-[15px] text-white/55">
                        {link.label}
                        <TbaBadge />
                      </span>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className={headingClass}>{contact.title}</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${contact.email}`} className={cn(linkClass, "inline-flex items-center gap-2.5")}>
                  <Mail aria-hidden="true" className="size-4 text-white/60" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={cn(linkClass, "inline-flex items-center gap-2.5")}>
                  <Phone aria-hidden="true" className="size-4 text-white/60" />
                  {contact.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <AdvisorButton className="h-12 px-5 text-[15px]" />
              <BrochureButton href={brochureHref} variant="outlineWhite" className="h-12 px-5 text-[15px] focus-visible:ring-offset-[#014331]" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/65 lg:flex-row lg:items-center lg:justify-between">
          <p>{copyright}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
