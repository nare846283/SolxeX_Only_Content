import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Only One Image

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 shadow-lg transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-[#ccc] text-black"
        }`}
    >

      <div className="flex items-center space-x-4">
        <a href="/">
          <motion.img
            src={logo}
            alt="SolveX Logo"
            className="h-14"
            style={{
              filter: `drop-shadow(0px 0px 10px ${darkMode ? "#ff007f" : "#00eaff"
                })`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              filter: [
                "drop-shadow(0px 0px 10px #ff007f)",
                "drop-shadow(0px 0px 20px #00eaff)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </a>
      </div>

      <ul className="flex space-x-6 text-lg">
        {["Home", "About", "Contact"].map(
          (item, index) => (
            <motion.li
              key={index}
              className={`cursor-pointer ${darkMode ? "text-white" : "text-gray-900"
                }`}
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                color: darkMode ? "#ff007f" : "#007bff",
              }}
              animate={{
                color: darkMode ? "white" : "#1f2937"
              }}
              transition={{ duration: 0.3 }}
            >
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          )
        )}
        <motion.li
          className="cursor-pointer relative text-gray-700 dark:text-gray-300"
          onMouseEnter={() => setDropdownOpen(true)}
          whileHover={{ scale: 1.1, color: "#ff007f" }}
          transition={{ duration: 0.5 }}
        >
          <a href="#">Problems</a>
          {dropdownOpen && (
            <motion.ul
              className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {["Easy", "Medium", "Hard"].map((level, index) => (
                <motion.li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setDropdownOpen(false)}
                >
                  <a href={`${level.toLowerCase()}`}>{level}</a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.li>
      </ul>

      <motion.button
        className="px-4 py-2 rounded-md transition-all duration-300 text-white"
        style={{
          background: darkMode
            ? "linear-gradient(90deg, #ff007f, #ff4d4d)"
            : "linear-gradient(90deg, #00eaff, #007bff)",
        }}
        onClick={() => setDarkMode(!darkMode)}
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: [0.6, 1] }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? "Light" : "Dark"}
      </motion.button>
    </nav>
  );
};

export default Navbar;
