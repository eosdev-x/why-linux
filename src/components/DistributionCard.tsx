import React from 'react';
import { Download } from 'lucide-react';

interface DistributionProps {
  name: string;
  description: string;
  logo: string;
  downloadUrl: string;
}

export function DistributionCard({ name, description, logo, downloadUrl }: DistributionProps) {
  return (
    <div className="bg-white dark:bg-dracula-current rounded-lg shadow-lg p-6 transition-all duration-300
                    hover:shadow-xl hover:scale-105 flex flex-col items-center">
      <img src={logo} alt={`${name} logo`} className="w-24 h-24 mb-4" />
      <h3 className="text-xl font-bold mb-2 dark:text-dracula-foreground">{name}</h3>
      <p className="text-gray-600 dark:text-dracula-comment text-center mb-4">{description}</p>
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-violet-600 dark:bg-dracula-purple text-white rounded-lg
                 hover:bg-violet-700 dark:hover:bg-dracula-pink transition-colors duration-300"
      >
        <Download className="w-4 h-4 mr-2" />
        Download
      </a>
    </div>
  );
}