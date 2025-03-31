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
      {
        title: "Accept Name and Age, Check Voter Eligibility",
        description: "User se naam aur umar (age) input lo aur check karo ki user voting ke liye eligible hai ya nahi.",
        problemStatement: "User se name aur age input lo aur check karo ki age 18 ya usse zyada hai ya nahi. Agar 18 ya usse zyada hai to 'Eligible to Vote' print karo, warna 'Not Eligible to Vote' print karo.",
        algorithm: [
          "🔹 User se name aur age input lo.",
          "🔹 Check karo ki age 18 ya usse zyada hai ya nahi.",
          "🔹 Agar age 18 ya usse zyada hai to 'Eligible to Vote' print karo.",
          "🔹 Agar age 18 se kam hai to 'Not Eligible to Vote' print karo.",
          "🔹 Result display karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using if-else",
              approach: [
                "🔹 if-else ka use karke age check karo aur result print karo.",
              ],
              code: `
function checkVoterEligibility(name, age) {
    if (age >= 18) console.log(\`\${name}, you are Eligible to Vote.\`);
    else console.log(\`\${name}, you are Not Eligible to Vote.\`);
}

// Example
checkVoterEligibility("Raj", 20);
checkVoterEligibility("Aman", 16);
              `,
              explanation: [
                "🔹 % if-else condition ka use kiya age check karne ke liye.",
                "🔹 Console output ke through eligibility print kiya.",
              ],
            },
            {
              method: "Method 2: Using switch-case",
              approach: [
                "🔹 switch-case ka use karke age check karo.",
              ],
              code: `
function checkVoterEligibility(name, age) {
    switch (age >= 18) {
        case true:
            console.log(\`\${name}, you are Eligible to Vote.\`);
            break;
        case false:
            console.log(\`\${name}, you are Not Eligible to Vote.\`);
            break;
    }
}

// Example
checkVoterEligibility("Raj", 25);
checkVoterEligibility("Aman", 14);
              `,
              explanation: [
                "🔹 switch-case me boolean (true/false) value check ki.",
                "🔹 case true: me Eligible aur case false: me Not Eligible print kiya.",
              ],
            },
            {
              method: "Method 3: Using Ternary Operator",
              approach: [
                "🔹 Short syntax ka use karke ternary operator se eligibility check karo.",
              ],
              code: `
function checkVoterEligibility(name, age) {
    console.log(age >= 18 ? \`\${name}, you are Eligible to Vote.\` : \`\${name}, you are Not Eligible to Vote.\`);
}

// Example
checkVoterEligibility("Raj", 22);
checkVoterEligibility("Aman", 17);
              `,
              explanation: [
                "🔹 ? : (ternary operator) ka use kiya short syntax ke liye.",
              ],
            },
          ],

          output:
            `                                    
    Enter your name: Raj
    Enter your age: 19
    Output: Raj, you are Eligible to Vote.

    Enter your name: Aman
    Enter your age: 16
    Output: Aman, you are Not Eligible to Vote.
          `,
        },
        practiceProblems: [
          "🔹 User se multiple names aur ages input leke eligibility check karo.",
          "🔹 switch-case ka use karke eligibility check karo.",
          "🔹 Negative ages aur invalid inputs handle karne ka logic implement karo.",
          "🔹 map() function ka use karke ek array ke sabhi logon ki eligibility check karo.",
          "🔹 Custom message display karo agar age exactly 18 ho.",
          "🔹 User input validate karne ka function likho taaki sirf valid numbers accept ho.",
        ],
        interviewQuestions: [
          "🔹 JavaScript me parseInt() aur Number() ka difference kya hai?",
          "🔹 switch-case aur if-else me kya difference hai?",
          "🔹 JavaScript me prompt() se input lene ke baad usko integer me kaise convert karte hain?",
          "🔹 JavaScript me ternary operator ka use kab aur kyun karna chahiye?",
          "🔹 JavaScript me type coercion kaise kaam karta hai?",
          "🔹 isNaN() function ka use kab aur kaise karte hain?",
          "🔹 JavaScript me boolean values kaise check karte hain?",
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
        ],
        conclusion: [
          "🔹 if-else simple aur beginner-friendly hai.",
          "🔹 switch-case structured aur readable approach hai.",
          "🔹 Ternary operator concise aur short syntax ke liye best hai.",
        ],
      },
      // Q-12. Accept Three Numbers, Find Greatest
      {
        title: "Accept Three Numbers, Find Greatest",
        description: "User se teen numbers input lo aur check karo ki kaunsa number sabse bada hai.",
        problemStatement: "User se teen numbers input lo aur unme se sabse bada number print karo.",
        algorithm: [
          "🔹 User se three numbers input lo.",
          "🔹 Compare karo aur sabse bada number identify karo.",
          "🔹 Largest number print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using if-else",
              approach: [
                "🔹 if-else conditions ka use karke teen numbers compare karo.",
              ],
              code: `
function findLargest(a, b, c) {
    if (a >= b && a >= c) console.log(\`\${a} is the largest number.\`);
    else if (b >= a && b >= c) console.log(\`\${b} is the largest number.\`);
    else console.log(\`\${c} is the largest number.\`);
}

// Example
findLargest(10, 25, 15);
findLargest(50, 30, 20);
              `,
              explanation: [
                "🔹 if-else se three numbers ko compare kiya.",
                "🔹 Jo number sabse bada hoga, usko print kiya.",
              ],
            },
            {
              method: "Method 2: Using Math.max()",
              approach: [
                "🔹 Math.max() ka use karke directly largest number find karo.",
              ],
              code: `
function findLargest(a, b, c) {
    console.log(\`\${Math.max(a, b, c)} is the largest number.\`);
}

// Example
findLargest(5, 8, 2);
findLargest(45, 90, 20);
              `,
              explanation: [
                "🔹 Math.max() function automatically sabse bada number return karta hai.",
              ],
            },
            {
              method: "Method 3: Using Ternary Operator",
              approach: [
                "🔹 Ternary operator ka use karke short syntax likho.",
              ],
              code: `
function findLargest(a, b, c) {
    let largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    console.log(\`\${largest} is the largest number.\`);
}

// Example
findLargest(12, 7, 19);
findLargest(100, 50, 75);
              `,
              explanation: [
                "🔹 Ternary operator ka use karke condition short aur clean likhi.",
              ],
            },
          ],

          output:
            `                                    
    Enter three numbers: 12, 25, 7
Output: 25 is the largest number.

Enter three numbers: 50, 100, 75
Output: 100 is the largest number.
          `,
        },
        practiceProblems: [
          "🔹 User se four numbers input lo aur largest number print karo.",
          "🔹 Math.min() ka use karke smallest number find karo.",
          "🔹 Negative numbers aur zero handle karo.",
          "🔹 User input validate karo ki sirf numbers hi accept ho.",
          "🔹 Recursion ka use karke largest number find karo.",
        ],
        interviewQuestions: [
          "🔹 JavaScript me Math.max() aur Math.min() kaise kaam karta hai?",
          "🔹 if-else aur ternary operator me kya difference hai?",
          "🔹 JavaScript me numbers compare karne ke liye kaunse methods use hote hain?",
          "🔹 parseInt() aur parseFloat() ka use kab aur kyun karte hain?",
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
            approach: "Math.max()",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Shortest syntax",
            cons: "Works only for numbers array",
          },
          {
            approach: "Ternary Operator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n)",
            pros: "Compact syntax",
            cons: "Harder to read for beginners",
          },
        ],
        conclusion: [
          "🔹 if-else basic aur readable approach hai.",
          "🔹 Math.max() fastest aur short syntax provide karta hai.",
          "🔹 Ternary operator se concise aur compact code likha ja sakta hai.",
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
        description: "User se ek integer (N) input lo aur 'Hello World' N baar print karo.",
        problemStatement: "User se ek integer N input lo aur 'Hello World' N times print karo.",
        algorithm: [
          "🔹 User se ek integer N input lo.",
          "🔹 Loop chalao jo N times execute ho.",
          "🔹 Har iteration me 'Hello World' print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using for Loop",
              approach: [
                "🔹 for loop ka use karke N times print karo.",
              ],
              code: `
function printHelloWorld(n) {
    for (let i = 0; i < n; i++) {
        console.log("Hello World");
    }
}

// Example
printHelloWorld(5);
              `,
              explanation: [
                "🔹 for loop N times execute hoga.",
                "🔹  Har iteration me 'Hello World' print hoga.",
              ],
            },
            {
              method: "Method 2: Using while Loop",
              approach: [
                "🔹 while loop ka use karke N times print karo.",
              ],
              code: `
function printHelloWorld(n) {
    let i = 0;
    while (i < n) {
        console.log("Hello World");
        i++;
    }
}

// Example
printHelloWorld(3);
              `,
              explanation: [
                "🔹 while loop tab tak chalega jab tak i < n ho.",
                "🔹 i++ se iteration increase hoti rahegi."
              ],
            },
            {
              method: "Method 3: Using do-while Loop",
              approach: [
                "🔹 do-while loop ka use karke N times print karo.",
              ],
              code: `
function printHelloWorld(n) {
    let i = 0;
    do {
        console.log("Hello World");
        i++;
    } while (i < n);
}

// Example
printHelloWorld(4);
              `,
              explanation: [
                "🔹 do-while loop pehle ek baar execute hota hai.",
                "🔹 while condition ke basis pe loop continue hota hai.",
              ],
            },
          ],

          output:
            `                                    
    Enter a number: 3
    Output:
    Hello World
    Hello World
    Hello World
          `,
        },
        practiceProblems: [
          "🔹 User se N aur ek custom message input lo aur usko print karo.",
          "🔹 Negative number ke case me error handle karo.",
          "🔹 Recursion ka use karke 'Hello World' N times print karo.",
          "🔹 setTimeout ka use karke har 1 second me 'Hello World' print karo.",
        ],
        interviewQuestions: [
          "🔹 JavaScript me for, while, aur do-while loops me kya difference hai?",
          "🔹 Recursion aur loop ka performance difference kya hai?",
          "🔹 JavaScript me asynchronous loops kaise handle kiye jate hain?",
          "🔹 setInterval aur setTimeout ka loop se kya difference hai?",
        ],
        comparisonTable: [
          {
            approach: "for Loop",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple & fast",
            cons: "Static condition",
          },
          {
            approach: "while Loop",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Dynamic",
            cons: "Infinite loop risk",
          },
          {
            approach: "do-while Loop",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n)",
            pros: "Executes at least once",
            cons: "Less commonly used",
          },
        ],
        conclusion: [
          "🔹 for loop most common aur efficient method hai.",
          "🔹 while loop dynamic conditions ke liye useful hai.",
          "🔹 do-while loop kam se kam ek baar execute hota hai.",
        ],
      },
      // Q-14. Print Natural Numbers Up to N
      {
        title: "Accept an Integer and Print 'Hello World' N Times",
        description: "User se ek integer (N) input lo aur 'Hello World' N baar print karo.",
        problemStatement: "User se ek integer N input lo aur 'Hello World' N times print karo.",
        algorithm: [
          "🔹 User se ek integer N input lo.",
          "🔹 Loop chalao jo N times execute ho.",
          "🔹 Har iteration me 'Hello World' print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using for Loop",
              approach: [
                "🔹 for loop ka use karke N times print karo.",
              ],
              code: `
function printHelloWorld(n) {
    for (let i = 0; i < n; i++) {
        console.log("Hello World");
    }
}

// Example
printHelloWorld(5);
              `,
              explanation: [
                "🔹 for loop N times execute hoga.",
                "🔹  Har iteration me 'Hello World' print hoga.",
              ],
            },
            {
              method: "Method 2: Using while Loop",
              approach: [
                "🔹 while loop ka use karke N times print karo.",
              ],
              code: `
function printHelloWorld(n) {
    let i = 0;
    while (i < n) {
        console.log("Hello World");
        i++;
    }
}

// Example
printHelloWorld(3);
              `,
              explanation: [
                "🔹 while loop tab tak chalega jab tak i < n ho.",
                "🔹 i++ se iteration increase hoti rahegi."
              ],
            },
            {
              method: "Method 3: Using do-while Loop",
              approach: [
                "🔹 do-while loop ka use karke N times print karo.",
              ],
              code: `
function printHelloWorld(n) {
    let i = 0;
    do {
        console.log("Hello World");
        i++;
    } while (i < n);
}

// Example
printHelloWorld(4);
              `,
              explanation: [
                "🔹 do-while loop pehle ek baar execute hota hai.",
                "🔹 while condition ke basis pe loop continue hota hai.",
              ],
            },
          ],

          output:
            `                                    
    Enter a number: 3
    Output:
    Hello World
    Hello World
    Hello World
          `,
        },
        practiceProblems: [
          "🔹 User se N aur ek custom message input lo aur usko print karo.",
          "🔹 Negative number ke case me error handle karo.",
          "🔹 Recursion ka use karke 'Hello World' N times print karo.",
          "🔹 setTimeout ka use karke har 1 second me 'Hello World' print karo.",
        ],
        interviewQuestions: [
          "🔹 JavaScript me for, while, aur do-while loops me kya difference hai?",
          "🔹 Recursion aur loop ka performance difference kya hai?",
          "🔹 JavaScript me asynchronous loops kaise handle kiye jate hain?",
          "🔹 setInterval aur setTimeout ka loop se kya difference hai?",
        ],
        comparisonTable: [
          {
            approach: "for Loop",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple & fast",
            cons: "Static condition",
          },
          {
            approach: "while Loop",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Dynamic",
            cons: "Infinite loop risk",
          },
          {
            approach: "do-while Loop",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n)",
            pros: "Executes at least once",
            cons: "Less commonly used",
          },
        ],
        conclusion: [
          "🔹 for loop most common aur efficient method hai.",
          "🔹 while loop dynamic conditions ke liye useful hai.",
          "🔹 do-while loop kam se kam ek baar execute hota hai.",
        ],
      },
      // Q-15. Reverse for Loop (Print N to 1)
      {
        title: "Reverse to (Print N to 1)",
        description: "User se ek integer (N) input lo aur N se 1 tak numbers reverse order me print karo.",
        problemStatement: "User se ek integer N input lo aur N se 1 tak numbers print karo.",
        algorithm: [
          "🔹 User se ek integer N input lo.",
          "🔹 Loop chalao jo N se 1 tak execute ho.",
          "🔹 Har iteration me number print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using for Loop",
              approach: [
                "🔹 for loop ka use karke N se 1 tak print karo.",
              ],
              code: `
function printReverse(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

// Example
printReverse(5);
              `,
              explanation: [
                "🔹 for loop N se 1 tak execute hoga.",
                "🔹 Har iteration me i ka value print hoga.",
              ],
            },
            {
              method: "Method 2: Using while Loop",
              approach: [
                "🔹 while loop ka use karke N se 1 tak print karo.",
              ],
              code: `
function printReverse(n) {
    let i = n;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}

// Example
printReverse(3);
              `,
              explanation: [
                "🔹 while loop tab tak chalega jab tak i >= 1 ho.",
                "🔹 i-- se iteration decrease hoti rahegi."
              ],
            },
            {
              method: "Method 3: Using do-while Loop",
              approach: [
                "🔹 do-while loop ka use karke N se 1 tak print karo.",
              ],
              code: `
function printReverse(n) {
    let i = n;
    do {
        console.log(i);
        i--;
    } while (i >= 1);
}

// Example
printReverse(4);
              `,
              explanation: [
                "🔹 do-while loop pehle ek baar execute hota hai.",
                "🔹 while condition ke basis pe loop continue hota hai.",
              ],
            },
            {
              method: "Method 4: Using Recursion",
              approach: [
                "🔹 Recursion ka use karke N se 1 tak print karo.",
              ],
              code: `
function printReverse(n) {
    if (n < 1) return;
    console.log(n);
    printReverse(n - 1);
}

// Example
printReverse(5);
              `,
              explanation: [
                "🔹 Function printReverse(n) ko recursively call kiya.",
                "🔹 Jab n < 1 ho jata hai tab recursion stop ho jata hai.",
              ],
            },
          ],

          output:
            `                                    
    Enter a number: 3
    Output:
    3
    2
    1
          `,
        },
        practiceProblems: [
          "🔹 User se N aur M input lo aur N se M tak reverse order me print karo.",
          "🔹 Negative number ke case me error handle karo.",
          "🔹 Recursion ka use karke numbers reverse order me print karo.",
          "🔹 setTimeout ka use karke har 1 second me reverse order me print karo.",
          "🔹 Array me store karke numbers ko reverse order me print karo.",
          "🔹 JavaScript ke map() aur reverse() functions ka use karke print karo.",

        ],
        interviewQuestions: [
          "🔹 JavaScript me for, while, aur do-while loops me kya difference hai?",
          "🔹 Recursion aur loop ka performance difference kya hai?",
          "🔹 JavaScript me asynchronous loops kaise handle kiye jate hain?",
          "🔹 setInterval aur setTimeout ka loop se kya difference hai?",
          "🔹 Tail recursion optimization ka concept kya hai aur JavaScript me kaise implement hota hai?",
          "🔹 Reverse order printing me iterative aur recursive methods ke performance differences kya hote hain?",
        ],
        comparisonTable: [
          {
            approach: "for Loop",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            pros: "Simple & fast",
            cons: "Static condition",
          },
          {
            approach: "while Loop",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Dynamic",
            cons: "Infinite loop risk",
          },
          {
            approach: "do-while Loop",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1))",
            pros: "Executes at least once",
            cons: "Less commonly used",
          },
          {
            approach: "Recursion",
            timeComplexity: "O(N)",
            spaceComplexity: "O(n)",
            pros: "Elegant & readable",
            cons: "Stack overflow risk",
          },
        ],
        conclusion: [
          "🔹 for loop most common aur efficient method hai.",
          "🔹 while loop dynamic conditions ke liye useful hai.",
          "🔹 do-while loop kam se kam ek baar execute hota hai.",
          "🔹 Recursion chhoti problems ke liye acha hai, par stack overflow ka risk hota hai."
        ],
      },
      // Q-16. Print Multiplication Table
      {
        title: "Print Multiplication Table",
        description: "User se ek integer (N) input lo aur N ka multiplication table print karo.",
        problemStatement: "User se ek integer N input lo aur 1 se 10 tak uska multiplication table print karo.",
        algorithm: [
          "🔹 User se ek integer N input lo.",
          "🔹 Loop chalao jo 1 se 10 tak execute ho.",
          "🔹 Har iteration me N * i ka result print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using for Loop",
              approach: [
                "🔹 for loop ka use karke 1 se 10 tak multiplication table print karo.",
              ],
              code: `
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(\`\${n} x \${i} = \${n * i}\`);
    }
}

// Example
printTable(5);
              `,
              explanation: [
                "🔹 for loop 1 se 10 tak execute hoga.",
                "🔹 Har iteration me N * i ka result print hoga.",
              ],
            },
            {
              method: "Method 2: Using while Loop",
              approach: [
                "🔹 while loop ka use karke multiplication table print karo.",
              ],
              code: `
function printTable(n) {
    let i = 1;
    while (i <= 10) {
        console.log(\`\${n} x \${i} = \${n * i}\`);
        i++;
    }
}

// Example
printTable(3);
              `,
              explanation: [
                "🔹 while loop tab tak chalega jab tak i <= 10 ho.",
                "🔹 i++ se iteration increase hoti rahegi."
              ],
            },
            {
              method: "Method 3: Using do-while Loop",
              approach: [
                "🔹 do-while loop ka use karke multiplication table print karo.",
              ],
              code: `
function printTable(n) {
    let i = 1;
    do {
        console.log(\`\${n} x \${i} = \${n * i}\`);
        i++;
    } while (i <= 10);
}

// Example
printTable(4);
              `,
              explanation: [
                "🔹 do-while loop pehle ek baar execute hota hai.",
                "🔹 while condition ke basis pe loop continue hota hai.",
              ],
            },
            {
              method: "Method 4: Using Recursion",
              approach: [
                "🔹 Recursion ka use karke multiplication table print karo.",
              ],
              code: `
function printReverse(n) {
    if (n < 1) return;
    console.log(n);
    printReverse(n - 1);
}

// Example
printReverse(5);
              `,
              explanation: [
                "🔹 Function printTable(n, i) ko recursively call kiya.",
                "🔹 Jab i > 10 ho jata hai tab recursion stop ho jata hai.",
              ],
            },
          ],

          output:
            `                                    
    Enter a number: 5
    Output:
    5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    ...
    5 x 10 = 50
          `,
        },
        practiceProblems: [
          "🔹 User se N aur M input lo aur N ka table 1 se M tak print karo.",
          "🔹 Negative number ke case me error handle karo.",
          "🔹 Recursion ka use karke numbers reverse order me print karo.",
          "🔹 JavaScript ke map() function ka use karke table print karo.",
          "🔹 Table ko array me store karke print karo.",
          "🔹 Reverse order me table print karo.",
          "🔹 User-defined range ka table print karo.",
          "🔹 Table ko HTML page me dynamically show karo.",
        ],
        interviewQuestions: [
          "🔹 JavaScript me for, while, aur do-while loops me kya difference hai?",
          "🔹 Recursion aur loop ka performance difference kya hai?",
          "🔹 JavaScript me table generate karne ka best approach kya hai?",
          "🔹 JavaScript me recursion optimization kaise hota hai?",
          "🔹 JavaScript me higher-order functions kya hote hain?",
          "🔹 map(), forEach() aur reduce() me kya difference hai?",
          "🔹 JavaScript ke event loop kaise kaam karta hai?"
        ],
        comparisonTable: [
          {
            approach: "for Loop",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple & fast",
            cons: "Static condition",
          },
          {
            approach: "while Loop",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Dynamic",
            cons: "Infinite loop risk",
          },
          {
            approach: "do-while Loop",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1))",
            pros: "Executes at least once",
            cons: "Less commonly used",
          },
          {
            approach: "Recursion",
            timeComplexity: "O(N)",
            spaceComplexity: "O(n)",
            pros: "Elegant & readable",
            cons: "Stack overflow risk",
          },
          {
            approach: "map()",
            timeComplexity: "O(N)",
            spaceComplexity: "O(n)",
            pros: "Functional approach",
            cons: "Extra array needed",
          },
        ],
        conclusion: [
          "🔹 for loop most common aur efficient method hai.",
          "🔹 while loop dynamic conditions ke liye useful hai.",
          "🔹 do-while loop kam se kam ek baar execute hota hai.",
          "🔹 Recursion chhoti problems ke liye acha hai, par stack overflow ka risk hota hai.",
          "🔹 map() functional approach provide karta hai."
        ],
      },
      // Q-17. Sum Up to N Terms
      {
        title: "Sum Up to N Terms",
        description: "User se ek integer (N) input lo aur 1 se N tak sum calculate karke print karo.",
        problemStatement: "User se ek integer N input lo aur 1 se N tak numbers ka sum calculate karke print karo.",
        algorithm: [
          "🔹 User se ek integer N input lo.",
          "🔹 Variable sum initialize karo 0 se.",
          "🔹 Loop chalao jo 1 se N tak execute ho.",
          "🔹 Har iteration me current number ko sum me add karo.",
          "🔹 Loop complete hone ke baad final sum print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using for Loop",
              approach: [
                "🔹 for loop ka use karke 1 se N tak sum calculate karo.",
              ],
              code: `
function sumUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("Sum:", sum);
}

// Example
sumUpToN(5);
              `,
              explanation: [
                "🔹 for loop 1 se N tak execute hota hai.",
                "🔹 Har iteration me sum variable me current number add hota hai.",
              ],
            },
            {
              method: "Method 2: Using while Loop",
              approach: [
                "🔹 while loop ka use karke sum calculate karo.",
              ],
              code: `
function sumUpToN(n) {
    let sum = 0, i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    console.log("Sum:", sum);
}

// Example
sumUpToN(7);
              `,
              explanation: [
                "🔹 while loop tab tak chalega jab tak i <= N ho.",
                "🔹 Har iteration me sum update hota rahega."
              ],
            },
            {
              method: "Method 3: Using do-while Loop",
              approach: [
                "🔹 do-while loop ka use karke multiplication table print karo.",
              ],
              code: `
function printTable(n) {
    let i = 1;
    do {
        console.log(\`\${n} x \${i} = \${n * i}\`);
        i++;
    } while (i <= 10);
}

// Example
printTable(4);
              `,
              explanation: [
                "🔹 do-while loop pehle ek baar execute hota hai.",
                "🔹 while condition ke basis pe loop continue hota hai.",
              ],
            },
            {
              method: "Method 3: Using Recursion",
              approach: [
                "🔹 Recursion ka use karke sum calculate karo.",
              ],
              code: `
function sumUpToN(n) {
    if (n === 0) return 0;
    return n + sumUpToN(n - 1);
}

// Example
console.log("Sum:", sumUpToN(6));
              `,
              explanation: [
                "🔹 Function apne aap ko recursive call karta hai jab tak n === 0 ho jaye.",
                "🔹 Har call me current number add hota hai aur function n-1 par call hota hai.",
              ],
            },
            {
              method: "Method 4: Using Formula",
              approach: [
                "🔹 Direct formula N * (N + 1) / 2 ka use karke sum calculate karo.",
              ],
              code: `
function sumUpToN(n) {
    let sum = (n * (n + 1)) / 2;
    console.log("Sum:", sum);
}

// Example
sumUpToN(10);
              `,
              explanation: [
                "🔹 N * (N + 1) / 2 formula se direct sum calculate hota hai bina kisi loop ke.",
                "🔹 Ye fastest approach hai.",
              ],
            },
          ],

          output:
            `                                    
    Enter a number: 5
    Output:
    Sum: 15
          `,
        },
        practiceProblems: [
          "🔹 User se N aur M input lo aur N se M tak sum calculate karo.",
          "🔹 Negative number ke case me error handle karo..",
          "🔹 Recursion ka use karke sum calculate karo.",
          "🔹 Even aur odd numbers ka sum alag se print karo.",
          "🔹 reduce() function ka use karke sum calculate karo.",
          "🔹 First N even aur odd numbers ka sum alag se print karo.",
          "🔹 Array me diya gaya sum of elements find karo.",
          "🔹 Sum ko HTML page me dynamically show karo.",
        ],
        interviewQuestions: [
          "🔹 for, while, aur do-while loops me kya difference hai?",
          "🔹 JavaScript me table generate karne ka best approach kya hai?",
          "🔹 JJavaScript me sum calculate karne ka best approach kya hai?",
          "🔹 reduce() function ka loop se kya difference hai?",
          "🔹 map(), reduce(), aur filter() me kya difference hai?",
          "🔹 Time complexity optimization techniques kaun si hain?"
        ],
        comparisonTable: [
          {
            approach: "for Loop",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            pros: "Simple & easy to understand",
            cons: "Slower for large N",
          },
          {
            approach: "while Loop",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            pros: "Dynamic conditions ke liye useful",
            cons: "Infinite loop risk",
          },
          {
            approach: "Recursion",
            timeComplexity: "O(N)",
            spaceComplexity: "O(n)",
            pros: "Elegant & readable",
            cons: "Stack overflow risk",
          },
          {
            approach: "Formula Method",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Fastest approach",
            cons: "Only for arithmetic progression",
          },
        ],
        conclusion: [
          "🔹 Formula method (O(1)) fastest hai, lekin sirf sequential numbers ke liye applicable hai.",
          "🔹 for aur while loops simple aur easy to understand hain.",
          "🔹 Recursion chhoti problems ke liye useful hai, par stack overflow ka risk hota hai.",
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
        description: "User se ek integer (N) input lo aur switch case ya do-while loop ka use karke output generate karo.",
        problemStatement: "User se ek integer N input lo aur switch case ya do-while loop ka use karke specific operations perform karo.",
        algorithm: [
          "🔹 User se ek integer N input lo.",
          "🔹 switch case ka use karke specific conditions handle karo.",
          "🔹 Ya do-while loop ka use karke loop execution ensure karo.",
          "🔹 Result print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Using switch case",
              approach: [
                "🔹 switch case ka use karke alag-alag cases handle karo.",
              ],
              code: `
function checkNumber(n) {
    switch (true) {
        case (n > 0):
            console.log("Positive Number");
            break;
        case (n < 0):
            console.log("Negative Number");
            break;
        default:
            console.log("Zero");
    }
}

// Example
checkNumber(5);
              `,
              explanation: [
                "🔹 switch me true condition pass hoti hai.",
                "🔹 Har case condition check karta hai.",
                "🔹 default case zero ke liye execute hota hai."
              ],
            },
            {
              method: "Using do-while Loop",
              approach: [
                "🔹 do-while loop ka use karke minimum ek baar execution ensure karo.",
              ],
              code: `
function printNumbers(n) {
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= n);
}

// Example
printNumbers(5);
              `,
              explanation: [
                "🔹 do block pehle execute hota hai.",
                "🔹 while condition tab tak check hoti hai jab tak false na ho."
              ],
            },

          ],

          output:
            `                                    
    Enter a number: 5
    Output:
    1
    2
    3
    4
    5
          `,
        },
        practiceProblems: [
          "🔹 User se N aur M input lo aur N se M tak sum calculate karo.",
          "🔹 switch case ka use karke calculator banaiye.",
          "🔹 do-while loop ka use karke N se 1 tak reverse print kariye.",
          "🔹 switch case ka use karke weekdays print kariye.",
          "🔹 do-while loop ka use karke sum of first N numbers print kariye.",
          "🔹 switch case ka use karke grade evaluation system banaiye.",
          "🔹 do-while loop ka use karke table generate kariye.",
          "🔹 switch case ka use karke month ka number input lekar month ka naam print kariye.",
        ],
        interviewQuestions: [
          "🔹 switch case aur if-else me kya difference hai?",
          "🔹 do-while aur while loop ka difference kya hai?",
          "🔹 switch case me string values kaise handle hoti hain?",
          "🔹 do-while loop me infinite loop kaise avoid karein?",
          "🔹 switch case ka performance if-else se better kyu hota hai?",
          "🔹 do-while loop ka real-world example kya ho sakta hai?",
          "🔹 switch case me multiple cases kaise handle karein?"
        ],
        comparisonTable: [
          {
            approach: "switch case",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Fast & readable",
            cons: "Limited to discrete values",
          },
          {
            approach: "do-while Loop",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            pros: "Ensures at least one execution",
            cons: "Risk of infinite loop",
          },

        ],
        conclusion: [
          "🔹 switch case fast aur readable hota hai, lekin discrete values ke liye best hai.",
          "🔹 do-while loop ek baar execution ensure karta hai, jo input validation me useful hota hai.",
        ],
      },
      // Q-19. Repeat Hello
      {
        title: "Repeat Hello",
        description: "User se ek integer (N) input lo aur 'Hello' message N times print karo using different approaches.",
        problemStatement: "User se ek integer N input lo aur Hello message N times print karo using loops or recursion.",
        algorithm: [
          "🔹 User se integer N input lo.",
          "🔹 for loop, while loop, do-while loop, aur recursion ka use karke Hello print karo.",
          "🔹 Loop chalao jo 1 se N tak execute ho.",
          "🔹 Result print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using for Loop",
              approach: [
                "🔹 for loop ka use karke N times 'Hello' print karo.",
              ],
              code: `
function repeatHello(N) {
    for (let i = 0; i < N; i++) {
        console.log("Hello");
    }
}

// Example
repeatHello(5);
              `,
              explanation: [
                "🔹 for loop 0 se N tak iterate karta hai.",
                "🔹 Har iteration me 'Hello' print hota hai.",
              ],
            },
            {
              method: "Method 2: Using while Loop",
              approach: [
                "🔹 while loop ka use karke N times 'Hello' print karo.",
              ],
              code: `
function repeatHello(N) {
    let i = 0;
    while (i < N) {
        console.log("Hello");
        i++;
    }
}

// Example
repeatHello(5);
              `,
              explanation: [
                "🔹 while loop tab tak chalega jab tak i < N hai.",
                "🔹 Har baar i++ hoga aur 'Hello' print hoga."
              ],
            },
            {
              method: "Method 3: Using do-while Loop",
              approach: [
                "🔹 do-while loop ka use karke N times 'Hello' print karo.",
              ],
              code: `
function repeatHello(N) {
    let i = 0;
    do {
        console.log("Hello");
        i++;
    } while (i < N);
}

// Example
repeatHello(5);
              `,
              explanation: [
                "🔹 do-while loop pehle ek baar execute hoga.",
                "🔹 Uske baad while condition check hogi.",
              ],
            },
            {
              method: "Method 3: Using Recursion",
              approach: [
                "🔹 Function ko recursively call karke 'Hello' print karo.",
              ],
              code: `
function repeatHello(N) {
    if (N <= 0) return;
    console.log("Hello");
    repeatHello(N - 1);
}

// Example
repeatHello(5);
              `,
              explanation: [
                "🔹 Jab tak N > 0 hoga, function khud ko call karega.",
                "🔹 N-1 decrement hoke base case tak pahunchta hai.",
              ],
            },

          ],

          output:
            `                                    
    Enter a number: 3
    Output:
    Hello
    Hello
    Hello
          `,
        },
        practiceProblems: [
          "🔹 User se ek word input lo aur use N times print karo.",
          "🔹 User se ek sentence input lo aur use N times print karo.",
          "🔹 Recursion ka use karke ek function likho jo 'Hello' N times print kare.",
          "🔹 Loop ka use karke alternate message print karo ('Hello', 'World').",
          "🔹 Reverse order me 'Hello' print karo (N se 1 tak countdown ke sath).",
        ],
        interviewQuestions: [
          "🔹 for, while, aur do-while loops me kya difference hai?",
          "🔹 Loop optimization kaise kiya jata hai?",
          "🔹 Recursion vs loop: Performance aur memory usage ka comparison karo.",
          "🔹 Infinite loop kaise avoid karein?",
          "🔹 Recursion me base case ka role kya hai?",
        ],
        comparisonTable: [
          {
            approach: "for Loop",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            pros: "Simple & easy to understand",
            cons: "Fixed iterations",
          },
          {
            approach: "while Loop",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            pros: "Condition-based loop",
            cons: "Extra condition check",
          },
          {
            approach: "do-while Loop",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            pros: "Ensures at least 1 execution",
            cons: "Infinite loop risk",
          },
          {
            approach: "Recursion",
            timeComplexity: "O(N)",
            spaceComplexity: "O(n)",
            pros: "Elegant & readable",
            cons: "Stack overflow risk",
          },

        ],
        conclusion: [
          "🔹 Loop methods (for, while, do-while) zyada efficient hai large N ke liye.",
          "🔹 Recursion readable hota hai but stack overflow ka risk hota hai.",
          "🔹 for loop simple aur easy to use hota hai, so beginner-friendly option hai.",
        ],
      },
      // Q-20. Guess the Number
      {
        title: "Guess the Number",
        description: "Computer ek random number generate karega aur user ko us number ko guess karna hai.",
        problemStatement: "1 se 100 ke beech me ek random number generate karo aur user se number guess karvao. Har attempt pe user ko hint do ki number chota hai ya bada hai.",
        algorithm: [
          "🔹 1-100 ke beech me ek random number generate karo.",
          "🔹 User se number input lo.",
          "🔹 User ke guess ko random number se compare karo.",
          "🔹 Hint do: number bada hai, chota hai ya equal hai.",
          "🔹 Jab tak correct guess na ho, process continue karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using while Loop",
              approach: [
                "🔹 while loop ka use karke user se continuous input lo jab tak correct guess na ho.",
              ],
              code: `
    function guessNumber() {
        const target = Math.floor(Math.random() * 100) + 1;
        let guess;
        let attempts = 0;
        
        while (guess !== target) {
        guess = Number(prompt("Enter your guess (1-100):"));
        attempts++;
        
        if (guess === target) {
        console.log(\`Correct! You took \${attempts} attempts.\`);
        } else if (guess < target) {
        console.log("Too low! Try a higher number.");
        } else {
        console.log("Too high! Try a lower number.");
        }
        }
    }

    // Start the game
    guessNumber();
          `,
              explanation: [
                "🔹 Math.random() se 1-100 ke beech random number generate kiya.",
                "🔹 while loop me continuous guesses lete hain.",
                "🔹 Har guess ko compare karke appropriate hint dete hain.",
              ],
            },
            {
              method: "Method 2: Using do-while Loop",
              approach: [
                "🔹 do-while loop ka use karke kam se kam ek attempt ensure karo.",
              ],
              code: `
    function guessNumber() {
        const target = Math.floor(Math.random() * 100) + 1;
        let guess;
        let attempts = 0;
        
        do {
        guess = Number(prompt("Enter your guess (1-100):"));
        attempts++;
        
        if (guess === target) {
        console.log(\`Correct! You took \${attempts} attempts.\`);
        } else {
        console.log(guess < target ? "Too low!" : "Too high!");
        }
        } while (guess !== target);
    }

    // Start the game
    guessNumber();
          `,
              explanation: [
                "🔹 do-while ensures ki kam se kam ek attempt hoga.",
                "🔹 Ternary operator se simple hints generate kiye.",
              ],
            },
            {
              method: "Method 3: With Limited Attempts",
              approach: [
                "🔹 Maximum attempts limit set karke game ko challenging banao.",
              ],
              code: `
    function guessNumberWithLimit(maxAttempts = 5) {
        const target = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        
        while (attempts < maxAttempts) {
        let guess = Number(prompt(\`Enter your guess (1-100). Attempts left: \${maxAttempts - attempts}\`));
        attempts++;
        
        if (guess === target) {
        return console.log(\`Congratulations! You won in \${attempts} attempts.\`);
        }
        
        console.log(guess < target ? "Too low!" : "Too high!");
        }
        
        console.log(\`Game Over! The number was \${target}\`);
    }

    // Start game with 5 attempts
    guessNumberWithLimit(5);
          `,
              explanation: [
                "🔹 Maximum attempts limit set ki gayi.",
                "🔹 Har attempt pe remaining attempts display hote hain.",
                "🔹 Game over message show hota hai agar attempts khatam ho jaye.",
              ],
            },
          ],

          output: `                                    
    Enter your guess (1-100): 50
    Too low!
    Enter your guess (1-100): 75
    Too high!
    Enter your guess (1-100): 62
    Correct! You took 3 attempts.
          `,
        },
        practiceProblems: [
          "🔹 Custom range ke sath game implement karo (e.g., 1-1000).",
          "🔹 Score system add karo jo attempts ke basis pe points de.",
          "🔹 Difficulty levels add karo (Easy: 1-50, Medium: 1-100, Hard: 1-500).",
          "🔹 Multiple rounds ka feature add karo.",
          "🔹 High score system implement karo.",
          "🔹 Timer add karo har attempt ke liye.",
          "🔹 Hints system implement karo jo limited hints provide kare.",
        ],
        interviewQuestions: [
          "🔹 Math.random() kaise kaam karta hai?",
          "🔹 User input validation kyu important hai?",
          "🔹 Game logic me error handling kaise implement karenge?",
          "🔹 Performance optimization ke liye kya techniques use kar sakte hain?",
          "🔹 Different loops ke use cases kya hain?",
        ],
        comparisonTable: [
          {
            approach: "while Loop",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            pros: "Simple implementation",
            cons: "No attempt limit",
          },
          {
            approach: "do-while Loop",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            pros: "Guarantees first attempt",
            cons: "Similar to while loop",
          },
          {
            approach: "Limited Attempts",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "More challenging",
            cons: "May end before success",
          },
        ],
        conclusion: [
          "🔹 Simple number guessing game user interaction ka acha example hai.",
          "🔹 Different approaches se game ko more engaging banaya ja sakta hai.",
          "🔹 Error handling aur input validation important aspects hain.",
        ],
      },
      // Q-21. Sasta Calculator
      {
        title: "Sasta Calculator",
        description: "Basic calculator jo simple mathematical operations perform kar sake.",
        problemStatement: "User se do numbers aur operation (+, -, *, /) input lo aur result calculate karo.",
        algorithm: [
          "🔹 User se first number input lo.",
          "🔹 User se operation type input lo (+, -, *, /).",
          "🔹 User se second number input lo.",
          "🔹 Selected operation ke hisab se calculation karo.",
          "🔹 Result print karo.",
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using switch case",
              approach: [
                "🔹 switch case ka use karke different operations handle karo.",
              ],
              code: `
    function calculator() {
        const num1 = Number(prompt("Enter first number:"));
        const operator = prompt("Enter operator (+, -, *, /):");
        const num2 = Number(prompt("Enter second number:"));
        
        let result;
        
        switch(operator) {
        case '+':
        result = num1 + num2;
        break;
        case '-':
        result = num1 - num2;
        break;
        case '*':
        result = num1 * num2;
        break;
        case '/':
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
        default:
        return "Invalid operator";
        }
        
        console.log(\`\${num1} \${operator} \${num2} = \${result}\`);
        return result;
    }

    // Start calculator
    calculator();
          `,
              explanation: [
                "🔹 User se numbers aur operator input lete hain.",
                "🔹 switch case se different operations handle karte hain.",
                "🔹 Division by zero check karte hain.",
                "🔹 Result calculate karke print karte hain.",
              ],
            },
            {
              method: "Method 2: Using if-else",
              approach: [
                "🔹 if-else conditions ka use karke operations handle karo.",
              ],
              code: `
    function calculator() {
        const num1 = Number(prompt("Enter first number:"));
        const operator = prompt("Enter operator (+, -, *, /):");
        const num2 = Number(prompt("Enter second number:"));
        
        let result;
        
        if (operator === '+') {
        result = num1 + num2;
        } else if (operator === '-') {
        result = num1 - num2;
        } else if (operator === '*') {
        result = num1 * num2;
        } else if (operator === '/') {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        } else {
        return "Invalid operator";
        }
        
        console.log(\`\${num1} \${operator} \${num2} = \${result}\`);
        return result;
    }

    // Start calculator
    calculator();
          `,
              explanation: [
                "🔹 if-else conditions se operations check karte hain.",
                "🔹 Har operation ke liye alag condition hoti hai.",
              ],
            },
          ],
          output: `                                    
        Enter first number: 10
        Enter operator: +
        Enter second number: 5
        10 + 5 = 15

        Enter first number: 20
        Enter operator: /
        Enter second number: 0
        Cannot divide by zero
          `,

          practiceProblems: [
            "🔹 More operations add karo (%, **, etc.).",
            "🔹 Multiple numbers ke sath calculator banao.",
            "🔹 History feature add karo jo previous calculations store kare.",
            "🔹 Scientific calculator functions add karo.",
            "🔹 Error handling improve karo invalid inputs ke liye.",
          ],
          interviewQuestions: [
            "🔹 switch case vs if-else: Kab konsa use karna chahiye?",
            "🔹 JavaScript me floating point calculations me precision issues kaise handle karein?",
            "🔹 Error handling ke best practices kya hain?",
            "🔹 Type conversion kaise kaam karta hai JavaScript me?",
          ],
          comparisonTable: [
            {
              approach: "switch case",
              timeComplexity: "O(1)",
              spaceComplexity: "O(1)",
              pros: "Clean and readable",
              cons: "Limited to equality comparison",
            },
            {
              approach: "if-else",
              timeComplexity: "O(1)",
              spaceComplexity: "O(1)",
              pros: "More flexible conditions",
              cons: "Can become messy with many conditions",
            }
          ],
          conclusion: [
            "🔹 switch case simple operations ke liye best hai.",
            "🔹 if-else complex conditions ke liye better hai.",
            "🔹 Error handling important hai calculator applications me.",
          ],
        },
      }
    ]
  },

  // 5️⃣ Arrays & Basic Data Structures
  {
    category: "Arrays & Basic Data Structures",
    questions: [
      // Q-22. Fixed & Dynamic Size Array
      {
        title: "Fixed & Dynamic Size Array",
        description: "Fixed aur Dynamic arrays dono memory allocation ke different approaches represent karte hain.",
        problemStatement: "Ek Fixed Size aur ek Dynamic Size array implement karo, dono me elements add, remove aur access karne ka tareeka demonstrate karo.",
        algorithm: [
          "🔹 Fixed Size Array ka ek predefined size set karo.",
          "🔹 Dynamic Size Array me elements ko dynamically allocate aur deallocate karo.",
          "🔹 Elements ko add aur remove karne ka logic implement karo.",
          "🔹 Dono types ke arrays ke performance aur memory utilization compare karo."
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Fixed Size Array",
              approach: [
                "🔹 Fixed Size Array ek predefined size ke sath create hota hai.",
                "🔹 Elements add aur access karna efficient hota hai, lekin size modify nahi kiya ja sakta."
              ],
              code: `
    function fixedSizeArray() {
        const arr = new Array(5); // Fixed size array with 5 elements
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
        arr[3] = 40;
        arr[4] = 50;
        console.log(arr);
    }
    fixedSizeArray();
                `,
              explanation: [
                "🔹 Fixed size array me elements ko pehle se reserve kiya jata hai.",
                "🔹 Elements ko add karna aur access karna fast hota hai.",
                "🔹 Size badalne ke liye naya array create karna padta hai."
              ]
            },
            {
              method: "Method 2: Using Dynamic Size Array",
              approach: [
                "🔹 Dynamic Size Array me elements dynamically allocate aur resize kiye ja sakte hain.",
                "🔹 Size automatically increase hota hai jab naye elements add kiye jate hain."
              ],
              code: `
    function dynamicSizeArray() {
        let arr = [];
        arr.push(10);
        arr.push(20);
        arr.push(30);
        console.log(arr);
    }
    dynamicSizeArray();
                `,
              explanation: [
                "🔹 Dynamic arrays memory ko efficiently use karte hain.",
                "🔹 Push aur pop operations ka use karke size adjust kiya jata hai.",
                "🔹 Performance kabhi-kabhi degrade ho sakti hai jab resizing hoti hai."
              ]
            }
          ],
          output: `
    Fixed Size Array Output: [10, 20, 30, 40, 50]
    Dynamic Size Array Output: [10, 20, 30]
        `
        },
        practiceProblems: [
          "🔹 Ek function likho jo fixed size aur dynamic size arrays ka comparison kare.",
          "🔹 Ek dynamic array implement karo jo memory reallocation ka demonstration kare.",
          "🔹 JavaScript me Set aur Map ka use karke dynamic data structures implement karo."
        ],
        interviewQuestions: [
          "🔹 Fixed aur Dynamic arrays ke beech primary differences kya hain?",
          "🔹 Dynamic arrays me resizing ka process kaise kaam karta hai?",
          "🔹 Fixed arrays kis scenarios me beneficial hote hain?",
          "🔹 JavaScript me arrays internally kaise implement hote hain?",
          "🔹 Memory allocation aur deallocation kaise manage hota hai?"
        ],
        comparisonTable: [
          {
            approach: "Fixed Size Array",
            timeComplexity: "O(1) for access, O(n) for resizing",
            spaceComplexity: "O(n)",
            pros: "Fast access, predictable memory usage",
            cons: "Size modification not possible"
          },
          {
            approach: "Dynamic Size Array",
            timeComplexity: "O(1) for access, amortized O(1) for insertion",
            spaceComplexity: "O(n) with occasional extra memory allocation",
            pros: "Flexible size, efficient memory usage",
            cons: "Occasional resizing can slow down performance"
          }
        ],
        conclusion: [
          "🔹 Fixed size arrays predictable hote hain lekin flexible nahi hote.",
          "🔹 Dynamic size arrays memory efficient hote hain lekin resizing expensive ho sakti hai.",
          "🔹 Dono arrays alag-alag use cases me beneficial hote hain."
        ]
      },
      // Q-23. Accept Value from User and Assign in an Array
      {
        "title": "Accept Value from User and Assign in an Array",
        "description": "User se input lekar usse ek array me store karne ke multiple tareeke explore karenge.",
        "problemStatement": "Ek function likho jo user se values accept kare aur unhe ek array me store kare. Alag-alag approaches ka istemal karke is problem ko solve karo.",
        "algorithm": [
          "🔹 User se input lene ke liye prompt() ya HTML form ka use karo.",
          "🔹 Values ko ek array me store karo.",
          "🔹 Alag-alag methods ka implementation karo jaise ki while loop, push(), map(), etc.",
          "🔹 Har method ka comparison aur best use case analyze karo."
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using prompt() and push()",
              "approach": [
                "🔹 prompt() ka use karke user se input liya jata hai.",
                "🔹 push() method ka use karke values ko array me store kiya jata hai."
              ],
              "code": "\n    function acceptValuesUsingPrompt() {\n        let arr = [];\n        let size = prompt('Kitne elements dalne hain?');\n        for (let i = 0; i < size; i++) {\n            arr.push(prompt(`Enter element ${i + 1}:`));\n        }\n        console.log('User Array:', arr);\n    }\n    acceptValuesUsingPrompt();\n                ",
              "explanation": [
                "🔹 User input ko dynamically accept karta hai.",
                "🔹 Simple aur easy-to-use implementation hai."
              ]
            },
            {
              "method": "Method 2: Using readline-sync (For Node.js)",
              "approach": [
                "🔹 Node.js me command line se input lene ke liye readline-sync ka use hota hai.",
                "🔹 questionInt() aur question() functions ka use hota hai."
              ],
              "code": "\n    const readline = require('readline-sync');\n    function acceptValuesUsingReadline() {\n        let arr = [];\n        let size = readline.questionInt('Kitne elements dalne hain? ');\n        for (let i = 0; i < size; i++) {\n            arr.push(readline.question(`Enter element ${i + 1}: `));\n        }\n        console.log('User Array:', arr);\n    }\n    acceptValuesUsingReadline();\n                ",
              "explanation": [
                "🔹 Node.js CLI applications ke liye suitable hai.",
                "🔹 Interactive aur controlled input handling deta hai."
              ]
            },
            {
              "method": "Method 3: Using document.getElementById() (For Web Forms)",
              "approach": [
                "🔹 HTML form ke through user se input accept kiya jata hai.",
                "🔹 split(',') ka use karke values ko array me convert kiya jata hai."
              ],
              "code": "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <title>Input Array</title>\n    </head>\n    <body>\n        <input type=\"text\" id=\"userInput\" placeholder=\"Enter numbers separated by comma\">\n        <button onclick=\"acceptValuesUsingInput()\">Submit</button>\n        <script>\n            function acceptValuesUsingInput() {\n                let input = document.getElementById('userInput').value;\n                let arr = input.split(',').map(item => item.trim());\n                console.log('User Array:', arr);\n            }\n        </script>\n    </body>\n    </html>\n                ",
              "explanation": [
                "🔹 Web applications ke liye suitable approach hai.",
                "🔹 User-friendly aur graphical interface provide karta hai."
              ]
            },
            {
              "method": "Method 4: Using while loop",
              "approach": [
                "🔹 User input ko dynamically collect karne ke liye while loop ka use hota hai.",
                "🔹 Jab tak user 'stop' nahi likhta, tab tak loop chalta hai."
              ],
              "code": "\n    function acceptValuesUsingWhile() {\n        let arr = [];\n        let i = 0;\n        while (true) {\n            let value = prompt(`Enter element ${i + 1} (or type 'stop' to end):`);\n            if (value.toLowerCase() === 'stop') break;\n            arr.push(value);\n            i++;\n        }\n        console.log('User Array:', arr);\n    }\n    acceptValuesUsingWhile();\n                ",
              "explanation": [
                "🔹 User ko flexible input collection ka option deta hai.",
                "🔹 Har input ke sath array expand hota hai."
              ]
            }
          ],
          "output": "\n    Example Output:\n    User Array: ['10', '20', '30']\n"
        },
        "practiceProblems": [
          "🔹 Ek function likho jo user se input le aur alag-alag data types ko handle kare.",
          "🔹 Ek dynamic array implement karo jo duplicate values remove kare.",
          "🔹 Ek function likho jo array ke elements ko reverse kare bina built-in function ke."
        ],
        "interviewQuestions": [
          "🔹 JavaScript me arrays dynamically resize kaise hote hain?",
          "🔹 User input handle karne ke liye best practices kya hain?",
          "🔹 DOM manipulation ke bina browser me input kaise handle kiya jaye?",
          "🔹 While loop aur for loop me input collection ke liye kaun sa best hai?",
          "🔹 Browser vs Node.js me input handling me kya differences hain?"
        ],
        "comparisonTable": [
          {
            "approach": "Prompt & push()",
            "pros": "Easy to implement, direct user input",
            "cons": "Limited to browser-based applications"
          },
          {
            "approach": "Readline-sync (Node.js)",
            "pros": "CLI-based interactive input handling",
            "cons": "Only works in Node.js environment"
          },
          {
            "approach": "HTML Form & split()",
            "pros": "User-friendly, supports multiple inputs",
            "cons": "Requires a web interface"
          },
          {
            "approach": "While loop dynamic collection",
            "pros": "User can input until they decide to stop",
            "cons": "Requires validation for better handling"
          }
        ],
        "conclusion": [
          "🔹 Alag-alag methods different use cases ke liye useful hain.",
          "🔹 Browser aur Node.js ke alag-alag input handling techniques hain.",
          "🔹 User experience aur performance ke basis par best method select karni chahiye."
        ]
      }
      ,

    ],
  }
];
