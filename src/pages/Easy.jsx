import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import QuestionSolution from "../components/QuestionSolution";
import { easyQuestions } from "../data/easyQuestions";

const Easy = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className={`flex transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}`}>
      <div className="min-h-screen">
        <Sidebar data={easyQuestions} onSelect={setSelectedQuestion} />
      </div>

      <div className="flex-1 w-full flex items-start justify-center text-md sm:text-sm font-semibold">
        {selectedQuestion ? (
          <QuestionSolution question={selectedQuestion} />
        ) : (
          <p className="text-gray-500 mt-72">❗ Select a question from the sidebar to view solution</p>
        )}
      </div>
    </div>
  );
};

export default Easy;
