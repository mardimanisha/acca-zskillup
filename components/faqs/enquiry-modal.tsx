"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { EnquiryForm } from "@/components/shared/enquiry-form-section";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { enquiryFormContent } from "@/content/program-shared";

type EnquiryMode = "advisor" | "brochure";

const EnquiryModalContext = createContext<{ open: () => void; openBrochure: () => void } | null>(null);

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) throw new Error("useEnquiryModal must be used inside <EnquiryModalProvider>");
  return context;
}

// Header / footer "Talk to an Advisor" links point at these anchors on other pages.
const enquiryHashes = ["#talk-to-advisor", "#enquiry-form"];
const brochureHash = "#download-brochure";

/** Hosts the site-wide enquiry form in a dialog; any descendant can open it via `useEnquiryModal`. */
export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<EnquiryMode | null>(null);
  const open = useCallback(() => setMode("advisor"), []);
  const openBrochure = useCallback(() => setMode("brochure"), []);
  const value = useMemo(() => ({ open, openBrochure }), [open, openBrochure]);

  useEffect(() => {
    const syncFromHash = () => {
      const { hash } = window.location;
      const next = enquiryHashes.includes(hash) ? "advisor" : hash === brochureHash ? "brochure" : null;
      if (next) {
        setMode(next);
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  // Keep the last mode while the dialog animates closed.
  const [shownMode, setShownMode] = useState<EnquiryMode>("advisor");
  useEffect(() => {
    if (mode) setShownMode(mode);
  }, [mode]);

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <Dialog open={mode !== null} onOpenChange={(isOpen) => !isOpen && setMode(null)}>
        <DialogContent className="max-h-[92vh] overflow-y-auto rounded-2xl p-6 sm:max-w-3xl sm:p-10">
          <DialogTitle className="sr-only">
            {shownMode === "brochure" ? enquiryFormContent.brochure.submit : enquiryFormContent.submit}
          </DialogTitle>
          <EnquiryForm key={shownMode} variant={shownMode} onSuccess={() => setMode(null)} />
        </DialogContent>
      </Dialog>
    </EnquiryModalContext.Provider>
  );
}
