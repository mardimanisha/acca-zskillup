import type { NextConfig } from "next";

// The Olympiad landing page is served from the main domain (www.zskillup.com). This
// Vercel-hosted URL is only used in marketing videos, so send visitors to the main link.
const OLYMPIAD_PATH = "/National-Commerce-Olympiad-2026";
const MAIN_SITE = "https://www.zskillup.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: OLYMPIAD_PATH, destination: `${MAIN_SITE}${OLYMPIAD_PATH}/`, permanent: false },
      { source: `${OLYMPIAD_PATH}/:path*`, destination: `${MAIN_SITE}${OLYMPIAD_PATH}/:path*`, permanent: false },
    ];
  },
  images: {
    // AVIF first (smallest), WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days so repeat visits don't re-optimize/re-fetch.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // 75 is the default; 90 is used for the hero background.
    qualities: [75, 90],
  },
};

export default nextConfig;
