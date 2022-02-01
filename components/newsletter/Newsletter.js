import LinkTo from "../LinkTo";
import styles from "./Newsletter.module.scss";

export default function Newsletter({ type = "default" }) {
  return (
    <section
      className={
        type == "home"
          ? styles.home
          : type == "about"
          ? styles.about
          : styles.footer
      }
    >
      {type == "about" ? (
        <div className={styles.emblem}>
          <h3>First drop</h3>
          <p>Spring 2022</p>
        </div>
      ) : null}
      <h2>
        {type == "default"
          ? `Subscribe to our newsletter to receive the latest updates`
          : `Subscribe to our newsletter for the latest updates`}
      </h2>
      <form className={styles.form}>
        <input type="email" placeholder="Enter your email"></input>
        <button>Subscribe</button>
      </form>
    </section>
  );
}
