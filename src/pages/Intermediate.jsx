import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import ProjectSolution from "../components/ProjectSolution";
import { intermediateProjects } from "../data/intermediateProjects";

const Intermediate = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`flex h-screen transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}`}>
      <Sidebar data={intermediateProjects} onSelect={setSelectedProject} />
      
      <div className="flex-1 flex items-start justify-center text-md font-semibold">
        {selectedProject ? (
          <ProjectSolution project={selectedProject} />
        ) : (
          <p className="text-gray-500 mt-72">❗ Select a project from the sidebar to view details</p>
        )}
      </div>
    </div>
  );
};

export default Intermediate;
