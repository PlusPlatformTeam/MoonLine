import React, { useState } from "react";
import "./languageSwitch.css";

const LanguageSwitch = ({ changeLanguage, handleDirChange }) => {
  const [language, setLanguage] = useState("EN");
  
  const handleToggle = () => {
    const newLanguage = language === "EN" ? "FA" : "EN";
    setLanguage(newLanguage);
    changeLanguage(newLanguage);
    const newDir = newLanguage === "FA" ? "rtl" : "ltr";
    handleDirChange(newDir);
  };

  
  return (
    <>
      <input
        type="checkbox"
        name="switch"
        id="switch"
        onChange={handleToggle}
      />

      <label for="switch" data-language={language === "FA" ? "FA" : "EN"}>
        <div className="flex flex-row justify-between mx-2 mt-2 font-bold lang-txt">
          <h1>FA</h1>
          <h1>EN</h1>
        </div>

        <div className="snippet" data-title="dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
      </label>
    </>
  );
};

export default LanguageSwitch;
