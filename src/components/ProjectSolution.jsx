import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ProjectSolution = ({ project }) => {
  const { darkMode } = useContext(ThemeContext);
  const codeTheme = darkMode ? atomOneDark : atomOneLight;

  if (!project) {
    return (
      <div className={`
        w-full min-h-screen 
        flex justify-center items-center 
        p-4 sm:p-6 md:p-8 
        text-base sm:text-lg md:text-xl 
        font-semibold
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-500 text-black"}
      `}>
        ❗ Please select a project from the sidebar
      </div>
    );
  }

  return (
    <div className={`
      w-full min-h-screen 
      overflow-y-auto 
      px-4 sm:px-6 md:px-8 lg:px-12
      py-20 sm:py-6 
      text-sm sm:text-base md:text-lg
      ${darkMode ? "bg-gray-900 text-white" : "bg-[#00ffe8] text-black"}
    `}>
      {/* Project Title */}
      <h2 className="
        text-xl sm:text-2xl md:text-3xl lg:text-4xl 
        font-bold mb-4 
        bg-gradient-to-r from-orange-500 to-red-600 
        text-transparent bg-clip-text
      ">
        🚀 {project.title}
      </h2>

      {/* Description */}
      <p className={`
        ${darkMode ? "text-gray-300" : "text-gray-700"} 
        text-base sm:text-lg md:text-xl 
        mb-8
      `}>
        {project.description || "No description available."}
      </p>

      {/* Concepts Section */}
      {project.concepts && (
        <div className="mb-8">
          <h3 className={`
            text-lg sm:text-xl md:text-2xl 
            font-semibold mb-4 
            ${darkMode ? "text-yellow-400" : "text-blue-600"}
          `}>
            📚 Concepts Covered:
          </h3>
          <p className="text-base sm:text-lg">{project.concepts}</p>
        </div>
      )}

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <div className="mb-8">
          <h3 className={`
            text-lg sm:text-xl md:text-2xl 
            font-semibold mb-4
            ${darkMode ? "text-green-400" : "text-purple-600"}
          `}>
            ✅ Features:
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="
                flex items-start space-x-2
                text-base sm:text-lg
              ">
                <span>•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Algorithm Section */}
      {project.algorithm && project.algorithm.length > 0 && (
        <div className="mb-8">
          <h3 className={`
            text-lg sm:text-xl md:text-2xl 
            font-semibold mb-4
            ${darkMode ? "text-orange-400" : "text-red-500"}
          `}>
            🔹 Algorithm:
          </h3>
          <ul className="space-y-2">
            {project.algorithm.map((step, index) => (
              <li key={index} className="
                flex items-start space-x-2
                text-base sm:text-lg
              ">
                <span>{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Code Implementation Section */}
      {project.solution && (
        <div className="mb-8">
          <h3 className={`
            text-lg sm:text-xl md:text-2xl 
            font-bold mb-6
            ${darkMode ? "text-blue-300" : "text-indigo-600"}
          `}>
            📜 Code Implementation:
          </h3>

          {/* HTML Code */}
          {project.solution.HTMLCode && (
            <div className="mb-8">
              <h4 className={`
                text-base sm:text-lg md:text-xl 
                font-semibold mb-4
                ${darkMode ? "text-green-400" : "text-blue-700"}
              `}>
                🟢 HTML Code:
              </h4>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="html" 
                  style={codeTheme} 
                  className="text-sm sm:text-base !p-4"
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {project.solution.HTMLCode}
                </SyntaxHighlighter>
              </div>
            </div>
          )}

          {/* CSS Code */}
          {project.solution.CSSCode && (
            <div className="mb-8">
              <h4 className={`
                text-base sm:text-lg md:text-xl 
                font-semibold mb-4
                ${darkMode ? "text-blue-400" : "text-green-600"}
              `}>
                🔵 CSS Code:
              </h4>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="css" 
                  style={codeTheme} 
                  className="text-sm sm:text-base !p-4"
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {project.solution.CSSCode}
                </SyntaxHighlighter>
              </div>
            </div>
          )}

          {/* JavaScript Code */}
          {project.solution.JSCode && (
            <div className="mb-8">
              <h4 className={`
                text-base sm:text-lg md:text-xl 
                font-semibold mb-4
                ${darkMode ? "text-yellow-400" : "text-orange-600"}
              `}>
                🟠 JavaScript Code:
              </h4>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="javascript" 
                  style={codeTheme} 
                  className="text-sm sm:text-base !p-4"
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {project.solution.JSCode}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Explanation Section */}
      {project.explanation && project.explanation.length > 0 && (
        <div className="mb-8">
          <h3 className={`
            text-lg sm:text-xl md:text-2xl 
            font-semibold mb-6
            ${darkMode ? "text-pink-400" : "text-red-600"}
          `}>
            📌 Code Explanation:
          </h3>
          {project.explanation.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className={`
                text-base sm:text-lg md:text-xl 
                font-bold mb-3
                ${darkMode ? "text-yellow-400" : "text-purple-600"}
              `}>
                📝 {section.category}:
              </h4>
              <ul className="space-y-2">
                {section.points.map((point, idx) => (
                  <li key={idx} className="
                    flex items-start space-x-2
                    text-sm sm:text-base md:text-lg
                  ">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Practice & Interview Questions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Practice Projects */}
        {project.practiceProjects && project.practiceProjects.length > 0 && (
          <div>
            <h3 className={`
              text-lg sm:text-xl md:text-2xl 
              font-semibold mb-4
              ${darkMode ? "text-blue-400" : "text-green-600"}
            `}>
              💡 Practice Projects:
            </h3>
            <ul className="space-y-2">
              {project.practiceProjects.map((problem, index) => (
                <li key={index} className="
                  flex items-start space-x-2
                  text-sm sm:text-base md:text-lg
                ">
                  <span>•</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Interview Questions */}
        {project.interviewQuestions && project.interviewQuestions.length > 0 && (
          <div>
            <h3 className={`
              text-lg sm:text-xl md:text-2xl 
              font-semibold mb-4
              ${darkMode ? "text-indigo-400" : "text-orange-600"}
            `}>
              🎤 Interview Questions:
            </h3>
            <ul className="space-y-2">
              {project.interviewQuestions.map((q, index) => (
                <li key={index} className="
                  flex items-start space-x-2
                  text-sm sm:text-base md:text-lg
                ">
                  <span>•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Conclusion */}
      {project.conclusion && project.conclusion.length > 0 && (
        <div className="mb-20 sm:mb-12">
          <h3 className={`
            text-lg sm:text-xl md:text-2xl 
            font-semibold mb-4
            ${darkMode ? "text-green-400" : "text-blue-600"}
          `}>
            🎯 Final Conclusion:
          </h3>
          <ul className="space-y-2">
            {project.conclusion.map((point, index) => (
              <li key={index} className="
                flex items-start space-x-2
                text-sm sm:text-base md:text-lg
              ">
                <span>•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectSolution;