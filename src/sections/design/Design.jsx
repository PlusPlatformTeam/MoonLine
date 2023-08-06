import React from "react";
import "./design.css";
import Cards from "../../assets/images/cards-design.png";
import Icon from "../../assets/images/icon-design.png";
import Button from "../../components/button/Button";
const Design = () => {
  return (
    <section className="w-full h-screen gradiant-bottom-light">
      <div className="flex flex-row w-full">
        <div className="relative right-0 justify-center hidden w-7/12 lg:block ">
          <img
            className="absolute w-full py-16 pl-16 "
            src={Cards}
            alt="home cards"
          />
        </div>

        <div className="w-full mx-12 mt-16 lg:w-5/12">
          <div className="flex flex-row ">
            <img
              className="w-8 h-8 mt-5 ml-8 animate-ping"
              src={Icon}
              alt="icon"
            />
            <h1 className="mt-3 text-4xl font-bold text-white ">
              طراحی و برندسازی{" "}
            </h1>
          </div>
          <p className="mt-12 text-xl font-normal text-white">
            رصحنم غیلبت کی زا رتشیب دیدزاب و یرتشم بذج .دوشیم لصاح درف هب نایامن
            ،امش یعامتجا یاه هکبش رگید یوس زا .دوب دهاوخ ناتدنرب هدننک و هبرجت
            اب ،صصختم دارفا عمجت رد ،نیال نوم .دوشیم هصالخ قالخ
          </p>

          <Button
            myClass="hover:bg-green-800 bg-custom-green"
            text="نمونه کارهای بیشتر"
          />
        </div>
      </div>
    </section>
  );
};

export default Design;
