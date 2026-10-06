import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export function HeaderCtas() {
  const { ctas } = siteContent;
  return (
    <div className="hidden items-center gap-2 lg:flex xl:gap-3">
      <Button
        asChild
        variant="brand"
        className="h-10 px-4 text-sm xl:h-12 xl:px-6 xl:text-[15px]"
      >
        <Link href={ctas.advisor.href}>
          <MessageCircle aria-hidden="true" />
          {ctas.advisor.label}
        </Link>
      </Button>
      <Button
        asChild
        variant="brandOutline"
        className="h-10 px-4 text-sm xl:h-12 xl:px-6 xl:text-[15px]"
      >
        <Link href={ctas.brochure.href}>
          {ctas.brochure.label}
          <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}
