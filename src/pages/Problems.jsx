import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Problems = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 sm:px-6 md:px-12 transition-all duration-300 
        ${darkMode ? "bg-gray-900 text-white" : "bg-[#00ffe8] text-black"}`}
    >
      {/* ✅ Header Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
        🧠 Improve with DSA Problems
      </h1>
      <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 text-slate-500 animate-slide-up">
        Enhance problem-solving skills with coding challenges
      </p>

      {/* ✅ Navigation Buttons (100% Responsive Grid) */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl">

        <Link to="/easy" className="group">
          <div className="p-5 sm:p-6 bg-green-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
            🟢 Easy Problems
          </div>
        </Link>

        <Link to="/medium" className="group">
          <div className="p-5 sm:p-6 bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
            🟠 Medium Problems
          </div>
        </Link>

        <Link to="/hard" className="group">
          <div className="p-5 sm:p-6 bg-red-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
            🔴 Hard Problems
          </div>
        </Link>

      </div>

      {/* ✅ Footer */}
      <p className="text-sm sm:text-base md:text-lg text-gray-500 animate-bounce my-10">
        🚀 Solve problems & level up your coding skills!
      </p>

    </div>
  );
};

export default Problems;
