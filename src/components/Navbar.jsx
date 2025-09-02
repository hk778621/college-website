import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-red-600 shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="./assets/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-gray-800">AL QAMAR COLLEGE</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-6 font-medium">
          <li>
            <a
              href="#home"
              className={`${
                scrolled ? "text-white" : "text-gray-700"
              } hover:text-yellow-300 transition`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${
                scrolled ? "text-white" : "text-gray-700"
              } hover:text-yellow-300 transition`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#admission"
              className={`${
                scrolled ? "text-white" : "text-gray-700"
              } hover:text-yellow-300 transition`}
            >
              Admission
            </a>
          </li>
          <li>
            <a
              href="#programs"
              className={`${
                scrolled ? "text-white" : "text-gray-700"
              } hover:text-yellow-300 transition`}
            >
              Programs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                scrolled ? "text-white" : "text-gray-700"
              } hover:text-yellow-300 transition`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
