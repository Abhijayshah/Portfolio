import { Video } from '@/types';

/**
 * Robust helper to extract standard 11-character YouTube video ID
 * from full URLs (youtu.be, youtube.com/watch?v=, embed), or raw IDs.
 */
export function extractYoutubeId(urlOrId: string): string {
    if (!urlOrId) return '';
    const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : urlOrId.trim();
}

/**
 * Returns the public high-quality YouTube thumbnail URL
 */
export function getYoutubeThumbnail(videoIdOrUrl: string): string {
    const id = extractYoutubeId(videoIdOrUrl);
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export const youtubeChannelInfo = {
    channelId: "UCX8i_v1eL9VuLWG1fKwEXhw",
    channelUrl: "https://www.youtube.com/@abhijayshah.online",
    channelName: "Abhijay Shah",
    handle: "@abhijayshah.online",
    description: "Production software walkthroughs, full-stack systems, iOS development, and developer engineering guides."
};

/**
 * Easily replaceable video list. To update weekly/monthly, simply paste
 * the new YouTube link or ID into the list below.
 */
export const videos: Video[] = [
    {
        id: "1",
        videoId: "t1BB9UGqx4U",
        youtubeUrl: "https://youtu.be/t1BB9UGqx4U?si=HuPfhEkgzmWn-3Ym",
        title: "I Built a Premium iOS Productivity App 📱 | SwiftUI + CoreData + Supabase + AI | CatCatchCode",
        description: "Complete architecture breakdown of building a high-performance native iOS productivity app with SwiftUI, offline CoreData persistence, Supabase cloud sync, and on-device AI integration.",
        tag: "iOS & Mobile AI",
        channel: "Abhijay Shah"
    },
    {
        id: "2",
        videoId: "eZHC7uPwIYc",
        youtubeUrl: "https://youtu.be/eZHC7uPwIYc?si=jBsmSbLzBkBw3jjr",
        title: "CatCatchCode – Full Stack EdTech Platform | React 19 + Node + MongoDB | Complete Learning System",
        description: "Deep dive into the production architecture of the CatCatchCode learning platform: React 19 frontend, Node.js backend, MongoDB schemas, and automated student progress telemetry.",
        tag: "Full-Stack EdTech",
        channel: "Abhijay Shah"
    },
    {
        id: "3",
        videoId: "S-2C_Flqrio",
        youtubeUrl: "https://youtu.be/S-2C_Flqrio?si=S6s0vK2HyZv95CFa",
        title: "MATLAB Onramp DSP Audio Project 🎓 | FIR + IIR Filters + FFT | Beginner Portfolio | CatCatchCode",
        description: "Step-by-step digital signal processing audio engineering project implementing FIR and IIR digital filters, Fast Fourier Transforms (FFT), and spectral audio frequency analysis.",
        tag: "DSP & Audio Project",
        channel: "Abhijay Shah"
    },
    {
        id: "4",
        videoId: "xJfFD0wKFkk",
        youtubeUrl: "https://youtu.be/xJfFD0wKFkk?si=su83H91z3fHmJaIi",
        title: "Multi GitHub Account Setup on Mac (SSH) 🚀 | Avoid 403 Errors & Credential Confusion",
        description: "Practical engineering setup guide for configuring multiple personal and corporate GitHub accounts on macOS using custom SSH key configurations without credential clashes.",
        tag: "Dev Tools & SSH",
        channel: "Abhijay Shah"
    },
    {
        id: "5",
        videoId: "oYz2J7D45mk",
        youtubeUrl: "https://youtu.be/oYz2J7D45mk?si=hbfDc9YaDQohtyMv",
        title: "Convert PDF to OCR on Mac using Terminal | Make PDF Text Searchable & Copyable",
        description: "Automate OCR text extraction from scanned PDFs on macOS using terminal command-line utilities. Turn non-searchable document archives into accessible text.",
        tag: "CLI & Productivity",
        channel: "Abhijay Shah"
    },
    {
        id: "6",
        videoId: "NSVTqguDdJg",
        youtubeUrl: "https://youtu.be/NSVTqguDdJg",
        title: "Python for Interviews 🐍 Ep 1 | Intro + Complete Roadmap 2025 | Data Analyst + Backend + AI",
        description: "Comprehensive Python technical roadmap covering core syntax, data structures, asynchronous programming, and interview questions for SDE, Backend, and AI roles.",
        tag: "Python & Roadmap",
        channel: "Abhijay Shah"
    }
];

export default videos;
