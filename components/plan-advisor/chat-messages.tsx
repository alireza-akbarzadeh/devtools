import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Message } from './types';

interface ChatMessagesProps {
  messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.role === 'assistant' && (
              <div className="flex size-8 items-center justify-center rounded-full bg-gray-800 text-white">
                AI
              </div>
            )}
            <div
              className={cn(
                'max-w-[80%] rounded-lg px-4 py-2',
                message.role === 'user'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-800 text-gray-100',
              )}
            >
              {message.content}
            </div>
            {message.role === 'user' && (
              <div className="flex size-8 items-center justify-center rounded-full bg-gray-700 text-white">
                You
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}