'use client';

import * as React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatSidebar } from './chat-sidebar';
import { ChatInterface } from './chat-interface';

export function ChatLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="relative flex h-screen bg-black">
      <ChatSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex flex-1 flex-col bg-[#1A1A1A]">
        <div className="flex h-14 items-center border-b border-gray-800 px-4 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
}
