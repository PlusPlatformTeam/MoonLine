import React, { useEffect, useRef } from "react";
import "./home.css";
import Cards from "../../assets/images/homeCards.png";
import EnCards from "../../assets/images/homeCardsLtr.png";
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
    <section id="home" className= {`section ${direction==="rtl"?"bg-img-rtl":"bg-img-ltr"} bg-setting`}>
      <div className={`flex  w-full flex-col-reverse md:flex-row`}>
        <div className="w-full md:w-5/12">
          <div className="relative block w-full">
            <h2 className="mx-12 md:mt-16 text-2xl md:text-3xl font-bold text-white">
              {t("home.modern-design")}{" "}
              <span className="relative text-3xl md:text-5xl font-bold blue-base-color size-text">
                {t("moonline")}
                <img
                  src={UnderLine}
                  alt="moonline underline"
                  className={`absolute left-1 ${
                    direction === "rtl" ? " top-[3.5rem] md:top-20" : "top-[3rem] md:top-16"
                  } `}
                />
              </span>
            </h2>
          </div>
          <h2 className="mx-12 mt-16 md:mt-20 text-xl font-normal text-white leading-10">
            {t("home.moonline-team-service")}&nbsp;
            <span className="blue-base-color">{t("home.team-service")}</span>
            &nbsp;{t("home.ready-to-grow")}
          </h2>

          <div className="flex flex-row w-full md:mx-12 mt-8 md:mt-16 mb-2 btn-container px-5">
            <button className="relative bg-btn_color hover:bg-blue-500 rounded-full w-52 ">
              <a href="#contact" ref={contactRef} aria-current="page">
                <div className="flex justify-end">
                  <p className="items-center md:-mt-[1px] mt-2 ml-5 md:ml-5 text-xs md:text-lg font-semibold text-white">
                    {t("home.order")}
                  </p>
                  <img
                    className={`h-8 opacity-50 ${
                      direction === "ltr" ? "rotate-180 ml-2 mr-2 " : ""
                    }`}
                    src={DobleArrow}
                    alt="left arrow"
                  />
                </div>
              </a>
            </button>

            <button
              className={`p-4 relative w-52 ${direction==="ltr"?"ml-2":""}
              }  mr-4 bg-transparent items-center rounded-full border border-blue-400 hover:bg-blue-500 rounded-ful`}
            >
              <a href="#webapp" ref={webappRef} aria-current="page">
                <div className="flex justify-end">
                  <p
                    className={`items-center  md:-mt-1 text-xs font-semibold md:text-lg text-white ${
                      direction === "rtl" ? "ml-2" : "mr-4"
                    }`}
                  >
                    {t("home.moonline-service")}
                  </p>
                  <img
                    className={`h-5 ${
                      direction === "ltr" ? "rotate-180 ml-3" : "ml-1"
                    }`}
                    src={LeftArrowService}
                    alt="left arrow"
                  />
                </div>
              </a>
            </button>
          </div>
        </div>

        <div className="justify-center md:w-7/12 text-end ">
          <img
            className="w-full p-5 md:px-1 md:py-20 lg:p-16 xl:p-16 "
            src={direction==="rtl"?Cards:EnCards}
            alt="home cards"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
