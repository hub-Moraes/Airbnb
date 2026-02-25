import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web.codans.com.br',
      },
    ],
  },
};

export default nextConfig;
