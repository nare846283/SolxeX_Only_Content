import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import QuestionSolution from "../components/QuestionSolution";

const Easy = () => {
  const questions = [
    {
      title: "Find the Largest Digit",
      description: "Find the largest digit in a given number.",
      problemStatement: "Hume ek given number ke sabse bada digit dhoondhna hai.",
      algorithm: [
        "User se input lo.",
        "Last digit extract karo using % 10.",
        "Largest digit ko track karne ke liye ek variable use karo.",
        "Har digit ko compare karke update karo.",
        "Final largest digit print karo.",
      ],
      solution: {
        methods: [
          {
            method: "Using While Loop",
            approach: [
              "Number se last digit extract karenge (% 10).",
              "Max digit ko track karenge aur compare karenge.",
              "Har iteration me last digit remove karenge (num / 10).",
            ],
            code: `
function findLargestDigit(num) {
    let maxDigit = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit > maxDigit) maxDigit = digit;
        num = Math.floor(num / 10);
    }
    return maxDigit;
}

// Example
console.log(findLargestDigit(54892)); // Output: 9
            `,
            explanation: [
              "Input number se last digit extract karo.",
              "Agar digit max se bada hai toh update karo.",
              "Har iteration me last digit remove karo.",
              "Loop jab tak chalta hai jab tak number 0 nahi hota.",
              "Finally, max digit return hota hai.",
            ],
          },
          {
            method: "Using String Conversion",
            approach: [
              "Number ko string me convert karenge.",
              "Har character ko digit me convert karenge.",
              "Math.max() ka use karke sabse bada digit find karenge.",
            ],
            code: `
function findLargestDigitString(num) {
    return Math.max(...String(num).split("").map(Number));
}

// Example
console.log(findLargestDigitString(54892)); // Output: 9
            `,
            explanation: [
              "Number ko string me convert kiya.",
              "Split karke har character ko digit me badla.",
              "Math.max() ka use karke max digit find kiya.",
            ],
          },
        ],
      },
      practiceProblems: [
        "Find the smallest digit in a number.",
        "Find the sum of all digits in a number.",
        "Find the second-largest digit in a number.",
      ],
      interviewQuestions: [
        "Digit extraction ka best tarika kya hai?",
        "Recursion vs Iteration: Kaunsa better hai?",
        "String conversion method kab useful hota hai?",
      ],
      comparisonTable: [
        {
          approach: "While Loop",
          timeComplexity: "O(N)",
          spaceComplexity: "O(1)",
          pros: "Fast & Simple",
          cons: "Extra memory ke bina slow ho sakta hai",
        },
        {
          approach: "String Conversion",
          timeComplexity: "O(N)",
          spaceComplexity: "O(1)",
          pros: "Easy to implement",
          cons: "Extra memory use hoti hai",
        },
      ],
      conclusion: [
        "While loop method fast hai aur simple hai.",
        "String conversion method short aur readable hai.",
        "Loop methods zyada efficient hote hain large numbers ke liye.",
      ],
    },

    {
      title: "Check Even or Odd",
      description: "Check if a given number is even or odd.",
      problemStatement: "Ek number diya gaya hai, check karo ki Even hai ya Odd.",
      algorithm: [
        "User se number input lo.",
        "Agar number % 2 === 0 hai toh Even hai.",
        "Warna number Odd hai.",
      ],
      solution: {
        methods: [
          {
            method: "Using Modulo Operator",
            approach: [
              "Number ko % 2 se divide karke remainder check karo.",
              "Agar remainder 0 hai toh number Even hai.",
              "Agar remainder 1 hai toh number Odd hai.",
            ],
            code: `
function isEven(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}

// Example
console.log(isEven(12)); // Output: Even
console.log(isEven(7));  // Output: Odd
            `,
            explanation: [
              "Number ko % 2 se divide kiya.",
              "Remainder agar 0 hai toh Even return kiya.",
              "Agar remainder 1 hai toh Odd return kiya.",
            ],
          },
        ],
      },
      practiceProblems: [
        "Find all even numbers in a given range.",
        "Check if a number is a multiple of 5.",
        "Check if a number is divisible by 3 and 5 both.",
      ],
      interviewQuestions: [
        "Modulo operator ka use kaha hota hai?",
        "Even and Odd checking ke different methods kya hai?",
        "Bitwise operations se Even/Odd kaise check karein?",
      ],
      comparisonTable: [
        {
          approach: "Modulo Operator",
          timeComplexity: "O(1)",
          spaceComplexity: "O(1)",
          pros: "Fastest method",
          cons: "Only works for basic even/odd check",
        },
      ],
      conclusion: [
        "Modulo method sabse efficient hai even/odd check ke liye.",
        "Bitwise operator use karna ek alternate technique ho sakti hai.",
      ],
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  return (
    <div className="flex">
      <Sidebar questions={questions} onSelect={setSelectedQuestion} />
      <QuestionSolution question={selectedQuestion} />
    </div>
  );
};

export default Easy;
