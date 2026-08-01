import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure that static assets work correctly on GitHub pages subdirectory if applicable.
  // If the repository name is "portfolio", base path might be needed, but since the user has a custom domain or directly serves from root,
  // we can configure basePath if required. We'll default to no basePath for standard hosting.
  reactStrictMode: true,
};

export default nextConfig;
