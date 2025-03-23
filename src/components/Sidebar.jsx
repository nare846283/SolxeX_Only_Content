import React from "react";

const Sidebar = ({ questions, onSelect }) => {
  return (
    <div className="w-1/4 min-h-screen bg-gray-900 text-white p-4 transition-all duration-500">
      <h2 className="text-xl font-bold mb-4">📜 Problems List</h2>
      <ul className="space-y-2">
        {questions.map((question, index) => (
          <li
            key={index}
            className="p-2 bg-gray-800 rounded-md cursor-pointer hover:bg-purple-600 transition-all duration-300"
            onClick={() => onSelect(question)}
          >
            {question.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
