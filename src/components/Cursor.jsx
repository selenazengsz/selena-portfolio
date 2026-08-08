import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import "./Cursor.css";

// Custom cursor: a small dot locked to the pointer plus a spring-lagged ring
// that grows over interactive elements. Fine-pointer devices only; touch
// devices keep the native cursor (handled in index.css).
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 600, damping: 38, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 600, damping: 38, mass: 0.5 });
  const [hot, setHot] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      setHot(!!e.target.closest("a, button, [data-hover]"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="cursor-ring"
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hot ? 1.9 : 1, opacity: hot ? 1 : 0.7 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="cursor-dot"
        aria-hidden="true"
        style={{ x, y }}
        animate={{ opacity: hot ? 0 : 1 }}
      />
    </>
  );
}
