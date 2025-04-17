
import { Terminal, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  onAiChatOpen: () => void;
}

export function Navbar({ activePage, onPageChange, onAiChatOpen }: NavbarProps) {
  const { theme } = useTheme();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-dracula-background shadow-md px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <Terminal className={`w-6 h-6 ${theme === 'dark' ? 'text-dracula-purple' : 'text-violet-600'}`} />
        <span className="ml-2 font-bold text-lg dark:text-dracula-foreground">Tux Street</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={() => onPageChange('home')}
          className={`px-3 py-1 rounded-md transition-colors duration-300 ${
            activePage === 'home'
              ? 'bg-violet-100 dark:bg-dracula-current text-violet-700 dark:text-dracula-purple'
              : 'hover:bg-violet-50 dark:hover:bg-dracula-current/50 text-gray-700 dark:text-dracula-comment'
          }`}
        >
          Home
        </button>
        
        <button
          onClick={() => onPageChange('linux-commands')}
          className={`px-3 py-1 rounded-md transition-colors duration-300 ${
            activePage === 'linux-commands'
              ? 'bg-violet-100 dark:bg-dracula-current text-violet-700 dark:text-dracula-purple'
              : 'hover:bg-violet-50 dark:hover:bg-dracula-current/50 text-gray-700 dark:text-dracula-comment'
          }`}
        >
          Linux Commands
        </button>
        
        <button
          onClick={onAiChatOpen}
          className="px-3 py-1 rounded-md transition-colors duration-300 flex items-center
                    hover:bg-violet-50 dark:hover:bg-dracula-current/50 text-gray-700 dark:text-dracula-comment"
          aria-label="Open AI Chat"
        >
          <Cpu className="w-4 h-4 mr-1" />
          AI
        </button>
        
        <div className="ml-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
