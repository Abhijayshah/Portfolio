import { ImageResponse } from 'next/og';

export const alt = 'Abhijay Kumar Shah | Full-Stack Software Engineer & Applied AI Developer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '80px',
                    color: '#ffffff',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        fontSize: '24px',
                        color: '#ff386a',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        marginBottom: '16px',
                    }}
                >
                    Portfolio & Systems Engineering
                </div>
                <div
                    style={{
                        fontSize: '64px',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '24px',
                    }}
                >
                    Abhijay Kumar Shah
                </div>
                <div
                    style={{
                        fontSize: '30px',
                        color: '#b8b8b8',
                        maxWidth: '900px',
                        lineHeight: 1.4,
                        marginBottom: '40px',
                    }}
                >
                    Full-Stack Developer, AI Orchestrator & Systems Engineer
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                    }}
                >
                    {['MERN & Next.js', 'Healthcare Queue Systems', 'Applied AI', 'Competitive Programming'].map((tag) => (
                        <div
                            key={tag}
                            style={{
                                background: 'rgba(255, 56, 106, 0.15)',
                                border: '1px solid rgba(255, 56, 106, 0.4)',
                                borderRadius: '8px',
                                padding: '8px 20px',
                                fontSize: '20px',
                                color: '#ff386a',
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
