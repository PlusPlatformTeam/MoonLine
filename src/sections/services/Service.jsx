import React, { useState } from "react";
import data from "./data";
import langData from "../../lang/lang-fa";
import ServiceCard from "../../components/servicesCard/ServicesCard";

function Services() {
  const [headerBgColor, setHeaderBgColor] = useState("blue");

  const handleCardHover = (color) => {
    setHeaderBgColor(color);
  };

  return (
    <section id="services" className="pt-8 gradiant-bottom-light h-100">
      <header className="text-center">
        <div className="relative inline-block px-8 text-center">
          <p
            id="bg-services-header"
            className={`absolute right-0 w-48 rounded-sm h-7 bg-semi-transparent-${headerBgColor}`}
          ></p>
          <span className="relative text-4xl text-gray-50 z-2">
            {langData.services.title}
          </span>
        </div>
        <p className="mt-4 text-gray-400">{langData.services.desc}</p>
      </header>
      <div className="flex flex-row flex-wrap justify-between w-full mt-16 sm:justify-center lg:justify-between md:justify-between">
        {data.map((item, index) => (
          <ServiceCard
            key={index}
            {...item}
            handleCardHover={handleCardHover}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;