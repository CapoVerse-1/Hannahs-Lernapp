/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  output: process.env.VERCEL ? undefined : undefined
}

export default nextConfig


