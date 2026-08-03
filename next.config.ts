import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  serverExternalPackages: ['pdf-parse'],
};

export default nextConfig;
