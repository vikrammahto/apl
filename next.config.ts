import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/100',
        search: '?img=5',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
