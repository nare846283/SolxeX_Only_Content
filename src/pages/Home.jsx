import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div 
      className={`min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 transition-all duration-300 
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      {/* ✅ Header Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
        🚀 Welcome to SolveX
      </h1>
      <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 text-gray-400">
        Master DSA & Frontend Projects with Interactive Learning
      </p>

      {/* ✅ Navigation Buttons */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl md:max-w-3xl">
        <Link to="/problems" className="group">
          <div 
            className="p-5 sm:p-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all transform group-hover:scale-105 active:scale-95"
          >
            🧠 Solve Coding Problems
          </div>
        </Link>

        <Link to="/projects" className="group">
          <div 
            className="p-5 sm:p-6 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all transform group-hover:scale-105 active:scale-95"
          >
            💡 Explore Frontend Projects
          </div>
        </Link>
      </div>

      {/* ✅ Footer */}
      <p className="mt-8 sm:mt-10 text-gray-500 text-sm sm:text-base">
        🚀 Start Learning & Building Today!
      </p>
    </div>
  );
};

export default Home;
