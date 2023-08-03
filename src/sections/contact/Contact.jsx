import React from "react";
import "./contact.css";
import Btn from "../../assets/images/btn-send-text.png";

const Contact = () => {
  return (
    <section id="contact" className=" w-full flex h-screen gradiant-top-light text-center justify-center">
      <div className="w-full lg:w-9/12 p-4 lg:p-16 ">
        <h1 className="text-white font-bold text-3xl">ارتباط با ما</h1>
        <h1 className="text-white font-normal text-lg my-5">
          ما <span className="blue-base-color">شما</span> را برای همکاری برگزیده
          ایم.
          <br className="mt-1" />
          همین حالا با ما در ارتباط باشید!
        </h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="نام شما:"
            className="input-bg block w-full p-4 text-gray-200 rounded-xl focus:border-blue-900 "
          />
        </div>

        <div class="mb-6">
          <input
            type="text"
            placeholder="ایمیل شما:"
            className="input-bg block w-full p-4 text-gray-200 rounded-xl focus:border-blue-900 "
          />
        </div>

        <div className="mb-6 relative">
          <textarea
            placeholder="به دنبال چه خدماتی هستید؟"
            className="input-bg block w-full p-4 text-gray-200 rounded-xl focus:border-blue-900"
            rows="8"
          ></textarea>
          <div className="absolute -bottom-5 w-full flex justify-center text-center">
            <img src={Btn} alt="btn" className="h-12 w-36 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
