import React from "react";
import "./footer.css";
import data from "./data";
import Logo from "../../assets/images/footer-image.png";
import DotedBg from "../../assets/images/doted-bg.png";

const Footer = () => {
  return (
    <section className=" w-full overflow-hidden">
      <div className=" w-full flex flex-row">
        <div className="relative">
        
          <img
            src={DotedBg}
            alt="doted background"
            className="absolute right-0 h-80 hidden md:block "
          />

          <div className="flex flew-row absolute  right-16 top-8">

            <div className="h-64 w-1 bg-blue-600 "></div>

            <div className=" relative right-2 w-28">
              <h1 className="text-white text-xl font-semibold mt-1 ">صفحه اصلی</h1>
              <h1 className="text-white text-xl font-semibold mt-7">خدمات</h1>
              <h1 className="text-white text-xl font-semibold mt-7">نمونه کارها </h1>
              <h1 className="text-white text-xl font-semibold mt-7">درباره ما</h1>
              <h1 className="text-white text-xl font-semibold mt-7">تماس با ما</h1>
            </div>



          </div>
        </div>

        <div className="w-full justify-center text-center block">
          <h1 className="text-white font-bold text-2xl mt-12">
            Our Socials Networks
          </h1>

          <div className=" mt-16 flex flex-row flex-wrap w-full justify-center text-center">
            {data.map((item, index) => (
              <a href={item.click} key={index}>
                <img src={item.logo} className="mr-10 h-16" />
              </a>
            ))}
          </div>

          <h1 className="text-white font-bold text-2xl mt-12">
            All rights reserved. powered by{" "}
            <span className="blue-base-color">Moonline team</span>
          </h1>
        </div>

        <img
          src={Logo}
          alt="footer logo"
          className="absolute left-0 h-80	 hidden md:block "
        />
      </div>
    </section>
  );
};

export default Footer;
