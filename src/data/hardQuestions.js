export const hardQuestions = [
  // 1️⃣ Advanced Patterns & Pascal’s Triangle
  {
    category: "Advanced Patterns & Pascal’s Triangle",
    questions: [
      // Q-1. Print Pascal’s Triangle
      {
        title: "Print Pascal’s Triangle",
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
      // Q-2. Floyd’s Triangle
      {
        title: "Floyd’s Triangle",
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
      // Q-3. Hollow Diamond Pattern
      {
        title: "Hollow Diamond Pattern",
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
      // Q-4. Zig-Zag Pattern
      {
        title: "Zig-Zag Pattern",
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
      // Q-5. Advanced Triangle Patterns
      {
        title: "Advanced Triangle Patterns",
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
      // Q-6. Cross and Hollow Patterns
      {
        title: "Cross and Hollow Patterns",
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
      // Q-7. Star Pyramid and Diamond Shapes
      {
        title: "Star Pyramid and Diamond Shapes",
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
  // 2️⃣ Number Theory & Complex Calculations
  {
    category: "Number Theory & Complex Calculations",
    questions: [
      // Q-8. ISBN Number
      {
        title: "ISBN Number",
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
      // Q-9. HCF/GCD
      {
        title: "HCF/GCD",
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
      // Q-10. Harshad Number
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
      // Q-11. Perfect Square
      {
        title: "Perfect Square",
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
      // Q-12. Abundant Number
      {
        title: "Abundant Number",
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
      // Q-13. Fibonacci Series
      {
        title: "Fibonacci Series",
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
      // Q-14. Find Numbers with Exactly X Divisors
      {
        title: "Find Numbers with Exactly X Divisors",
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
      // Q-15. Prime Factors
      {
        title: "Prime Factors",
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
      // Q-16. Calculate Area
      {
        title: "Calculate Area",
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
      // Q-17. Neon Number
      {
        title: "Neon Number",
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
      // Q-18. Sum of Even Indexed Fibonacci Numbers
      {
        title: "Sum of Even Indexed Fibonacci Numbers",
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
      // Q-19. Find the Largest Digit in a Number
      {
        title: "Find the Largest Digit in a Number",
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
      // Q-20. Find LCM of Two Numbers
      {
        title: "Find LCM of Two Numbers",
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
      // Q-21. Find the Sum of Even Digits in a Number
      {
        title: "Find the Sum of Even Digits in a Number",
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
  // 3️⃣ Date & Condition-Based Questions
  {
    category: "Date & Condition-Based Questions",
    questions: [
      // Q-22. Number of Days in a Month
      {
        title: "Number of Days in a Month",
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
      // Q-23. Age Category Message
      {
        title: "Age Category Message",
        description: "Ask the user for their age. If they are under 18, print 'You area minor' If they are between 18 and 60, print 'You are an adult' If they are above 60, print 'You are a senior citizen' Age Category Message - Ask the user for their age. If they are under 18, print 'You area minor' If they are between 18 and 60, print 'You are an adult' If they are above 60, print 'You are a senior citizen' ",
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
      // Q-24. Even or Odd Sum
      {
        title: "Even or Odd Sum",
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
  // 4️⃣ String & Character Manipulation
  {
    category: "String & Character Manipulation",
    questions: [
      // Q-25. Character Case Checker
      {
        title: "Character Case Checker",
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
      // Q-26. Largest of Three Numbers
      {
        title: "Largest of Three Numbers",
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
      // Q-27. Positive, Negative, or Zero
      {
        title: "Positive, Negative, or Zero",
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
      // Q-28. User Greeting
      {
        title: "User Greeting",
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
      // Q-29. Traffic Light System
      {
        title: "Traffic Light System",
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
      // Q-30. Multiplication Table
      {
        title: "Multiplication Table",
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
      // Q-31. Grade Calculator
      {
        title: "Grade Calculator",
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
      // Q-32. Simple Login System
      {
        title: "Simple Login System",
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
      // Q-33. Swapping System
      {
        title: "Positive, Negative, or Zero",
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
  // 5️⃣ Logical Puzzles & Challenges
  {
    category: "Logical Puzzles & Challenges",
    questions: [
      // Q-34. FizzBuzz (Multiple of Both)
      {
        title: "FizzBuzz (Multiple of Both)",
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
      // Q-35. Number Reversal
      {
        title: "Number Reversal",
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
      // Q-36. Sum of Digits
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
      // Q-37. Palindrome Checker
      {
        title: "Palindrome Checker",
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
      // Q-38. Find Second Largest Number
      {
        title: "Find Second Largest Number",
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
      // Q-39. Find First Non-Repeating Character
      {
        title: "Find First Non-Repeating Character",
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
      // Q-40. Even Digit Counter
      {
        title: "Even Digit Counter",
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
      // Q-41. Nested Condition Challenge
      {
        title: "Nested Condition Challenge",
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
      // Q-42. Toggle Case
      {
        title: "Toggle Case",
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
      // Q-43. Find the Missing Number in a Sequence
      {
        title: "Find the Missing Number in a Sequence",
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
      // Q-44. Convert Number to Words
      {
        title: "Number Reversal",
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
