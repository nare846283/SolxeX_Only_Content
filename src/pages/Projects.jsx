import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div 
      className={`min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 transition-all duration-300 
        ${darkMode ? "bg-gray-900 text-white" : "bg-[#00ffe8] text-black"}`}
    >
      {/* ✅ Header Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
        💡 Build & Learn with Projects
      </h1>
      <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 text-gray-400 animate-slide-up">
        Enhance your frontend skills with real-world projects
      </p>

      {/* ✅ Navigation Buttons (100% Responsive Grid) */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        
        <Link to="/beginner" className="group">
          <div className="p-5 sm:p-6 bg-green-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
            🎨 Beginner Projects
          </div>
        </Link>

        <Link to="/intermediate" className="group">
          <div className="p-5 sm:p-6 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
            ⚡ Intermediate Projects
          </div>
        </Link>

        <Link to="/advance" className="group">
          <div className="p-5 sm:p-6 bg-black text-white font-semibold rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
            🔥 Advance Projects
          </div>
        </Link>

      </div>

      {/* ✅ Footer */}
      <p className="mt-8 sm:mt-10 text-gray-500 text-sm sm:text-base">
        🚀 Start building projects & upgrade your skills!
      </p>

    </div>
  );
};

export default Projects;
