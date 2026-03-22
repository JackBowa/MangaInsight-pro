/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  images: { domains: ["images.unsplash.com", "s4.anilist.co", "m.media-amazon.com"] },
  async redirects() {
    return [
      // Redirection accent → sans accent
      {
        source: '/nouveaut%C3%A9s',
        destination: '/nouveautes',
        permanent: true,
      },
      {
        source: '/nouveaut\u00e9s',
        destination: '/nouveautes',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
