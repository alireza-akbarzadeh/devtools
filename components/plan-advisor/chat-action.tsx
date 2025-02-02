'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FileText, Image, Mic, MoreHorizontal } from 'lucide-react';

export function ChatInputActions() {
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
