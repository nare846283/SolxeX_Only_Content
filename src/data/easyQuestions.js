export const easyQuestions = [
  // 1️⃣ Basic Operations & Type Coercion
  {
    category: "Basic Operations & Type Coercion",
    questions: [
      // Q-1. Sum of Two Integers
      {
        title: "Sum of Two Integers",
        description: "Do integers ka sum find karna hai.",
        problemStatement: "User se do numbers input lo aur unka sum return karo.",
        algorithm: [
          "🔹 User se two integers input lo.",
          "🔹 + operator ka use karke sum calculate karo.",
          "🔹 Result return karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method-1. Using + Operator",
              approach: [
                "🔹Do numbers ko directly + operator se add karo",
                "🔹Result return karo.",
              ],
              code: `
function addNumbers(a, b) {
    return a + b;
}

// Example
console.log(addNumbers(5, 7)); // Output: 12
              `,
              explanation: [
                "🔹Do numbers ko directly + operator se add kiya.",
                "🔹Result return kiya.",
              ],
            },
          ],
        },
        practiceProblems: [
          "🔹 Find the sum of three numbers.",
          "🔹 Calculate the sum of an array of numbers.",
        ],
        interviewQuestions: [
          "🔹 Kaunse data types ko + operator add kar sakta hai?",
          "🔹 Concatenation aur Addition me kya difference hai?",
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
          "🔹 + Operator simple aur efficient tarika hai addition ke liye.",
        ],
      },
      // Q-2. Relation Between Integer and String
      {
        title: "Relation Between Integer and String",
        description: "Integer aur String ke beech relation samajhna hai.",
        problemStatement: "Ek integer aur ek string ko concatenate karne par kya hoga, yeh check karo.",
        algorithm: [
          "🔹 User se integer aur string input lo.",
          "🔹 Concatenation operator (+) ka use karo.",
          "🔹 Output ko check karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method-1. Using + Operator (Type Coercion)",
              approach: [
                "🔹 Number ko String me convert karke concatenate karna.",
              ],
              code: `
function concatenate(num, str) {
    return num + str;
}

// Example
console.log(concatenate(5, "Hello")); // Output: "5Hello"
              `,
              explanation: [
                "JavaScript me + operator integer ko string me convert kar deta hai.",
                "Result return kiya.",
              ],
            },
          ],
        },
        practiceProblems: [
          "🔹Number aur String ko separate rakhne ke liye kaunse methods use kar sakte hain?",
        ],
        interviewQuestions: [
          "🔹 Type Coercion kya hoti hai?",
          "🔹 Implicit aur Explicit Conversion me kya difference hai?",
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
          "🔹 JavaScript me + operator String aur Integer ko concatenate kar sakta hai.",
        ],
      },
      // Q-3. Sum and Message (Type Coercion)
      {
        title: "Sum and Message (Type Coercion)",
        description: "Sum aur message ko combine karne par kya hoga, yeh check karna hai.",
        problemStatement: "Ek integer aur ek string ka sum calculate karne par kya hoga, yeh check karo.",
        algorithm: [
          "🔹 User se integer aur string input lo.",
          "🔹 + operator ka use karo aur output analyze karo.",
          "🔹 Result return karo.",
        ],
        solution: {
          methods: [
            {
              method: "Using + Operator (String Concatenation)",
              approach: [
                "String aur Number ko concatenate karne se Type Coercion hoti hai.",
                "Result return karo.",
              ],
              code: `
function sumAndMessage(num, message) {
    return num + message;
}

// Example
console.log(sumAndMessage(10, " is the result")); // Output: "10 is the result"
              `,
              explanation: [
                "🔹 + operator integer ko string me convert kar deta hai.",
                "🔹 Result return kiya.",
              ],
            },
          ],
        },
        practiceProblems: [
          "🔹 Different data types ke saath concatenation check karo.",
        ],
        interviewQuestions: [
          "🔹 JavaScript me implicit type conversion kaise hota hai?",
          "🔹 Concatenation aur addition me difference kya hai?",
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
          "🔹 JavaScript me + operator Type Coercion karta hai jab ek string aur ek integer combine hote hain.",
        ],
      },
      // Q-4. Greet the User
      {
        title: "Greet the User",
        description: "User ka naam input lekar usko greet karna hai.",
        problemStatement: "User se naam aur time (24-hour format) input lena hai aur usko appropriate greeting (Good Morning, Good Afternoon, Good Evening, Good Night) dena hai.",
        algorithm: [
          "🔹 User se naam (name) aur time (hour) input lena.",
          "🔹 Time ko check karna:",
          "   - Agar 5 se 11 baje tak hai → 'Good Morning'",
          "   - Agar 12 se 16 (4 PM) tak hai → 'Good Afternoon'",
          "   - Agar 17 se 20 (5 PM se 8 PM) tak hai → 'Good Evening'",
          "   - Agar 21 se 4 AM tak hai → 'Good Night'",
          "🔹 User ko name ke sath greeting message display karna.",
        ],
        solution: {
          methods: [
            {
              method: "Mthod-1. Using if-else Conditionals",
              approach: [
                "🔹 Time (hour) ko numeric value me convert karo",
                "🔹 if-else conditions se time ranges check karo",
                "🔹 Appropriate greeting select karo based on time",
                "🔹 Name ke sath greeting message return karo"
              ],
              code: `
    const greetUser = () => {
    let userName = prompt("Enter your name:");
    let hour = Number(prompt("Enter the time in 24-hour format (0-23):"));
                                    
    let greeting;
                                    
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
    } else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour < 5)) {
        greeting = "Good Night";
    } else {
        console.log("Invalid time! Please enter a valid hour (0-23).");
        return;
    }
                                    
    console.log(\` \${greeting}, \${userName}! \`);
}

// Function ko call karna
greetUser(); 
          `,
              explanation: [
                "🔹 prompt() ka use kiya hai taaki user se naam aur time ka input le sake.",
                "🔹 Number(prompt()) se time ko number me convert kiya taaki string na rahe.",
                "🔹 if-else conditions se time ke hisaab se greeting assign kiya.",
                "🔹 Final message ${greeting}, ${userName}! print kiya."
              ],
            },
            {
              method: "Mthod-2.Using switch-case in JavaScript",
              approach: [
                "🔹 Time (hour) ko numeric value me convert karo",
                "🔹 if-else conditions se time ranges check karo",
                "🔹 Appropriate greeting select karo based on time",
                "🔹 Name ke sath greeting message return karo"
              ],
              code: `
    const greetUserSwitch = () => {
    let userName = prompt("Enter your name:");
    let hour = Number(prompt("Enter the time in 24-hour format (0-23):"));
                                    
    let greeting;
                                    
    switch (true) {
    case (hour >= 5 && hour < 12):
        greeting = "Good Morning";
        break;
    case (hour >= 12 && hour < 17):
        greeting = "Good Afternoon";
        break;
    case (hour >= 17 && hour < 21):
        greeting = "Good Evening";
        break;
    case ((hour >= 21 && hour <= 23) || (hour >= 0 && hour < 5)):
        greeting = "Good Night";
        break;
    default:
        console.log("Invalid time! Please enter a valid hour (0-23).");
        return;
    }
                                    
    console.log(\` \${greeting}, \${userName}!\`);
}
                                    
// Function ko call karna
greetUserSwitch();

`,
              explanation: [
                "🔹 switch(true) ka use kiya taaki conditions check kar sake.",
                "🔹 Alag-alag cases define kiye:",
                "   -case (hour >= 5 && hour < 12): Good Morning",
                "   -case (hour >= 12 && hour < 17): Good Afternoon",
                "   -case (hour >= 17 && hour < 21): Good Evening",
                "   -case ((hour >= 21 && hour <= 23) || (hour>= 0 && hour < 5)): Good Night",
                "🔹 Default case diya agar time invalid ho."
              ],
            },
          ],

          output:
          `
          Enter your name: Ramesh
Enter the time in 24-hour format (0-23): 10
Output: Good Morning, Ramesh!
                                    
Enter your name: Suresh
Enter the time in 24-hour format (0-23): 15
Output: Good Afternoon, Suresh!
                                    
Enter your name: Raj
Enter the time in 24-hour format (0-23): 19
Output: Good Evening, Raj!
                                    
Enter your name: Neha
Enter the time in 24-hour format (0-23): 23
Output: Good Night, Neha!

Enter your name: Neha
Enter the time in 24-hour format (0-23): 25
Output: Invalid time! Please enter a valid hour (0-23).!

          `
        },
        practiceProblems: [
          "🔹 User se multiple names input lo aur sabko greet karo.",
          "🔹 Implement 12-hour format handling with AM/PM",
          "🔹 User se manual time input leke greeting generate karo.",
          "🔹 Alag-alag languages me greeting print karne ka program banao.",
          "🔹 Weekend aur weekday ke hisaab se different greeting show karo.",
          "🔹 Time aur naam ke bina default greeting dikhane ka program likho",
          "🔹 switch-case ka use karke greeting implement karo.",
          "🔹 Greeting message ko HTML webpage pe display karo."
        ],
        interviewQuestions: [
          "🔹 Why is input validation important in this function?",
          "🔹 How would you handle timezone differences?",
          "🔹 What are the benefits of using template literals?",
          "🔹 if-else aur switch-case me kya difference hai?",
          "🔹 JavaScript me Date() object ka use kaise hota hai?",
          "🔹 readline-sync aur prompt() me kya difference hai?",
          "🔹 JavaScript me string interpolation (${}) kaise kaam karta hai?",
          "🔹 Command-line me user input kaise handle karte hain?",
          "🔹 Date().getHours() kis format me time return karta hai?",
          "🔹 JavaScript me function call stack kaise kaam karta hai?",
        ],
        comparisonTable: [
          {
            approach: "Using if-else",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple logic, easy to modify",
            cons: "Limited to single language, basic functionality"
          },
          {
            approach: "Using Switch-Case",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple logic, easy to modify",
            cons: "Limited to single language, basic functionality"
          }
        ],
        conclusion: [
          "🔹 Agar conditions simple ho to if-else best hai.",
          "🔹 >Agar structured logic chahiye to switch-case ka use kar sakte hain.",
        ],
      },
      // Q-5. Accept and Print the Answer
      {
        title: "Accept and Print the Answer",
        description: "User se input lena aur use print karna hai. Alag-alag tarikon ka istemal karke user input ko accept aur display karne ka tarika samjhenge.",
        problemStatement: "User se ek string ya number input lo aur use print karo.",
        algorithm: [
          "🔹 User se input lo (string ya number).",
          "🔹 Input ko store karo.",
          "🔹 Print karo jo input diya gaya hai.",
          "🔹 Result return karo."
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using prompt() (Browser Input)",
              approach: [
                "🔹 prompt() function ka use karke user se input lo.",
                "🔹 Console ya webpage par result print karo.",
              ],
              code: `
function getUserInput() {
    let userInput = prompt("Enter something:");
    console.log("You entered:", userInput);
}

// Example
getUserInput();
              `,
              explanation: [
                "🔹 prompt() ka use kiya user se input lene ke liye.",
                "🔹 console.log() ka use kiya input ko print karne ke liye.",
              ],
            },
            {
              method: "Method 2: Using readline-sync (Node.js)",
              approach: [
                "🔹 readline-sync package ka use karke user se input lo.",
                "🔹 Result print karo.",
              ],
              code: `
const readline = require('readline-sync');

function getUserInput() {
    let userInput = readline.question("Enter something: ");
    console.log("You entered:", userInput);
}

// Example
getUserInput();
              `,
              explanation: [
                "🔹 readline-sync ka use kiya Node.js me input lene ke liye.",
                "🔹 console.log() ka use kiya input ko print karne ke liye.",
              ],
            },
            {
              method: "Method 3: Using readline (Node.js Async Input)",
              approach: [
                "🔹 readline module ka use karke input lo.",
                "🔹 Async method ka use karo user se input lene ke liye.",
              ],
              code: `
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter something: ", function(userInput) {
    console.log("You entered:", userInput);
    rl.close();
});
              `,
              explanation: [
                "🔹 readline module Node.js me user se input lene ke liye use hota hai.",
                "🔹 rl.question() function ka use kiya input lene ke liye.",
                "🔹 rl.close() function ka use kiya input session band karne ke liye."
              ],
            },
            {
              method: "Method 4: Using HTML Form (Web Input)",
              approach: [
                "🔹 HTML form ka use karke input field create karo.",
                "🔹 JavaScript se input value fetch karo aur print karo.",
              ],
              code: `
<!DOCTYPE html>
<html>
<head>
    <title>User Input</title>
</head>
<body>
    <input type="text" id="userInput" placeholder="Enter something">
    <button onclick="printInput()">Submit</button>
    <p id="output"></p>

    <script>
        function printInput() {
            let input = document.getElementById("userInput").value;
            document.getElementById("output").innerText = "You entered: " + input;
        }
    </script>
</body>
</html>
              `,
              explanation: [
                "🔹 input field me user se value lene ke liye document.getElementById('userInput').value ka use kiya.",
                "🔹 innerText ka use karke input value ko display kiya.",
              ],
            },
          ],

          output:
          `                                    
Enter something: Hello World
You entered: Hello World

Enter something: 42
You entered: 42

          `,
        },
        practiceProblems: [
          "🔹 User se multiple values input lo aur print karo.",
          "🔹 Data type check karo jo input diya gaya hai.",
        ],
        interviewQuestions: [
          "🔹 Browser aur Node.js me input handling me kya difference hai?",
          "🔹 JavaScript me user input validation kaise kiya jata hai?",
        ],
        comparisonTable: [
          {
            approach: "prompt()",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple for browsers",
            cons: "Node.js me kaam nahi karta",
          },

          {
            approach: "readline-sync",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Works in Node.js",
            cons: "Extra package install karna padta hai",
          },

          {
            approach: "readline (async)",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Asynchronous input",
            cons: "Thoda complex hai",
          },

          {
            approach: "HTML Form",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "UI-based input handling",
            cons: "Requires webpage setup",
          },
        ],
        conclusion: [
          "🔹 Browser ke liye prompt(), aur Node.js ke liye readline-sync best hai.",
          "🔹 Asynchronous input ke liye readline ka use kar sakte hain.",
          "🔹 UI-based input ke liye HTML forms ka use karna behtar hota hai."
        ],
      },
      // Q-6. Swap Two Variables via 3 Methods
      {
        title: "Swap Two Variables via 3 Methods",
        description: "Do variables ki values ko swap karna ek common programming task hai. Hum alag-alag tarikon ka istemal karke values ko swap karne ke methods dekhenge.",
        problemStatement: "Do variables ki values swap karo bina kisi third variable ke ya third variable ka use karke.",
        algorithm: [
          "🔹 Do variables initialize karo.",
          "🔹 Values ko swap karne ka ek method choose karo.",
          "🔹 Swap hone ke baad nayi values print karo.",
          "🔹 Result return karo."
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using a Third Variable",
              approach: [
                "🔹 Ek temporary variable ka use karke values swap karo.",
              ],
              code: `
function swapWithTemp(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log("After swapping: a =", a, ", b =", b);
}

// Example
swapWithTemp(5, 10);
              `,
              explanation: [
                "🔹 temp me a ki value store ki.",
                "🔹 a me b ki value assign ki.",
                "🔹 b me temp ki value assign ki."
              ],
            },
            {
              method: "Method 2: Without Using a Third Variable (Arithmetic Operations)",
              approach: [
                "🔹 Addition aur subtraction ka use karke values swap karo.",
              ],
              code: `
function swapWithoutTemp(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("After swapping: a =", a, ", b =", b);
}

// Example
swapWithoutTemp(5, 10);
              `,
              explanation: [
                "🔹 a aur b ko add kiya aur a me store kiya.",
                "🔹 b ko nikal kar a se nayi value di.",
                "🔹 a se b ko subtract karke nayi value di."
              ],
            },
            {
              method: "Method 3: Using Destructuring Assignment",
              approach: [
                "🔹 JavaScript ka [a, b] = [b, a] syntax ka use karke values swap karo.",
              ],
              code: `
function swapWithDestructuring(a, b) {
    [a, b] = [b, a];
    console.log("After swapping: a =", a, ", b =", b);
}

// Example
swapWithDestructuring(5, 10);
              `,
              explanation: [
                "🔹 JavaScript destructuring ka use karke values ko swap kiya bina kisi temporary variable ke.",
              ],
            },
            {
              method: "Method 4: Using Bitwise XOR Operator",
              approach: [
                "🔹 XOR bitwise operator ka use karke values swap karo.",
              ],
              code: `
function swapWithXOR(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log("After swapping: a =", a, ", b =", b);
}

// Example
swapWithXOR(5, 10);
              `,
              explanation: [
                "🔹 XOR operation ka istemal karke values swap ki gayi bina extra variable ke.",
              ],
            },
          ],

          output:
          `                                    
Before swapping: a = 5, b = 10
After swapping: a = 10, b = 5

          `,
        },
        practiceProblems: [
          "🔹 Swap three variables ki values bina third variable ke.",
          "🔹 Different data types ke liye swapping implement karo.",
          "🔹 Floating-point numbers ko swap karne ka program likho",
          "🔹 Arrays me do elements swap karne ka function likho.",
          "🔹 String values swap karne ka program implement karo.",
        ],
        interviewQuestions: [
          "🔹 Swap karne ke liye sabse efficient method kaunsa hai?",
          "🔹 JavaScript destructuring kaise kaam karta hai?",
          "🔹 Arithmetic swap method me overflow risk kab hota hai?",
          "🔹 Bitwise XOR method kaise kaam karta hai swapping me?",
          "🔹 C aur Python me swapping kaise hoti hai?",
        ],
        comparisonTable: [
          {
            approach: "Third Variable",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and easy to use",
            cons: "Extra variable required",
          },
          {
            approach: "Arithmetic Ops",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "No extra variable",
            cons: "Risk of overflow",
          },
          {
            approach: "Destructuring",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Clean and modern",
            cons: "Only works in JavaScript",
          },
          {
            approach: "Bitwise XOR",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "No extra variable",
            cons: "Harder to understand",
          },
        ],
        conclusion: [
          "🔹 Agar readability chahiye to third variable method best hai.",
          "🔹 Agar space optimize karna hai to arithmetic ya XOR ka use karein.",
          "🔹 JavaScript specific solution ke liye destructuring best option hai."
        ],
      },
      // Q-7. Operators (+, -, *, %, /, >, <, >=, <=, !=, &&, ||, ++, --)
      {
        title: "Operators in JavaScript (+, -, *, %, /, >, <, >=, <=, !=, &&, ||, ++, --)",
        description: "JavaScript me operators ka use mathematical aur logical operations perform karne ke liye hota hai. Is article me hum inka alag-alag tareeke se istemal dekhenge.",
        problemStatement: "Alag-alag operators ka use karke arithmetic, comparison, aur logical operations perform karo aur unka result print karo.",
        algorithm: [
          "🔹 Do ya zyada values lo jisme operations perform kar sakein.",
          "🔹 Operators ka use karke calculations karo.",
          "🔹 Jo result mile use print karo.",
          "🔹 Sabhi methods ke output check karo."
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Basic Arithmetic Operators",
              approach: [
                "🔹 +, -, *, /, % ka use karke calculations karo.",
              ],
              code: `
function arithmeticOperations(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);
    console.log("Modulus:", a % b);
}

// Example
arithmeticOperations(10, 5);
              `,
              explanation: [
                "🔹 Basic operators ka use karke operations perform kiye.",
                "🔹 Console me result print kiya.",
              ],
            },
            {
              method: "Method 2: Using Comparison Operators",
              approach: [
                "🔹 >, <, >=, <=, != ka use karke values compare karo.",
              ],
              code: `
function comparisonOperations(a, b) {
    console.log("Greater than:", a > b);
    console.log("Less than:", a < b);
    console.log("Greater than or equal to:", a >= b);
    console.log("Less than or equal to:", a <= b);
    console.log("Not equal to:", a != b);
}

// Example
comparisonOperations(10, 5);
              `,
              explanation: [
                "🔹 Comparison operators ka use karke values compare ki.",
                "🔹 Console me true/false print kiya.",
              ],
            },
            {
              method: "Method 3: Using Logical Operators",
              approach: [
                "🔹 &&, || ka use karke logical conditions check karo.",
              ],
              code: `
function logicalOperations(a, b) {
    console.log("Logical AND:", a > 5 && b > 5);
    console.log("Logical OR:", a > 5 || b > 5);
}

// Example
logicalOperations(10, 5);
              `,
              explanation: [
                "🔹 Logical conditions evaluate ki aur result print kiya.",
              ],
            },
            {
              method: "Method 4: Using Increment and Decrement Operators",
              approach: [
                "🔹 ++, -- ka use karke value increment aur decrement karo.",
              ],
              code: `
function incrementDecrement(a) {
    console.log("Initial Value:", a);
    console.log("After Increment:", ++a);
    console.log("After Decrement:", --a);
}

// Example
incrementDecrement(5);
              `,
              explanation: [
                "🔹 Value ko increment aur decrement kiya aur print kiya.",
              ],
            },
          ],

          output:
          `                                    
    Addition: 15
    Subtraction: 5
    Multiplication: 50
    Division: 2
    Modulus: 0
    Greater than: true
    Less than: false
    Greater than or equal to: true
    Less than or equal to: false
    Not equal to: true
    Logical AND: false
    Logical OR: true
    Initial Value: 5
    After Increment: 6
    After Decrement: 5

          `,
        },
        practiceProblems: [
          "🔹 3 numbers ka sum aur average nikalne ka function likho.",
          "🔹 User se input leke odd ya even check karne ka program likho.",
          "🔹 Logical operators ka use karke eligibility checker banao.",
          "🔹 Increment aur decrement ka real-world example implement karo.",
          "🔹 User se 2 numbers input leke comparison ka result print karo.",
          "🔹 && aur || ka use karke age verification system implement karo.",
          "🔹 Modulus operator ka use karke leap year check karne ka program likho.",
          "🔹 Division aur modulus ka use karke currency breakdown ka example likho.",
          "🔹 Post-increment aur pre-increment ka working samjhane ka program likho.",
        ],
        interviewQuestions: [
          "🔹 == aur === me kya difference hai?",
          "🔹 && aur || kaise kaam karte hain?",
          "🔹 JavaScript me operators ka precedence kya hota hai?",
          "🔹 ++a aur a++ ka output kab different hota hai?",
          "🔹 Arithmetic aur assignment operators ka combination kaise hota hai?",
          "🔹 != aur !== me kya difference hai?",
          "🔹 JavaScript me + operator strings aur numbers ke saath kaise behave karta hai?",
          "🔹 Modulus operator real-world me kaha use hota hai?",
          "🔹 Logical operators ka short-circuiting kya hota hai?",
          "🔹  JavaScript me typeof operator kaise kaam karta hai?",
        ],
        comparisonTable: [
          {
            approach: "Arithmetic Operators",
            timeComplexity: "+, -, *,",
            spaceComplexity: "O(1)",
            pros: "Fast calculations",
            cons: "Overflow risk in some cases",
          },
          {
            approach: "Comparison Operators",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Quick boolean checks",
            cons: "Only works with comparable data",
          },
          {
            approach: "Logical Operators",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Used in conditional checks",
            cons: "Can be misused in complex conditions",
          },
          {
            approach: "Increment/Decrement",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Quick value updates",
            cons: "Can lead to unexpected side-effects",
          },
        ],
        conclusion: [
          "🔹 Arithmetic operators calculations ke liye use hote hain.",
          "🔹 Comparison operators values ko compare karne ke liye kaam aate hain.",
          "🔹 Logical operators conditions check karne ke liye use hote hain.",
          "🔹 Increment aur decrement operators variable ki value badhane ya ghatane ke liye use hote hain."
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
        description: "OTP (One-Time Password) ek temporary password hota hai jo ek baar use kiya jata hai authentication ya verification ke liye. Yahaan hum alag-alag tarikon se OTP generate karna seekhenge.",
        problemStatement: "Ek random OTP generate karo jo numeric ya alphanumeric ho sakta hai aur uska length configurable ho.",
        algorithm: [
          "🔹 OTP ke length ka input lo.",
          "🔹 Ek function banao jo random OTP generate kare.",
          "🔹 Alag-alag approaches ka use karke OTP generate karo.",
          "🔹 Jo OTP generate ho usko return aur print karo."
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Math.random() (Numeric OTP)",
              approach: [
                "🔹 Math.random() ka use karke ek random number generate karo.",
                "🔹 Us number ko desired length tak slice karo."
              ],
              code: `
function generateNumericOTP(length) {
    let otp = Math.floor(Math.random() * Math.pow(10, length)).toString();
    return otp.padStart(length, '0');
}

// Example
console.log("Generated OTP:", generateNumericOTP(6));
              `,
              explanation: [
                "🔹 Math.random() se ek random number generate kiya.",
                "🔹 .padStart(length, '0') ka use kiya taaki OTP fixed length ka ho.",
              ],
            },
            {
              method: "Method 2: Using Random Characters (Alphanumeric OTP)",
              approach: [
                "🔹 A-Z, a-z, 0-9 ka use karke ek random alphanumeric OTP generate karo.",
              ],
              code: `
function generateAlphanumericOTP(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let otp = "";
    for (let i = 0; i < length; i++) {
        otp += chars[Math.floor(Math.random() * chars.length)];
    }
    return otp;
}

// Example
console.log("Generated OTP:", generateAlphanumericOTP(6));
              `,
              explanation: [
                "🔹 Ek string chars banaya jisme A-Z, a-z, 0-9 characters hain.",
                "🔹 Loop chala ke har iteration me ek random character pick kiya.",
              ],
            },
            {
              method: "Method 3: Using crypto Module (Secure OTP for Node.js)",
              approach: [
                "🔹 crypto.randomBytes() ka use karke secure OTP generate karo.",
              ],
              code: `
const crypto = require('crypto');

function generateSecureOTP(length) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Example
console.log("Generated Secure OTP:", generateSecureOTP(6));
              `,
              explanation: [
                "🔹 crypto.randomBytes() ka use karke ek secure random string generate ki.",
                "🔹 .slice(0, length) ka use kiya taaki OTP required length ka ho."
              ],
            },
          ],

          output:
          `                                    
    Generated OTP: 549732  (Numeric OTP)
    Generated OTP: A9xL3Z  (Alphanumeric OTP)
    Generated Secure OTP: 7e4f2b  (Secure OTP for Node.js)

          `,
        },
        practiceProblems: [
          "🔹 OTP expiration ka logic implement karo.",
          "🔹 User se OTP verify karne ka function banao.",
          "🔹 OTP ko encrypt aur decrypt karne ka method implement karo.",
          "🔹 OTP retry mechanism implement karo.",
          "🔹 Multi-factor authentication ke liye OTP integrate karo.",
          "🔹 Email/SMS ke through OTP send karne ka logic likho.",
          "🔹 Random length ka OTP generate karne ka function likho.",
          "🔹 OTP ke attempt limit set karne ka logic banao.",
          "🔹 OTP generation aur validation ka logging system implement karo.",
          "🔹 Secure storage ke liye OTP ko hash karne ka implementation karo.",
        ],
        interviewQuestions: [
          "🔹 Math.random() aur crypto.randomBytes() me kya difference hai?",
          "🔹 Secure OTP generation ke liye best practice kya hai?",
          "🔹 OTP ko brute force attack se kaise bachaya ja sakta hai?",
          "🔹 OTP hashing aur encryption me kya difference hai?",
          "🔹 Time-based OTP (TOTP) aur Event-based OTP (HOTP) me kya difference hai?",
          "🔹 OTP validation ke liye server-side best practices kya hain?",
          "🔹 OTP resend limit set karne ka best approach kya hai?",
          "🔹 2-Factor Authentication (2FA) me OTP ka role kya hai?",
          "🔹 SMS aur Email OTP me security concerns kya hain?",
          "🔹 OTP ka expiry time set karne ka best method kya hai?",
        ],
        comparisonTable: [
          {
            approach: "Math.random()",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple & fast",
            cons: "Less secure OTP",
          },
          {
            approach: "Alphanumeric OTP",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Stronger OTP",
            cons: "Slightly slower",
          },
          {
            approach: "crypto.randomBytes()",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n)",
            pros: "Highly secure",
            cons: "Node.js required",
          },
        ],
        conclusion: [
          "🔹 Numeric OTP ke liye Math.random() simple aur fast hai.",
          "🔹 Alphanumeric OTP security badhane ke liye useful hai.",
          "🔹 Highly secure OTP chahiye to crypto.randomBytes() best option hai.",
        ],
      },
      // Q-9. Accept Two Numbers and Print the Greatest
      {
        title: "Accept Two Numbers and Print the Greatest",
        description: "Do numbers accept karo aur unme se greatest number ko print karo.",
        problemStatement: "User se do numbers input lo aur unme se bada number print karo.",
        algorithm: [
          "🔹 User se do numbers input lo.",
          "🔹 Dono numbers ko compare karo.",
          "🔹 Jo number bada ho usko print karo.",
          "🔹 Agar dono number equal hain toh message print karo."
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using prompt() (Browser Input)",
              approach: [
                "🔹 prompt() ka use karke user se do numbers input lo.",
                "🔹 if-else condition ka use karke comparison karo."
              ],
              code: `
function findGreatestNumber() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    
    if (num1 > num2) console.log(\`Greatest number is: \${num1} \`);
    else if (num2 > num1) console.log(\`Greatest number is: \${num2} \`);
    else console.log("Both numbers are equal.");
}

// Example
findGreatestNumber();
              `,
              explanation: [
                "🔹 prompt() ka use karke user se do numbers input liye.",
                "🔹 parseFloat() ka use kiya taaki input decimal numbers bhi accept kare.",
                "🔹 if-else condition ka use karke numbers compare kiye aur result print kiya.",
              ],
            },
            {
              method: "Method 2: Using readline-sync (Node.js)",
              approach: [
                "🔹 readline-sync package ka use karke command-line input lo.",
                "🔹 if-else condition ka use karke comparison karo.",
              ],
              code: `
const readline = require('readline-sync');

function findGreatestNumber() {
    let num1 = parseFloat(readline.question("Enter first number: "));
    let num2 = parseFloat(readline.question("Enter second number: "));
    
    if (num1 > num2) console.log(\`Greatest number is: \${num1}\`);
    else if (num2 > num1) console.log(\`Greatest number is: \${num2}\`);
    else console.log("Both numbers are equal.");
}

// Example
findGreatestNumber();
              `,
              explanation: [
                "🔹 readline-sync ka use kiya command-line input lene ke liye..",
                "🔹 parseFloat() ka use kiya taaki integer aur decimal values handle ho sakein.",
                "🔹 if-else condition ka use karke numbers compare kiye aur result print kiya."
              ],
            },
            
          ],

          output:
          `                                    
    Enter first number: 25
    Enter second number: 30
    Output: Greatest number is: 30

          `,
        },
        practiceProblems: [
          "🔹 User se 3 numbers input lekar sabse bada number print karo.",
          "🔹 Math.max() ka use karke greatest number find karo.",
          "🔹 Negative numbers aur zero handle karne ka logic implement karo.",
          "🔹 Ternary operator (? :) ka use karke program likho.",
          "🔹 User input validate karne ka function likho taaki sirf valid numbers accept ho.",
          "🔹 switch-case ka use karke maximum number find karo.",
          "🔹 Arrays ka use karke multiple numbers me se greatest number find karo.",
        ],
        interviewQuestions: [
          "🔹 JavaScript me == aur === ka kya difference hai?",
          "🔹 parseFloat() aur parseInt() ka difference kya hai?",
          "🔹 JavaScript me Math.max() kaise kaam karta hai?",
          "🔹 Command-line me user input kaise handle karte hain?",
          "🔹 JavaScript me if-else aur switch-case ka performance difference kya hai?",
          "🔹 Falsy values ka concept kya hota hai?",
          "🔹 JavaScript me numbers ka default data type kya hota hai?",
          "🔹 NaN (Not-a-Number) kab return hota hai?",
          "🔹 Floating-point precision issue ko kaise handle karte hain?",
          "🔹 JavaScript me type coercion kaise kaam karta hai?",
        ],
        comparisonTable: [
          {
            approach: "prompt()",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple for browser",
            cons: "Node.js me kaam nahi karta",
          },
          {
            approach: "readline-sync",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "CLI ke liye useful",
            cons: "Extra package install karna padta hai",
          },
          {
            approach: "Math.max()",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n)",
            pros: "Short & efficient",
            cons: "Sirf numerical values ke liye",
          },
        ],
        conclusion: [
          "🔹 prompt() browser me input lene ke liye best hai.",
          "🔹 readline-sync Node.js me input handle karne ke liye useful hai.",
          "🔹 Math.max() function ka use karke short & efficient solution likh sakte hain.",
          "🔹 User input validate karna best practice hai taaki invalid input handle ho sake.",
        ],
      },
      // Q-10. Accept an Integer and Check Even/Odd
      {
        title: "Accept an Integer and Check Even/Odd",
        description: "User se ek integer number input lo aur check karo ki wo Even hai ya Odd.",
        problemStatement: "User se ek integer input lo aur uska Even ya Odd hone ka check karo aur output print karo.",
        algorithm: [
          "🔹 User se ek integer number input lo.",
          "🔹 Number ko 2 se divide karke remainder check karo.",
          "🔹 Agar remainder 0 hai to number Even hai.",
          "🔹 Agar remainder 1 hai to number Odd hai.",
          "🔹 Result print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using if-else",
              approach: [
                "🔹 if-else ka use karke number ko check karo.",
              ],
              code: `
function checkEvenOdd(num) {
    if (num % 2 === 0) console.log(\` \${num} is Even \`);
    else console.log(\` \${num} is Odd \`);
}

// Example
checkEvenOdd(7);
              `,
              explanation: [
                "🔹 % modulus operator ka use karke Even/Odd check kiya.",
                "🔹 if-else condition ka use karke result print kiya.",
              ],
            },
            {
              method: "Method 2: Using switch-case",
              approach: [
                "🔹 switch-case ka use karke remainder check karo.",
                "🔹 if-else condition ka use karke comparison karo.",
              ],
              code: `
function checkEvenOdd(num) {
    switch (num % 2) {
        case 0:
            console.log(\`\${num} is Even\`);
            break;
        case 1:
            console.log(\`\${num} is Odd\`);
            break;
    }
}

// Example
checkEvenOdd(8);
              `,
              explanation: [
                "🔹 switch-case ka use kiya remainder check karne ke liye.",
                "🔹 case 0: me Even aur case 1: me Odd print kiya.",
              ],
            },
            {
              method: "Method 3: Using Ternary Operator",
              approach: [
                "🔹 Short syntax ka use karke ternary operator se Even/Odd check karo.",
              ],
              code: `
function checkEvenOdd(num) {
    console.log(num % 2 === 0 ? \`\${num} is Even\` : \`\${num} is Odd\`);
}

// Example
checkEvenOdd(5);
              `,
              explanation: [
                "🔹 ? : (ternary operator) ka use kiya short syntax ke liye.",
              ],
            },
            {
              method: "Method 4: Using Bitwise Operator",
              approach: [
                "🔹 & bitwise operator ka use karke Even/Odd check karo.",
              ],
              code: `
function checkEvenOdd(num) {
    console.log((num & 1) === 0 ? \`\${num} is Even\` : \`\${num} is Odd\`);
}

// Example
checkEvenOdd(12);
              `,
              explanation: [
                "🔹 num & 1 ka use kiya Even/Odd check karne ke liye.",
                "🔹 Bitwise operations faster hote hain."
              ],
            },
          ],

          output:
          `                                    
    Enter an integer: 7
    Output: 7 is Odd

          `,
        },
        practiceProblems: [
          "🔹 User se multiple numbers input leke unka Even/Odd check karo.",
          "🔹 switch-case ka use karke Even/Odd check karo.",
          "🔹 Negative numbers aur zero handle karne ka logic implement karo.",
          "🔹 Arrays ka use karke Even aur Odd numbers ko separate arrays me store karo.",
          "🔹 map() function ka use karke Even/Odd check karo.",
          "🔹 User input validate karne ka function likho taaki sirf valid integers accept ho.",
        ],
        interviewQuestions: [
          "🔹 JavaScript me parseInt() aur Number() ka difference kya hai?",
          "🔹 % modulus operator ka actual working mechanism kya hai?",
          "🔹 JavaScript me Even/Odd check karne ka aur kaun sa efficient method ho sakta hai?",
          "🔹 Floating-point numbers ka Even/Odd check kaise karenge?",
          "🔹 isNaN() function ka use kab aur kaise karte hain?",
          "🔹 JavaScript me type coercion kaise kaam karta hai?",
          "🔹 JavaScript me typeof operator integer aur float values ke liye kya return karta hai?",
        ],
        comparisonTable: [
          {
            approach: "if-else",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple & readable",
            cons: "Longer syntax",
          },
          {
            approach: "switch-case",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Structured logic",
            cons: "Extra break required",
          },
          {
            approach: "Ternary Operator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n)",
            pros: "Short & concise",
            cons: "Less readable for beginners",
          },
          {
            approach: "Bitwise Operator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n)",
            pros: "Fastest approach",
            cons: "Less intuitive",
          },
        ],
        conclusion: [
          "🔹 if-else simple aur beginner-friendly hai.",
          "🔹 switch-case structured aur readable approach hai.",
          "🔹 Ternary operator concise aur short syntax ke liye best hai.",
          "🔹 Bitwise operator fastest approach hai Even/Odd check karne ke liye.",
        ],
      },
      // Q-11. Accept Name and Age, Check Voter Eligibility
      
      // Q-12. Accept Three Numbers, Find Greatest
      
    ],
  },
  // 3️⃣ Loops & Iterations
  {
    category: "Loops & Iterations",
    questions: [
      // Q-13. Accept an Integer and Print "Hello World" N Times
     
      // Q-14. Print Natural Numbers Up to N
      
      // Q-15. Reverse for Loop (Print N to 1)
      
      // Q-16. Print Multiplication Table
     
      // Q-17. Sum Up to N Terms
     
    ],
  },
  // 4️⃣ Switch Case & Conditional Statements
  {
    category: "Switch Case & Conditional Statements",
    questions: [
      // Q-18. Switch Case & Do-While
     
      // Q-19. Repeat Hello
      
      // Q-20. Guess the Number
     
      // Q-21. Sasta Calculator
      
    ],
  },
  // 5️⃣ Arrays & Basic Data Structures
  {
    category: "Arrays & Basic Data Structures",
    questions: [
      // Q-22. Introduction to Arrays
      
      // Q-23. Fixed & Dynamic Size Array
     
      // Q-24. Accept Value from User and Assign in an Array
      

    ],
  },
];
