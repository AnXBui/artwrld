import Logo from "../../assets/svg/Logo";
import LinkTo from "../LinkTo";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.section}>
      <LinkTo className={styles.logo} href="/">
        <Logo />
      </LinkTo>

      <div className={styles.socialList}>
        <p>Social Media Links</p>
      </div>
    </footer>
  );
}
