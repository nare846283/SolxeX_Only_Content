export const easyQuestions = [
  // 1️⃣ Basic Operations & Type Coercion
  {
    category: "Basic Operations & Type Coercion",
    questions: [
      // Q-1. Sum of Two Integers
      {
        title: "Sum of Two Integers",
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
      // Q-2. Relation Between Integer and String
      {
        title: "Relation Between Integer and String",
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
      // Q-3. Sum and Message (Type Coercion)
      {
        title: "Sum and Message (Type Coercion)",
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
      // Q-4. Greet the User
      {
        title: "Greet the User",
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
      // Q-5. Accept and Print the Answer
      {
        title: "Accept and Print the Answer",
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
      // Q-6. Swap Two Variables via 3 Methods
      {
        title: "Swap Two Variables via 3 Methods",
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
      // Q-7. Operators (+, -, *, %, /, >, <, >=, <=, !=, &&, ||, ++, --)
      {
        title: "Operators (+, -, *, %, /, >, <, >=, <=, !=, &&, ||, ++, --)",
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
  // 2️⃣ Math Functions & Problems
  {
    category: "Math Functions & Problems",
    questions: [
      // Q-8. Generate OTP
      {
        title: "Generate OTP",
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
      // Q-9. Accept Two Numbers and Print the Greatest
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
      // Q-10. Accept an Integer and Check Even/Odd
      {
        title: "Accept an Integer and Check Even/Odd",
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
      // Q-11. Accept Name and Age, Check Voter Eligibility
      {
        title: "Accept Name and Age, Check Voter Eligibility",
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
      // Q-12. Accept Three Numbers, Find Greatest
      {
        title: "Accept Three Numbers, Find Greatest",
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
  // 3️⃣ Loops & Iterations
  {
    category: "Loops & Iterations",
    questions: [
      // Q-13. Accept an Integer and Print "Hello World" N Times
      {
        title: "Accept an Integer and Print 'Hello World' N Times",
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
      // Q-14. Print Natural Numbers Up to N
      {
        title: "Print Natural Numbers Up to N",
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
      // Q-15. Reverse for Loop (Print N to 1)
      {
        title: "Reverse for Loop (Print N to 1)",
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
      // Q-16. Print Multiplication Table
      {
        title: "Print Multiplication Table",
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
      // Q-17. Sum Up to N Terms
      {
        title: "Sum Up to N Terms",
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
  // 4️⃣ Switch Case & Conditional Statements
  {
    category: "Switch Case & Conditional Statements",
    questions: [
      // Q-18. Switch Case & Do-While
      {
        title: "Switch Case & Do-While",
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
      // Q-19. Repeat Hello
      {
        title: "Repeat Hello",
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
      // Q-20. Guess the Number
      {
        title: "Guess the Number",
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
      // Q-21. Sasta Calculator
      {
        title: "Sasta Calculator",
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
  // 5️⃣ Arrays & Basic Data Structures
  {
    category: "Arrays & Basic Data Structures",
    questions: [
      // Q-22. Introduction to Arrays
      {
        title: "Introduction to Arrays",
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
      // Q-23. Fixed & Dynamic Size Array
      {
        title: "Fixed & Dynamic Size Array",
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
      // Q-24. Accept Value from User and Assign in an Array
      {
        title: "Accept Value from User and Assign in an Array",
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
