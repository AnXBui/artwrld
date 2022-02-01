import styles from "./ArtistModule.module.scss";
import { useState } from "react";
import Image from "next/image";
import ArrowH from "../../assets/svg/ArrowH";
import Close from "../../assets/svg/Close";

const ArtistModule = ({ data, initialIndex, exitFunction }) => {
  const [currentArtist, setCurrentArtist] = useState(initialIndex);
  const { name, bio, photo } = data[currentArtist];
  const nextArtistIndex = (currentArtist + 1) % data.length;
  const prevArtistIndex =
    currentArtist == 0 ? data.length - 1 : currentArtist - 1;

  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <h1 className={styles.mobileName}>{name}</h1>
        <div className={styles.photo}>
          <Image layout="fill" src={photo.url} alt={photo.alt} />
          <p>{photo.caption}</p>
        </div>
        <div className={styles.info}>
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
      </div>

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
            <div>{("0" + (currentArtist + 1)).slice(-2)}</div>
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
    </section>
  );
};

export default ArtistModule;
