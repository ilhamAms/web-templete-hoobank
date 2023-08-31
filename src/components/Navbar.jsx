import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

        <ul className="list-none sm:flex hidden justify-end items-center">
          {navLinks.map((nav, index) => {
            return (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] ${
                  index === navLinks.lenght - 1 ? "mr-0" : "mr-10"
                } text-white mr-10 `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt=""
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => settoggle((prev) => !prev)}
          />
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col mx-auto items-center">
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] ${
                    index === navLinks.lenght - 1 ? "mr-0" : "mb-4"
                  } text-white  `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
