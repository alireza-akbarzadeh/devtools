'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';
import { Icons } from '@/components/shared/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useChat } from './hooks/use-chat';

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
                    className={`rounded-xl px-4 py-3 ${message.role === 'assistant' ? 'bg-muted/50' : 'bg-primary text-primary-foreground'}`}
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

      <form onSubmit={handleSubmit} className="border-t bg-background p-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="flex flex-1 gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="max-h-[200px] min-h-[52px] resize-none rounded-xl bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  style={{
                    overflow: 'auto',
                    transition: 'height 200ms ease-out',
                  }}
                />
                <div className="flex gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          className="shrink-0 rounded-xl hover:bg-muted/50"
                        >
                          <Icons.search className="size-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Search messages</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          className="shrink-0 rounded-xl hover:bg-muted/50"
                        >
                          <Icons.brain className="size-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>AI suggestions</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="submit"
                          size="icon"
                          className="shrink-0 rounded-xl"
                          disabled={isLoading || !input.trim()}
                        >
                          <Icons.send className="size-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Send message (Enter)</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-lg">
                      <Icons.image className="mr-2 size-4" />
                      Create Image
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Generate AI images</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-lg">
                      <Icons.lightbulb className="mr-2 size-4" />
                      Get advice
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Get AI recommendations</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-lg">
                      <Icons.fileText className="mr-2 size-4" />
                      Summarize text
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>AI text summarization</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="rounded-lg">
                      <Icons.helpCircle className="mr-2 size-4" />
                      Help me write
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>AI writing assistance</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
