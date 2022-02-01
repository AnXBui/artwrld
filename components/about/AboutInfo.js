import styles from "./AboutInfo.module.scss";

export default function AboutInfo() {
  return (
    <section className={styles.section}>
      <h3>Supporting Nonprofits</h3>
      <p className={`largeParagraph`}>
        Each project also benefits one or more nonprofit organizations, selected
        by the artist to receive a portion of every sale. Because NFTs have the
        potential to distribute funds automatically and in perpetuity whenever
        the art changes hands, artists can use their work to help build and
        sustain an art world they—and we—care about.
      </p>
    </section>
  );
}
