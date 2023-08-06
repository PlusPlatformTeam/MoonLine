import React from "react";
import "./home.css";
import Cards from "../../assets/images/homeCards.png";
import DobleArrow from "../../assets/images/left-doble-arrow.png";
import LeftArrowService from "../../assets/images/left-arrow-service.png";
import UnderLine from "../../assets/images/underLine.png";

const Home = () => {
  return (
    <section id="home" className="bg-img">
      <div className="flex flex-row w-full">
        <div className="w-full lg:w-5/12">
          <div className="relative block w-full">
            <h2 className="mx-12 mt-16 text-3xl font-bold text-white">
              طراحی مدرن با{" "}
              <span className="relative text-5xl font-bold blue-base-color">
                مون لاین
                <img
                  src={UnderLine}
                  alt="moonline underline"
                  className="absolute hidden left-1 top-20 md:block"
                />
              </span>
            </h2>
          </div>

          <h2 className="mx-12 mt-20 text-xl font-normal text-white">
            تیم مون لاین با ارائه خدمات&nbsp;
            <span className="blue-base-color">
              طراحی وبسایت، دیزاین، توسعه اپ
            </span>
            &nbsp;توسط بهترین و بروزترین متدهای طراحی و برنامه نویسی، آماده رشد
            برند و کسب و کار شماست.
          </h2>

          <div className="flex flex-row w-full mx-12 mt-16 mb-2">
            <button class="relative bg-btn_color hover:bg-blue-500 rounded-full w-48 ">
              <div className="flex justify-end">
                <p className="items-center mt-1 ml-2 text-white">سفارش پروژه</p>
                <img
                  className="h-10 opacity-50"
                  src={DobleArrow}
                  alt="left arrow"
                />
              </div>
            </button>
            <button class=" p-4 pl-6 relative w-48 mr-4 bg-transparent items-center rounded-full border border-blue-400 hover:bg-blue-500 rounded-ful">
              <div className="flex justify-end">
                <p className="items-center ml-2 -mt-1 text-white">
                  سفارش پروژه
                </p>
                <img className="h-5 " src={LeftArrowService} alt="left arrow" />
              </div>
            </button>
          </div>
        </div>

        <div className="justify-center hidden w-7/12 lg:block text-end ">
          <img className="w-full p-16 " src={Cards} alt="home cards" />
        </div>
      </div>
    </section>
  );
};

export default Home;
