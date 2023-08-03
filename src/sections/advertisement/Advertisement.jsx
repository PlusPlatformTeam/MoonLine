import React from "react";
import "./advertisement.css";
import Cards from "../../assets/images/cards-advertisement.png";
import Icon from "../../assets/images/icon-advertisement.png";
import Button from "../../components/button/Button";
const advertisement = () => {
  return (
    <section className=" w-full h-screen gradiant-top-light">
      <div className="flex flex-row w-full">
        <div className="lg:w-5/12 w-full mt-16 mx-12">
          <div className="flex flex-row ">
            <img className="ml-5" src={Icon} alt="icon image" />
            <h1 className="text-white font-bold text-3xl mt-3 ">
              تبلیغات و تولید محتوا
            </h1>
          </div>
          <p className="text-white font-normal text-xl mt-12">
            رصحنم غیلبت کی زا رتشیب دیدزاب و یرتشم بذج .دوشیم لصاح درف هب نایامن
            ،امش یعامتجا یاه هکبش رگید یوس زا .دوب دهاوخ ناتدنرب هدننک و هبرجت
            اب ،صصختم دارفا عمجت رد ،نیال نوم .دوشیم هصالخ قالخ
          </p>

          <Button
            myClass="hover:bg-yellow-600 bg-custom-yellow"
            text="نمونه کارهای بیشتر"
          />
        </div>


        <div className="w-7/12 hidden lg:block text-end justify-center ">
          <img className="w-full p-5 " src={Cards} alt="home cards image" />
        </div>
      </div>
    </section>
  );
};

export default advertisement;
