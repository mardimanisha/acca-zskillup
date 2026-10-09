"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { EnquiryForm } from "@/components/shared/enquiry-form-section";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { enquiryFormContent } from "@/content/program-shared";

const EnquiryModalContext = createContext<{ open: () => void } | null>(null);

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) throw new Error("useEnquiryModal must be used inside <EnquiryModalProvider>");
  return context;
}

// Header / footer "Talk to an Advisor" links point at these anchors on other pages.
const enquiryHashes = ["#talk-to-advisor", "#enquiry-form"];

/** Hosts the site-wide enquiry form in a dialog; any descendant can open it via `useEnquiryModal`. */
export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const value = useMemo(() => ({ open }), [open]);

  useEffect(() => {
    const syncFromHash = () => {
      if (enquiryHashes.includes(window.location.hash)) {
        setIsOpen(true);
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[92vh] overflow-y-auto rounded-2xl p-6 sm:max-w-3xl sm:p-10">
          <DialogTitle className="sr-only">{enquiryFormContent.submit}</DialogTitle>
          <EnquiryForm />
        </DialogContent>
      </Dialog>
    </EnquiryModalContext.Provider>
  );
}
