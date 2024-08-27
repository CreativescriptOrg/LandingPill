/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["gsap"]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  build: {
    transpile: ["gsap"],
  },
};

module.exports = withTM({ nextConfig });
