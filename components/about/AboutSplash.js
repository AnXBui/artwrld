import Logo from "../../assets/svg/Logo";
import Arrow from "../../assets/svg/Arrow";
import LinkTo from "../LinkTo";
import styles from "./AboutSplash.module.scss";

export default function AboutSplash() {
  return (
    <section className={styles.section}>
      <h1 className={`h1`}>
        About <i>Us</i>
      </h1>
      <h2 className={styles.heading}>
        We are an <LinkTo href="/artists">artist-driven</LinkTo> organization
        that believes in building an <i>art world</i> worth inhabiting.
      </h2>
      <div className={styles.paragraphs}>
        <p>
          We work collaboratively with artists to design and build projects that
          engage audiences and explore the emerging possibilities of blockchain
          technology for creative practice. We support artists throughout the
          process of making new work—from conceptualization to production and
          presentation—while fostering critical conversations about the issues
          driving digital art and culture.
        </p>
        <p>
          We produce art with artists that speaks to everyday people in
          provocative, challenging, inspiring ways. We aim to help artists
          advance their work and ideas into this new terrain, generating
          projects that are thoughtful, bold, complex, and original.
        </p>
      </div>
      <button className={styles.button}>
        <Arrow />
      </button>
    </section>
  );
}
