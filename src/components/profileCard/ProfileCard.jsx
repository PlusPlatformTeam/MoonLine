import React from "react";
import Data from "./data";
import "./profileCard.css"
import { Link } from "react-router-dom";

const ProfileCard = ({ title }) => {
  const name = title;
  const data = Data();

  return (
    <div className="w-full h-[510px]  overflow-y-auto no-scrollbar mt-16">
      {data.map(({ img, desc, title, bgColor, color }, index) => (
        <Link
          to={`/profile?name=${title}`}
          style={{ borderColor: color }}
          class={`flex flex-col w-11/12 h-[80px] rounded-full mb-5 mt-5 bg-[#191F2C] relative ${
            title === name ? " border-solid border-2" : ""
          }`}
        >
          <div class="">
            <img
              className="w-[80px] h-[80px] rounded-full absolute left-[-2px] object-cover top-[-1px]"
              src={img}
              alt="profile-image"
            />
            <div className="relative px-2 text-center">
              <span
                className={`relative ${bgColor} text-xs absolute top-7 left-10 px-2 py-2 rounded-3xl text-gray-50 z-[100]`}
              >
                {desc}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProfileCard;
