import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ignoreDuringBuilds: true,
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
      port: "",
      pathname: "/**",
    },
  ],
};

export default nextConfig;
