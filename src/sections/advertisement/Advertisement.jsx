import React from "react";
import "./advertisement.css";
import Cards from "../../assets/images/cards-advertisement.png";
import Icon from "../../assets/images/icon-advertisement.png";
import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Advertisement = () => {

  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);

  return (
    <section id="advertisement" className="w-full h-screen gradiant-top-light">
      <div className="flex flex-row w-full">
        <div className="w-full mx-12 mt-16 lg:w-5/12">
          <div className="flex flex-row ">

            <img className={`${direction==="rtl"?"ml-5":"mr-5"}`} src={Icon} alt="icon" />
            <h1 className="mt-3 text-3xl font-bold text-white ">
              {t("advertisement.title")}
            </h1>
          </div>
          <p className="mt-12 text-xl font-normal text-white">
          {t("advertisement.desc")}
          </p>

          <Button
            myClass="hover:bg-yellow-600 bg-custom-yellow"
            text= {t("view-more")}
          />
        </div>
        <div className="justify-center hidden w-7/12 lg:block text-end ">
          <img className="w-full p-5 " src={Cards} alt="home cards" />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
