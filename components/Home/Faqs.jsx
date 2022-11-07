import Image from "next/image";
import React, { useCallback, useState } from "react";
import { faqs } from "../../constants/faqs";
import FaqItem from "./FaqItem";

const Faqs = () => {
  const [showItem, setItem] = useState(null);

  const changeItem = useCallback((item) => {
    setItem(item);
  }, []);
  return (
    <section id="faqs" className="text-white py-14 relative ">
      <Image
        src="/static/faq-bg.png"
        fill
        alt="gaqs-background"
        className="z-10"
        priority
      />
      <div className="px-2 relative z-20 max-w-4xl mx-auto flex flex-col gap-10">
        <h1 className="text-3xl text-center sm:text-4xl font-bold text-white tracking-wider uppercase">
          Faqs
        </h1>
        <div className="w-full flex flex-col items-center gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Faqs;
