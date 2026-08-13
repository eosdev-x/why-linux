import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Masthead } from './components/Masthead';
import { LiveTerminal } from './components/LiveTerminal';
import { DistroMatcher } from './components/DistroMatcher';
import { InstallationGuide } from './components/InstallationGuide';
import { LinuxCommands } from './components/LinuxCommands';
import { AskTux } from './components/AskTux';
import { claims } from './data/gazette';

type Page = 'home' | 'commands' | 'chat';

function parsePage(hash: string): Page {
  const value = hash.replace('#', '');
  if (value === 'commands' || value === 'chat' || value === 'home') return value;
  return 'home';
}

function Gazette() {
  const [page, setPage] = useState<Page>(() => parsePage(window.location.hash));

  const go = (next: string) => {
    const resolved = parsePage(next);
    setPage(resolved);
    window.history.replaceState(null, '', `#${resolved}`);
  };

  useEffect(() => {
    const onHash = () => setPage(parsePage(window.location.hash));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <>
      <Masthead page={page} onPageChange={go} />
      <main>
        {page === 'home' && (
          <section className="page active">
            <div className="wrap hero">
              <div>
                <p className="kicker">A field guide for people who want their computer back</p>
                <h1>Windows is a lease. Linux is the deed.</h1>
                <p className="lede">
                  Tux Street is not another “discover the power of open source” brochure. It is a
                  switcher’s gazette: pick a distro that matches your temperament, walk the install
                  without folklore, and keep a command atlas by the keyboard.
                </p>
                <div className="cta-row">
                  <button
                    className="cta"
                    type="button"
                    onClick={() => document.getElementById('matcher')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  >
                    Find a distro
                  </button>
                  <button className="cta alt" type="button" onClick={() => go('commands')}>
                    Browse the atlas
                  </button>
                </div>
              </div>
              <LiveTerminal />
            </div>

            <div className="wrap">
              <hr className="rule" />
              <div className="claims">
                <h2>Why switch</h2>
                <div>
                  {claims.map((claim) => (
                    <article className="claim" key={claim.num}>
                      <div className="num">{claim.num}</div>
                      <div>
                        <h3>{claim.title}</h3>
                        <p>{claim.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <DistroMatcher onAskTux={() => go('chat')} />
              <InstallationGuide />
            </div>
          </section>
        )}

        {page === 'commands' && <LinuxCommands />}
        {page === 'chat' && <AskTux />}
      </main>
      <footer>
        <div className="wrap">
          <div>© {new Date().getFullYear()} Tux Street. A gazette for people leaving Windows.</div>
          <div>
            Inspired by{' '}
            <a href="https://distrowatch.com/" target="_blank" rel="noopener noreferrer">
              Distrowatch
            </a>{' '}
            — still the honest ledger of this world.
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Gazette />
    </ThemeProvider>
  );
}
