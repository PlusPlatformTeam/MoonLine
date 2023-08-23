import React from "react";
import "./startup.css";
import Logo from "../../assets/images/logo-startup.png";
import Light from "../../assets/images/light-startup.png";

const StartUp = () => {
  return (
    <section className={`bg-image z-50 absolute w-screen section`}>
      <header className="flex flex-row text-center justify-center items-center h-screen">
        <div className="relative">
          <img
            className="absolute -top-20 animate-pulse phoneScreen"
            src={Light}
            alt="Light"
          />

          <img src={Logo} alt="logo" className="phoneScreen" />
        </div>
      </header>
    </section>
  );
};

export default StartUp;
