import React from "react";
import Logo from "../../assets/images/navLogo.png";
import "./navbar.css";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";

const navbar = () => {
  return (
    <nav className=" border-gray-200 bg-black w-full">
      <div className="w-full flex flex-wrap items-center px-8 py-4 justify-between ">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </a>

        <ul className="flex flex-col font-medium p-4 md:p-0 mt-3 md:flex-row md:space-x-4 md:mt-0 md:border-0 text-white nav-list text-center justify-center">
          <li>
            <a
              href="#"
              className="block py-1 pl-3 pr-4  md:bg-transparent"
              aria-current="page"
            >
              صفحه اصلی
            </a>
          </li>
          <li>
            <a
              href="{{route('cinema.index')}}"
              className="block py-1 px-2   rounded-xl  transition delay-400"
              aria-current="page"
            >
              خدمات
            </a>
          </li>
          <li>
            <a
              href="{{route('cinema.index')}}"
              className="block py-1 px-2   rounded-xl  transition delay-400"
              aria-current="page"
            >
              نمونه کارها
            </a>
          </li>
          <li>
            <a
              href="{{route('cinema.index')}}"
              className="block py-1 px-2   rounded-xl  transition delay-400"
              aria-current="page"
            >
              تماس با ما
            </a>
          </li>
          <li>
            <a
              href="{{route('cinema.index')}}"
              className="block py-1 px-2  rounded-xl  transition delay-400"
              aria-current="page"
            >
              درباره ما
            </a>
          </li>
        </ul>

        <LanguageSwitch />
      </div>
    </nav>
  );
};

export default navbar;
