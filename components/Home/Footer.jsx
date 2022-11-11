import Image from "next/image";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { opacityTransitions, viewPort } from "../../constants/animations";
import { pageLinks } from "../../constants/pageLinks";

const Footer = () => {
  return (
    <motion.footer
      className="py-20 bg-black text-white relative"
      initial={opacityTransitions.initialState}
      whileInView={opacityTransitions.animateState}
      viewport={viewPort}
    >
      <div className="px-4 max-w-xl mx-auto flex flex-col gap-8">
        <ul className="max-w-lg font-bold flex justify-evenly transition uppercase">
          <li className="hover:text-gray-200 cursor-pointer">
            <a href={pageLinks.play}>Play</a>
          </li>
          <li className="hover:text-gray-200 cursor-pointer">
            <Link
              to={pageLinks.roadmap}
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              href={`#${pageLinks.roadmap}`}
            >
              Roadmap
            </Link>
          </li>
          <li className="hover:text-gray-200 cursor-pointer">
            <Link
              to={pageLinks.faqs}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
              href={`#${pageLinks.faqs}`}
            >
              Faq
            </Link>
          </li>
        </ul>
        <div className="max-w-lg flex items-center  justify-evenly  relative">
          <a href={pageLinks.discord} target="_blank" rel="noreferrer">
            <Image
              src="/static/discord.png"
              alt="discord-icon"
              className="cursor-pointer"
              width={30}
              height={36}
            />
          </a>

          <a href={pageLinks.twitter} target="_blank" rel="noreferrer">
            <Image
              src="/static/twitter.png"
              alt="twitter-icon"
              width={38}
              height={29}
            />
          </a>
        </div>
        <div className="text-sm text-center sm:text-base sm:text-left">
          Copyright &copy; 2022 Non Fungible Arcade. All Rights Reserved
        </div>
      </div>
      <Link
        to={pageLinks.header}
        spy={true}
        smooth={true}
        offset={-180}
        duration={500}
        className="cursor-pointer mt-2 md:mt-0  md:p-2 absolute right-0 md:right-5 bottom-0 md:bottom-auto md:top-[50%] md:-translate-y-[50%] "
        href={`#${pageLinks.header}`}
        aria-label="Scroll to Top"
      >
        <AiOutlineArrowUp className="text-4xl p-1 md:p-0 bg-primary text-black md:text-white md:bg-transparent transition md:hover:bg-primary rounded-l-md opacity-80 md:opacity-100 md:rounded-full" />
      </Link>
    </motion.footer>
  );
};

export default Footer;
