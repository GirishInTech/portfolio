/** @type {import('next').NextConfig} */

let withBundleAnalyzer = (config) => config;

// Only load analyzer when explicitly enabled
if (process.env.ANALYZE === "true") {
  const bundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });
  withBundleAnalyzer = bundleAnalyzer;
}

const nextConfig = withBundleAnalyzer({
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: ["flagcdn.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
});

module.exports = nextConfig;