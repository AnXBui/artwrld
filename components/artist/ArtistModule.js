import styles from "./ArtistModule.module.scss";
import { useState } from "react";
import Image from "next/image";
import ArrowH from "../../assets/svg/ArrowH";
import Close from "../../assets/svg/Close";
import { motion, AnimatePresence } from "framer-motion";

const ArtistModule = ({ data, initialIndex, exitFunction }) => {
  const [currentArtist, setCurrentArtist] = useState(initialIndex);
  const { name, bio, photo } = data[currentArtist];
  const nextArtistIndex = (currentArtist + 1) % data.length;
  const prevArtistIndex =
    currentArtist == 0 ? data.length - 1 : currentArtist - 1;

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
    hidden: { opacity: 0, x: -400, y: -400, rotate: -30, scale: 0.8 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
    exit: { opacity: 0, x: 400, y: 400, rotate: 30, scale: 0.8 },
  };

  const transition = {
    type: "spring",
    clamp: true,
    friction: 300,
    tension: 1,
    mass: 0.3,
  };

  const transitionPhoto = {
    type: "spring",
    clamp: true,
    friction: 600,
    tension: 1,
    mass: 0.75,
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={transition}
      className={styles.section}
    >
      <div>
        <motion.div className={styles.main}>
          <motion.h1 className={styles.mobileName}>{name}</motion.h1>
          <div className={styles.photo}>
            <AnimatePresence>
              <motion.div
                key={currentArtist}
                variants={photoVariants}
                transition={transitionPhoto}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Image layout="fill" src={photo.url} alt={photo.alt} />
              </motion.div>
              <p>{photo.caption}</p>
            </AnimatePresence>
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              key={currentArtist}
              className={styles.info}
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
          <button onClick={() => setCurrentArtist(prevArtistIndex)}>
            <div className={styles.arrow}>
              <ArrowH direction="left" />
            </div>
            <div className={styles.uiText}>
              <p>Previous Artist</p>
              <h3>{data[prevArtistIndex].name}</h3>
            </div>
          </button>

          <div className={styles.index}>
            <p>
              <div>
                {("0" + (currentArtist + 1))
                  .slice(-2)
                  .split()
                  .map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
              </div>
              <div>/</div>
              <div>{("0" + data.length).slice(-2)}</div>
            </p>
          </div>

          <button onClick={() => setCurrentArtist(nextArtistIndex)}>
            <div className={styles.uiText}>
              <p>Next Artist</p>
              <h3>{data[nextArtistIndex].name}</h3>
            </div>

            <div className={styles.arrow}>
              <ArrowH />
            </div>
          </button>
        </div>

        <button className={styles.exit} onClick={() => exitFunction()}>
          <Close />
        </button>
      </div>
    </motion.section>
  );
};

export default ArtistModule;
