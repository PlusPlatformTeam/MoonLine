import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import MobileNavbar from "../../components/mobileNavbar/MobileNavbar";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileNavHidden, setIsMobileNavHidden] = useState(true);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");
    setName(name);
  }, [location.search]);

  if(!name)
  {
    const theName = t("about.ali.name");
    setName(theName);
  }

  const selectedData = Data().find((item) => item.title === name);
  if (!selectedData) {
    return <div className="text-white">No data found for {name}</div>;
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
    job
  } = selectedData;

  return (
    <>
      <section
      id="profile"
      className={`w-full overflow-hidden gradiant-bottom-light section h-screen relative md:block hidden`}
    >
      <div className="flex flex-row w-full h-full overflow-hidden ">
        <div className="w-3/12 h-full gap-y-36">
          <div className="flex gap-5 mt-16 mr-8">
            <PiUsersBold
              className={`text-[50px] text-3xl`}
              style={{ color: color }}
            />
            <p className="w-auto mt-2 text-3xl text-white ">
              {t("about.title")}
            </p>
          </div>
          <div
            className={`rounded-[30px] w-50 h-96 mr-8 mt-16 p-5 ${bgColor} flex flex-col justify-between relative`}
            style={{ backgroundColor: `${bgColor}` }}
          >
            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white mb-[7px]">{link}</p>
              <RiProfileLine
                className={`text-[48px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>

            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white mb-[7px]">{telegram}</p>
              <FaTelegram
                className={`text-[48px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>

            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white mb-[7px]">{insta}</p>
              <FaInstagramSquare
                className={`text-[48px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>

            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white mb-[7px]">{linkedin}</p>
              <FaLinkedin
                className={`text-[48px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>

            <div className="flex items-end justify-end">
              <p className="text-lg ml-6 text-white mb-[7px]">{youtube}</p>
              <FaYoutube
                className={`text-[48px] text-xl z-50 opacity-100`}
                style={{ color: color }}
              />
            </div>
          </div>
        </div>
        <div className="relative w-7/12 h-full ">
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
      className={`w-full gradiant-bottom-light section h-full relative md:hidden block`}
    >
      <div className="relative w-full top-1">
        <img onClick={() => { setIsMobileNavHidden(false) }} src={Burger} alt="burger icon" className="m-4 w-[45px] h-[45px] rounded-full absolute" />
        <div className="flex justify-center w-full">
            <HiOutlineUsers className="text-center justify-center text-white h-[28px] w-[28px] mt-4"/>
        </div>
        <div className="flex justify-center w-full">
            <h1 className="text-xl font-bold text-white">{t('about.title')}</h1>
        </div>
      </div>

      <div className="relative flex justify-center w-full mt-4 text-center" onClick={handleOpenModal}>
        <div className="w-[35%] bg-[#0E2B38] rounded-full h-[35px] flex justify-between items-center gap-2  pr-3">
          <p className="text-lg text-white">{t('about.members')}</p>
          <img src={MemberIcon} alt="MemberIcon" className="h-[35px] w-[35px]"/>
        </div>
      </div>

      <div className="relative flex justify-center w-full mt-4 text-center">
        <img src={MemberLight} alt="MemberLight" className="w-[300px] h-[300px]  z-10" />
        <img src={img} alt="MemberLight" className=" absolute w-[170px] h-[170px] z-30 rounded-full object-cover top-16" />
      </div>

      <div className="relative flex justify-center w-full mt-4 text-center">
          <p className="text-xl font-semibold text-white">{title}</p>
      </div>

      <div className="relative flex justify-center w-full mt-4 text-center">
        <div className="w-[50%] h-[50px] bg-[#072436] rounded-3xl z-10 flex justify-center py-2 px-2">
           <div className={`w-full h-[35px] rounded-full z-40 flex justify-center text-center items-center`} style={{backgroundColor:color}}>
              <p className="text-sm font-normal text-white">{job}</p>
           </div>
        </div>
      </div>

      <div className="flex justify-center w-full mt-4 text-center">
          <p className="text-white text-sm w-[70%]">
          xttextxttexttxttexttexttexttexttexttexttext texttexttext texttexttexttext texttexttexttexttexttext
          </p>
      </div>

      <div className="flex justify-center w-full mt-6 text-center">
          <div className="w-[80%] h-[70px] rounded-xl flex px-4 py-3 justify-between" style={{backgroundColor:bgColor}}>
          <Link to={youtube} className="relative"> 
             <FaYoutube
                   className={`text-[43px] z-50 opacity-100`}
                   style={{ color: color }}
             />
          </Link>

          <Link to={linkedin}>
              <FaLinkedin
                   className={`text-[43px] z-50 opacity-100`}
                   style={{ color: color }}
              />
          </Link>

          <Link to={insta}>
              <FaInstagramSquare
                className={`text-[43px]  z-50 opacity-100`}
                style={{ color: color }}
              />
          </Link>

          <Link to={telegram}>
          <FaTelegram
                className={`text-[43px]  z-50 opacity-100`}
                style={{ color: color }}
          />
          </Link>

          <Link to={link}>
               <RiProfileLine
                     className={`text-[43px] z-50 opacity-100`}
                     style={{ color: color }}
               />
          </Link>

          </div>
      </div>
      <ProfileModal isOpen={isModalOpen} onClose={handleCloseModal} title={title} />
      <MobileNavbar isHidden={isMobileNavHidden} onHidden={setIsMobileNavHidden}/>
      </section>
    </>

  );
};


const ProfileModal = ({ isOpen, onClose, title }) => {
  return (
    <div className={`${isOpen ? "block" : "hidden"} bg-black opacity-90 absolute top-0 z-[1000] h-screen w-screen`}>
      <p className="text-3xl font-semibold text-white mt-7 mr-7" onClick={onClose}>X</p>
      <div className="mt-24 mr-12">
        <ProfileCard title={title} />
      </div>
    </div>
  );
};

export default Profile;
