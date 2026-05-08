import { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/tools';

const BASE_URL = 'https://toolmint.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const toolUrls = TOOLS.map(tool => ({
    url: `${BASE_URL}/tools/${tool.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: tool.tags.includes('popular') ? 0.8 : 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/#categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/#tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...toolUrls,
  ];
}
