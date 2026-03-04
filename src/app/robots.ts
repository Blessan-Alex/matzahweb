import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot'],
                allow: '/',
            },
            {
                userAgent: ['CCBot', 'anthropic-ai', 'Bytespider', 'cohere-ai'],
                disallow: '/',
            }
        ],
        sitemap: 'https://www.matzahcaterers.in/sitemap.xml',
    };
}
