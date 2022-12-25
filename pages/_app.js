import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  opacityTransitions,
  transitionDuration,
} from "../constants/animations";
import OgNfa from "../public/static/og-nfa.png";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <Head>
        <title>Non Fungible Arcade</title>
        <meta name="description" content="NFA The Premier Gaming Platform" />
        <meta name="og:image" content={OgNfa.src} />
      </Head>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        variants={opacityTransitions}
        transition={transitionDuration}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
