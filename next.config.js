/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "d1sell8jrx8uwy.cloudfront.net",
      "d3dchamidolacn.cloudfront.net",
      "cdn.martianwallet.xyz",
      "spacecywallet.com",
      "ipfs.io",
      "cloudflare-ipfs.com",
      "aigens.s3.eu-central-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
