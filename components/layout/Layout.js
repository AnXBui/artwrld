import { motion } from "framer-motion";

export default function Layout({ children, className }) {
  const variants = {
    hidden: { opacity: 0, y: 50, transition: { when: "beforeChildren" } },
    visible: { opacity: 1, y: 0, transition: { when: "beforeChildren" } },
    exit: { opacity: 0, y: 50, transition: { when: "beforeChildren" } },
  };
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        x: { type: "string", stiffness: 100 },
        default: { duration: 0.35 },
        when: "beforeChildren",
      }}
      className={className}
    >
      {children}
    </motion.main>
  );
}
