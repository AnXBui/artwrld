import Logo from "../assets/svg/Logo";
import Menu from "../assets/svg/Menu";
import LinkTo from "./LinkTo";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import styles from "./Header.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const Header = ({ location }) => {
  const transition = {
    type: "spring",
    clamp: true,
    friction: 60,
    tension: 40,
    mass: 0.25,
  };
  const mobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const buttonVariants = {
    inactive: { background: "black", "--svgColor": "white" },
    active: { background: "white", "--svgColor": "black" },
  };

  const menuSvgVariants = [
    {
      inactive: { scaleX: 1, originX: 0 },
      active: { scaleX: 0, originX: 0 },
    },
    {
      inactive: { rotate: 0 },
      active: { rotate: 135 },
    },
    {
      inactive: { rotate: 0 },
      active: { rotate: -135 },
    },
    {
      inactive: { scaleX: 1, originX: 1 },
      active: { scaleX: 0, originX: 1 },
    },
  ];

  const navMobileLinkVariants = {
    hidden: (i) => ({
      y: "100%",
      rotate: 10,
      transition: { ...transition },
    }),
    visible: (i) => ({
      y: "0%",
      rotate: 0,
      transition: { delay: i * 0.1, ...transition },
    }),
  };

  const navMobileContainerVarients = {
    hidden: { height: "0" },
    visible: { height: "100vh" },
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.header}>
      <LinkTo className={styles.logo} href="/">
        <Logo />
      </LinkTo>

      {mobile ? (
        <motion.button
          aria-label={`${openMenu ? "Close" : "Open"} menu`}
          className={styles.button}
          animate={openMenu ? "active" : "inactive"}
          variants={buttonVariants}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu variants={menuSvgVariants} />
        </motion.button>
      ) : null}
      <AnimatePresence>
        {!mobile || (mobile && openMenu) ? (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transition}
            variants={mobile ? navMobileContainerVarients : null}
            className={styles.nav}
          >
            <motion.div className={styles.mobileBackground}>
              <motion.div className={styles.navLinks}>
                <LinkTo onClick={() => setOpenMenu(false)} href="/about">
                  <motion.span
                    transition={transition}
                    custom={0}
                    variants={navMobileLinkVariants}
                  >
                    About
                  </motion.span>
                </LinkTo>
                <LinkTo onClick={() => setOpenMenu(false)} href="/artists">
                  <motion.span
                    transition={transition}
                    custom={1}
                    variants={navMobileLinkVariants}
                  >
                    Artists
                  </motion.span>
                </LinkTo>
              </motion.div>
              {mobile ? (
                <div className={styles.social}>
                  <p>Social Media List</p>
                </div>
              ) : null}
            </motion.div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
