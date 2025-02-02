import * as React from 'react';
import { Message, ChatHistory } from '../types';

export function useChat() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          'This is a simulated AI response. The actual implementation would connect to your AI backend.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    messagesEndRef,
    handleSubmit,
  };
}

export function useChatHistory() {
  const [chatHistory, setChatHistory] = React.useState<ChatHistory[]>([]);
  const [selectedChatId, setSelectedChatId] = React.useState<string | null>(
    null,
  );

  React.useEffect(() => {
    if (chatHistory.length === 0) {
      createNewChat();
    }
  }, []);

  const createNewChat = () => {
    const newChat: ChatHistory = {
      id: Date.now().toString(),
      title: `New Chat ${chatHistory.length + 1}`,
      createdAt: new Date(),
      messages: [],
    };
    setChatHistory((prev) => [newChat, ...prev]);
    setSelectedChatId(newChat.id);
  };

  const deleteChat = (id: string) => {
    setChatHistory((prev) => prev.filter((chat) => chat.id !== id));
    if (selectedChatId === id) {
      setSelectedChatId(null);
    }
  };

  const renameChat = (id: string, newTitle: string) => {
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === id ? { ...chat, title: newTitle } : chat,
      ),
    );
  };

  return {
    chatHistory,
    setChatHistory,
    selectedChatId,
    setSelectedChatId,
    createNewChat,
    deleteChat,
    renameChat,
  };
}
