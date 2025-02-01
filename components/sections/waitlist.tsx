import { GlowEButton } from '../shared/glow-button';
import { HeaderSection } from '../shared/header-section';
import { StarsBg, GridLense } from '@/assets';

export function WaitList() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-xl border border-purple-200/50 bg-gradient-to-br from-purple-50/80 to-white py-24 dark:border-white/50 dark:from-transparent dark:to-transparent"
          style={{ backgroundImage: `url(${StarsBg.src})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)]/10 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] 
            dark:bg-[rgb(74,32,138)]"
            style={{ backgroundImage: `url(${GridLense.src})` }}
          ></div>
          <div className="relative">
            <HeaderSection
              title="Ai-driven SEO for everyone."
              subtitle="Achieve clear, impactful results without the complexity."
              titleClassName="text-5xl text-center md:text-6xl max-w-sm mx-auto text-gray-900 dark:text-white"
              subtitleClassName="text-gray-600 dark:text-white/70 px-4 text-lg md:text-xl mx-auto max-w-xl"
            />
            <div className="mt-5 flex justify-center">
              <GlowEButton>Join WaitList</GlowEButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
