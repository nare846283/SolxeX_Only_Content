import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import QuestionSolution from "../components/QuestionSolution";

const Medium = () => {
  const questions = [
    { title: "Find Prime Numbers", solution: "function isPrime(n) { for(let i = 2; i < n; i++) if(n % i === 0) return false; return n > 1; }" },
    { title: "Reverse a String", solution: "function reverseString(str) { return str.split('').reverse().join(''); }" },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  return (
    <div className="flex h-screen">
      <Sidebar questions={questions} onSelect={setSelectedQuestion} />
      <QuestionSolution question={selectedQuestion} />
    </div>
  );
};

export default Medium;
