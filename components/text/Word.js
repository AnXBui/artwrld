import { motion } from "framer-motion";
import styles from "./Word.module.scss";

const Word = ({ children, className, distance, hovered, ...props }) => {
  const wordVariants = {
    hidden: {
      y: distance || "130%",
      rotate: 10,
      originX: 0,
      originY: 0,
      pointerEvents: "none",
    },
    visible: {
      y: "0%",
      originX: 0,
      rotate: 0,
      originY: 0,
      pointerEvents: "all",
    },
    hovered: {
      y: "-130%",
      originX: 0,
      rotate: 0,
      originY: 0,
      pointerEvents: "all",
    },
  };
  const transition = {
    type: "spring",
    clamp: true,
    friction: 70,
    tension: 30,
    mass: 0.2,
  };
  return (
    <motion.span
      variants={wordVariants}
      className={`${styles.w} ${className}`}
      transition={transition}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Word;
