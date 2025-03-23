import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // 🌙 Import ThemeContext

const Sidebar = ({ questions, onSelect }) => {
  const { darkMode } = useContext(ThemeContext); // 🌙 Dark Mode state access karo
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`fixed left-0 top-20 w-[20%] min-h-screen p-4 transition-all duration-300 shadow-2xl
        ${darkMode ? "bg-gray-900 text-white" : "bg-[#ccc] text-black"}
      `}
    >
      <h2 className="text-xl font-bold mb-4">Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li
            key={index}
            className={`cursor-pointer p-2 mb-2 rounded-lg transition-all duration-300 
              ${activeIndex === index ? "bg-blue-600 scale-105" : darkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"}
            `}
            onClick={() => {
              setActiveIndex(index);
              onSelect(question);
            }}
          >
            {question.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
