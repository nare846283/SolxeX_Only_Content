import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import QuestionSolution from "../components/QuestionSolution";
import { easyQuestions } from "../data/easyQuestions";

const Easy = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className={`flex transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-[#00ffe8] text-black"}`}>
      <div className="min-h-screen">
        <Sidebar data={easyQuestions} onSelect={setSelectedQuestion} />
      </div>

      <div className="flex-1 w-full flex items-start justify-center lg:text-4xl md:text-2xl sm:text-xl font-semibold">
        {selectedQuestion ? (
          <QuestionSolution question={selectedQuestion} />
        ) : (
          <h1 className="absolute top-1/2 left-72 px-24 text-center line-clamp-6 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
          🚀 Select a question from the sidebar to view solution
        </h1>
        )}
      </div>
    </div>
  );
};

export default Easy;
