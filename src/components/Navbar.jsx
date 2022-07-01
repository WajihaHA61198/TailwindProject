import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav); //true
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-slate-900 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex item-center">
          <h1 className="text-rose-600 font-bold ml-10 mr-4 m-2 lg:text-3xl sm:text-4xl md:text-lg  hover:cursor-pointer">
            <BadgeCheckIcon className="w-7 inline-flex pb-2" />
            Notify.
          </h1>
          <ul className="hidden lg:text-base md:flex md:text-xs text-white">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:text-base md:flex lg:pr-4 lg:h-10 md:px-3 md:h-9 md:text-xs">
          <button className="mr-4 px-6 py-2">Sign In</button>
          <button className="px-6 py-2">Sign Up</button>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-7 text-white" />
          ) : (
            <XIcon className="w-6 text-white" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav ? "hidden" : "absolute bg-slate-900 w-full text-white px-8"
        }
      >
        <li className="border-b-2 border-violet-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-violet-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-violet-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-violet-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-violet-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="px-6 py-2 mb-4">Sign In</button>
          <button className="px-6 py-2">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
