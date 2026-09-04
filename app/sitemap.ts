import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://abhijayshah.online';
    const now = new Date();

    const sections = [
        '',
        '#about',
        '#experience',
        '#projects',
        '#skills',
        '#publications',
        '#achievements',
        '#certificates',
        '#education',
        '#youtube',
        '#contact',
    ];

    return sections.map((section, index) => ({
        url: `${baseUrl}/${section}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: index === 0 ? 1.0 : 0.8,
    }));
}
