/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // ✅ replaces "next export"
    images: {
      unoptimized: true, // ✅ disable optimization for static export
    },
  };
  
  module.exports = nextConfig;
  