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
    <section id="webapp" className=" w-full h-screen gradiant-top-light">
      <div className="flex flex-row w-full">
        <div className="lg:w-5/12 w-full mt-16 mx-12">
          <div className="flex flex-row ">
            <img className={`ml-5 ${direction==="ltr"?"rotate-180":""}`} src={OpenTag} alt="icon image" />
            <h1 className={`text-white font-bold  mt-3 ${direction==="ltr"?"text-3xl":"text-4xl"} `}>
              {t("webapp.title")}
            </h1>
            <img className={`mr-5 ${direction==="ltr"?"rotate-180":""}`} src={closeTag} alt="icon image" />
          </div>
          <p className="text-white font-normal text-xl mt-12">
            {t("webapp.desc")}
          </p>
          <Button
            myClass="hover:bg-blue-500 bg-custom-blue"
            text={t("view-more")}
          />
        </div>

        <div className="relative z-0 w-7/12 hidden lg:block text-end justify-center">
          <img
            className="absolute w-full p-20 mb-16 z-0 ellipse"
            src={Devices}
            alt="home cards image"
          />
          <img
            className="absolute w-full p-14 mb-16 spin"
            src={Balls}
            alt="balls"
          />
        </div>
      </div>
    </section>
  );
};

export default WebApp;
