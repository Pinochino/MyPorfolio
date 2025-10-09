/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'media3.giphy.com',
      },
      {
        hostname: 'e7.pngegg.com',
      },
      {
        hostname: 'hoidanit.vn',
      },
    ],
  },
}

export default nextConfig
