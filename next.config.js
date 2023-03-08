/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    concurrentFeatures: true

  },
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig

