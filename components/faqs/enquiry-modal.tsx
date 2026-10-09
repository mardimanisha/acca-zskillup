"use client";

import dynamic from "next/dynamic";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import type { EnquiryMode } from "@/components/faqs/enquiry-dialog";

// The dialog pulls in react-hook-form, zod and the select stack; keep it out of every page's initial JS.
const loadDialog = () => import("@/components/faqs/enquiry-dialog");
const EnquiryDialog = dynamic(loadDialog, { ssr: false });

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

  // Fetch the dialog chunk once the page is idle so the first click opens it instantly.
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    const handle = idle(() => void loadDialog());
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
    };
  }, []);

  // Mount only after the first open; afterwards it stays mounted so close animations still play.
  const [everOpened, setEverOpened] = useState(false);
  if (mode && !everOpened) setEverOpened(true);

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      {everOpened && <EnquiryDialog mode={mode} shownMode={shownMode} onClose={() => setMode(null)} />}
    </EnquiryModalContext.Provider>
  );
}
