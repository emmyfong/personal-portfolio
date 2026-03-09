import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import '../styling/ThemeToggle.css';

export default function ThemeToggle() {
    // Default to dark mode
    const [theme, setTheme] = useState('dark');

    // Run this effect when `theme` state changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
    );
}
