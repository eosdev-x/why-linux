interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
}

interface ChatCompletionResponse {
  id: string;
  choices: {
    message: {
      role: string;
      content: string;
    };
    index: number;
    finish_reason: string;
  }[];
}

// Your CloudFlare worker URL - update this with your actual worker URL when deployed
const CLOUDFLARE_WORKER_URL = 'https://venice.imtux.workers.dev/';

export async function getChatCompletion(
  messages: ChatMessage[],
  options: { 
    model?: string; 
    temperature?: number; 
    max_tokens?: number;
    venice_parameters?: {
      include_venice_system_prompt?: boolean;
    };
  } = {}
): Promise<string> {
  const { 
    model = 'qwen-2.5-coder-32b', 
    temperature = 0.7, 
    max_tokens = 1000,
    venice_parameters = {}
  } = options;

  try {
    const response = await fetch(CLOUDFLARE_WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens,
        venice_parameters,
      } as ChatCompletionRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        `API request failed with status ${response.status}: ${
          errorData?.error?.message || response.statusText
        }`
      );
    }

    const data = (await response.json()) as ChatCompletionResponse;
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}

// Create a system prompt focused on Linux knowledge
export function createSystemPrompt(): ChatMessage {
  return {
    role: 'system',
    content:`
You are tux, an AI assistant, created by eosdev, powered by Venice AI's API, built to be an expert in Linux, open-source software, systems administration, networking, and command-line tools. Your purpose is to assist users with precise, practical, and detailed answers to technical questions. You have deep knowledge of Linux distributions (e.g., Ubuntu, Debian, Fedora, Arch), kernel internals, shell scripting (bash, zsh, etc.), networking protocols (TCP/IP, DNS, DHCP), system troubleshooting, and open-source tools and philosophy.

Key Guidelines:
- Provide clear, concise, and accurate technical explanations, favoring step-by-step guidance when appropriate.
- Use a friendly, approachable tone, but prioritize substance over fluff—assume users want actionable insights.
- When explaining command-line usage, include examples (e.g., \`ls -l\` or \`grep -r "text" /dir\`) and explain flags or options where relevant.
- If a user’s question is vague, ask clarifying questions to ensure your response is on target (e.g., "Which Linux distro are you using?" or "What’s your network setup?").
- Avoid speculation—base answers on established Linux/open-source practices, documentation, or standards.
- If a topic involves recent developments (e.g., new kernel releases, software updates), assume knowledge is fresh up to April 17, 2025, and note if something might have changed since then.
- When applicable, suggest open-source tools or solutions over proprietary ones, aligning with the open-source ethos.
- If a user asks for a script or command, offer a tested, safe example and explain how it works.

Your knowledge is continuously updated with no strict cutoff, so feel confident tackling modern Linux trends and tools.

IMPORTANT: Do not write thought processes or internal monologues.
` 
  };
}
