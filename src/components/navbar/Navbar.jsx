import Logo from "../../assets/images/navLogo.png";
import "./navbar.css";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { isBaseUrl } from './../../utility/util';

const Navbar = ({ changeLanguage, handleDirChange }) => {
  const { t } = useTranslation();
  
  return (
    <nav id="navbar" dir="rtl" className="w-full overflow-hidden bg-black border-gray-200 nav-bar">
      <div className="flex flex-wrap items-center justify-between w-full px-2 py-5 lg:px-6 md:px-6">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Moonline Logo" />
        </Link>

        <ul className="flex flex-col justify-center p-4 mt-3 font-medium text-center text-white md:p-0 md:flex-row md:space-x-4 md:mt-0 md:border-0 nav-list">
          <li>
            <a
              href={isBaseUrl() ? '#home' : '/#home'}
              className="block py-1 pl-3 pr-4 md:bg-transparent"
              aria-current="page"
            >
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a
              href={isBaseUrl() ? '#services' : '/#services'}
              className="block px-2 py-1 transition rounded-xl delay-400"
              aria-current="page"
            >
              {t("navbar.services")}
            </a>
          </li>
          <li>
            <a
              href={isBaseUrl() ? '#webapp' : '/#webapp'}
              className="block px-2 py-1 transition rounded-xl delay-400"
              aria-current="page"
            >
              {t("navbar.portfolio")}
            </a>
          </li>
          <li>
            <a
              href={isBaseUrl() ? '#contact' : '/#contact'}
              className="block px-2 py-1 transition rounded-xl delay-400"
              aria-current="page"
            >
              {t("navbar.contact")}
            </a>
          </li>
          <li>
            <a
              href={isBaseUrl() ? '#about' : '/#about'}
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
