import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Profile.css";
import ProfileCard from "../../components/profileCard/ProfileCard";
import Data from "./data";
import { useTranslation } from "react-i18next";
import { PiUsersBold } from "react-icons/pi";
import { RiProfileLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import MemberIcon from "../../assets/images/members-icon.png";
import MemberLight from "../../assets/images/member-light.png";
import Burger from "../../assets/images/burger.png";

import {
  FaTelegram,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Profile = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [name, setName] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");
    setName(name);
  }, [location.search]);

  const selectedData = Data().find((item) => item.title === name);

  if (!selectedData) {
    return <div>No data found for {name}</div>;
  }
  const {
    img,
    link,
    insta,
    telegram,
    linkedin,
    youtube,
    title,
    desc,
    bgColor,
    color,
  } = selectedData;

  return (
    <>
      <section
      id="profile"
      className={`w-full overflow-hidden gradiant-bottom-light section h-screen relative md:block hidden`}
    >
      <div className="flex flex-row w-full overflow-hidden h-full ">
        <div className="w-3/12 h-full gap-y-36">
          <div className="flex  mt-16 mr-8 gap-5">
            <PiUsersBold
              className={`text-[50px] text-3xl`}
              style={{ color: color }}
            />
            <p className="text-3xl text-white mt-2 w-auto ">
              {t("about.title")}
            </p>
          </div>
          <div
            className={`rounded-[30px] w-50 h-96 mr-8 mt-16 p-5 ${bgColor} flex flex-col justify-between relative`}
            style={{ backgroundColor: `${bgColor}` }}
          >
            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white">{link}</p>
              <RiProfileLine
                className={`text-[35px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>

            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white">{telegram}</p>
              <FaTelegram
                className={`text-[35px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>

            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white">{insta}</p>
              <FaInstagramSquare
                className={`text-[35px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>

            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white">{linkedin}</p>
              <FaLinkedin
                className={`text-[35px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>

            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white">{youtube}</p>
              <FaYoutube
                className={`text-[35px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>
          </div>
        </div>
        <div className="w-7/12 h-full relative ">
          <div>
            <span className="rounded-full bg-[#fff] w-[500px] h-[500px] opacity-5 block absolute top-5 left-[200px] justify-center"></span>
            <span className="rounded-full bg-[#fff] w-[440px] h-[440px] opacity-10 block absolute top-[52px] left-[230px] "></span>
            <span className="rounded-full bg-[#fff] w-[350px] h-[350px] opacity-20 block absolute top-[98px] left-[275px] "></span>
            <img
              className="rounded-full bg-[#fff] w-[350px] h-[350px] block absolute object-cover top-[98px] left-[275px] z-20"
              src={img}
              alt={title}
            ></img>
          </div>
          <div className="w-full">
            <p className="text-3xl font-bold text-white absolute top-[544px] w-[700px] text-center  justify-center mr-24">
              {title}
            </p>

            <p className="text-lg text-white absolute top-[605px] w-[700px] left-[100px] text-center">
              {desc}
            </p>
          </div>
        </div>
        <div className="w-2/12 h-full mt-[50px] ">
          <ProfileCard title={title} />
        </div>
      </div>
      </section>








      <section
      id="profile"
      className={`w-full gradiant-bottom-light section h-screen relative md:hidden block`}
    >
      <div className="w-full relative top-1">
        <img src={Burger} alt="burger icon" className="m-4 w-[45px] h-[45px] rounded-full absolute" />
        <div className="flex w-full justify-center">
            <HiOutlineUsers className="text-center justify-center text-white h-[28px] w-[28px] mt-4"/>
        </div>
        <div className="flex w-full justify-center">
            <h1 className="text-xl text-white font-bold">About Us</h1>
        </div>
      </div>

      <div className="w-full flex relative justify-center text-center mt-4">
        <div className="w-[35%] bg-[#0E2B38] rounded-full h-[35px] flex justify-between items-center gap-2  pr-3">
          <p className="text-white text-lg">Members</p>
          <img src={MemberIcon} alt="MemberIcon" className="h-[35px] w-[35px]"/>
        </div>
      </div>

      <div className="w-full flex justify-center text-center mt-4 relative">
        <img src={MemberLight} alt="MemberLight" className="w-[250px] h-[250px]  z-10" />
        <img src={img} alt="MemberLight" className=" absolute w-[142px] h-[142px] z-30 rounded-full object-cover top-14" />
      </div>

      <div className="w-full flex justify-center text-center mt-4 relative">
          <p className="text-xl text-white font-semibold">{title}</p>
      </div>

      <div className="w-full flex justify-center text-center mt-4 relative">
        <div className="w-[50%] h-[50px] bg-[#072436] rounded-3xl z-10 flex justify-center py-2 px-2">
           <div className={`w-full h-[35px] rounded-full z-40 flex justify-center text-center items-center`} style={{backgroundColor:color}}>
              <p className="text-white text-sm font-normal">full stack development</p>
           </div>
        </div>
      </div>

      <div className="w-full flex justify-center text-center mt-4">
          <p className="text-white text-sm w-[70%]">
          xttextxttexttxttexttexttexttexttexttexttext texttexttext texttexttexttext texttexttexttexttexttext
          </p>
      </div>

      <div className="w-full flex justify-center text-center mt-6">
          <div className="w-[80%] h-[60px] rounded-xl flex px-4 py-3 justify-between" style={{backgroundColor:bgColor}}>
          <FaYoutube
                className={`text-[40px] text-xl z-50 opacity-100`}
                style={{ color: color }}
          />
          <FaLinkedin
                className={`text-[40px] text-xl z-50 opacity-100`}
                style={{ color: color }}
          />
          <FaInstagramSquare
                className={`text-[40px] text-xl z-50 opacity-100`}
                style={{ color: color }}
          />
          <FaTelegram
                className={`text-[40px] text-xl z-50 opacity-100`}
                style={{ color: color }}
          />
          <RiProfileLine
                className={`text-[40px] text-xl z-50 opacity-100`}
                style={{ color: color }}
          />

          </div>
      </div>

      </section>
    </>

  );
};

export default Profile;
