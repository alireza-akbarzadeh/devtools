'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import * as React from 'react';
import { ChatInterface } from './chat-interface';
import { useChatHistory } from './hooks/use-chat';
import { ChatSidebar } from './chat-sidebar';

export function ChatLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const {
    chatHistory,
    setChatHistory,
    selectedChatId,
    setSelectedChatId,
    createNewChat,
    deleteChat,
    renameChat,
  } = useChatHistory();

  return (
    <div className="flex h-full bg-background">
      {/* Mobile sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-4 z-40 md:hidden"
          >
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 border-0 p-0 shadow-lg">
          <ChatSidebar
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            selectedChatId={selectedChatId}
            setSelectedChatId={setSelectedChatId}
            createNewChat={createNewChat}
            deleteChat={deleteChat}
            renameChat={renameChat}
          />
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className="hidden border-r bg-muted/10 md:block md:w-72">
        <ChatSidebar
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          selectedChatId={selectedChatId}
          setSelectedChatId={setSelectedChatId}
          createNewChat={createNewChat}
          deleteChat={deleteChat}
          renameChat={renameChat}
        />
      </div>

      {/* Main chat area */}
      <div className="relative flex-1 bg-background">
        <ChatInterface />
      </div>
    </div>
  );
}
