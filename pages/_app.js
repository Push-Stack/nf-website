import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  opacityTransitions,
  transitionDuration,
} from "../constants/animations";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <title>Non Fungible Arcade</title>
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
