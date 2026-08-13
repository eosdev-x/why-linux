import { useEffect, useState } from 'react';
import { session } from '../data/gazette';

export function LiveTerminal() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setHtml(
        session
          .map((line) =>
            line.p
              ? `<span class="prompt">tux@street:~$</span> <span class="cmd">${line.t}</span>`
              : `<span class="out">${line.t}</span>`
          )
          .join('\n') + '\n<span class="prompt">tux@street:~$</span> <span class="caret"> </span>'
      );
      return;
    }

    let i = 0;
    let j = 0;
    let acc = '';
    let timer = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      if (i >= session.length) {
        setHtml(acc + '\n<span class="prompt">tux@street:~$</span> <span class="caret"> </span>');
        return;
      }
      const line = session[i];
      if (j === 0) acc += acc ? '\n' : '';
      if (line.p) {
        if (j === 0) acc += '<span class="prompt">tux@street:~$</span> <span class="cmd">';
        acc += line.t[j] || '';
        j += 1;
        if (j >= line.t.length) {
          acc += '</span>';
          i += 1;
          j = 0;
        }
        setHtml(acc + '<span class="caret"> </span>');
        timer = window.setTimeout(tick, 28);
      } else {
        acc += `<span class="out">${line.t}</span>`;
        i += 1;
        j = 0;
        setHtml(acc + '<span class="caret"> </span>');
        timer = window.setTimeout(tick, 220);
      }
    };

    tick();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <aside className="term" aria-label="Live terminal">
      <div className="term-bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span>tux@street — /etc/reason</span>
      </div>
      <div className="term-body" dangerouslySetInnerHTML={{ __html: html }} />
    </aside>
  );
}
