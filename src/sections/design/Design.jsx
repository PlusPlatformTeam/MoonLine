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
      <div className="md:flex block md:flex-row w-full">
        <div className="relative left-0 md:w-7/12 ">
          <img
            className={`cards absolute w-full md:py-2 md:pl-16 ${
              direction === "ltr" ? "transform scale-x-[-1]" : ""
            } `}
            src={Cards}
            alt="home cards"
          />
        </div>

        <div className="w-full sm:py-24 px-8 md:mx-12 mx-auto pt-96 sm:pt-96 md-px-0 md:mt-10 md:pt-0 md:w-5/12">
          <div className="flex flex-row ">
           
            <h1 className="mt-3 md:text-4xl title text-3xl font-bold text-white relative">
            <img
              className={`md:w-8 w-5 md:h-8 h-5 mt-2  md:mt-1 animate-ping absolute ${
                direction === "rtl" ? "-right-9 md:-right-14" : "-left-9 md:-left-14"
              }`}
              src={Icon}
              alt="icon"
            />
              {t("design.title")}{" "}
            </h1>
          </div>
          <p className="mt-12 text-xl font-normal text-white">
            {t("design.desc")}
          </p>

          <Button
            myClass="hover:bg-green-800 bg-custom-green "
            text={t("view-more")}
          />
        </div>
      </div>
    </section>
  );
};

export default Design;
