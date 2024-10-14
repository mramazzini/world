/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.node/,
      use: "node-loader",
    });

    return config;
  },
  experimental: { instrumentationHook: true },
};

export default nextConfig;
