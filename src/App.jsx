import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/home/Home";
import StartUp from "./sections/startup/StartUp";
import Advertisement from "./sections/advertisement/Advertisement";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import WebApp from "./sections/webapp/WebApp";
import Design from "./sections/design/Design";
import Service from "./sections/services/Service";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./i18n/config";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatButton from "./components/floatButton/FloatButton";
import Profile from "./sections/profile/Profile";

const App = () => {
  const direction = useSelector((state) => state.direction);
  const lang = useSelector((state) => state.lng);
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  const floatingNavToggleHandler = () => {
    if (
      siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
    return () => clearInterval(checkYPosition);
  }, [siteYPostion]);

  const [isLoading, setIsLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const [dir, setDir] = useState(t("dir"));

  useEffect(() => {
    i18n.changeLanguage(lang);
    setDir(direction);
  }, [lang, direction, i18n]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isLoading]);

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [lang, direction, i18n]);

  return (
    <BrowserRouter dir={dir} ref={mainRef}>
      <Routes>
        <Route
          index
          element={
            <main dir={dir} ref={mainRef}>
              {isLoading ? (
                <StartUp />
              ) : (
                <>
                  <Navbar />
                  <Home />
                  <Service />
                  <WebApp />
                  <Design />
                  <Advertisement />
                  <About />
                  <Contact />
                  <Footer />
                  {showFloatingNav && <FloatingNav />}
                  <FloatButton />
                </>
              )}
            </main>
          }
        />
        <Route path={`/profile/`} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
