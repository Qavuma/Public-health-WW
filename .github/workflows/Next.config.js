/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    optimizePackageImports: ['@mantine/core'],
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.who.int',
      },
      // Add other trusted health domains
    ],
  },
};
