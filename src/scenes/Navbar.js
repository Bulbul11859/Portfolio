import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hook/useMediaQuery";
import Hamburger from "hamburger-react";

import logo from "../assets/logo.PNG";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggoled, setIsMenuToggoled] = useState(false);
  const isAboveSmallScrens = useMediaQuery("(min-width:760px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img className="w-16 md:w-1/12 lg:w-1/12	" src={logo} alt="..." />

        {/*..................... Desktop Nav .................*/}
        {isAboveSmallScrens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Project"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonial"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div>
            <div className="rounded-full bg-red p-2">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            {isOpen ? (
              <div className="z-[-11] fixed top-15 right-0 bottom-0 h-full bg-blue w-[300px] ">
                <div className="flex flex-col gap-10 ml-[33%] mt-28 text-2xl text-deep-blue">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Project"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Testimonial"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
