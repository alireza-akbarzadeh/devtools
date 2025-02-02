import { Button } from '@/components/ui/button';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import { Icons } from '../shared/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ChatSidebarProps } from './types';

export function ChatSidebar({
  chatHistory,
  setChatHistory,
  selectedChatId,
  setSelectedChatId,
  createNewChat,
  deleteChat,
  renameChat,
}: ChatSidebarProps) {
  React.useEffect(() => {
    // Create initial chat if history is empty
    if (chatHistory.length === 0) {
      createNewChat();
    }
  }, []);

  return (
    <div className="flex h-full flex-col gap-2 p-2">
      <Button
        className="w-full gap-2"
        variant="outline"
        onClick={createNewChat}
      >
        <Icons.add className="size-4" />
        New Chat
      </Button>
      <div className="flex-1 overflow-auto px-1 py-2">
        {chatHistory.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <Icons.message className="size-8" />
            <p>No chat history yet</p>
            <p>Start a new chat to begin</p>
          </div>
        ) : (
          <div className="space-y-1">
            {chatHistory.map((chat) => (
              <div key={chat.id} className="group relative">
                <Button
                  variant={selectedChatId === chat.id ? 'secondary' : 'ghost'}
                  className="w-full justify-start gap-2 truncate text-left text-sm font-normal"
                  onClick={() => setSelectedChatId(chat.id)}
                >
                  <Icons.message className="size-4 shrink-0" />
                  <span className="chat-title">{chat.title}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {chat.createdAt.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </Button>
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-6 opacity-0 group-hover:opacity-100"
                      >
                        <Icons.ellipsis className="size-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.preventDefault();
                          const button = e.currentTarget.closest('button');
                          const chatItem = button?.closest('.group');
                          const titleElement =
                            chatItem?.querySelector('.chat-title');
                          if (titleElement) {
                            const input = document.createElement('input');
                            input.value = chat.title;
                            input.className =
                              'w-full bg-transparent text-sm outline-none';
                            titleElement.replaceWith(input);
                            input.focus();

                            const handleBlur = () => {
                              if (
                                input.value.trim() &&
                                input.value !== chat.title
                              ) {
                                renameChat(chat.id, input.value);
                              }
                              input.replaceWith(titleElement);
                            };

                            input.addEventListener('blur', handleBlur);
                            input.addEventListener('keydown', (e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                input.blur();
                              }
                              if (e.key === 'Escape') {
                                input.value = chat.title;
                                input.blur();
                              }
                            });
                          }
                        }}
                      >
                        <Icons.edit className="mr-2 size-3" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icons.share className="mr-2 size-3" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => deleteChat(chat.id)}
                        className="text-destructive focus:text-destructive"
                      >
                        <Icons.trash className="mr-2 size-3" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
