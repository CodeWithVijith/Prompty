import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "n8n-github-files.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
