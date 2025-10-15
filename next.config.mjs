/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true, // This is needed for static exports if you're using `next export`
  },
  // If you're using `next export` (static HTML export), add this:
  output: 'export',
};

export default nextConfig;
