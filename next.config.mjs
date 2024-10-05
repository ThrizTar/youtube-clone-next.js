/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add rule to handle SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
