import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 → target once the element enters the viewport.
 * Uses requestAnimationFrame + IntersectionObserver and stops on unmount.
 * Respects `prefers-reduced-motion` by snapping to the final value.
 */
export function useAnimatedCounter(
  target: number,
  { duration = 1400, decimals = 0 }: { duration?: number; decimals?: number } = {},
) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    let rafId = 0;
    const start = (ts: number) => {
      const tick = (now: number) => {
        const elapsed = now - ts;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(target * eased);
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            start(performance.now());
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [target, duration]);

  const formatted = value.toFixed(decimals);
  return { ref, value: Number(formatted), formatted };
}