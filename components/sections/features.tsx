'use client';

import { ProductImage } from '@/assets';
import { HeaderSection } from '@/components/shared/header-section';
import { tabs } from '@/config/landing';
import React, { useState } from 'react';
import { FeatureTab } from '../feature-tab';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from 'motion/react';

export function Features() {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}% auto`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTabChange = (index: number) => {
    setSelectedTab(index);
    console.log(index);
    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: 'easeInOut',
    };
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions,
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions,
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions,
    );
  };

  return (
    <section id="features" className="py-20 md:py-24">
      <div className="max-w-8xl container  space-y-6">
        <HeaderSection
          titleClassName="text-5xl font-medium dark:text-white text-gray-900"
          subtitleClassName="dark:text-white/70 text-gray-600 text-lg md:text-xl mx-auto max-w-2xl text-center mt-5"
          title="Evaluate your SEO efforts."
          subtitle="From small startups to large enterprises. our AI-driven tool has revolutionized the way business approaches SEO."
        />
        <div className="flex flex-col gap-5 lg:flex-row">
          {tabs.map((feature, index) => (
            <FeatureTab
              key={feature.title}
              {...feature}
              onTabCLick={() => handleSelectedTabChange(index)}
            />
          ))}
        </div>
        <div className="rounded-xl border border-white/20 p-2.5">
          <motion.div
            className="relative aspect-video overflow-hidden rounded-lg border border-white/20 bg-cover bg-top"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${ProductImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
