import React from "react";
import "./design.css";
import Cards from "../../assets/images/cards-design.png";
import Icon from "../../assets/images/icon-design.png";

const Design = () => {
  return (
    <section className=" w-full h-screen gradiant-bottom-light">
      <div className="flex flex-row w-full">
        <div className="relative w-7/12 hidden lg:block right-0 justify-center  ">
          <img
            className="absolute w-full py-16 pl-16  "
            src={Cards}
            alt="home cards image"
          />
        </div>

        <div className="lg:w-5/12 w-full mt-16 mx-12">
          <div className="flex flex-row ">
            <img
              className="ml-8 w-8 h-8 mt-5 animate-ping"
              src={Icon}
              alt="icon image"
            />
            <h1 className="text-white font-bold text-4xl mt-3 ">
              طراحی و برندسازی{" "}
            </h1>
          </div>
          <p className="text-white font-normal text-xl mt-12">
            رصحنم غیلبت کی زا رتشیب دیدزاب و یرتشم بذج .دوشیم لصاح درف هب نایامن
            ،امش یعامتجا یاه هکبش رگید یوس زا .دوب دهاوخ ناتدنرب هدننک و هبرجت
            اب ،صصختم دارفا عمجت رد ،نیال نوم .دوشیم هصالخ قالخ
          </p>

          <button
            type="button"
            class="text-white my-36 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            نمونه کارهای بیشتر
          </button>
        </div>
      </div>
    </section>
  );
};

export default Design;
