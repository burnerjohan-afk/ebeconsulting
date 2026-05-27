const { withPayload } = require('@payloadcms/next/withPayload')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Nodemailer (SMTP OVH) : ne pas bundler côté serveur — évite erreurs au déploiement Vercel
  serverExternalPackages: ["nodemailer"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 95],
  },
};

module.exports = withPayload(nextConfig);

