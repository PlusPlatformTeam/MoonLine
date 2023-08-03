import React from "react";
import Arrow from "../../assets/images/arrow-left.png";

const Button = ({ myClass, text }) => {
  return (
    <button
      className={` ${myClass} p-4 relative mt-36 rounded-full w-48 `}
    >
      <div className="flex justify-center">
        <p className="-mt-1 text-white items-center ml-2 ">{text}</p>
        <img className="h-5 opacity-50" src={Arrow} alt="left-arrow" />
      </div>
    </button>
  );
};

export default Button;
