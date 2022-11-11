import Image from "next/image";
import { pageLinks } from "../../constants/pageLinks";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="pt-16 pb-40 relative" id={pageLinks.header}>
      <Image
        src="/static/header.png"
        fill
        alt="header-cover"
        className="z-10"
        priority
      />
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
      <div className="mt-14 flex flex-col items-center justify-center gap-9 text-white relative z-20 ">
        <Image src="/static/logo.png" width={312} height={164} alt="logo" />

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

          <a
            href={pageLinks.rebelRun}
            className="uppercase bg-primary font-bold py-2 px-5 rounded-full hover:bg-primary/90 transition-all"
          >
            Rebel Run
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
