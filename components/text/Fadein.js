import { motion } from "framer-motion";

const Fadein = ({ children, ...props }) => {
  const textVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      originX: 0,
      originY: 0,
      pointerEvents: "none",
    },
    visible: { y: 0, opacity: 1, originX: 0, originY: 0, pointerEvents: "all" },
  };
  const transition = {
    type: "spring",
    clamp: true,
    friction: 60,
    tension: 40,
    mass: 0.25,
  };
  return (
    <motion.div variants={textVariants} transition={transition} {...props}>
      {children}
    </motion.div>
  );
};

export default Fadein;
