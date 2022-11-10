import React, { useMemo } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { opacityTransitions } from "../../constants/animations";

const FaqItem = ({ question, answer, id, changeItem, showItem }) => {
  const activeItem = useMemo(() => {
    if (showItem && showItem === id) {
      return true;
    }
    return false;
  }, [showItem, id]);

  const showHideItem = () => {
    if (activeItem) {
      changeItem(null);
      return;
    }
    changeItem(id);
  };

  return (
    <div
      className={`w-full  rounded-md border-2  py-2 px-5 flex flex-col gap-4 transition ${
        activeItem ? "border-secondary" : "border-primary"
      }`}
    >
      <div
        className="w-full flex justify-between items-center gap-2 cursor-pointer"
        onClick={showHideItem}
      >
        <div className="text-secondary uppercase  font-bold ">{question}</div>

        {activeItem ? (
          <IoIosArrowUp className="flex-none text-3xl" />
        ) : (
          <IoIosArrowDown className="flex-none text-3xl " />
        )}
      </div>
      {activeItem && (
        <motion.div
          className="leading-loose font-medium whitespace-pre-wrap"
          variants={opacityTransitions}
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default FaqItem;
