import ArrowH from "../../assets/svg/ArrowH";

import { motion } from "framer-motion";
import LinkTo from "../LinkTo";
import styles from "./HomeLink.module.scss";

export default function HomeLink() {
  const textVariants = {
    hidden: { y: "130%", x: 0, rotate: 8, originX: 0, color: "black" },
    visible: { y: "0%", x: 0, rotate: 0, originX: 0, color: "black" },
  };

  const lineVariants = {
    hidden: { height: "2px", originX: 0, scaleX: 0, x: "-20%" },
    visible: { height: "2px", originX: 0, scaleX: 1, x: "0%" },
  };
  const containerTransition = {
    staggerChildren: 0.25,
  };

  const linkTransition = {
    staggerChildren: 0.1,
  };

  const linkVariants = {
    hidden: { pointerEvents: "none" },
    visible: { pointerEvents: "all" },
  };

  const transition = {
    type: "spring",
    clamp: true,
    friction: 60,
    tension: 40,
    mass: 0.25,
  };

  return (
    <motion.section
      animate="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      exit="hidden"
      transition={containerTransition}
      className={styles.section}
    >
      <LinkTo
        transition={linkTransition}
        className={styles.link}
        variants={linkVariants}
        href={"/about"}
      >
        <motion.div variants={lineVariants} transition={transition} />
        <b>
          <motion.span
            title="About us"
            variants={textVariants}
            transition={transition}
          >
            About us
          </motion.span>
        </b>
        <ArrowH />
      </LinkTo>
      <LinkTo
        transition={linkTransition}
        className={styles.link}
        variants={linkVariants}
        href={"/artists"}
      >
        <motion.div variants={lineVariants} transition={transition} />
        <b>
          <motion.span
            title="Meet the artists"
            variants={textVariants}
            transition={transition}
          >
            Meet the artists
          </motion.span>
        </b>
        <ArrowH />
      </LinkTo>
    </motion.section>
  );
}
