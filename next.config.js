/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['c.tenor.com', 'res.cloudinary.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
