import { MetadataRoute } from 'next';
import { SERIES } from '@/data/series';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mangainsight.com';

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/critiques`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/tops`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/nouveautés`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/guides`, priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  const seriesPages = SERIES.map(serie => ({
    url: `${baseUrl}/series/${serie.slug}`,
    lastModified: serie.addedAt ? new Date(serie.addedAt) : new Date(),
    priority: serie.stars >= 4 ? 0.8 : 0.6,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...seriesPages];
}
