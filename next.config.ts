import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — Vercel (and any static host) serves the generated `out/`.
  output: "export",
  // next/image optimization is unavailable in a static export.
  images: { unoptimized: true },
  // Emit `/privacy/index.html` so clean URLs work on any static host.
  trailingSlash: true,
};

export default nextConfig;
