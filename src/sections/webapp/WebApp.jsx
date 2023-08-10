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
    <section id="webapp" className="w-full h-screen gradiant-top-light">
      <div className="flex flex-col-reverse w-full md:flex-row">
        <div className="w-full px-3 md:mx-12 mt-16 md:w-5/12">
          <div className="flex flex-row ">
            <img className={`ml-5 ${direction==="ltr"?"rotate-180":""}`} src={OpenTag} alt="icon " />
            <h1 className={`text-white font-bold  mt-3 ${direction==="ltr"?"text-3xl":"text-4xl"} `}>
              {t("webapp.title")}
            </h1>
            <img className={`mr-5 ${direction==="ltr"?"rotate-180":""}`} src={closeTag} alt="icon " />
          </div>
          <p className="mt-12 text-xl font-normal text-white">
            {t("webapp.desc")}
          </p>
          <Button
            myClass="hover:bg-blue-500 bg-custom-blue"
            text={t("view-more")}
          />
        </div>

        <div className="relative z-0 justify-center md:w-7/12 hidden md:block md:text-end">
          <img
            className="absolute z-0 w-full p-20 mb-16 ellipse"
            src={Devices}
            alt="home cards"
          />
          <img
            className="absolute w-full mb-16 p-14 spin"
            src={Balls}
            alt="balls"
          />
        </div>
      </div>
    </section>
  );
};

export default WebApp;
