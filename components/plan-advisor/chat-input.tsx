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
      const newHeight = Math.min(textarea.scrollHeight, 200);
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
    <div className="flex flex-col border-t border-gray-800 bg-background p-4">
      <ChatInputActions />
      <div
        className="relative flex w-full items-end transition-all duration-200 ease-out"
        style={{ minHeight: '52px' }}
      >
        <div className="absolute bottom-0 w-full">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              adjustTextareaHeight();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Message ChatGPT..."
            rows={1}
            className="w-full resize-none rounded-2xl border-0 bg-[#262626] pr-12 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-orange-500/20 focus:ring-offset-0"
            style={{
              height: `${height}px`,
              maxHeight: '200px',
              overflow: 'auto',
            }}
          />
          <Button
            type="submit"
            size="icon"
            className="absolute bottom-2 right-2 size-8 rounded-xl bg-orange-600 p-2 hover:bg-orange-700 disabled:opacity-50"
            disabled={!input.trim()}
          >
            <Send className="size-4" />
          </Button>
        </div>
        <div className="border-t border-gray-800 px-4 py-2 text-center text-xs text-gray-500">
          Press Enter to send, Shift + Enter for new line
        </div>
      </div>
    </div>
  );
}
