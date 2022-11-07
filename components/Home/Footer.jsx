import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="py-14 bg-black text-white">
      <div className="px-4 max-w-xl mx-auto flex flex-col gap-8">
        <ul className="max-w-lg font-bold flex justify-evenly transition uppercase">
          <li className="hover:text-gray-200 cursor-pointer">Play</li>
          <li className="hover:text-gray-200 cursor-pointer">Roadmap</li>
          <li className="hover:text-gray-200 cursor-pointer">Faq</li>
        </ul>
        <div className="max-w-lg flex items-center  justify-evenly  relative">
          <Image
            src="/static/discord.png"
            alt="discord-icon"
            className="cursor-pointer"
            width={30}
            height={36}
          />

          <a href="https://twitter.com/NFArcade" target="_blank">
            <Image
              src="/static/twitter.png"
              alt="twitter-icon"
              width={38}
              height={29}
            />
          </a>
        </div>
        <footer className="text-sm text-center sm:text-base sm:text-left">
          Copyright &copy; 2022 Non Fungible Arcade. All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default Footer;
