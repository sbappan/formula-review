import type { NextConfig } from "next";

import "./src/env/server.ts";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
