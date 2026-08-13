import { useMemo, useState } from 'react';
import { commands } from '../data/linuxCommands';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'file', name: 'Files' },
  { id: 'process', name: 'Processes' },
  { id: 'system', name: 'System' },
  { id: 'network', name: 'Network' },
  { id: 'text', name: 'Text' },
  { id: 'permissions', name: 'Permissions' },
  { id: 'compression', name: 'Archives' },
  { id: 'package', name: 'Packages' },
];

export function LinuxCommands() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const q = query.toLowerCase();
    return commands.filter(
      (cmd) =>
        (category === 'all' || cmd.category === category) &&
        (!q || cmd.name.toLowerCase().includes(q) || cmd.description.toLowerCase().includes(q))
    );
  }, [category, query]);

  return (
    <section className="page active" id="page-commands">
      <div className="wrap">
        <p className="kicker">Keep this next to the keyboard</p>
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', marginBottom: '1.2rem' }}>Command atlas</h1>
        <div className="atlas">
          <aside>
            <input
              className="search"
              type="search"
              placeholder="grep the atlas…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="cats">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={category === cat.id}
                  onClick={() => setCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </aside>
          <div className="cmd-grid">
            {rows.length === 0 && <p className="empty">Nothing in the atlas matches that.</p>}
            {rows.map((cmd) => (
              <article className="cmd-card" key={`${cmd.category}-${cmd.name}`}>
                <h3>{cmd.name}</h3>
                <p>{cmd.description}</p>
                <pre className="code">{`${cmd.syntax}\n${cmd.example}`}</pre>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
