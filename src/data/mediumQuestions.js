export const mediumQuestions = [
  // 1️⃣ Math Problems

  {
    category: "Math Problems",
    questions: [
      // Q-1. Calculate Compound Interest
      {
        title: "Calculate Compound Interest",
        description: "Add two numbers and return the sum.",
        problemStatement: "User se do numbers input lo aur unka sum return karo.",
        algorithm: [
          "User se do numbers input lo.",
          "Unka sum calculate karo using + operator.",
          "Result return karo.",
        ],
        solution: {
          methods: [
            {
              method: "Using + Operator",
              approach: [
                "User se two numbers input lo.",
                "Unka sum calculate karo using + operator.",
                "Result return karo.",
              ],
              code: `
function addNumbers(a, b) {
    return a + b;
}

// Example
console.log(addNumbers(5, 7)); // Output: 12
              `,
              explanation: [
                "Do numbers ko directly + operator se add kiya.",
                "Result return kiya.",
              ],
            },
          ],
        },
        practiceProblems: [
          "Find the sum of three numbers.",
          "Calculate the sum of an array of numbers.",
        ],
        interviewQuestions: [
          "Kaunse data types ko + operator add kar sakta hai?",
          "Concatenation aur Addition me kya difference hai?",
        ],
        comparisonTable: [
          {
            approach: "Using + Operator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and efficient",
            cons: "Limited to two numbers",
          },
        ],
        conclusion: [
          "+ Operator simple aur efficient tarika hai addition ke liye.",
        ],
      },
      // Q-2. Area of a Triangle Using Heron’s Formula
      {
        title: "Area of a Triangle Using Heron’s Formula",
        description: "Add two numbers and return the sum.",
        problemStatement: "User se do numbers input lo aur unka sum return karo.",
        algorithm: [
          "User se do numbers input lo.",
          "Unka sum calculate karo using + operator.",
          "Result return karo.",
        ],
        solution: {
          methods: [
            {
              method: "Using + Operator",
              approach: [
                "User se two numbers input lo.",
                "Unka sum calculate karo using + operator.",
                "Result return karo.",
              ],
              code: `
function addNumbers(a, b) {
    return a + b;
}

// Example
console.log(addNumbers(5, 7)); // Output: 12
              `,
              explanation: [
                "Do numbers ko directly + operator se add kiya.",
                "Result return kiya.",
              ],
            },
          ],
        },
        practiceProblems: [
          "Find the sum of three numbers.",
          "Calculate the sum of an array of numbers.",
        ],
        interviewQuestions: [
          "Kaunse data types ko + operator add kar sakta hai?",
          "Concatenation aur Addition me kya difference hai?",
        ],
        comparisonTable: [
          {
            approach: "Using + Operator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and efficient",
            cons: "Limited to two numbers",
          },
        ],
        conclusion: [
          "+ Operator simple aur efficient tarika hai addition ke liye.",
        ],
      },
      // Q-3. Circumference of a Circle
      {
        title: "Circumference of a Circle",
        description: "Add two numbers and return the sum.",
        problemStatement: "User se do numbers input lo aur unka sum return karo.",
        algorithm: [
          "User se do numbers input lo.",
          "Unka sum calculate karo using + operator.",
          "Result return karo.",
        ],
        solution: {
          methods: [
            {
              method: "Using + Operator",
              approach: [
                "User se two numbers input lo.",
                "Unka sum calculate karo using + operator.",
                "Result return karo.",
              ],
              code: `
function addNumbers(a, b) {
    return a + b;
}

// Example
console.log(addNumbers(5, 7)); // Output: 12
              `,
              explanation: [
                "Do numbers ko directly + operator se add kiya.",
                "Result return kiya.",
              ],
            },
          ],
        },
        practiceProblems: [
          "Find the sum of three numbers.",
          "Calculate the sum of an array of numbers.",
        ],
        interviewQuestions: [
          "Kaunse data types ko + operator add kar sakta hai?",
          "Concatenation aur Addition me kya difference hai?",
        ],
        comparisonTable: [
          {
            approach: "Using + Operator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and efficient",
            cons: "Limited to two numbers",
          },
        ],
        conclusion: [
          "+ Operator simple aur efficient tarika hai addition ke liye.",
        ],
      },
      // Q-4. Accept a Year and Check If It’s a Leap Year
      {
        title: "Accept a Year and Check If It’s a Leap Year",
        description: "User ka naam input lekar usko greet karna hai.",
        problemStatement: "User se naam input lo aur ek greeting message return karo.",
        algorithm: [
          "User se naam input lo.",
          "Greeting message ko string me format karo.",
          "Greeting message return karo ya print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Using String Concatenation",
              approach: [
                "User se naam input lo.",
                "Greeting message concatenate karo.",
                "Message return karo ya print karo.",
              ],
              code: `
function greetUser(name) {
    return "Hello, " + name + "! Welcome to SolveX.";
}

// Example
console.log(greetUser("Rahul")); // Output: Hello, Rahul! Welcome to SolveX.
              `,
              explanation: [
                "User se naam input liya.",
                "String concatenate karke greeting banaya.",
                "Greeting return kiya.",
              ],
            },
            {
              method: "Using Template Literals",
              approach: [
                "User se naam input lo.",
                "Template literals ka use karke greeting format karo.",
                "Greeting return karo.",
              ],
              code: `
function greetUser(name) {
    return \`Hello, \${name}! Welcome to SolveX.\`;
}

// Example
console.log(greetUser("Rahul")); // Output: Hello, Rahul! Welcome to SolveX.
              `,
              explanation: [
                "Template literals se dynamic string formatting easy ho jata hai.",
              ],
            },
          ],
        },
        practiceProblems: [
          "Greet the user in multiple languages.",
          "Create a function that takes a first and last name and returns a full greeting.",
        ],
        interviewQuestions: [
          "String concatenation aur template literals me kya difference hai?",
          "User input validation kaise kar sakte hain?",
        ],
        comparisonTable: [
          {
            approach: "String Concatenation",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple to use",
            cons: "Less readable for complex strings",
          },
          {
            approach: "Template Literals",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "More readable and flexible",
            cons: "Requires ES6 support",
          },
        ],
        conclusion: [
          "Template literals zyada readable aur flexible hote hain.",
          "Concatenation purane JavaScript versions ke liye compatible hai.",
        ],
      },
      // Q-5. Shop Discount Problem
      {
        title: "Shop Discount Problem",
        description: "Add two numbers and return the sum.",
        problemStatement: "User se do numbers input lo aur unka sum return karo.",
        algorithm: [
          "User se do numbers input lo.",
          "Unka sum calculate karo using + operator.",
          "Result return karo.",
        ],
        solution: {
          methods: [
            {
              method: "Using + Operator",
              approach: [
                "User se two numbers input lo.",
                "Unka sum calculate karo using + operator.",
                "Result return karo.",
              ],
              code: `
function addNumbers(a, b) {
    return a + b;
}

// Example
console.log(addNumbers(5, 7)); // Output: 12
              `,
              explanation: [
                "Do numbers ko directly + operator se add kiya.",
                "Result return kiya.",
              ],
            },
          ],
        },
        practiceProblems: [
          "Find the sum of three numbers.",
          "Calculate the sum of an array of numbers.",
        ],
        interviewQuestions: [
          "Kaunse data types ko + operator add kar sakta hai?",
          "Concatenation aur Addition me kya difference hai?",
        ],
        comparisonTable: [
          {
            approach: "Using + Operator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and efficient",
            cons: "Limited to two numbers",
          },
        ],
        conclusion: [
          "+ Operator simple aur efficient tarika hai addition ke liye.",
        ],
      },
      // Q-6. Bijli Bill Calculation
      {
        title: "Bijli Bill Calculation",
        description: "Add two numbers and return the sum.",
        problemStatement: "User se do numbers input lo aur unka sum return karo.",
        algorithm: [
          "User se do numbers input lo.",
          "Unka sum calculate karo using + operator.",
          "Result return karo.",
        ],
        solution: {
          methods: [
            {
              method: "Using + Operator",
              approach: [
                "User se two numbers input lo.",
                "Unka sum calculate karo using + operator.",
                "Result return karo.",
              ],
              code: `
function addNumbers(a, b) {
    return a + b;
}

// Example
console.log(addNumbers(5, 7)); // Output: 12
              `,
              explanation: [
                "Do numbers ko directly + operator se add kiya.",
                "Result return kiya.",
              ],
            },
          ],
        },
        practiceProblems: [
          "Find the sum of three numbers.",
          "Calculate the sum of an array of numbers.",
        ],
        interviewQuestions: [
          "Kaunse data types ko + operator add kar sakta hai?",
          "Concatenation aur Addition me kya difference hai?",
        ],
        comparisonTable: [
          {
            approach: "Using + Operator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and efficient",
            cons: "Limited to two numbers",
          },
        ],
        conclusion: [
          "+ Operator simple aur efficient tarika hai addition ke liye.",
        ],
      },

    ],
  },

  // 2️⃣ Advanced Loops & Number Theory
  {
    category: "Advanced Loops & Number Theory",
    questions: [
      // Q-7. Factorial of a Number
      {
        title: "Factorial of a Number",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-8. Print the Sum of All Even & Odd Numbers Separately in a Range
      {
        title: "Accept Two Numbers and Print the Greatest",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-9. Print All the Factors of a Number
      {
        title: "Print All the Factors of a Number",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-10. Write a Program to Calculate a^b (Power Function)
      {
        title: "Write a Program to Calculate a^b (Power Function)",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-11. Sum of Digits
      {
        title: "Sum of Digits",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-12. Reverse of a Number
      {
        title: "Reverse of a Number",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-13. Strong Number
      {
        title: "Strong Number",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-14. Automorphic Number
      {
        title: "Automorphic Number",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
    ],
  },
  // 3️⃣ Pattern Printing
  {
    category: "Pattern Printing",
    questions: [
      // Q-15. Right Angle Triangle
      {
        title: "Right Angle Triangle",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-16. Left Angle Triangle
      {
        title: "Left Angle Triangle",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-17. Number Pattern
      {
        title: "Number Pattern",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-18. Alphabet Pattern
      {
        title: "Alphabet Pattern",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-19. Inverted Right Angle Triangle
      {
        title: "Inverted Right Angle Triangle",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-20. Pyramid Patterns
      {
        title: "Pyramid Patterns",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-21. V Pattern
      {
        title: "V Pattern",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-22. X Pattern
      {
        title: "X Pattern",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
    ],
  },
  // 4️⃣ Arrays & Searching Algorithms
  {
    category: "Arrays & Searching Algorithms",
    questions: [
      // Q-23. Sum of Array Elements
      {
        title: "Sum of Array Elements",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-24. Maximum Element from the Array
      {
        title: "Maximum Element from the Array",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-25. Finding Prime Numbers
      {
        title: "Finding Prime Numbers",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-26. Checking for Automorphic Number
      {
        title: "Checking for Automorphic Number",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
      // Q-27. Strong Number Validation
      {
        title: "Strong Number Validation",
        description: "Check if a given number is even or odd.",
        problemStatement: "User se ek number input lo aur check karo ki Even hai ya Odd.",
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
    ],
  },
 
];
