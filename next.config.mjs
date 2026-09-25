/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/dev/pizzapartycateringsydney',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
