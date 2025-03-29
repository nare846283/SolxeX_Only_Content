import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const Sidebar = ({ data = [], onSelect }) => {
  const { darkMode } = useContext(ThemeContext);
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const getSidebarHeading = () => {
    if (location.pathname.startsWith("/easy")) return "Easy Level Questions";
    if (location.pathname.startsWith("/medium")) return "Medium Level Questions";
    if (location.pathname.startsWith("/hard")) return "Hard Level Questions";
    if (location.pathname.startsWith("/beginner")) return "Beginner Level Projects";
    if (location.pathname.startsWith("/intermediate")) return "Intermediate Level Projects";
    if (location.pathname.startsWith("/advance")) return "Advance Level Projects";
    return "Content";
  };

  const sidebarBg = darkMode
    ? "linear-gradient(90deg, #ff007f, #ff4d4d)"
    : "linear-gradient(90deg, #7800ff, #00d4ff)";
  const textColor = "white";

  return (
    <>
      <button
        className="sm:hidden fixed top-4 left-3 z-50 text-white p-0 text-2xl rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>

      <div
        className={`fixed top-2 lg:left-2 h-[98%] w-[75%] sm:w-[20%] overflow-y-auto transition-all duration-300 scrollbar-hide z-40 rounded-2xl lg:shadow-2xl ${darkMode ? "shadow-slate-500" : "shadow-slate-100"} ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
        style={{
          background: sidebarBg,
          color: textColor,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <h2
          className={`sticky top-0 z-10 w-full text-center text-2xl font-bold rounded-t-lg p-2 text-[#fbff00] ${darkMode ? "bg-purple-600" : "bg-orange-600"
            }`}
        >
          {getSidebarHeading()}
        </h2>

        {data.length > 0 ? (
          data.map((category, index) => (
            <div key={index} className="mt-2">
              <h3
                className="w-[96%] m-auto flex items-center justify-between cursor-pointer font-semibold p-2 rounded-lg"
                style={{ background: "#00ffe8 ", color: "maroon" }}
                onClick={() => setOpenCategory(openCategory === index ? null : index)}
              >
                <span className="w-[80%]">{category.category}</span>
                <span className="w-[20%] border-none flex items-center justify-center text-white">
                  {openCategory === index ? "▼" : "▶"}
                </span>
              </h3>

              {openCategory === index && (
                <ul className="pl-4 mt-1 w-[96%]">
                  {(category.questions || category.projects).map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="cursor-pointer p-2 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: selectedItem === item ? "#77ff00" : "transparent",
                        color: selectedItem === item ? "black" : "white",
                      }}
                      whileHover={{
                        scale: 1.05, // ✅ Slight scale-up effect
                        backgroundColor: "#c2ff74", // ✅ Hover pe halki yellow shade
                        color: "black",
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }} // ✅ Smooth animation
                      onClick={() => {
                        setSelectedItem(item);
                        onSelect(item);
                        setIsSidebarOpen(false);
                      }}
                    >
                      {item.title}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-300">❗ No {getSidebarHeading()} available</p>
        )}
      </div>
    </>
  );
};

export default Sidebar;
