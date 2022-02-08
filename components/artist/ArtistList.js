import styles from "./ArtistList.module.scss";
import artistPhoto from "../../public/img/shirin_neshat.png";
import { useState } from "react";
import ArtistModule from "./ArtistModule";
import Word from "../text/Word";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Fadein from "../text/Fadein";

const artistsList = [
  {
    name: "Yael Bartana",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: artistPhoto,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Mel Chin",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: artistPhoto,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Jill Magid",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: artistPhoto,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Shirin Neshat",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: artistPhoto,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Paul Pfeiffer",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: artistPhoto,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Walid Raad",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: artistPhoto,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Duke Riley",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: artistPhoto,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Swoon",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: artistPhoto,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Apichatpong Weerasethakul",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: artistPhoto,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
];

const ArtistList = () => {
  const data = artistsList;
  const [currentArtist, setCurrentArtist] = useState(null);
  const itemVariants = {
    hidden: { y: 300, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const listVariants = {
    exit: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const transition = {
    type: "spring",
    clamp: true,
    friction: 70,
    tension: 30,
    mass: 0.2,
  };

  return (
    <section className={styles.section}>
      <AnimatePresence exitBeforeEnter>
        {currentArtist !== null ? (
          <ArtistModule
            data={data}
            initialIndex={currentArtist}
            exitFunction={() => setCurrentArtist(null)}
          />
        ) : null}
      </AnimatePresence>

      <motion.ul
        initial="exit"
        animate="visible"
        variants={listVariants}
        transition={{ staggerChildren: 0.15, ...transition }}
        className={styles.list}
      >
        {data.map(({ name, photo }, index) => {
          var newIndex = index + 1;
          newIndex = "0" + newIndex;
          newIndex = newIndex.slice(-2);
          const currentActive = index == currentArtist;

          const nameArray = name.split(" ");
          return (
            <motion.li
              variants={itemVariants}
              className={`${styles.item} ${
                currentActive ? styles.itemActive : null
              }`}
              // transition={transition}
              key={index}
            >
              <motion.button
                animate="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                onClick={() => setCurrentArtist(index)}
              >
                <motion.h3>
                  <Fadein>{newIndex}</Fadein>
                </motion.h3>
                <h2>
                  {nameArray.map((word, i) => (
                    <div key={i}>
                      <b
                        style={{ transitionDelay: `${0.1 * i}s` }}
                        title={word}
                      >
                        <Word>{word}</Word>
                      </b>
                    </div>
                  ))}
                </h2>
              </motion.button>
              {/* <div className={styles.itemPhoto}>
                  <Image layout="fill" src={photo.url} alt={photo.alt} />
                </div> */}
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default ArtistList;
