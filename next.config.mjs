/** @type {import('next').NextConfig} */
const basePath = '/dev/pizzapartycateringsydney'

const nextConfig = {
  basePath,
  output: 'export',
  env: {
    // Exposed so static asset paths (images, icons) can be prefixed with basePath
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
