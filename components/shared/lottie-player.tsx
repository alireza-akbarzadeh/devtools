'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import { cn } from '@/lib/utils';

interface LottiePlayerProps {
  options: any;
  height?: number;
  width?: number;
  className?: string;
  containerClassName?: string;
  showControls?: boolean;
}

export function LottiePlayer({
  options,
  height = 400,
  width = 400,
  className,
  containerClassName,
  showControls = false,
}: LottiePlayerProps) {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Load animation data
    const loadAnimation = async () => {
      try {
        if (typeof options === 'string') {
          const response = await fetch(options);
          const data = await response.json();
          setAnimationData(data);
        } else {
          setAnimationData(options);
        }
      } catch (error) {
        console.error('Error loading animation:', error);
      }
    };

    loadAnimation();
  }, [options]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={cn('relative', containerClassName)}>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        isStopped={isStopped}
        isPaused={isPaused}
        isClickToPauseDisabled={true}
        className={className}
      />

      {showControls && (
        <div className="mt-4 flex justify-center gap-2">
          <button
            className="rounded-md bg-primary px-3 py-1 text-sm text-white hover:bg-primary/90"
            onClick={() => setIsStopped(true)}
          >
            Stop
          </button>
          <button
            className="rounded-md bg-primary px-3 py-1 text-sm text-white hover:bg-primary/90"
            onClick={() => setIsStopped(false)}
          >
            Play
          </button>
          <button
            className="rounded-md bg-primary px-3 py-1 text-sm text-white hover:bg-primary/90"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
      )}
    </div>
  );
}
