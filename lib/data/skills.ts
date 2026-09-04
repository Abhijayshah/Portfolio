import { FaCode, FaLaptopCode, FaDatabase, FaServer, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { SkillCategory } from '@/types';

export const headlineSkills: string[] = [
    "Next.js & React",
    "TypeScript",
    "Node.js & Express",
    "PostgreSQL & Supabase",
    "MongoDB & Redis",
    "C++ & DSA",
    "Docker & CI/CD",
    "WebSockets & REST APIs",
    "Tailwind CSS",
    "Razorpay & Integrations"
];

export const skills: SkillCategory[] = [
    {
        category: "Languages & Core Tech",
        icon: FaCode,
        items: [
            "C++",
            "JavaScript (ES6+)",
            "TypeScript",
            "Python",
            "SQL",
            "Data Structures & Algorithms",
            "OOPs",
            "DBMS",
            "Operating Systems"
        ]
    },
    {
        category: "Frontend Architecture",
        icon: FaLaptopCode,
        items: [
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Redux",
            "Context API",
            "Recharts",
            "Server Components",
            "Framer Motion",
            "Vite",
            "SwiftUI"
        ]
    },
    {
        category: "Backend & Databases",
        icon: FaServer,
        items: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "RESTful APIs",
            "WebSockets",
            "Redis",
            "Mongoose",
            "FastAPI"
        ]
    },
    {
        category: "Cloud, DevOps & Tools",
        icon: FaCloud,
        items: [
            "Git",
            "GitHub",
            "Docker",
            "AWS (Basic)",
            "Vercel",
            "Render",
            "Railway",
            "Postman",
            "CI/CD Pipelines",
            "GitHub Actions"
        ]
    },
    {
        category: "Security & Integrations",
        icon: FaShieldAlt,
        items: [
            "JWT",
            "RBAC",
            "Supabase",
            "Razorpay",
            "Cloudinary",
            "Meilisearch",
            "Twilio",
            "MSG91",
            "Gemini API",
            "AI Orchestration (LLMs)"
        ]
    }
];
