'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Icons } from '@/components/shared/icons';
import * as React from 'react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ input, setInput, onSubmit }: ChatInputProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = Math.min(textarea.scrollHeight, 300);
      textarea.style.height = `${scrollHeight}px`
    }
  };

  React.useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
      setInput('');
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 p-4">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-lg bg-[#1E1E1E] p-2">
            <Button
              variant="ghost"
              size="icon"
              className="size-8 shrink-0 rounded-lg text-gray-400 hover:bg-muted/20"
            >
              <Icons.search className="size-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 shrink-0 rounded-lg text-gray-400 hover:bg-muted/20"
            >
              <Icons.brain className="size-4" />
              <span className="sr-only">Reason</span>
            </Button>
            <div className="relative flex-1">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  adjustTextareaHeight();
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                rows={1}
                className="!focus:ring-0  block w-full resize-none border-none bg-transparent py-2 pr-10 text-sm text-gray-300 outline-none placeholder:text-gray-500 focus:outline-none"
                style={{
                  minHeight: '20px',
                  maxHeight: '300px',
                  overflow: 'hidden',
                }}
              />
              <div className="absolute bottom-2 right-1 translate-y-2">
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="mt-2 size-7 rounded-md p-1.5  disabled:opacity-50"
                  disabled={!input.trim()}
                >
                  <Icons.send className="size-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="px-2 text-center">
            <span className="text-xs text-gray-500">
              Press{' '}
              <kbd className="rounded bg-gray-700/50 px-1 py-0.5 text-gray-400">
                Enter
              </kbd>{' '}
              to submit,
              <kbd className="ml-1 rounded bg-gray-700/50 px-1 py-0.5 text-gray-400">
                Shift + Enter
              </kbd>{' '}
              for new line
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
