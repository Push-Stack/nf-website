import Image from "next/image";

import { pageLinks } from "../../constants/pageLinks";
import { Link } from "react-scroll";
import HeaderImage from "../../public/static/header-3.jpg";
import Logo from "../../public/static/logo.png";

const Header = () => {
  return (
    <header
      className="pt-16 pb-40 min-h-screen  w-full max-w-full   relative  overflow-hidden "
      id={pageLinks.header}
    >
      <Image
        src={HeaderImage}
        fill
        alt="header-cover"
        className="z-10 object-cover"
        priority
      />
      <div className="absolute z-20 inset-0 h-full w-full bg-black/80 " />
      <div className="flex justify-center relative z-20 ">
        <ul className="text-white font-medium uppercase flex gap-6 sm:gap-32 text-md sm:text-lg">
          <li className="hover:text-gray-200">
            <a href={pageLinks.play}>Play</a>
          </li>
          <li className="hover:text-gray-200">
            <Link
              to={pageLinks.roadmap}
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              className="cursor-pointer"
              href={`#${pageLinks.roadmap}`}
            >
              Roadmap
            </Link>
          </li>
          <li className="hover:text-gray-200">
            <Link
              to={pageLinks.faqs}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
              href={`#${pageLinks.faqs}`}
            >
              Faq
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-24   flex flex-col items-center justify-center gap-9 text-white relative z-20 overflow-hidden ">
        <div className="relative h-40 w-full max-w-xs">
          <Image
            src={Logo}
            fill
            alt="logo"
            priority
            className="object-contain"
          />
        </div>

        <h1 className="px-2 font-bold text-3xl sm:text-6xl max-w-4xl text-center uppercase">
          The Premier Gaming Platform
        </h1>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-6  max-w-lg mx-auto">
          <a
            href={pageLinks.play}
            className="uppercase bg-primary font-bold py-2 px-5 rounded-full hover:bg-primary/90 transition-all"
          >
            Start Playing
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
