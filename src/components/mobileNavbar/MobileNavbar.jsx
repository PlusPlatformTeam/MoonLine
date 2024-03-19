import React from "react";
import Logo from "../../assets/images/navLogo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

const MobileNavbar = ({ isHidden, onHidden }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={`${
        isHidden ? "hidden" : ""
      } absolute transition-all flex flex-col gap-12 items-center pt-6 w-full h-full backdrop-blur-sm top-0 z-50 bg-black/[0.9] text-white text-3xl`}
    >
      <div className="w-full px-6">
        <IoClose className="text-4xl text-white hover:text-blue-500" onClick={() => { onHidden(true) }}/>
      </div>
      
      <img src={Logo} className="h-12 mr-3" alt="Moonline Logo" />
      
      <Link to="/#home">{t("navbar.home")}</Link>

      <Link to="/#Services">{t("navbar.services")}</Link>

      <Link to="/#webapp">{t("navbar.portfolio")}</Link>

      <Link to="/#contact">{t("navbar.contact")}</Link>

      <Link to="/#about">{t("navbar.about-us")}</Link>
    </div>
  );
};

export default MobileNavbar;
