import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Data from "./data";
import Icon from "../../assets/images/icon-about.png";
import "./about.css";

const About = () => {
  const data = Data();
  return (
    <section id="about" className="w-full h-screen gradiant-bottom-light">
      <div className="flex flex-row w-full">
        <div className="w-full mx-12 mt-16">
          <div className="flex flex-row ">
            <img className="ml-5" src={Icon} alt="icon about us" />
            <h1 className="mt-3 text-3xl font-bold text-white ">درباره ما </h1>
          </div>
          <Splide
            dir="ltr"
            options={{
              type: "loop",
              autoWidth: true,
              focus: "center",
              perPage: 3,
              rewind: true,
              pagination: false,
              autoplay: true,
              pauseOnHover : false,
              resetProgress: false,
            }}
            aria-label="About US"
          >
            {data.map(({ img, title, desc, bgColor }, index) => (
              <SplideSlide key={index}>
                <div
                  className={`flex justify-center `}
                >
                  <img className="w-5/6" src={img} alt={title} />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold my-5 text-white">
                    {title}
                  </h1>
                  <div className="relative px-8 text-center">
                    <p
                      id="bg-services-header"
                      className={`absolute bottom-[-12px] right-[24%] w-64 rounded-sm h-7 ${bgColor}`}
                    ></p>
                    <span className="relative text-2xl text-gray-50 z-2">
                      {desc}
                    </span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default About;
