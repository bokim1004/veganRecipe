/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.spoonacular.com'],
    },
    experimental: {
        appDir: true,
    },
};

export default nextConfig;
