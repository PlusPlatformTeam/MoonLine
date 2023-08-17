import React from "react";
import "./webapp.css";
import closeTag from "../../assets/images/close-tag.png";
import OpenTag from "../../assets/images/open-tag.png";
import WhiteBall from "../../assets/images/white-ball.png";
import BlueBall from "../../assets/images/blue-ball.png";

import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const WebApp = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);

  return (
    <section id="webapp" className="w-full lg:h-screen gradiant-top-light">
      <div className="flex flex-col-reverse w-full lg:flex-row">
        <div
          className="w-full px-3 lg:mx-12 lg:mt-16 mt-24 lg:w-5/12 z-0"
          data-aos={`fade-down`}
          data-aos-duration={1500}
        >
          <div className="flex flex-row -mt-10 lg:mt-0 justify-center lg:justify-start">
            <img
              className={`ml-5 ${
                direction === "ltr" ? "rotate-180" : ""
              } h-10 lg:h-16`}
              src={OpenTag}
              alt="icon "
            />
            <h1
              className={`text-white font-bold  mt-3 md:mt-2 lg:mt-4  px-5 lg:px-5  ${
                direction === "ltr"
                  ? "text-md lg:text-1xl xl:text-2xl"
                  : "text-md lg:text-1xl xl:text-2xl"
              } `}
            >
              {t("webapp.title")}
            </h1>
            <img
              className={`mr-5 ${
                direction === "ltr" ? "rotate-180" : ""
              } h-10 lg:h-16`}
              src={closeTag}
              alt="icon "
            />
          </div>
          <p className="mt-12 text-xl font-normal text-white p-8 lg:p-8 leading-10">
            {t("webapp.desc")}
          </p>
          <Button
            myClass="hover:bg-blue-500 bg-custom-blue mt-16 mb-10 lg:ml-7 lg:mt-20 lg:mb-0"
            text={t("view-more")}
          />
        </div>

        <div className="flex justify-center -mt-24 lg:-mt-16 lg:w-7/12 text-center p-5 ">
          <div className="device-image justify-center text-center  mt-20 z-20 relative lg:-left-68 lg:mt-24 deviceCard">
          <img
            className={`absolute white-ball-position spin`}
            src={WhiteBall}
            alt="balls"
          />
             <img
            className={`absolute blue-ball-position blue-spin`}
            src={BlueBall}
            alt="balls"
          />

          </div>
        </div>


      </div>
    </section>
  );
};

export default WebApp;
