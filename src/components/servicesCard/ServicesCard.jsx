import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./servicecard.css";

const ServiceCard = ({ logo, title, desc, bgColor, color, handleCardHover }) => {
  const handleMouseOver = () => {
    handleCardHover(color);
  };

  const handleMouseOut = () => {
    handleCardHover("blue");
  };

  return (
    <div className="p-0 px-3 m-0 mb-32 lg:basis-4/12 md:basis-6/12 sm:basis-12/12">
      <div
        className={`card-container relative text-center opacity-100 text-gray-50 cursor-pointer ${bgColor}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="flex justify-center">
          <img
            className="object-contain w-48 h-44"
            src={logo}
            alt={title}
          />
        </div>
        <h3 className="my-5 text-3xl text-center">{title}</h3>
        <p className="mx-3 text-center">{desc}</p>
        <div className="relative flex justify-center w-full pb-4 mt-24">
          <span className={`flex justify-center items-center icon ${color}`}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;