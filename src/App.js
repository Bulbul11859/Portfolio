import React, { useState, useEffect } from "react";
import useMediaQuery from "./hook/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import { motion } from "framer-motion";

import Navbar from "./scenes/Navbar";
import MySkills from "./scenes/MySkills";
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
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediaScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onClick={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onClick={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onClick={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
