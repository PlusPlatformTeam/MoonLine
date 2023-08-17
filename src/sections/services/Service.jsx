import React, { useState } from "react";
import Data from "./data";
import { useTranslation } from "react-i18next";
import ServiceCard from "../../components/servicesCard/ServicesCard";
import { useSelector } from "react-redux";

function Services() {
  const direction = useSelector((state) => state.direction);
  const [headerBgColor, setHeaderBgColor] = useState("blue");
  const { t } = useTranslation();
  const handleCardHover = (color) => {
    setHeaderBgColor(color);
  };

  const data = Data();
  return (
    <section id="services" className="pt-8 gradiant-bottom-light h-100">
      <header className="text-center">
        <div
          className={`relative inline-block ${
            direction === "ltr" ? "pl-8" : "pr-8"
          } text-center`}
        >
          <p
            id="bg-services-header"
            className={`absolute margin-auto justify-center text-center mr-3 right-0 w-48 rounded-sm h-7 bg-semi-transparent-${headerBgColor}`}
          ></p>
          <span className="relative text-4xl text-gray-50 z-2">
            {t("services.title")}
          </span>
        </div>
        <p className="mt-4 text-gray-400">{t("services.desc")}</p>
      </header>
      <div className="flex flex-row flex-wrap justify-between w-full mt-16 sm:justify-center lg:justify-between md:justify-between">
        {data.map((item, index) => {
          const delay = (index + 1) * 1000;

          return (
            <ServiceCard
              key={index}
              {...item}
              delay={delay}
              handleCardHover={handleCardHover}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
