import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const FloatButton = () => {
  const direction = useSelector((state) => state.direction);

  return (
    <a href="#navbar" className="floatBtn">
      <div
        className={`h-12 w-12 bg-[#1F5A8A] rounded-full sticky  ${
          direction === "rtl" ? "right-10" : "left-10"
        } bottom-10 animate-bounce cursor-pointer flex items-center justify-center`}
      >
        <FaArrowUp className="text-white h-24" />
      </div>
    </a>
  );
};

export default FloatButton;