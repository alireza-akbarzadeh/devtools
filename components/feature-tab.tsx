import React, { useEffect, useRef } from 'react';
import { Icons } from './shared/icons';
import {
  motion,
  motionValue,
  useMotionTemplate,
  useMotionValue,
  animate,
  ValueAnimationTransition,
} from 'motion/react';

type FeatureTabProps = {
  icon: string;
  title: string;
  isNew: boolean;
  onTabCLick: () => void;
};

export function FeatureTab(props: FeatureTabProps) {
  const { icon, title, isNew, onTabCLick } = props;

  const tabRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumFerence = height * 2 + width * 2;
    const times = [
      0,
      width / circumFerence,
      (width + height) / circumFerence,
      (width * 2 + height) / circumFerence,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [xPercentage, yPercentage]);

  return (
    <div
      onClick={onTabCLick}
      role="button"
      aria-label="selected Tab Button"
      ref={tabRef}
      key={title}
      className="group relative flex items-center gap-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-2.5 dark:border-white/20 dark:bg-background lg:flex-1"
    >
      <motion.div
        style={{ maskImage }}
        className=" absolute inset-0 -m-px rounded-lg border-2 border-[#A369ff]"
      ></motion.div>
      <div
        className="absolute inset-0 flex -translate-y-1/2 items-center bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex size-14 items-center justify-center rounded-lg border border-white/20">
        {Icons[icon] &&
          React.createElement(Icons[icon], {
            className: 'w-6 h-6 text-gray-900 dark:text-white',
          })}
      </div>
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {isNew && (
          <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-xs text-purple-500">
            New
          </span>
        )}
      </div>
    </div>
  );
}
