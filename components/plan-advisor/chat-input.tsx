'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import * as React from 'react';
import { ChatInputActions } from './chat-action';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ input, setInput, onSubmit }: ChatInputProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = React.useState(52);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = Math.min(textarea.scrollHeight, 204);
      setHeight(newHeight);
    }
  };

  React.useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-background">
      <div className="mx-auto max-w-3xl px-4">
        <div className="flex flex-col space-y-4 border-t border-muted/50 bg-background py-4">
          <ChatInputActions />
          <div className="relative flex items-end">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                adjustTextareaHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              rows={1}
              className="min-h-[52px] w-full resize-none rounded-xl border-0 bg-muted/50 pr-12 text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary"
              style={{
                height: `${height}px`,
                maxHeight: '104px',
                overflow: 'auto',
                transition: 'height 200ms ease-out',
              }}
            />
            <div className="absolute right-1  top-1/2 -translate-y-1/2">
              <Button
                type="submit"
                size="icon"
                className="size-10 rounded-lg bg-primary p-2 hover:bg-primary/90 disabled:opacity-50"
                disabled={!input.trim()}
              >
                <Send className="size-4" />
              </Button>
            </div>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            Press Enter to send, Shift + Enter for new line
          </div>
        </div>
      </div>
    </div>
  );
}
