export const claims = [
  {
    num: '01',
    title: 'You stop being a guest on your own machine.',
    body: 'No storefront in the Start menu. No surprise reboot mid-shift. The files are yours, the logs are readable, and nothing phones home unless you install something that does.',
  },
  {
    num: '02',
    title: 'The security model is boring on purpose.',
    body: 'Privilege is explicit. Updates arrive as packages, not as a second operating system hiding inside the first. You can see what changed. That is the whole trick.',
  },
  {
    num: '03',
    title: 'The computer gets quieter and faster.',
    body: 'Linux does not need a second computer’s worth of RAM to draw a desktop. Old laptops come back. New machines stop panting. You spend the leftover cycles on actual work.',
  },
  {
    num: '04',
    title: 'The community writes in public.',
    body: 'Man pages, wikis, Distrowatch, and twenty years of forum archaeology. When something breaks, the answer is usually already a grep away — and if it isn’t, you can read the source.',
  },
];

export const session: { p?: boolean; t: string }[] = [
  { p: true, t: 'whoami' },
  { t: 'someone tired of being a guest on their own machine' },
  { p: true, t: 'uname -a' },
  { t: 'Linux street 6.12.0-tux #1 SMP PREEMPT x86_64 GNU/Linux' },
  { p: true, t: 'cat /etc/reason' },
  { t: 'no silent telemetry\nupdates that do not hijack the morning\nyou can read every line that runs' },
  { p: true, t: 'echo $HOME' },
  { t: '/home/you — and this time it actually is' },
];

export const steps = [
  {
    title: 'Download the ISO',
    body: 'Get it from the project, not a random mirror blog. Verify the checksum if you are the sort of person who locks the door.',
    code: 'sha256sum fedora.iso\n# compare to the published checksum',
  },
  {
    title: 'Write a USB',
    body: 'Etcher or Fedora Media Writer if you want a button. dd if you already trust your hands.',
    code: 'sudo dd if=distro.iso of=/dev/sdX bs=4M status=progress conv=fsync',
  },
  {
    title: 'Back up Windows first',
    body: 'Not optional. Copy the things you would be sad to lose onto a second disk. Dual-boot is fine. Amnesia is not.',
    code: '# copy Documents, photos, browser profile\nrsync -a ~/ /media/backup/pre-linux/',
  },
  {
    title: 'Boot the stick',
    body: 'Restart, then mash the boot menu key — F12, Esc, or Del, depending on the manufacturer’s sense of humor. Disable Secure Boot only if the distro asks.',
    code: 'firmware → Boot Menu → USB',
  },
  {
    title: 'Walk the installer',
    body: 'Language, keyboard, network. Use the guided disk layout unless you already know you want a custom scheme.',
    code: '# when in doubt: erase disk, or install alongside Windows',
  },
  {
    title: 'Partition with intent',
    body: 'Keeping Windows? Leave its partition alone and install to free space. Going all-in? One root, maybe a separate home. Swap is usually handled for you now.',
    code: 'lsblk\n# know which disk is which before you say yes',
  },
  {
    title: 'First boot, then breathe',
    body: 'Create your user, set the timezone, skip every extra account you do not need. Update once. Then live with it for a week before you customize anything.',
    code: 'sudo apt update && sudo apt upgrade\n# or: sudo dnf upgrade / sudo pacman -Syu',
  },
];
