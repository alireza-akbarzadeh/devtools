import { ChatInterface } from '@/components/plan-advisor/chat-interface';
import { ChatLayout } from '@/components/plan-advisor/chat-layout';

export default function PlanAdvisorPage() {
  return (
    <div className="h-screen w-full overflow-hidden bg-black">
      <ChatLayout />
    </div>
  );
}
