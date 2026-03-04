import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.matzahcaterers.in',
            lastModified: new Date(),
        },
        {
            url: 'https://www.matzahcaterers.in/menu',
            lastModified: new Date(),
        },
    ];
}
