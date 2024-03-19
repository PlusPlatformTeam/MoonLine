import React, { useState } from "react";
import "./languageSwitch.css";
import { useDispatch } from "react-redux";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("FA");
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: "CHANGE_LANG" });
    dispatch({ type: "CHANGE_DIR" });
    const newLanguage = language === "EN" ? "FA" : "EN";
    setLanguage(newLanguage);
  };

  return (
    <>
      <input
        type="checkbox"
        name="switch"
        id="switch"
        onChange={handleToggle}
      />

      <label htmlFor="switch" data-language={language === "FA" ? "FA" : "EN"}>
        <div className="flex flex-row justify-between mx-2 mt-2 font-bold lang-txt">
          <h1>EN</h1>
          <h1>FA</h1>
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
