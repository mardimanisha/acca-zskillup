import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cache optimized images for 30 days so repeat visits don't re-optimize/re-fetch.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
