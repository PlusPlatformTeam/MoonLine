import React from "react";
import Moon from "../../assets/images/white-ball.png";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="h-screen w-screen bg-image relative">
      <div className="h-screen flex flex-row  justify-center text-center items-center relative">
        <div className=" absolute md:top-10 top-16 flex flex-row">
          <p className="text-white md:text-[210px] text-[150px] font-bold">4</p>
          <img
            src={Moon}
            alt="zero"
            className="md:w-full md:h-full w-[180px] h-[180px] md:mt-[-27px]"
          />
          <p className="text-white md:text-[210px] text-[150px] font-bold">4</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-white md:text-[50px] text-[30px] font-bold mt-48">
            PAGE NOT FOUND
          </p>
          <div className="flex justify-center">
              <Link to="/" className="text-white bottom-5 mt-3 bg-custom-blue h-12 w-48 rounded-3xl pt-3">Return To Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
