/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  images: { domains: ["images.unsplash.com", "s4.anilist.co", "m.media-amazon.com"] }
};
export default nextConfig;
