/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://new-resume-smoky.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
