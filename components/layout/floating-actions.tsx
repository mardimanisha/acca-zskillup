"use client";

import { FileDown, MessageCircle, MessageSquareText } from "lucide-react";
import type { ReactNode } from "react";

import { useEnquiryModal } from "@/components/faqs/enquiry-modal";
import { siteContent } from "@/content/site";

// Digits only, with country code (e.g. 919876543210). The WhatsApp button is hidden until this is set.
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

// Footer green. The pill is right-anchored, so the label grows leftwards on hover/focus.
const fabClass =
  "group flex h-12 items-center rounded-full bg-[#014331] text-white shadow-lg shadow-black/20 transition-colors duration-300 hover:bg-[#025a43] focus-visible:bg-[#025a43] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#014331]/40 focus-visible:ring-offset-2 sm:h-14";

function FabContent({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <>
      <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 text-[15px] font-bold opacity-0 transition-all duration-300 ease-out group-hover:max-w-[240px] group-hover:pl-6 group-hover:opacity-100 group-focus-visible:max-w-[240px] group-focus-visible:pl-6 group-focus-visible:opacity-100">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="flex size-12 shrink-0 items-center justify-center sm:size-14 [&_svg]:size-5 sm:[&_svg]:size-6"
      >
        {icon}
      </span>
    </>
  );
}

/** Fixed bottom-right stack of conversion shortcuts, shown on the home page. */
export function FloatingActions() {
  const { open, openBrochure } = useEnquiryModal();
  const advisorLabel = siteContent.ctas.advisor.label;
  const brochureLabel = siteContent.ctas.brochure.label;

  return (
    <div
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
      role="group"
      aria-label="Quick actions"
    >
      {whatsappNumber && (
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className={fabClass}
        >
          <FabContent icon={<MessageCircle />} label="Chat on WhatsApp" />
        </a>
      )}
      <button
        type="button"
        onClick={openBrochure}
        aria-label={brochureLabel}
        className={fabClass}
      >
        <FabContent icon={<FileDown />} label={brochureLabel} />
      </button>
      <button type="button" onClick={open} aria-label={advisorLabel} className={fabClass}>
        <FabContent icon={<MessageSquareText />} label={advisorLabel} />
      </button>
    </div>
  );
}
