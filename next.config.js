module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    appDir: true,
    // runtime: "experimental-edge",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
