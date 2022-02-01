import Logo from "../../assets/svg/Logo";
import Arrow from "../../assets/svg/Arrow";
import LinkTo from "../LinkTo";
import styles from "./AboutSplash.module.scss";

export default function AboutWorks() {
  return (
    <section className={styles.section}>
      <h1>
        How it <span>Works</span>
      </h1>
      <h2>
        When used thoughtfully, we believe NFTs can help make art more widely
        available, <b>put artists more comfortably in the driver's seat,</b> and
        contribute to a more intentional art economy.
      </h2>
      <div>
        <p>
          Every artwork presented by Artwrld is backed by an NFT (non-fungible
          token), a piece of code that establishes the work as a unique object
          created and owned by certain individuals, like a certificate of
          authenticity for digital art. This code is written permanently and
          securely into a global record of digital transactions known as a
          blockchain (Artwrld uses the Ethereum blockchain for most of our
          projects).
        </p>
      </div>
      <LinkTo href="/artists">Meet the Artists</LinkTo>
    </section>
  );
}
