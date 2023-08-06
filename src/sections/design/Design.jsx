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
    <section id="design" className=" w-full h-screen gradiant-bottom-light">
      <div className="flex flex-row w-full">
        <div className="relative w-7/12 hidden lg:block left-0 justify-center  ">
          <img
            className={`absolute w-full py-14 pl-16 ${direction==="ltr"?"transform scale-x-[-1]":""} `}
            src={Cards}
            alt="home cards image"
          />
        </div>

        <div className="lg:w-5/12 w-full mt-16 mx-12">
          <div className="flex flex-row ">
            <img
              className={`${direction==="rtl"?"ml-8":"mr-8"} w-8 h-8 mt-5 animate-ping`}
              src={Icon}
              alt="icon image"
            />
            <h1 className="text-white font-bold text-4xl mt-3 ">
                {t("design.title")}{" "}
            </h1>
          </div>
          <p className="text-white font-normal text-xl mt-12">
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
