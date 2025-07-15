import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import ProjectSolution from "../components/ProjectSolution";
import ProjectBanner from "../components/ProjectBanner";
import { beginnerProjects } from "../data/beginnerProjects";

const Beginner = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`flex w-full min-h-screen transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-[#00ffe8] text-black"
      }`}>
      <Sidebar data={beginnerProjects} onSelect={setSelectedProject} />

      <div className="flex-1 w-full flex flex-col items-start justify-start p-8">
        {selectedProject ? (
          <>
            <div className="w-full ">
              <ProjectBanner project={selectedProject} />
            </div>
            <div className="w-full">
              <ProjectSolution project={selectedProject} />
            </div>
          </>
        ) : (
          <h1 className="absolute top-1/2 left-72 px-24 text-center line-clamp-6 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            🚀 Select a question from the sidebar to view solution
          </h1>
        )}
      </div>
    </div>
  );
};

export default Beginner;