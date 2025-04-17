import { useState } from 'react';
import { Search } from 'lucide-react';
import { commands } from '../data/linuxCommands';

// Command categories
const categories = [
  { id: 'file', name: 'File Management' },
  { id: 'process', name: 'Process Management' },
  { id: 'system', name: 'System Information' },
  { id: 'network', name: 'Networking' },
  { id: 'text', name: 'Text Processing' },
  { id: 'permissions', name: 'Permissions' },
  { id: 'compression', name: 'Compression' },
  { id: 'package', name: 'Package Management' },
];



export function LinuxCommands() {
  const [activeCategory, setActiveCategory] = useState('file');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter commands by active category and search query
  const filteredCommands = commands
    .filter(cmd => 
      (activeCategory === 'all' || cmd.category === activeCategory) &&
      (searchQuery === '' || 
       cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       cmd.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    // Sort alphabetically by name when "All" is selected or when searching
    .sort((a, b) => {
      if (activeCategory === 'all' || searchQuery !== '') {
        return a.name.localeCompare(b.name);
      }
      return 0; // maintain original order for category filters
    });

  return (
    <div className="pt-16 pb-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-6 text-center dark:text-dracula-foreground">
          Linux Commands Reference
        </h1>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 dark:text-dracula-comment" />
          </div>
          <input
            type="text"
            placeholder="Search commands..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-dracula-current rounded-md 
                      bg-white dark:bg-dracula-current text-gray-900 dark:text-dracula-foreground
                      focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-dracula-purple"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1 rounded-md text-sm transition-colors duration-300 ${
              activeCategory === 'all'
                ? 'bg-violet-600 dark:bg-dracula-purple text-white'
                : 'bg-gray-100 dark:bg-dracula-current text-gray-700 dark:text-dracula-comment hover:bg-gray-200 dark:hover:bg-dracula-current/70'
            }`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1 rounded-md text-sm transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-violet-600 dark:bg-dracula-purple text-white'
                  : 'bg-gray-100 dark:bg-dracula-current text-gray-700 dark:text-dracula-comment hover:bg-gray-200 dark:hover:bg-dracula-current/70'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Commands List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCommands.map((command, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-dracula-current rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-violet-700 dark:text-dracula-purple">{command.name}</h3>
              <p className="text-gray-600 dark:text-dracula-comment mb-3">{command.description}</p>
              
              <div className="bg-gray-100 dark:bg-dracula-background rounded-md p-3 mb-3 overflow-x-auto">
                <pre className="text-gray-800 dark:text-dracula-foreground font-mono text-sm">{command.syntax}</pre>
              </div>
              
              <div className="bg-gray-100 dark:bg-dracula-background rounded-md p-3 overflow-x-auto">
                <pre className="text-gray-800 dark:text-dracula-foreground font-mono text-sm">{command.example}</pre>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCommands.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-dracula-comment">
            No commands found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
