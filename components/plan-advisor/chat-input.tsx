'use client';

import * as React from 'react';
import { Send, Image, FileText, Mic, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
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
    <div className="border-t border-gray-800 p-4">
      <form onSubmit={onSubmit} className="relative space-y-4">
        <ChatInputActions />
        <div className="relative">
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
            className="min-h-[52px] w-full resize-none rounded-2xl border-gray-700 bg-[#262626] pr-12 text-white placeholder:text-gray-400 focus:border-gray-600"
            style={{
              maxHeight: '200px',
              overflow: 'auto',
            }}
          />
          <Button
            type="submit"
            size="icon"
            className="absolute bottom-1.5 right-1.5 size-8 rounded-xl bg-orange-600 p-2 hover:bg-orange-700 disabled:opacity-50"
            disabled={!input.trim()}
          >
            <Send className="size-4" />
          </Button>
        </div>
      </form>
      <div className="mt-2 text-center text-xs text-gray-500">
        Press Enter to send, Shift + Enter for new line
      </div>
    </div>
  );
}

function ChatInputActions() {
  return (
    <div className="flex items-center gap-2 px-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-300"
            >
              <Image className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Upload image</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-300"
            >
              <FileText className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Upload file</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-300"
            >
              <Mic className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Voice message</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="ml-auto text-gray-400 hover:text-gray-300"
      >
        <MoreHorizontal className="size-4" />
      </Button>
    </div>
  );
}