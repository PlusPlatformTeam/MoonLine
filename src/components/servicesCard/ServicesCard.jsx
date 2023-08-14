import React,{useRef,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import "./servicecard.css";

const ServiceCard = ({ logo, title, desc, bgColor, color, handleCardHover, delay }) => {
  let refToUse;
  let href;
  
  const direction = useSelector((state) => state.direction);
  const webappRef = useRef(null);
  const advertisementRef = useRef(null);
  const designRef = useRef(null);
  
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  const handleMouseOver = () => {
    handleCardHover(color);
  };

  const handleMouseOut = () => {
    handleCardHover("blue");
  };

  if (color === "blue") {
    refToUse = webappRef;
    href="#webapp";
  } else if (color === "yellow") {
    refToUse = advertisementRef;
    href="#advertisement";
  } else {
    refToUse = designRef;
    href="#design";

  }
  const alignAnimate = direction === 'ltr' ? 'left' : 'left';
  return (
    <div data-aos={`fade-${alignAnimate}`} data-aos-duration={delay}  className="p-0 px-3 m-0 mb-32 lg:basis-4/12 md:basis-6/12 sm:basis-12/12">
      <a
      data-aos={`fade-${alignAnimate}`} data-aos-duration={delay} 
        href={href}
       ref={refToUse}
        aria-current="page"
      >
      <div
        data-aos={`fade-${alignAnimate}`} data-aos-duration={delay} 
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
        <p className="px-3 text-center">{desc}</p>
        <div className="relative flex justify-center w-full pb-4 mt-24">
          <span className={`flex justify-center items-center icon ${color}`}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
      </div>
      </a>
    </div>
  );
};

export default ServiceCard;