import React, { useState, useEffect } from "react";
import Home from "./sections/home/Home";
import StartUp from "./sections/startup/StartUp";
import Advertisement from "./sections/advertisement/Advertisement";
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
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const direction = useSelector((state) => state.direction);
  const lang = useSelector((state) => state.lng);

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
    }, 3000);

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
      duration : 3000
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [lang, direction, i18n])

  return (
    <main dir={dir}>
      {isLoading ? <StartUp /> : null}
      <Navbar />
      <Home />
      <Service animate="fade-up"/>
      <WebApp />
      <Design />
      <Advertisement />
      <About animate="fade-up"/>
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
