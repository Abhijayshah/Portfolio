export const projects = [
    {
        id: 1,
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
        image: "/img/port1.jpg",
        liveLink: "https://projecthub-flame.vercel.app",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/projecthub"
    },
    {
        id: 2,
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
        image: "/img/port2.jpg",
        liveLink: "https://github.com/Abhijayshah/English-Tutor-AI",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/English-Tutor-AI"
    },
    {
        id: 3,
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
        image: "/img/port3.jpg",
        liveLink: "https://school-system-murex.vercel.app/",
        videoLink: "https://school-system-murex.vercel.app/",
        githubLink: "https://github.com/Abhijayshah/School-System"
    },
    {
        id: 4,
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
        image: "/img/port4.jpg",
        liveLink: "https://rately-ten.vercel.app/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/Rately"
    },
    {
        id: 5,
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
        image: "/img/port5.jpg",
        liveLink: "https://github.com/Abhijayshah/ios-todo-app",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/ios-todo-app"
    },
    {
        id: 6,
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
        image: "/img/port6.jpg",
        liveLink: "https://abhijayshah.github.io/MultiSync-VideoPlayer/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/MultiSync-VideoPlayer"
    },
    {
        id: 7,
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
        image: "/img/port7.jpg",
        liveLink: "",
        videoLink: "https://github.com/Abhijayshah/political_promise_tracking_dashboard.git",
        githubLink: "https://github.com/Abhijayshah/political_promise_tracking_dashboard.git"
    },
    {
        id: 8,
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
        image: "/img/blog1.jpg",
        liveLink: "https://github.com/Abhijayshah/Ticket_Support_System.git",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/Ticket_Support_System.git"
    },
    {
        id: 9,
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
        image: "/img/blog2.jpg",
        liveLink: "https://github.com/Abhijayshah/ai-customer-support-bot-2.git",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/ai-customer-support-bot-2.git"
    },
    {
        id: 10,
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
        image: "/img/blog3.jpg",
        liveLink: "https://github.com/Abhijayshah/Simple-AI-ChatBot/blob/main/web-speech-ai/README.md",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/Simple-AI-ChatBot/blob/main/web-speech-ai/README.md"
    },
    {
        id: 11,
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
        image: "/img/hero.png",
        liveLink: "https://abhijayshah.github.io/ComForTable_And_Stay/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/ComForTable_And_Stay"
    },
    {
        id: 12,
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
        image: "/img/hero1.png",
        liveLink: "https://park-easy-tndl.vercel.app/",
        videoLink: "",
        githubLink: "https://github.com/Abhijayshah/parkEasy"
    },
    {
        id: 13,
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
