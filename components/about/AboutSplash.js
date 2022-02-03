import Logo from "../../assets/svg/Logo";
import Arrow from "../../assets/svg/Arrow";
import Circle from "../../assets/svg/Circle";
import LinkTo from "../LinkTo";
import Word from "../text/Word";
import Fadein from "../text/Fadein";
import Section from "../Section";
import styles from "./AboutSplash.module.scss";

export default function AboutSplash() {
  return (
    <Section first={true} className={styles.section}>
      <h1 className={`h1`}>
        <Word>About</Word>{" "}
        <Word>
          <i>Us</i>
        </Word>
      </h1>
      <h2 className={styles.heading}>
        <Fadein>
          We are an <LinkTo href="/artists">artist-driven</LinkTo> organization
          that believes in building an <i>art world</i> worth inhabiting.
        </Fadein>
      </h2>
      <div className={`largeParagraph ${styles.paragraphs}`}>
        <p>
          <Fadein>
            We work collaboratively with artists to design and build projects
            that engage audiences and explore the emerging possibilities of
            blockchain technology for creative practice. We support artists
            throughout the process of making new work—from conceptualization to
            production and presentation—while fostering critical conversations
            about the issues driving digital art and culture.
          </Fadein>
        </p>
        <p>
          <Fadein>
            We produce art with artists that speaks to everyday people in
            provocative, challenging, inspiring ways. We aim to help artists
            advance their work and ideas into this new terrain, generating
            projects that are thoughtful, bold, complex, and original.
          </Fadein>
        </p>
      </div>

      <div className={styles.button}>
        <Fadein>
          <button
            onClick={() =>
              window.scrollTo({
                top: (window.innerHeight * 3) / 4,
                behavior: "smooth",
              })
            }
            aria-label="Learn more"
          >
            <Arrow />
            <Arrow />
          </button>
          <Circle />
        </Fadein>
      </div>
    </Section>
  );
}
