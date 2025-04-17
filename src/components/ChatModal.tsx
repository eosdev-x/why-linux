import { useState, useRef, useEffect } from 'react';
import { Send, X, Loader2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getChatCompletion, createSystemPrompt } from '../lib/api';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  // Initialize chat with system prompt
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([createSystemPrompt()]);
    }
    
    // Focus input when modal opens
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setError(null);
    setIsLoading(true);
    
    try {
      // Include system prompt in API call
      const apiMessages = [...messages, userMessage];
      
      const response = await getChatCompletion(apiMessages, {
        temperature: 0.7,
        venice_parameters: {
          include_venice_system_prompt: true
        }
      });
      
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error in chat:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle pressing Enter to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-2xl h-[80vh] bg-white dark:bg-dracula-background rounded-lg shadow-xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dracula-current">
          <h2 className="text-xl font-bold dark:text-dracula-foreground flex items-center">
            <span className={`mr-2 ${theme === 'dark' ? 'text-dracula-purple' : 'text-violet-600'}`}>AI</span>
            Chat with Tux
          </h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dracula-current transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-dracula-comment" />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.filter(m => m.role !== 'system').map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 ${
                message.role === 'user' 
                  ? 'ml-auto max-w-[80%]' 
                  : 'mr-auto max-w-[80%]'
              }`}
            >
              <div className={`p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-violet-100 dark:bg-dracula-purple/30 text-gray-800 dark:text-dracula-foreground rounded-tr-none'
                  : 'bg-gray-100 dark:bg-dracula-current text-gray-800 dark:text-dracula-foreground rounded-tl-none'
              }`}>
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
              <div className={`text-xs mt-1 text-gray-500 dark:text-dracula-comment ${
                message.role === 'user' ? 'text-right' : 'text-left'
              }`}>
                {message.role === 'user' ? 'You' : 'Tux AI'}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="mr-auto max-w-[80%] mb-4">
              <div className="p-3 rounded-lg bg-gray-100 dark:bg-dracula-current text-gray-800 dark:text-dracula-foreground rounded-tl-none flex items-center">
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Thinking...
              </div>
            </div>
          )}
          
          {error && (
            <div className="mx-auto max-w-[90%] mb-4 p-3 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
              <p>Error: {error}</p>
              <p className="text-sm mt-1">Please try again or refresh the page.</p>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-dracula-current">
          <div className="flex items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Linux..."
              className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-dracula-current bg-white dark:bg-dracula-current resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-dracula-purple dark:text-dracula-foreground"
              rows={2}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className={`ml-2 p-3 rounded-full ${
                isLoading || !input.trim()
                  ? 'bg-gray-300 dark:bg-dracula-current cursor-not-allowed'
                  : 'bg-violet-600 dark:bg-dracula-purple hover:bg-violet-700 dark:hover:bg-dracula-pink'
              } text-white transition-colors`}
              aria-label="Send message"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-dracula-comment text-center">
            Powered by Venice AI • Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}
