import React, { useState } from "react";
import "./languageSwitch.css";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("EN");

  const handleToggle = () => {
    setLanguage(language === "EN" ? "FA" : "EN");
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
        <div className="flex flex-row justify-between lang-txt mt-2 mx-2 font-bold">
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
