import { motion } from "framer-motion";

const LineDivider = ({ ...props }) => {
  const transition = {
    type: "spring",
    clamp: true,
    friction: 60,
    tension: 40,
    mass: 0.25,
  };

  const variants = {
    hidden: { scaleX: 0, originX: 0, x: "-5%" },
    visible: { scaleX: 1, originX: 0, x: 0 },
  };

  return <motion.div variants={variants} transition={transition} {...props} />;
};

export default LineDivider;
