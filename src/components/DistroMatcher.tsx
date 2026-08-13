import { useState } from 'react';
import { DistroKey, distros, picks } from '../data/distros';

interface DistroMatcherProps {
  onAskTux: () => void;
}

export function DistroMatcher({ onAskTux }: DistroMatcherProps) {
  const [key, setKey] = useState<DistroKey>('windows');
  const d = distros[key];

  return (
    <section className="matcher" id="matcher">
      <div className="panel">
        <p className="kicker">Temperament, not brand loyalty</p>
        <h2>Choose by how you want to live</h2>
        <p className="sub">Six respectable desktops. One of them will fit your patience, not just your hardware.</p>
        <div className="picks">
          {picks.map(([id, title, sub]) => (
            <button
              key={id}
              type="button"
              className="pick"
              aria-pressed={key === id}
              onClick={() => setKey(id)}
            >
              <strong>{title}</strong>
              <span>{sub}</span>
            </button>
          ))}
        </div>
      </div>
      <article className="panel distro">
        <div>
          <div className="distro-top">
            <div>
              <div className="who">{d.who}</div>
              <h3>{d.name}</h3>
            </div>
          </div>
          <p>{d.blurb}</p>
          <div className="facts">
            {d.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </div>
        </div>
        <div className="actions">
          <a className="cta" href={d.url} target="_blank" rel="noopener noreferrer">
            Download {d.name}
          </a>
          <button className="cta alt" type="button" onClick={onAskTux}>
            Ask Tux about it
          </button>
        </div>
      </article>
    </section>
  );
}
