'use client';

import * as React from 'react';
import { ChatHeader } from './chat-header';
import { ChatMessages } from './chat-messages';
import { ChatInput } from './chat-input';
import { Message } from './types';

export function ChatInterface() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hello! I'm here to help you choose the perfect plan for your needs. What type of features are you looking for?",
    },
  ]);
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: 'user', content: input },
      {
        role: 'assistant',
        content:
          'Thank you for sharing. Let me analyze your needs and suggest the most suitable plan...',
      },
    ];

    setMessages(newMessages as Message[]);
    setInput('');
  };

  return (
    <div className="flex h-full flex-col">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput input={input} setInput={setInput} onSubmit={handleSubmit} />
    </div>
  );
}
