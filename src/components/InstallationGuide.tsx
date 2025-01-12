import React from 'react';

const steps = [
  {
    title: "Download the ISO",
    description: "Choose your preferred Linux distribution and download the ISO file from the official website."
  },
  {
    title: "Create Bootable USB",
    description: "Use tools like Rufus, Etcher, or dd to create a bootable USB drive with the ISO."
  },
  {
    title: "Back Up Your Data",
    description: "Before installation, back up all important data from your Windows system."
  },
  {
    title: "Boot from USB",
    description: "Restart your computer and boot from the USB drive (usually by pressing F12 or Del)."
  },
  {
    title: "Start Installation",
    description: "Follow the distribution's installer, choosing language and keyboard layout."
  },
  {
    title: "Partition Drives",
    description: "Create or modify partitions as needed. Consider dual-boot if keeping Windows."
  },
  {
    title: "Complete Setup",
    description: "Set up your user account, timezone, and other preferences."
  }
];

export function InstallationGuide() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-dracula-foreground">
        Installation Guide
      </h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 dark:bg-dracula-purple 
                          flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 dark:text-dracula-foreground">{step.title}</h3>
              <p className="text-gray-600 dark:text-dracula-comment">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}