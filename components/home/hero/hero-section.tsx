import Image from "next/image";

import { HeroContent } from "@/components/home/hero/hero-content";
import { HeroForm } from "@/components/home/hero/hero-form";
import { HeroTrustStrip } from "@/components/home/hero/hero-trust-strip";
import { HeroVideoCard } from "@/components/home/hero/hero-video-card";
import { heroContent } from "@/content/home-hero";

export function HeroSection() {
  const { background, video } = heroContent;

  return (
    <section className="relative isolate overflow-hidden xl:flex xl:h-[calc(100svh-77px)] xl:min-h-[540px] xl:items-center">
      {/* On xl the form covers the right ~25% of the hero, so the photo is widened
          and shifted left to bring the subject out from behind it. */}
      <div className="absolute inset-y-0 left-0 right-0 -z-20 xl:-left-[26vw]">
        <Image
          src={background.src}
          alt={background.alt}
          fill
          preload
          sizes="(min-width: 1280px) 126vw, 100vw"
          quality={90}
          className="object-cover object-[56%_top]"
        />
      </div>
      {/* Readability overlays: light left-to-right wash so the photo still shows,
          a soft white glow behind the copy, and a stronger wash when content stacks */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white/70 from-0% via-white/35 via-30% to-transparent to-50%"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-[radial-gradient(ellipse_42%_48%_at_22%_34%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.55)_45%,transparent_100%)] xl:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-white/55 xl:hidden"
      />

      <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:py-10 lg:px-10 xl:grid-cols-[minmax(0,1fr)_440px] xl:grid-rows-[auto_1fr] xl:gap-x-12 xl:gap-y-4 xl:px-16 xl:py-6 short:gap-y-2 short:py-4 tight:gap-y-2 tight:py-3">
        <div className="order-1 max-w-[600px] xl:col-start-1 xl:row-start-1">
          <HeroContent />
        </div>

        <div className="order-2 w-full md:order-3 md:max-w-xl xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:max-w-none xl:self-center">
          <HeroForm />
        </div>

        <div className="order-3 flex max-w-[800px] flex-col gap-6 md:order-2 short:gap-4 tight:gap-3 xl:col-start-1 xl:row-start-2 xl:self-start">
          <div className="max-w-[640px]">
            <HeroVideoCard
              videoUrl={video.url}
              thumbnailSrc={video.thumbnail}
              thumbnailAlt={video.thumbnailAlt}
            />
          </div>
          <HeroTrustStrip />
        </div>
      </div>
    </section>
  );
}
