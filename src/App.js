import React, { useState, useEffect } from "react";
import useMediaQuery from "./hook/useMediaQuery";
import Navbar from "./scenes/Navbar";
const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopNav={isTopNav}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
       <div className="w-5/6 mx-auto md:h-full">
       
      </div>
    </div>
  );
};

export default App;
