import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Use standalone for dynamic features like searchParams
  output: "standalone",
};

export default nextConfig;
