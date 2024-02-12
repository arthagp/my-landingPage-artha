"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
      className={`${
        scrollY > 0 ? `shadow-box` : ``
      } navbar flex justify-center items-center h-16 w-[1298px] rounded-[30px] bg-neutral-800 my-7 max-sm:hidden`}
    >
      <nav className="flex justify-between items-center min-w-[1275px] text-white">
        <ul className="flex justify-center items-center gap-x-10 font-extralight">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-300}
              spy={true}
              activeClass="active"
              className="py-3 px-6"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="project"
              smooth={true}
              offset={-50}
              spy={true}
              activeClass="active"
              className="py-3 px-6"
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth={true}
              offset={-50}
              spy={true}
              activeClass="active"
              className="py-3 px-6"
            >
              Experience
            </Link>
          </li>
        </ul>
        <div className="relative flex justify-center items-center h-12">
          <span className="absolute opacity-90 top-1 left-1 rounded-full w-6 h-6 bg-orange-400"></span>
          <h1 className="z-10 text-white font-bold text-2xl">ARTHA G.P</h1>
          <span className="absolute opacity-90 bottom-1 right-1 rounded-full w-6 h-6 bg-orange-400"></span>
        </div>
        <ul className="flex justify-center items-center gap-x-10 font-extralight mx-5">
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-50}
              spy={true}
              activeClass="active"
              className="py-3 px-6"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="certificate"
              smooth={true}
              offset={-90}
              spy={true}
              activeClass="active"
              className="py-3 px-6"
            >
              Certificate
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-200}
              spy={true}
              className="py-3 px-6"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
