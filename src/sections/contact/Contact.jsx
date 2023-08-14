import React from "react";
import "./contact.css";
import Btn from "../../assets/images/btn-send-text.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Contact = () => {
  const { t } = useTranslation();
  const direction = useSelector((state) => state.direction);

  return (
    <section
      id="contact"
      className=" w-full flex h-screen gradiant-top-light text-center justify-center"
    >
      <div className="w-full lg:w-9/12 p-4 lg:p-16 ">
        <div data-aos={`fade-down`} data-aos-duration={1000}>
           <h1 className="text-white font-bold text-3xl">{t("contact.title")}</h1>
        <h1 className="text-white font-normal text-lg my-5">
          {t("contact.desc.we")}{" "}
          <span className="blue-base-color">{t("contact.desc.you")}</span>{" "}
          {t("contact.desc.choose-you")}
          <br className="mt-1" />
          {t("contact.desc.contact-us")}{" "}
        </h1>
        </div>
       

<div data-aos={`fade-down`} data-aos-duration={1000}>

   <div className="mb-6">
          <input
            type="text"
            placeholder={t("contact.name")}
            className="input-bg block w-full p-4 text-gray-200 rounded-xl focus:border-blue-900 "
          />
        </div>

        <div class="mb-6">
          <input
            type="text"
            placeholder={t("contact.email")}
            className="input-bg block w-full p-4 text-gray-200 rounded-xl focus:border-blue-900 "
          />
        </div>

        <div className="mb-6 relative">
          <textarea
            placeholder={t("contact.message")}
            className="input-bg block w-full p-4 text-gray-200 rounded-xl focus:border-blue-900"
            rows="8"
          ></textarea>
          <div className="absolute -bottom-5 w-full flex justify-center text-center ">
            <div className="relative flex float w-36  cursor-pointer hover:scale-x-90">
                   <img src={Btn} alt="btn" className="h-12 w-full " />
                   <h1 className={`text-white font-bold  ${direction==="rtl"?"rtl-btn-position text-xl":"ltr-btn-position text-2xl"}`}>{t("contact.send")}</h1>
            </div>
       
          </div>
        </div>
</div>

       
      </div>
    </section>
  );
};

export default Contact;
