/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-web' : '',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === 'production' ? '/Portfolio-web' : '',
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ['lucide-react'],
};

export default nextConfig;
