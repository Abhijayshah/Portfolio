import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Abhijay Shah - Full-Stack Software Engineer',
        short_name: 'Abhijay Shah',
        description:
            'Official portfolio and software engineering showcase of Abhijay Shah, Full-Stack Software Engineer & Applied AI Developer.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0d0e11',
        theme_color: '#d91448',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
