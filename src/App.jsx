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
import Navbar from './components/navbar/Navbar';
import './i18n/config';
import { useTranslation } from 'react-i18next';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const [dir, setDir] = useState(t('dir'));

  const changeLanguage = () => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  const handleDirChange = (newDir) => {
    setDir(newDir);
  };;

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

  return (
    <main dir={dir}>
      {isLoading ? <StartUp /> : null}
      <Navbar changeLanguage={changeLanguage} handleDirChange={handleDirChange}/>
      <Home />
      <Service />
      <WebApp />
      <Design />
      <Advertisement />
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
