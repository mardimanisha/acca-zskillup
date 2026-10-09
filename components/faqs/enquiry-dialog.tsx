"use client";

import { EnquiryForm } from "@/components/shared/enquiry-form-section";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { enquiryFormContent } from "@/content/program-shared";

export type EnquiryMode = "advisor" | "brochure";

/** The enquiry dialog itself. Loaded lazily by `EnquiryModalProvider` so the form stack stays out of the initial bundle. */
export default function EnquiryDialog({
  mode,
  shownMode,
  onClose,
}: {
  mode: EnquiryMode | null;
  shownMode: EnquiryMode;
  onClose: () => void;
}) {
  return (
    <Dialog open={mode !== null} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-h-[92vh] overflow-y-auto rounded-2xl p-6 sm:max-w-3xl sm:p-10">
        <DialogTitle className="sr-only">
          {shownMode === "brochure" ? enquiryFormContent.brochure.submit : enquiryFormContent.submit}
        </DialogTitle>
        <EnquiryForm key={shownMode} variant={shownMode} onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
}
