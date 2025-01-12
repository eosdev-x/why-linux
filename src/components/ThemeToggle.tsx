import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full transition-all duration-300 ease-in-out
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-500
                dark:bg-dracula-current bg-violet-100"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-dracula-foreground" />
      ) : (
        <Moon className="w-6 h-6 text-violet-600" />
      )}
    </button>
  );
}