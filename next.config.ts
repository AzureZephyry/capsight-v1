import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/assessment",
        destination: "/assessments",
        permanent: false,
      },
      {
        source: "/assessment/:path*",
        destination: "/assessments",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
