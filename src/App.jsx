import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/home/Home";
import StartUp from "./sections/startup/StartUp";
import Resume from "./sections/resume/Resume";
import Advertisement from "./sections/advertisement/Advertisement";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import WebApp from "./sections/webapp/WebApp";
import Design from "./sections/design/Design";
import Service from "./sections/services/Service";
import About from "./sections/about/About";
import Page404 from "./sections/page404/Page404";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Profile from "./sections/profile/Profile";
import "./i18n/config";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatButton from "./components/floatButton/FloatButton";

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
  });

  const [isLoading, setIsLoading] = useState(sessionStorage.getItem('isLoading'));
  const { t, i18n } = useTranslation();
  const [dir, setDir] = useState(t("dir"));

  useEffect(() => {
    i18n.changeLanguage(lang);
    setDir(direction);
    AOS.refresh();
  }, [lang, direction, i18n]);

  useEffect(() => {
    if (sessionStorage.getItem('isLoading') === null) {
      sessionStorage.setItem('isLoading', true);
    }

    AOS.init({
      duration: 3000,
    });

    if (sessionStorage.getItem('isLoading') === 'true') {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('isLoading', false)
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
    else {
      setIsLoading(false);
      sessionStorage.setItem('isLoading', false)
    }
    
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isLoading]);

  return (
    <BrowserRouter dir={dir} ref={mainRef}>
      <Routes>
        <Route index element={
          <main dir={dir} ref={mainRef}>
            {sessionStorage.getItem('isLoading') === 'true' ? (
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
        } />
        <Route path="/resume" element={<Resume />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
