import Logo from "../../assets/svg/Logo";
import Arrow from "../../assets/svg/Arrow";
import LinkTo from "../LinkTo";
import Word from "../text/Word";
import Fadein from "../text/Fadein";
import Section from "../Section";
import Circle from "../../assets/svg/Circle";
import styles from "./AboutWorks.module.scss";
import { motion } from "framer-motion";

export default function AboutWorks() {
  return (
    <Section viewAmount={0.3} className={styles.section}>
      <h1 className={`h1`}>
        <Word>How</Word> <Word>it</Word>{" "}
        <Word>
          <i>Works</i>
        </Word>
      </h1>
      <h2 className={styles.heading}>
        <Fadein>
          When used thoughtfully, we believe NFTs can help make art more widely
          available,{" "}
          <b>put artists more comfortably in the driver&apos;s seat,</b> and
          contribute to a more intentional art economy.
        </Fadein>
      </h2>
      <div className={styles.info}>
        <p className={`largeParagraph`}>
          <Fadein>
            Every artwork presented by Artwrld is backed by an NFT (non-fungible
            token), a piece of code that establishes the work as a unique object
            created and owned by certain individuals, like a certificate of
            authenticity for digital art. This code is written permanently and
            securely into a global record of digital transactions known as a
            blockchain (Artwrld uses the Ethereum blockchain for most of our
            projects).
          </Fadein>
        </p>

        <motion.aside className={styles.link}>
          <LinkTo href="/artists">
            <Fadein>
              <span title="Meet the Artists">Meet the Artists</span>
            </Fadein>
          </LinkTo>
          <Circle />
        </motion.aside>
      </div>
    </Section>
  );
}
