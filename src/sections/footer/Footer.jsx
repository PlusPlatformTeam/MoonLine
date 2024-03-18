import React from "react";
import "./footer.css";
import data from "./data";
import Logo from "../../assets/images/footer-image.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-row w-full ">
     
        <div className="justify-center block w-full text-center">
          <h1 className="mt-12 text-2xl font-bold text-white">
            {t("footer.title")}
          </h1>

          <div className="flex flex-row flex-wrap justify-center w-full mt-16 text-center ">
            {data.map((item, index) => (
              <a href={item.click} key={index}>
                <img loading="lazy" src={item.logo} className="h-12 md:mr-10 mr-5" alt={item.logo}/>
              </a>
            ))}
          </div> 
          <div className="mt-5">
            <span className="text-white">Your brand on the line</span>
          </div>
          
          <h1 className="mt-12 md:text-xl text-lg pb-5 font-bold text-white">
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
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Footer;
