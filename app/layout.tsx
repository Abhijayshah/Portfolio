import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/global.scss';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://abhijayshah.online'),
    title: {
        default: 'Abhijay Kumar Shah | Full-Stack Software Engineer',
        template: '%s | Abhijay Kumar Shah',
    },
    description:
        'Full-Stack Software Engineer & MERN developer building production software, AI-driven systems, and scalable web apps. Based in Bhopal, India.',
    keywords: [
        'Full-Stack Software Engineer',
        'MERN developer',
        'production software',
        'AI Developer',
        'iOS Developer',
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'Portfolio',
        'Bhopal',
    ],
    authors: [{ name: 'Abhijay Kumar Shah', url: 'https://abhijayshah.online' }],
    creator: 'Abhijay Kumar Shah',
    alternates: {
        canonical: 'https://abhijayshah.online',
    },
    openGraph: {
        title: 'Abhijay Kumar Shah - Full-Stack Software Engineer',
        description: 'Full-Stack Software Engineer & MERN developer building production software, AI-driven systems, and scalable web apps.',
        url: 'https://abhijayshah.online',
        siteName: 'Abhijay Kumar Shah Portfolio',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/img/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Abhijay Kumar Shah - Full-Stack Software Engineer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Abhijay Kumar Shah - Full-Stack Software Engineer',
        description: 'Full-Stack Software Engineer & MERN developer building production software, AI-driven systems, and scalable web apps.',
        images: ['/img/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhijay Kumar Shah',
    url: 'https://abhijayshah.online',
    jobTitle: 'Full-Stack Software Engineer',
    worksFor: [
        {
            '@type': 'Organization',
            name: 'CatCatchCode',
            url: 'https://catcatchcode.online',
        },
    ],
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Vellore Institute of Technology (VIT)',
        sameAs: 'https://vitbhopal.ac.in/',
    },
    sameAs: [
        'https://www.linkedin.com/in/abhijayshah/',
        'https://github.com/Abhijayshah',
        'https://x.com/abhijayshah74',
    ],
    knowsAbout: [
        'Full-Stack Development',
        'Software Engineering',
        'MERN Stack',
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'AI Orchestration',
        'Python',
        'SwiftUI',
        'Native iOS',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={poppins.variable} data-theme="dark" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
