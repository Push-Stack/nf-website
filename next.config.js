/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/arcade-room/",
        destination: "/arcade-room/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
