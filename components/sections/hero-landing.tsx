'use client';

import { GlowEButton } from '../shared/glow-button';
import startBg from '@/assets/stars.png';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import { useRef } from 'react';

export function HeroLanding() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scrollOnY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <motion.section
      ref={sectionRef}
      style={{
        backgroundImage: `url(${startBg.src})`,
        backgroundPositionY: scrollOnY,
      }}
      className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]"
      aria-label="Hero section"
      role="banner"
      animate={{ backgroundPositionX: startBg.width }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 120 }}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] "
        aria-hidden="true"
      />
      <div
        className="position-center size-64 items-center justify-center rounded-full border border-white/20 bg-purple-500
          bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgba(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(148,69,255)]
          md:size-96"
        aria-hidden="true"
      />
      <motion.div
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ translateY: '-50%', translateX: '-50%' }}
        animate={{ rotate: '1turn' }}
        className="position-center size-[344px] rounded-full border border-white opacity-20 md:size-[580px]"
        aria-hidden="true"
      >
        <div className="position-center !left-0 size-2 rounded-full bg-white" />
        <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <div className="absolute left-full top-1/2 inline-flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white">
          <div className="size-2 rounded-full bg-white" />
        </div>
      </motion.div>
      <motion.div
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ translateY: '-50%', translateX: '-50%' }}
        animate={{ rotate: '-1turn' }}
        className="position-center size-[444px] rounded-full border border-dashed border-white/20 md:size-[780px]"
        aria-hidden="true"
      />
      <motion.div
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ translateY: '-50%', translateX: '-50%' }}
        animate={{ rotate: '1turn' }}
        className="position-center absolute size-[544px] rounded-full border border-white opacity-20 md:size-[980px]"
        aria-hidden="true"
      >
        <div className="position-center !left-0 size-2 rounded-full bg-white" />
        <div className="absolute left-full top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </motion.div>

      <div className="container relative mt-16">
        <h1
          className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.5))] bg-clip-text text-center
            text-8xl font-semibold tracking-tighter text-transparent md:text-[168px] md:leading-none"
        >
          AI SEO
        </h1>
        <p
          className="mx-auto mt-5 max-w-xl text-center text-lg text-white/70 md:text-xl"
          role="doc-subtitle"
        >
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <GlowEButton aria-label="Join the waitlist">
            Join waitlist
          </GlowEButton>
        </div>
      </div>
    </motion.section>
  );
}
