import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Theme, ThemeContextType } from '../types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'day';
  const saved = localStorage.getItem('tux-theme');
  if (saved === 'night' || saved === 'day') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('tux-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'day' ? 'night' : 'day'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
