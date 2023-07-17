import React from "react";
import "./home.css";
import Cards from "../../assets/images/homeCards.png";
import UnderLine from "../../assets/images/underLine.png";

const Home = () => {
  return (
    <section className="bg-img">
      <div className="flex flex-row w-full">
        <div className="lg:w-5/12 w-full">
          <div className="block w-full relative">
            <h2 className="text-white font-bold text-3xl mt-16 mx-12">
              طراحی مدرن با{" "}
              <span className="relative font-bold text-5xl blue-base-color">
                مون لاین
                <img
                  src={UnderLine}
                  alt="moonline underline"
                  className="absolute left-1 top-20 hidden md:block"
                />
              </span>
            </h2>
          </div>

          <h2 className="text-white font-normal text-xl mt-20 mx-12">
            تیم مون لاین با ارائه خدمات&nbsp;
            <span className="blue-base-color">
              طراحی وبسایت، دیزاین، توسعه اپ
            </span>
            &nbsp;توسط بهترین و بروزترین متدهای طراحی و برنامه نویسی، آماده رشد
            برند و کسب و کار شماست.
          </h2>

          <div className="flex flex-row mt-16 mx-12 w-full">
            <button class="relative w-48 inline-flex items-center justify-center p-0.5 mb-2 mr-1 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-cyan-800">
              <span class="relative w-48 px-5 py-2.5 transition-all ease-in duration-75  dark:bg-transparent rounded-full group-hover:bg-opacity-0">
                سفارش پروژه
              </span>
            </button>
            <button class="relative w-48 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-cyan-800">
              <span class="relative w-48 px-5 py-2.5 transition-all ease-in duration-75  bg-cyan-950  rounded-full group-hover:bg-opacity-0">
                خدمات مون لاین
              </span>
            </button>
          </div>
        </div>

        <div className="w-7/12 hidden lg:block text-end justify-center ">
          <img className="w-full p-16 " src={Cards} alt="home cards image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
