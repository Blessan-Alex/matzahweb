import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://matzahcaterers.in',
            lastModified: new Date(),
        },
        {
            url: 'https://matzahcaterers.in/menu',
            lastModified: new Date(),
        },
        {
            url: 'https://matzahcaterers.in/about',
            lastModified: new Date(),
        },
        {
            url: 'https://matzahcaterers.in/contact',
            lastModified: new Date(),
        },
    ];
}
