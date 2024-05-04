/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'daisyui.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'ae01.alicdn.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
