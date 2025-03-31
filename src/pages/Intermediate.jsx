import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import ProjectSolution from "../components/ProjectSolution";
import { intermediateProjects } from "../data/intermediateProjects";

const Intermediate = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`flex h-screen transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-[#00ffe8] text-black"}`}>
      <Sidebar data={intermediateProjects} onSelect={setSelectedProject} />

      <div className="flex-1 flex items-start justify-center">
        {selectedProject ? (
          <ProjectSolution project={selectedProject} />
        ) : (
          <h1 className="absolute top-1/2 left-72 px-24 text-center line-clamp-6 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            🚀 Select a question from the sidebar to view solution
          </h1>
        )}
      </div>
    </div>
  );
};

export default Intermediate;
