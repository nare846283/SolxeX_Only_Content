import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`
      w-full min-h-screen 
      flex flex-col justify-center items-center 
      px-4 sm:px-6 md:px-8 lg:px-12
      py-20 sm:py-16 
      ${darkMode ? "bg-gray-900 text-white" : "bg-[#00ffe8] text-black"}
      transition-all duration-300
    `}>
      {/* ✅ Header Section */}
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-extrabold 
          bg-gradient-to-r from-orange-500 to-red-600 
          text-transparent bg-clip-text
          mb-4
        ">
          💡 Build & Learn with Projects
        </h1>
        <p className="
          text-base sm:text-lg md:text-xl 
          text-gray-400 
          animate-slide-up
          max-w-2xl mx-auto
        ">
          Enhance your frontend skills with real-world projects
        </p>
      </div>

      {/* ✅ Navigation Cards Grid */}
      <div className="
        w-full max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-4 sm:gap-6 md:gap-8
        mt-8 sm:mt-12 md:mt-16 
        px-4 sm:px-6 md:px-8
      ">
        <Link to="/beginner" className="group">
          <div className="
            p-6 sm:p-8
            bg-green-500 text-white 
            font-semibold rounded-xl
            shadow-lg hover:shadow-xl
            transition-all duration-300
            transform group-hover:scale-105
            h-full flex items-center justify-center
            text-lg sm:text-xl
          ">
            🎨 Beginner Projects
          </div>
        </Link>

        <Link to="/intermediate" className="group">
          <div className="
            p-6 sm:p-8
            bg-purple-600 text-white 
            font-semibold rounded-xl
            shadow-lg hover:shadow-xl
            transition-all duration-300
            transform group-hover:scale-105
            h-full flex items-center justify-center
            text-lg sm:text-xl
          ">
            ⚡ Intermediate Projects
          </div>
        </Link>

        <Link to="/advance" className="group">
          <div className="
            p-6 sm:p-8
            bg-black text-white 
            font-semibold rounded-xl
            shadow-lg hover:shadow-xl
            transition-all duration-300
            transform group-hover:scale-105
            h-full flex items-center justify-center
            text-lg sm:text-xl
          ">
            🔥 Advance Projects
          </div>
        </Link>
      </div>

      {/* ✅ Footer */}
      <p className="
        text-sm sm:text-base md:text-lg 
        text-gray-500 
        animate-bounce
        mt-12 sm:mt-16 md:mt-20
        mb-8
      ">
        🚀 Start building projects & upgrade your skills!
      </p>
    </div>
  );
};

export default Projects;