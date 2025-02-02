export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatHistory {
  id: string;
  title: string;
  createdAt: Date;
  messages: Message[];
}

export interface ChatSidebarProps {
  chatHistory: ChatHistory[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatHistory[]>>;
  selectedChatId: string | null;
  setSelectedChatId: React.Dispatch<React.SetStateAction<string | null>>;
  createNewChat: () => void;
  deleteChat: (id: string) => void;
  renameChat: (id: string, title: string) => void;
}

export interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}
