import React from "react";
import "./footer.css";
import data from "./data";
import Logo from "../../assets/images/footer-image.png";
import DotedBg from "../../assets/images/doted-bg.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Footer = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);

  return (
    <section className="w-full overflow-hidden ">
      <div className="flex flex-row w-full ">
        {/* <div className="relative hidden lg:block">
          <img
            src={DotedBg}
            alt="doted background"
            className="absolute right-0 hidden h-80 md:block "
          />
          <div className="absolute flex flew-row right-16 top-8">
            <div className="w-1 h-64 bg-blue-600 "></div>

            <div className="relative right-2 w-28">
              <h1 className="mt-1 text-xl font-semibold text-white ">
                {t("navbar.home")}
              </h1>
              <h1 className="text-xl font-semibold text-white mt-7">
                {" "}
                {t("navbar.services")}
              </h1>
              <h1 className="text-xl font-semibold text-white mt-7">
                {t("navbar.portfolio")}{" "}
              </h1>
              <h1 className="text-xl font-semibold text-white mt-7">
              {t("navbar.about-us")}

              </h1>
              <h1 className="text-xl font-semibold text-white mt-7">
              {t("navbar.contact")}
              </h1>
            </div>
          </div>
        </div> */}
        <div className="justify-center block w-full text-center">
          <h1 className="mt-12 text-2xl font-bold text-white">
            {t("footer.title")}
          </h1>

          <div className="flex flex-row flex-wrap justify-center w-full mt-16 text-center ">
            {data.map((item, index) => (
              <a href={item.click} key={index}>
                <img src={item.logo} className="h-12 md:mr-10 mr-5" alt={item.logo}/>
              </a>
            ))}
          </div> 
          <div className="mt-5">
            <span className="text-white">Your brand on the line</span>
          </div>
          
          <h1 className="mt-12 text-2xl font-bold text-white">
            {t("footer.all-rights")}{" "}
            <span className="blue-base-color">
              {" "}
              {t("footer.moonline-team")}
            </span>
          </h1>
        </div>

        <img
          src={Logo}
          alt="footer logo"
          className="absolute left-0 hidden h-80 md:block "
        />
      </div>
    </section>
  );
};

export default Footer;
