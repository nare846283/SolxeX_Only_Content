import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // 🌙 Import ThemeContext

const QuestionSolution = ({ question }) => {
  const { darkMode } = useContext(ThemeContext); // 🌙 Dark Mode state access karo

  return (
    <div className={`w-full mt-20 p-6 transition-all duration-300 
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}
      `}
    >
      <h2 className="text-2xl font-bold text-purple-600 mb-2">
        🚀 {question.title}
      </h2>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg`}>
        {question.description}
      </p>

      <h3 className="mt-4 text-xl font-semibold">📌 Problem Statement:</h3>
      <p>{question.problemStatement}</p>

      <h3 className="mt-4 text-xl font-semibold">🔹 Algorithm:</h3>
      <ul className="list-disc pl-6 space-y-1">
        {question.algorithm.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      {/* Multiple Methods Section */}
      {question.solution.methods.map((method, index) => (
        <div key={index} className="mt-6">
          <h3 className="mt-4 text-xl font-bold text-blue-600">
            📌 {method.method}
          </h3>

          <h4 className="mt-2 text-lg font-semibold">🔹 Approach:</h4>
          <ul className="list-disc pl-6 space-y-1">
            {method.approach.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>

          <h4 className="mt-4 text-lg font-semibold">📜 Code:</h4>
          <pre className={`p-4 rounded-md overflow-x-auto transition-all duration-300 
              ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}
            `}>
            <code>{method.code}</code>
          </pre>

          <h4 className="mt-4 text-lg font-semibold">📌 Code Explanation:</h4>
          <ul className="list-disc pl-6 space-y-1">
            {method.explanation.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Practice Problems */}
      <h3 className="mt-6 text-xl font-semibold">💡 Practice Problems:</h3>
      <ul className="list-disc pl-6 space-y-1">
        {question.practiceProblems.map((problem, index) => (
          <li key={index}>{problem}</li>
        ))}
      </ul>

      {/* Interview Questions */}
      <h3 className="mt-6 text-xl font-semibold">🎤 Interview Questions:</h3>
      <ul className="list-disc pl-6 space-y-1">
        {question.interviewQuestions.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>

      {/* Comparison Table */}
      <h3 className="mt-6 text-xl font-semibold">📊 Comparison Table:</h3>
      <table className={`w-full border-collapse mt-3 transition-all duration-300 
          ${darkMode ? "border-gray-700" : "border-gray-300"}
        `}>
        <thead>
          <tr className={`${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
            <th className="border p-2">Approach</th>
            <th className="border p-2">Time Complexity</th>
            <th className="border p-2">Space Complexity</th>
            <th className="border p-2">Pros</th>
            <th className="border p-2">Cons</th>
          </tr>
        </thead>
        <tbody>
          {question.comparisonTable.map((row, index) => (
            <tr key={index} className={darkMode ? "border-gray-700" : "border-gray-300"}>
              <td className="border p-2">{row.approach}</td>
              <td className="border p-2">{row.timeComplexity}</td>
              <td className="border p-2">{row.spaceComplexity}</td>
              <td className="border p-2">{row.pros}</td>
              <td className="border p-2">{row.cons}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Final Conclusion */}
      <h3 className="mt-6 text-xl font-semibold">🎯 Final Conclusion:</h3>
      <ul className="list-disc pl-6 space-y-1">
        {question.conclusion.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionSolution;
