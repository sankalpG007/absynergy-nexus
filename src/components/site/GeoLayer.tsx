import { motion, useReducedMotion } from "motion/react";

const points = [
  { cx: 12, cy: 28 },
  { cx: 33, cy: 62 },
  { cx: 58, cy: 24 },
  { cx: 76, cy: 55 },
  { cx: 90, cy: 34 },
];

/** Very subtle animated survey/contour layer for the hero. */
export function GeoLayer() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="size-full opacity-[0.22]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.2 }}
      >
        <g stroke="var(--secondary-orange)" strokeWidth="0.12" fill="none">
          {[18, 30, 42, 54, 66, 78].map((y, index) => (
            <motion.path
              key={y}
              d={`M0 ${y} C 20 ${y - 6}, 40 ${y + 6}, 60 ${y - 3} S 90 ${y + 5}, 100 ${y - 2}`}
              animate={reduced ? {} : { x: [0, 3, 0] }}
              transition={{ duration: 22 + index * 3, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </g>
        <g stroke="var(--warm-cream)" strokeWidth="0.08" opacity="0.5">
          {[20, 40, 60, 80].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="100" />
          ))}
        </g>
        <g fill="var(--primary-orange)">
          {points.map((point, index) => (
            <motion.circle
              key={`${point.cx}-${point.cy}`}
              cx={point.cx}
              cy={point.cy}
              r="0.5"
              animate={reduced ? {} : { opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, delay: index * 0.8, ease: "easeInOut" }}
            />
          ))}
        </g>
        <g stroke="var(--primary-orange)" strokeWidth="0.08" opacity="0.45">
          {points.slice(0, -1).map((point, index) => {
            const next = points[index + 1]!;
            return (
              <line
                key={`l-${index}`}
                x1={point.cx}
                y1={point.cy}
                x2={next.cx}
                y2={next.cy}
              />
            );
          })}
        </g>
      </motion.svg>
    </div>
  );
}
