import React, { useState, useEffect } from "react";
import Home from "./sections/home/Home";
import StartUp from "./sections/startup/StartUp";
import { Service } from "./sections/services/Service";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <main>
      {isLoading ? <StartUp /> : null}
      <Home />
      <Service />
    </main>
  );
};

export default App;
