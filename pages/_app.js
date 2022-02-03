import "../styles/globals.scss";
import Header from "../components/Header";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const url = router.route;
  return (
    <>
      <Header location={url} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          console.log("scrolled");
        }}
        initial={false}
      >
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
