/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx', 'tsx'],
  images: {
    domains: [
      "images.pexels.com", "lh3.googleusercontent.com"
    ]
  }
}

module.exports = nextConfig
