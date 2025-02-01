import Image from 'next/image';
import { Star } from 'lucide-react';

import { testimonials } from '@/config/landing';
import { HeaderSection } from '@/components/shared/header-section';

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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.075] p-6 transition-colors hover:border-white/20 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-white/[0.075] dark:hover:border-white/20"
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
                <div className="relative size-12 overflow-hidden rounded-full border border-gray-200 after:absolute after:inset-0 after:bg-[rgb(170,81,255)] after:mix-blend-soft-light after:content-[''] dark:border-white/10">
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

              <div
                className="absolute inset-0 flex -translate-y-1/2 items-center bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-purple-500/20"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
