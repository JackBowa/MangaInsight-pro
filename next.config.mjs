/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { mdxRs: true },
  images: { domains: ["images.unsplash.com", "s4.anilist.co", "m.media-amazon.com"] },
  async redirects() {
    return [
      // www → sans www (301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mangainsight.com' }],
        destination: 'https://mangainsight.com/:path*',
        permanent: true,
      },
      // http → https (301)
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://mangainsight.com/:path*',
        permanent: true,
      },
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
