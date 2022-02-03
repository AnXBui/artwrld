import { motion } from "framer-motion";
import styles from "./Word.module.scss";

const Word = ({ children, className, distance, ...props }) => {
  const wordVariants = {
    hidden: { y: distance || "130%", originX: 0, originY: 0 },
    visible: { y: "0%", originX: 0, originY: 0 },
  };
  const transition = {
    type: "spring",
    clamp: true,
    friction: 60,
    tension: 40,
    mass: 0.25,
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
