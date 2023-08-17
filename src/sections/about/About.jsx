import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Data from "./data";
import Icon from "../../assets/images/icon-about.png";
import Logo from "../../assets/images/logo-about.png";
import "./about.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const About = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);
  const data = Data();

  return (
    <section
      dir="rtl"
      id="about"
      className="w-full h-full overflow-hidden gradiant-bottom-light"
    >
      <div className="flex flex-row w-full overflow-hidden">
        <div className="w-full mt-16 overflow-x-hidden">
          <div className={`lg:mx-12 mt-16 md:mx-6 mx-3 overflow-hidden flex ${direction === "rtl" ? "flex-row" : "flex-row-reverse"}`}>
            <img
              className={`${direction === "rtl" ? "ml-5" : "mr-5"}`}
              src={Icon}
              alt="icon about us"
            />
            <h1 className="mx-4 mt-3 text-3xl font-bold text-white ">
              {t("about.title")}
            </h1>
          </div>
          <Splide
            className="mt-20 overflow-hidden"
            dir="ltr"
            options={{
              type: "loop",
              autoWidth: true,
              focus: "center",
              perPage: 1,
              gap: "2rem",
              rewind: true,
              pagination: false,
              autoplay: true,
              pauseOnHover: true,
              resetProgress: true,
            }}
            aria-label="About US"
          >
            {data.map(({ img, title, desc, bgColor }, index) => (
              <SplideSlide className="overflow-hidden min-h-[490px]" key={index}>
                <div className="flex justify-center overflow-hidden hovereffect">
                  <div className="overlay">
                    <img src={Logo} alt="Moonline logo" />
                    <a style={{ left: direction === "rtl" ? '30%' : '35%' }} class="info" href="#vds">
                      {t("about.seeMore")}
                    </a>
                  </div>
                  <img
                    className="w-[300px] object-cover h-[300px] rounded-3xl mb-4"
                    src={img}
                    alt={title}
                  />
                </div>
                <div className="mt-5 text-center">
                  <h1 className="my-5 text-3xl font-bold text-white">
                    {title}
                  </h1>
                  <div className="relative px-8 text-center">
                    <span
                      className={`relative ${bgColor} text-2xl px-6 py-2 rounded-3xl text-gray-50 z-2`}
                    >
                      {desc}
                    </span>
                  </div>
                </div>
              </SplideSlide>
            ))}
            <div className="hidden splide__arrows"></div>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default About;
