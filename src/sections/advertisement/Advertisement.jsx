import React from "react";
import "./advertisement.css";
import Cards from "../../assets/images/cards-advertisement.png";
import Icon from "../../assets/images/icon-advertisement.png";
import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Advertisement = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);

  return (
    <section id="advertisement" className="w-full section gradiant-top-light">
      <div className="flex flex-col-reverse w-full md:flex-row">
        <div className="w-full p-8 mx-auto -mt-16 md:mx-12 md:mt-16 md:w-7/12 lg:w-5/12 md:p-0" data-aos={`fade-down`} data-aos-duration={1500}>
          <div className="flex flex-row title">
            <h1 className="relative flex flex-row mt-3 text-xl font-bold text-white md:text-3xl">
              <img
                loading="lazy"
                className={`w-5 h-5 md:w-10 md:h-10 ${direction==="rtl"?"ml-3":"mr-3 md:-mt-1"}`}
                src={Icon}
                alt="icon"
              />
              {t("advertisement.title")}
            </h1>
          </div>
          <p className="mt-12 text-xl font-normal leading-10 text-white" style={{ whiteSpace: 'pre-line' }}>
            {t("advertisement.desc")}
          </p>

          <Link to='/resume?category=advertise'>
            <Button
              myClass="hover:bg-yellow-600 bg-custom-yellow"
              text={t("view-more")}
            />
          </Link>
        </div>
        <div className="justify-center w-full md:p-0 md:w-5/12 lg:w-7/12 md:text-end" data-aos={`fade-down`} data-aos-duration={1500}>
          <img loading="lazy" className="p-5 mx-auto md:mx-0" src={Cards} alt="home cards" />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
