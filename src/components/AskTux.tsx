import { FormEvent, useRef, useState } from 'react';
import { commands } from '../data/linuxCommands';

interface Bubble {
  who: 'you' | 'tux';
  text: string;
}

function answer(q: string): string {
  const s = q.toLowerCase();
  const hit = commands.find((cmd) => s.includes(cmd.name) && cmd.name.length > 1);
  if (s.includes('mint') || s.includes('windows')) {
    return 'Mint is the soft landing. Cinnamon looks like the desktop you already have, on Ubuntu LTS bones. Download it if you want the least argument with your muscle memory.';
  }
  if (s.includes('fedora')) {
    return 'Fedora Workstation if you want new GNOME and a clean DNF life. It moves every six months. That is a feature.';
  }
  if (s.includes('ubuntu')) {
    return 'Ubuntu is the crowded restaurant: slower service, but somebody at the next table has already sent back the same dish. Fine first distro. Not the only one.';
  }
  if (s.includes('debian')) {
    return 'Debian Stable is a stone floor. If you hate surprises more than you love new toys, start there.';
  }
  if (s.includes('manjaro') || s.includes('arch')) {
    return 'Manjaro is Arch with the sharp corners taped. You still get the AUR. You skip the first-weekend rite of passage.';
  }
  if (s.includes('suse') || s.includes('yast')) {
    return 'openSUSE if you want YaST and Snapper instead of folklore. Leap is calm. Tumbleweed is current.';
  }
  if (s.includes('install') || s.includes('usb') || s.includes('dual')) {
    return 'Back up first. Write the ISO to USB. Boot the stick. If you keep Windows, install into free space and do not format the NTFS partition because you were in a hurry.';
  }
  if (hit) return `${hit.name} — ${hit.description}. Syntax: ${hit.syntax}. Try: ${hit.example}`;
  if (s.includes('why')) {
    return 'Because the machine should work for you, not the other way around. Updates you can read. Permissions you can see. A desktop that does not sell you a second desktop.';
  }
  return 'Narrow it a little. Name a distro, an install worry, or a command. I am a gazette, not an oracle.';
}

export function AskTux() {
  const [log, setLog] = useState<Bubble[]>([
    {
      who: 'tux',
      text: 'Ask me about a distro, an install step, or a command. I live on this page — no cloud required.',
    },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  const send = (e: FormEvent) => {
    e.preventDefault();
    const v = input.trim();
    if (!v) return;
    setInput('');
    setLog((prev) => [...prev, { who: 'you', text: v }]);
    window.setTimeout(() => {
      setLog((prev) => [...prev, { who: 'tux', text: answer(v) }]);
      endRef.current?.scrollIntoView({ block: 'end' });
    }, 180);
  };

  return (
    <section className="page active">
      <div className="wrap">
        <div className="chat-shell">
          <div className="chat-head">
            tux@street — local expert, no telemetry · ask about distros, installs, or commands
          </div>
          <div className="log">
            {log.map((msg, i) => (
              <div key={`${msg.who}-${i}`} className={`bubble${msg.who === 'you' ? ' user' : ''}`}>
                <span className="who">{msg.who === 'you' ? 'you@street' : 'tux@street'}:~$</span>{' '}
                {msg.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form className="composer" onSubmit={send}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              placeholder="Ask Tux why Fedora instead of Ubuntu…"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
