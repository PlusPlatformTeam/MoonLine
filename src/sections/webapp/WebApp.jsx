import React from "react";
import "./webapp.css";
import closeTag from "../../assets/images/close-tag.png";
import OpenTag from "../../assets/images/open-tag.png";
import Devices from "../../assets/images/device-webapp.png";
import Balls from "../../assets/images/balls.png";
import Button from "../../components/button/Button";

const WebApp = () => {
  return (
    <section id="webapp" className="w-full h-screen gradiant-top-light">
      <div className="flex flex-row w-full">
        <div className="w-full mx-12 mt-16 lg:w-5/12">
          <div className="flex flex-row ">
            <img className="ml-5" src={OpenTag} alt="icon " />
            <h1 className="mt-3 text-4xl font-bold text-white ">
              توسعه سایت و اپلیکیشن
            </h1>
            <img className="mr-5" src={closeTag} alt="icon " />
          </div>
          <p className="mt-12 text-xl font-normal text-white">
            رصحنم غیلبت کی زا رتشیب دیدزاب و یرتشم بذج .دوشیم لصاح درف هب نایامن
            ،امش یعامتجا یاه هکبش رگید یوس زا .دوب دهاوخ ناتدنرب هدننک و هبرجت
            اب ،صصختم دارفا عمجت رد ،نیال نوم .دوشیم هصالخ قالخ
          </p>
          <Button
            myClass="hover:bg-blue-500 bg-custom-blue"
            text="نمونه کارهای بیشتر"
          />
        </div>

        <div className="relative z-0 justify-center hidden w-7/12 lg:block text-end">
          <img
            className="absolute z-0 w-full p-20 mb-16 ellipse"
            src={Devices}
            alt="home cards"
          />
          <img
            className="absolute w-full mb-16 p-14 spin"
            src={Balls}
            alt="balls"
          />
        </div>
      </div>
    </section>
  );
};

export default WebApp;
