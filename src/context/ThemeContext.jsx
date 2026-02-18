import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContextValue.jsx';

const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'dark';
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') return saved;
    } catch {
        return 'dark';
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch {
            void theme;
        }
    }, [theme]);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;
        const media = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (event) => {
            try {
                const saved = localStorage.getItem('theme');
                if (saved === 'light' || saved === 'dark') {
                    return;
                }
            } catch {
                void event;
            }
            setTheme(event.matches ? 'dark' : 'light');
        };

        if (typeof media.addEventListener === 'function') {
            media.addEventListener('change', handleChange);
        } else if (typeof media.addListener === 'function') {
            media.addListener(handleChange);
        }

        return () => {
            if (typeof media.removeEventListener === 'function') {
                media.removeEventListener('change', handleChange);
            } else if (typeof media.removeListener === 'function') {
                media.removeListener(handleChange);
            }
        };
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
