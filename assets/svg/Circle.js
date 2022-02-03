import { motion } from "framer-motion";
export default function Circle() {
  const transition = {
    type: "tween",
    duration: 0.75,
    ease: "easeInOut",
  };
  const variants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 2 },
  };
  return (
    <svg preserveAspectRatio="none" viewBox="0 0 100 100">
      <motion.ellipse
        variants={variants}
        transition={transition}
        vectorEffect="non-scaling-stroke"
        fill="none"
        cx="50"
        cy="50"
        rx="49"
        ry="49"
      />
    </svg>
  );
}
