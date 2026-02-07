import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Allows production builds to successfully complete even with type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

