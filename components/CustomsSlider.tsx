"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export function CustomsSlider({ children }: { children: ReactNode }) {
  const railRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const rail = railRef.current;
    if (!rail || rail.scrollWidth <= 0) return;

    setProgress(
      Math.min(1, (rail.scrollLeft + rail.clientWidth) / rail.scrollWidth),
    );
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let animationFrame = 0;
    const scheduleUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateProgress);
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(rail);
    Array.from(rail.children).forEach((card) => resizeObserver.observe(card));
    rail.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      rail.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [updateProgress]);

  return (
    <div className="customs-slider-shell">
      <section
        ref={railRef}
        className="section customs-groups"
        aria-label="Zolldienstleistungen"
      >
        {children}
      </section>
      <div className="customs-slider-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </div>
  );
}
