import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const QuestionSolution = ({ question }) => {
  const { darkMode } = useContext(ThemeContext);
  const codeTheme = darkMode ? atomOneDark : atomOneLight;

  if (!question) {
    return (
      <div
        className={`w-full min-h-screen flex justify-center items-center text-sm font-semibold transition-all duration-300 
        px-4 sm:px-6 lg:pl-[24%] py-16 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-500 text-black"}`}
      >
        ❗ Please select a question from the sidebar
      </div>
    );
  }

  return (
    <div
      className={`w-full transition-all duration-300 
        px-4 sm:px-8 md:px-16 lg:pl-[24%] py-16 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}`}
    >
      {/* ✅ Problem Title & Description */}
      <h2 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
        🚀 {question.title}
      </h2>
      <p className="text-md md:text-lg">{question.description}</p>

      {/* ✅ Problem Statement */}
      <h3 className={`text-lg md:text-xl pt-6 font-semibold ${darkMode ? "text-yellow-400" : "text-blue-600"}`}>
        📌 Problem Statement:
      </h3>
      <p>{question.problemStatement}</p>

      {/* ✅ Algorithm Section */}
      {question.algorithm && (
        <div className="mt-6">
          <h3 className={`text-lg md:text-xl font-semibold ${darkMode ? "text-orange-400" : "text-red-500"}`}>
            🔹 Algorithm:
          </h3>
          <ul className="pl-4 md:pl-6 space-y-1 list-none">
            {question.algorithm.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Code Implementation */}
      {question.solution && (
        <div className="mt-6">
          {question.solution.methods.map((method, index) => (
            <div key={index} className="mt-6">
              <h4 className={`text-md md:text-lg font-semibold ${darkMode ? "text-green-400" : "text-blue-700"}`}>
                📝 {method.method} Approach:
              </h4>
              <ul className="pl-4 md:pl-6 space-y-1 list-none">
                {method.approach.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>

              <h4 className={`text-md md:text-lg py-4 font-semibold ${darkMode ? "text-yellow-400" : "text-orange-600"}`}>
                🖥️ Code:
              </h4>
              <div className="overflow-x-auto bg-gray-800 p-0 rounded-md">
                <SyntaxHighlighter language="javascript" style={codeTheme} className="rounded-md text-sm md:text-base">
                  {method.code}
                </SyntaxHighlighter>
              </div>

              <h4 className={`text-md md:text-lg pt-10 font-semibold ${darkMode ? "text-pink-400" : "text-red-600"}`}>
                🔍 Code Explanation:
              </h4>
              <ul className="pl-4 md:pl-6 space-y-1 list-none">
                {method.explanation.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Practice Problems */}
      {question.practiceProblems && (
        <div className="mt-6">
          <h3 className={`text-lg md:text-xl font-semibold ${darkMode ? "text-blue-400" : "text-green-600"}`}>
            💡 Practice Problems:
          </h3>
          <ul className="pl-4 md:pl-6 space-y-1 list-none">
            {question.practiceProblems.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Interview Questions */}
      {question.interviewQuestions && (
        <div className="mt-6">
          <h3 className={`text-lg md:text-xl font-semibold ${darkMode ? "text-indigo-400" : "text-orange-600"}`}>
            🎤 Interview Questions:
          </h3>
          <ul className="pl-4 md:pl-6 space-y-1 list-none">
            {question.interviewQuestions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Comparison Table */}
      {question.comparisonTable && (
        <div className="mt-6 w-full overflow-x-auto">
          <h3 className={`text-lg md:text-xl font-semibold ${darkMode ? "text-pink-400" : "text-purple-600"}`}>
            📊 Comparison Table:
          </h3>
          <div className="overflow-x-auto">
            <table
              className={`w-full border-collapse mt-3 text-sm md:text-base transition-all duration-300 
              ${darkMode ? "border-gray-700 text-white" : "border-gray-300 text-black"}`}
            >
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
                  <tr key={index} className={`${darkMode ? "border-gray-700" : "border-gray-300"}`}>
                    <td className="border p-2">{row.approach}</td>
                    <td className="border p-2">{row.timeComplexity}</td>
                    <td className="border p-2">{row.spaceComplexity}</td>
                    <td className="border p-2">{row.pros}</td>
                    <td className="border p-2">{row.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ✅ Conclusion */}
      {question.conclusion && (
        <div className="mt-6">
          <h3 className={`text-lg md:text-xl font-semibold ${darkMode ? "text-green-400" : "text-blue-600"}`}>
            🎯 Final Conclusion:
          </h3>
          <ul className="pl-4 md:pl-6 space-y-1 list-none">
            {question.conclusion.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuestionSolution;
