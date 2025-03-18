import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental',
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
