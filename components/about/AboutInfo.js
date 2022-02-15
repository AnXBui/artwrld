import styles from "./AboutInfo.module.scss";
import Word from "../text/Word";
import Fadein from "../text/Fadein";
import Section from "../Section";

export default function AboutInfo() {
  return (
    <Section viewAmount={0.9} delay={1} className={styles.section}>
      <h3>
        <Word>Supporting</Word> <Word>Nonprofits</Word>
      </h3>
      <p className={`largeParagraph`}>
        <Fadein>
          Each project we present benefits one or more nonprofit organizations,
          selected by the artist to receive a portion of every sale. Because
          NFTs have the potential to distribute funds automatically and in
          perpetuity whenever the art changes hands, artists can use their work
          to help build and sustain an art world they—and we—care about.
        </Fadein>
      </p>
    </Section>
  );
}
