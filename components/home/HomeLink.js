import Logo from "../../assets/svg/Logo";
import Arrow from "../../assets/svg/Arrow";
import LinkTo from "../LinkTo";
import styles from "./HomeLink.module.scss";

export default function HomeLink() {
  return (
    <section className={styles.section}>
      <LinkTo className={styles.link} href={"/about"}>
        <span>About us</span>
      </LinkTo>
      <LinkTo className={styles.link} href={"/artists"}>
        <span>Meet the artists</span>
      </LinkTo>
    </section>
  );
}
