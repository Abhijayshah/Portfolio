import { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../../context/ThemeContextValue.jsx';

function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
    );
}

export default ThemeToggle;
