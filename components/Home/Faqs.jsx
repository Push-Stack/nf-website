import Image from "next/image";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "../../constants/faqs";
import {
  blurTransition,
  transitionDuration,
  upTransitions,
  viewPort,
} from "../../constants/animations";

import { pageLinks } from "../../constants/pageLinks";
import FaqItem from "./FaqItem";

const Faqs = () => {
  const [showItem, setItem] = useState(null);

  const changeItem = useCallback((item) => {
    setItem(item);
  }, []);
  return (
    <section
      id={pageLinks.faqs.replace("#", "")}
      className="text-white py-14 relative px-1 transition-height"
    >
      <Image
        src="static/faq-bg.png"
        fill
        alt="gaqs-background"
        className="z-10"
        priority
      />
      <motion.div
        className="px-2 relative z-20 max-w-4xl mx-auto flex flex-col gap-10"
        initial={blurTransition.initialState}
        whileInView={blurTransition.viewTransition}
        viewport={viewPort}
      >
        <h1 className="text-3xl text-center sm:text-4xl font-bold text-white tracking-wider uppercase">
          Faqs
        </h1>
        <motion.div
          className="w-full flex flex-col items-center gap-4"
          initial={upTransitions.initialState}
          whileInView={upTransitions.animateState}
          transition={transitionDuration}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FaqItem
              question={faq.question}
              answer={faq.answer}
              key={index}
              id={index + 1}
              changeItem={changeItem}
              showItem={showItem}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faqs;
