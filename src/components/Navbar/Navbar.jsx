import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For menu icons
import { navlogo } from "../../assets";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll event listener to fix navbar after scrolling past top bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar (Scrolls away) */}
      <div className="mx-auto bg-gradient-to-r from-blue-800 to-blue-800 text-transparent bg-clip-text flex flex-wrap justify-between items-center px-4 md:px-10 py-2 text-sm transition-transform duration-500 w-full z-50">
        <div className="w-full max-w-[1440px] mx-auto py-0">
          <div className="flex space-x-8">
            <a href="mailto:b9concept@gmail.com" className="hover:underline">
              b9concept@gmail.com
            </a>
            <span className="">|</span>
            <a href="tel:9403455116" className="hover:underline">
              9403455116
            </a>
          </div>
        </div>
      </div>

      {/* Navbar (Becomes Fixed After Scrolling) */}
      <nav
        className={`bg-[#08a5cc] text-white py-3 shadow-lg text-lg transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 w-full z-50" : "relative"
        }`}
      >
        <div className="container  h-12  flex justify-between  ml-20 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold  flex items-center">
            <img src={navlogo} alt="Logo" className="w-35 h-18 " />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex  space-x-5 mr-50 ">
            {[
              { path: "/", label: "HOME" },
              { path: "/aboutus", label: "ABOUT US" },
              { path: "/process", label: "OUR PROCESS" },
              { path: "/achivement", label: "ACHIVEMENT" },
              { path: "/blog", label: "BLOG" },
              { path: "/contactus", label: "CONTACT US" },
            ].map((item, index) => (
              <li key={index}>
                <Link className="hover:text-blue-700" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#08a5cc] shadow-md flex flex-col items-center space-y-4 py-4">
            {[
              { path: "/", label: "HOME" },
              { path: "/aboutus", label: "ABOUT US" },
              { path: "/process", label: "OUR PROCESS" },
              { path: "/achievement", label: "ACHIEVEMENT" },
              { path: "/blog", label: "BLOG" },
              { path: "/contactus", label: "CONTACT US" },
            ].map((item, index) => (
              <Link
                key={index}
                className="hover:text-yellow-400 transition py-2 w-full text-center"
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
