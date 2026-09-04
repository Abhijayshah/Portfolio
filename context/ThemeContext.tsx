'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): Theme => {
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

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const initial = getInitialTheme();
        setTheme(initial);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        if (theme === 'light') {
            root.classList.add('light-mode');
            document.body.classList.add('light-mode');
        } else {
            root.classList.remove('light-mode');
            document.body.classList.remove('light-mode');
        }
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // ignore
        }
    }, [theme, mounted]);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;
        const media = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (event: MediaQueryListEvent) => {
            try {
                const saved = localStorage.getItem('theme');
                if (saved === 'light' || saved === 'dark') {
                    return;
                }
            } catch {
                // ignore
            }
            setTheme(event.matches ? 'dark' : 'light');
        };

        if (typeof media.addEventListener === 'function') {
            media.addEventListener('change', handleChange);
        } else if (typeof (media as unknown as { addListener: (cb: (e: MediaQueryListEvent) => void) => void }).addListener === 'function') {
            (media as unknown as { addListener: (cb: (e: MediaQueryListEvent) => void) => void }).addListener(handleChange);
        }

        return () => {
            if (typeof media.removeEventListener === 'function') {
                media.removeEventListener('change', handleChange);
            } else if (typeof (media as unknown as { removeListener: (cb: (e: MediaQueryListEvent) => void) => void }).removeListener === 'function') {
                (media as unknown as { removeListener: (cb: (e: MediaQueryListEvent) => void) => void }).removeListener(handleChange);
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

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeProvider;
