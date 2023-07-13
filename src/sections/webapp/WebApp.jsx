import React from "react";
import "./webapp.css";
import closeTag from "../../assets/images/close-tag.png";
import OpenTag from "../../assets/images/open-tag.png";
import Devices from "../../assets/images/device-webapp.png";
import Balls from "../../assets/images/balls.png";


const WebApp = () => {
  return (
    <section className=" w-full h-screen gradiant-top-light">
      <div className="flex flex-row w-full">
        <div className="lg:w-5/12 w-full mt-16 mx-12">
          <div className="flex flex-row ">
            <img className="ml-5" src={OpenTag} alt="icon image" />
            <h1 className="text-white font-bold text-4xl mt-3 ">
              توسعه سایت و اپلیکیشن
            </h1>
            <img className="mr-5" src={closeTag} alt="icon image" />
          </div>
          <p className="text-white font-normal text-xl mt-12">
            رصحنم غیلبت کی زا رتشیب دیدزاب و یرتشم بذج .دوشیم لصاح درف هب نایامن
            ،امش یعامتجا یاه هکبش رگید یوس زا .دوب دهاوخ ناتدنرب هدننک و هبرجت
            اب ،صصختم دارفا عمجت رد ،نیال نوم .دوشیم هصالخ قالخ
          </p>
          <button type="button" class="text-white my-36 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            نمونه کارهای بیشتر
          </button>
        </div>

        <div className="relative w-7/12 hidden lg:block text-end justify-center  ">
          <img className="absolute w-full p-28 mb-16 z-0 " src={Devices} alt="home cards image" />
          <img className=" absolute w-full p-24 mb-16 ellipse" src={Balls} alt="balls" />

        </div>
      </div>
    </section>
  );
};

export default WebApp;
