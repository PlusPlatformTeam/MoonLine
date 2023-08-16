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
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="w-full md:mx-12 -mt-16 md:mt-16 md:w-7/12 lg:w-5/12 mx-auto md:p-0 p-8" data-aos={`fade-down`} data-aos-duration={1500}>
          <div className="flex flex-row  title">
            <h1 className="mt-3 md:text-3xl text-xl font-bold text-white relative">
              <img
                className={`absolute ${
                  direction === "rtl" ? "md:-left-12 -left-10" : "md:-right-12 -right-10"
                } w-8 md:w-10 -mt-1 md:mt-0`}
                src={Icon}
                alt="icon"
              />
              {t("advertisement.title")}
            </h1>
          </div>
          <p className="mt-12 text-xl font-normal text-white leading-10" style={{ whiteSpace: 'pre-line' }}>
            {t("advertisement.desc")}
          </p>

          <Button
            myClass="hover:bg-yellow-600 bg-custom-yellow"
            text={t("view-more")}
          />
        </div>
        <div className="justify-center md:p-0 md:w-5/12 lg:w-7/12 w-full md:text-end" data-aos={`fade-down`} data-aos-duration={1500}>
          <img className=" p-5 mx-auto md:mx-0" src={Cards} alt="home cards" />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
