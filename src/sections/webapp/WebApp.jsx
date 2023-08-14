import React from "react";
import "./webapp.css";
import closeTag from "../../assets/images/close-tag.png";
import OpenTag from "../../assets/images/open-tag.png";
import Devices from "../../assets/images/device-webapp.png";
import Balls from "../../assets/images/balls.png";
import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const WebApp = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);

  return (
    <section id="webapp" className="w-full md:h-screen gradiant-top-light">
      <div className="flex flex-col-reverse w-full md:flex-row">
        <div className="w-full px-3 md:mx-12 md:mt-16 mt-96 md:w-5/12" 
         data-aos={`fade-down`} data-aos-duration={1500} 
        
         >
          <div className="flex flex-row -mt-10 md:mt-0">
            <img
              className={`ml-5 ${
                direction === "ltr" ? "rotate-180" : ""
              } h-10 md:h-16`}
              src={OpenTag}
              alt="icon "
            />
            <h1
              className={`text-white font-bold  mt-3 px-8 md:px-0 ${
                direction === "ltr"
                  ? "text-lg md:text-3xl"
                  : "text-lg md:text-4xl"
              } `}
            >
              {t("webapp.title")}
            </h1>
            <img
              className={`mr-5 ${
                direction === "ltr" ? "rotate-180" : ""
              } h-10 md:h-16`}
              src={closeTag}
              alt="icon "
            />
          </div>
          <p className="mt-12 text-xl font-normal text-white p-8 md:p-8">
            {t("webapp.desc")}
          </p>
          <Button
            myClass="hover:bg-blue-500 bg-custom-blue mt-16 mb-10 md:mt-20 md:mb-0"
            text={t("view-more")}
          />
        </div>

        <div className="relative z-0 justify-center -mt-20 md:-mt-16 md:w-7/12 md:text-end ">
          <img
            className="absolute  z-0 w-[1200px] md:w-[1000px] p-20 mb-16 ellipse"
            src={Devices}
            alt="home cards"
          />
          {/* <img
            className={`absolute w-56 mt-28  md:w-[650px] ${direction==="rtl"?"right-24 -top-2 md:right-28 md:-mt-48 md:top-72":" ltr-position md:-mt-44 ml-24 md:ml-20"} spin`} 
            src={Balls}
            alt="balls"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default WebApp;
