import LinkTo from "../LinkTo";
import styles from "./Newsletter.module.scss";

export default function Newsletter({ home = false }) {
  return (
    <section className={home ? styles.home : styles.footer}>
      <h2>Subscribe to our newsletter for the latest updates</h2>
      <form>
        <input type="email" placeholder="Enter your email"></input>
        <button>Subscribe</button>
      </form>
    </section>
  );
}
