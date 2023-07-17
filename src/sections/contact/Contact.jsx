import React from "react";
import "./contact.css";


const Contact = () => {
  return (
    <section className=" w-full flex h-screen gradiant-top-light text-center justify-center">

     <div className="w-9/12 p-16">

    <h1 className="text-white font-bold text-3xl">ارتباط با ما</h1>
    <h1 className="text-white font-normal text-lg my-5">ما <span className="blue-base-color">شما</span> را برای همکاری برگزیده ایم.<br className="mt-1"/>همین حالا با ما در ارتباط باشید!</h1>



    <div class="mb-6">
    <input type="text" placeholder="نام شما:" class="input-bg block w-full p-4 text-gray-200 rounded-xl focus:border-blue-900 "/>
</div>

<div class="mb-6">
    <input type="text" placeholder="ایمیل شما:" class="input-bg block w-full p-4 text-gray-200 rounded-xl focus:border-blue-900 "/>
</div>

<div class="mb-6">
<textarea placeholder="به دنبال چه خدماتی هستید؟" class="input-bg block w-full p-4 text-gray-200 rounded-xl focus:border-blue-900" rows="8"></textarea></div>





     </div>



    </section>
  );
};

export default Contact;
