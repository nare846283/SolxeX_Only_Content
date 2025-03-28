import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import QuestionSolution from "../components/QuestionSolution";
import { mediumQuestions } from "../data/mediumQuestions";

const Medium = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className={`flex h-screen transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}`}>
      <Sidebar data={mediumQuestions} onSelect={setSelectedQuestion} />
      
      <div className="flex-1 flex items-start justify-center text-md font-semibold">
        {selectedQuestion ? (
          <QuestionSolution question={selectedQuestion} />
        ) : (
          <p className="text-gray-500 mt-72">❗ Select a question from the sidebar to view solution</p>
        )}
      </div>
    </div>
  );
};

export default Medium;
