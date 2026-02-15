import React from 'react';
import { socialLinks } from '../../data/socials';
import { FaEnvelope, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaReddit, FaMastodon } from 'react-icons/fa';
import Card from '../ui/Card';

// Helper to map icon names to components
const getIcon = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes('linkedin')) return <FaLinkedin />;
    if (lower.includes('github')) return <FaGithub />;
    if (lower.includes('youtube')) return <FaYoutube />;
    if (lower.includes('instagram')) return <FaInstagram />;
    if (lower.includes('twitter') || lower.includes('x (')) return <FaTwitter />;
    if (lower.includes('facebook')) return <FaFacebook />;
    if (lower.includes('reddit')) return <FaReddit />;
    if (lower.includes('mastodon')) return <FaMastodon />;
    return <FaGlobe />;
};

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        // Simple client-side validation
        if (!data.get('email') || !data.get('message')) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/xwpnwkgz", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Thanks for your message! I'll get back to you soon.");
                form.reset();
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch {
            alert("Error sending message. Please try again.");
        }
    };

    return (
        <div className="contact-content" style={{ paddingBottom: '5rem' }}>
            <div className="main-title">
                <h2>Contact <span>Me</span></h2>
            </div>

            <div className="contact-content-con">
                <div className="left-contact">
                    <h4>Contact Information</h4>
                    <p>
                        I'm currently seeking SDE Internships. If you have any questions or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="icon">
                                <span><FaMapMarkerAlt /></span>
                                <span>Location : Bhopal, India</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <span><FaEnvelope /></span>
                                <span>Email : abhijayshah74@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-icons">
                        {Object.values(socialLinks).flat().map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className="contact-icon"
                                title={social.name}
                            >
                                {getIcon(social.name)}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="right-contact">
                    <Card>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="input-control i-c-2">
                                <input type="text" name="name" required placeholder="YOUR NAME" />
                                <input type="email" name="email" required placeholder="YOUR EMAIL" />
                            </div>
                            <div className="input-control">
                                <input type="text" name="subject" required placeholder="ENTER SUBJECT" />
                            </div>
                            <div className="input-control">
                                <textarea name="message" required id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div className="submit-btn">
                                <button type="submit" className="btn btn--primary btn--lg">
                                    Send Message <FaEnvelope />
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
