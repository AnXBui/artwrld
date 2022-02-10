import styles from "./ArtistModule.module.scss";
import { useState, useRef } from "react";
import Image from "next/image";
import ArrowH from "../../assets/svg/ArrowH";
import Close from "../../assets/svg/Close";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Fadein from "../text/Fadein";

const ArtistModule = ({ data, initialIndex, exitFunction }) => {
  const [currentArtist, setCurrentArtist] = useState(initialIndex);
  const containerRef = useRef(null);
  const { name, bio, photo } = data[currentArtist];
  const nextArtistIndex = (currentArtist + 1) % data.length;
  const prevArtistIndex =
    currentArtist == 0 ? data.length - 1 : currentArtist - 1;
  const mobile = useMediaQuery({
    query: "(max-width: 501px)",
  });

  const sectionVariants = {
    hidden: { width: "0%", x: -200 },
    visible: { width: "100%", x: 0 },
    exit: { width: "0%", x: -200 },
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -100, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: 100, filter: "blur(10px)" },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  };

  const photoVariants = {
    hidden: {
      opacity: 0,
      x: -400,
      y: -400,
      rotate: -60,
      scale: 0.3,
      originX: "0%",
      originY: "0%",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      originX: "50%",
      originY: "50%",
    },
    exit: {
      opacity: 0,
      x: 400,
      y: 400,
      rotate: 60,
      scale: 0.5,
      originX: "50%",
      originY: "50%",
    },
  };

  const photoInnerVariants = {
    hidden: {
      scale: 1.5,
      x: "60%",
      y: "60%",
      rotate: 20,
      originX: "0%",
      originY: "0%",
    },
    visible: {
      scale: 1,
      x: "0%",
      y: "0%",
      rotate: 0,
      originX: "50%",
      originY: "50%",
    },
    exit: {
      scale: 1,
      x: "0%",
      y: "0%",
      rotate: -20,
      originX: "50%",
      originY: "50%",
    },
  };

  const captionVariations = {
    hidden: { opacity: 0, transition: { delay: 0, ...transition } },
    visible: { opacity: 1, transition: { delay: 0.55, ...transition } },
    exit: { opacity: 0, transition: { delay: 0, ...transition } },
  };

  const indexVariants = {
    hidden: { y: "100%" },
    visible: { y: "0" },
    exit: { y: "-100%" },
  };

  const indexButtonVariants = {
    hidden: { opacity: 1, pointerEvents: "none" },
    visible: { opacity: 1, pointerEvents: "all" },
    exit: { opacity: 1, pointerEvents: "none" },
  };

  const transition = {
    type: "spring",
    clamp: true,
    friction: 300,
    tension: 1,
    mass: 0.3,
  };

  const transitionSection = {
    type: "spring",
    clamp: true,
    tension: 0.001,
    friction: 100,
    mass: 0.1,
    staggerChildren: 0.25,
  };

  const transitionPhoto = {
    type: "spring",
    clamp: true,
    friction: 20,
    tension: 0.8,
    mass: 0.75,
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={transitionSection}
      className={styles.section}
    >
      <div ref={containerRef}>
        <div>
          <motion.div className={styles.main}>
            <motion.h1 className={styles.mobileName}>{name}</motion.h1>

            <motion.div className={styles.photo}>
              <AnimatePresence>
                <motion.div
                  variants={photoVariants}
                  transition={transitionPhoto}
                  key={currentArtist}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div
                    variants={photoInnerVariants}
                    transition={transitionPhoto}
                  >
                    <Image layout="fill" src={photo.url} alt={photo.alt} />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.p
                  variants={captionVariations}
                  key={currentArtist}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {photo.caption}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <AnimatePresence exitBeforeEnter>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                key={currentArtist}
                className={styles.info}
                transition={{ staggerChildren: 0.07 }}
              >
                <motion.h1 variants={nameVariants} transition={transition}>
                  <span>{name}</span>
                </motion.h1>
                <motion.p variants={textVariants} transition={transition}>
                  {bio}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className={styles.controls}>
            <AnimatePresence exitBeforeEnter>
              <motion.button
                key={currentArtist}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indexButtonVariants}
                transition={transition}
                onClick={() => setCurrentArtist(prevArtistIndex)}
              >
                <div className={styles.arrow}>
                  <ArrowH direction="left" />
                </div>
                <div className={styles.uiText}>
                  <p>Previous Artist</p>

                  <motion.h3>
                    <Fadein>{data[prevArtistIndex].name}</Fadein>
                  </motion.h3>
                </div>
              </motion.button>
            </AnimatePresence>

            <div className={styles.index}>
              <p>
                <motion.div key={currentArtist}>
                  <AnimatePresence>
                    {("0" + (currentArtist + 1))
                      .slice(-2)
                      .split("")
                      .map((char, index) => (
                        <motion.span
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          key={`${index}_${char}`}
                          variants={indexVariants}
                          transition={transition}
                        >
                          {char}
                        </motion.span>
                      ))}
                  </AnimatePresence>
                </motion.div>
                <div>/</div>
                <div>{("0" + data.length).slice(-2)}</div>
              </p>
            </div>
            <AnimatePresence exitBeforeEnter>
              <motion.button
                key={currentArtist}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indexButtonVariants}
                transition={transition}
                layout
                onClick={() => {
                  setCurrentArtist(nextArtistIndex);
                  containerRef.current.scrollTo(0, 0);
                  console.log(containerRef.current);
                }}
              >
                <motion.div className={styles.uiText}>
                  <p>Next Artist</p>

                  <motion.h3>
                    <Fadein>{data[nextArtistIndex].name}</Fadein>
                  </motion.h3>
                </motion.div>

                <motion.div className={styles.arrow}>
                  <ArrowH />
                </motion.div>
              </motion.button>
            </AnimatePresence>
          </div>

          <button className={styles.exit} onClick={() => exitFunction()}>
            <Close />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ArtistModule;
