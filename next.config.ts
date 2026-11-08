import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/zahra-rastegar-magazine",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
