export type Theme = 'day' | 'night';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
