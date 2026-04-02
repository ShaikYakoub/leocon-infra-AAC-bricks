const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "leoconinfra.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.leoconinfra.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
