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
    <section id="advertisement" className=" w-full h-screen gradiant-top-light">
      <div className="flex flex-row w-full">
        <div className="lg:w-5/12 w-full mt-16 mx-12">
          <div className="flex flex-row ">
            <img className={`${direction==="rtl"?"ml-5":"mr-5"}`} src={Icon} alt="icon image" />
            <h1 className="text-white font-bold text-3xl mt-3 ">
              {t("advertisement.title")}
            </h1>
          </div>
          <p className="text-white font-normal text-xl mt-12">
          {t("advertisement.desc")}
          </p>

          <Button
            myClass="hover:bg-yellow-600 bg-custom-yellow"
            text= {t("view-more")}
          />
        </div>

        <div className="w-7/12 hidden lg:block text-end justify-center ">
          <img className="w-full p-5 " src={Cards} alt="home cards image" />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
