'use client';

import * as React from 'react';

import { Avatar } from '@/components/ui/avatar';
import { Icons } from '@/components/shared/icons';
import { useChat } from './hooks/use-chat';
import { ChatInput } from './chat-input';

export function ChatInterface() {
  const { messages, input, setInput, isLoading, messagesEndRef, handleSubmit } =
    useChat();

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`group flex items-start gap-4 ${message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <Avatar className="mt-1 size-8 shrink-0">
                  <div
                    className={`flex size-full items-center justify-center rounded-full ${message.role === 'assistant' ? 'bg-primary' : 'bg-muted'}`}
                  >
                    {message.role === 'assistant' ? (
                      <Icons.bot className="size-5 text-primary-foreground" />
                    ) : (
                      <Icons.user className="size-5 text-muted-foreground" />
                    )}
                  </div>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div
                    className={`rounded-xl px-4 py-3 ${message.role === 'assistant' ? 'bg-muted/50' : 'bg-primary/20 text-foreground'}`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <time className="text-[0.6875rem] text-muted-foreground">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </time>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3">
                <Avatar className="mt-1 size-8 shrink-0">
                  <div className="flex size-full items-center justify-center rounded-full bg-primary">
                    <Icons.bot className="size-5 text-primary-foreground" />
                  </div>
                </Avatar>
                <div className="flex items-center gap-2 rounded-xl bg-muted/50 px-4 py-3 text-muted-foreground">
                  <Icons.spinner className="size-4 animate-spin" />
                  AI is thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
      <ChatInput input={input} setInput={setInput} onSubmit={handleSubmit} />
    </div>
  );
}
