import "../styles/globals.scss";
import Header from "../components/Header";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

function MyApp({ Component, pageProps, router }) {
  const url = router.route;

  Router.events.on("routeChangeComplete", routeChange);
  Router.events.on("routeChangeStart", routeChange);
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
