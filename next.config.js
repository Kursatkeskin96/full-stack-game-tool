/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "render.albiononline.com", protocol: "https", port: "" },
      { hostname: "cdn.discordapp.com", protocol: "https", port: "" },
      { hostname: "static-cdn.jtvnw.net", protocol: "https", port: "" },
      {
        hostname: "firebasestorage.googleapis.com",
        protocol: "https",
        port: "",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

module.exports = nextConfig
