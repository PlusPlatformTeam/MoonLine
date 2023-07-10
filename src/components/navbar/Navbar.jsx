import React from "react";
import Logo from "../../assets/images/navLogo.png";
import "./navbar.css";

const navbar = () => {
  return (
    <nav className="bg-white border-gray-200 bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-2 py-4 ">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </a>

        <ul className="flex flex-col font-medium p-4 md:p-0 mt-3 md:flex-row md:space-x-4 md:mt-0 md:border-0 text-white nav-list">
          <li>
            <a
              href="#"
              className="block py-1 pl-3 pr-4  md:bg-transparent  md:bg-transparent"
              aria-current="page"
            >
              <i className="w-5 h-5 inline-block mr-2 fa-solid fa-clapperboard" />
              صفحه اصلی
            </a>
          </li>
          <li>
            <a
              href="{{route('cinema.index')}}"
              className="block py-1 px-2   rounded-xl  transition delay-400"
              aria-current="page"
            >
              <i className="w-5 h-5 inline-block mr-2 fa-solid fa-film" />
              خدمات
            </a>
          </li>
          <li>
            <a
              href="{{route('cinema.index')}}"
              className="block py-1 px-2   rounded-xl  transition delay-400"
              aria-current="page"
            >
              <i className="w-5 h-5 inline-block mr-2 fa-solid fa-film" />
              نمونه کارها
            </a>
          </li>
          <li>
            <a
              href="{{route('cinema.index')}}"
              className="block py-1 px-2   rounded-xl  transition delay-400"
              aria-current="page"
            >
              <i className="w-5 h-5 inline-block mr-2 fa-solid fa-film" />
              تماس با ما
            </a>
          </li>
          <li>
            <a
              href="{{route('cinema.index')}}"
              className="block py-1 px-2  rounded-xl  transition delay-400"
              aria-current="page"
            >
              <i className="w-5 h-5 inline-block mr-2 fa-solid fa-film" />
              درباره ما
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
