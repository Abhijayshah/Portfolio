import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 1,
        name: "Dr Heal — Enterprise Healthcare OS",
        category: "Full-Stack AI",
        tag: "Healthcare Management",
        techStack: ["Next.js", "Express.js", "MongoDB", "REST APIs", "JWT", "RBAC", "Tailwind CSS"],
        description: "Full-stack enterprise healthcare platform handling scalable patient bookings, 16 live operational metrics, and 15-role RBAC access middlewares.",
        features: [
            "Engineered a full-stack Next.js and Express healthcare platform handling scalable patient bookings and administration.",
            "Architected high-performance MongoDB aggregation pipelines computing 16 live operational metrics and booking trends.",
            "Implemented secure stateful JWT authentication, automated token rotation, and robust 15-role RBAC access middlewares."
        ],
        caseStudy: {
            problem: "Healthcare administration suffered from fragmented manual appointment booking, delayed financial reporting, and lack of secure role-based medical access.",
            whatIBuilt: "Engineered a full-stack Next.js and Express platform featuring complex MongoDB aggregation pipelines for 16 operational KPIs, automated token rotation, and 15-role RBAC.",
            outcome: "Streamlined clinic administration, automated booking lifecycles, and established compliant clinical data access with sub-second aggregate metrics."
        },
        image: "/img/port4.webp",
        liveLink: "https://dr-heal-kappa.vercel.app/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah"
    },
    {
        id: 2,
        name: "Dr Heal — Real-Time Queue Engine",
        category: "Full-Stack AI",
        tag: "Queue Management & WebSockets",
        techStack: ["Next.js", "PostgreSQL", "Supabase", "WebSockets", "Node.js", "Tailwind CSS"],
        description: "Real-time hospital queue engine utilizing Next.js, PostgreSQL, and Supabase WebSockets for sub-50ms live status synchronization.",
        features: [
            "Built a real-time hospital queue engine using Next.js, PostgreSQL, and Supabase WebSockets for sub-50ms status syncs.",
            "Programmed an automated workflow engine handling dynamic patient transfers, state mutations, and complex queue routing.",
            "Architected secure database schemas utilizing PostgreSQL Row-Level Security and custom persistent session mechanisms."
        ],
        caseStudy: {
            problem: "Opaque OPD clinic queues caused 45+ minute patient bottlenecks, crowded waiting rooms, and uncoordinated transfers between consultation desks.",
            whatIBuilt: "Built a real-time hospital queue engine with sub-50ms WebSocket state syncs, dynamic routing logic, and PostgreSQL Row-Level Security.",
            outcome: "Reduced patient waiting room duration by ~65%, eliminated queue token desync, and enabled seamless automated doctor-to-pharmacy patient handoffs."
        },
        image: "/img/port3.webp",
        liveLink: "https://drheal-qms.vercel.app/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah"
    },
    {
        id: 3,
        name: "Satsang Vachan — Digital Community Platform",
        category: "MERN Stack",
        tag: "Digital Community Platform",
        techStack: ["Next.js", "Node.js", "Socket.IO", "Redis", "MongoDB", "Razorpay", "Cloudinary", "Meilisearch"],
        description: "Scalable digital community platform utilizing Next.js, Express, Socket.IO WebSockets, Redis caching, and Cloudinary HLS media streaming.",
        features: [
            "Architected a scalable Next.js and Express community platform utilizing Socket.IO WebSockets and Redis caching layers.",
            "Implemented secure JWT and Google OAuth authentication alongside MongoDB models and Razorpay payment gateway workflows.",
            "Integrated Cloudinary HLS streaming and Cloudflare R2 storage for optimized media delivery and rapid Meilisearch queries."
        ],
        caseStudy: {
            problem: "Decades of cultural literature and spiritual media required high-throughput streaming, global searchability, and values-aligned community interaction without commercial clutter.",
            whatIBuilt: "Architected a Next.js/Socket.IO platform with Redis caching, Cloudinary HLS streaming, Cloudflare R2 storage, Meilisearch, and Razorpay workflows.",
            outcome: "Preserved five decades of cultural heritage, enabled sub-100ms full-text search, and delivered smooth multimedia to thousands of active community members."
        },
        image: "/img/port1.webp",
        liveLink: "https://www.satsangvachansatsangseva.online/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah"
    },
    {
        id: 4,
        name: "RetailFlow Smart POS Billing Software",
        category: "Dev Tools",
        tag: "Retail POS Billing",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "IndexedDB", "WebUSB", "Tailwind CSS"],
        description: "High-speed retail counter point-of-sale billing software featuring offline-first transactional caching and thermal receipt integration.",
        features: [
            "Sub-second keyboard SKU barcode searching and instant cart calculations",
            "Offline-first IndexedDB transactional cache with automatic cloud reconciliation",
            "Direct WebUSB hardware communication with ESC/POS thermal printers"
        ],
        caseStudy: {
            problem: "Brick-and-mortar retail counters suffered from sluggish checkout queues (90+ sec/cart), manual barcode lookup errors, stock desync, and revenue halts during internet outages.",
            whatIBuilt: "Engineered a rapid-checkout POS desktop/web software with keyboard-first SKU lookup, offline-first IndexedDB transactional queueing with automatic cloud re-sync, and WebUSB thermal printing.",
            outcome: "Slashed average counter checkout duration from 90s to under 18s per customer, processed 5,000+ offline-to-online transactions without data loss, and prevented stockouts across 1,000+ SKUs."
        },
        image: "/img/port6.webp",
        liveLink: "https://github.com/Abhijayshah",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah"
    },
    {
        id: 5,
        name: "ProjectHub",
        category: "Full-Stack AI",
        tag: "MERN + LLM",
        techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "OpenRouter AI", "Cloudinary"],
        description: "Enterprise-grade MERN system for academic project management with integrated LLM report analysis.",
        features: [
            "LLM-powered analyzer using OpenRouter GPT-3.5-turbo for automated academic scoring",
            "Role-based authentication (JWT + bcrypt) with separate Student/Faculty workflows",
            "Multi-cloud deployment pipeline across Vercel, Render, MongoDB Atlas, and Cloudinary"
        ],
        image: "/img/port1.webp",
        liveLink: "https://projecthub-flame.vercel.app",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/projecthub"
    },
    {
        id: 6,
        name: "English-Tutor-AI",
        category: "AI/LLM",
        tag: "Voice AI",
        techStack: ["Node.js", "Socket.io", "OpenRouter", "GPT-4", "Claude"],
        description: "Multi-model orchestration with real-time voice feedback for language learning.",
        features: [
            "Multi-model orchestration (GPT-4/Claude/Gemini)",
            "Real-time audio visualization",
            "Specialized tutoring personalities"
        ],
        image: "/img/port2.webp",
        liveLink: "https://github.com/Abhijayshah/English-Tutor-AI",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/English-Tutor-AI"
    },
    {
        id: 7,
        name: "Scholara",
        category: "MERN Stack",
        tag: "Academic",
        techStack: ["MERN", "JWT", "Multer", "PDF-Lib"],
        description: "Automated academic workflow with an approval pipeline and AI report analysis.",
        features: [
            "Automated approval pipeline",
            "AI-driven PDF analysis",
            "Report compliance verification"
        ],
        image: "/img/port3.webp",
        liveLink: "https://school-system-murex.vercel.app/",
        videoLink: "https://school-system-murex.vercel.app/",
        githubLink: "https://github.com/Abhijayshah/School-System"
    },
    {
        id: 8,
        name: "Rately",
        category: "MERN Stack",
        tag: "Multi-Tenant",
        techStack: ["React", "TypeScript", "MongoDB", "Google OAuth"],
        description: "Multi-tenant store rating platform with separate dashboards and AI support.",
        features: [
            "Multi-tenant architecture",
            "Google OAuth integration",
            "Integrated AI support chatbot"
        ],
        image: "/img/port4.webp",
        liveLink: "https://rately-ten.vercel.app/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/Rately"
    },
    {
        id: 9,
        name: "Premium iOS App",
        category: "iOS Native",
        tag: "CoreData",
        techStack: ["SwiftUI", "CoreData", "Supabase", "FaceID"],
        description: "Offline-first productivity app with biometric security and real-time sync.",
        features: [
            "Offline-first architecture",
            "FaceID security",
            "Real-time cloud sync"
        ],
        image: "/img/port5.webp",
        liveLink: "https://github.com/Abhijayshah/ios-todo-app",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/ios-todo-app"
    },
    {
        id: 10,
        name: "MultiSync Player",
        category: "Dev Tools",
        tag: "Engine",
        techStack: ["Vanilla JS", "Media API", "HTML5"],
        description: "High-performance engine playing 9 synchronized video streams at 10x speed.",
        features: [
            "9 synchronized video streams",
            "10x playback speed",
            "File corruption detection"
        ],
        image: "/img/port6.webp",
        liveLink: "https://abhijayshah.github.io/MultiSync-VideoPlayer/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/MultiSync-VideoPlayer"
    },
    {
        id: 11,
        name: "Political Tracker",
        category: "AI/LLM",
        tag: "Analytics",
        techStack: ["Gemini AI", "React", "Node.js", "Chart.js"],
        description: "Tracks minister promises using AI to classify RSS feeds and visualize trends.",
        features: [
            "AI classification of news",
            "RSS feed integration",
            "Interactive performance dashboards"
        ],
        image: "/img/port7.webp",
        liveLink: "",
        videoLink: "https://github.com/Abhijayshah/political_promise_tracking_dashboard.git",
        githubLink: "https://github.com/Abhijayshah/political_promise_tracking_dashboard.git"
    },
    {
        id: 12,
        name: "Ticket Support",
        category: "MERN Stack",
        tag: "Redux/Auth",
        techStack: ["Node.js", "Redux Toolkit", "RTK Query", "MongoDB"],
        description: "Enterprise support system with real-time state sync and JWT security.",
        features: [
            "RTK Query state sync",
            "Custom JWT blacklisting",
            "MongoDB TTL indexing"
        ],
        image: "/img/blog1.webp",
        liveLink: "https://github.com/Abhijayshah/Ticket_Support_System.git",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/Ticket_Support_System.git"
    },
    {
        id: 13,
        name: "AI Support Bot",
        category: "AI/LLM",
        tag: "FastAPI",
        techStack: ["FastAPI", "SQLite", "Gemini", "Python"],
        description: "High-performance async bot with session persistence and human escalation.",
        features: [
            "Asynchronous architecture",
            "Session persistence",
            "Automated human escalation"
        ],
        image: "/img/blog2.webp",
        liveLink: "https://github.com/Abhijayshah/ai-customer-support-bot-2.git",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/ai-customer-support-bot-2.git"
    },
    {
        id: 14,
        name: "VoiceGPT",
        category: "AI/LLM",
        tag: "Real-time",
        techStack: ["Web Speech API", "Socket.io", "JavaScript"],
        description: "Interactive voice chatbot with real-time STT/TTS processing.",
        features: [
            "Real-time STT/TTS",
            "Lightweight architecture",
            "Interactive voice interface"
        ],
        image: "/img/blog3.webp",
        liveLink: "https://github.com/Abhijayshah/Simple-AI-ChatBot/blob/main/web-speech-ai/README.md",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/Simple-AI-ChatBot/blob/main/web-speech-ai/README.md"
    },
    {
        id: 15,
        name: "Comfortable Stay",
        category: "Dev Tools",
        tag: "Hospitality",
        techStack: ["Chart.js", "GitHub Actions", "LocalStorage"],
        description: "Hyper-local hospitality platform with QR-based deep linking.",
        features: [
            "QR-based deep linking",
            "LocalStorage persistence",
            "Zero-cost static deployment"
        ],
        image: "/img/hero.webp",
        liveLink: "https://abhijayshah.github.io/ComForTable_And_Stay/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/ComForTable_And_Stay"
    },
    {
        id: 16,
        name: "ParkEasy",
        category: "MERN Stack",
        tag: "Booking",
        techStack: ["MERN", "Context API", "React"],
        description: "Smart parking reservation system with real-time slot tracking.",
        features: [
            "Time-based booking logic",
            "Digital ticket generation",
            "Real-time availability"
        ],
        image: "/img/hero1.webp",
        liveLink: "https://park-easy-tndl.vercel.app/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/parkEasy"
    },
    {
        id: 17,
        name: "TravelExplore",
        category: "Dev Tools",
        tag: "Frontend",
        techStack: ["HTML5", "CSS3", "JavaScript", "AOS"],
        description: "Multi-page tourism portal with polished user journey and animations.",
        features: [
            "AOS animations",
            "Responsive grid layouts",
            "Interactive components"
        ],
        image: "/img/project-placeholder.svg",
        liveLink: "https://github.com/Abhijayshah/TravelExplore",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/TravelExplore"
    }
];
