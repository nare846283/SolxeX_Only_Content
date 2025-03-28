import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom"; // ✅ Current Page Ka Path Lene Ke Liye
import { ThemeContext } from "../context/ThemeContext";

const Sidebar = ({ data = [], onSelect }) => {
  const { darkMode } = useContext(ThemeContext);
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Sidebar Toggle State
  const location = useLocation(); // ✅ Current Page URL Get Karna

  // ✅ Sidebar Heading Dynamically Set Karna
  const getSidebarHeading = () => {
    if (location.pathname.startsWith("/easy")) return "Easy Level Questions";
    if (location.pathname.startsWith("/medium")) return "Medium Level Questions";
    if (location.pathname.startsWith("/hard")) return "Hard Level Questions";
    if (location.pathname.startsWith("/begginer")) return "Beginner Level Projects";
    if (location.pathname.startsWith("/intermediate")) return "Intermediate Level Projects";
    if (location.pathname.startsWith("/advance")) return "Advance Level Projects";
    return "Content"; // ✅ Default Fallback (Agar kuch match nahi hota)
  };

  // ✅ Theme-Based Colors
  const sidebarBg = darkMode
    ? "linear-gradient(90deg, #ff007f, #ff4d4d)"
    : "linear-gradient(90deg, #00eaff, #007bff)";
  const textColor = "white";

  return (
    <>
      {/* ✅ Sidebar Toggle Button (Only Visible on Small Screens) */}
      <button
        className="sm:hidden fixed top-4 left-3 z-50 text-white p-0 text-2xl rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>

      {/* ✅ Responsive Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] sm:w-[20%] p-4 overflow-y-auto transition-all duration-300 scrollbar-hide z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        style={{
          background: sidebarBg,
          color: textColor,
          scrollbarWidth: "none", // ✅ Firefox ke liye
          msOverflowStyle: "none", // ✅ Internet Explorer ke liye
        }}
      >
        {/* ✅ Scrollbar Hide for Chrome, Edge, Safari */}
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* ✅ Dynamic Sidebar Heading */}
        <h2 className="text-xl font-bold mb-4">{getSidebarHeading()}</h2>

        {data.length > 0 ? (
          data.map((category, index) => (
            <div key={index} className="mb-2">
              <h3
                className="w-full flex items-center justify-between cursor-pointer font-semibold p-2 rounded-lg"
                style={{ background: "rgba(255, 255, 255, 0.2)" }}
                onClick={() => setOpenCategory(openCategory === index ? null : index)}
              >
                <span className="w-[80%]">{category.category}</span>
                <span className="w-[20%] border-none flex items-center justify-center">
                  {openCategory === index ? "▼" : "▶"}
                </span>
              </h3>

              {openCategory === index && (
                <ul className="pl-4 mt-2">
                  {(category.questions || category.projects).map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="cursor-pointer p-2 rounded-lg transition-all duration-300"
                      style={{
                        background: selectedItem === item ? "rgba(255, 255, 255, 0.3)" : "transparent",
                        color: selectedItem === item ? "black" : "white",
                      }}
                      onClick={() => {
                        setSelectedItem(item); // ✅ Clicked item ko selected state me store karo
                        onSelect(item); // ✅ Parent component ko selected item bhejo
                        setIsSidebarOpen(false); // ✅ Auto Close Sidebar on Item Click (Mobile Only)
                      }}
                    >
                      {item.title}
                    </li>
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
