import Logo from "../../assets/svg/Logo";
import LinkTo from "../LinkTo";
import styles from "./Footer.module.scss";
import socialList from "./socialList";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.section}>
      <LinkTo className={styles.logo} href="/">
        <Logo />
      </LinkTo>

      <ul className={styles.socialList}>
        {socialList.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              rel="noreferrer"
              target="_blank"
              aria-label={item.text}
            >
              <Image layout="fill" src={item.icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
