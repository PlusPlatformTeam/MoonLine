import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Data from "./data";
import Icon from "../../assets/images/icon-about.png";
import "./about.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const About = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);
  const data = Data();
  
  return (
    <section dir="rtl" id="about" className="w-full gradiant-bottom-light">
      <div className="flex flex-row w-full">
        <div className="w-full mx-12 mt-16">
          <div className="flex flex-row ">
            <img className={`${direction==="rtl"?"ml-5":"mr-5"}`} src={Icon} alt="icon about us" />
            <h1 className="mt-3 text-3xl font-bold text-white ">{t("about.title")}</h1>
          </div>
          <Splide
            dir="ltr"
            options={{
              type: "loop",
              autoWidth: true,
              focus: "center",
              perPage: 3,
              gap: "1rem",
              rewind: true,
              pagination: false,
              autoplay: true,
              pauseOnHover: false,
              resetProgress: true,
            }}
            aria-label="About US"
          >
            {data.map(({ img, title, desc, bgColor }, index) => (
              <SplideSlide key={index}>
                <div className={`flex justify-center `}>
                  <img className="w-[290px] object-cover h-[290px] rounded-3xl" src={img} alt={title} />
                </div>
                <div className="text-center">
                  <h1 className="my-5 text-3xl font-bold text-white">
                    {title}
                  </h1>
                  <div className="relative px-8 text-center">
                    <span className={`relative ${bgColor} text-2xl px-6 py-2 rounded-3xl text-gray-50 z-2`}>
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
