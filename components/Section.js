import { motion } from "framer-motion";

const Section = ({
  children,
  delay = 0,
  first = false,
  viewAmount = 0.8,
  ...props
}) => {
  const containerVariants = {
    hidden: { transition: { delayChildren: 0, staggerChildren: 0 } },
    visible: {
      transition: { delay: first ? 3 : delay, staggerChildren: 0.15 },
    },
  };
  return (
    <>
      {first ? (
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          exit="hidden"
          {...props}
        >
          {children}
        </motion.section>
      ) : (
        <motion.section
          animate="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: viewAmount }}
          variants={containerVariants}
          exit="hidden"
          {...props}
        >
          {children}
        </motion.section>
      )}
    </>
  );
};

export default Section;
