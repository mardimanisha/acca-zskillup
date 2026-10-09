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

export function SiteFooter({
  brochureHref = siteContent.ctas.brochure.href,
}: {
  brochureHref?: string;
}) {
  const { about, columns, contact, legal, copyright } = footerContent;

  return (
    <footer className="bg-zs-greenDark text-white">
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
              <BrochureButton href={brochureHref} variant="outlineWhite" className="h-12 px-5 text-[15px] focus-visible:ring-offset-zs-greenDark" />
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
