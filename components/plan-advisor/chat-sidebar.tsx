'use client';

import * as React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatSidebar({ isOpen, onClose }: ChatSidebarProps) {
  const [conversations] = React.useState([
    { id: 1, title: 'Previous consultation 1', date: '2024-02-20' },
    { id: 2, title: 'Previous consultation 2', date: '2024-02-19' },
  ]);

  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col bg-black transition-transform duration-300 ease-in-out md:relative md:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className="flex h-14 items-center border-b border-gray-800 px-2">
        <Button
          variant="outline"
          className="w-full justify-start space-x-2 border-gray-700 bg-transparent text-white hover:bg-gray-800"
        >
          <Plus className="size-4" />
          <span>New Consultation</span>
        </Button>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <div className="space-y-1">
          {conversations.map((chat) => (
            <Button
              key={chat.id}
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-gray-300 hover:bg-gray-800"
            >
              <div className="flex flex-col items-start text-sm">
                <span className="font-medium">{chat.title}</span>
                <span className="text-xs text-gray-500">{chat.date}</span>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
