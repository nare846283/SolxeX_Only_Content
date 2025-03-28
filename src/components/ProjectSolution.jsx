import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ProjectSolution = ({ project }) => {
  const { darkMode } = useContext(ThemeContext);
  const codeTheme = darkMode ? atomOneDark : atomOneLight; // ✅ Theme change based on dark/light mode

  if (!project) {
    return (
      <div
        className={`w-full h-m-screen py-24 sm:py-0 pl-[24%] flex justify-center items-center text-md font-semibold transition-all duration-300 
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}`}
      >
        ❗ Please select a project from the sidebar
      </div>
    );
  }

  return (
    <div
      className={`w-full h-m-screen py-24 px-[10%] pl-[24%] transition-all duration-300 
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}`}
    >
      {/* ✅ Project Title & Description */}
      <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
        🚀 {project.title}
      </h2>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg`}>
        {project.description || "No description available."}
      </p>

      {/* ✅ Concepts Section */}
      {project.concepts && (
        <div className="mt-6">
          <h3 className={`text-xl font-semibold ${darkMode ? "text-yellow-400" : "text-blue-600"}`}>
            📚 Concepts Covered:
          </h3>
          <p>{project.concepts}</p>
        </div>
      )}

      {/* ✅ Features Section */}
      {project.features && project.features.length > 0 && (
        <div className="mt-6">
          <h3 className={`text-xl font-semibold ${darkMode ? "text-green-400" : "text-purple-600"}`}>
            ✅ Features:
          </h3>
          <ul className="pl-6 space-y-1 list-none">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Algorithm Section */}
      {project.algorithm && project.algorithm.length > 0 && (
        <div className="mt-6">
          <h3 className={`text-xl font-semibold ${darkMode ? "text-orange-400" : "text-red-500"}`}>
            🔹 Algorithm:
          </h3>
          <ul className="pl-6 space-y-1 list-none">
            {project.algorithm.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}

     {/* ✅ Code Implementation Section */}
     {project.solution && (
        <div className="mt-6">
          <h3 className={`my-4 text-xl font-bold ${darkMode ? "text-blue-300" : "text-indigo-600"}`}>
            📜 Code Implementation:
          </h3>

          {project.solution.HTMLCode && (
            <>
              <h4 className={`my-6 text-lg font-semibold ${darkMode ? "text-green-400" : "text-blue-700"}`}>
                🟢 HTML Code:
              </h4>
              <SyntaxHighlighter language="html" style={codeTheme} className="rounded-md overflow-x-auto">
                {project.solution.HTMLCode}
              </SyntaxHighlighter>
            </>
          )}

          {project.solution.CSSCode && (
            <>
              <h4 className={`my-6 text-lg font-semibold ${darkMode ? "text-blue-400" : "text-green-600"}`}>
                🔵 CSS Code:
              </h4>
              <SyntaxHighlighter language="css" style={codeTheme} className="rounded-md overflow-x-auto">
                {project.solution.CSSCode}
              </SyntaxHighlighter>
            </>
          )}

          {project.solution.JSCode && (
            <>
              <h4 className={`my-6 text-lg font-semibold ${darkMode ? "text-yellow-400" : "text-orange-600"}`}>
                🟠 JavaScript Code:
              </h4>
              <SyntaxHighlighter language="javascript" style={codeTheme} className="rounded-md overflow-x-auto">
                {project.solution.JSCode}
              </SyntaxHighlighter>
            </>
          )}
        </div>
      )}

      {/* ✅ Explanation (Category-wise) */}
      {project.explanation && project.explanation.length > 0 && (
        <div className="my-6">
          <h3 className={`mt-4 text-xl font-semibold ${darkMode ? "text-pink-400" : "text-red-600"}`}>
            📌 Code Explanation:
          </h3>
          {project.explanation.map((section, index) => (
            <div key={index} className="mt-4">
              <h4 className={`text-lg font-bold ${darkMode ? "text-yellow-400" : "text-purple-600"}`}>
                📝 {section.category}:
              </h4>
              <ul className="pl-6 space-y-1 list-none">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Practice Projects */}
      {project.practiceProjects && project.practiceProjects.length > 0 && (
        <div className="mt-6">
          <h3 className={`text-xl font-semibold ${darkMode ? "text-blue-400" : "text-green-600"}`}>
            💡 Practice Projects:
          </h3>
          <ul className="pl-6 space-y-1 list-none">
            {project.practiceProjects.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Interview Questions */}
      {project.interviewQuestions && project.interviewQuestions.length > 0 && (
        <div className="mt-6">
          <h3 className={`text-xl font-semibold ${darkMode ? "text-indigo-400" : "text-orange-600"}`}>
            🎤 Interview Questions:
          </h3>
          <ul className="pl-6 space-y-1 list-none">
            {project.interviewQuestions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Conclusion */}
      {project.conclusion && project.conclusion.length > 0 && (
        <div className="mt-6">
          <h3 className={`text-xl font-semibold ${darkMode ? "text-green-400" : "text-blue-600"}`}>
            🎯 Final Conclusion:
          </h3>
          <ul className="pl-6 space-y-1 list-none">
            {project.conclusion.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectSolution;
