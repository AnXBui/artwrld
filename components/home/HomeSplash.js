import Logo from "../../assets/svg/Logo";
import Arrow from "../../assets/svg/Arrow";
import LinkTo from "../LinkTo";
import styles from "./HomeSplash.module.scss";

export default function HomeSplash() {
  // const scrollToTarget = (target) => {
  //   const scrollTarget = document.getElementByID(target);
  //   scrollTarget.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <section className={styles.section}>
      <div className={styles.mainText}>
        <Logo />
        <h1>
          commissions &amp; presents innovative NFT-based projects by the
          world’s most{" "}
          <LinkTo href={"/artists"}>
            <span>visionary artists</span>
          </LinkTo>
        </h1>
      </div>

      <div className={styles.cta}>
        <h2>First drop coming soon</h2>
        <p>Spring 2022</p>
        <button
          aria-label="Scroll to Explore"
          onClick={() => {
            document
              .getElementById("homeNewsletter")
              .scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          <Arrow />
          <Arrow />
        </button>
      </div>
    </section>
  );
}
