/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "images.unsplash.com", "cdn.pixabay.com"],
  },
};

module.exports = nextConfig;
