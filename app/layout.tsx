import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { CloudyBackground } from '@/components/ui/CloudyBackground';
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
        default: 'Abhijay Shah | Full-Stack Software Engineer & Applied AI Developer',
        template: '%s | Abhijay Shah',
    },
    description:
        'Official portfolio of Abhijay Shah, Full-Stack Software Engineer and Applied AI Developer. Specialized in scalable MERN stack, Next.js, hospital management systems (Dr. Heal Hospital), distributed architectures, and competitive programming.',
    keywords: [
        'Abhijay Shah',
        'abhijayshah',
        'abhijayshah74',
        'Full-Stack Software Engineer',
        'Software Development Engineer',
        'SDE',
        'MERN Stack Developer',
        'Next.js Developer',
        'React Developer',
        'TypeScript Developer',
        'Node.js Developer',
        'Applied AI Developer',
        'Dr Heal Pain Cure Hospital',
        'Hospital Queue Management System',
        'Healthcare System Architecture',
        'Point of Sale POS System',
        'CatCatchCode',
        'LeetCode abhijayshah74',
        'GeeksforGeeks abhijayshah74',
        'Codeforces abhijayshah',
        'Codolio abhijayshah74',
        'VIT Bhopal',
        'Vellore Institute of Technology',
        'Bhopal Software Engineer India',
        'Competitive Programming',
        'Production Software Engineer',
        'Amazon KDP Published Author',
    ],
    authors: [{ name: 'Abhijay Shah', url: 'https://abhijayshah.online' }],
    creator: 'Abhijay Shah',
    publisher: 'Abhijay Shah',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: 'https://abhijayshah.online',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'Abhijay Shah | Full-Stack Software Engineer & Applied AI Developer',
        description:
            'Full-Stack Software Engineer specializing in scalable web systems, healthcare queue engines (Dr. Heal Hospital), POS platforms, and AI workflows.',
        url: 'https://abhijayshah.online',
        siteName: 'Abhijay Shah Portfolio',
        locale: 'en_US',
        type: 'profile',
        firstName: 'Abhijay',
        lastName: 'Shah',
        username: 'abhijayshah',
        gender: 'male',
        images: [
            {
                url: '/img/abhijay_photo_chat.webp',
                width: 800,
                height: 800,
                alt: 'Abhijay Shah - Full-Stack Software Engineer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@Abhijay_74',
        creator: '@Abhijay_74',
        title: 'Abhijay Shah | Full-Stack Software Engineer & Applied AI Developer',
        description:
            'Full-Stack Software Engineer specializing in scalable web systems, healthcare queue engines (Dr. Heal Hospital), POS platforms, and AI workflows.',
        images: ['/img/abhijay_photo_chat.webp'],
    },
    icons: {
        icon: '/favicon.ico',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': 'https://abhijayshah.online/#person',
            name: 'Abhijay Shah',
            alternateName: ['Abhijay Shah', 'abhijayshah', 'abhijayshah74'],
            givenName: 'Abhijay',
            familyName: 'Shah',
            gender: 'https://schema.org/Male',
            jobTitle: 'Full-Stack Software Engineer & Applied AI Developer',
            description:
                'Full-Stack Software Engineer specializing in scalable web systems, MERN & Next.js architectures, hospital queue management engines, retail POS systems, and applied AI automation.',
            url: 'https://abhijayshah.online',
            image: 'https://abhijayshah.online/img/abhijay_photo_chat.webp',
            email: 'mailto:abhijayshah74@gmail.com',
            telephone: '+91-9102434557',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bhopal',
                addressRegion: 'Madhya Pradesh',
                addressCountry: 'IN',
            },
            alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Vellore Institute of Technology (VIT) Bhopal',
                url: 'https://vitbhopal.ac.in/',
            },
            worksFor: [
                {
                    '@type': 'Organization',
                    name: 'Dr. Heal Pain Cure Hospital & Research Center',
                    jobTitle: 'Lead Software Architect',
                },
                {
                    '@type': 'Organization',
                    name: 'CatCatchCode',
                    url: 'https://catcatchcode.online',
                    jobTitle: 'Founder & Engineering Lead',
                },
            ],
            sameAs: [
                'https://www.linkedin.com/in/abhijayshah/',
                'https://github.com/Abhijayshah',
                'https://leetcode.com/u/abhijayshah74/',
                'https://www.geeksforgeeks.org/profile/abhijayshah74',
                'https://codeforces.com/profile/abhijayshah',
                'https://codolio.com/profile/abhijayshah74',
                'https://scholar.google.com/citations?user=xN8sU-sAAAAJ',
                'https://www.youtube.com/@abhijay_74',
                'https://x.com/Abhijay_74',
                'https://www.instagram.com/abhijay_shah_74/',
            ],
            knowsAbout: [
                'Full-Stack Web Development',
                'Software Engineering',
                'MERN Stack (MongoDB, Express, React, Node.js)',
                'Next.js 16 & React 19',
                'TypeScript & JavaScript',
                'Python & Machine Learning',
                'Applied AI & LLM Orchestration',
                'Hospital Queue Management Systems',
                'Point of Sale (POS) Systems',
                'Competitive Programming & Data Structures',
                'REST APIs & GraphQL',
                'PostgreSQL & Cloud Infrastructure',
                'System Architecture & Microservices',
            ],
        },
        {
            '@type': 'WebSite',
            '@id': 'https://abhijayshah.online/#website',
            url: 'https://abhijayshah.online',
            name: 'Abhijay Shah - Full-Stack Software Engineer Portfolio',
            description:
                'Official portfolio and systems showcase of Abhijay Shah, Full-Stack Software Engineer & Applied AI Developer.',
            publisher: {
                '@id': 'https://abhijayshah.online/#person',
            },
        },
        {
            '@type': 'ProfilePage',
            '@id': 'https://abhijayshah.online/#webpage',
            url: 'https://abhijayshah.online',
            name: 'Abhijay Shah | Full-Stack Software Engineer & Applied AI Developer',
            mainEntity: {
                '@id': 'https://abhijayshah.online/#person',
            },
        },
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
                    <CloudyBackground />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
