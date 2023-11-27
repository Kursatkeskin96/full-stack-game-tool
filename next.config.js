/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "render.albiononline.com", protocol: "https", port: "" },
      { hostname: "cdn.discordapp.com", protocol: "https", port: "" },
      {
        hostname: "firebasestorage.googleapis.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig
