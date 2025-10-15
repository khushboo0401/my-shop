/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**', // This allows all domains, but you might want to be more specific
      },
    ],
  },
  // Remove output: 'export' since we're not doing a static export
};

export default nextConfig;
