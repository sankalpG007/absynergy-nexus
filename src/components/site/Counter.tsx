import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Counter({
  value,
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "0px",
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // If the counter is already visible when the page loads,
    // start the animation immediately.
    if (!inView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
      onComplete: () => {
        // Always guarantee the final value is displayed.
        setDisplay(value);
      },
    });

    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}