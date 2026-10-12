import type { NextConfig } from "next";

// Set by the GitHub Actions workflow for project pages (username.github.io/<repo>).
// Leave empty for local dev and for username.github.io repos.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
