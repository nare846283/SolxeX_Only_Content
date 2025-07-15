export const mediumQuestions = [
  // 1️⃣ Math Problems

  {
    category: "Math Problems",
    questions: [
      // Q-1. Calculate Compound Interest
      {
        "title": "Calculate Compound Interest",
        "description": "Compound interest calculate karne ke multiple tareeke explore karenge.",
        "problemStatement": "Ek function likho jo principal amount, rate of interest, aur time period accept kare aur compound interest calculate kare. Alag-alag approaches ka istemal karke is problem ko solve karo.",
        "algorithm": [
          "🔹 User se input lene ke liye prompt() ya HTML form ka use karo.",
          "🔹 Compound Interest formula ka use karo: A = P(1 + r/n)^(nt)",
          "🔹 Alag-alag methods ka implementation karo jaise ki loops, recursion, math functions, etc.",
          "🔹 Har method ka comparison aur best use case analyze karo."
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using prompt() and Math.pow()",
              "approach": [
                "🔹 prompt() ka use karke user se input liya jata hai.",
                "🔹 Math.pow() ka use karke compound interest calculate kiya jata hai."
              ],
              "code":
                ` 
          function calculateCIUsingPrompt() {
            let P = parseFloat(prompt('Enter Principal Amount:'));
            let R = parseFloat(prompt('Enter Rate of Interest (%):')) / 100;
            let T = parseInt(prompt('Enter Time Period (years):'));
            let n = parseInt(prompt('Enter Number of times interest applied per year:'));
            let A = P * Math.pow((1 + R / n), (n * T));
            let CI = A - P;
              
            console.log('Compound Interest:', CI.toFixed(2));
          }
          
          calculateCIUsingPrompt();

                           `,
              "explanation": [
                "🔹 User input ko dynamically accept karta hai.",
                "🔹 Simple aur easy-to-use implementation hai."
              ]
            },

            {
              "method": "Method 2: Using readline-sync (For Node.js)",
              "approach": [
                "🔹 Node.js me command line se input lene ke liye readline-sync ka use hota hai.",
                "🔹 Math.pow() function ka use hota hai."
              ],
              "code": `
      const readline = require('readline-sync'); 
      
      function calculateCIUsingReadline() {        
        let P = parseFloat(readline.question('Enter Principal Amount: '));
        let R = parseFloat(readline.question('Enter Rate of Interest (%): ')) / 100;
        let T = parseInt(readline.question('Enter Time Period (years): '));
        let n = parseInt(readline.question('Enter Number of times interest applied per year: '));
        let A = P * Math.pow((1 + R / n), (n * T));
        let CI = A - P;
        console.log('Compound Interest:', CI.toFixed(2));
      }

      calculateCIUsingReadline(); 
      
      `,
              "explanation": [
                "🔹 Node.js CLI applications ke liye suitable hai.",
                "🔹 Interactive aur controlled input handling deta hai."
              ]
            },

            {
              "method": "Method 3: Using HTML Form and JavaScript",
              "approach": [
                "🔹 HTML form ke through user se input accept kiya jata hai.",
                "🔹 Formula ka implementation JavaScript me hota hai."
              ],
              "code": "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <title>Compound Interest Calculator</title>\n    </head>\n    <body>\n        <input type=\"number\" id=\"principal\" placeholder=\"Enter Principal\">\n        <input type=\"number\" id=\"rate\" placeholder=\"Enter Rate (%)\">\n        <input type=\"number\" id=\"time\" placeholder=\"Enter Time (years)\">\n        <input type=\"number\" id=\"n\" placeholder=\"Times compounded per year\">\n        <button onclick=\"calculateCIUsingInput()\">Calculate</button>\n        <script>\n            function calculateCIUsingInput() {\n                let P = parseFloat(document.getElementById('principal').value);\n                let R = parseFloat(document.getElementById('rate').value) / 100;\n                let T = parseInt(document.getElementById('time').value);\n                let n = parseInt(document.getElementById('n').value);\n                let A = P * Math.pow((1 + R / n), (n * T));\n                let CI = A - P;\n                alert('Compound Interest: ' + CI.toFixed(2));\n            }\n        </script>\n    </body>\n    </html>\n                ",
              "explanation": [
                "🔹 Web applications ke liye suitable approach hai.",
                "🔹 User-friendly aur graphical interface provide karta hai."
              ]
            }
          ],
          "output": `
      Example Output: 
      Compound Interest: 210.34 
          `,
        },

        "practiceProblems": [
          "🔹 Ek function likho jo simple interest aur compound interest dono compare kare.",
          "🔹 Ek program likho jo monthly compound interest calculate kare.",
          "🔹 User ko multiple years ke liye compound interest breakdown dikhane wala function likho."
        ],
        "interviewQuestions": [
          "🔹 Compound interest aur simple interest me kya difference hai?",
          "🔹 JavaScript me Math.pow() aur exponential operator (**) ka difference kya hai?",
          "🔹 Browser vs Node.js me numerical calculations handle karne ke differences kya hain?",
          "🔹 Real-world applications me compound interest calculation kaise use hota hai?",
          "🔹 Recursion se compound interest calculate kar sakte hain? Kaise?"
        ],
        "comparisonTable": [
          {
            "approach": "Prompt & Math.pow()",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Easy to implement, direct user input",
            "cons": "Limited to browser-based applications"
          },
          {
            "approach": "Readline-sync (Node.js)",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "CLI-based interactive input handling",
            "cons": "Only works in Node.js environment"
          },
          {
            "approach": "HTML Form & JavaScript",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "User-friendly, supports multiple inputs",
            "cons": "Requires a web interface"
          }
        ],
        "conclusion": [
          "🔹 Alag-alag methods different use cases ke liye useful hain.",
          "🔹 Browser aur Node.js ke alag-alag numerical calculation techniques hain.",
          "🔹 User experience aur performance ke basis par best method select karni chahiye."
        ]
      },


      // Q-2. Area of a Triangle Using Heron's Formula 
      {
        "title": "Area of a Triangle Using Heron's Formula",
        "description": "Heron's formula ka use karke triangle ka area calculate karne ke multiple tareeke explore karenge.",
        "problemStatement": "Ek function likho jo triangle ke teen sides accept kare aur Heron's formula ka use karke area calculate kare. Alag-alag approaches ka istemal karke is problem ko solve karo.",
        "algorithm": [
          "🔹 User se input lene ke liye prompt() ya HTML form ka use karo.",
          "🔹 Semi-perimeter (s) calculate karo: s = (a + b + c) / 2",
          "🔹 Heron's formula ka use karo: Area = sqrt(s * (s - a) * (s - b) * (s - c))",
          "🔹 Alag-alag methods ka implementation karo jaise ki loops, recursion, math functions, etc.",
          "🔹 Har method ka comparison aur best use case analyze karo."
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using prompt() and Math.sqrt()",
              "approach": [
                "🔹 prompt() ka use karke user se input liya jata hai.",
                "🔹 Math.sqrt() ka use karke Heron's formula apply kiya jata hai."
              ],
              "code": "\n    function calculateAreaUsingPrompt() {\n        let a = parseFloat(prompt('Enter side a:'));\n        let b = parseFloat(prompt('Enter side b:'));\n        let c = parseFloat(prompt('Enter side c:'));\n        let s = (a + b + c) / 2;\n        let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));\n        console.log('Triangle Area:', area.toFixed(2));\n    }\n    calculateAreaUsingPrompt();\n                ",
              "explanation": [
                "🔹 User input ko dynamically accept karta hai.",
                "🔹 Simple aur easy-to-use implementation hai."
              ]
            },
            {
              "method": "Method 2: Using readline-sync (For Node.js)",
              "approach": [
                "🔹 Node.js me command line se input lene ke liye readline-sync ka use hota hai.",
                "🔹 Math.sqrt() function ka use hota hai."
              ],
              "code": "\n    const readline = require('readline-sync');\n    function calculateAreaUsingReadline() {\n        let a = parseFloat(readline.question('Enter side a: '));\n        let b = parseFloat(readline.question('Enter side b: '));\n        let c = parseFloat(readline.question('Enter side c: '));\n        let s = (a + b + c) / 2;\n        let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));\n        console.log('Triangle Area:', area.toFixed(2));\n    }\n    calculateAreaUsingReadline();\n                ",
              "explanation": [
                "🔹 Node.js CLI applications ke liye suitable hai.",
                "🔹 Interactive aur controlled input handling deta hai."
              ]
            },
            {
              "method": "Method 3: Using HTML Form and JavaScript",
              "approach": [
                "🔹 HTML form ke through user se input accept kiya jata hai.",
                "🔹 Formula ka implementation JavaScript me hota hai."
              ],
              "code": "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <title>Triangle Area Calculator</title>\n    </head>\n    <body>\n        <input type=\"number\" id=\"sideA\" placeholder=\"Enter side a\">\n        <input type=\"number\" id=\"sideB\" placeholder=\"Enter side b\">\n        <input type=\"number\" id=\"sideC\" placeholder=\"Enter side c\">\n        <button onclick=\"calculateAreaUsingInput()\">Calculate</button>\n        <script>\n            function calculateAreaUsingInput() {\n                let a = parseFloat(document.getElementById('sideA').value);\n                let b = parseFloat(document.getElementById('sideB').value);\n                let c = parseFloat(document.getElementById('sideC').value);\n                let s = (a + b + c) / 2;\n                let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));\n                alert('Triangle Area: ' + area.toFixed(2));\n            }\n        </script>\n    </body>\n    </html>\n                ",
              "explanation": [
                "🔹 Web applications ke liye suitable approach hai.",
                "🔹 User-friendly aur graphical interface provide karta hai."
              ]
            }
          ],
          "output": "\n    Example Output:\n    Triangle Area: 12.34\n        "
        },
        "practiceProblems": [
          "🔹 Ek function likho jo different types of triangles ke liye area calculate kare.",
          "🔹 Ek program likho jo equilateral triangle aur scalene triangle ke liye alag-alag methods compare kare.",
          "🔹 User se dynamic input lekar triangle area calculation ka automation karo."
        ],
        "interviewQuestions": [
          "🔹 Heron's formula aur standard base-height formula me kya difference hai?",
          "🔹 JavaScript me Math.sqrt() aur exponentiation operator (**) ka difference kya hai?",
          "🔹 Triangle validity check karne ke liye kaun se methods use kar sakte hain?",
          "🔹 Web applications me geometry calculations kaise implement kiye jate hain?",
          "🔹 Recursion se triangle area calculate kar sakte hain? Kaise?"
        ],
        "comparisonTable": [
          {
            "approach": "Prompt & Math.sqrt()",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Easy to implement, direct user input",
            "cons": "Limited to browser-based applications"
          },
          {
            "approach": "Readline-sync (Node.js)",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "CLI-based interactive input handling",
            "cons": "Only works in Node.js environment"
          },
          {
            "approach": "HTML Form & JavaScript",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "User-friendly, supports multiple inputs",
            "cons": "Requires a web interface"
          }
        ],
        "conclusion": [
          "🔹 Alag-alag methods different use cases ke liye useful hain.",
          "🔹 Browser aur Node.js ke alag-alag numerical calculation techniques hain.",
          "🔹 User experience aur performance ke basis par best method select karni chahiye."
        ]
      },
      // Q-3. Circumference of a Circle
      {
        "title": "Circumference of a Circle",
        "description": "Alag-alag methods ka use karke circle ka circumference calculate karenge.",
        "problemStatement": "Ek function likho jo circle ke radius ko accept kare aur uska circumference calculate kare. Alag-alag approaches ka istemal karke is problem ko solve karo.",
        "algorithm": [
          "🔹 User se input lene ke liye prompt() ya HTML form ka use karo.",
          "🔹 Circumference formula ka use karo: C = 2 * π * r",
          "🔹 Alag-alag methods ka implementation karo jaise ki loops, recursion, math functions, etc.",
          "🔹 Har method ka comparison aur best use case analyze karo."
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using prompt() and Math.PI",
              "approach": [
                "🔹 prompt() ka use karke user se input liya jata hai.",
                "🔹 Math.PI ka use karke circumference calculate kiya jata hai."
              ],
              "code": "\n    function calculateCircumferenceUsingPrompt() {\n        let r = parseFloat(prompt('Enter radius:'));\n        let circumference = 2 * Math.PI * r;\n        console.log('Circumference:', circumference.toFixed(2));\n    }\n    calculateCircumferenceUsingPrompt();\n                ",
              "explanation": [
                "🔹 User input ko dynamically accept karta hai.",
                "🔹 Simple aur easy-to-use implementation hai."
              ]
            },
            {
              "method": "Method 2: Using readline-sync (For Node.js)",
              "approach": [
                "🔹 Node.js me command line se input lene ke liye readline-sync ka use hota hai.",
                "🔹 Math.PI function ka use hota hai."
              ],
              "code": "\n    const readline = require('readline-sync');\n    function calculateCircumferenceUsingReadline() {\n        let r = parseFloat(readline.question('Enter radius: '));\n        let circumference = 2 * Math.PI * r;\n        console.log('Circumference:', circumference.toFixed(2));\n    }\n    calculateCircumferenceUsingReadline();\n                ",
              "explanation": [
                "🔹 Node.js CLI applications ke liye suitable hai.",
                "🔹 Interactive aur controlled input handling deta hai."
              ]
            },
            {
              "method": "Method 3: Using HTML Form and JavaScript",
              "approach": [
                "🔹 HTML form ke through user se input accept kiya jata hai.",
                "🔹 Formula ka implementation JavaScript me hota hai."
              ],
              "code": "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <title>Circle Circumference Calculator</title>\n    </head>\n    <body>\n        <input type=\"number\" id=\"radius\" placeholder=\"Enter radius\">\n        <button onclick=\"calculateCircumferenceUsingInput()\">Calculate</button>\n        <script>\n            function calculateCircumferenceUsingInput() {\n                let r = parseFloat(document.getElementById('radius').value);\n                let circumference = 2 * Math.PI * r;\n                alert('Circumference: ' + circumference.toFixed(2));\n            }\n        </script>\n    </body>\n    </html>\n                ",
              "explanation": [
                "🔹 Web applications ke liye suitable approach hai.",
                "🔹 User-friendly aur graphical interface provide karta hai."
              ]
            }
          ],
          "output": "\n    Example Output:\n    Circumference: 31.42\n        "
        },
        "timeComplexity": "O(1) - Kyunki calculations constant time me hoti hain.",
        "spaceComplexity": "O(1) - Kyunki sirf kuch variables store kiye ja rahe hain, extra space use nahi ho raha.",
        "practiceProblems": [
          "🔹 Ek function likho jo different units (cm, m, inch) ke liye circumference calculate kare.",
          "🔹 Ek program likho jo circle ke diameter se circumference calculate kare.",
          "🔹 User se dynamic input lekar circle circumference calculation ka automation karo."
        ],
        "interviewQuestions": [
          "🔹 Circumference aur perimeter me kya difference hai?",
          "🔹 JavaScript me Math.PI aur manually defined π value ka difference kya hai?",
          "🔹 Floating point precision errors ko handle karne ke liye kya techniques use hoti hain?",
          "🔹 Web applications me geometry calculations kaise implement kiye jate hain?",
          "🔹 Recursion se circle circumference calculate kar sakte hain? Kaise?"
        ],
        "comparisonTable": [
          {
            "approach": "Prompt & Math.PI",
            "pros": "Easy to implement, direct user input",
            "cons": "Limited to browser-based applications"
          },
          {
            "approach": "Readline-sync (Node.js)",
            "pros": "CLI-based interactive input handling",
            "cons": "Only works in Node.js environment"
          },
          {
            "approach": "HTML Form & JavaScript",
            "pros": "User-friendly, supports multiple inputs",
            "cons": "Requires a web interface"
          }
        ],
        "conclusion": [
          "🔹 Alag-alag methods different use cases ke liye useful hain.",
          "🔹 Browser aur Node.js ke alag-alag numerical calculation techniques hain.",
          "🔹 User experience aur performance ke basis par best method select karni chahiye."
        ]
      },
      // Q-4. Accept a Year and Check If It’s a Leap Year
      {
        "title": "Accept a Year and Check If It’s a Leap Year",
        "description": "Alag-alag methods ka use karke ek year ko check karenge ki woh leap year hai ya nahi.",
        "problemStatement": "Ek function likho jo user se ek year accept kare aur check kare ki yeh leap year hai ya nahi. Alag-alag approaches ka istemal karke is problem ko solve karo.",
        "algorithm": [
          "🔹 User se input lene ke liye prompt() ya HTML form ka use karo.",
          "🔹 Leap year hone ki conditions check karo: \n            - Agar year 400 se completely divisible hai, toh leap year hai.\n            - Agar year 100 se divisible hai, lekin 400 se nahi, toh leap year nahi hai.\n            - Agar year 4 se divisible hai, lekin 100 se nahi, toh leap year hai.",
          "🔹 Har method ka comparison aur best use case analyze karo."
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using if-else Conditions",
              "approach": [
                "🔹 Simple if-else conditions ka use karke leap year check karenge."
              ],
              "code": "\n    function isLeapYear(year) {\n        if (year % 400 === 0) return true;\n        if (year % 100 === 0) return false;\n        if (year % 4 === 0) return true;\n        return false;\n    }\n    \n    const year = parseInt(prompt('Enter a year:'));\n    console.log(year, isLeapYear(year) ? 'is a Leap Year' : 'is NOT a Leap Year');\n                ",
              "explanation": [
                "🔹 400 se divisible hone par leap year hoga.",
                "🔹 100 se divisible hone par leap year nahi hoga.",
                "🔹 4 se divisible hone par leap year hoga."
              ]
            },
            {
              "method": "Method 2: Using Switch Case",
              "approach": [
                "🔹 switch case ka use karke leap year check karenge."
              ],
              "code":
                `
              function isLeapYear(year) {
    switch (true) {
        case (year % 400 === 0):
            return true;
        case (year % 100 === 0):
            return false;
        case (year % 4 === 0):
            return true;
        default:
            return false;
    }
}

// Example Usage
const year = parseInt(prompt("Enter a year:"));
console.log(year, isLeapYear(year) ? "is a Leap Year" : "is NOT a Leap Year");

              `,
              "explanation": [
                "🔹 switch(true) ka use karke conditions check kar rahe hain.",
                "🔹 Har case ek specific condition check karta hai.",
              ]
            },
            {
              "method": "Method 3: Using Ternary Operator",
              "approach": [
                "🔹 Short aur efficient version using ternary operator."
              ],
              "code": "\n    function isLeapYear(year) {\n        return (year % 400 === 0) ? true :\n               (year % 100 === 0) ? false :\n               (year % 4 === 0) ? true : false;\n    }\n    \n    const year = parseInt(prompt('Enter a year:'));\n    console.log(year, isLeapYear(year) ? 'is a Leap Year' : 'is NOT a Leap Year');\n                ",
              "explanation": [
                "🔹 Same logic as Method 1, lekin ternary operator se short aur clean likha hai."
              ]
            },
            {
              "method": "Method 4: Using Recursion",
              "approach": [
                "🔹 Recursive function ka use karke leap year check karenge."
              ],
              "code":
                `
function isLeapYear(year) {
    if (year <= 0) return false; // Invalid year
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
}

// Example Usage
const year = parseInt(prompt("Enter a year:"));
console.log(year, isLeapYear(year) ? "is a Leap Year" : "is NOT a Leap Year");

              `
              ,
              "explanation": [
                "🔹 Recursive approach use karke year validity check ki hai.",
                "🔹 Agar year invalid hai (year <= 0), toh false return karenge."
              ]
            },
            {
              "method": "Method 5: Using JavaScript Date Object",
              "approach": [
                "🔹 JavaScript ke Date object ka use karke February 29 ka existence check karenge."
              ],
              "code": "\n    function isLeapYear(year) {\n        return new Date(year, 1, 29).getDate() === 29;\n    }\n    \n    const year = parseInt(prompt('Enter a year:'));\n    console.log(year, isLeapYear(year) ? 'is a Leap Year' : 'is NOT a Leap Year');\n                ",
              "explanation": [
                "🔹 February ke 29th day ka existence check kar rahe hain.",
                "🔹 Agar 29th day exist karta hai, toh Leap Year hai."
              ]
            }
          ],
          "output": "\n    Example Output:\n    2024 is a Leap Year\n    1900 is NOT a Leap Year\n    2000 is a Leap Year\n    2023 is NOT a Leap Year\n        "
        },

        "practiceProblems": [
          "🔹 Ek function likho jo range me sabhi leap years print kare.",
          "🔹 User se start aur end year input leke beech ke sabhi leap years find karo.",
          "🔹 Negative aur invalid years handle karne wala function likho.",
          "🔹 Date object ka use karke ek calendar me leap years highlight karo."
        ],
        "interviewQuestions": [
          "🔹 Leap year ka formula kaise optimize kiya ja sakta hai?",
          "🔹 JavaScript me Date object se leap year kaise check kar sakte hain?",
          "🔹 Floating point precision errors ko handle karne ke liye kya techniques use hoti hain?"
        ],
        "comparisonTable": [
          {
            "approach": "If-Else Conditions",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Simple & easy to understand",
            "cons": "Code thoda lamba ho sakta hai"
          },
          {
            "approach": "Ternary Operator",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Short aur efficient",
            "cons": "Readability thodi kam ho sakti hai"
          },
          {
            "approach": "Switch Case	",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Structured format",
            "cons": "Unnecessary switch overhead"
          },
          {
            "approach": "Recursion",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Recursive approach",
            "cons": "No advantage over if-else"
          },
          {
            "approach": "Date Object",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Built-in JavaScript feature ka use karta hai",
            "cons": "Limited browser compatibility"
          }
        ],
        "conclusion": [
          "🔹 Alag-alag methods different use cases ke liye useful hain.",
          "🔹 If-else aur ternary operator simple aur fast hain.",
          "🔹 Date object ka use karna ek creative approach ho sakta hai.",
          "🔹 Time Complexity O(1) aur Space Complexity O(1) rahi har method me"
        ]
      },
      // Q-5. Shop Discount Problem
      {
        "title": "Shop Discount Problem",
        "description": "Shopping ke bill par discount calculate karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo shopping amount ke basis par discount calculate kare. Different discount slabs implement karo aur final payable amount calculate karo.",
        "algorithm": [
          "🔹 User se shopping amount input lo",
          "🔹 Discount slabs define karo: \n - 5000+ par 20% discount\n - 3000-4999 par 15% discount\n - 1000-2999 par 10% discount\n - 1000 se kam par no discount",
          "🔹 Final amount = Original Amount - Discount Amount",
          "🔹 Different methods se solution implement karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using If-Else Conditions",
              "approach": [
                "🔹 Simple if-else conditions ka use karke discount calculate karenge"
              ],
              "code": `
function calculateDiscount(amount) {
    let discount = 0;
    
    if (amount >= 5000) {
        discount = amount * 0.20;  // 20% discount
    } else if (amount >= 3000) {
        discount = amount * 0.15;  // 15% discount
    } else if (amount >= 1000) {
        discount = amount * 0.10;  // 10% discount
    }
    
    const finalAmount = amount - discount;
    return {
        originalAmount: amount,
        discount: discount,
        finalAmount: finalAmount
    };
}

// Example Usage
const bill = parseInt(prompt("Enter shopping amount:"));
const result = calculateDiscount(bill);
console.log(\`Original Amount: \${result.originalAmount}\`);
console.log(\`Discount: \${result.discount}\`);
console.log(\`Final Amount: \${result.finalAmount}\`);`,
              "explanation": [
                "🔹 Amount ke basis par appropriate discount slab select kiya jata hai",
                "🔹 Discount amount calculate karke final amount me se subtract kiya jata hai"
              ]
            },
            {
              "method": "Method 2: Using Switch Case",
              "approach": [
                "🔹 Switch case ka use karke different discount slabs handle karenge"
              ],
              "code": `
function calculateDiscount(amount) {
    let discount = 0;
    
    switch(true) {
        case amount >= 5000:
            discount = amount * 0.20;
            break;
        case amount >= 3000:
            discount = amount * 0.15;
            break;
        case amount >= 1000:
            discount = amount * 0.10;
            break;
    }
    
    return {
        originalAmount: amount,
        discount: discount,
        finalAmount: amount - discount
    };
}

// Example Usage
const bill = parseInt(prompt("Enter shopping amount:"));
const result = calculateDiscount(bill);
console.log(\`Original Amount: \${result.originalAmount}\`);
console.log(\`Discount: \${result.discount}\`);
console.log(\`Final Amount: \${result.finalAmount}\`);`,
              "explanation": [
                "🔹 Switch(true) ka use karke conditions check ki jati hain",
                "🔹 Appropriate case me discount calculate hota hai"
              ]
            },
            {
              "method": "Method 3: Using Ternary Operators",
              "approach": [
                "🔹 Nested ternary operators ka use karke compact solution banayenge"
              ],
              "code": `
function calculateDiscount(amount) {
    const discount = amount >= 5000 ? amount * 0.20 :
                    amount >= 3000 ? amount * 0.15 :
                    amount >= 1000 ? amount * 0.10 : 0;
                    
    return {
        originalAmount: amount,
        discount: discount,
        finalAmount: amount - discount
    };
}

// Example Usage
const bill = parseInt(prompt("Enter shopping amount:"));
const result = calculateDiscount(bill);
console.log(\`Original Amount: \${result.originalAmount}\`);
console.log(\`Discount: \${result.discount}\`);
console.log(\`Final Amount: \${result.finalAmount}\`);`,
              "explanation": [
                "🔹 Nested ternary operators se code short and clean rehta hai",
                "🔹 Same logic but different implementation style"
              ]
            }
          ],
          "output": `
Example Output:
Original Amount: 6000
Discount: 1200
Final Amount: 4800`
        },
        "practiceProblems": [
          "🔹 Additional discount conditions add karo (jaise festival discount)",
          "🔹 Minimum purchase amount par free delivery implement karo",
          "🔹 Multiple items ke liye total discount calculate karo",
          "🔹 Different customer types (regular/premium) ke liye alag discount structure implement karo"
        ],
        "interviewQuestions": [
          "🔹 Discount calculation ke different approaches me se best approach konsa hai aur kyu?",
          "🔹 Large scale applications me discount system kaise implement kiya jata hai?",
          "🔹 Floating point calculations me precision errors kaise handle karoge?",
          "🔹 Discount rules update karne ke liye flexible system kaise design karoge?"
        ],
        "comparisonTable": [
          {
            "approach": "If-Else",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Simple to understand and implement",
            "cons": "Code can become lengthy with many conditions"
          },
          {
            "approach": "Switch Case",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Clean and structured approach",
            "cons": "Limited flexibility in condition checking"
          },
          {
            "approach": "Ternary Operator",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Compact code",
            "cons": "Can become hard to read with complex conditions"
          }
        ],
        "conclusion": [
          "🔹 Simple if-else approach beginners ke liye best hai",
          "🔹 Complex scenarios me structured approach better rahega",
          "🔹 Code maintainability aur scalability important factors hain",
          "🔹 Floating point calculations me precision ka dhyan rakhna important hai"
        ]
      },
      //Q-6. Bijli Bill Calculation
      {
        "title": "Bijli Bill Calculation",
        "description": "Electricity bill calculate karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo electricity units ke basis par bill calculate kare. Different unit slabs implement karo aur final payable amount calculate karo.",
        "algorithm": [
          "🔹 User se consumed units input lo",
          "🔹 Unit slabs define karo: \n - 0-100 units: ₹4/unit\n - 101-200 units: ₹5/unit\n - 201-300 units: ₹6/unit\n - 300+ units: ₹7/unit",
          "🔹 Fixed charges add karo (₹50)",
          "🔹 GST 18% add karo final amount par"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using If-Else Conditions",
              "approach": [
                "🔹 Simple if-else conditions ka use karke bill calculate karenge"
              ],
              "code": `
      function calculateElectricityBill(units) {
          let bill = 0;
          const FIXED_CHARGE = 50;
          const GST_RATE = 0.18;
          
          if (units <= 100) {
              bill = units * 4;
          } else if (units <= 200) {
              bill = (100 * 4) + ((units - 100) * 5);
          } else if (units <= 300) {
              bill = (100 * 4) + (100 * 5) + ((units - 200) * 6);
          } else {
              bill = (100 * 4) + (100 * 5) + (100 * 6) + ((units - 300) * 7);
          }
          
          // Add fixed charge
          bill += FIXED_CHARGE;
          
          // Calculate GST
          const gst = bill * GST_RATE;
          const totalBill = bill + gst;
          
          return {
              units: units,
              basicBill: bill,
              gstAmount: gst,
              totalBill: totalBill
          };
      }
      
      // Example Usage
      const units = parseInt(prompt("Enter consumed units:"));
      const result = calculateElectricityBill(units);
      console.log(\`Units Consumed: \${result.units}\`);
      console.log(\`Basic Bill: ₹\${result.basicBill.toFixed(2)}\`);
      console.log(\`GST (18%): ₹\${result.gstAmount.toFixed(2)}\`);
      console.log(\`Total Bill: ₹\${result.totalBill.toFixed(2)}\`);`,
              "explanation": [
                "🔹 Units ke basis par appropriate slab select kiya jata hai",
                "🔹 Fixed charges add kiye jate hain",
                "🔹 GST calculate karke final amount me add kiya jata hai"
              ]
            },
            {
              "method": "Method 2: Using Switch Case with Range Check",
              "approach": [
                "🔹 Switch case ka use karke different unit ranges handle karenge"
              ],
              "code": `
      function calculateElectricityBill(units) {
          let bill = 0;
          const FIXED_CHARGE = 50;
          const GST_RATE = 0.18;
          
          switch(true) {
              case units <= 100:
                  bill = units * 4;
                  break;
              case units <= 200:
                  bill = (100 * 4) + ((units - 100) * 5);
                  break;
              case units <= 300:
                  bill = (100 * 4) + (100 * 5) + ((units - 200) * 6);
                  break;
              default:
                  bill = (100 * 4) + (100 * 5) + (100 * 6) + ((units - 300) * 7);
          }
          
          bill += FIXED_CHARGE;
          const gst = bill * GST_RATE;
          const totalBill = bill + gst;
          
          return {
              units: units,
              basicBill: bill,
              gstAmount: gst,
              totalBill: totalBill
          };
      }
      
      // Example Usage
      const units = parseInt(prompt("Enter consumed units:"));
      const result = calculateElectricityBill(units);
      console.log(\`Units Consumed: \${result.units}\`);
      console.log(\`Basic Bill: ₹\${result.basicBill.toFixed(2)}\`);
      console.log(\`GST (18%): ₹\${result.gstAmount.toFixed(2)}\`);
      console.log(\`Total Bill: ₹\${result.totalBill.toFixed(2)}\`);`,
              "explanation": [
                "🔹 Switch case me range conditions check ki jati hain",
                "🔹 Each range ke liye appropriate calculation ki jati hai"
              ]
            },
            {
              "method": "Method 3: Using Array of Slabs",
              "approach": [
                "🔹 Slabs ko array me store karke dynamic calculation karenge"
              ],
              "code": `
      function calculateElectricityBill(units) {
          const FIXED_CHARGE = 50;
          const GST_RATE = 0.18;
          
          const slabs = [
              { limit: 100, rate: 4 },
              { limit: 200, rate: 5 },
              { limit: 300, rate: 6 },
              { limit: Infinity, rate: 7 }
          ];
          
          let remainingUnits = units;
          let bill = 0;
          
          for (let i = 0; i < slabs.length; i++) {
              const currentSlab = slabs[i];
              const previousLimit = i === 0 ? 0 : slabs[i-1].limit;
              const unitsInSlab = Math.min(
                  remainingUnits,
                  currentSlab.limit - previousLimit
              );
              
              if (unitsInSlab > 0) {
                  bill += unitsInSlab * currentSlab.rate;
                  remainingUnits -= unitsInSlab;
              }
              
              if (remainingUnits <= 0) break;
          }
          
          bill += FIXED_CHARGE;
          const gst = bill * GST_RATE;
          const totalBill = bill + gst;
          
          return {
              units: units,
              basicBill: bill,
              gstAmount: gst,
              totalBill: totalBill
          };
      }
      
      // Example Usage
      const units = parseInt(prompt("Enter consumed units:"));
      const result = calculateElectricityBill(units);
      console.log(\`Units Consumed: \${result.units}\`);
      console.log(\`Basic Bill: ₹\${result.basicBill.toFixed(2)}\`);
      console.log(\`GST (18%): ₹\${result.gstAmount.toFixed(2)}\`);
      console.log(\`Total Bill: ₹\${result.totalBill.toFixed(2)}\`);`,
              "explanation": [
                "🔹 Slabs ko array me define kiya gaya hai",
                "🔹 Dynamic calculation with better maintainability",
                "🔹 Easy to modify rates and add new slabs"
              ]
            }
          ],
          "output": `
      Example Output:
      Units Consumed: 250
      Basic Bill: ₹1300.00
      GST (18%): ₹234.00
      Total Bill: ₹1534.00`
        },
        "practiceProblems": [
          "🔹 Commercial vs Residential rates implement karo",
          "🔹 Peak hour surcharge add karo",
          "🔹 Early payment discount feature implement karo",
          "🔹 Monthly consumption history track karo"
        ],
        "interviewQuestions": [
          "🔹 Bill calculation ke different approaches me se best approach konsa hai aur kyu?",
          "🔹 Large scale billing systems me error handling kaise implement karoge?",
          "🔹 Performance optimization ke liye kya steps le sakte hain?",
          "🔹 New slabs add karne ke liye system ko kaise flexible banayenge?"
        ],
        "comparisonTable": [
          {
            "approach": "If-Else",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Simple and straightforward",
            "cons": "Hard to modify slabs"
          },
          {
            "approach": "Switch Case",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Clean and readable",
            "cons": "Limited flexibility"
          },
          {
            "approach": "Array of Slabs",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Highly maintainable and flexible",
            "cons": "Slightly more complex implementation"
          }
        ],
        "conclusion": [
          "🔹 Array of slabs approach is most flexible for real-world scenarios",
          "🔹 Error handling and input validation are crucial",
          "🔹 Consider using decimal.js for precise calculations",
          "🔹 Proper documentation of rate changes is important"
        ]
      }
    ],
  },
  // 2️⃣ Advanced Loops & Number Theory
  {
    category: "Advanced Loops & Number Theory",
    questions: [
      // Q-7. Factorial of a Number
      {
        "title": "Factorial of a Number",
        "description": "Number ka factorial calculate karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo number ka factorial calculate kare. Different methods ka use karke number ka factorial find karo (Example: 5! = 5 × 4 × 3 × 2 × 1 = 120).",
        "algorithm": [
          "🔹 User se number input lo",
          "🔹 Check karo ki number non-negative hai",
          "🔹 1 se lekar number tak multiply karo",
          "🔹 Different approaches implement karo (loop, recursion, etc.)"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using For Loop",
              "approach": [
                "🔹 Simple for loop ka use karke factorial calculate karenge"
              ],
              "code": `
    function calculateFactorial(num) {
        if (num < 0) return "Negative numbers ka factorial define nahi hota";
        if (num === 0 || num === 1) return 1;
        
        let factorial = 1;
        for(let i = 2; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
    
    // Example Usage
    const number = parseInt(prompt("Enter a number:"));
    const result = calculateFactorial(number);
    console.log(\`\${number}! = \${result}\`);`,
              "explanation": [
                "🔹 Number ki validity check karte hain",
                "🔹 Loop ka use karke numbers ko multiply karte hain",
                "🔹 Simple and straightforward approach"
              ]
            },
            {
              "method": "Method 2: Using Recursion",
              "approach": [
                "🔹 Recursive function ka use karke factorial calculate karenge"
              ],
              "code": `
    function calculateFactorial(num) {
        // Base cases
        if (num < 0) return "Negative numbers ka factorial define nahi hota";
        if (num === 0 || num === 1) return 1;
        
        // Recursive case
        return num * calculateFactorial(num - 1);
    }
    
    // Example Usage
    const number = parseInt(prompt("Enter a number:"));
    const result = calculateFactorial(number);
    console.log(\`\${number}! = \${result}\`);`,
              "explanation": [
                "🔹 Base cases handle karte hain",
                "🔹 Recursive calls ka use karke calculation karte hain",
                "🔹 Clean and elegant solution"
              ]
            },
            {
              "method": "Method 3: Using Reduce Method",
              "approach": [
                "🔹 Array reduce method ka use karke factorial calculate karenge"
              ],
              "code": `
    function calculateFactorial(num) {
        if (num < 0) return "Negative numbers ka factorial define nahi hota";
        if (num === 0 || num === 1) return 1;
        
        return Array.from({length: num}, (_, i) => i + 1)
                    .reduce((acc, curr) => acc * curr, 1);
    }
    
    // Example Usage
    const number = parseInt(prompt("Enter a number:"));
    const result = calculateFactorial(number);
    console.log(\`\${number}! = \${result}\`);`,
              "explanation": [
                "🔹 Array create karte hain 1 se num tak",
                "🔹 Reduce method se multiplication perform karte hain",
                "🔹 Modern JavaScript approach"
              ]
            }
          ],
          "output": `
    Example Outputs:
    5! = 120
    3! = 6
    0! = 1
    -1! = Negative numbers ka factorial define nahi hota`
        },
        "practiceProblems": [
          "🔹 Double factorial calculate karo (Example: 5!! = 5 × 3 × 1)",
          "🔹 Large numbers ke factorial ke liye BigInt ka use karo",
          "🔹 Factorial ke last non-zero digit find karo",
          "🔹 Factorial me kitne trailing zeros hain, wo calculate karo"
        ],
        "interviewQuestions": [
          "🔹 Factorial calculation ke different approaches me se best approach konsa hai aur kyu?",
          "🔹 Recursion vs Iteration - factorial ke context me compare karo",
          "🔹 Stack overflow se bachne ke liye kya precautions leni chahiye?",
          "🔹 Very large numbers ke factorial calculate karne ke liye kya approach use karoge?"
        ],
        "comparisonTable": [
          {
            "approach": "For Loop",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Simple to implement, no stack overflow risk",
            "cons": "Not as elegant as recursive solution"
          },
          {
            "approach": "Recursion",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Clean and elegant code",
            "cons": "Stack overflow risk for large numbers"
          },
          {
            "approach": "Reduce Method",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Modern and functional approach",
            "cons": "Creates temporary array, more memory usage"
          }
        ],
        "conclusion": [
          "🔹 For loop approach is best for large numbers",
          "🔹 Recursive approach is clean but has limitations",
          "🔹 Consider BigInt for very large factorials",
          "🔹 Always validate input to handle edge cases"
        ]
      },
      // Q-8. Print the Sum of All Even & Odd Numbers Separately in a Range
      {
        "title": "Print the Sum of All Even & Odd Numbers Separately in a Range",
        "description": "Ek range ke andar ke sabhi even aur odd numbers ka sum separately calculate karenge.",
        "problemStatement": "Ek function likho jo 2 numbers (start aur end) accept kare aur us range ke andar ke sabhi even numbers ka sum aur odd numbers ka sum separately calculate kare.",
        "algorithm": [
          "🔹 User se start aur end number input lo",
          "🔹 Range ke har number ko check karo even/odd ke liye",
          "🔹 Even numbers ka sum alag calculate karo",
          "🔹 Odd numbers ka sum alag calculate karo",
          "🔹 Different approaches implement karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using For Loop",
              "approach": [
                "🔹 Simple for loop ka use karke numbers iterate karenge"
              ],
              "code": `
function calculateEvenOddSum(start, end) {
    let evenSum = 0;
    let oddSum = 0;
    
    for(let i = start; i <= end; i++) {
        if(i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }
    
    return {
        evenSum: evenSum,
        oddSum: oddSum
    };
}

// Example Usage
const start = parseInt(prompt("Enter start number:"));
const end = parseInt(prompt("Enter end number:"));
const result = calculateEvenOddSum(start, end);
console.log(\`Even numbers ka sum: \${result.evenSum}\`);
console.log(\`Odd numbers ka sum: \${result.oddSum}\`);`,
              "explanation": [
                "🔹 For loop se range ke har number ko check karte hain",
                "🔹 Modulo operator (%) se even/odd check karte hain",
                "🔹 Separate variables me sums store karte hain"
              ]
            },
            {
              "method": "Method 2: Using Array Methods",
              "approach": [
                "🔹 Array methods (filter & reduce) ka use karke calculation karenge"
              ],
              "code": `
function calculateEvenOddSum(start, end) {
    const numbers = Array.from(
        {length: end - start + 1}, 
        (_, index) => start + index
    );
    
    const evenSum = numbers
        .filter(num => num % 2 === 0)
        .reduce((sum, num) => sum + num, 0);
        
    const oddSum = numbers
        .filter(num => num % 2 !== 0)
        .reduce((sum, num) => sum + num, 0);
    
    return {
        evenSum: evenSum,
        oddSum: oddSum
    };
}

// Example Usage
const start = parseInt(prompt("Enter start number:"));
const end = parseInt(prompt("Enter end number:"));
const result = calculateEvenOddSum(start, end);
console.log(\`Even numbers ka sum: \${result.evenSum}\`);
console.log(\`Odd numbers ka sum: \${result.oddSum}\`);`,
              "explanation": [
                "🔹 Array create karte hain range ke numbers se",
                "🔹 Filter method se even/odd numbers separate karte hain",
                "🔹 Reduce method se sum calculate karte hain"
              ]
            },
            {
              "method": "Method 3: Using Mathematical Formula",
              "approach": [
                "🔹 Mathematical formulas ka use karke direct calculation karenge"
              ],
              "code": `
function calculateEvenOddSum(start, end) {
    // Ensure start and end are integers
    start = Math.ceil(start);
    end = Math.floor(end);
    
    // Adjust start to nearest even/odd numbers
    let firstEven = start % 2 === 0 ? start : start + 1;
    let firstOdd = start % 2 !== 0 ? start : start + 1;
    
    // Calculate number of even and odd numbers
    let countEven = Math.floor((end - firstEven) / 2) + 1;
    let countOdd = Math.floor((end - firstOdd) / 2) + 1;
    
    // Calculate sums using arithmetic sequence formula
    let evenSum = countEven * (firstEven + end - (end % 2 !== 0 ? 1 : 0)) / 2;
    let oddSum = countOdd * (firstOdd + end - (end % 2 === 0 ? 1 : 0)) / 2;
    
    return {
        evenSum: evenSum,
        oddSum: oddSum
    };
}

// Example Usage
const start = parseInt(prompt("Enter start number:"));
const end = parseInt(prompt("Enter end number:"));
const result = calculateEvenOddSum(start, end);
console.log(\`Even numbers ka sum: \${result.evenSum}\`);
console.log(\`Odd numbers ka sum: \${result.oddSum}\`);`,
              "explanation": [
                "🔹 Arithmetic sequence formula ka use karte hain",
                "🔹 Direct calculation se better performance milti hai",
                "🔹 Large ranges ke liye efficient hai"
              ]
            }
          ],
          "output": `
Example Output:
Start: 1
End: 10
Even numbers ka sum: 30 (2 + 4 + 6 + 8 + 10)
Odd numbers ka sum: 25 (1 + 3 + 5 + 7 + 9)`
        },
        "practiceProblems": [
          "🔹 Range ke even/odd numbers ko separate arrays me store karo",
          "🔹 Even/odd numbers ki count bhi calculate karo",
          "🔹 Range ke numbers ko reverse order me print karo",
          "🔹 Even/odd numbers ka average calculate karo"
        ],
        "interviewQuestions": [
          "🔹 Large ranges ke liye konsa approach best rahega aur kyu?",
          "🔹 Mathematical formula approach ki limitations kya hain?",
          "🔹 Memory optimization ke liye kya steps le sakte hain?",
          "🔹 Time complexity ko kaise improve kar sakte hain?"
        ],
        "comparisonTable": [
          {
            "approach": "For Loop",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Simple and easy to understand",
            "cons": "Linear time complexity"
          },
          {
            "approach": "Array Methods",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Clean and functional code",
            "cons": "Extra space for array creation"
          },
          {
            "approach": "Mathematical Formula",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Most efficient for large ranges",
            "cons": "Complex implementation"
          }
        ],
        "conclusion": [
          "🔹 Small ranges ke liye for loop approach simple hai",
          "🔹 Array methods modern aur readable code provide karte hain",
          "🔹 Large ranges ke liye mathematical formula best hai",
          "🔹 Use case ke according approach select karna important hai"
        ]
      },
      // Q-9. Print All the Factors of a Number
      {
        "title": "Print All the Factors of a Number",
        "description": "Ek number ke saare factors (divisors) find karenge aur print karenge.",
        "problemStatement": "Ek function likho jo ek number accept kare aur uske saare factors find karke print kare.",
        "algorithm": [
          "🔹 User se number input lo",
          "🔹 1 se lekar number tak iterate karo",
          "🔹 Check karo konse numbers divide karte hain without remainder",
          "🔹 Different approaches implement karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using Simple Loop",
              "approach": ["🔹 Basic loop approach to find factors"],
              "code": `
function findFactors(num) {
    const factors = [];
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = findFactors(number);
console.log(\`Factors of \${number} are: \${result.join(", ")}\`);`,
              "explanation": [
                "🔹 Simple iteration from 1 to number",
                "🔹 Modulo operator to check divisibility",
                "🔹 Store factors in array"
              ]
            },
            {
              "method": "Method 2: Using Square Root Optimization",
              "approach": ["🔹 Optimized approach using square root property"],
              "code": `
function findFactorsOptimized(num) {
    const factors = [];
    // Only need to check up to square root
    for(let i = 1; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            factors.push(i);
            if(i !== num/i) { // Avoid duplicates for perfect squares
                factors.push(num/i);
            }
        }
    }
    return factors.sort((a, b) => a - b);
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = findFactorsOptimized(number);
console.log(\`Factors of \${number} are: \${result.join(", ")}\`);`,
              "explanation": [
                "🔹 Only check up to square root of number",
                "🔹 Add both factor pairs at once",
                "🔹 Sort factors in ascending order"
              ]
            },
            {
              "method": "Method 3: Using Array Methods",
              "approach": ["🔹 Modern JS approach using array methods"],
              "code": `
function findFactorsArray(num) {
    return Array.from(
        {length: num}, 
        (_, i) => i + 1
    ).filter(i => num % i === 0);
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = findFactorsArray(number);
console.log(\`Factors of \${number} are: \${result.join(", ")}\`);`,
              "explanation": [
                "🔹 Create array of numbers from 1 to n",
                "🔹 Use filter to find factors",
                "🔹 Modern and functional approach"
              ]
            }
          ],
          "output": `
Example Output:
Enter a number: 12
Factors of 12 are: 1, 2, 3, 4, 6, 12`
        },
        "practiceProblems": [
          "🔹 Find prime factors of a number",
          "🔹 Count total number of factors",
          "🔹 Check if number is perfect (sum of factors equals number)",
          "🔹 Find common factors of two numbers"
        ],
        "interviewQuestions": [
          "🔹 How can we optimize factor finding for large numbers?",
          "🔹 What's the significance of square root in factor finding?",
          "🔹 How would you handle very large numbers?",
          "🔹 Compare time complexity of different approaches"
        ],
        "comparisonTable": [
          {
            "approach": "Simple Loop",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k) where k is number of factors",
            "pros": "Simple to understand and implement",
            "cons": "Not efficient for large numbers"
          },
          {
            "approach": "Square Root",
            "timeComplexity": "O(√n)",
            "spaceComplexity": "O(k)",
            "pros": "Much more efficient",
            "cons": "Requires sorting of results"
          },
          {
            "approach": "Array Methods",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Clean and functional code",
            "cons": "Higher memory usage"
          }
        ],
        "conclusion": [
          "🔹 Square root method is most efficient for large numbers",
          "🔹 Simple loop is good for small numbers and learning",
          "🔹 Consider memory usage vs performance tradeoffs",
          "🔹 Input validation is important"
        ]
      },
      // Q-10. Write a Program to Calculate a^b (Power Function)
      {
        "title": "Calculate Power (a^b)",
        "description": "Calculate power of a number using different approaches (a raised to power b).",
        "problemStatement": "Ek function likho jo do numbers a (base) aur b (exponent) accept kare aur a^b calculate kare.",
        "algorithm": [
          "🔹 User se base (a) aur exponent (b) input lo",
          "🔹 Handle negative exponents",
          "🔹 Different approaches se power calculate karo",
          "🔹 Large numbers ke liye optimization karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using Math.pow()",
              "approach": ["🔹 Built-in Math.pow() function ka use karenge"],
              "code": `
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

// Example Usage
const base = parseFloat(prompt("Enter base number:"));
const exponent = parseInt(prompt("Enter exponent:"));
const result = calculatePower(base, exponent);
console.log(\`\${base}^\${exponent} = \${result}\`);`,
              "explanation": [
                "🔹 Simple and direct approach",
                "🔹 Handles decimal bases and negative exponents",
                "🔹 Most efficient built-in implementation"
              ]
            },
            {
              "method": "Method 2: Using Loop",
              "approach": ["🔹 Manual multiplication using loop"],
              "code": `
function calculatePowerLoop(base, exponent) {
    if (exponent === 0) return 1;
    
    let result = 1;
    const absExp = Math.abs(exponent);
    
    for(let i = 1; i <= absExp; i++) {
        result *= base;
    }
    
    return exponent > 0 ? result : 1/result;
}

// Example Usage
const base = parseFloat(prompt("Enter base number:"));
const exponent = parseInt(prompt("Enter exponent:"));
const result = calculatePowerLoop(base, exponent);
console.log(\`\${base}^\${exponent} = \${result}\`);`,
              "explanation": [
                "🔹 Handles both positive and negative exponents",
                "🔹 Uses loop for multiplication",
                "🔹 Good for understanding the concept"
              ]
            },
            {
              "method": "Method 3: Using Recursion",
              "approach": ["🔹 Recursive approach for power calculation"],
              "code": `
function calculatePowerRecursive(base, exponent) {
    // Base cases
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    
    // Recursive case for positive exponents
    if (exponent > 0) {
        return base * calculatePowerRecursive(base, exponent - 1);
    }
    
    // Handle negative exponents
    return 1 / calculatePowerRecursive(base, -exponent);
}

// Example Usage
const base = parseFloat(prompt("Enter base number:"));
const exponent = parseInt(prompt("Enter exponent:"));
const result = calculatePowerRecursive(base, exponent);
console.log(\`\${base}^\${exponent} = \${result}\`);`,
              "explanation": [
                "🔹 Elegant recursive solution",
                "🔹 Handles negative exponents",
                "🔹 Good for understanding recursion"
              ]
            },
            {
              "method": "Method 4: Using Binary Exponentiation",
              "approach": ["🔹 Optimized approach for large exponents"],
              "code": `
function calculatePowerBinary(base, exponent) {
    if (exponent === 0) return 1;
    
    let absExp = Math.abs(exponent);
    let result = 1;
    
    while (absExp > 0) {
        if (absExp & 1) {  // If exponent is odd
            result *= base;
        }
        base *= base;
        absExp >>= 1;  // Divide exponent by 2
    }
    
    return exponent > 0 ? result : 1/result;
}

// Example Usage
const base = parseFloat(prompt("Enter base number:"));
const exponent = parseInt(prompt("Enter exponent:"));
const result = calculatePowerBinary(base, exponent);
console.log(\`\${base}^\${exponent} = \${result}\`);`,
              "explanation": [
                "🔹 Most efficient for large exponents",
                "🔹 Uses binary representation of exponent",
                "🔹 Reduces number of multiplications"
              ]
            }
          ],
          "output": `
Example Output:
Enter base number: 2
Enter exponent: 3
2^3 = 8`
        },
        "practiceProblems": [
          "🔹 Calculate power for decimal numbers",
          "🔹 Implement power function for large numbers using BigInt",
          "🔹 Handle edge cases (0^0, negative bases)",
          "🔹 Compare performance of different methods"
        ],
        "interviewQuestions": [
          "🔹 What are the advantages of binary exponentiation?",
          "🔹 How would you handle overflow cases?",
          "🔹 Compare time complexities of different approaches",
          "🔹 How does JavaScript handle floating-point precision in power calculations?"
        ],
        "comparisonTable": [
          {
            "approach": "Math.pow()",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)",
            "pros": "Built-in, handles all cases",
            "cons": "Implementation details hidden"
          },
          {
            "approach": "Loop",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Simple to understand",
            "cons": "Slow for large exponents"
          },
          {
            "approach": "Recursion",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Elegant solution",
            "cons": "Stack overflow for large exponents"
          },
          {
            "approach": "Binary Exponentiation",
            "timeComplexity": "O(log n)",
            "spaceComplexity": "O(1)",
            "pros": "Most efficient for large numbers",
            "cons": "More complex implementation"
          }
        ],
        "conclusion": [
          "🔹 Math.pow() is best for general use",
          "🔹 Binary exponentiation for large numbers",
          "🔹 Consider precision requirements",
          "🔹 Handle edge cases carefully"
        ]
      },
      // Q-11. Sum of Digits
      {
        "title": "Sum of Digits",
        "description": "Number ke digits ka sum calculate karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo ek number accept kare aur uske saare digits ka sum calculate kare (Example: 123 = 1 + 2 + 3 = 6).",
        "algorithm": [
          "🔹 User se number input lo",
          "🔹 Number ke digits ko alag karo",
          "🔹 Digits ka sum calculate karo",
          "🔹 Different approaches implement karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using String Conversion",
              "approach": ["🔹 Number ko string me convert karke digits sum karenge"],
              "code": `
function sumOfDigits(num) {
    return Math.abs(num)
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = sumOfDigits(number);
console.log(\`Sum of digits in \${number} is: \${result}\`);`,
              "explanation": [
                "🔹 Math.abs() se negative numbers handle karte hain",
                "🔹 toString() se number ko string me convert karte hain",
                "🔹 split() se digits ko array me convert karte hain",
                "🔹 reduce() se sum calculate karte hain"
              ]
            },
            {
              "method": "Method 2: Using Mathematical Operations",
              "approach": ["🔹 Division and modulo operators ka use karenge"],
              "code": `
function sumOfDigits(num) {
    let sum = 0;
    num = Math.abs(num);
    
    while(num > 0) {
        sum += num % 10;    // Get last digit
        num = Math.floor(num / 10);  // Remove last digit
    }
    
    return sum;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = sumOfDigits(number);
console.log(\`Sum of digits in \${number} is: \${result}\`);`,
              "explanation": [
                "🔹 Modulo operator (%) se last digit nikaalte hain",
                "🔹 Division se remaining digits ko process karte hain",
                "🔹 Direct mathematical calculation"
              ]
            },
            {
              "method": "Method 3: Using Recursion",
              "approach": ["🔹 Recursive approach for calculating sum"],
              "code": `
function sumOfDigits(num) {
    // Handle negative numbers
    num = Math.abs(num);
    
    // Base case
    if(num < 10) return num;
    
    // Recursive case
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = sumOfDigits(number);
console.log(\`Sum of digits in \${number} is: \${result}\`);`,
              "explanation": [
                "🔹 Base case: single digit number ka sum wo khud hai",
                "🔹 Recursive case: last digit + remaining digits ka sum",
                "🔹 Clean and elegant recursive solution"
              ]
            }
          ],
          "output": `
Example Output:
Enter a number: 12345
Sum of digits in 12345 is: 15`
        },
        "practiceProblems": [
          "🔹 Calculate product of digits",
          "🔹 Find sum of even digits only",
          "🔹 Find sum of odd digits only",
          "🔹 Count digits where sum equals a given number"
        ],
        "interviewQuestions": [
          "🔹 Which approach would be best for very large numbers?",
          "🔹 How would you handle floating point numbers?",
          "🔹 What are the pros and cons of string conversion vs mathematical approach?",
          "🔹 How can we optimize the space complexity?"
        ],
        "comparisonTable": [
          {
            "approach": "String Conversion",
            "timeComplexity": "O(d) where d is number of digits",
            "spaceComplexity": "O(d)",
            "pros": "Easy to implement and understand",
            "cons": "Extra memory for string conversion"
          },
          {
            "approach": "Mathematical",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(1)",
            "pros": "Memory efficient",
            "cons": "May not handle very large numbers well"
          },
          {
            "approach": "Recursion",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(d)",
            "pros": "Clean and elegant code",
            "cons": "Stack space for recursion"
          }
        ],
        "conclusion": [
          "🔹 Mathematical approach is most memory efficient",
          "🔹 String conversion is most readable",
          "🔹 Consider number size when choosing approach",
          "🔹 Handle edge cases (negative numbers, zero)"
        ]
      },
      // Q-12. Reverse of a Number
      {
        "title": "Reverse of a Number",
        "description": "Number ko reverse karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo ek number accept kare aur us number ko reverse kare (Example: 123 -> 321).",
        "algorithm": [
          "🔹 User se number input lo",
          "🔹 Number ko reverse karne ke different approaches implement karo",
          "🔹 Handle edge cases (negative numbers, trailing zeros)",
          "🔹 Result return karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using String Conversion",
              "approach": ["🔹 Number ko string me convert karke reverse karenge"],
              "code": `
function reverseNumber(num) {
    // Handle negative numbers
    const isNegative = num < 0;
    num = Math.abs(num);
    
    // Convert to string, reverse it, and convert back to number
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    
    return isNegative ? -reversed : reversed;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = reverseNumber(number);
console.log(\`Reverse of \${number} is: \${result}\`);`,
              "explanation": [
                "🔹 Handle negative numbers separately",
                "🔹 toString() se number ko string me convert karte hain",
                "🔹 split(), reverse(), join() se reverse karte hain",
                "🔹 parseInt() se wapas number me convert karte hain"
              ]
            },
            {
              "method": "Method 2: Using Mathematical Operations",
              "approach": ["🔹 Mathematical operations ka use karke reverse karenge"],
              "code": `
function reverseNumber(num) {
    let reversed = 0;
    let number = Math.abs(num);
    
    while(number > 0) {
        reversed = (reversed * 10) + (number % 10);
        number = Math.floor(number / 10);
    }
    
    return num < 0 ? -reversed : reversed;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = reverseNumber(number);
console.log(\`Reverse of \${number} is: \${result}\`);`,
              "explanation": [
                "🔹 Modulo operator (%) se last digit extract karte hain",
                "🔹 Multiplication and addition se new number build karte hain",
                "🔹 Number ko gradually divide karke process karte hain"
              ]
            },
            {
              "method": "Method 3: Using Array Methods",
              "approach": ["🔹 Array methods ka use karke number reverse karenge"],
              "code": `
function reverseNumber(num) {
    // Handle negative numbers
    const isNegative = num < 0;
    num = Math.abs(num);
    
    // Convert to array of digits, reverse, and join back
    const reversed = Number(Array.from(String(num), Number).reverse().join(''));
    
    return isNegative ? -reversed : reversed;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = reverseNumber(number);
console.log(\`Reverse of \${number} is: \${result}\`);`,
              "explanation": [
                "🔹 Array.from() se digits ka array banate hain",
                "🔹 reverse() se array ko reverse karte hain",
                "🔹 join() and Number() se final result banate hain"
              ]
            }
          ],
          "output": `
Example Outputs:
Enter a number: 123
Reverse of 123 is: 321

Enter a number: -456
Reverse of -456 is: -654

Enter a number: 1200
Reverse of 1200 is: 21`
        },
        "practiceProblems": [
          "🔹 Handle numbers with trailing zeros",
          "🔹 Check if number is palindrome after reversing",
          "🔹 Handle floating point numbers",
          "🔹 Find sum of original and reversed number"
        ],
        "interviewQuestions": [
          "🔹 How would you handle integer overflow cases?",
          "🔹 Compare efficiency of different approaches",
          "🔹 How to handle very large numbers?",
          "🔹 What are the edge cases to consider?"
        ],
        "comparisonTable": [
          {
            "approach": "String Conversion",
            "timeComplexity": "O(d) where d is number of digits",
            "spaceComplexity": "O(d)",
            "pros": "Simple to implement and understand",
            "cons": "Extra memory for string conversion"
          },
          {
            "approach": "Mathematical",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(1)",
            "pros": "Memory efficient, no string conversion",
            "cons": "Need to handle edge cases carefully"
          },
          {
            "approach": "Array Methods",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(d)",
            "pros": "Clean and modern approach",
            "cons": "Multiple conversions needed"
          }
        ],
        "conclusion": [
          "🔹 Mathematical approach is most efficient",
          "🔹 String conversion is most readable",
          "🔹 Important to handle negative numbers and trailing zeros",
          "🔹 Consider number size and overflow cases"
        ]
      },
      // Q-13. Strong Number
      {
        "title": "Strong Number",
        "description": "Strong number check karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo check kare ki kya given number strong number hai. Strong number wo hota hai jiska digits ke factorials ka sum original number ke equal hota hai (Example: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145).",
        "algorithm": [
          "🔹 User se number input lo",
          "🔹 Number ke har digit ka factorial calculate karo",
          "🔹 Factorials ka sum karo",
          "🔹 Sum ko original number se compare karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using String Conversion",
              "approach": ["🔹 Number ko string me convert karke digits ko process karenge"],
              "code": `
function isStrongNumber(num) {
    // Helper function to calculate factorial
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
    
    // Convert number to string and process each digit
    const sum = Math.abs(num)
        .toString()
        .split('')
        .reduce((sum, digit) => sum + factorial(parseInt(digit)), 0);
    
    return sum === num;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = isStrongNumber(number);
console.log(\`\${number} is\${result ? '' : ' not'} a Strong Number\`);`,
              "explanation": [
                "🔹 Helper function factorial() calculate karta hai digit ka factorial",
                "🔹 toString() se number ko string me convert karte hain",
                "🔹 reduce() se factorials ka sum calculate karte hain",
                "🔹 Original number se compare karte hain"
              ]
            },
            {
              "method": "Method 2: Using Mathematical Operations",
              "approach": ["🔹 Mathematical operations ka use karke digits ko process karenge"],
              "code": `
function isStrongNumber(num) {
    // Helper function to calculate factorial
    function factorial(n) {
        let fact = 1;
        for(let i = 2; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
    
    let sum = 0;
    let temp = Math.abs(num);
    
    while(temp > 0) {
        const digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
    
    return sum === num;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = isStrongNumber(number);
console.log(\`\${number} is\${result ? '' : ' not'} a Strong Number\`);`,
              "explanation": [
                "🔹 Loop based factorial calculation",
                "🔹 Modulo operator se digits extract karte hain",
                "🔹 Running sum maintain karte hain",
                "🔹 Space efficient approach"
              ]
            },
            {
              "method": "Method 3: Using Precomputed Factorials",
              "approach": ["🔹 Factorials ko precompute karke performance improve karenge"],
              "code": `
function isStrongNumber(num) {
    // Precomputed factorials for 0-9
    const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    
    let sum = 0;
    let temp = Math.abs(num);
    
    while(temp > 0) {
        const digit = temp % 10;
        sum += factorials[digit];
        if(sum > num) return false; // Early exit optimization
        temp = Math.floor(temp / 10);
    }
    
    return sum === num;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = isStrongNumber(number);
console.log(\`\${number} is\${result ? '' : ' not'} a Strong Number\`);`,
              "explanation": [
                "🔹 Precomputed factorials array use karte hain",
                "🔹 Early exit optimization implement ki hai",
                "🔹 Most efficient approach hai",
                "🔹 Memory vs speed tradeoff use kiya hai"
              ]
            }
          ],
          "output": `
Example Outputs:
Enter a number: 145
145 is a Strong Number

Enter a number: 123
123 is not a Strong Number

Enter a number: 40585
40585 is a Strong Number`
        },
        "practiceProblems": [
          "🔹 Given range me saare strong numbers find karo",
          "🔹 Largest strong number less than given number find karo",
          "🔹 Check if number's reverse is also a strong number",
          "🔹 First n strong numbers generate karo"
        ],
        "interviewQuestions": [
          "🔹 Strong number validation ke liye most efficient approach kya hoga?",
          "🔹 Precomputed factorials approach me space-time tradeoff explain karo",
          "🔹 Strong numbers ki properties discuss karo",
          "🔹 Optimization techniques kya apply kar sakte hain?"
        ],
        "comparisonTable": [
          {
            "approach": "String Conversion",
            "timeComplexity": "O(d) where d is number of digits",
            "spaceComplexity": "O(d)",
            "pros": "Easy to implement and understand",
            "cons": "Extra memory for string conversion"
          },
          {
            "approach": "Mathematical",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(1)",
            "pros": "Memory efficient",
            "cons": "Multiple calculations needed"
          },
          {
            "approach": "Precomputed Factorials",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(1)",
            "pros": "Most efficient, faster execution",
            "cons": "Fixed space overhead for factorial array"
          }
        ],
        "conclusion": [
          "🔹 Precomputed factorials approach is best for performance",
          "🔹 Mathematical approach is most memory efficient",
          "🔹 Early exit optimizations can improve performance",
          "🔹 Handle edge cases and validations properly"
        ]
      },
      // Q-14. Automorphic Number
      {
        "title": "Automorphic Number",
        "description": "Automorphic number check karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo check kare ki kya given number automorphic hai. Automorphic number wo hota hai jiska square us number ke last digits se match karta hai (Example: 25² = 625, which ends with 25).",
        "algorithm": [
          "🔹 User se number input lo",
          "🔹 Number ka square calculate karo",
          "🔹 Square ke last digits ko original number se compare karo",
          "🔹 Different approaches implement karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using String Manipulation",
              "approach": ["🔹 Number and square ko string me convert karke compare karenge"],
              "code": `
function isAutomorphic(num) {
    const square = (num * num).toString();
    const numStr = num.toString();
    
    // Check if square ends with original number
    return square.endsWith(numStr);
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = isAutomorphic(number);
console.log(\`\${number} is\${result ? '' : ' not'} an Automorphic Number\`);`,
              "explanation": [
                "🔹 Number ka square calculate karte hain",
                "🔹 endsWith() method se check karte hain ki square number se end hota hai ya nahi",
                "🔹 Simple and readable approach"
              ]
            },
            {
              "method": "Method 2: Using Mathematical Operations",
              "approach": ["🔹 Mathematical operations ka use karke last digits extract karenge"],
              "code": `
function isAutomorphic(num) {
    const square = num * num;
    let temp = num;
    let divisor = 1;
    
    // Calculate divisor based on number of digits
    while(temp > 0) {
        temp = Math.floor(temp / 10);
        divisor *= 10;
    }
    
    // Compare last digits of square with original number
    return square % divisor === num;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = isAutomorphic(number);
console.log(\`\${number} is\${result ? '' : ' not'} an Automorphic Number\`);`,
              "explanation": [
                "🔹 Divisor calculate karte hain number ke digits ke basis par",
                "🔹 Modulo operator se square ke last digits extract karte hain",
                "🔹 Memory efficient approach"
              ]
            },
            {
              "method": "Method 3: Using Regular Expression",
              "approach": ["🔹 Regular expression ka use karke pattern match karenge"],
              "code": `
function isAutomorphic(num) {
    const square = num * num;
    const pattern = new RegExp(\`\${num}$\`);
    
    return pattern.test(square.toString());
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = isAutomorphic(number);
console.log(\`\${number} is\ \${result ? '' : ' not'} an Automorphic Number\`);`,
              "explanation": [
                "🔹 RegExp pattern create karte hain number ke liye",
                "🔹 test() method se check karte hain ki square pattern se match karta hai ya nahi",
                "🔹 Flexible and powerful approach"
              ]
            }
          ],
          "output": `
Example Outputs:
Enter a number: 25
25 is an Automorphic Number (25² = 625)

Enter a number: 76
76 is an Automorphic Number (76² = 5776)

Enter a number: 12
12 is not an Automorphic Number (12² = 144)`
        },
        "practiceProblems": [
          "🔹 Given range me saare automorphic numbers find karo",
          "🔹 Check if square root of an automorphic number is also automorphic",
          "🔹 Find largest automorphic number with n digits",
          "🔹 Generate first n automorphic numbers"
        ],
        "interviewQuestions": [
          "🔹 Automorphic number check karne ke liye most efficient approach kya hoga?",
          "🔹 Very large numbers ke liye kaise handle karoge?",
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Edge cases and error handling kaise implement karoge?"
        ],
        "comparisonTable": [
          {
            "approach": "String Manipulation",
            "timeComplexity": "O(d) where d is number of digits",
            "spaceComplexity": "O(d)",
            "pros": "Simple to implement and understand",
            "cons": "Extra memory for string conversion"
          },
          {
            "approach": "Mathematical",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(1)",
            "pros": "Memory efficient, no string conversion",
            "cons": "More complex logic"
          },
          {
            "approach": "Regular Expression",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(d)",
            "pros": "Flexible and powerful",
            "cons": "RegExp overhead, may be slower"
          }
        ],
        "conclusion": [
          "🔹 String manipulation approach is most readable",
          "🔹 Mathematical approach is most memory efficient",
          "🔹 Consider number size when choosing approach",
          "🔹 Validate inputs and handle edge cases properly"
        ]
      }
    ],
  },
  // 3️⃣ Pattern Printing
  {
    category: "Pattern Printing",
    questions: [
      // Q-15. Right Angle Triangle
      {
        "title": "Right Angle Triangle Pattern",
        "description": "Right angle triangle pattern print karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo n rows ke liye right angle triangle pattern print kare. Pattern me stars (*) ya numbers ya alphabets use kar sakte hain.",
        "algorithm": [
          "🔹 User se number of rows (n) input lo",
          "🔹 Outer loop rows ke liye chalega (1 to n)",
          "🔹 Inner loop columns ke liye chalega (1 to current row number)",
          "🔹 Different patterns ke liye different characters print karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using Stars Pattern",
              "approach": ["🔹 Stars (*) ka use karke basic right angle triangle banayenge"],
              "code": `
function printStarPattern(n) {
    for(let i = 1; i <= n; i++) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printStarPattern(rows);`,
              "explanation": [
                "🔹 Outer loop rows control karta hai",
                "🔹 Inner loop current row ke according stars print karta hai",
                "🔹 Har row ke end me newline add hota hai"
              ]
            },
            {
              "method": "Method 2: Using Numbers Pattern",
              "approach": ["🔹 Numbers ka use karke pattern banayenge"],
              "code": `
function printNumberPattern(n) {
    for(let i = 1; i <= n; i++) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += j + ' ';  // Can also use i to print row number
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printNumberPattern(rows);`,
              "explanation": [
                "🔹 Numbers 1 se start karke print hote hain",
                "🔹 Har row me column number ya row number print kar sakte hain",
                "🔹 Space formatting for proper alignment"
              ]
            },
            {
              "method": "Method 3: Using Array Methods",
              "approach": ["🔹 Modern JavaScript array methods ka use karenge"],
              "code": `
function printPatternUsingArray(n) {
    Array.from({ length: n }, (_, i) => {
        const pattern = Array(i + 1).fill('*').join(' ');
        console.log(pattern);
    });
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printPatternUsingArray(rows);`,
              "explanation": [
                "🔹 Array.from() se rows create karte hain",
                "🔹 fill() and join() se pattern generate karte hain",
                "🔹 Modern and functional approach"
              ]
            },
            {
              "method": "Method 4: Using String Repeat",
              "approach": ["🔹 String repeat method ka use karke pattern banayenge"],
              "code": `
function printPatternUsingRepeat(n) {
    for(let i = 1; i <= n; i++) {
        console.log('* '.repeat(i));
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printPatternUsingRepeat(rows);`,
              "explanation": [
                "🔹 String.repeat() method se pattern generate hota hai",
                "🔹 Most concise approach",
                "🔹 Easy to modify pattern character"
              ]
            }
          ],
          "output": `
Example Output (n=5):
*
* *
* * *
* * * *
* * * * *

Number Pattern:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`
        },
        "practiceProblems": [
          "🔹 Alphabet pattern print karo (A, B, C...)",
          "🔹 Row number based pattern print karo",
          "🔹 Alternate characters ka pattern banao",
          "🔹 Custom character se pattern print karo"
        ],
        "interviewQuestions": [
          "🔹 Time complexity analysis karo different approaches ki",
          "🔹 Space optimization ke liye kya steps le sakte hain?",
          "🔹 Pattern printing me recursion ka use kaise kar sakte hain?",
          "🔹 Large input ke liye konsa approach best rahega?"
        ],
        "comparisonTable": [
          {
            "approach": "Using Nested Loops",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Simple to understand and implement",
            "cons": "More lines of code"
          },
          {
            "approach": "Using Array Methods",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Modern and functional",
            "cons": "May be slower for large inputs"
          },
          {
            "approach": "Using String Repeat",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Most concise solution",
            "cons": "Limited flexibility for complex patterns"
          }
        ],
        "conclusion": [
          "🔹 Nested loops approach is most flexible",
          "🔹 String repeat is most concise",
          "🔹 Choose approach based on pattern complexity",
          "🔹 Consider performance for large inputs"
        ]
      },
      // Q-16. Left Angle Triangle
      {
        "title": "Left Angle Triangle Pattern",
        "description": "Left angle triangle pattern print karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo n rows ke liye left angle triangle pattern print kare. Left angle triangle me spaces aur characters (stars/numbers/alphabets) ka combination use hota hai.",
        "algorithm": [
          "🔹 User se number of rows (n) input lo",
          "🔹 Outer loop rows ke liye (1 to n)",
          "🔹 Spaces print karo (n-i) times",
          "🔹 Characters print karo i times",
          "🔹 Different patterns implement karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using Stars Pattern",
              "approach": ["🔹 Spaces and stars ka combination use karenge"],
              "code": `
function printLeftTriangle(n) {
    for(let i = 1; i <= n; i++) {
        // Print spaces
        let spaces = ' '.repeat(n - i);
        // Print stars
        let stars = '*'.repeat(i);
        console.log(spaces + stars);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printLeftTriangle(rows);`,
              "explanation": [
                "🔹 spaces variable me (n-i) spaces store karte hain",
                "🔹 stars variable me i stars store karte hain",
                "🔹 spaces + stars ko combine karke print karte hain"
              ]
            },
            {
              "method": "Method 2: Using Nested Loops",
              "approach": ["🔹 Traditional nested loops approach"],
              "code": `
function printLeftTriangle(n) {
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        // Print spaces
        for(let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        // Print stars
        for(let k = 1; k <= i; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printLeftTriangle(rows);`,
              "explanation": [
                "🔹 First inner loop spaces print karta hai",
                "🔹 Second inner loop stars print karta hai",
                "🔹 More control over pattern formatting"
              ]
            },
            {
              "method": "Method 3: Using Array Methods",
              "approach": ["🔹 Modern array methods ka use karenge"],
              "code": `
function printLeftTriangle(n) {
    Array.from({ length: n }, (_, i) => {
        const spaces = ' '.repeat(n - i - 1);
        const pattern = '*'.repeat(i + 1);
        console.log(spaces + pattern);
    });
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printLeftTriangle(rows);`,
              "explanation": [
                "🔹 Array.from() se iterations handle karte hain",
                "🔹 repeat() method se spaces aur pattern generate karte hain",
                "🔹 Functional programming approach"
              ]
            },
            {
              "method": "Method 4: Using Numbers Pattern",
              "approach": ["🔹 Numbers ka use karke left triangle banayenge"],
              "code": `
function printNumberLeftTriangle(n) {
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        // Print spaces
        pattern += ' '.repeat(n - i);
        // Print numbers
        for(let j = 1; j <= i; j++) {
            pattern += j;
        }
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printNumberLeftTriangle(rows);`,
              "explanation": [
                "🔹 Spaces ke baad numbers print karte hain",
                "🔹 Numbers 1 se i tak print hote hain",
                "🔹 Different pattern variation"
              ]
            }
          ],
          "output": `
Example Output (n=5):
    *
   **
  ***
 ****
*****

Number Pattern:
    1
   12
  123
 1234
12345`
        },
        "practiceProblems": [
          "🔹 Different characters (©, #, @, etc.) se pattern banao",
          "🔹 Row number based pattern implement karo",
          "🔹 Alphabet pattern banao (A, AB, ABC...)",
          "🔹 Alternate characters use karke pattern banao"
        ],
        "interviewQuestions": [
          "🔹 Space complexity optimize karne ke ways discuss karo",
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Pattern printing me string methods vs loops - pros and cons",
          "🔹 Large input handling ke liye best approach konsa rahega?"
        ],
        "comparisonTable": [
          {
            "approach": "String Repeat",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Clean and concise code",
            "cons": "Limited pattern flexibility"
          },
          {
            "approach": "Nested Loops",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "More control over pattern",
            "cons": "More complex code"
          },
          {
            "approach": "Array Methods",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Modern and functional",
            "cons": "Might be slower for large inputs"
          }
        ],
        "conclusion": [
          "🔹 String repeat approach is most concise",
          "🔹 Nested loops provide more control",
          "🔹 Choose method based on pattern requirements",
          "🔹 Consider readability vs performance tradeoff"
        ]
      },
      // Q-17. Number Pattern
      {
        "title": "Number Pattern",
        "description": "Different types ke number patterns print karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo n rows ke liye different types ke number patterns print kare. Various number patterns jaise sequential, row number, multiplication table pattern implement karo.",
        "algorithm": [
          "🔹 User se number of rows (n) input lo",
          "🔹 Different pattern types ke liye separate functions banao",
          "🔹 Nested loops ka use karke pattern print karo",
          "🔹 Pattern format ke hisab se numbers arrange karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Sequential Number Pattern",
              "approach": ["🔹 1 se start karke sequential numbers print karenge"],
              "code": `
function printSequentialPattern(n) {
    let num = 1;
    for(let i = 1; i <= n; i++) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += num + ' ';
            num++;
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printSequentialPattern(rows);`,
              "explanation": [
                "🔹 Single variable use karke sequential numbers print karte hain",
                "🔹 Har iteration me number increment hota hai",
                "🔹 Right aligned format maintain karte hain"
              ]
            },
            {
              "method": "Method 2: Row Number Pattern",
              "approach": ["🔹 Har row me row number repeat karenge"],
              "code": `
function printRowNumberPattern(n) {
    for(let i = 1; i <= n; i++) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printRowNumberPattern(rows);`,
              "explanation": [
                "🔹 Current row number (i) ko repeat karte hain",
                "🔹 Row length row number ke equal hoti hai",
                "🔹 Simple and symmetric pattern banta hai"
              ]
            },
            {
              "method": "Method 3: Pascal Triangle Pattern",
              "approach": ["🔹 Pascal triangle ka number pattern banayenge"],
              "code": `
function printPascalPattern(n) {
    for(let i = 0; i < n; i++) {
        let number = 1;
        let row = '';
        
        // Add spaces for alignment
        row += ' '.repeat(n - i);
        
        for(let j = 0; j <= i; j++) {
            row += number + ' ';
            number = number * (i - j) / (j + 1);
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printPascalPattern(rows);`,
              "explanation": [
                "🔹 Binomial coefficient formula use karte hain",
                "🔹 Spaces add karke center alignment maintain karte hain",
                "🔹 Complex but mathematical pattern generate hota hai"
              ]
            },
            {
              "method": "Method 4: Multiplication Table Pattern",
              "approach": ["🔹 Row number ka multiplication table print karenge"],
              "code": `
function printMultiplicationPattern(n) {
    for(let i = 1; i <= n; i++) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += (i * j) + ' ';
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printMultiplicationPattern(rows);`,
              "explanation": [
                "🔹 Row number aur column number ka product print karte hain",
                "🔹 Multiplication table pattern generate hota hai",
                "🔹 Educational pattern for learning tables"
              ]
            }
          ],
          "output": `
Example Outputs:

Sequential Pattern (n=4):
1
2 3
4 5 6
7 8 9 10

Row Number Pattern (n=4):
1
2 2
3 3 3
4 4 4 4

Pascal Pattern (n=4):
   1
  1 1
 1 2 1
1 3 3 1

Multiplication Pattern (n=4):
1
2 4
3 6 9
4 8 12 16`
        },
        "practiceProblems": [
          "🔹 Fibonacci sequence pattern implement karo",
          "🔹 Alternate odd-even number pattern banao",
          "🔹 Prime number pattern generate karo",
          "🔹 Number pattern ko reverse order me print karo"
        ],
        "interviewQuestions": [
          "🔹 Different number patterns ki time complexity analyze karo",
          "🔹 Pattern printing me space optimization kaise kar sakte hain?",
          "🔹 Large numbers ke patterns me precision kaise maintain karein?",
          "🔹 Pattern alignment ke liye best practices kya hain?"
        ],
        "comparisonTable": [
          {
            "approach": "Sequential Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(1)",
            "pros": "Simple to implement, natural sequence",
            "cons": "Limited to sequential numbers only"
          },
          {
            "approach": "Row Number Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(1)",
            "pros": "Easy to understand, symmetric",
            "cons": "Repetitive numbers in each row"
          },
          {
            "approach": "Pascal Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(1)",
            "pros": "Mathematical significance",
            "cons": "Complex calculation for each number"
          },
          {
            "approach": "Multiplication Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(1)",
            "pros": "Educational value, useful pattern",
            "cons": "Numbers can become large quickly"
          }
        ],
        "conclusion": [
          "🔹 Different patterns serve different purposes",
          "🔹 Choose pattern based on requirement",
          "🔹 Consider number size and formatting",
          "🔹 Optimize space and time complexity where possible"
        ]
      },
      // Q-18. Alphabet Pattern
      {
        "title": "Alphabet Pattern",
        "description": "Different types ke alphabet patterns print karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo n rows ke liye different types ke alphabet patterns print kare. Various patterns jaise sequential alphabets, repeated alphabets, aur diagonal patterns implement karo.",
        "algorithm": [
          "🔹 User se number of rows (n) input lo",
          "🔹 Different alphabet patterns ke liye separate functions banao",
          "🔹 ASCII values ya direct alphabets ka use karo",
          "🔹 Pattern format ke hisab se alphabets arrange karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Sequential Alphabet Pattern",
              "approach": ["🔹 A se start karke sequential alphabets print karenge"],
              "code": `
function printAlphabetPattern(n) {
    for(let i = 0; i < n; i++) {
        let row = '';
        for(let j = 0; j <= i; j++) {
            // Convert ASCII to alphabet (65 is ASCII for 'A')
            row += String.fromCharCode(65 + j) + ' ';
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printAlphabetPattern(rows);`,
              "explanation": [
                "🔹 ASCII value 65 se start karke alphabets generate karte hain",
                "🔹 String.fromCharCode() se ASCII ko alphabet me convert karte hain",
                "🔹 Har row me increasing alphabets print hote hain"
              ]
            },
            {
              "method": "Method 2: Row-wise Alphabet Pattern",
              "approach": ["🔹 Har row me same alphabet repeat karenge"],
              "code": `
function printRowAlphabetPattern(n) {
    for(let i = 0; i < n; i++) {
        let row = '';
        // Current row's alphabet
        const currentChar = String.fromCharCode(65 + i);
        
        for(let j = 0; j <= i; j++) {
            row += currentChar + ' ';
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printRowAlphabetPattern(rows);`,
              "explanation": [
                "🔹 Har row ke liye ek fixed alphabet use karte hain",
                "🔹 Row number ke according alphabet select hota hai",
                "🔹 Simple and symmetric pattern banta hai"
              ]
            },
            {
              "method": "Method 3: Reverse Alphabet Pattern",
              "approach": ["🔹 Z se start karke reverse order me alphabets print karenge"],
              "code": `
function printReverseAlphabetPattern(n) {
    for(let i = 0; i < n; i++) {
        let row = '';
        for(let j = 0; j <= i; j++) {
            // Start from 'Z' (ASCII 90) and go backwards
            row += String.fromCharCode(90 - j) + ' ';
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printReverseAlphabetPattern(rows);`,
              "explanation": [
                "🔹 ASCII value 90 ('Z') se start karke reverse order me print karte hain",
                "🔹 Decreasing order me alphabets arrange hote hain",
                "🔹 Different variation of alphabet pattern"
              ]
            },
            {
              "method": "Method 4: Diagonal Alphabet Pattern",
              "approach": ["🔹 Diagonal format me alphabets print karenge"],
              "code": `
function printDiagonalAlphabetPattern(n) {
    for(let i = 0; i < n; i++) {
        let row = '';
        // Add spaces for alignment
        row += ' '.repeat(n - i - 1);
        
        // Print alphabet
        row += String.fromCharCode(65 + i);
        
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printDiagonalAlphabetPattern(rows);`,
              "explanation": [
                "🔹 Spaces add karke diagonal alignment create karte hain",
                "🔹 Single alphabet per row print hota hai",
                "🔹 Clean and minimal pattern"
              ]
            }
          ],
          "output": `
Example Outputs:

Sequential Pattern (n=5):
A
A B
A B C
A B C D
A B C D E

Row Pattern (n=5):
A
B B
C C C
D D D D
E E E E E

Reverse Pattern (n=5):
Z
Z Y
Z Y X
Z Y X W
Z Y X W V

Diagonal Pattern (n=5):
    A
   B
  C
 D
E`
        },
        "practiceProblems": [
          "🔹 Vowels only pattern implement karo",
          "🔹 Alternate case pattern banao (aAbB...)",
          "🔹 Diamond shape me alphabet pattern banao",
          "🔹 Spiral format me alphabets print karo"
        ],
        "interviewQuestions": [
          "🔹 ASCII values vs direct character usage - pros and cons",
          "🔹 Pattern spacing and alignment ke best practices",
          "🔹 Memory optimization for large patterns",
          "🔹 Unicode characters ke sath pattern kaise handle karenge?"
        ],
        "comparisonTable": [
          {
            "approach": "Sequential Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(1)",
            "pros": "Easy to understand, natural progression",
            "cons": "Limited to 26 letters"
          },
          {
            "approach": "Row Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(1)",
            "pros": "Simple and symmetric",
            "cons": "Repetitive characters"
          },
          {
            "approach": "Reverse Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(1)",
            "pros": "Unique variation",
            "cons": "Might be confusing to read"
          },
          {
            "approach": "Diagonal Pattern",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Clean and minimal",
            "cons": "Limited character display"
          }
        ],
        "conclusion": [
          "🔹 ASCII values provide systematic way to generate alphabets",
          "🔹 Consider pattern readability and aesthetics",
          "🔹 Handle alphabet wrap-around cases (after Z)",
          "🔹 Optimize space usage in pattern printing"
        ]
      },
      // Q-19. Inverted Right Angle Triangle
      {
        "title": "Inverted Right Angle Triangle Pattern",
        "description": "Inverted right angle triangle pattern print karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo n rows ke liye inverted right angle triangle pattern print kare. Pattern me stars (*) ya numbers ya alphabets use kar sakte hain.",
        "algorithm": [
          "🔹 User se number of rows (n) input lo",
          "🔹 Outer loop n se 1 tak decreasing order me chalega",
          "🔹 Inner loop current row number tak chalega",
          "🔹 Different patterns ke liye characters print karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using Stars Pattern",
              "approach": ["🔹 Stars (*) ka use karke inverted triangle banayenge"],
              "code": `
function printInvertedStarPattern(n) {
    for(let i = n; i >= 1; i--) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printInvertedStarPattern(rows);`,
              "explanation": [
                "🔹 Outer loop n se 1 tak decrement hota hai",
                "🔹 Inner loop current row (i) times stars print karta hai",
                "🔹 Har row me stars ki count decrease hoti hai"
              ]
            },
            {
              "method": "Method 2: Using Numbers Pattern",
              "approach": ["🔹 Numbers ka use karke inverted pattern banayenge"],
              "code": `
function printInvertedNumberPattern(n) {
    for(let i = n; i >= 1; i--) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += j + ' ';  // Can also use i to print row number
        }
        console.log(row);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printInvertedNumberPattern(rows);`,
              "explanation": [
                "🔹 Numbers 1 se i tak print hote hain har row me",
                "🔹 Row length gradually decrease hoti hai",
                "🔹 Can use row number (i) instead of column number (j)"
              ]
            },
            {
              "method": "Method 3: Using String Repeat",
              "approach": ["🔹 String repeat method ka use karke pattern banayenge"],
              "code": `
function printInvertedPatternUsingRepeat(n) {
    for(let i = n; i >= 1; i--) {
        console.log('* '.repeat(i));
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printInvertedPatternUsingRepeat(rows);`,
              "explanation": [
                "🔹 String.repeat() method se pattern generate hota hai",
                "🔹 Most concise implementation",
                "🔹 Easy to modify pattern character"
              ]
            },
            {
              "method": "Method 4: Using Array Methods",
              "approach": ["🔹 Modern array methods ka use karenge"],
              "code": `
function printInvertedPatternUsingArray(n) {
    Array.from({ length: n }, (_, i) => {
        const stars = Array(n - i).fill('*').join(' ');
        console.log(stars);
    });
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printInvertedPatternUsingArray(rows);`,
              "explanation": [
                "🔹 Array.from() se iterations handle karte hain",
                "🔹 fill() and join() se pattern generate karte hain",
                "🔹 Functional programming approach"
              ]
            }
          ],
          "output": `
Example Output (n=5):
* * * * *
* * * *
* * *
* *
*

Number Pattern (n=5):
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1`
        },
        "practiceProblems": [
          "🔹 Alphabet pattern banao (A B C D...)",
          "🔹 Row number based inverted pattern banao",
          "🔹 Custom characters se pattern banao",
          "🔹 Right-aligned inverted pattern implement karo"
        ],
        "interviewQuestions": [
          "🔹 Different approaches ki space complexity compare karo",
          "🔹 Large input ke liye konsa approach best rahega?",
          "🔹 Pattern printing me memory optimization ke techniques kya hain?",
          "🔹 Inverted vs normal triangle pattern me kya differences hain?"
        ],
        "comparisonTable": [
          {
            "approach": "Using Nested Loops",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Simple to understand and implement",
            "cons": "More lines of code"
          },
          {
            "approach": "String Repeat",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Most concise solution",
            "cons": "Limited pattern flexibility"
          },
          {
            "approach": "Array Methods",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Modern and functional approach",
            "cons": "May be slower for large inputs"
          }
        ],
        "conclusion": [
          "🔹 String repeat approach is most concise",
          "🔹 Nested loops provide more control over pattern",
          "🔹 Consider input size when choosing approach",
          "🔹 Pattern flexibility vs code simplicity tradeoff"
        ]
      },
      // Q-20. Pyramid Patterns
      {
        "title": "Pyramid Patterns",
        "description": "Different types ke pyramid patterns print karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo n rows ke liye pyramid pattern print kare. Pattern me spaces aur characters (stars/numbers/alphabets) ka symmetrical arrangement hona chahiye.",
        "algorithm": [
          "🔹 User se number of rows (n) input lo",
          "🔹 Outer loop rows ke liye (1 to n)",
          "🔹 Leading spaces print karo (n-i) times",
          "🔹 Characters print karo (2*i-1) times",
          "🔹 Different patterns ke liye characters vary karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Star Pyramid Pattern",
              "approach": ["🔹 Stars (*) ka use karke basic pyramid pattern banayenge"],
              "code": `
function printStarPyramid(n) {
    for(let i = 1; i <= n; i++) {
        // Print leading spaces
        let spaces = ' '.repeat(n - i);
        // Print stars
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printStarPyramid(rows);`,
              "explanation": [
                "🔹 Leading spaces se pattern center align hota hai",
                "🔹 Stars ki count odd numbers (1, 3, 5...) ke pattern me badhti hai",
                "🔹 Har row me symmetrical pattern banta hai"
              ]
            },
            {
              "method": "Method 2: Number Pyramid Pattern",
              "approach": ["🔹 Numbers ka use karke pyramid pattern banayenge"],
              "code": `
function printNumberPyramid(n) {
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        
        // Print leading spaces
        pattern += ' '.repeat(n - i);
        
        // Print increasing numbers
        for(let j = 1; j <= i; j++) {
            pattern += j + ' ';
        }
        
        // Print decreasing numbers
        for(let j = i - 1; j >= 1; j--) {
            pattern += j + ' ';
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printNumberPyramid(rows);`,
              "explanation": [
                "🔹 Numbers increasing order me left side print hote hain",
                "🔹 Numbers decreasing order me right side print hote hain",
                "🔹 Pattern palindrome jaisa dikhta hai"
              ]
            },
            {
              "method": "Method 3: Character Pyramid Pattern",
              "approach": ["🔹 Alphabets ka use karke pyramid pattern banayenge"],
              "code": `
function printCharacterPyramid(n) {
    for(let i = 0; i < n; i++) {
        let pattern = '';
        
        // Print leading spaces
        pattern += ' '.repeat(n - i - 1);
        
        // Print characters
        for(let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(65 + j) + ' ';
        }
        
        // Print reverse characters
        for(let j = i - 1; j >= 0; j--) {
            pattern += String.fromCharCode(65 + j) + ' ';
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printCharacterPyramid(rows);`,
              "explanation": [
                "🔹 ASCII values se alphabets generate karte hain",
                "🔹 Left side A se increasing order me alphabets print hote hain",
                "🔹 Right side decreasing order me alphabets print hote hain"
              ]
            },
            {
              "method": "Method 4: Special Pattern Pyramid",
              "approach": ["🔹 Special characters ya mixed pattern use karenge"],
              "code": `
function printSpecialPyramid(n) {
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        
        // Print leading spaces
        pattern += ' '.repeat(n - i);
        
        // Print special pattern
        for(let j = 1; j <= 2 * i - 1; j++) {
            if(j === 1 || j === 2 * i - 1 || i === n) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printSpecialPyramid(rows);`,
              "explanation": [
                "🔹 Hollow pyramid pattern generate karta hai",
                "🔹 Border pe stars aur beech me spaces print hote hain",
                "🔹 Last row me solid line print hoti hai"
              ]
            }
          ],
          "output": `
Example Outputs:

Star Pyramid (n=5):
    *
   ***
  *****
 *******
*********

Number Pyramid (n=4):
   1
  1 2 1
 1 2 3 2 1
1 2 3 4 3 2 1

Character Pyramid (n=4):
   A
  A B A
 A B C B A
A B C D C B A

Special Pyramid (n=5):
    *
   * *
  *   *
 *     *
*********`
        },
        "practiceProblems": [
          "🔹 Diamond pattern implement karo",
          "🔹 Hollow diamond pattern banao",
          "🔹 Number diamond with alternating patterns banao",
          "🔹 Double pyramid pattern implement karo"
        ],
        "interviewQuestions": [
          "🔹 Pyramid patterns me space complexity kaise optimize karenge?",
          "🔹 Different patterns ki time complexity analyze karo",
          "🔹 Large input handling ke liye kya approach best rahega?",
          "🔹 Pattern symmetry maintain karne ke liye kya points dhyan me rakhne chahiye?"
        ],
        "comparisonTable": [
          {
            "approach": "Star Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Simple and classic pattern",
            "cons": "Limited to single character"
          },
          {
            "approach": "Number Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "More complex and interesting",
            "cons": "Numbers can become large and misaligned"
          },
          {
            "approach": "Character Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Alphabetical sequence looks good",
            "cons": "Limited to 26 characters"
          },
          {
            "approach": "Special Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Flexible and customizable",
            "cons": "More complex logic needed"
          }
        ],
        "conclusion": [
          "🔹 Choose pattern type based on requirement",
          "🔹 Space management is crucial for alignment",
          "🔹 Consider readability and aesthetics",
          "🔹 Optimize for larger inputs if needed"
        ]
      },
      // Q-21. V Pattern
      {
        "title": "V Pattern",
        "description": "V shape pattern print karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo n rows ke liye V pattern print kare. Pattern me spaces aur characters ka arrangement V shape me hona chahiye.",
        "algorithm": [
          "🔹 User se number of rows (n) input lo",
          "🔹 Outer loop rows ke liye (1 to n)",
          "🔹 Left side spaces aur character print karo",
          "🔹 Middle spaces print karo (2*row-3)",
          "🔹 Right side character print karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using Stars Pattern",
              "approach": ["🔹 Stars (*) aur spaces ka use karke V shape banayenge"],
              "code": `
function printVPattern(n) {
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        
        // Print left spaces and star
        pattern += ' '.repeat(i - 1) + '*';
        
        // Print middle spaces and right star (except for last row)
        if(i !== n) {
            pattern += ' '.repeat(2 * (n - i) - 1) + '*';
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printVPattern(rows);`,
              "explanation": [
                "🔹 Left side me increasing spaces print hote hain",
                "🔹 Middle me decreasing spaces print hote hain",
                "🔹 Right side star last row ko chhod kar print hota hai"
              ]
            },
            {
              "method": "Method 2: Using Numbers Pattern",
              "approach": ["🔹 Numbers ka use karke V pattern banayenge"],
              "code": `
function printNumberVPattern(n) {
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        
        // Print left spaces and number
        pattern += ' '.repeat(i - 1) + i;
        
        // Print middle spaces and right number (except for last row)
        if(i !== n) {
            pattern += ' '.repeat(2 * (n - i) - 1) + i;
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printNumberVPattern(rows);`,
              "explanation": [
                "🔹 Row number ko pattern me use karte hain",
                "🔹 Spaces ki calculation same rehti hai",
                "🔹 Different visual effect create hota hai"
              ]
            },
            {
              "method": "Method 3: Using Character Pattern",
              "approach": ["🔹 Alphabets ka use karke V pattern banayenge"],
              "code": `
function printCharacterVPattern(n) {
    for(let i = 0; i < n; i++) {
        let pattern = '';
        
        // Print left spaces and character
        pattern += ' '.repeat(i) + String.fromCharCode(65 + i);
        
        // Print middle spaces and right character (except for last row)
        if(i !== n - 1) {
            pattern += ' '.repeat(2 * (n - i - 1) - 1) + String.fromCharCode(65 + i);
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
printCharacterVPattern(rows);`,
              "explanation": [
                "🔹 ASCII values se alphabets generate karte hain",
                "🔹 A se start karke sequential alphabets use hote hain",
                "🔹 Symmetric V shape pattern banta hai"
              ]
            },
            {
              "method": "Method 4: Using Custom Characters",
              "approach": ["🔹 User defined characters se V pattern banayenge"],
              "code": `
function printCustomVPattern(n, char) {
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        
        // Left side pattern
        for(let j = 1; j <= n * 2 - 1; j++) {
            if(j === i) pattern += char;
            else if(j === 2 * n - i) pattern += char;
            else pattern += ' ';
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter number of rows:"));
const character = prompt("Enter character to print:") || '*';
printCustomVPattern(rows, character);`,
              "explanation": [
                "🔹 User se custom character input lete hain",
                "🔹 Single loop me pure pattern ko handle karte hain",
                "🔹 More flexible approach for different characters"
              ]
            }
          ],
          "output": `
Example Outputs:

Star Pattern (n=5):
*       *
 *     *
  *   *
   * *
    *

Number Pattern (n=5):
1       1
 2     2
  3   3
   4 4
    5

Character Pattern (n=5):
A       A
 B     B
  C   C
   D D
    E`,
        },
        "practiceProblems": [
          "🔹 Inverted V pattern implement karo",
          "🔹 Double V pattern banao",
          "🔹 Hollow V pattern with borders banao",
          "🔹 Different characters ka alternate use karke V pattern banao"
        ],
        "interviewQuestions": [
          "🔹 V pattern ke liye space complexity kaise calculate karenge?",
          "🔹 Pattern me symmetry maintain karne ke liye kya points important hain?",
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Large input ke case me kya challenges ho sakte hain?"
        ],
        "comparisonTable": [
          {
            "approach": "Star Pattern",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Simple and classic implementation",
            "cons": "Limited to single character"
          },
          {
            "approach": "Number Pattern",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Shows row position clearly",
            "cons": "Numbers can affect alignment"
          },
          {
            "approach": "Character Pattern",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Alphabetical progression looks good",
            "cons": "Limited to 26 characters"
          },
          {
            "approach": "Custom Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Most flexible approach",
            "cons": "More complex implementation"
          }
        ],
        "conclusion": [
          "🔹 Space calculation is crucial for V pattern",
          "🔹 Choose appropriate character type based on requirement",
          "🔹 Consider pattern width for different inputs",
          "🔹 Maintain symmetry for visual appeal"
        ]
      },
      // Q-22. X Pattern
      {
        "title": "X Pattern",
        "description": "X shape pattern print karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo n rows ke liye X pattern print kare. Pattern me spaces aur characters ka arrangement X shape me hona chahiye.",
        "algorithm": [
          "🔹 User se number of rows (n) input lo (odd number hona chahiye)",
          "🔹 Outer loop rows ke liye (1 to n)",
          "🔹 Inner loop columns ke liye (1 to n)",
          "🔹 Check karo agar current position diagonal par hai",
          "🔹 Pattern me spaces aur characters arrange karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using Stars Pattern",
              "approach": ["🔹 Stars (*) aur spaces ka use karke X shape banayenge"],
              "code": `
function printXPattern(n) {
    // Check if n is odd
    if (n % 2 === 0) {
        console.log("Please enter an odd number");
        return;
    }
    
    for(let i = 0; i < n; i++) {
        let pattern = '';
        
        for(let j = 0; j < n; j++) {
            // Check if current position is on either diagonal
            if(i === j || i + j === n - 1) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter an odd number of rows:"));
printXPattern(rows);`,
              "explanation": [
                "🔹 Input validation for odd number",
                "🔹 Two diagonals ke intersection points par stars print hote hain",
                "🔹 Baki positions par spaces print hote hain"
              ]
            },
            {
              "method": "Method 2: Using Numbers Pattern",
              "approach": ["🔹 Row/Column numbers ka use karke X pattern banayenge"],
              "code": `
function printNumberXPattern(n) {
    if (n % 2 === 0) {
        console.log("Please enter an odd number");
        return;
    }
    
    for(let i = 0; i < n; i++) {
        let pattern = '';
        
        for(let j = 0; j < n; j++) {
            if(i === j) {
                pattern += i + 1;
            } else if(i + j === n - 1) {
                pattern += (n - i);
            } else {
                pattern += ' ';
            }
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter an odd number of rows:"));
printNumberXPattern(rows);`,
              "explanation": [
                "🔹 Forward diagonal par row number print hota hai",
                "🔹 Backward diagonal par reverse order numbers print hote hain",
                "🔹 Dynamic number pattern create hota hai"
              ]
            },
            {
              "method": "Method 3: Using Character Pattern",
              "approach": ["🔹 Alphabets ka use karke X pattern banayenge"],
              "code": `
function printCharacterXPattern(n) {
    if (n % 2 === 0) {
        console.log("Please enter an odd number");
        return;
    }
    
    for(let i = 0; i < n; i++) {
        let pattern = '';
        
        for(let j = 0; j < n; j++) {
            if(i === j || i + j === n - 1) {
                pattern += String.fromCharCode(65 + i);
            } else {
                pattern += ' ';
            }
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter an odd number of rows:"));
printCharacterXPattern(rows);`,
              "explanation": [
                "🔹 ASCII values se alphabets generate karte hain",
                "🔹 Diagonal positions par row ke according alphabet print hota hai",
                "🔹 A se start karke sequential alphabets use hote hain"
              ]
            },
            {
              "method": "Method 4: Using Custom Pattern",
              "approach": ["🔹 User defined character aur style se X pattern banayenge"],
              "code": `
function printCustomXPattern(n, char = '*', style = 'solid') {
    if (n % 2 === 0) {
        console.log("Please enter an odd number");
        return;
    }
    
    for(let i = 0; i < n; i++) {
        let pattern = '';
        
        for(let j = 0; j < n; j++) {
            if(style === 'hollow') {
                // For hollow pattern, print char only at edges
                if((i === j && (i === 0 || i === n-1)) || 
                   (i + j === n-1 && (i === 0 || i === n-1)) || 
                   (i === Math.floor(n/2) && j === Math.floor(n/2))) {
                    pattern += char;
                } else {
                    pattern += ' ';
                }
            } else {
                // For solid pattern
                if(i === j || i + j === n-1) {
                    pattern += char;
                } else {
                    pattern += ' ';
                }
            }
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = parseInt(prompt("Enter an odd number of rows:"));
const character = prompt("Enter character to print:") || '*';
const style = prompt("Enter style (solid/hollow):") || 'solid';
printCustomXPattern(rows, character, style);`,
              "explanation": [
                "🔹 Custom character input support",
                "🔹 Solid ya hollow pattern option",
                "🔹 Center point special handling",
                "🔹 Flexible and customizable approach"
              ]
            }
          ],
          "output": `
Example Outputs:

Star Pattern (n=5):
*   *
 * *
  *
 * *
*   *

Number Pattern (n=5):
1   5
 2 4
  3
 2 4
1   5

Character Pattern (n=5):
A   A
 B B
  C
 D D
E   E`,
        },
        "practiceProblems": [
          "🔹 Colored X pattern implement karo (using ANSI colors)",
          "🔹 Multi-character X pattern banao",
          "🔹 Nested X patterns create karo",
          "🔹 Dynamic size adjustment based on character width"
        ],
        "interviewQuestions": [
          "🔹 X pattern me center point kaise handle karenge?",
          "🔹 Pattern symmetry kaise maintain karenge?",
          "🔹 Even number input ke case me kya approaches ho sakti hain?",
          "🔹 Space complexity ko kaise optimize kar sakte hain?"
        ],
        "comparisonTable": [
          {
            "approach": "Simple Star Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Easy to implement and understand",
            "cons": "Basic functionality only"
          },
          {
            "approach": "Number Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Dynamic number sequence",
            "cons": "Numbers can affect alignment"
          },
          {
            "approach": "Character Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Alphabetical sequence",
            "cons": "Limited to 26 characters"
          },
          {
            "approach": "Custom Pattern",
            "timeComplexity": "O(n²)",
            "spaceComplexity": "O(n)",
            "pros": "Highly flexible and customizable",
            "cons": "More complex implementation"
          }
        ],
        "conclusion": [
          "🔹 Input validation for odd numbers is important",
          "🔹 Center point handling requires special attention",
          "🔹 Pattern symmetry is crucial for visual appeal",
          "🔹 Custom patterns offer more flexibility but need careful implementation"
        ]
      }
    ],
  },
  // 4️⃣ Arrays & Searching Algorithms
  {
    category: "Arrays & Searching Algorithms",
    questions: [
      // Q-23. Sum of Array Elements
      {
        "title": "Sum of Array Elements",
        "description": "Array ke elements ka sum calculate karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo array ke saare elements ka sum calculate kare. Different approaches implement karke performance compare karo.",
        "algorithm": [
          "🔹 Array input lo",
          "🔹 Different methods se array elements ka sum calculate karo",
          "🔹 Optimization techniques implement karo",
          "🔹 Edge cases handle karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using For Loop",
              "approach": ["🔹 Traditional for loop se array traverse karke sum calculate karenge"],
              "code": `
function calculateSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example Usage
const array = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSum(array));`,
              "explanation": [
                "🔹 Simple iteration through array",
                "🔹 Running sum maintain karte hain",
                "🔹 Basic and straightforward approach"
              ]
            },
            {
              "method": "Method 2: Using Reduce Method",
              "approach": ["🔹 Array reduce() method ka use karke sum calculate karenge"],
              "code": `
function calculateSumReduce(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// Example Usage
const array = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSumReduce(array));`,
              "explanation": [
                "🔹 Modern and functional approach",
                "🔹 Initial value 0 se start karte hain",
                "🔹 Concise implementation"
              ]
            },
            {
              "method": "Method 3: Using Recursive Approach",
              "approach": ["🔹 Recursion ka use karke array sum calculate karenge"],
              "code": `
function calculateSumRecursive(arr, index = 0) {
    // Base case
    if (index >= arr.length) return 0;
    
    // Recursive case
    return arr[index] + calculateSumRecursive(arr, index + 1);
}

// Example Usage
const array = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSumRecursive(array));`,
              "explanation": [
                "🔹 Base case handles array end",
                "🔹 Each recursive call adds one element",
                "🔹 Good for understanding recursion"
              ]
            },
            {
              "method": "Method 4: Using forEach Method",
              "approach": ["🔹 forEach() method se array traverse karenge"],
              "code": `
function calculateSumForEach(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
}

// Example Usage
const array = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSumForEach(array));`,
              "explanation": [
                "🔹 Modern array method usage",
                "🔹 Clean and readable code",
                "🔹 Good for simple summation"
              ]
            },
            {
              "method": "Method 5: Optimized for Large Arrays",
              "approach": ["🔹 Chunk processing for large arrays"],
              "code": `
function calculateSumOptimized(arr, chunkSize = 1000) {
    let sum = 0;
    
    // Process array in chunks
    for(let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        sum += chunk.reduce((s, num) => s + num, 0);
    }
    
    return sum;
}

// Example Usage
const largeArray = Array.from({length: 10000}, (_, i) => i + 1);
console.log("Sum:", calculateSumOptimized(largeArray));`,
              "explanation": [
                "🔹 Arrays ko chunks me process karta hai",
                "🔹 Memory efficient for large arrays",
                "🔹 Prevents stack overflow"
              ]
            }
          ],
          "output": `
Example Output:
Sum: 15 (for array [1, 2, 3, 4, 5])`
        },
        "practiceProblems": [
          "🔹 Calculate sum of even numbers only",
          "🔹 Calculate sum of elements at even indices",
          "🔹 Find sum of positive and negative numbers separately",
          "🔹 Calculate running sum of array"
        ],
        "interviewQuestions": [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Large arrays ke liye best approach kya hoga?",
          "🔹 Memory optimization ke liye kya steps le sakte hain?",
          "🔹 Parallel processing kaise implement kar sakte hain?"
        ],
        "comparisonTable": [
          {
            "approach": "For Loop",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Simple and straightforward",
            "cons": "Basic implementation only"
          },
          {
            "approach": "Reduce Method",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Clean and functional",
            "cons": "May be slower than for loop"
          },
          {
            "approach": "Recursive",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)",
            "pros": "Good for learning recursion",
            "cons": "Stack overflow risk for large arrays"
          },
          {
            "approach": "forEach",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Modern and readable",
            "cons": "Cannot break the loop early"
          },
          {
            "approach": "Chunked Processing",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k) where k is chunk size",
            "pros": "Good for large arrays",
            "cons": "More complex implementation"
          }
        ],
        "conclusion": [
          "🔹 For loop is best for simple cases",
          "🔹 Reduce method provides clean code",
          "🔹 Consider array size when choosing approach",
          "🔹 Optimize for specific use cases"
        ]
      },
      // Q-24. Maximum Element from the Array
      {
        "title": "Maximum Element from the Array",
        "description": "Array me se maximum element find karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo array ka maximum element find kare. Different approaches implement karke performance compare karo.",
        "algorithm": [
          "🔹 Array input lo",
          "🔹 Different methods se maximum element find karo",
          "🔹 Edge cases handle karo",
          "🔹 Performance optimization karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using For Loop",
              "approach": ["🔹 Traditional for loop approach for finding maximum"],
              "code": `
function findMaxElement(arr) {
    if (!arr || arr.length === 0) return null;
    
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example Usage
const array = [3, 7, 2, 9, 4, 1];
console.log("Maximum element:", findMaxElement(array));`,
              "explanation": [
                "🔹 First element ko initial max mante hain",
                "🔹 Array elements ko compare karke max update karte hain",
                "🔹 Simple and efficient approach"
              ]
            },
            {
              "method": "Method 2: Using Math.max()",
              "approach": ["🔹 Built-in Math.max() with spread operator"],
              "code": `
function findMaxUsingMath(arr) {
    if (!arr || arr.length === 0) return null;
    return Math.max(...arr);
}

// Example Usage
const array = [3, 7, 2, 9, 4, 1];
console.log("Maximum element:", findMaxUsingMath(array));`,
              "explanation": [
                "🔹 Spread operator array ko individual elements me convert karta hai",
                "🔹 Math.max() maximum element find karta hai",
                "🔹 Concise but limited to array size"
              ]
            },
            {
              "method": "Method 3: Using Reduce Method",
              "approach": ["🔹 Array reduce() method for finding maximum"],
              "code": `
function findMaxUsingReduce(arr) {
    if (!arr || arr.length === 0) return null;
    return arr.reduce((max, current) => Math.max(max, current), arr[0]);
}

// Example Usage
const array = [3, 7, 2, 9, 4, 1];
console.log("Maximum element:", findMaxUsingReduce(array));`,
              "explanation": [
                "🔹 Reduce method har element ko compare karta hai",
                "🔹 Initial value first element hoti hai",
                "🔹 Functional programming approach"
              ]
            },
            {
              "method": "Method 4: Using Sorting",
              "approach": ["🔹 Array ko sort karke last element return karenge"],
              "code": `
function findMaxUsingSorting(arr) {
    if (!arr || arr.length === 0) return null;
    return [...arr].sort((a, b) => a - b)[arr.length - 1];
}

// Example Usage
const array = [3, 7, 2, 9, 4, 1];
console.log("Maximum element:", findMaxUsingSorting(array));`,
              "explanation": [
                "🔹 Array ka copy create karte hain",
                "🔹 Sort karke last element return karte hain",
                "🔹 Original array unchanged rehta hai"
              ]
            },
            {
              "method": "Method 5: Using Divide and Conquer",
              "approach": ["🔹 Array ko divide karke maximum find karenge"],
              "code": `
function findMaxDivideConquer(arr, start = 0, end = arr.length - 1) {
    if (!arr || arr.length === 0) return null;
    
    // Base case: single element
    if (start === end) return arr[start];
    
    // Find middle point
    const mid = Math.floor((start + end) / 2);
    
    // Recursively find maximum in both halves
    const leftMax = findMaxDivideConquer(arr, start, mid);
    const rightMax = findMaxDivideConquer(arr, mid + 1, end);
    
    // Return maximum of two halves
    return Math.max(leftMax, rightMax);
}

// Example Usage
const array = [3, 7, 2, 9, 4, 1];
console.log("Maximum element:", findMaxDivideConquer(array));`,
              "explanation": [
                "🔹 Array ko recursively divide karte hain",
                "🔹 Each half ka maximum find karte hain",
                "🔹 Finally dono maximum ko compare karte hain"
              ]
            }
          ],
          "output": `
Example Output:
Maximum element: 9 (from array [3, 7, 2, 9, 4, 1])`
        },
        "practiceProblems": [
          "🔹 Find second largest element",
          "🔹 Find maximum element in sorted rotated array",
          "🔹 Find maximum element with index",
          "🔹 Find local maxima in array"
        ],
        "interviewQuestions": [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Large arrays ke liye konsa approach best rahega?",
          "🔹 Space optimization ke liye kya steps le sakte hain?",
          "🔹 Edge cases kaise handle karenge?"
        ],
        "comparisonTable": [
          {
            "approach": "For Loop",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Simple and memory efficient",
            "cons": "Basic linear search"
          },
          {
            "approach": "Math.max()",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Clean and concise code",
            "cons": "Limited by array size"
          },
          {
            "approach": "Reduce Method",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)",
            "pros": "Functional approach",
            "cons": "May be slower than for loop"
          },
          {
            "approach": "Sorting",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(n)",
            "pros": "Works for other problems too",
            "cons": "Not efficient for just finding max"
          },
          {
            "approach": "Divide and Conquer",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(log n)",
            "pros": "Parallelizable",
            "cons": "More complex implementation"
          }
        ],
        "conclusion": [
          "🔹 Simple for loop is often the best choice",
          "🔹 Math.max() is good for small arrays",
          "🔹 Consider parallelization for very large arrays",
          "🔹 Always handle edge cases properly"
        ]
      },
      // Q-25. Finding Prime Numbers
      {
        "title": "Finding Prime Numbers",
        "description": "Given range me prime numbers find karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo given range (start to end) me saare prime numbers find kare. Different approaches implement karke performance compare karo.",
        "algorithm": [
          "🔹 User se range input lo (start and end numbers)",
          "🔹 Different methods se prime numbers find karo",
          "🔹 Optimization techniques implement karo",
          "🔹 Result array return karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Basic Approach",
              "approach": ["🔹 Simple iterative approach to check each number"],
              "code": `
function findPrimeNumbers(start, end) {
    // Helper function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        for(let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    
    const primes = [];
    for(let num = start; num <= end; num++) {
        if(isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}

// Example Usage
const start = parseInt(prompt("Enter start number:"));
const end = parseInt(prompt("Enter end number:"));
console.log("Prime numbers:", findPrimeNumbers(start, end));`,
              "explanation": [
                "🔹 Helper function checks if number is prime",
                "🔹 Optimized by checking till square root",
                "🔹 Uses 6k ± 1 optimization"
              ]
            },
            {
              "method": "Method 2: Sieve of Eratosthenes",
              "approach": ["🔹 Efficient algorithm for finding prime numbers"],
              "code": `
function findPrimesUsingSieve(start, end) {
    // Create array of true values
    const sieve = new Array(end + 1).fill(true);
    sieve[0] = sieve[1] = false;
    
    // Mark non-prime numbers in sieve
    for(let i = 2; i * i <= end; i++) {
        if(sieve[i]) {
            for(let j = i * i; j <= end; j += i) {
                sieve[j] = false;
            }
        }
    }
    
    // Collect prime numbers in range
    const primes = [];
    for(let i = Math.max(2, start); i <= end; i++) {
        if(sieve[i]) {
            primes.push(i);
        }
    }
    
    return primes;
}

// Example Usage
const start = parseInt(prompt("Enter start number:"));
const end = parseInt(prompt("Enter end number:"));
console.log("Prime numbers:", findPrimesUsingSieve(start, end));`,
              "explanation": [
                "🔹 Creates boolean array for marking primes",
                "🔹 More efficient for finding multiple primes",
                "🔹 Space complexity is higher"
              ]
            },
            {
              "method": "Method 3: Segmented Sieve",
              "approach": ["🔹 Memory efficient version of Sieve algorithm"],
              "code": `
function findPrimesUsingSegmentedSieve(start, end) {
    const SEGMENT_SIZE = 1000;
    
    // Find primes up to sqrt(end) using basic sieve
    const sqrtEnd = Math.floor(Math.sqrt(end));
    const basePrimes = findPrimesUsingSieve(2, sqrtEnd);
    
    const primes = [];
    
    // Process segments
    for(let low = start; low <= end; low += SEGMENT_SIZE) {
        let high = Math.min(low + SEGMENT_SIZE - 1, end);
        
        // Create segment array
        let segment = new Array(high - low + 1).fill(true);
        
        // Mark non-primes in current segment
        for(let prime of basePrimes) {
            let firstMultiple = Math.max(prime * prime, 
                Math.ceil(low / prime) * prime);
            
            for(let j = firstMultiple; j <= high; j += prime) {
                segment[j - low] = false;
            }
        }
        
        // Collect primes from segment
        for(let i = 0; i < segment.length; i++) {
            if(segment[i] && (low + i) >= Math.max(2, start)) {
                primes.push(low + i);
            }
        }
    }
    
    return primes;
}

// Example Usage
const start = parseInt(prompt("Enter start number:"));
const end = parseInt(prompt("Enter end number:"));
console.log("Prime numbers:", findPrimesUsingSegmentedSieve(start, end));`,
              "explanation": [
                "🔹 Divides range into segments",
                "🔹 Uses less memory than regular sieve",
                "🔹 Good for large ranges"
              ]
            }
          ],
          "output": `
Example Output:
Enter start number: 10
Enter end number: 30
Prime numbers: [11, 13, 17, 19, 23, 29]`
        },
        "practiceProblems": [
          "🔹 Find twin primes in a range",
          "🔹 Check if number is prime using probabilistic methods",
          "🔹 Find prime factors of a number",
          "🔹 Generate first n prime numbers"
        ],
        "interviewQuestions": [
          "🔹 Different prime finding algorithms ki complexity compare karo",
          "🔹 Memory optimization ke liye kya techniques use kar sakte hain?",
          "🔹 Large numbers ke liye konsa approach best rahega?",
          "🔹 Parallel processing kaise implement kar sakte hain?"
        ],
        "comparisonTable": [
          {
            "approach": "Basic Approach",
            "timeComplexity": "O(n * √n)",
            "spaceComplexity": "O(1)",
            "pros": "Simple to implement, good for small ranges",
            "cons": "Slow for large ranges"
          },
          {
            "approach": "Sieve of Eratosthenes",
            "timeComplexity": "O(n log log n)",
            "spaceComplexity": "O(n)",
            "pros": "Very efficient for finding all primes",
            "cons": "High memory usage"
          },
          {
            "approach": "Segmented Sieve",
            "timeComplexity": "O(n log log n)",
            "spaceComplexity": "O(√n)",
            "pros": "Memory efficient, good for large ranges",
            "cons": "More complex implementation"
          }
        ],
        "conclusion": [
          "🔹 Choose algorithm based on range size",
          "🔹 Consider memory constraints",
          "🔹 Optimize for specific use case",
          "🔹 Handle edge cases properly"
        ]
      },
      // Q-26. Checking for Automorphic Number
      {
        "title": "Checking for Automorphic Number",
        "description": "Automorphic number check karne ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo check kare ki given number automorphic hai ya nahi. Automorphic number wo hota hai jiska square us number ke last digits se match karta hai (Example: 25² = 625, ends with 25).",
        "algorithm": [
          "🔹 User se number input lo",
          "🔹 Number ka square calculate karo",
          "🔹 Square ke last digits ko original number se compare karo",
          "🔹 Different approaches implement karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using String Manipulation",
              "approach": ["🔹 Number and square ko string me convert karke compare karenge"],
              "code": `
      function isAutomorphic(num) {
          const square = (num * num).toString();
          const numStr = num.toString();
          
          // Check if square ends with original number
          return square.endsWith(numStr);
      }
      
      // Example Usage
      const number = parseInt(prompt("Enter a number:"));
      const result = isAutomorphic(number);
      console.log(\`\${number} is\${result ? '' : ' not'} an Automorphic Number\`);`,
              "explanation": [
                "🔹 Number ka square calculate karte hain",
                "🔹 endsWith() method se check karte hain",
                "🔹 Simple and readable approach"
              ]
            },
            {
              "method": "Method 2: Using Mathematical Approach",
              "approach": ["🔹 Mathematical operations ka use karke digits compare karenge"],
              "code": `
      function isAutomorphic(num) {
          const square = num * num;
          let temp = num;
          let divisor = 1;
          
          // Calculate divisor based on number of digits
          while(temp > 0) {
              temp = Math.floor(temp / 10);
              divisor *= 10;
          }
          
          // Compare last digits of square with original number
          return square % divisor === num;
      }
      
      // Example Usage
      const number = parseInt(prompt("Enter a number:"));
      const result = isAutomorphic(number);
      console.log(\`\${number} is\${result ? '' : ' not'} an Automorphic Number\`);`,
              "explanation": [
                "🔹 Divisor calculate karte hain based on digits",
                "🔹 Modulo operator se last digits extract karte hain",
                "🔹 Memory efficient approach"
              ]
            },
            {
              "method": "Method 3: Using Regular Expression",
              "approach": ["🔹 Regular expression ka use karke pattern match karenge"],
              "code": `
      function isAutomorphic(num) {
          const square = num * num;
          const pattern = new RegExp(\`\${num}$\`);
          
          return pattern.test(square.toString());
      }
      
      // Example Usage
      const number = parseInt(prompt("Enter a number:"));
      const result = isAutomorphic(number);
      console.log(\`\${number} is\${result ? '' : ' not'} an Automorphic Number\`);`,
              "explanation": [
                "🔹 RegExp pattern create karte hain",
                "🔹 test() method se match check karte hain",
                "🔹 Flexible pattern matching approach"
              ]
            }
          ],
          "output": `
      Example Outputs:
      Enter number: 25
      25 is an Automorphic Number (25² = 625)
      
      Enter number: 76
      76 is an Automorphic Number (76² = 5776)
      
      Enter number: 7
      7 is not an Automorphic Number (7² = 49)`
        },
        "practiceProblems": [
          "🔹 Find all automorphic numbers in a range",
          "🔹 Check if square root of automorphic number is also automorphic",
          "🔹 Find largest n-digit automorphic number",
          "🔹 Generate first n automorphic numbers"
        ],
        "interviewQuestions": [
          "🔹 Compare different approaches ki time complexity",
          "🔹 Large numbers ke liye kaise handle karenge?",
          "🔹 Mathematical approach vs String approach - pros and cons",
          "🔹 Memory optimization ke liye kya steps le sakte hain?"
        ],
        "comparisonTable": [
          {
            "approach": "String Manipulation",
            "timeComplexity": "O(d) where d is digit count",
            "spaceComplexity": "O(d)",
            "pros": "Simple to implement and understand",
            "cons": "Extra memory for string conversion"
          },
          {
            "approach": "Mathematical",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(1)",
            "pros": "Memory efficient, no string conversion",
            "cons": "More complex logic"
          },
          {
            "approach": "Regular Expression",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(d)",
            "pros": "Flexible pattern matching",
            "cons": "RegExp overhead"
          }
        ],
        "conclusion": [
          "🔹 String manipulation approach is most readable",
          "🔹 Mathematical approach is most memory efficient",
          "🔹 Choose approach based on requirements",
          "🔹 Consider input size and constraints"
        ]
      },
      // Q-27. Strong Number Validation
      {
        "title": "Strong Number Validation",
        "description": "Strong number validation ke multiple approaches explore karenge.",
        "problemStatement": "Ek function likho jo check kare ki given number strong number hai ya nahi. Strong number wo hota hai jisme digits ke factorials ka sum original number ke equal ho (Example: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145).",
        "algorithm": [
          "🔹 User se number input lo",
          "🔹 Number ke har digit ka factorial calculate karo",
          "🔹 Factorials ka sum karo",
          "🔹 Sum ko original number se compare karo"
        ],
        "solution": {
          "methods": [
            {
              "method": "Method 1: Using String Manipulation",
              "approach": ["🔹 Number ko string me convert karke digits process karenge"],
              "code": `
function isStrongNumber(num) {
    // Helper function to calculate factorial
    function factorial(n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    const sum = String(num)
        .split('')
        .reduce((sum, digit) => sum + factorial(Number(digit)), 0);
    
    return sum === num;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = isStrongNumber(number);
console.log(\`\${number} is\${result ? '' : ' not'} a Strong Number\`);`,
              "explanation": [
                "🔹 Helper function factorial() calculates digit factorial",
                "🔹 String split se digits alag karte hain",
                "🔹 reduce() se factorials ka sum calculate karte hain"
              ]
            },
            {
              "method": "Method 2: Using Mathematical Approach",
              "approach": ["🔹 Mathematical operations se digits extract karenge"],
              "code": `
function isStrongNumber(num) {
    // Precomputed factorials for 0-9
    const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    
    let sum = 0;
    let temp = num;
    
    while (temp > 0) {
        const digit = temp % 10;
        sum += factorials[digit];
        if (sum > num) return false; // Early exit
        temp = Math.floor(temp / 10);
    }
    
    return sum === num;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = isStrongNumber(number);
console.log(\`\${number} is\${result ? '' : ' not'} a Strong Number\`);`,
              "explanation": [
                "🔹 Precomputed factorials array use karte hain",
                "🔹 Modulo operator se digits extract karte hain",
                "🔹 Early exit optimization implement ki hai"
              ]
            },
            {
              "method": "Method 3: Using Array and Loop",
              "approach": ["🔹 Array methods ka use karke calculation karenge"],
              "code": `
function isStrongNumber(num) {
    // Calculate factorial using loop
    function factorial(n) {
        let result = 1;
        for(let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    const digits = Array.from(String(num), Number);
    const sum = digits.reduce((sum, digit) => sum + factorial(digit), 0);
    
    return sum === num;
}

// Example Usage
const number = parseInt(prompt("Enter a number:"));
const result = isStrongNumber(number);
console.log(\`\${number} is\${result ? '' : ' not'} a Strong Number\`);`,
              "explanation": [
                "🔹 Loop based factorial calculation",
                "🔹 Array.from() se digits array banate hain",
                "🔹 Modern array methods ka use karte hain"
              ]
            }
          ],
          "output": `
Example Outputs:
Enter number: 145
145 is a Strong Number (1! + 4! + 5! = 145)

Enter number: 40585
40585 is a Strong Number

Enter number: 123
123 is not a Strong Number`
        },
        "practiceProblems": [
          "🔹 Given range me strong numbers find karo",
          "🔹 n-digit strong numbers generate karo",
          "🔹 Next strong number find karo",
          "🔹 Largest strong number with given number of digits find karo"
        ],
        "interviewQuestions": [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Memory optimization ke liye kya steps le sakte hain?",
          "🔹 Large numbers ke liye konsa approach best rahega?",
          "🔹 Precomputed factorials vs runtime calculation - pros and cons"
        ],
        "comparisonTable": [
          {
            "approach": "String Manipulation",
            "timeComplexity": "O(d) where d is digit count",
            "spaceComplexity": "O(d)",
            "pros": "Simple to implement and understand",
            "cons": "Extra memory for string conversion"
          },
          {
            "approach": "Mathematical",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(1)",
            "pros": "Memory efficient, early exit optimization",
            "cons": "More complex logic"
          },
          {
            "approach": "Array Methods",
            "timeComplexity": "O(d)",
            "spaceComplexity": "O(d)",
            "pros": "Clean and modern code",
            "cons": "Multiple array operations overhead"
          }
        ],
        "conclusion": [
          "🔹 Mathematical approach with precomputed factorials is most efficient",
          "🔹 Early exit optimization can significantly improve performance",
          "🔹 Consider input constraints when choosing approach",
          "🔹 Handle edge cases properly"
        ]
      }
    ],
  },
];
