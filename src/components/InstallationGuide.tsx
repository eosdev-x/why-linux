import { useState } from 'react';
import { steps } from '../data/gazette';

export function InstallationGuide() {
  const [index, setIndex] = useState(0);
  const step = steps[index];

  return (
    <section className="install">
      <p className="kicker">From ISO to first boot</p>
      <div className="steps">
        <div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', letterSpacing: '-.03em', margin: '.2rem 0 1rem' }}>
            Installation, without the campfire stories
          </h2>
          <div className="step-list">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className="step"
                aria-current={i === index ? 'step' : undefined}
                onClick={() => setIndex(i)}
              >
                <b>{String(i + 1).padStart(2, '0')}  {s.title}</b>
              </button>
            ))}
          </div>
        </div>
        <div className="panel step-copy">
          <div className="who">Step {String(index + 1).padStart(2, '0')}</div>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
          <pre className="code">{step.code}</pre>
        </div>
      </div>
    </section>
  );
}
