import { useTheme } from '../context/ThemeContext';

interface MastheadProps {
  page: string;
  onPageChange: (page: string) => void;
}

export function Masthead({ page, onPageChange }: MastheadProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="mast">
      <div className="wrap mast-inner">
        <div className="brand">
          <div className="mark">Tux Street</div>
          <div className="issue">Gazette · No. 01</div>
        </div>
        <nav aria-label="Primary">
          <button
            type="button"
            aria-current={page === 'home' ? 'page' : undefined}
            onClick={() => onPageChange('home')}
          >
            The Case
          </button>
          <button
            type="button"
            aria-current={page === 'commands' ? 'page' : undefined}
            onClick={() => onPageChange('commands')}
          >
            Commands
          </button>
          <button
            type="button"
            aria-current={page === 'chat' ? 'page' : undefined}
            onClick={() => onPageChange('chat')}
          >
            Ask Tux
          </button>
        </nav>
        <div className="tools">
          <button className="ghost" type="button" onClick={toggleTheme}>
            {theme === 'night' ? 'Day' : 'Night'}
          </button>
          <button className="ghost solid" type="button" onClick={() => onPageChange('chat')}>
            Open a shell
          </button>
        </div>
      </div>
    </header>
  );
}
