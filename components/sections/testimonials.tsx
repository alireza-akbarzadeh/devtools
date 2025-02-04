'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonials } from '@/config/landing';
import { HeaderSection } from '@/components/shared/header-section';
import { motion } from 'motion/react';

export function Testimonials() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="testimonials-title">
      <div className="container max-w-7xl" id="testimonials">
        <HeaderSection
          title="Trusted by Industry Leaders"
          titleClassName="text-gradient_indigo-purple text-4xl md:text-5xl font-medium text-center"
          subtitleClassName="text-gray-600 dark:text-white/70 text-lg md:text-xl mx-auto max-w-2xl text-center mt-5"
          subtitle="See how our AI-powered SEO tool is transforming businesses across different industries."
        />

        {/* Scrollable Wrapper */}
        <div className="relative mt-16 overflow-hidden">
          <motion.div
            initial={{ translate: '-50%' }}
            animate={{ translate: '0' }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
            className="scrollbar-hide flex flex-none  snap-mandatory  gap-6 overflow-x-auto scroll-smooth pr-5 [mask:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-[calc(100%/3-1rem)] shrink-0 snap-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.075] p-6 transition-colors hover:border-white/20 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-white/[0.075] dark:hover:border-white/20"
              >
                <div className="mb-4 flex items-center gap-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-purple-500 text-purple-500"
                    />
                  ))}
                </div>
                <blockquote>
                  <p className="text-base leading-relaxed text-gray-600 dark:text-white/80">
                    {testimonial.review}
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative size-12 overflow-hidden rounded-full border border-gray-200 dark:border-white/10">
                    <Image
                      src={testimonial.image}
                      alt={`Avatar for ${testimonial.name}`}
                      className="border border-gray-200 object-cover grayscale dark:border-white/30"
                      fill
                      sizes="(max-width: 768px) 48px, 48px"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-white/60">
                      {testimonial.job}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
