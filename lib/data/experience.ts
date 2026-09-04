import { Experience } from '@/types';

export const experience: Experience[] = [
    {
        role: "Software Engineer (Full Stack Integrations)",
        company: "Dr. Heal Pain Cure Hospital",
        duration: "Jun 2026 – Present",
        type: "Bengaluru, India",
        description: "Engineering core full-stack infrastructure and mission-critical hospital integrations, powering live patient queue management, multi-department operational sync, and automated payment/telemetry workflows.",
        achievements: [
            "Engineered a production MERN and Next.js healthcare platform handling scalable patient bookings and data workflows.",
            "Developed a real-time PostgreSQL and Supabase queue system, utilizing WebSockets for sub-second live state syncs.",
            "Integrated Razorpay and MSG91 OTP services, ensuring secure and highly available platform transaction processing.",
            "Architected 80+ REST APIs and complex MongoDB aggregation pipelines to power 16 real-time operational KPI metrics."
        ]
    },
    {
        role: "Software Engineer (Technical Lead)",
        company: "CatCatchCode",
        duration: "Jul 2025 – May 2026",
        type: "Remote",
        description: "Directed a cross-functional engineering team to architect and deploy highly scalable full-stack digital web platforms.",
        achievements: [
            "Directed a cross-functional engineering team to architect and deploy highly scalable full-stack digital web platforms.",
            "Spearheaded Next.js and React frontend architecture, optimizing component rendering and state management workflows.",
            "Designed robust backend services and REST APIs to support scalable databases and high-volume community engagement.",
            "Managed end-to-end SDLC using Git, Docker, and CI/CD pipelines to ensure rapid, zero-downtime production deploys."
        ],
        links: {
            website: "https://catcatchcode.online",
            github: "https://github.com/CatCatchCode",
            youtube: "https://youtube.com/@CatCatchCode"
        }
    },
    {
        role: "Co-Founder & Project Lead",
        company: "Satsang Vachan (Digital Preservation Initiative)",
        duration: "September 2025 – Present",
        type: "Remote",
        description: "Satsang Vachan is a large-scale digital transformation project aimed at preserving five decades of spiritual heritage for a global community of 200 Million+ followers of Baba Jaigurudev.",
        achievements: [
            "Digital Transformation: Spearheading the digitization of archival literature (since 1969), creating a scalable system to preserve 'Patrikas' and spiritual teachings for future generations.",
            "AI Content Pipelines: Implementing AI-assisted summarization and NLP tools to transform dense, decades-old archival text into modern, bite-sized visual content and infographics.",
            "Multimedia Orchestration: Collaborating with global contributors to produce podcasts, animated content, and magazines, ensuring the teachings are accessible to the younger, mobile-first demographic.",
            "Platform Leadership: Leading the frontend strategy and UX design for the web portal, ensuring accessibility and high performance across devices for a massive, diverse user base.",
            "Social Impact: Built a scalable system for content distribution focused on promoting social ethics, vegetarianism, and meditation through modern digital storytelling."
        ],
        links: {
            website: "https://satsangvachansatsangseva.online/",
            youtube: "https://www.youtube.com/channel/UCsAvsUouGa6g1VSNGhyfO5w",
            instagram: "https://www.instagram.com/satsang_vachan_satsang_seva/"
        }
    }
];
