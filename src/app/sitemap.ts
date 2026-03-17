import { MetadataRoute } from 'next';

export const SERVICES = [
    "wedding-catering-kochi",
    "corporate-catering-kochi",
    "kerala-sadhya-catering",
    "outdoor-catering-kochi",
];

export const LOCATIONS = [
    "catering-services-kochi",
    "catering-services-ernakulam",
    "catering-services-aluva",
    "catering-services-kakkanad",
    "catering-services-edappally",
];

export const BLOGS = [
    "best-kerala-sadhya-dishes-weddings",
    "how-to-plan-catering-200-person-wedding",
    "kerala-wedding-catering-menu-guide",
    "outdoor-catering-tips-kerala-events",
    "buffet-vs-sadhya-catering",
    "corporate-event-catering-ideas-kochi"
];

const CANONICAL_URL = 'https://www.matzahcaterers.in';

export default function sitemap(): MetadataRoute.Sitemap {
    const defaultPages = [
        {
            url: CANONICAL_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${CANONICAL_URL}/menu`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${CANONICAL_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${CANONICAL_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${CANONICAL_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${CANONICAL_URL}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${CANONICAL_URL}/gallery`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ];

    const servicePages = SERVICES.map((service) => ({
        url: `${CANONICAL_URL}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    const locationPages = LOCATIONS.map((location) => ({
        url: `${CANONICAL_URL}/locations/${location}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    const blogPages = BLOGS.map((blog) => ({
        url: `${CANONICAL_URL}/blog/${blog}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...defaultPages, ...servicePages, ...locationPages, ...blogPages];
}
