import Logo from "../../assets/images/navLogo.png";
import "./navbar.css";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";
import { useTranslation } from "react-i18next";

const Navbar = ({ changeLanguage, handleDirChange }) => {
  const { t } = useTranslation();



  return (
    <nav dir="rtl" className="w-full bg-black border-gray-200 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between w-full px-8 py-4 ">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </a>

        <ul className="flex flex-col justify-center p-4 mt-3 font-medium text-center text-white md:p-0 md:flex-row md:space-x-4 md:mt-0 md:border-0 nav-list">
          <li>
            <a
              href="#home"
              className="block py-1 pl-3 pr-4 md:bg-transparent"
              aria-current="page"
            >
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block px-2 py-1 transition rounded-xl delay-400"
              aria-current="page"
            >
              {t("navbar.services")}
            </a>
          </li>
          <li>
            <a
              href="#webapp"
              className="block px-2 py-1 transition rounded-xl delay-400"
              aria-current="page"
            >
              {t("navbar.portfolio")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-2 py-1 transition rounded-xl delay-400"
              aria-current="page"
            >
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-2 py-1 transition rounded-xl delay-400"
              aria-current="page"
            >
              {t("navbar.about-us")}
            </a>
          </li>
        </ul>

        <LanguageSwitch />
      </div>
    </nav>
  );
};

// export default Navbar;
export default Navbar;
