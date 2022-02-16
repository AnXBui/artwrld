// import LinkTo from "../LinkTo";
import styles from "./Newsletter.module.scss";
import { motion } from "framer-motion";
import LineDivider from "../LineDivider";

export default function Newsletter({ type = "default", form = true }) {
  const transition = {
    type: "spring",
    clamp: true,
    friction: 60,
    tension: 40,
    mass: 0.25,
  };

  const titleVariants = {
    hidden: { opacity: 0, y: "30%" },
    visible: { opacity: 1, y: "0%" },
  };

  const containerVariants = {
    hidden: { transition: { staggerChildren: 0 } },
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const emblemVariants = {
    hidden: { scale: 0, y: "50%" },
    visible: { scale: 1, y: 0 },
  };

  return (
    <motion.section
      animate="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      exit="hidden"
      className={
        type == "home"
          ? styles.home
          : type == "about"
          ? styles.about
          : styles.footer
      }
      id={
        type == "home" ? "homeNewsletter" : type == "about" ? "homeAbout" : null
      }
    >
      {type == "about" ? (
        <>
          <LineDivider className={styles.divTop} />
          <motion.div
            variants={emblemVariants}
            transition={transition}
            className={styles.emblem}
            ariaLabel="First drop - Spring 2022"
          >
            {/* <h3>First drop</h3>
            <p>Spring 2022</p> */}
          </motion.div>
          <LineDivider className={styles.divBot} />
        </>
      ) : null}

      <motion.h2
        className={form ? null : styles.formTitle}
        variants={titleVariants}
        transition={transition}
      >
        {form ? (
          type == "default" ? (
            `Subscribe to our newsletter to receive the latest updates`
          ) : (
            `Subscribe to our newsletter for the latest updates`
          )
        ) : (
          <>
            Contact us at{" "}
            <a
              href={"mailto:info@artwrld.com"}
              rel="noreferrer"
              target="_blank"
            >
              info@artwrld.com
            </a>{" "}
            for more information
          </>
        )}
      </motion.h2>

      {form ? (
        <form className={styles.form}>
          <motion.input
            type="email"
            placeholder="Enter your email"
            variants={titleVariants}
            transition={transition}
          ></motion.input>
          <motion.button
            title="Subscribe"
            variants={titleVariants}
            transition={transition}
          >
            <span>Subscribe</span>
          </motion.button>
        </form>
      ) : null}
    </motion.section>
  );
}
