import React from "react";
import "./design.css";
import Cards from "../../assets/images/cards-design.png";
import Icon from "../../assets/images/icon-design.png";
import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Design = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);

  return (
    <section id="design" className="w-full section gradiant-bottom-light">
      <div className="block w-full md:flex md:flex-row">
        <div className="relative left-0 md:w-7/12 " data-aos={`fade-down`} data-aos-duration={1500} >
          <img
            className={`cards absolute w-full md:py-2 md:pl-16 ${
              direction === "ltr" ? "transform scale-x-[-1]" : ""
            } `}
            src={Cards}
            alt="home cards"
          />
        </div>

        <div className="w-full px-8 mx-auto sm:py-24 md:mx-12 pt-96 sm:pt-96 md-px-0 md:mt-10 md:pt-0 md:w-5/12"  data-aos={`fade-down`} data-aos-duration={1500}>
          <div className="flex flex-row ">
           
            <h1 className="relative mt-3 text-3xl font-bold text-white md:text-4xl title">
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
          <p className="mt-12 text-xl font-normal leading-10 text-white" style={{ whiteSpace: 'pre-line' }}>
            {t("design.desc")}
          </p>

          <Link to='resume'>
            <Button
              myClass="hover:bg-green-800 bg-custom-green "
              text={t("view-more")}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Design;
