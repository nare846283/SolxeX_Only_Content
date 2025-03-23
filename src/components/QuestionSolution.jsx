import React from "react";

const QuestionSolution = ({ question }) => {
  return (
    <div className="w-3/4 p-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-2">
        🚀 {question.title}
      </h2>
      <p className="text-gray-700 text-lg">{question.description}</p>

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
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
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
        {question.interviewQuestions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>

      {/* Comparison Table */}
      <h3 className="mt-6 text-xl font-semibold">📊 Comparison Table:</h3>
      <table className="w-full border-collapse border border-gray-300 mt-3">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Approach</th>
            <th className="border border-gray-300 p-2">Time Complexity</th>
            <th className="border border-gray-300 p-2">Space Complexity</th>
            <th className="border border-gray-300 p-2">Pros</th>
            <th className="border border-gray-300 p-2">Cons</th>
          </tr>
        </thead>
        <tbody>
          {question.comparisonTable.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{row.approach}</td>
              <td className="border border-gray-300 p-2">{row.timeComplexity}</td>
              <td className="border border-gray-300 p-2">{row.spaceComplexity}</td>
              <td className="border border-gray-300 p-2">{row.pros}</td>
              <td className="border border-gray-300 p-2">{row.cons}</td>
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
