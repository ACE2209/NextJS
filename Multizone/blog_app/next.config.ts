import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/shop/:path*",
        destination: "http://localhost:3000/:path*",
      },
    ];
  },
};

export default nextConfig;
