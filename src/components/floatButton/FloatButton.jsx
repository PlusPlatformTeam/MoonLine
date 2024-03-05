import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const FloatButton = () => {
  const direction = useSelector((state) => state.direction);

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector("#navbar").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`floatBtn ${
        direction === "rtl" ? "right-10" : "left-10"
      } bottom-10 animate-bounce cursor-pointer fixed`}
    >
      <a href="#navbar" onClick={handleClick}>
        <div className="h-12 w-12 bg-[#1F5A8A] rounded-full sticky flex items-center justify-center">
          <FaArrowUp className="text-white h-6" />
        </div>
      </a>
    </div>
  );
};

export default FloatButton;