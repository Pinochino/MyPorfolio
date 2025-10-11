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
      {
        hostname: 'upload.wikimedia.org',
      },
      {
        hostname: 'tanstack.com',
      },
      
       {
        hostname: 'avatars.githubusercontent.com',
      },
      
    ],
  },
}

export default nextConfig
