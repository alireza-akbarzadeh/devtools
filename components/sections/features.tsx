'use client';

import { ProductImage } from '@/assets';
import { HeaderSection } from '@/components/shared/header-section';
import { LottiePlayer } from '@/components/shared/lottie-player';
import { features } from '@/config/landing';

export function Features() {
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="max-w-8xl container space-y-6">
        <HeaderSection
          titleClassName="text-5xl font-medium dark:text-white text-gray-900"
          subtitleClassName="dark:text-white/70 text-gray-600 text-lg md:text-xl mx-auto max-w-2xl text-center mt-5"
          title="Evaluate your SEO efforts."
          subtitle="From small startups to large enterprises. our AI-driven tool has revolutionized the way business approaches SEO."
        />
        <div className="flex flex-col gap-5 lg:flex-row">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex items-center gap-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-2.5 dark:border-white/20 dark:bg-background lg:flex-1"
            >
              <div
                className="absolute inset-0 flex -translate-y-1/2 items-center bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
                style={{
                  transform: `translate3d(${feature.backgroundPositionX}%, ${feature.backgroundPositionY}%, ${feature.backgroundPositionZ}px)`,
                }}
              />
              <div className="relative size-14 rounded-lg border border-white/20"></div>
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                {feature.isNew && (
                  <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-xs text-purple-500">
                    New
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/20 p-2.5">
          <div
            className="relative aspect-video overflow-hidden rounded-lg border border-white/20 bg-cover bg-top"
            style={{ backgroundImage: `url(${ProductImage.src})` }}
          ></div>
        </div>
      </div>

      <LottiePlayer
        options={'/lottie/click.lottie'}
        width={56}
        height={56}
        showControls={false}
        className="custom-class"
      />
    </section>
  );
}
