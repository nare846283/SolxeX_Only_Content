import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import QuestionSolution from "../components/QuestionSolution";

const Hard = () => {
  const questions = [
    { title: "Find Fibonacci Series", solution: "function fibonacci(n) { let a = 0, b = 1, temp; while (n-- > 0) { temp = a; a = b; b += temp; } return a; }" },
    { title: "Find GCD of Two Numbers", solution: "function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }" },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  return (
    <div className="flex h-screen">
      <Sidebar questions={questions} onSelect={setSelectedQuestion} />
      <QuestionSolution question={selectedQuestion} />
    </div>
  );
};

export default Hard;
