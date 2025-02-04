'use client';

import { ProductImage } from '@/assets';
import { HeaderSection } from '@/components/shared/header-section';
import { features } from '@/config/landing';
import React from 'react';
import { FeatureTab } from '../feature-tab';

export function Features() {
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
          {features.map((feature) => (
            <FeatureTab {...feature} />
          ))}
        </div>
        <div className="rounded-xl border border-white/20 p-2.5">
          <div
            className="relative aspect-video overflow-hidden rounded-lg border border-white/20 bg-cover bg-top"
            style={{ backgroundImage: `url(${ProductImage.src})` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
