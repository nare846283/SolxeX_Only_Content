import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import QuestionSolution from "../components/QuestionSolution";
import { easyQuestions } from "../data/easyQuestions";

const Easy = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div 
      className={`flex flex-col sm:flex-row min-h-screen w-full transition-all duration-300 
        ${darkMode ? "bg-gray-900 text-white" : "bg-[#00ffe8] text-black"}`}
    >
      {/* Sidebar Container */}
      <div className="w-full sm:w-auto sm:min-h-screen z-50 flex-shrink-0 sm:flex sm:flex-col sm:justify-start sm:items-start sm:p-4 md:p-6 lg:p-8 xl:p-12">
        <Sidebar data={easyQuestions} onSelect={setSelectedQuestion} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full min-h-[calc(100vh-4rem)] sm:min-h-screen flex items-start justify-center p-4 sm:p-6 md:p-8">
        {selectedQuestion ? (
          <QuestionSolution question={selectedQuestion} />
        ) : (
          <h1 className={`
            text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
            font-extrabold bg-gradient-to-r from-orange-500 to-red-600 
            text-transparent bg-clip-text
            px-4 sm:px-8 md:px-12 lg:px-24
            absolute top-1/2 left-0 sm:left-72
            transform -translate-y-1/2
            w-full sm:w-auto
            line-clamp-6
          `}>
            🚀 Select a question from the sidebar to view solution
          </h1>
        )}
      </div>
    </div>
  );
};

export default Easy;