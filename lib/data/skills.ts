import {
    FaCode,
    FaLaptopCode,
    FaServer,
    FaDatabase,
    FaBolt,
    FaCloud,
    FaNetworkWired,
    FaBrain,
    FaPlug,
    FaTools,
    FaGraduationCap
} from 'react-icons/fa';
import { SkillCategory } from '@/types';

export const headlineSkills: string[] = [
    "Next.js & React",
    "TypeScript",
    "Node.js & Express",
    "PostgreSQL & Supabase",
    "MongoDB & Redis",
    "C++ & DSA",
    "Docker & CI/CD",
    "WebSockets & Socket.IO",
    "System Design (LLD/HLD)",
    "AI Agents & Gemini API"
];

export const skills: SkillCategory[] = [
    {
        id: "languages",
        category: "Languages",
        badge: "Core Syntax",
        highlight: "Modern ES6+, Systems & Typed Code",
        icon: FaCode,
        items: [
            "JavaScript (ES6+)",
            "TypeScript",
            "C++",
            "Python",
            "Java",
            "SQL",
            "HTML5",
            "CSS3"
        ]
    },
    {
        id: "frontend",
        category: "Frontend",
        badge: "Client Architecture",
        highlight: "Responsive, State-Driven Web Apps",
        icon: FaLaptopCode,
        items: [
            "React.js",
            "Next.js (App Router)",
            "Tailwind CSS",
            "Zustand",
            "Redux",
            "Context API",
            "Framer Motion",
            "Recharts"
        ]
    },
    {
        id: "backend",
        category: "Backend",
        badge: "APIs & Services",
        highlight: "High-Throughput Microservices & Auth",
        icon: FaServer,
        items: [
            "Node.js",
            "Express.js",
            "Next.js Route Handlers",
            "RESTful APIs",
            "JWT",
            "Google OAuth",
            "Bcrypt"
        ]
    },
    {
        id: "database-caching",
        category: "Database & Caching",
        badge: "Data & Persistence",
        highlight: "ACID Transactions & High-Speed Cache",
        icon: FaDatabase,
        items: [
            "MongoDB (Mongoose)",
            "PostgreSQL",
            "MySQL",
            "Supabase",
            "Redis (Upstash)",
            "Advanced Aggregation Pipelines",
            "Row-Level Security (RLS)"
        ]
    },
    {
        id: "message-queues",
        category: "Message Queues & Real-time",
        badge: "Streaming & Async",
        highlight: "Sub-50ms Pub/Sub & Event Streams",
        icon: FaBolt,
        items: [
            "Socket.IO",
            "Supabase Realtime",
            "Redis Pub/Sub",
            "WebSockets",
            "Server-Sent Events (SSE)",
            "Kafka",
            "RabbitMQ",
            "BullMQ"
        ]
    },
    {
        id: "devops-infra",
        category: "DevOps & Infrastructure",
        badge: "Cloud & Deployment",
        highlight: "Automated Deployments & Containerization",
        icon: FaCloud,
        items: [
            "Git & GitHub",
            "Docker",
            "AWS (Basic)",
            "Vercel",
            "Render",
            "Railway",
            "Cloudflare R2",
            "CI/CD Pipelines"
        ]
    },
    {
        id: "system-design",
        category: "System Design & Architecture",
        badge: "Distributed Architecture",
        highlight: "Fault-Tolerant, Scalable Systems",
        icon: FaNetworkWired,
        items: [
            "REST API Design",
            "Microservices Concepts",
            "Role-Based Access Control (RBAC)",
            "JWT Refresh Token Rotation (RTR)",
            "Database Modeling",
            "Monorepo Setup",
            "Rate Limiting",
            "Low Level Design (LLD)",
            "High Level Design (HLD)",
            "Load Balancer",
            "API Gateway",
            "Nginx",
            "Microservices",
            "Caching"
        ]
    },
    {
        id: "ai-automation",
        category: "AI & Automation",
        badge: "Applied GenAI",
        highlight: "Agentic Workflows & Tool-Calling LLMs",
        icon: FaBrain,
        items: [
            "Gemini API",
            "OpenRouter",
            "n8n",
            "Prompt Engineering",
            "LLM Integrations",
            "AI Agent Architecture",
            "Generative AI"
        ]
    },
    {
        id: "third-party",
        category: "Third-Party Integrations",
        badge: "External Services",
        highlight: "Payment, Media & Communication APIs",
        icon: FaPlug,
        items: [
            "Cloudinary (HLS Streaming)",
            "Razorpay",
            "Meilisearch",
            "Twilio",
            "MSG91",
            "Resend"
        ]
    },
    {
        id: "tools-skills",
        category: "Additional Tools & Skills",
        badge: "Productivity & Tooling",
        highlight: "Modern Developer Workflows & Prototyping",
        icon: FaTools,
        items: [
            "Postman CLI",
            "Figma",
            "UI/UX Prototyping",
            "Technical Writing",
            "Cursor",
            "Antigravity",
            "Agile Methodology"
        ]
    },
    {
        id: "coursework",
        category: "Coursework",
        badge: "CS Fundamentals",
        highlight: "Core Academic Foundations & Theory",
        icon: FaGraduationCap,
        items: [
            "Data Structures & Algorithms (DSA)",
            "Object-Oriented Programming (OOP)",
            "Database Management Systems (DBMS)",
            "Operating Systems",
            "Computer Networks"
        ]
    }
];

export default skills;
