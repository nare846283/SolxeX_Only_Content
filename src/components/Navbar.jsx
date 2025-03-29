import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const location = useLocation();

  // ✅ Check if Sidebar Pages
  const isSidebarPage = ["/easy", "/medium", "/hard", "/beginner", "/intermediate", "/advance"].some((path) =>
    location.pathname.startsWith(path)
  );

  // ✅ Full Width Navbar for Home, Problems, Projects
  const isFullWidth = ["/", "/problems", "/projects"].includes(location.pathname);

  const navbarBg = darkMode
    ? "linear-gradient(90deg, #ff007f, #ff4d4d)"
    : "linear-gradient(90deg, #77ff00, #007bff)";
  const textColor = "white";

  return (
    <>
      {/* ✅ Large Screen Navbar */}
      <nav
        className={`hidden sm:flex z-20 fixed ${isFullWidth ? "left-0 w-full" : "left-[20%] w-[80%]"} items-center px-6 py-2 transition-all duration-300`}
        style={{ color: textColor }}
      >
        {/* ✅ Logo (Always Left) */}
        <div className="flex items-center space-x-4">
          <NavLink to="/">
            <motion.img
              src={logo}
              alt="SolveX Logo"
              className="h-14"
              style={{ filter: `drop-shadow(0px 0px 10px ${darkMode ? "#ff007f" : "#00eaff"})` }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </NavLink>
        </div>

        {/* ✅ Navigation Links */}
        <ul className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-4 text-lg py-2 px-6 rounded-2xl" style={{ background: navbarBg, color: textColor }}>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <NavLink to="/">Home</NavLink>
          </motion.li>

          {/* ✅ Projects Dropdown */}
          <motion.li className="relative group" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <NavLink to="/projects">Projects</NavLink>
            <motion.ul
              className="absolute left-0 mt-2 w-40 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100"
              style={{ background: navbarBg }}
            >
              {["Beginner", "Intermediate", "Advance"].map((level, index) => (
                <motion.li
                  key={index}
                  className="px-4 py-2 cursor-pointer transition-all duration-100"
                  whileHover={{ backgroundColor: "white", color: "black" }}
                >
                  <NavLink to={`/${level.toLowerCase()}`} className="w-full block">
                    {level}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.li>

          {/* ✅ Problems Dropdown */}
          <motion.li className="relative group" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <NavLink to="/problems">Problems</NavLink>
            <motion.ul
              className="absolute left-0 mt-2 w-40 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100"
              style={{ background: navbarBg, color: textColor }}
            >
              {["Easy", "Medium", "Hard"].map((level, index) => (
                <motion.li
                  key={index}
                  className="px-4 py-2 cursor-pointer transition-all duration-100"
                  whileHover={{ backgroundColor: "white", color: "black" }}
                >
                  <NavLink to={`/${level.toLowerCase()}`} className="w-full block">
                    {level}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.li>
        </ul>

        {/* ✅ Dark Mode Toggle (Always on Right) */}
        <motion.button className="text-2xl absolute right-4" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
        </motion.button>
      </nav>

     {/* ✅ Small Screen Navbar */}
        <nav
          className="sm:hidden z-20 fixed top-0 left-0 w-full flex items-center justify-between px-4 py-8 transition-all duration-300 bg-transparent"
          style={{ color: textColor }}
        >
          {/* ✅ Logo (Left for Home/Projects/Problems, Center for Sidebar Pages) */}
        <div className={`absolute ${isSidebarPage ? "left-1/2 transform -translate-x-1/2" : "left-4"}`}>
          <NavLink to="/">
            <motion.img
              src={logo}
              alt="SolveX Logo"
              className="h-12"
              style={{ filter: `drop-shadow(0px 0px 10px ${darkMode ? "#ff007f" : "#00eaff"})` }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </NavLink>
        </div>

        {/* ✅ Dark Mode Toggle (Always on Right) */}
        <motion.button className="text-2xl absolute right-4" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
        </motion.button>
      </nav>

      {/* ✅ Small Screen Navigation Links */}
      <ul className="sm:hidden sm:fixed flex justify-center space-x-6 mt-16 ml-2 py-2 px-6 rounded-2xl absolute bottom-4 left-1/2 -translate-x-1/2 "
        style={{ background: navbarBg, color: textColor }}
      >
        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <NavLink to="/" >Home</NavLink>
        </motion.li>

        {/* ✅ Projects & Problems Dropdowns */}
        {["Projects", "Problems"].map((section, idx) => (
          <motion.li key={idx} className="relative group" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <NavLink to={`/${section.toLowerCase()}`} className="text-white">{section}</NavLink>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
