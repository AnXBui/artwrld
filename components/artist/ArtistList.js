import styles from "./ArtistList.module.scss";
import artistPhoto from "../../public/img/shirin_neshat.png";
import { useState } from "react";
import ArtistModule from "./ArtistModule";
import Image from "next/image";

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

  return (
    <section className={styles.section}>
      {currentArtist !== null ? (
        <ArtistModule
          data={data}
          initialIndex={currentArtist}
          exitFunction={() => setCurrentArtist(null)}
        />
      ) : (
        <ul className={styles.list}>
          {data.map(({ name, photo }, index) => {
            var newIndex = index + 1;
            newIndex = "0" + newIndex;
            newIndex = newIndex.slice(-2);
            return (
              <li className={styles.item} key={index}>
                <button onClick={() => setCurrentArtist(index)}>
                  <h3>{newIndex}</h3>
                  <h2>{name}</h2>
                </button>
                <div className={styles.itemPhoto}>
                  <Image layout="fill" src={photo.url} alt={photo.alt} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ArtistList;
