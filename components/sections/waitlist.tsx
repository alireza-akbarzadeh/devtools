'use client';

import { GlowEButton } from '../shared/glow-button';
import { HeaderSection } from '../shared/header-section';
import startBg from '@/assets/stars.png';
import gridLines from '../../assets/grid-lines.png';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'motion/react';
import { RefObject, useEffect, useRef } from 'react';

function useRelativeMousePosition(to: RefObject<HTMLElement>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    const rect = to.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
      mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return [mouseX, mouseY];
}

export function WaitList() {
  const sectionRef = useRef<HTMLElement>(null);
  const borderDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);
  const maskImage = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, black, transparent)`;

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderDivRef}
          className="group relative overflow-hidden rounded-xl border border-purple-200/50 bg-gradient-to-br from-purple-50/80 to-white py-24 dark:border-white/50 dark:from-transparent dark:to-transparent"
          style={{
            backgroundImage: `url(${startBg.src})`,
            backgroundPositionY,
          }}
          animate={{ backgroundPositionX: startBg.width }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {/* Hover effect layer */}
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)]/10 opacity-0 bg-blend-overlay transition duration-700 group-hover:opacity-100 dark:bg-[rgb(74,32,138)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              WebkitMaskImage: maskImage,
              maskImage,
            }}
          ></motion.div>

          {/* Content */}
          <div className="relative">
            <HeaderSection
              title="AI-driven SEO for everyone."
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
