import { motion } from "framer-motion";

export default function Menu({ variants }) {
  const transition = { type: "spring", friction: 70, tension: 70, mass: 0.5 };
  return (
    <svg viewBox="0 0 18 14">
      <motion.path
        variants={variants[0]}
        transition={transition}
        d="M0 1.5H18V0.5H0V1.5Z"
      />
      <motion.path
        variants={variants[1]}
        transition={transition}
        d="M0 7.5H18V6.5H0V7.5Z"
      />
      <motion.path
        variants={variants[2]}
        transition={transition}
        d="M0 7.5H18V6.5H0V7.5Z"
      />
      <motion.path
        variants={variants[3]}
        transition={transition}
        d="M0 13.5H18V12.5H0V13.5Z"
      />
    </svg>
  );
}
