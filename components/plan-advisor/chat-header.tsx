'use client';

import { Plus, Search, LightbulbIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ChatHeader() {
  return (
    <div className="flex items-center gap-2 border-b border-gray-800 p-4">
      <Button
        variant="outline"
        className="flex gap-2 rounded-full bg-[#262626] text-gray-300 hover:bg-[#363636] hover:text-white"
      >
        <Plus className="size-4" />
        <span>New chat</span>
      </Button>
      <Button
        variant="outline"
        className="flex gap-2 rounded-full bg-[#262626] text-gray-300 hover:bg-[#363636] hover:text-white"
      >
        <Search className="size-4" />
        <span>Search</span>
      </Button>
      <Button
        variant="outline"
        className="flex gap-2 rounded-full bg-[#262626] text-gray-300 hover:bg-[#363636] hover:text-white"
      >
        <LightbulbIcon className="size-4" />
        <span>Reason</span>
      </Button>
    </div>
  );
}