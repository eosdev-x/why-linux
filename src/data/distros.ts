export type DistroKey =
  | 'justworks'
  | 'newest'
  | 'windows'
  | 'rolling'
  | 'adult'
  | 'bedrock';

export interface Distro {
  who: string;
  name: string;
  blurb: string;
  facts: [string, string][];
  url: string;
}

export const distros: Record<DistroKey, Distro> = {
  justworks: {
    who: 'For the person who wants Tuesday to stay Tuesday',
    name: 'Ubuntu',
    blurb:
      'The default answer on purpose. Huge package library, polite installer, and a forum that has already had your exact problem.',
    facts: [
      ['Base', 'Debian, with training wheels that actually work'],
      ['Release', 'LTS every two years'],
      ['Best if', 'You want the path of least resistance'],
    ],
    url: 'https://ubuntu.com/download/desktop',
  },
  newest: {
    who: 'For the person who likes the paint still wet',
    name: 'Fedora',
    blurb:
      'Upstream of Red Hat. New kernel, new GNOME, no drama about it. The workstation that treats you like an adult.',
    facts: [
      ['Base', 'RPM / DNF'],
      ['Release', '~6 months, aggressively current'],
      ['Best if', 'You want modern defaults without rolling-release roulette'],
    ],
    url: 'https://fedoraproject.org/workstation/download/',
  },
  windows: {
    who: 'For the refugee who still likes a Start menu',
    name: 'Linux Mint',
    blurb:
      'Cinnamon desktop, familiar layout, codecs that just play the video. Windows, if Windows still respected you.',
    facts: [
      ['Base', 'Ubuntu LTS'],
      ['Desktop', 'Cinnamon'],
      ['Best if', 'You want the least culture shock'],
    ],
    url: 'https://linuxmint.com/download.php',
  },
  rolling: {
    who: 'For the tinkerer who does not want the hazing',
    name: 'Manjaro',
    blurb: 'Arch packages, Calamares installer, hardware detection that does the unkind parts for you.',
    facts: [
      ['Base', 'Arch, delayed a beat'],
      ['Release', 'Rolling'],
      ['Best if', 'You want AUR access without the first-weekend ritual'],
    ],
    url: 'https://manjaro.org/download/',
  },
  adult: {
    who: 'For the person who likes a control panel that means it',
    name: 'openSUSE',
    blurb:
      'YaST if you hate hunting config files. Leap for stability, Tumbleweed if you enjoy living slightly in the future.',
    facts: [
      ['Base', 'RPM / zypper'],
      ['Tools', 'YaST, Snapper'],
      ['Best if', 'You want enterprise bones on a desktop'],
    ],
    url: 'https://get.opensuse.org/',
  },
  bedrock: {
    who: 'For the person who wants the floor not to move',
    name: 'Debian',
    blurb: 'The universal OS. Slow on purpose. The thing everything else is standing on.',
    facts: [
      ['Base', 'Itself'],
      ['Release', 'Stable is actually stable'],
      ['Best if', 'You value boredom in the way bridges are boring'],
    ],
    url: 'https://www.debian.org/download',
  },
};

export const picks: [DistroKey, string, string][] = [
  ['justworks', 'Make it work', 'I want the popular, well-documented path.'],
  ['newest', 'Keep it current', 'New kernel, new desktop, still polite.'],
  ['windows', 'Feel like home', 'I am coming from Windows and I am tired.'],
  ['rolling', 'I will tinker', 'Rolling release, but skip the hazing.'],
  ['adult', 'Give me levers', 'I want a real control panel and snapshots.'],
  ['bedrock', 'Never surprise me', 'Stability over fashion.'],
];
