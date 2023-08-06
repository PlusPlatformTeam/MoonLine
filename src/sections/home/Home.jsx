import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import Cards from "../../assets/images/homeCards.png";
import DobleArrow from "../../assets/images/left-doble-arrow.png";
import LeftArrowService from "../../assets/images/left-arrow-service.png";
import UnderLine from "../../assets/images/underLine.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Home = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);

  const webappRef = useRef(null);
  const contactRef = useRef(null);

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

  return (
    <section id="home" className="bg-img">
      <div className="flex flex-row w-full">
        <div className="lg:w-5/12 w-full">
          <div className="block w-full relative">
            <h2 className="text-white font-bold text-3xl mt-16 mx-12">
              {t("home.modern-design")}{" "}
              <span className="relative font-bold text-5xl blue-base-color">
                {t("moonline")}
                <img
                  src={UnderLine}
                  alt="moonline underline"
                  className={`absolute left-1 ${
                    direction === "rtl" ? "top-20" : "top-16"
                  } hidden md:block`}
                />
              </span>
            </h2>
          </div>

          <h2 className="text-white font-normal text-xl mt-20 mx-12">
            {t("home.moonline-team-service")}&nbsp;
            <span className="blue-base-color">{t("home.team-service")}</span>
            &nbsp;{t("home.ready-to-grow")}
          </h2>

          <div className="flex flex-row mt-16 mx-12 w-full mb-2">
          
              <button class="relative bg-btn_color hover:bg-blue-500 rounded-full w-48 ">
              <a  
              href="#contact"
              ref={contactRef}
              aria-current="page"
              >
                <div className="flex justify-end">
                  <p className="text-white items-center ml-2 mt-1">
                    {t("home.order")}
                  </p>
                  <img
                    className={`h-8 opacity-50 ${
                      direction === "ltr" ? "rotate-180 ml-2 mr-2" : ""
                    }`}
                    src={DobleArrow}
                    alt="left arrow"
                  />
                </div>
                </a>
              </button>
        

            <button
              class={`p-4 relative ${
                direction === "ltr" ? "pr-3 ml-5" : "pl-6 w-48"
              }  mr-4 bg-transparent items-center rounded-full border border-blue-400 hover:bg-blue-500 rounded-ful`}
            >
              <a
                href="#webapp"
                ref={webappRef}
                aria-current="page"
              >

              <div className="flex justify-end">
                <p className="text-white items-center ml-2 -mt-1">
                  {t("home.moonline-service")}
                </p>
                <img
                  className={`h-5 ${
                    direction === "ltr" ? "rotate-180 ml-3" : ""
                  }`}
                  src={LeftArrowService}
                  alt="left arrow"
                />
              </div>
              </a>
            </button>
          </div>
        </div>

        <div className="w-7/12 hidden lg:block text-end justify-center ">
          <img className="w-full p-16 " src={Cards} alt="home cards image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
