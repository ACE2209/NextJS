import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/blog/:path*",
        destination: "http://localhost:4000/:path*", // blog-app chạy ở 4000
      },
    ];
  },
};

export default nextConfig;
