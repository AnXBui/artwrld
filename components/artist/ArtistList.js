import styles from "./ArtistList.module.scss";
import artistPhoto from "../../public/img/shirin_neshat.png";
import { useState } from "react";
import ArtistModule from "./ArtistModule";
import Word from "../text/Word";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Fadein from "../text/Fadein";

import melChin from "../../public/img/MelChin.png";
import jillMagid from "../../public/img/JillMagid.png";
import jeniferKevinMccoy from "../../public/img/Jennifer_KevinMcCoy.png";
import shirinNeshat from "../../public/img/ShirinNeshat.png";
import paulPfeiffer from "../../public/img/PaulPfeiffer.png";
import walidRaad from "../../public/img/WalidRaad.png";
import swoon from "../../public/img/Swoon.jpg";
import apichatpongWeer from "../../public/img/ApichatpongWeerasethakul.png";

const artistsList = [
  {
    name: "Yael Bartana",
    bio: "Through films, installations, photographs, performances, and public monuments, Yael Bartana investigates the mechanisms of power structures and delves into subjects ranging from national identity and trauma to the collective unconscious. Her work is held in the collections of MoMA, the Tate, and the Centre Pompidou, and has been featured in solo exhibitions at the Tel Aviv Museum of Art, MoMA PS1, Philadelphia Museum of Art, Stedelijk Museum, and Fondazione Modena Arti Visive. She is a recipient of the Artes Mundi Prize.",
    photo: {
      url: artistPhoto,
      alt: "Yael Bartana",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Mel Chin",
    bio: "Mel Chin translates compelling concepts into a diverse array of films, objects, collective actions, and works that require multi-disciplinary collaboration. He pioneered the science of “green remediation,” inserted conceptual art into primetime television, mobilized over half a million participants in the fight to end childhood lead poisoning, and expressed a future shaped by climate change with an AR and sculptural installation in Times Square. Chin’s work has been shown internationally, including a 40-year survey exhibition at the Queens Museum. He is a MacArthur Fellow and a member of the American Academy of Arts and Letters.",
    photo: {
      url: melChin,
      alt: "Mel Chin photo by Miriam Heads",
      caption: "Photo credit: Miriam Heads",
    },
  },
  {
    name: "Jill Magid",
    bio: "Through her multifaceted, performance-based practice, Jill Magid explores the emotional, philosophical, and legal tensions between individual agency and large institutions such as intelligence agencies, artist’s estates and the police. A Guggenheim Fellow, Magid has received solo exhibitions at the Tate Modern, Whitney Museum, Berkeley Art Museum, Modern Art Museum of Fort Worth, and the Security and Intelligence Agency of the Netherlands. Her work is in the collections of the Centre Pompidou, Whitney Museum, Fundacion Jumex, and Walker Art Center.",
    photo: {
      url: jillMagid,
      alt: "Jill Magid photo by Rodolfo Paul McGeiver",
      caption: "Photo credit: Paul McGeiver",
    },
  },
  {
    name: "Jennifer & Kevin McCoy",
    bio: "Jennifer and Kevin McCoy are New York-based digital media artists whose works extend from film and video to installation and generative software that uses blockchain technology to create long-term ecosystems for images to live, die, and evolve. The McCoys’ work has been featured in exhibitions at the Pompidou Center, MoMA, the British Film Institute, and the Sundance Film Festival, and is held in the collections of MoMA, the Metropolitan Museum of Art, Whitney Museum, and Museum of Fine Arts in Houston. In 2014, Kevin McCoy minted the world’s first digital art NFT.",
    photo: {
      url: jeniferKevinMccoy,
      alt: "Jennifer & Kevin McCoy",
      caption: "Photo courtesy of the artist",
    },
  },
  {
    name: "Shirin Neshat",
    bio: "Shirin Neshat is an Iranian-born artist and filmmaker based in New York. Her photographs, videos, and films combine poetic, politically charged images with narratives questioning issues of power, religion, race, and gender as seen through the lens of her personal experiences as an Iranian woman living in exile. Neshat's work has been featured in numerous solo exhibitions, including at The Broad, Hirshhorn Museum, Detroit Institute of Arts, Stedelijk Museum, and the Serpentine Gallery. She was awarded the First International Prize at the 48th Venice Biennale and the Silver Lion Award for Best Director at the 66th Venice International Film Festival.",
    photo: {
      url: shirinNeshat,
      alt: "Shirin Neshat photo by Rodolfo Martinez",
      caption: "Photo Credit: Rodolfo Martinez",
    },
  },
  {
    name: "Paul Pfeiffer",
    bio: "A pioneer of video and computer-based art, Paul Pfeiffer has created celebrated works that sample and re-edit footage from televised sports, concerts, and other mass media events. Exploring the relationship between public spectacle, image culture, and individual and group identity formation, his work is held in the collections of MoMA, the Guggenheim Museum, Whitney Museum, LACMA, and Hirshhorn Museum. Pfeiffer has received solo exhibitions at MIT’s List Visual Art Center, the MCA Chicago, Honolulu Museum of Art, and the National Gallery of Victoria.",
    photo: {
      url: paulPfeiffer,
      alt: "Paul Pfeiffer",
      caption: "Photo courtesy of the artist",
    },
  },
  {
    name: "Walid Raad",
    bio: "Walid Raad is a conceptual artist and professor of art at The Cooper Union. Perhaps best known for his 14-year project on the contemporary history of Lebanon, The Atlas Group, Raad works across media and disciplines to examine the connections between politics, violence, and cultural narratives. His work has been shown around the world, including at the Venice Biennale, Istanbul Biennial, and Documenta, as well as in solo exhibitions at the Louvre, MoMA, Stedelijk Museum, ICA Boston, and Whitechapel Art Gallery.",
    photo: {
      url: walidRaad,
      alt: "Walid Raad",
      caption: "Photo courtesy of the artist",
    },
  },
  {
    name: "Duke Riley",
    bio: "Working across drawing, printmaking, mosaic, sculpture, performative interventions, and installations, Duke Riley creates work that weaves together history and contemporary events with elements of fantasy and myth. Often addressing maritime history and environmental issues such as plastic pollution and the destruction of waterfront communities, his work has been exhibited widely, from the Havana Biennial to public commissions by Creative Time and MTA Arts for Transit. He will have a solo show at the Brooklyn Museum in 2022.",
    photo: {
      url: artistPhoto,
      alt: "Duke Riley",
      caption: "Photo courtesy of the artist",
    },
  },
  {
    name: "Swoon",
    bio: "Caledonia Curry, known as Swoon, is a contemporary artist and filmmaker. She was one of the first women to gain international recognition as a street artist who pushed the conceptual limits of the genre. Her portraits, immersive installations, and community-based projects center compassion and explore the transformative power of art. Curry’s work has been featured in solo exhibitions at the Brooklyn Museum, Detroit Institute of Arts, ICA Boston, and New Orleans Museum of Art, and is in the collections of the Tate, MoMA, and MASS MoCA.",
    photo: {
      url: swoon,
      alt: "Swoon",
      caption: "Photo courtesy of the artist",
    },
  },
  {
    name: "Apichatpong Weerasethakul",
    bio: "Apichatpong Weerasethakul is an internationally renowned artist and filmmaker whose works deal with memory, personal politics, and social issues. His films have garnered numerous awards, including the Palme d'Or at the 2010 Cannes Film Festival. Working outside the Thai commercial film industry, he has championed experimental and hybrid narrative filmmaking both at home and abroad. Weerasethakul’s works are in the collections of the Tate, Fondation Louis Vuitton, the Centre Pompidou, SFMOMA, and the Museum of Contemporary Art Tokyo. He is a recipient of the Principal Prince Claus Award and Artes Mundi Prize",
    photo: {
      url: apichatpongWeer,
      alt: "Apichatpong Weerasethakul photo by Supatra Srithongkum and Sutiwat Kumpai",
      caption: "Photo credit: Supatra Srithongkum and Sutiwat Kumpai",
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
