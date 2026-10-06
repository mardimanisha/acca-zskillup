import Image from "next/image";

import type { PartnerLogo } from "@/content/partners";

type LogoCardProps = {
  logo: Pick<PartnerLogo, "name" | "file">;
};

export function LogoCard({ logo }: LogoCardProps) {
  return (
    <div className="flex h-24 items-center justify-center rounded-2xl border border-[#EEF2F1] bg-white p-6 shadow-[0_8px_24px_-12px_rgba(11,26,61,0.12)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-12px_rgba(11,26,61,0.2)] md:h-32">
      <Image
        src={logo.file}
        alt={logo.name}
        width={200}
        height={56}
        loading="lazy"
        sizes="200px"
        className="h-auto max-h-10 w-auto max-w-full object-contain md:max-h-14"
      />
    </div>
  );
}
