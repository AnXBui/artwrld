import styles from "./ContactSplash.module.scss";
import Word from "../text/Word";
import Fadein from "../text/Fadein";
import Section from "../Section";

export default function ContactSplash() {
  return (
    <Section first={true} className={styles.section}>
      <h1 className={`h1`}>
        <Word>Contact</Word>
      </h1>
      <p className={styles.heading}>
        <Fadein>
          Interested in learning more or want to get in touch? Please feel free
          to reach out to us at{" "}
          <a href={"mailto:info@artwrld.com"} rel="noreferrer" target="_blank">
            info@artwrld.com.
          </a>
        </Fadein>
      </p>
    </Section>
  );
}
