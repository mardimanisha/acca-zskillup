"use client";

import Image from "next/image";
import { Play } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { heroContent } from "@/content/home-hero";

type HeroVideoCardProps = {
  videoUrl: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
};

function toEmbedUrl(url: string): string | null {
  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}?autoplay=1&rel=0`;

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;

  return null;
}

export function HeroVideoCard({
  videoUrl,
  thumbnailSrc,
  thumbnailAlt,
}: HeroVideoCardProps) {
  const { a11y } = heroContent.video;
  const embedUrl = videoUrl ? toEmbedUrl(videoUrl) : null;

  return (
    <Dialog>
      <div className="relative aspect-[2/1] w-full max-w-[460px] short:max-w-[400px] tight:max-w-[340px] overflow-hidden rounded-2xl border-4 border-white bg-slate-200 shadow-[0_20px_60px_-15px_rgba(11,26,61,0.2)]">
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          fill
          sizes="(min-width: 768px) 460px, 100vw"
          className="object-cover"
        />
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label={a11y.play}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/80 bg-slate-900/55 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-slate-900/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-teal"
          >
            <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
          </button>
        </DialogTrigger>
      </div>

      <DialogContent className="max-w-[calc(100%-2rem)] overflow-hidden border-0 bg-black p-0 sm:max-w-4xl">
        <DialogTitle className="sr-only">{a11y.dialogTitle}</DialogTitle>
        <div className="aspect-video w-full">
          {videoUrl ? (
            embedUrl ? (
              <iframe
                src={embedUrl}
                title={a11y.dialogTitle}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                playsInline
                className="h-full w-full"
              />
            )
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
