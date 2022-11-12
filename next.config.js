/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/arcade-room",
        destination: "/arcade-room/index.html",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
