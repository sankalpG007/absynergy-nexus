import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const offset = reduced ? 0 : y;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
      transition={{ duration: reduced ? 0.001 : 0.65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      {...(className ? { className } : {})}
    >
      {children}
    </motion.div>
  );
}
