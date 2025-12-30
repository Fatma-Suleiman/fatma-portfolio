import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrollTo, setScrollTo] = useState(""); 
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = () => setNav(!nav);

  const handleNavigation = (target) => {
    setNav(false);
    if (location.pathname !== "/") {
      setScrollTo(target);
      navigate("/");
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && scrollTo) {
      scroller.scrollTo(scrollTo, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
      setScrollTo("");
    }
  }, [location.pathname, scrollTo]);

  const navItems = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "project", text: "Projects" },
    { id: "contact", text: "Contact" },
    { id: "resume", text: "Resume", isFile: true },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-bold text-[#00df9a] drop-shadow-[0_0_10px_#00df9a] hover:drop-shadow-[0_0_20px_#00df9a] transition-shadow duration-300">
        Hi, I'm Fatma
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        {navItems.map((item) => (
          <li key={item.id} className="p-4 cursor-pointer">
            {item.isFile ? (
              <a
               href="https://drive.google.com/file/d/1nIR6UKo17vcsO7FwkGn6Wj_Rf9G6J1J4/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#00df9a] text-[#00df9a] px-4 py-2 rounded-md hover:bg-[#00df9a] hover:text-black transition duration-300"
              >
                {item.text}
              </a>
            ) : (
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => handleNavigation(item.id)}
                className="hover:text-[#00df9a] transition duration-300 pb-1"
              >
                {item.text}
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <div onClick={handleNav} className="block md:hidden z-50">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? "fixed left-0 top-0 w-[70%] h-full bg-[#000300] ease-in-out duration-500 z-40 border-r border-gray-900" : "fixed left-[-100%]"}>
        <h1 className="text-3xl font-bold text-[#00df9a] m-8">Fatma.</h1>
        <ul className="p-4 uppercase">
          {navItems.map((item) => (
            <li key={item.id} className="p-4 border-b border-gray-800">
              {item.isFile ? (
                <a
                  href="https://drive.google.com/file/d/1nIR6UKo17vcsO7FwkGn6Wj_Rf9G6J1J4/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setNav(false)}
                >
                  {item.text}
                </a>
              ) : (
                <ScrollLink
                  onClick={() => handleNavigation(item.id)}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  {item.text}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
