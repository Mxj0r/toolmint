import { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/tools';

const BASE_URL = 'https://toolmint.io';

const BLOG_POSTS = [
  'how-to-compress-pdf-without-losing-quality',
  'seo-keyword-research-guide',
  'compress-images-for-web',
  'meta-tags-seo-guide',
  'json-formatter-developers-guide',
  'qr-code-best-practices',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const toolUrls = TOOLS.map(tool => ({
    url: `${BASE_URL}/tools/${tool.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: tool.tags.includes('popular') ? 0.8 : 0.6,
  }));

  const blogUrls = BLOG_POSTS.map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
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
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...toolUrls,
    ...blogUrls,
  ];
}