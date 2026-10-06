import Image from "next/image";

import { homeLearningContent } from "@/content/home-learning";

export function LearningVisual() {
  const { src, alt, width, height } = homeLearningContent.visual;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      sizes="(min-width: 1280px) 608px, (min-width: 1024px) 50vw, (min-width: 768px) 672px, 100vw"
      className="relative h-auto w-full"
    />
  );
}
