import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { DistributionCard } from './components/DistributionCard';
import { InstallationGuide } from './components/InstallationGuide';
import { Terminal, Shield, Zap, Code, Heart } from 'lucide-react';

const distributions = [
  {
    name: "Ubuntu",
    description: "Perfect for beginners, featuring a user-friendly interface and extensive software support.",
    logo: "https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png",
    downloadUrl: "https://ubuntu.com/download/desktop"
  },
  {
    name: "Fedora",
    description: "Leading-edge Linux distribution, balancing innovation with stability.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fedora_logo.svg/2048px-Fedora_logo.svg.png",
    downloadUrl: "https://getfedora.org/workstation/download/"
  },
  {
    name: "Linux Mint",
    description: "Traditional desktop experience with modern features and broad hardware support.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Linux_Mint_logo_without_wordmark.svg/1200px-Linux_Mint_logo_without_wordmark.svg.png",
    downloadUrl: "https://linuxmint.com/download.php"
  },
  {
    name: "Manjaro",
    description: "User-friendly Arch-based distribution with rolling releases.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Manjaro-logo.svg/2048px-Manjaro-logo.svg.png",
    downloadUrl: "https://manjaro.org/download/"
  },
  {
    name: "OpenSUSE",
    description: "Enterprise-grade distribution perfect for both desktop and server use.",
    logo: "https://static.opensuse.org/favicon.svg",
    downloadUrl: "https://get.opensuse.org/"
  },
  {
    name: "Debian",
    description: "The universal operating system, known for stability and security.",
    logo: "https://www.debian.org/logos/openlogo-nd.svg",
    downloadUrl: "https://www.debian.org/download"
  }
];

const advantages = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security",
    description: "Superior security model with frequent updates and robust permission system"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance",
    description: "Efficient resource usage and customizable system optimization"
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "Control",
    description: "Complete control over your system with powerful command-line tools"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Open Source",
    description: "Free and open-source software with transparent development"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Community",
    description: "Active community support and extensive documentation"
  }
];

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-dracula-background transition-colors duration-300">
        <ThemeToggle />
        
        {/* Hero Section */}
        <header className="py-20 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 dark:text-dracula-foreground">
            Experience the Power of Linux
          </h1>
          <p className="text-xl text-gray-600 dark:text-dracula-comment max-w-2xl mx-auto">
            Discover freedom, security, and performance with Linux - the open-source operating system
            that puts you in control.
          </p>
        </header>

        {/* Advantages Section */}
        <section className="py-16 px-4 bg-white dark:bg-dracula-current">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-dracula-foreground">
              Why Choose Linux?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="p-6 rounded-lg bg-gray-50 dark:bg-dracula-background
                                         hover:shadow-lg transition-all duration-300">
                  <div className="text-violet-600 dark:text-dracula-purple mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-dracula-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dracula-comment">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distributions Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-dracula-foreground">
              Choose Your Distribution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {distributions.map((dist, index) => (
                <DistributionCard key={index} {...dist} />
              ))}
            </div>
          </div>
        </section>

        {/* Installation Guide Section */}
        <section className="py-16 px-4 bg-white dark:bg-dracula-current">
          <InstallationGuide />
        </section>

        {/* Footer */}
<footer className="py-8 px-4 text-center text-gray-600 dark:text-dracula-comment">
  <p>© {new Date().getFullYear()} Tux Street - All rights reserved.</p>
  <p>This site was inspired by my favorite site <a style={{color:"#50FA7B"}} href="https://distrowatch.com/" target="_blank" rel="noopener noreferrer">Distrowatch</a>.</p>
</footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
