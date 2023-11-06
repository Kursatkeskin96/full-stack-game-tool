/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'render.albiononline.com', protocol: 'https', port: '' }
        ]
    }
}

module.exports = nextConfig
