import Logo from "../assets/svg/Logo";
import LinkTo from "./LinkTo";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <LinkTo className={styles.logo} href="/">
        <Logo />
      </LinkTo>

      <div className={styles.nav}>
        <LinkTo href="/about">About</LinkTo>
        <LinkTo href="/artists">Artists</LinkTo>
      </div>
    </header>
  );
}
