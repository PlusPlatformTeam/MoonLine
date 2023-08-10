import React from "react";
import "./design.css";
import Cards from "../../assets/images/cards-design.png";
import Icon from "../../assets/images/icon-design.png";
import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Design = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);


  return (
    <section id="design" className="w-full h-screen gradiant-bottom-light">
      <div className="flex flex-row w-full">
        <div className="relative left-0 justify-center hidden w-7/12 lg:block ">
          <img
            className={`absolute w-full py-14 pl-16 ${direction==="ltr"?"transform scale-x-[-1]":""} `}
            src={Cards}
            alt="home cards"
          />
        </div>

        <div className="w-full mx-12 mt-16 lg:w-5/12">
          <div className="flex flex-row ">
            <img
              className={`${direction==="rtl"?"ml-8":"mr-8"} w-8 h-8 mt-5 animate-ping`}
              src={Icon}
              alt="icon"
            />
            <h1 className="mt-3 text-4xl font-bold text-white ">
                {t("design.title")}{" "}
            </h1>
          </div>
          <p className="mt-12 text-xl font-normal text-white">
          {t("design.desc")}
          </p>

          <Button
            myClass="hover:bg-green-800 bg-custom-green"
            text=  {t("view-more")}
          />
        </div>
      </div>
    </section>
  );
};

export default Design;
