import React, { useState, useEffect } from "react";
import "./startup.css";
import Logo from "../../assets/images/logo-startup.png";
import Light from "../../assets/images/light-startup.png";

// import langData from "../../lang/lang-fa";

const StartUp = () => {
  const [importClass, setImportClass] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setImportClass("startup-out");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      className={`bg-image h-screen z-50 ${importClass} absolute w-screen `}
    >
      <header className="flex flex-row text-center justify-center items-center h-screen">
        <div className="relative">
          <img
            className="absolute -top-20 animate-pulse"
            src={Light}
            alt="Light"
          />

          <img src={Logo} alt="logo" />
        </div>
      </header>
    </section>
  );
};

export default StartUp;
