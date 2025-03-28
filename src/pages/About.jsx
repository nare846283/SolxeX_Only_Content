import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {

    const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={`pt-24 p-6 w-full min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <h1 className="text-3xl font-bold">About SolveX 🤔</h1>
      <p className="mt-2">A problem-solving platform to boost your coding skills.</p>
    </div>
  );
};

export default About;
