/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  	dangerouslyAllowSVG: true,
    domains: ['placehold.co'],
  },
}

export default nextConfig;
