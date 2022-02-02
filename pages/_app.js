import "../styles/globals.scss";
import Header from "../components/Header";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const url = router.route;
  return (
    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0);
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
