'use client';

import { GlowEButton } from '../shared/glow-button';
import { HeaderSection } from '../shared/header-section';
import { GridLense } from '@/assets';

import startBg from '@/assets/stars.png';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'motion/react';
import { RefObject, useRef } from 'react';

function useRelativeMousePosition(to: RefObject<HTMLElement>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return [mouseX, mouseY];
}

export function WaitList() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  useMotionTemplate`radial-gradient(50% 50% at 50% 35%,black,transparent)`;

  const [mouseX, mouseY] = useRelativeMousePosition(sectionRef);

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="group relative overflow-hidden rounded-xl border border-purple-200/50 bg-gradient-to-br from-purple-50/80 to-white py-24 dark:border-white/50 dark:from-transparent dark:to-transparent"
          style={{
            backgroundImage: `url(${startBg.src})`,
            backgroundPositionY,
          }}
          animate={{ backgroundPositionX: startBg.width }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)]/10 bg-blend-overlay transition duration-700 [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0
            dark:bg-[rgb(74,32,138)]"
            style={{ backgroundImage: `url(${GridLense.src})` }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)]/10 opacity-0 bg-blend-overlay transition duration-700   group-hover:opacity-100
            dark:bg-[rgb(74,32,138)]"
            style={{ backgroundImage: `url(${GridLense.src})` }}
          ></motion.div>
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
        </motion.div>
      </div>
    </section>
  );
}
