import React from "react";
import "./advertisement.css";
import Cards from "../../assets/images/cards-advertisement.png";
import Icon from "../../assets/images/icon-advertisement.png";
import Button from "../../components/button/Button";
const advertisement = () => {
  return (
    <section className="w-full h-screen gradiant-top-light">
      <div className="flex flex-row w-full">
        <div className="w-full mx-12 mt-16 lg:w-5/12">
          <div className="flex flex-row ">
            <img className="ml-5" src={Icon} alt="icon" />
            <h1 className="mt-3 text-3xl font-bold text-white ">
              تبلیغات و تولید محتوا
            </h1>
          </div>
          <p className="mt-12 text-xl font-normal text-white">
            رصحنم غیلبت کی زا رتشیب دیدزاب و یرتشم بذج .دوشیم لصاح درف هب نایامن
            ،امش یعامتجا یاه هکبش رگید یوس زا .دوب دهاوخ ناتدنرب هدننک و هبرجت
            اب ،صصختم دارفا عمجت رد ،نیال نوم .دوشیم هصالخ قالخ
          </p>

          <Button
            myClass="hover:bg-yellow-600 bg-custom-yellow"
            text="نمونه کارهای بیشتر"
          />
        </div>


        <div className="justify-center hidden w-7/12 lg:block text-end ">
          <img className="w-full p-5 " src={Cards} alt="home cards" />
        </div>
      </div>
    </section>
  );
};

export default advertisement;
