export const hardQuestions = [
  // 1️⃣ Advanced Patterns & Pascal’s Triangle
  {
    category: "Advanced Patterns & Pascal’s Triangle",
    questions: [
      // Q-1. Print Pascal’s Triangle
      {
        title: "Print Pascal's Triangle",
        description: "Pascal's Triangle ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo n rows ka Pascal's Triangle print kare. Pascal's triangle mei har number upar ke 2 numbers ka sum hota hai.",
        algorithm: [
          "🔹 User se rows ki number input lo",
          "🔹 Har row mei utne hi elements honge jitni row number hai",
          "🔹 First and last element of each row is 1",
          "🔹 Middle elements = upper left + upper right element"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Array and Loops",
              approach: ["🔹 2D array use karke triangle build karenge"],
              code: `
    function printPascalTriangle(n) {
        let triangle = [];
        
        // Create triangle array
        for(let i = 0; i < n; i++) {
            triangle[i] = new Array(i + 1);
            
            // First and last elements are 1
            triangle[i][0] = triangle[i][i] = 1;
            
            // Calculate middle elements
            for(let j = 1; j < i; j++) {
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
        }
        
        // Print triangle
        triangle.forEach(row => {
            console.log(row.join(' ').padStart(n*2));
        });
        
        return triangle;
    }
    
    // Example Usage
    const rows = 5;
    console.log(\`Pascal's Triangle with \${rows} rows:\`);
    printPascalTriangle(rows);`,
              explanation: [
                "🔹 2D array mei triangle store karte hain",
                "🔹 Har row ke first/last element 1 hote hain",
                "🔹 Middle elements calculate karte hain",
                "🔹 padStart() se proper alignment maintain karte hain"
              ]
            },
            {
              method: "Method 2: Using Combinations Formula",
              approach: ["🔹 nCr formula ka use karke direct calculate karenge"],
              code: `
    function printPascalTriangle(n) {
        function factorial(num) {
            if(num <= 1) return 1;
            return num * factorial(num - 1);
        }
        
        function combination(n, r) {
            return factorial(n) / (factorial(r) * factorial(n - r));
        }
        
        for(let i = 0; i < n; i++) {
            let row = [];
            for(let j = 0; j <= i; j++) {
                row.push(combination(i, j));
            }
            console.log(row.join(' ').padStart(n*2));
        }
    }
    
    // Example Usage
    const rows = 5;
    console.log(\`Pascal's Triangle with \${rows} rows:\`);
    printPascalTriangle(rows);`,
              explanation: [
                "🔹 Combination formula: nCr = n!/(r!(n-r)!)",
                "🔹 Factorial function recursively calculate karta hai",
                "🔹 Direct formula se har element calculate hota hai"
              ]
            },
            {
              method: "Method 3: Using Dynamic Programming",
              approach: ["🔹 Previous row se current row calculate karenge"],
              code: `
    function printPascalTriangle(n) {
        let prev = [1];
        
        for(let i = 0; i < n; i++) {
            console.log(prev.join(' ').padStart(n*2));
            
            let current = [1];
            for(let j = 1; j < prev.length; j++) {
                current.push(prev[j-1] + prev[j]);
            }
            current.push(1);
            prev = current;
        }
    }
    
    // Example Usage
    const rows = 5;
    console.log(\`Pascal's Triangle with \${rows} rows:\`);
    printPascalTriangle(rows);`,
              explanation: [
                "🔹 Previous row store karke rakhte hain",
                "🔹 Current row calculate karte hain previous se",
                "🔹 Space efficient approach hai"
              ]
            }
          ],
          output: `
    Example Output (5 rows):
        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1`
        },
        practiceProblems: [
          "🔹 Find sum of all elements in a row",
          "🔹 Find specific element using row,col position",
          "🔹 Print triangle in different patterns",
          "🔹 Find sum of all elements in triangle"
        ],
        interviewQuestions: [
          "🔹 Space complexity optimization kaise karein?",
          "🔹 Time complexity different approaches mei compare karein",
          "🔹 Large n ke liye konsa approach best hai?",
          "🔹 Real-world applications of Pascal's Triangle"
        ],
        comparisonTable: [
          {
            approach: "Array and Loops",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n²)",
            pros: "Simple to understand and implement",
            cons: "Uses more memory for large n"
          },
          {
            approach: "Combinations Formula",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n)",
            pros: "Mathematical approach, direct calculation",
            cons: "Factorial calculations can overflow"
          },
          {
            approach: "Dynamic Programming",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n)",
            pros: "Memory efficient, good for large n",
            cons: "Slightly complex logic"
          }
        ],
        conclusion: [
          "🔹 Dynamic Programming approach is most efficient",
          "🔹 For small n, any approach works well",
          "🔹 Memory optimization is key for large n",
          "🔹 Consider number size limits when choosing approach"
        ]
      },
      // Q-2. Floyd’s Triangle
      {
        title: "Floyd's Triangle",
        description: "Floyd's Triangle ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo n rows ka Floyd's Triangle print kare. Floyd's triangle mei 1 se start karke consecutive numbers print hote hain.",
        algorithm: [
          "🔹 User se rows ki number input lo",
          "🔹 Counter initialize karo 1 se",
          "🔹 Har row mei utne hi numbers print karo jitni row number hai",
          "🔹 Counter ko increment karte jao"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Nested Loops",
              approach: ["🔹 Basic nested loops se triangle build karenge"],
              code: `
      function printFloydsTriangle(n) {
          let counter = 1;
          
          // Iterate through rows
          for(let i = 1; i <= n; i++) {
              let row = [];
              
              // Add numbers to current row
              for(let j = 1; j <= i; j++) {
                  row.push(counter++);
              }
              
              // Print current row
              console.log(row.join(' '));
          }
      }
      
      // Example Usage
      const rows = 5;
      console.log("Floyd's Triangle with " + rows + " rows:");
      printFloydsTriangle(rows);`,
              explanation: [
                "🔹 Counter 1 se start karte hain",
                "🔹 Har row mei increasing numbers add karte hain",
                "🔹 Counter ko har number ke baad increment karte hain"
              ]
            },
            {
              method: "Method 2: Using Array Methods",
              approach: ["🔹 Array methods ka use karke solution implement karenge"],
              code: `
      function printFloydsTriangle(n) {
          let counter = 1;
          
          // Create array of n rows and map each row
          Array.from({ length: n }, (_, i) => {
              // Create and print current row
              const row = Array.from({ length: i + 1 }, () => counter++);
              console.log(row.join(' '));
          });
      }
      
      // Example Usage
      const rows = 5;
      console.log("Floyd's Triangle with " + rows + " rows:");
      printFloydsTriangle(rows);`,
              explanation: [
                "🔹 Array.from() se rows create karte hain",
                "🔹 Nested Array.from() se row ke numbers generate karte hain",
                "🔹 Modern array methods ka use karte hain"
              ]
            },
            {
              method: "Method 3: Using String Concatenation",
              approach: ["🔹 String concatenation se direct output build karenge"],
              code: `
      function printFloydsTriangle(n) {
          let counter = 1;
          let output = '';
          
          for(let i = 1; i <= n; i++) {
              let row = '';
              for(let j = 1; j <= i; j++) {
                  row += counter++ + ' ';
              }
              output += row.trim() + '\\n';
          }
          
          console.log(output.trim());
      }
      
      // Example Usage
      const rows = 5;
      console.log("Floyd's Triangle with " + rows + " rows:");
      printFloydsTriangle(rows);`,
              explanation: [
                "🔹 String mei direct numbers add karte hain",
                "🔹 Memory efficient approach hai",
                "🔹 Single output string generate hoti hai"
              ]
            }
          ],
          output: `
      Example Output (5 rows):
      1
      2 3
      4 5 6
      7 8 9 10
      11 12 13 14 15`
        },
        practiceProblems: [
          "🔹 Reverse Floyd's Triangle print karo",
          "🔹 Even numbers se Floyd's Triangle banao",
          "🔹 Row sum calculate karo",
          "🔹 Pattern mei specific number find karo"
        ],
        interviewQuestions: [
          "🔹 Space complexity optimize kaise karein?",
          "🔹 Large n ke liye konsa approach best rahega?",
          "🔹 Pattern ke variations kya ho sakte hain?",
          "🔹 Memory usage different approaches mei compare karein"
        ],
        comparisonTable: [
          {
            approach: "Nested Loops",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n)",
            pros: "Simple to understand and implement",
            cons: "Basic approach, no optimization"
          },
          {
            approach: "Array Methods",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n²)",
            pros: "Modern and clean code",
            cons: "Higher memory usage"
          },
          {
            approach: "String Concatenation",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n²)",
            pros: "Single output string",
            cons: "String concatenation overhead"
          }
        ],
        conclusion: [
          "🔹 Nested loops approach is most straightforward",
          "🔹 For small n, any approach works well",
          "🔹 Consider memory usage for large n",
          "🔹 String approach good for direct output"
        ]
      },
      // Q-3. Hollow Diamond Pattern
      {
        title: "Hollow Diamond Pattern",
        description: "Hollow Diamond Pattern ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo n rows ka Hollow Diamond pattern print kare. Pattern mei sirf border asterisks (*) print honge, beech mei spaces hongi.",
        algorithm: [
          "🔹 User se rows ki number input lo (odd number better hota hai)",
          "🔹 Upper half mei increasing spaces and stars pattern banao",
          "🔹 Lower half mei decreasing spaces and stars pattern banao",
          "🔹 Sirf border pe stars print karo, beech mei spaces"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Nested Loops",
              approach: ["🔹 Upper and lower half separately print karenge"],
              code: `
function printHollowDiamond(n) {
    // Upper half of diamond
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        
        // Print spaces before stars
        for(let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        
        // Print stars and hollow spaces
        for(let j = 1; j <= 2 * i - 1; j++) {
            if(j === 1 || j === 2 * i - 1) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        
        console.log(pattern);
    }
    
    // Lower half of diamond
    for(let i = n - 1; i >= 1; i--) {
        let pattern = '';
        
        // Print spaces before stars
        for(let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        
        // Print stars and hollow spaces
        for(let j = 1; j <= 2 * i - 1; j++) {
            if(j === 1 || j === 2 * i - 1) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = 5;
console.log("Hollow Diamond Pattern with " + rows + " rows:");
printHollowDiamond(rows);`,
              explanation: [
                "🔹 Upper half mei increasing pattern banate hain",
                "🔹 Lower half mei decreasing pattern banate hain",
                "🔹 Har row mei sirf border pe stars print karte hain",
                "🔹 Beech mei spaces add karte hain"
              ]
            },
            {
              method: "Method 2: Using Array Methods",
              approach: ["🔹 Array manipulation se pattern generate karenge"],
              code: `
function printHollowDiamond(n) {
    // Generate upper half
    Array.from({ length: n }, (_, i) => {
        const spaces = ' '.repeat(n - i - 1);
        const width = 2 * i + 1;
        const pattern = width === 1 ? '*' : 
            '*' + ' '.repeat(width - 2) + '*';
        console.log(spaces + pattern);
    });
    
    // Generate lower half
    Array.from({ length: n - 1 }, (_, i) => {
        const spaces = ' '.repeat(i + 1);
        const width = 2 * (n - i - 2) + 1;
        const pattern = width === 1 ? '*' : 
            '*' + ' '.repeat(width - 2) + '*';
        console.log(spaces + pattern);
    });
}

// Example Usage
const rows = 5;
console.log("Hollow Diamond Pattern with " + rows + " rows:");
printHollowDiamond(rows);`,
              explanation: [
                "🔹 Array.from() se rows generate karte hain",
                "🔹 repeat() method se spaces add karte hain",
                "🔹 Modern array methods ka use karte hain",
                "🔹 Clean and concise code structure"
              ]
            },
            {
              method: "Method 3: Using String Template Literals",
              approach: ["🔹 Template literals ka use karke pattern build karenge"],
              code: `
function printHollowDiamond(n) {
    const pattern = [...Array(2 * n - 1)].map((_, i) => {
        const row = i < n ? i : 2 * n - 2 - i;
        const spaces = ' '.repeat(n - row - 1);
        const width = 2 * row + 1;
        
        return spaces + (width === 1 ? '*' : 
            \`*\${' '.repeat(width - 2)}*\`);
    }).join('\\n');
    
    console.log(pattern);
}

// Example Usage
const rows = 5;
console.log("Hollow Diamond Pattern with " + rows + " rows:");
printHollowDiamond(rows);`,
              explanation: [
                "🔹 Single array generate karte hain pura pattern ke liye",
                "🔹 Template literals se pattern build karte hain",
                "🔹 Compact solution with functional approach",
                "🔹 Memory efficient implementation"
              ]
            }
          ],
          output: `
Example Output (5 rows):
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *`
        },
        practiceProblems: [
          "🔹 Different sizes ke hollow diamonds banao",
          "🔹 Pattern mei stars ki jagah different characters use karo",
          "🔹 Colored pattern print karo (using ANSI codes)",
          "🔹 Pattern ko rotate karo different angles pe"
        ],
        interviewQuestions: [
          "🔹 Pattern printing mei space complexity kaise optimize karein?",
          "🔹 Different approaches ki time complexity compare karein",
          "🔹 Pattern printing ke real-world applications kya hain?",
          "🔹 Pattern mei symmetry kaise maintain karein?"
        ],
        comparisonTable: [
          {
            approach: "Nested Loops",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n)",
            pros: "Simple to understand and implement",
            cons: "Code length is more"
          },
          {
            approach: "Array Methods",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n)",
            pros: "Modern and clean code",
            cons: "May be harder to understand"
          },
          {
            approach: "Template Literals",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(n²)",
            pros: "Concise and elegant",
            cons: "Higher memory usage for string concatenation"
          }
        ],
        conclusion: [
          "🔹 Nested loops approach is most straightforward",
          "🔹 Modern methods make code more maintainable",
          "🔹 Template literals provide elegant solution",
          "🔹 Choose approach based on readability vs performance needs"
        ]
      },
      // Q-4. Zig-Zag Pattern
      {
        title: "Zig-Zag Pattern",
        description: "Zig-Zag Pattern ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo n rows ka Zig-Zag pattern print kare. Pattern alternating peaks and valleys ke form mei dikhna chahiye.",
        algorithm: [
          "🔹 User se rows aur columns ki length input lo",
          "🔹 First and last rows mei alternating spaces and stars pattern banao",
          "🔹 Middle row mei diagonal form mei stars print karo",
          "🔹 Pattern ko n columns tak continue karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Nested Loops",
              approach: ["🔹 Three rows ka pattern separately handle karenge"],
              code: `
function printZigZagPattern(n) {
    // First Row
    for(let i = 1; i <= n; i++) {
        if(i % 4 === 0) process.stdout.write("*");
        else process.stdout.write(" ");
    }
    console.log();
    
    // Middle Row
    for(let i = 1; i <= n; i++) {
        if((i + 2) % 4 === 0) process.stdout.write("*");
        else process.stdout.write(" ");
    }
    console.log();
    
    // Last Row
    for(let i = 1; i <= n; i++) {
        if((i + 1) % 2 === 0) process.stdout.write("*");
        else process.stdout.write(" ");
    }
    console.log();
}

// Example Usage
const columns = 16;
console.log("Zig-Zag Pattern with width " + columns + ":");
printZigZagPattern(columns);`,
              explanation: [
                "🔹 First row mei pattern 4 ke interval pe print hota hai",
                "🔹 Middle row mei 2 position shift karke pattern print hota hai",
                "🔹 Last row mei alternate positions pe stars print hote hain"
              ]
            },
            {
              method: "Method 2: Using Array Methods",
              approach: ["🔹 Array manipulation se pattern generate karenge"],
              code: `
function printZigZagPattern(n) {
    const rows = 3;
    Array.from({ length: rows }, (_, i) => {
        const pattern = Array.from({ length: n }, (_, j) => {
            if (i === 0 && j % 4 === 0) return '*';
            if (i === 1 && (j + 2) % 4 === 0) return '*';
            if (i === 2 && (j + 1) % 2 === 0) return '*';
            return ' ';
        }).join('');
        console.log(pattern);
    });
}

// Example Usage
const columns = 16;
console.log("Zig-Zag Pattern with width " + columns + ":");
printZigZagPattern(columns);`,
              explanation: [
                "🔹 Array.from() se rows generate karte hain",
                "🔹 Har row ka pattern separately calculate hota hai",
                "🔹 Modern array methods ka use karte hain",
                "🔹 Clean and modular approach"
              ]
            },
            {
              method: "Method 3: Using String Template Literals",
              approach: ["🔹 Template literals ka use karke pattern build karenge"],
              code: `
function printZigZagPattern(n) {
    const pattern = [
        [...Array(n)].map((_, i) => i % 4 === 0 ? '*' : ' ').join(''),
        [...Array(n)].map((_, i) => (i + 2) % 4 === 0 ? '*' : ' ').join(''),
        [...Array(n)].map((_, i) => (i + 1) % 2 === 0 ? '*' : ' ').join('')
    ].join('\\n');
    
    console.log(pattern);
}

// Example Usage
const columns = 16;
console.log("Zig-Zag Pattern with width " + columns + ":");
printZigZagPattern(columns);`,
              explanation: [
                "🔹 Single array se complete pattern generate hota hai",
                "🔹 Pattern calculation mathematical formulas se hoti hai",
                "🔹 Compact and functional approach",
                "🔹 Easy to modify pattern rules"
              ]
            }
          ],
          output: `
Example Output (16 columns):
*   *   *   *
 *  *  *  *  
* * * * * * * *`
        },
        practiceProblems: [
          "🔹 Different widths ke patterns banao",
          "🔹 Pattern mei different characters use karo",
          "🔹 Pattern ki height modify karo",
          "🔹 Pattern ko reverse karo"
        ],
        interviewQuestions: [
          "🔹 Pattern mei space complexity kaise optimize karein?",
          "🔹 Different approaches ki time complexity compare karein",
          "🔹 Pattern printing real-world applications kya hain?",
          "🔹 Large n ke liye konsa approach best rahega?"
        ],
        comparisonTable: [
          {
            approach: "Nested Loops",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Simple to understand and implement",
            cons: "Limited flexibility for pattern modifications"
          },
          {
            approach: "Array Methods",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Modern and modular code",
            cons: "Higher memory usage"
          },
          {
            approach: "Template Literals",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Concise and flexible",
            cons: "May be harder to understand"
          }
        ],
        conclusion: [
          "🔹 All approaches have linear time complexity",
          "🔹 Choose approach based on pattern flexibility needs",
          "🔹 Consider memory usage for large patterns",
          "🔹 Pattern modifications easiest with array methods"
        ]
      },
      // Q-5. Advanced Triangle Patterns
      {
        title: "Advanced Triangle Patterns",
        description: "Advanced Triangle Patterns ke multiple variations explore karenge.",
        problemStatement: "Ek function likho jo different types ke advanced triangle patterns print kare, jaise numbered triangle, character triangle, aur mirror patterns.",
        algorithm: [
          "🔹 User se rows ki number input lo",
          "🔹 Pattern type ke based pe logic implement karo",
          "🔹 Spaces and characters ko properly align karo",
          "🔹 Different variations ke liye flexible code banao"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Number Triangle Pattern",
              approach: ["🔹 Numbers se triangle pattern banayenge"],
              code: `
function printNumberTriangle(n) {
    // Pattern 1: Increasing number in each row
    console.log("Pattern 1: Increasing Numbers");
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        // Add spaces
        for(let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        // Add numbers
        for(let j = 1; j <= i; j++) {
            pattern += j + ' ';
        }
        console.log(pattern);
    }
    
    console.log("\\nPattern 2: Row Number Repeat");
    // Pattern 2: Row number repeated
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        for(let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        for(let j = 1; j <= i; j++) {
            pattern += i + ' ';
        }
        console.log(pattern);
    }
}`,
              explanation: [
                "🔹 Spaces add karke alignment maintain karte hain",
                "🔹 First pattern mei increasing numbers print hote hain",
                "🔹 Second pattern mei row number repeat hota hai",
                "🔹 Proper spacing se clean output milta hai"
              ]
            },
            {
              method: "Method 2: Character Triangle Pattern",
              approach: ["🔹 Alphabets se triangle pattern banayenge"],
              code: `
function printCharacterTriangle(n) {
    // Pattern 1: Increasing characters
    console.log("Pattern 1: Increasing Characters");
    let char = 65; // ASCII for 'A'
    for(let i = 0; i < n; i++) {
        let pattern = '';
        // Add spaces
        for(let j = 0; j < n - i - 1; j++) {
            pattern += ' ';
        }
        // Add characters
        for(let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(char + j) + ' ';
        }
        console.log(pattern);
    }
    
    console.log("\\nPattern 2: Character Palindrome");
    // Pattern 2: Character palindrome
    for(let i = 0; i < n; i++) {
        let pattern = '';
        // Add spaces
        for(let j = 0; j < n - i - 1; j++) {
            pattern += ' ';
        }
        // Add characters in ascending order
        for(let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(char + j);
        }
        // Add characters in descending order
        for(let j = i - 1; j >= 0; j--) {
            pattern += String.fromCharCode(char + j);
        }
        console.log(pattern);
    }
}`,
              explanation: [
                "🔹 ASCII values se characters generate karte hain",
                "🔹 First pattern mei sequential characters print hote hain",
                "🔹 Second pattern mei palindrome form mei characters print hote hain",
                "🔹 String.fromCharCode() se ASCII to character conversion karte hain"
              ]
            },
            {
              method: "Method 3: Mirror Triangle Pattern",
              approach: ["🔹 Mirror image pattern banayenge"],
              code: `
function printMirrorTriangle(n) {
    // Pattern 1: Left-Right Mirror
    console.log("Pattern 1: Left-Right Mirror");
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        // Left triangle
        for(let j = 1; j <= i; j++) {
            pattern += '*';
        }
        // Spaces between triangles
        for(let j = 1; j <= 2 * (n - i); j++) {
            pattern += ' ';
        }
        // Right triangle
        for(let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
    
    console.log("\\nPattern 2: Up-Down Mirror");
    // Pattern 2: Up-Down Mirror
    // Upper half
    for(let i = n; i >= 1; i--) {
        let pattern = '';
        for(let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
    // Lower half
    for(let i = 2; i <= n; i++) {
        let pattern = '';
        for(let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}`,
              explanation: [
                "🔹 First pattern mei left-right mirror image banate hain",
                "🔹 Second pattern mei up-down mirror image banate hain",
                "🔹 Spaces ka use karke proper separation maintain karte hain",
                "🔹 Different variations ke liye flexible approach hai"
              ]
            }
          ],
          output: `
Example Output for n = 5:

Pattern 1: Number Triangle
    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5

Pattern 2: Character Triangle
    A
   A B
  A B C
 A B C D
A B C D E

Pattern 3: Mirror Triangle
*        *
**      **
***    ***
****  ****
**********`
        },
        practiceProblems: [
          "🔹 Different types ke number patterns try karo",
          "🔹 Special characters se patterns banao",
          "🔹 Mirror patterns ke variations create karo",
          "🔹 Pattern ke size ko dynamic banao"
        ],
        interviewQuestions: [
          "🔹 Pattern printing mei space complexity kaise optimize karein?",
          "🔹 Different patterns ke liye generalized solution kaise banayein?",
          "🔹 Pattern printing mei edge cases kya ho sakte hain?",
          "🔹 Large input ke liye code kaise optimize karein?"
        ],
        comparisonTable: [
          {
            approach: "Number Pattern",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            pros: "Simple to implement, numeric progression clear",
            cons: "Limited to number patterns only"
          },
          {
            approach: "Character Pattern",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            pros: "Alphabetic patterns, good for learning ASCII",
            cons: "Limited by alphabet count"
          },
          {
            approach: "Mirror Pattern",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            pros: "Symmetric patterns, visually appealing",
            cons: "More complex logic for symmetry"
          }
        ],
        conclusion: [
          "🔹 Pattern type ke according approach choose karein",
          "🔹 Code reusability ke liye modular functions banayein",
          "🔹 Space and time complexity optimize karein",
          "🔹 Edge cases handle karna na bhoolein"
        ]
      },
      // Q-6. Cross and Hollow Patterns
      {
        title: "Cross and Hollow Patterns",
        description: "Cross and Hollow Patterns ke multiple variations explore karenge.",
        problemStatement: "Ek function likho jo different types ke cross aur hollow patterns print kare, jaise cross pattern, square pattern, aur rectangular patterns.",
        algorithm: [
          "🔹 User se size input lo",
          "🔹 Pattern type ke hisab se spaces aur characters calculate karo",
          "🔹 Diagonal ya border positions pe characters print karo",
          "🔹 Baaki positions pe spaces print karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Cross Pattern",
              approach: ["🔹 Diagonal positions pe stars print karenge"],
              code: `
function printCrossPattern(n) {
    // Cross Pattern (X shape)
    console.log("Pattern 1: Cross Pattern");
    for(let i = 0; i < n; i++) {
        let pattern = '';
        for(let j = 0; j < n; j++) {
            if(i === j || i + j === n - 1) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        console.log(pattern);
    }
}`,
              explanation: [
                "🔹 i === j condition se primary diagonal print hoti hai",
                "🔹 i + j === n - 1 se secondary diagonal print hoti hai",
                "🔹 Baaki positions pe spaces print hote hain",
                "🔹 X shape pattern banta hai"
              ]
            },
            {
              method: "Method 2: Hollow Square Pattern",
              approach: ["🔹 Border positions pe stars print karenge"],
              code: `
function printHollowSquare(n) {
    // Hollow Square Pattern
    console.log("\\nPattern 2: Hollow Square");
    for(let i = 0; i < n; i++) {
        let pattern = '';
        for(let j = 0; j < n; j++) {
            // Print star for border positions
            if(i === 0 || i === n-1 || j === 0 || j === n-1) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        console.log(pattern);
    }
}`,
              explanation: [
                "🔹 First aur last row mei stars print hote hain",
                "🔹 First aur last column mei stars print hote hain",
                "🔹 Beech ke area mei spaces print hote hain",
                "🔹 Square border pattern banta hai"
              ]
            },
            {
              method: "Method 3: Hollow Rectangle with Diagonals",
              approach: ["🔹 Border aur diagonals dono print karenge"],
              code: `
function printHollowRectangleWithDiagonals(rows, cols) {
    // Hollow Rectangle with Diagonals
    console.log("\\nPattern 3: Hollow Rectangle with Diagonals");
    for(let i = 0; i < rows; i++) {
        let pattern = '';
        for(let j = 0; j < cols; j++) {
            // Print star for border or diagonal positions
            if(i === 0 || i === rows-1 || j === 0 || j === cols-1 ||
               i === j || i + j === rows-1) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        console.log(pattern);
    }
}

// Example Usage
const size = 5;
const rows = 6, cols = 8;

printCrossPattern(size);
printHollowSquare(size);
printHollowRectangleWithDiagonals(rows, cols);`,
              explanation: [
                "🔹 Border conditions check karte hain",
                "🔹 Diagonal conditions check karte hain",
                "🔹 Dono conditions combine karke pattern banate hain",
                "🔹 Complex pattern with multiple features"
              ]
            }
          ],
          output: `
Example Output:

Pattern 1: Cross Pattern (5x5):
*   *
 * * 
  *  
 * * 
*   *

Pattern 2: Hollow Square (5x5):
*****
*   *
*   *
*   *
*****

Pattern 3: Hollow Rectangle with Diagonals (6x8):
********
**    **
* *  * *
*  **  *
* *  * *
********`
        },
        practiceProblems: [
          "🔹 Different sizes ke patterns try karo",
          "🔹 Pattern mei different characters use karo",
          "🔹 Rectangle ke aspect ratio modify karo",
          "🔹 Custom diagonal patterns banao"
        ],
        interviewQuestions: [
          "🔹 Pattern printing mei space complexity kaise optimize karein?",
          "🔹 Different shapes ke liye generalized solution kaise banayein?",
          "🔹 Pattern printing mei edge cases kya ho sakte hain?",
          "🔹 Border conditions kaise efficiently check karein?"
        ],
        comparisonTable: [
          {
            approach: "Cross Pattern",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            pros: "Simple diagonal logic, clean output",
            cons: "Limited to X shape only"
          },
          {
            approach: "Hollow Square",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            pros: "Clear border visualization",
            cons: "Fixed aspect ratio"
          },
          {
            approach: "Rectangle with Diagonals",
            timeComplexity: "O(rows × cols)",
            spaceComplexity: "O(1)",
            pros: "Flexible dimensions, multiple features",
            cons: "More complex conditions to check"
          }
        ],
        conclusion: [
          "🔹 Border conditions carefully handle karein",
          "🔹 Pattern type ke according loop conditions set karein",
          "🔹 Space and time complexity optimize karein",
          "🔹 Code reusability ke liye modular approach use karein"
        ]
      },
      // Q-7. Star Pyramid and Diamond Shapes
      {
        title: "Star Pyramid and Diamond Shapes",
        description: "Star Pyramid and Diamond Shapes ke multiple variations explore karenge.",
        problemStatement: "Ek function likho jo star pyramid aur diamond shapes print kare. Different variations jaise solid pyramid, hollow pyramid, aur full diamond implement karo.",
        algorithm: [
          "🔹 User se rows ki number input lo",
          "🔹 Pattern type ke according spaces aur stars calculate karo",
          "🔹 Pyramid ke liye increasing pattern banao",
          "🔹 Diamond ke liye pyramid ko mirror karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Solid Star Pyramid",
              approach: ["🔹 Simple pyramid pattern with stars"],
              code: `
function printSolidPyramid(n) {
    console.log("Pattern 1: Solid Star Pyramid");
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        
        // Add spaces
        for(let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        
        // Add stars
        for(let j = 1; j <= 2 * i - 1; j++) {
            pattern += '*';
        }
        
        console.log(pattern);
    }
}`,
              explanation: [
                "🔹 Spaces decrease with each row",
                "🔹 Stars increase in odd numbers (2n-1)",
                "🔹 Perfect pyramid shape banta hai",
                "🔹 Clean and centered output"
              ]
            },
            {
              method: "Method 2: Hollow Pyramid Pattern",
              approach: ["🔹 Only border stars print karenge"],
              code: `
function printHollowPyramid(n) {
    console.log("\\nPattern 2: Hollow Pyramid");
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        
        // Add spaces
        for(let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        
        // Add stars and spaces
        for(let j = 1; j <= 2 * i - 1; j++) {
            if(j === 1 || j === 2 * i - 1 || i === n) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        
        console.log(pattern);
    }
}`,
              explanation: [
                "🔹 Only border pe stars print hote hain",
                "🔹 Last row mei complete stars print hote hain",
                "🔹 Beech mei spaces add karte hain",
                "🔹 Hollow pyramid structure banta hai"
              ]
            },
            {
              method: "Method 3: Full Diamond Pattern",
              approach: ["🔹 Upper and lower pyramids combine karenge"],
              code: `
function printFullDiamond(n) {
    console.log("\\nPattern 3: Full Diamond");
    
    // Upper half (Pyramid)
    for(let i = 1; i <= n; i++) {
        let pattern = '';
        
        // Add spaces
        for(let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        
        // Add stars
        for(let j = 1; j <= 2 * i - 1; j++) {
            pattern += '*';
        }
        
        console.log(pattern);
    }
    
    // Lower half (Inverted Pyramid)
    for(let i = n - 1; i >= 1; i--) {
        let pattern = '';
        
        // Add spaces
        for(let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        
        // Add stars
        for(let j = 1; j <= 2 * i - 1; j++) {
            pattern += '*';
        }
        
        console.log(pattern);
    }
}

// Example Usage
const rows = 5;
printSolidPyramid(rows);
printHollowPyramid(rows);
printFullDiamond(rows);`,
              explanation: [
                "🔹 Upper half mei pyramid pattern banate hain",
                "🔹 Lower half mei inverted pyramid pattern banate hain",
                "🔹 Dono patterns ko combine karke diamond banta hai",
                "🔹 Symmetric structure maintain hota hai"
              ]
            }
          ],
          output: `
Example Output for n = 5:

Pattern 1: Solid Star Pyramid
    *
   ***
  *****
 *******
*********

Pattern 2: Hollow Pyramid
    *
   * *
  *   *
 *     *
*********

Pattern 3: Full Diamond
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *`
        },
        practiceProblems: [
          "🔹 Different sizes ke patterns try karo",
          "🔹 Hollow diamond pattern banao",
          "🔹 Numbers se pyramid banao",
          "🔹 Pattern ko reverse karo"
        ],
        interviewQuestions: [
          "🔹 Space complexity kaise optimize karein?",
          "🔹 Pattern ke variations kya ho sakte hain?",
          "🔹 Edge cases kaise handle karein?",
          "🔹 Pattern mei symmetry kaise maintain karein?"
        ],
        comparisonTable: [
          {
            approach: "Solid Pyramid",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            pros: "Simple implementation, clear structure",
            cons: "Basic pattern, limited variations"
          },
          {
            approach: "Hollow Pyramid",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            pros: "Memory efficient, elegant look",
            cons: "Complex border conditions"
          },
          {
            approach: "Full Diamond",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            pros: "Complete symmetric pattern",
            cons: "Requires more iterations"
          }
        ],
        conclusion: [
          "🔹 Pattern type ke according approach choose karein",
          "🔹 Spacing aur alignment careful maintain karein",
          "🔹 Code readability ke liye comments add karein",
          "🔹 Different variations ke liye flexible code banayein"
        ]
      }
    ],
  },
  // 2️⃣ Number Theory & Complex Calculations
  {
    category: "Number Theory & Complex Calculations",
    questions: [
      // Q-8. ISBN Number
      {
        title: "ISBN Number Validator",
        description: "ISBN Number validation ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo ISBN number validate kare. ISBN-10 aur ISBN-13 dono formats handle karo.",
        algorithm: [
          "🔹 ISBN string input lo",
          "🔹 Format check karo (length and characters)",
          "🔹 ISBN-10 ya ISBN-13 identify karo",
          "🔹 Checksum calculate karke validate karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: ISBN-10 Validation",
              approach: ["🔹 10-digit ISBN ka checksum calculate karenge"],
              code: `
function validateISBN10(isbn) {
    // Remove hyphens and spaces
    isbn = isbn.replace(/[-\\s]/g, '');
    
    // Check length
    if(isbn.length !== 10) {
        return false;
    }
    
    // Calculate checksum
    let sum = 0;
    for(let i = 0; i < 9; i++) {
        if(!isNumeric(isbn[i])) return false;
        sum += parseInt(isbn[i]) * (10 - i);
    }
    
    // Handle last character (can be 'X' or number)
    const lastChar = isbn[9];
    if(lastChar === 'X') {
        sum += 10;
    } else if(isNumeric(lastChar)) {
        sum += parseInt(lastChar);
    } else {
        return false;
    }
    
    // Valid if sum is divisible by 11
    return sum % 11 === 0;
}

function isNumeric(char) {
    return /^\\d$/.test(char);
}`,
              explanation: [
                "🔹 Remove hyphens and spaces for consistent format",
                "🔹 Check if length is exactly 10",
                "🔹 Calculate weighted sum (10x first digit + 9x second digit + ...)",
                "🔹 Handle 'X' as value 10 in last position",
                "🔹 Validate if sum is divisible by 11"
              ]
            },
            {
              method: "Method 2: ISBN-13 Validation",
              approach: ["🔹 13-digit ISBN ka checksum calculate karenge"],
              code: `
function validateISBN13(isbn) {
    // Remove hyphens and spaces
    isbn = isbn.replace(/[-\\s]/g, '');
    
    // Check length
    if(isbn.length !== 13) {
        return false;
    }
    
    // Check if all characters are numeric
    if(!/^\\d{13}$/.test(isbn)) {
        return false;
    }
    
    // Calculate checksum
    let sum = 0;
    for(let i = 0; i < 12; i++) {
        sum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
    }
    
    // Calculate check digit
    const checkDigit = (10 - (sum % 10)) % 10;
    
    // Compare with actual check digit
    return checkDigit === parseInt(isbn[12]);
}`,
              explanation: [
                "🔹 Remove hyphens and spaces",
                "🔹 Verify length is exactly 13",
                "🔹 All characters must be numeric",
                "🔹 Calculate alternating sum (1x and 3x multipliers)",
                "🔹 Validate check digit"
              ]
            },
            {
              method: "Method 3: Universal ISBN Validator",
              approach: ["🔹 Both ISBN-10 and ISBN-13 handle karenge"],
              code: `
function validateISBN(isbn) {
    // Remove hyphens and spaces
    isbn = isbn.replace(/[-\\s]/g, '');
    
    // Check length and call appropriate validator
    switch(isbn.length) {
        case 10:
            return validateISBN10(isbn);
        case 13:
            return validateISBN13(isbn);
        default:
            return false;
    }
}

// Example Usage
const testISBNs = [
    "0-7475-3269-9",  // Valid ISBN-10
    "0-7475-3269-X",  // Valid ISBN-10 with X
    "978-0-7475-3269-9",  // Valid ISBN-13
    "0-7475-3269-0",  // Invalid ISBN-10
    "978-0-7475-3269-0"   // Invalid ISBN-13
];

testISBNs.forEach(isbn => {
    console.log(\`\${isbn}: \${validateISBN(isbn) ? 'Valid' : 'Invalid'}\`);
});`,
              explanation: [
                "🔹 Single interface for both formats",
                "🔹 Automatically detects format based on length",
                "🔹 Handles both numeric and 'X' cases",
                "🔹 Comprehensive validation for both standards"
              ]
            }
          ],
          output: `
Example Output:
0-7475-3269-9: Valid
0-7475-3269-X: Valid
978-0-7475-3269-9: Valid
0-7475-3269-0: Invalid
978-0-7475-3269-0: Invalid`
        },
        practiceProblems: [
          "🔹 ISBN-10 to ISBN-13 conversion implement karo",
          "🔹 Custom ISBN format validation banao",
          "🔹 Multiple ISBNs ek saath validate karo",
          "🔹 ISBN generation logic implement karo"
        ],
        interviewQuestions: [
          "🔹 ISBN checksum algorithm kaise work karta hai?",
          "🔹 ISBN-10 aur ISBN-13 mei kya differences hain?",
          "🔹 ISBN validation mei edge cases kya ho sakte hain?",
          "🔹 Real-world ISBN usage examples kya hain?"
        ],
        comparisonTable: [
          {
            approach: "ISBN-10 Validation",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple calculation, handles X digit",
            cons: "Limited to 10-digit format"
          },
          {
            approach: "ISBN-13 Validation",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Modern standard, numeric only",
            cons: "More complex checksum calculation"
          },
          {
            approach: "Universal Validator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Handles both formats, flexible",
            cons: "Slightly more complex code"
          }
        ],
        conclusion: [
          "🔹 Both ISBN formats efficiently validate karein",
          "🔹 Input sanitization important hai",
          "🔹 Error handling properly implement karein",
          "🔹 Format detection automatic hona chahiye"
        ]
      },
      // Q-9. HCF/GCD
      {
        title: "HCF/GCD Calculator",
        description: "HCF (Highest Common Factor) / GCD (Greatest Common Divisor) ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo do ya multiple numbers ka HCF/GCD calculate kare. Different approaches implement karo.",
        algorithm: [
          "🔹 Input numbers lo",
          "🔹 Different approaches use karke HCF calculate karo",
          "🔹 Euclid's algorithm ya prime factorization use karo",
          "🔹 Multiple numbers ke liye logic extend karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Euclid's Algorithm",
              approach: ["🔹 Recursive division method use karenge"],
              code: `
function calculateHCF(a, b) {
    // Base case
    if (b === 0) {
        return a;
    }
    
    // Recursive case using modulo
    return calculateHCF(b, a % b);
}

// Multiple numbers ke liye HCF
function calculateMultipleHCF(...numbers) {
    return numbers.reduce((a, b) => calculateHCF(a, b));
}

// Example Usage
console.log("HCF of 48 and 36:", calculateHCF(48, 36));
console.log("HCF of 48, 36, and 24:", calculateMultipleHCF(48, 36, 24));`,
              explanation: [
                "🔹 Euclid's algorithm: HCF(a,b) = HCF(b, a % b)",
                "🔹 Base case: when second number becomes 0",
                "🔹 Multiple numbers ke liye reduce() use karte hain",
                "🔹 Most efficient approach for two numbers"
              ]
            },
            {
              method: "Method 2: Prime Factorization Method",
              approach: ["🔹 Numbers ko prime factors mei break karke common factors find karenge"],
              code: `
function getPrimeFactors(n) {
    const factors = [];
    let divisor = 2;
    
    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    
    return factors;
}

function calculateHCFUsingPrimeFactors(a, b) {
    const factorsA = getPrimeFactors(a);
    const factorsB = getPrimeFactors(b);
    
    // Find common factors
    let hcf = 1;
    let i = 0, j = 0;
    
    while (i < factorsA.length && j < factorsB.length) {
        if (factorsA[i] === factorsB[j]) {
            hcf *= factorsA[i];
            i++;
            j++;
        } else if (factorsA[i] < factorsB[j]) {
            i++;
        } else {
            j++;
        }
    }
    
    return hcf;
}

// Example Usage
console.log("HCF using prime factors of 48 and 36:", 
            calculateHCFUsingPrimeFactors(48, 36));`,
              explanation: [
                "🔹 Numbers ko prime factors mei break karte hain",
                "🔹 Common prime factors find karte hain",
                "🔹 Common factors ka product HCF hota hai",
                "🔹 Good for understanding factor relationships"
              ]
            },
            {
              method: "Method 3: Consecutive Integer Checking Method",
              approach: ["🔹 Common factors ko iterate karke check karenge"],
              code: `
function calculateHCFByIteration(a, b) {
    // Find minimum of two numbers
    const minimum = Math.min(a, b);
    let hcf = 1;
    
    // Check all possible factors
    for(let i = 1; i <= minimum; i++) {
        if(a % i === 0 && b % i === 0) {
            hcf = i;
        }
    }
    
    return hcf;
}

// With optimization for larger numbers
function calculateOptimizedHCF(a, b) {
    // Start from minimum number and go down
    let minimum = Math.min(a, b);
    
    while(minimum > 0) {
        if(a % minimum === 0 && b % minimum === 0) {
            return minimum;
        }
        minimum--;
    }
    
    return 1;
}

// Example Usage
console.log("HCF by iteration of 48 and 36:", 
            calculateHCFByIteration(48, 36));
console.log("HCF by optimized iteration of 48 and 36:", 
            calculateOptimizedHCF(48, 36));`,
              explanation: [
                "🔹 Possible factors ko check karte hain",
                "🔹 Minimum number tak iterate karte hain",
                "🔹 Optimization ke liye reverse order mei check karte hain",
                "🔹 Simple but less efficient for large numbers"
              ]
            }
          ],
          output: `
Example Output:
HCF of 48 and 36: 12
HCF of 48, 36, and 24: 12
HCF using prime factors of 48 and 36: 12
HCF by iteration of 48 and 36: 12
HCF by optimized iteration of 48 and 36: 12`
        },
        practiceProblems: [
          "🔹 Multiple numbers ka HCF find karo",
          "🔹 Large numbers ke liye optimize karo",
          "🔹 Prime factorization visualization banao",
          "🔹 LCM and HCF relationship explore karo"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Euclid's algorithm kaise work karta hai?",
          "🔹 HCF and LCM ka relationship kya hai?",
          "🔹 Real-world applications kya hain?"
        ],
        comparisonTable: [
          {
            approach: "Euclid's Algorithm",
            timeComplexity: "O(log(min(a,b)))",
            spaceComplexity: "O(1)",
            pros: "Most efficient, works well for large numbers",
            cons: "Recursive approach can hit stack limit"
          },
          {
            approach: "Prime Factorization",
            timeComplexity: "O(sqrt(n))",
            spaceComplexity: "O(log n)",
            pros: "Helps understand number relationships",
            cons: "Less efficient for large numbers"
          },
          {
            approach: "Consecutive Integer Checking",
            timeComplexity: "O(min(a,b))",
            spaceComplexity: "O(1)",
            pros: "Simple to understand and implement",
            cons: "Least efficient for large numbers"
          }
        ],
        conclusion: [
          "🔹 Euclid's algorithm is most efficient",
          "🔹 Choose approach based on requirements",
          "🔹 Consider number size when selecting method",
          "🔹 Understand the mathematical concepts"
        ]
      },
      // Q-10. Harshad Number
      {
        title: "Harshad Number Checker",
        description: "Harshad Number (or Niven number) ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo check kare ki given number Harshad number hai ya nahi. Harshad number woh hota hai jo apne digits ke sum se divisible hota hai.",
        algorithm: [
          "🔹 Number ke digits ka sum calculate karo",
          "🔹 Check karo ki number apne digits ke sum se divisible hai ya nahi",
          "🔹 Range of numbers ke liye bhi check karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Iteration Approach",
              approach: ["🔹 Basic method using string conversion"],
              code: `
function isHarshadNumber(num) {
    // Convert number to string to handle digits
    const numStr = num.toString();
    
    // Calculate sum of digits
    let sum = 0;
    for(let digit of numStr) {
        sum += parseInt(digit);
    }
    
    // Check if number is divisible by sum of its digits
    return num % sum === 0;
}

// Function to find Harshad numbers in a range
function findHarshadNumbers(start, end) {
    const result = [];
    
    for(let i = start; i <= end; i++) {
        if(isHarshadNumber(i)) {
            result.push(i);
        }
    }
    
    return result;
}

// Example Usage
console.log("Is 18 Harshad Number?", isHarshadNumber(18));
console.log("Harshad Numbers between 1 and 50:", 
            findHarshadNumbers(1, 50));`,
              explanation: [
                "🔹 Number ko string mei convert karte hain",
                "🔹 Digits ka sum calculate karte hain",
                "🔹 Number ko sum se divide karke check karte hain",
                "🔹 Range ke liye loop use karte hain"
              ]
            },
            {
              method: "Method 2: Mathematical Approach",
              approach: ["🔹 Without string conversion, using mathematical operations"],
              code: `
function getDigitSum(num) {
    let sum = 0;
    let temp = num;
    
    while(temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    
    return sum;
}

function isHarshadNumberMath(num) {
    const digitSum = getDigitSum(num);
    return num % digitSum === 0;
}

function findHarshadNumbersMath(start, end) {
    const result = [];
    
    for(let i = start; i <= end; i++) {
        if(isHarshadNumberMath(i)) {
            result.push(i);
        }
    }
    
    return result;
}

// Example Usage
console.log("Is 156 Harshad Number?", isHarshadNumberMath(156));
console.log("First 10 Harshad numbers:", 
            findHarshadNumbersMath(1, 100).slice(0, 10));`,
              explanation: [
                "🔹 Pure mathematical operations use karte hain",
                "🔹 Modulo and division se digits extract karte hain",
                "🔹 Better performance for large numbers",
                "🔹 No string conversion required"
              ]
            },
            {
              method: "Method 3: Array Reduction Method",
              approach: ["🔹 Using modern array methods"],
              code: `
function isHarshadNumberArray(num) {
    const digitSum = Array.from(num.toString())
                         .reduce((sum, digit) => sum + parseInt(digit), 0);
    return num % digitSum === 0;
}

// Find next Harshad number
function findNextHarshadNumber(num) {
    let next = num + 1;
    while(!isHarshadNumberArray(next)) {
        next++;
    }
    return next;
}

// Generate sequence of n Harshad numbers
function generateHarshadSequence(n) {
    const sequence = [];
    let current = 1;
    
    while(sequence.length < n) {
        if(isHarshadNumberArray(current)) {
            sequence.push(current);
        }
        current++;
    }
    
    return sequence;
}

// Example Usage
console.log("Is 200 Harshad Number?", isHarshadNumberArray(200));
console.log("Next Harshad number after 100:", findNextHarshadNumber(100));
console.log("First 10 Harshad numbers:", generateHarshadSequence(10));`,
              explanation: [
                "🔹 Modern array methods ka use karte hain",
                "🔹 Sequence generation functionality add ki hai",
                "🔹 Next Harshad number finding ka feature",
                "🔹 Clean and functional programming approach"
              ]
            }
          ],
          output: `
Example Output:
Is 18 Harshad Number? true
Harshad Numbers between 1 and 50: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48, 50]
Is 156 Harshad Number? true
First 10 Harshad numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
        },
        practiceProblems: [
          "🔹 Find all Harshad numbers in a given range",
          "🔹 Find the nth Harshad number",
          "🔹 Check if number is multiple Harshad number",
          "🔹 Generate first N Harshad numbers"
        ],
        interviewQuestions: [
          "🔹 Harshad number ki properties kya hain?",
          "🔹 Different approaches ki complexity compare karo",
          "🔹 All single digit numbers Harshad number kyun hote hain?",
          "🔹 Real-world applications kya ho sakte hain?"
        ],
        comparisonTable: [
          {
            approach: "String Iteration",
            timeComplexity: "O(d) where d is number of digits",
            spaceComplexity: "O(1)",
            pros: "Simple to understand and implement",
            cons: "String conversion overhead"
          },
          {
            approach: "Mathematical Method",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            pros: "No string conversion needed, efficient",
            cons: "Slightly complex to understand"
          },
          {
            approach: "Array Reduction",
            timeComplexity: "O(d)",
            spaceComplexity: "O(d)",
            pros: "Modern and clean code",
            cons: "Higher space complexity"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Mathematical approach is most efficient",
          "🔹 Consider input size when selecting method",
          "🔹 Handle edge cases properly"
        ]
      },
      // Q-11. Perfect Square
      {
        title: "Perfect Square Checker",
        description: "Perfect Square numbers ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo check kare ki given number perfect square hai ya nahi aur uske related operations perform kare.",
        algorithm: [
          "🔹 Number ko check karo ki perfect square hai ya nahi",
          "🔹 Square root calculate karke validate karo",
          "🔹 Range mei perfect squares find karo",
          "🔹 Next perfect square find karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Square Root Method",
              approach: ["🔹 Using built-in Math.sqrt() function"],
              code: `
function isPerfectSquare(num) {
    if (num < 0) return false;
    
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

// Find perfect squares in range
function findPerfectSquares(start, end) {
    const result = [];
    for(let i = start; i <= end; i++) {
        if(isPerfectSquare(i)) {
            result.push(i);
        }
    }
    return result;
}

// Example Usage
console.log("Is 16 Perfect Square?", isPerfectSquare(16));
console.log("Perfect Squares between 1 and 50:", findPerfectSquares(1, 50));`,
              explanation: [
                "🔹 Math.sqrt() se square root calculate karte hain",
                "🔹 Floor value se compare karke check karte hain",
                "🔹 Negative numbers ke liye false return karte hain",
                "🔹 Range ke liye loop use karte hain"
              ]
            },
            {
              method: "Method 2: Binary Search Approach",
              approach: ["🔹 Binary search to find square root"],
              code: `
function isPerfectSquareBinary(num) {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;
    
    let start = 1;
    let end = Math.floor(num / 2);
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const square = mid * mid;
        
        if (square === num) return true;
        if (square < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return false;
}

// Find next perfect square
function findNextPerfectSquare(num) {
    if (num < 0) return 0;
    
    const sqrt = Math.floor(Math.sqrt(num));
    return (sqrt + 1) * (sqrt + 1);
}

// Example Usage
console.log("Is 25 Perfect Square?", isPerfectSquareBinary(25));
console.log("Next Perfect Square after 24:", findNextPerfectSquare(24));`,
              explanation: [
                "🔹 Binary search se efficient searching karte hain",
                "🔹 Search space ko half karte rehte hain",
                "🔹 Next perfect square efficiently find karte hain",
                "🔹 Edge cases handle karte hain"
              ]
            },
            {
              method: "Method 3: Newton's Method",
              approach: ["🔹 Using Newton's approximation method"],
              code: `
function isPerfectSquareNewton(num) {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;
    
    let x = num;
    let y = (x + num / x) / 2;
    
    // Newton's method iteration
    while (Math.abs(x - y) >= 0.0000001) {
        x = y;
        y = (x + num / x) / 2;
    }
    
    return Math.abs(x - Math.floor(x)) < 0.0000001;
}

// Generate sequence of n perfect squares
function generatePerfectSquares(n) {
    const sequence = [];
    for(let i = 1; sequence.length < n; i++) {
        if(isPerfectSquare(i)) {
            sequence.push(i);
        }
    }
    return sequence;
}

// Example Usage
console.log("Is 36 Perfect Square?", isPerfectSquareNewton(36));
console.log("First 10 Perfect Squares:", generatePerfectSquares(10));`,
              explanation: [
                "🔹 Newton's method for fast convergence",
                "🔹 High precision results milte hain",
                "🔹 Sequence generation supported",
                "🔹 Floating point precision handle karte hain"
              ]
            }
          ],
          output: `
Example Output:
Is 16 Perfect Square? true
Perfect Squares between 1 and 50: [1, 4, 9, 16, 25, 36, 49]
Is 25 Perfect Square? true
Next Perfect Square after 24: 25
Is 36 Perfect Square? true
First 10 Perfect Squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`
        },
        practiceProblems: [
          "🔹 Check perfect square without using sqrt()",
          "🔹 Find sum of perfect squares in range",
          "🔹 Find perfect square patterns",
          "🔹 Calculate nth perfect square efficiently"
        ],
        interviewQuestions: [
          "🔹 Different methods ki time complexity compare karo",
          "🔹 Newton's method kaise work karta hai?",
          "🔹 Binary search approach mei edge cases kya hain?",
          "🔹 Floating point precision kaise handle karein?"
        ],
        comparisonTable: [
          {
            approach: "Square Root Method",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and direct approach",
            cons: "Dependent on built-in function"
          },
          {
            approach: "Binary Search",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            pros: "No built-in sqrt needed, efficient",
            cons: "More complex implementation"
          },
          {
            approach: "Newton's Method",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            pros: "Fast convergence, high precision",
            cons: "Requires floating point handling"
          }
        ],
        conclusion: [
          "🔹 Choose method based on precision needs",
          "🔹 Consider performance requirements",
          "🔹 Handle edge cases properly",
          "🔹 Understand floating point limitations"
        ]
      },
      // Q-12. Abundant Number
      {
        title: "Abundant Number Checker",
        description: "Abundant Numbers (or excessive numbers) ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo check kare ki given number abundant hai ya nahi. Abundant number woh hota hai jiska proper divisors ka sum number se bada hota hai.",
        algorithm: [
          "🔹 Number ke proper divisors find karo",
          "🔹 Divisors ka sum calculate karo",
          "🔹 Sum ko number se compare karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Iteration Approach",
              approach: ["🔹 Basic iteration to find divisors"],
              code: `
function isAbundantNumber(num) {
    if (num <= 0) return false;
    
    // Find proper divisors and calculate sum
    let divisorSum = 0;
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            divisorSum += i;
        }
    }
    
    // Check if sum of proper divisors is greater than number
    return divisorSum > num;
}

// Find abundant numbers in range
function findAbundantNumbers(start, end) {
    const result = [];
    for(let i = start; i <= end; i++) {
        if(isAbundantNumber(i)) {
            result.push(i);
        }
    }
    return result;
}

// Example Usage
console.log("Is 12 Abundant Number?", isAbundantNumber(12)); // true (1+2+3+4+6 = 16 > 12)
console.log("First few Abundant Numbers:", findAbundantNumbers(1, 50));`,
              explanation: [
                "🔹 Proper divisors find karte hain (number se chote divisors)",
                "🔹 Divisors ka sum calculate karte hain",
                "🔹 Sum ko number se compare karte hain",
                "🔹 Range ke liye loop use karte hain"
              ]
            },
            {
              method: "Method 2: Optimized Divisor Finding",
              approach: ["🔹 Sqrt optimization for finding divisors"],
              code: `
function getProperDivisorsSum(num) {
    if (num <= 0) return 0;
    
    let sum = 1; // 1 is always a proper divisor
    const sqrt = Math.sqrt(num);
    
    // Check up to square root only
    for(let i = 2; i <= sqrt; i++) {
        if(num % i === 0) {
            sum += i;
            // If divisors are different, add the other divisor
            if(i !== num/i) {
                sum += num/i;
            }
        }
    }
    
    return sum;
}

function isAbundantNumberOptimized(num) {
    if (num <= 0) return false;
    return getProperDivisorsSum(num) > num;
}

// Find next abundant number
function findNextAbundantNumber(num) {
    let next = num + 1;
    while(!isAbundantNumberOptimized(next)) {
        next++;
    }
    return next;
}

// Example Usage
console.log("Is 18 Abundant Number?", isAbundantNumberOptimized(18));
console.log("Next Abundant Number after 20:", findNextAbundantNumber(20));`,
              explanation: [
                "🔹 Square root tak hi check karte hain efficiency ke liye",
                "🔹 Pairs mei divisors add karte hain",
                "🔹 Next abundant number find kar sakte hain",
                "🔹 Better performance for large numbers"
              ]
            },
            {
              method: "Method 3: Using Factor Pairs",
              approach: ["🔹 Factor pairs ka use karke optimization"],
              code: `
function getFactorPairs(num) {
    const pairs = [];
    const sqrt = Math.sqrt(num);
    
    for(let i = 1; i <= sqrt; i++) {
        if(num % i === 0) {
            pairs.push([i, num/i]);
        }
    }
    return pairs;
}

function isAbundantNumberUsingPairs(num) {
    if (num <= 0) return false;
    
    const pairs = getFactorPairs(num);
    let sum = -num; // Subtract num since it will be included in pairs
    
    // Calculate sum from factor pairs
    for(const [a, b] of pairs) {
        sum += a;
        if(a !== b) sum += b;
    }
    
    return sum > num;
}

// Generate sequence of n abundant numbers
function generateAbundantSequence(n) {
    const sequence = [];
    let num = 1;
    
    while(sequence.length < n) {
        if(isAbundantNumberUsingPairs(num)) {
            sequence.push(num);
        }
        num++;
    }
    return sequence;
}

// Example Usage
console.log("First 10 Abundant Numbers:", generateAbundantSequence(10));
console.log("Factor Pairs of 12:", getFactorPairs(12));`,
              explanation: [
                "🔹 Factor pairs efficiently calculate karte hain",
                "🔹 Pairs se sum calculate karte hain",
                "🔹 Memory efficient approach hai",
                "🔹 Sequence generation support karta hai"
              ]
            }
          ],
          output: `
Example Output:
Is 12 Abundant Number? true
First few Abundant Numbers: [12, 18, 20, 24, 28, 30, 36, 40, 42, 48]
Is 18 Abundant Number? true
Next Abundant Number after 20: 24
Factor Pairs of 12: [[1,12], [2,6], [3,4]]`
        },
        practiceProblems: [
          "🔹 Find all abundant numbers in a given range",
          "🔹 Check if number is highly abundant",
          "🔹 Find sum of proper divisors efficiently",
          "🔹 Generate first N abundant numbers"
        ],
        interviewQuestions: [
          "🔹 Abundant number properties kya hain?",
          "🔹 Optimization techniques kya use kar sakte hain?",
          "🔹 Perfect numbers se relation kya hai?",
          "🔹 Real-world applications kahan hain?"
        ],
        comparisonTable: [
          {
            approach: "Simple Iteration",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Simple to understand and implement",
            cons: "Not efficient for large numbers"
          },
          {
            approach: "Sqrt Optimization",
            timeComplexity: "O(√n)",
            spaceComplexity: "O(1)",
            pros: "More efficient, handles large numbers",
            cons: "Slightly more complex logic"
          },
          {
            approach: "Factor Pairs",
            timeComplexity: "O(√n)",
            spaceComplexity: "O(√n)",
            pros: "Clean and organized approach",
            cons: "Uses extra space for pairs"
          }
        ],
        conclusion: [
          "🔹 Sqrt optimization is most efficient",
          "🔹 Factor pairs give cleaner code structure",
          "🔹 Handle edge cases properly",
          "🔹 Consider input size when choosing method"
        ]
      },
      // Q-13. Fibonacci Series
      {
        title: "Fibonacci Series Calculator",
        description: "Fibonacci Series ke multiple approaches explore karenge",
        problemStatement: "Ek function likho jo Fibonacci series ke nth term ya first n terms calculate kare. Different approaches implement karo optimization ke sath.",
        algorithm: [
          "🔹 Base cases handle karo (F(0) = 0, F(1) = 1)",
          "🔹 Fibonacci formula: F(n) = F(n-1) + F(n-2)",
          "🔹 Different approaches se solution implement karo",
          "🔹 Space and time complexity optimize karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Recursive Approach",
              approach: ["🔹 Simple recursive solution with base cases"],
              code: `
function fibonacciRecursive(n) {
    // Base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    // Recursive call
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Generate first n Fibonacci numbers
function generateFibonacciRecursive(n) {
    const series = [];
    for(let i = 0; i < n; i++) {
        series.push(fibonacciRecursive(i));
    }
    return series;
}

// Example Usage
console.log("8th Fibonacci Number:", fibonacciRecursive(8));
console.log("First 10 Fibonacci Numbers:", generateFibonacciRecursive(10));`,
              explanation: [
                "🔹 Base cases ke liye direct values return karte hain",
                "🔹 Recursive calls se previous numbers add karte hain",
                "🔹 Simple to understand but not efficient for large n",
                "🔹 Multiple recursive calls cause performance issues"
              ]
            },
            {
              method: "Method 2: Dynamic Programming (Memoization)",
              approach: ["🔹 Cache previous results to avoid recalculation"],
              code: `
function fibonacciDP(n, memo = {}) {
    // Check if result exists in memo
    if (n in memo) return memo[n];
    
    // Base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    // Calculate and store result
    memo[n] = fibonacciDP(n - 1, memo) + fibonacciDP(n - 2, memo);
    return memo[n];
}

// Generate first n Fibonacci numbers with DP
function generateFibonacciDP(n) {
    const memo = {};
    const series = [];
    for(let i = 0; i < n; i++) {
        series.push(fibonacciDP(i, memo));
    }
    return series;
}

// Example Usage
console.log("20th Fibonacci Number:", fibonacciDP(20));
console.log("First 15 Fibonacci Numbers:", generateFibonacciDP(15));`,
              explanation: [
                "🔹 Memoization se duplicate calculations avoid karte hain",
                "🔹 Cache mei results store karte hain",
                "🔹 Significantly better performance than recursive",
                "🔹 Space-time tradeoff use karta hai"
              ]
            },
            {
              method: "Method 3: Iterative Approach",
              approach: ["🔹 Using loop with only two variables"],
              code: `
function fibonacciIterative(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    let prev = 0, current = 1;
    
    for(let i = 2; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    
    return current;
}

// Generate series with space optimization
function generateFibonacciIterative(n) {
    const series = [0];
    if (n <= 1) return series;
    
    series.push(1);
    let prev = 0, current = 1;
    
    for(let i = 2; i < n; i++) {
        const next = prev + current;
        series.push(next);
        prev = current;
        current = next;
    }
    
    return series;
}

// Example Usage with Big Numbers
console.log("30th Fibonacci Number:", fibonacciIterative(30));
console.log("First 20 Fibonacci Numbers:", generateFibonacciIterative(20));`,
              explanation: [
                "🔹 Only two variables use karke memory optimize karte hain",
                "🔹 Loop based solution is most efficient",
                "🔹 No recursion overhead",
                "🔹 Best approach for large numbers"
              ]
            }
          ],
          output: `
Example Output:
8th Fibonacci Number: 21
First 10 Fibonacci Numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
20th Fibonacci Number: 6765
First 15 Fibonacci Numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
30th Fibonacci Number: 832040
First 20 Fibonacci Numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]`
        },
        practiceProblems: [
          "🔹 Find sum of even Fibonacci numbers up to n",
          "🔹 Check if number is Fibonacci number",
          "🔹 Find closest Fibonacci number",
          "🔹 Generate Fibonacci sequence with custom starting numbers"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Space optimization techniques kya hain?",
          "🔹 Fibonacci series ke real-world applications kya hain?",
          "🔹 Large numbers ke liye best approach kaunsa hai?"
        ],
        comparisonTable: [
          {
            approach: "Recursive",
            timeComplexity: "O(2^n)",
            spaceComplexity: "O(n)",
            pros: "Simple to understand and implement",
            cons: "Very inefficient for large numbers"
          },
          {
            approach: "Dynamic Programming",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Much better performance than recursive",
            cons: "Uses extra space for memoization"
          },
          {
            approach: "Iterative",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Most efficient, constant space",
            cons: "Slightly more complex to understand"
          }
        ],
        conclusion: [
          "🔹 Iterative approach is most efficient",
          "🔹 Use DP for better understanding or when caching helps",
          "🔹 Avoid recursive for large numbers",
          "🔹 Consider problem constraints when choosing approach"
        ]
      },
      // Q-14. Find Numbers with Exactly X Divisors
      {
        title: "Find Numbers with Exactly X Divisors",
        description: "Numbers with exactly X divisors ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo ek range mei se woh sare numbers find kare jinke exactly X divisors hain. Different approaches implement karo optimization ke sath.",
        algorithm: [
          "🔹 Range aur required divisors count (X) input lo",
          "🔹 Har number ke liye divisors count calculate karo",
          "🔹 Exactly X divisors wale numbers ko store karo",
          "🔹 Different optimizations implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Iteration Approach",
              approach: ["🔹 Basic divisor counting for each number"],
              code: `
function countDivisors(num) {
    let count = 0;
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            count++;
        }
    }
    return count;
}

function findNumbersWithXDivisors(start, end, x) {
    const result = [];
    
    for(let num = start; num <= end; num++) {
        if(countDivisors(num) === x) {
            result.push(num);
        }
    }
    
    return result;
}

// Example Usage
console.log("Numbers between 1-50 with exactly 3 divisors:", 
            findNumbersWithXDivisors(1, 50, 3));
console.log("Numbers between 1-100 with exactly 4 divisors:", 
            findNumbersWithXDivisors(1, 100, 4));`,
              explanation: [
                "🔹 Har number ke liye 1 se lekar number tak check karte hain",
                "🔹 Divisors count track karte hain",
                "🔹 Required count match hone par number store karte hain",
                "🔹 Simple but not efficient for large numbers"
              ]
            },
            {
              method: "Method 2: Square Root Optimization",
              approach: ["🔹 Using square root to reduce iterations"],
              code: `
function countDivisorsOptimized(num) {
    let count = 0;
    const sqrt = Math.sqrt(num);
    
    // Check up to square root
    for(let i = 1; i <= sqrt; i++) {
        if(num % i === 0) {
            // If divisors are different, add both
            if(i === num/i) {
                count++;
            } else {
                count += 2;
            }
        }
    }
    
    return count;
}

function findNumbersWithXDivisorsOptimized(start, end, x) {
    const result = [];
    
    for(let num = start; num <= end; num++) {
        if(countDivisorsOptimized(num) === x) {
            result.push({
                number: num,
                divisors: getDivisors(num)
            });
        }
    }
    
    return result;
}

function getDivisors(num) {
    const divisors = [];
    const sqrt = Math.sqrt(num);
    
    for(let i = 1; i <= sqrt; i++) {
        if(num % i === 0) {
            divisors.push(i);
            if(i !== num/i) {
                divisors.push(num/i);
            }
        }
    }
    
    return divisors.sort((a, b) => a - b);
}

// Example Usage
console.log("Numbers with exactly 4 divisors (optimized):", 
            findNumbersWithXDivisorsOptimized(1, 50, 4));`,
              explanation: [
                "🔹 Square root tak hi check karte hain",
                "🔹 Pairs mei divisors add karte hain",
                "🔹 Significantly better performance",
                "🔹 Actual divisors bhi return karte hain"
              ]
            },
            {
              method: "Method 3: Prime Factorization Approach",
              approach: ["🔹 Using prime factorization to count divisors"],
              code: `
function getPrimeFactorization(num) {
    const factorization = {};
    let n = num;
    
    for(let i = 2; i * i <= n; i++) {
        while(n % i === 0) {
            factorization[i] = (factorization[i] || 0) + 1;
            n = n / i;
        }
    }
    
    if(n > 1) {
        factorization[n] = (factorization[n] || 0) + 1;
    }
    
    return factorization;
}

function countDivisorsFromPrimeFactors(num) {
    const primeFactors = getPrimeFactorization(num);
    let divisorsCount = 1;
    
    // Formula: (e1 + 1) * (e2 + 1) * ... * (en + 1)
    // where ei is the exponent of each prime factor
    for(const prime in primeFactors) {
        divisorsCount *= (primeFactors[prime] + 1);
    }
    
    return divisorsCount;
}

function findNumbersWithXDivisorsPrime(start, end, x) {
    const result = [];
    
    for(let num = start; num <= end; num++) {
        if(countDivisorsFromPrimeFactors(num) === x) {
            result.push({
                number: num,
                primeFactors: getPrimeFactorization(num)
            });
        }
    }
    
    return result;
}

// Example Usage
console.log("Numbers with exactly 6 divisors (using prime factorization):", 
            findNumbersWithXDivisorsPrime(1, 100, 6));`,
              explanation: [
                "🔹 Prime factorization se divisors count calculate karte hain",
                "🔹 Formula: (e1 + 1) * (e2 + 1) * ... * (en + 1)",
                "🔹 Most efficient for large numbers",
                "🔹 Prime factorization information bhi provide karta hai"
              ]
            }
          ],
          output: `
Example Output:
Numbers between 1-50 with exactly 3 divisors: [4, 9, 25, 49]
Numbers between 1-100 with exactly 4 divisors: [6, 8, 10, 14, 15, 21, 22, 26, 27, 33, 34, 35, 38, 39, 46, 51, 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]
Numbers with exactly 6 divisors: [12, 18, 20, 28, 44, 45, 50, 52, 63, 68, 75, 76, 92, 98, 99]`
        },
        practiceProblems: [
          "🔹 Find numbers with prime number of divisors",
          "🔹 Find numbers whose divisor count is a perfect square",
          "🔹 Find pairs of numbers with same divisor count",
          "🔹 Optimize for very large ranges"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Divisor counting ke mathematical properties explain karo",
          "🔹 Prime factorization approach kaise work karta hai?",
          "🔹 Large numbers ke liye best optimization kya hai?"
        ],
        comparisonTable: [
          {
            approach: "Simple Iteration",
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            pros: "Easy to understand and implement",
            cons: "Very slow for large numbers"
          },
          {
            approach: "Square Root Optimization",
            timeComplexity: "O(n√n)",
            spaceComplexity: "O(1)",
            pros: "Much better performance than simple iteration",
            cons: "Still not optimal for very large numbers"
          },
          {
            approach: "Prime Factorization",
            timeComplexity: "O(n log log n)",
            spaceComplexity: "O(log n)",
            pros: "Most efficient, works well with large numbers",
            cons: "More complex implementation"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on input range",
          "🔹 Use square root optimization for medium sized numbers",
          "🔹 Prime factorization best for large numbers",
          "🔹 Consider space-time tradeoffs"
        ]
      },
      // Q-15. Prime Factors
      {
        title: "Prime Factors Calculator",
        description: "Prime Factors ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo given number ke prime factors find kare. Different approaches aur optimizations implement karo.",
        algorithm: [
          "🔹 Input number ko check karo prime factors ke liye",
          "🔹 2 se start karke number ko divide karo jab tak possible ho",
          "🔹 Har prime factor ko store karo",
          "🔹 Process continue karo jab tak number 1 na ho jaye"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Trial Division",
              approach: ["🔹 Basic trial division with sequential numbers"],
              code: `
function findPrimeFactors(num) {
    const factors = [];
    let n = num;
    
    // Handle 2 separately to optimize odd number iterations
    while(n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }
    
    // Check odd numbers up to square root
    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        while(n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    
    // If n is still greater than 2, it's a prime number itself
    if(n > 2) {
        factors.push(n);
    }
    
    return factors;
}

// Example Usage
console.log("Prime factors of 84:", findPrimeFactors(84));
console.log("Prime factors of 13195:", findPrimeFactors(13195));`,
              explanation: [
                "🔹 2 ko special case ke tarah handle karte hain",
                "🔹 Odd numbers ke liye optimization karte hain",
                "🔹 Square root tak hi check karte hain efficiency ke liye",
                "🔹 Last remaining number ko prime factor consider karte hain"
              ]
            },
            {
              method: "Method 2: Wheel Factorization",
              approach: ["🔹 Using wheel of first few prime numbers"],
              code: `
function findPrimeFactorsWheel(num) {
    const factors = [];
    let n = num;
    
    // First handle small prime factors: 2, 3, 5
    const smallPrimes = [2, 3, 5];
    for(let prime of smallPrimes) {
        while(n % prime === 0) {
            factors.push(prime);
            n = n / prime;
        }
    }
    
    // Use wheel of increments: 4, 2, 4, 2, 4, 6, 2, 6
    const wheel = [4, 2, 4, 2, 4, 6, 2, 6];
    let wheelIndex = 0;
    let divisor = 7;
    
    while(divisor * divisor <= n) {
        if(n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor += wheel[wheelIndex];
            wheelIndex = (wheelIndex + 1) % wheel.length;
        }
    }
    
    if(n > 1) factors.push(n);
    
    return factors;
}

// Example Usage
console.log("Prime factors using wheel of 100:", 
            findPrimeFactorsWheel(100));`,
              explanation: [
                "🔹 Small prime numbers ko pehle handle karte hain",
                "🔹 Wheel pattern use karke unnecessary numbers skip karte hain",
                "🔹 Better performance for large numbers",
                "🔹 Memory efficient approach hai"
              ]
            },
            {
              method: "Method 3: Dynamic Programming Approach",
              approach: ["🔹 Using pre-computed prime numbers"],
              code: `
function generatePrimes(limit) {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for(let i = 2; i * i <= limit; i++) {
        if(isPrime[i]) {
            for(let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.reduce((primes, isPrime, num) => {
        if(isPrime) primes.push(num);
        return primes;
    }, []);
}

function findPrimeFactorsDP(num) {
    const primes = generatePrimes(Math.floor(Math.sqrt(num)));
    const factors = [];
    let n = num;
    
    for(let prime of primes) {
        while(n % prime === 0) {
            factors.push(prime);
            n = n / prime;
        }
        if(n === 1) break;
    }
    
    if(n > 1) factors.push(n);
    
    return {
        factors,
        factorization: factors.reduce((acc, factor) => {
            acc[factor] = (acc[factor] || 0) + 1;
            return acc;
        }, {})
    };
}

// Example Usage
console.log("Prime factorization of 144:", 
            findPrimeFactorsDP(144));`,
              explanation: [
                "🔹 Sieve of Eratosthenes se prime numbers generate karte hain",
                "🔹 Pre-computed primes se factors find karte hain",
                "🔹 Factor count bhi calculate karte hain",
                "🔹 Structured output provide karte hain"
              ]
            }
          ],
          output: `
Example Output:
Prime factors of 84: [2, 2, 3, 7]
Prime factors of 13195: [5, 7, 13, 29]
Prime factors using wheel of 100: [2, 2, 5, 5]
Prime factorization of 144: {
  factors: [2, 2, 2, 2, 3, 3],
  factorization: { '2': 4, '3': 2 }
}`
        },
        practiceProblems: [
          "🔹 Find largest prime factor of a number",
          "🔹 Check if number is prime using factors",
          "🔹 Find common prime factors of two numbers",
          "🔹 Generate prime factorization tree"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Memory optimization techniques kya hain?",
          "🔹 Large numbers ke liye kaunsa approach best hai?",
          "🔹 Prime factorization ke real-world applications kya hain?"
        ],
        comparisonTable: [
          {
            approach: "Trial Division",
            timeComplexity: "O(√n)",
            spaceComplexity: "O(log n)",
            pros: "Simple to implement, good for small numbers",
            cons: "Not efficient for very large numbers"
          },
          {
            approach: "Wheel Factorization",
            timeComplexity: "O(√n)",
            spaceComplexity: "O(log n)",
            pros: "More efficient than trial division",
            cons: "Complex implementation"
          },
          {
            approach: "Dynamic Programming",
            timeComplexity: "O(√n log log √n)",
            spaceComplexity: "O(√n)",
            pros: "Efficient for multiple queries",
            cons: "Higher memory usage"
          }
        ],
        conclusion: [
          "🔹 Choose method based on input size and constraints",
          "🔹 Consider memory vs speed tradeoffs",
          "🔹 Optimize for specific use cases",
          "🔹 Handle edge cases properly"
        ]
      },
      // Q-16. Calculate Area
      {
        title: "Calculate Area",
        description: "Different geometric shapes ka area calculate karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo different geometric shapes (circle, triangle, rectangle, square) ka area calculate kare. Different formulas aur edge cases handle karo.",
        algorithm: [
          "🔹 Shape type aur required parameters input lo",
          "🔹 Shape ke according formula apply karo",
          "🔹 Invalid inputs handle karo",
          "🔹 Result proper precision ke sath return karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Basic Area Calculator",
              approach: ["🔹 Individual functions for each shape"],
              code: `
function calculateArea(shape, ...params) {
    switch(shape.toLowerCase()) {
        case 'circle':
            return calculateCircleArea(...params);
        case 'rectangle':
            return calculateRectangleArea(...params);
        case 'triangle':
            return calculateTriangleArea(...params);
        case 'square':
            return calculateSquareArea(...params);
        default:
            return 'Invalid shape';
    }
}

function calculateCircleArea(radius) {
    if (radius <= 0) return 'Invalid radius';
    return (Math.PI * radius * radius).toFixed(2);
}

function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) return 'Invalid dimensions';
    return (length * width).toFixed(2);
}

function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) return 'Invalid dimensions';
    return ((base * height) / 2).toFixed(2);
}

function calculateSquareArea(side) {
    if (side <= 0) return 'Invalid side length';
    return (side * side).toFixed(2);
}

// Example Usage
console.log('Circle Area:', calculateArea('circle', 5));
console.log('Rectangle Area:', calculateArea('rectangle', 4, 6));
console.log('Triangle Area:', calculateArea('triangle', 3, 4));
console.log('Square Area:', calculateArea('square', 5));`,
              explanation: [
                "🔹 Each shape has its own calculation function",
                "🔹 Input validation for each shape",
                "🔹 Results rounded to 2 decimal places",
                "🔹 Simple and modular approach"
              ]
            },
            {
              method: "Method 2: Advanced Area Calculator with Validation",
              approach: ["🔹 Detailed validation and error handling"],
              code: `
class ShapeValidator {
    static validatePositiveNumber(...numbers) {
        return numbers.every(num => typeof num === 'number' && num > 0);
    }
    
    static validateTriangle(a, b, c) {
        return a + b > c && b + c > a && a + c > b;
    }
}

class AreaCalculator {
    static PRECISION = 2;
    
    static circle(radius) {
        if (!ShapeValidator.validatePositiveNumber(radius)) {
            throw new Error('Invalid radius');
        }
        return Number((Math.PI * radius * radius).toFixed(this.PRECISION));
    }
    
    static rectangle(length, width) {
        if (!ShapeValidator.validatePositiveNumber(length, width)) {
            throw new Error('Invalid dimensions');
        }
        return Number((length * width).toFixed(this.PRECISION));
    }
    
    static triangle(base, height) {
        if (!ShapeValidator.validatePositiveNumber(base, height)) {
            throw new Error('Invalid dimensions');
        }
        return Number(((base * height) / 2).toFixed(this.PRECISION));
    }
    
    static triangleWithSides(a, b, c) {
        if (!ShapeValidator.validatePositiveNumber(a, b, c) || 
            !ShapeValidator.validateTriangle(a, b, c)) {
            throw new Error('Invalid triangle sides');
        }
        // Heron's formula
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return Number(area.toFixed(this.PRECISION));
    }
    
    static square(side) {
        if (!ShapeValidator.validatePositiveNumber(side)) {
            throw new Error('Invalid side length');
        }
        return Number((side * side).toFixed(this.PRECISION));
    }
}

// Example Usage with Error Handling
try {
    console.log('Circle Area:', AreaCalculator.circle(5));
    console.log('Triangle Area (base, height):', AreaCalculator.triangle(3, 4));
    console.log('Triangle Area (3 sides):', AreaCalculator.triangleWithSides(3, 4, 5));
    console.log('Rectangle Area:', AreaCalculator.rectangle(4, 6));
    console.log('Square Area:', AreaCalculator.square(5));
} catch (error) {
    console.error('Error:', error.message);
}`,
              explanation: [
                "🔹 Class based structured approach",
                "🔹 Separate validation class",
                "🔹 Advanced formulas like Heron's formula",
                "🔹 Proper error handling"
              ]
            },
            {
              method: "Method 3: Area Calculator with Complex Shapes",
              approach: ["🔹 Support for more complex shapes and calculations"],
              code: `
class ComplexAreaCalculator {
    static calculatePolygonArea(sides, length) {
        if (!ShapeValidator.validatePositiveNumber(sides, length) || sides < 3) {
            throw new Error('Invalid polygon parameters');
        }
        
        // Regular polygon area formula
        return Number((
            (sides * length * length) / 
            (4 * Math.tan(Math.PI / sides))
        ).toFixed(2));
    }
    
    static calculateEllipseArea(majorAxis, minorAxis) {
        if (!ShapeValidator.validatePositiveNumber(majorAxis, minorAxis)) {
            throw new Error('Invalid axes lengths');
        }
        
        return Number((Math.PI * majorAxis * minorAxis).toFixed(2));
    }
    
    static calculateTrapezoidArea(a, b, height) {
        if (!ShapeValidator.validatePositiveNumber(a, b, height)) {
            throw new Error('Invalid trapezoid parameters');
        }
        
        return Number(((a + b) * height / 2).toFixed(2));
    }
    
    static calculateSectorArea(radius, angle) {
        if (!ShapeValidator.validatePositiveNumber(radius, angle) || angle > 360) {
            throw new Error('Invalid sector parameters');
        }
        
        return Number((
            (Math.PI * radius * radius * angle) / 360
        ).toFixed(2));
    }
}

// Example Usage of Complex Shapes
try {
    console.log('Regular Pentagon Area:', 
                ComplexAreaCalculator.calculatePolygonArea(5, 4));
    console.log('Ellipse Area:', 
                ComplexAreaCalculator.calculateEllipseArea(5, 3));
    console.log('Trapezoid Area:', 
                ComplexAreaCalculator.calculateTrapezoidArea(5, 3, 4));
    console.log('Sector Area (60 degrees):', 
                ComplexAreaCalculator.calculateSectorArea(5, 60));
} catch (error) {
    console.error('Error:', error.message);
}`,
              explanation: [
                "🔹 Support for complex shapes like polygons, ellipses",
                "🔹 Advanced mathematical formulas",
                "🔹 Comprehensive error checking",
                "🔹 Higher precision calculations"
              ]
            }
          ],
          output: `
Example Output:
Circle Area: 78.54
Rectangle Area: 24.00
Triangle Area: 6.00
Square Area: 25.00
Regular Pentagon Area: 27.53
Ellipse Area: 47.12
Trapezoid Area: 16.00
Sector Area (60 degrees): 13.09`
        },
        practiceProblems: [
          "🔹 Calculate area of irregular shapes",
          "🔹 Implement area calculator for 3D shapes",
          "🔹 Handle different units of measurement",
          "🔹 Calculate composite shape areas"
        ],
        interviewQuestions: [
          "🔹 Different shapes ke area formulas explain karo",
          "🔹 Edge cases kaise handle karoge?",
          "🔹 Precision handling kaise karoge?",
          "🔹 Complex shapes ke liye approach kya hoga?"
        ],
        comparisonTable: [
          {
            approach: "Basic Calculator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple to implement, good for basic shapes",
            cons: "Limited functionality, basic error handling"
          },
          {
            approach: "Advanced Calculator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Robust validation, better organization",
            cons: "More complex implementation"
          },
          {
            approach: "Complex Calculator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Supports many shapes, advanced formulas",
            cons: "Higher complexity, more maintenance"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Proper validation is important",
          "🔹 Consider precision requirements",
          "🔹 Handle edge cases properly"
        ]
      },
      // Q-17. Neon Number
      {
        title: "Neon Number",
        description: "Neon Number ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo check kare ki given number Neon Number hai ya nahi. Neon number woh hota hai jiske square ke digits ka sum original number ke equal hota hai. Example: 9 is neon (9² = 81, 8+1 = 9)",
        algorithm: [
          "🔹 Number ka square calculate karo",
          "🔹 Square ke digits ka sum calculate karo",
          "🔹 Sum ko original number se compare karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple String Conversion",
              approach: ["🔹 Basic approach using string conversion"],
              code: `
function isNeonNumber(num) {
    // Calculate square
    const square = num * num;
    
    // Convert to string and sum digits
    const sumOfDigits = String(square)
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
    
    // Compare with original number
    return sumOfDigits === num;
}

function findNeonNumbers(start, end) {
    const neonNumbers = [];
    for(let i = start; i <= end; i++) {
        if(isNeonNumber(i)) {
            neonNumbers.push(i);
        }
    }
    return neonNumbers;
}

// Example Usage
console.log('Is 9 Neon Number?', isNeonNumber(9)); // true because 9² = 81, 8+1 = 9
console.log('Neon Numbers between 1 and 100:', findNeonNumbers(1, 100));`,
              explanation: [
                "🔹 Square calculate karke string mei convert karte hain",
                "🔹 String ke digits ka sum calculate karte hain",
                "🔹 Sum ko original number se compare karte hain",
                "🔹 Simple and straightforward approach"
              ]
            },
            {
              method: "Method 2: Mathematical Approach",
              approach: ["🔹 Without string conversion, using mathematical operations"],
              code: `
function getDigitsSum(num) {
    let sum = 0;
    while(num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function isNeonNumberMath(num) {
    const square = num * num;
    const sumOfDigits = getDigitsSum(square);
    return sumOfDigits === num;
}

// Function to validate and provide detailed info
function analyzeNeonNumber(num) {
    const square = num * num;
    const sumOfDigits = getDigitsSum(square);
    
    return {
        number: num,
        isNeon: sumOfDigits === num,
        square: square,
        sumOfDigits: sumOfDigits,
        explanation: \`\${num}² = \${square}, Sum of digits(\${square}) = \${sumOfDigits}\`
    };
}

// Example Usage
console.log('Analyzing number 9:', analyzeNeonNumber(9));
console.log('Analyzing number 10:', analyzeNeonNumber(10));`,
              explanation: [
                "🔹 Pure mathematical operations use karte hain",
                "🔹 No string conversion needed",
                "🔹 Detailed analysis provide karta hai",
                "🔹 Better performance for large numbers"
              ]
            },
            {
              method: "Method 3: Optimized Range Search",
              approach: ["🔹 Efficiently find Neon numbers in range"],
              code: `
class NeonNumberFinder {
    static isNeon(num) {
        const square = num * num;
        let sum = 0;
        let temp = square;
        
        while(temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
            // Early exit if sum exceeds original number
            if(sum > num) return false;
        }
        
        return sum === num;
    }
    
    static findInRange(start, end) {
        const result = [];
        const analysis = [];
        
        for(let i = start; i <= end; i++) {
            if(this.isNeon(i)) {
                result.push(i);
                analysis.push({
                    number: i,
                    square: i * i,
                    details: \`\${i}² = \${i * i}\`
                });
            }
        }
        
        return { neonNumbers: result, analysis };
    }
    
    static generateFirst(n) {
        const result = [];
        let num = 0;
        
        while(result.length < n) {
            if(this.isNeon(num)) {
                result.push(num);
            }
            num++;
        }
        
        return result;
    }
}

// Example Usage
console.log('First 5 Neon Numbers:', NeonNumberFinder.generateFirst(5));
console.log('Neon Numbers Analysis (1-50):', 
            NeonNumberFinder.findInRange(1, 50));`,
              explanation: [
                "🔹 Class based organized approach",
                "🔹 Early exit optimization implemented",
                "🔹 Multiple utility functions provided",
                "🔹 Detailed analysis with results"
              ]
            }
          ],
          output: `
Example Output:
Is 9 Neon Number? true
Neon Numbers between 1 and 100: [0, 1, 9]
Analyzing number 9: {
  number: 9,
  isNeon: true,
  square: 81,
  sumOfDigits: 9,
  explanation: "9² = 81, Sum of digits(81) = 9"
}
First 5 Neon Numbers: [0, 1, 9]`
        },
        practiceProblems: [
          "🔹 Find nearest Neon number to given number",
          "🔹 Check if number is both Neon and Perfect Square",
          "🔹 Find count of Neon numbers in range",
          "🔹 Generate sequence of N Neon numbers"
        ],
        interviewQuestions: [
          "🔹 Neon numbers ki properties explain karo",
          "🔹 Different approaches ki complexity compare karo",
          "🔹 Optimization techniques kya use kar sakte hain?",
          "🔹 Real-world applications kya ho sakte hain?"
        ],
        comparisonTable: [
          {
            approach: "String Conversion",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(log n)",
            pros: "Simple to implement and understand",
            cons: "String conversion overhead"
          },
          {
            approach: "Mathematical",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            pros: "Better performance, no string conversion",
            cons: "Slightly more complex logic"
          },
          {
            approach: "Optimized Class",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            pros: "Organized, reusable, optimized",
            cons: "More setup code required"
          }
        ],
        conclusion: [
          "🔹 Mathematical approach is most efficient",
          "🔹 Early exit optimization important for range operations",
          "🔹 Consider memory vs speed tradeoffs",
          "🔹 Proper validation and analysis helps debugging"
        ]
      },
      // Q-18. Sum of Even Indexed Fibonacci Numbers
      {
        title: "Sum of Even Indexed Fibonacci Numbers",
        description: "Even indexed Fibonacci numbers ka sum calculate karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo n tak ke Fibonacci sequence mei even index position wale numbers ka sum calculate kare. Example: For n=5, Fibonacci: [0,1,1,2,3], Even indices: [0,1,3], Sum: 4",
        algorithm: [
          "🔹 N terms tak Fibonacci sequence generate karo",
          "🔹 Even index (0,2,4...) wale numbers identify karo",
          "🔹 Selected numbers ka sum calculate karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Array Based Approach",
              approach: ["🔹 Store complete sequence and filter even indices"],
              code: `
function sumEvenIndexedFibonacci(n) {
    // Generate Fibonacci sequence
    const fib = [0, 1];
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    // Calculate sum of even indexed numbers
    let sum = 0;
    for(let i = 0; i < n; i += 2) {
        sum += fib[i];
    }
    
    return {
        sequence: fib,
        evenIndexedNumbers: fib.filter((_, i) => i % 2 === 0),
        sum: sum
    };
}

// Example Usage
console.log(sumEvenIndexedFibonacci(8));`,
              explanation: [
                "🔹 Complete Fibonacci sequence store karte hain",
                "🔹 Even indices pe numbers ko select karte hain",
                "🔹 Selected numbers ka sum calculate karte hain",
                "🔹 Detailed analysis return karte hain"
              ]
            },
            {
              method: "Method 2: Space Optimized Approach",
              approach: ["🔹 Only track required numbers without storing sequence"],
              code: `
function sumEvenIndexedFibOptimized(n) {
    if(n <= 0) return 0;
    if(n === 1) return 0;
    
    let prevPrev = 0;  // Even index (0)
    let prev = 1;      // Odd index (1)
    let current;
    let sum = prevPrev;  // Start with first even indexed number
    
    for(let i = 2; i < n; i++) {
        current = prev + prevPrev;
        
        // Add to sum if current index is even
        if(i % 2 === 0) {
            sum += current;
        }
        
        prevPrev = prev;
        prev = current;
    }
    
    return {
        sum: sum,
        explanation: \`Sum of Fibonacci numbers at even indices up to position \${n-1}\`
    };
}

// Example Usage
console.log(sumEvenIndexedFibOptimized(8));`,
              explanation: [
                "🔹 Minimal variables use karke memory optimize karte hain",
                "🔹 Only required numbers track karte hain",
                "🔹 Even indices pe sum update karte hain",
                "🔹 Space complexity O(1) maintain karte hain"
              ]
            },
            {
              method: "Method 3: Generator Based Approach",
              approach: ["🔹 Using generator function for lazy evaluation"],
              code: `
function* fibonacciGenerator() {
    let prev = 0, current = 1;
    let index = 0;
    
    while(true) {
        if(index === 0) {
            yield [index, prev];
        } else if(index === 1) {
            yield [index, current];
        } else {
            const next = prev + current;
            prev = current;
            current = next;
            yield [index, current];
        }
        index++;
    }
}

function sumEvenIndexedFibGenerator(n) {
    const generator = fibonacciGenerator();
    let sum = 0;
    const evenIndexedNumbers = [];
    
    for(let i = 0; i < n; i++) {
        const [index, value] = generator.next().value;
        if(index % 2 === 0) {
            sum += value;
            evenIndexedNumbers.push(value);
        }
    }
    
    return {
        evenIndexedNumbers,
        sum,
        explanation: \`Used generator to calculate sum of even indexed Fibonacci numbers up to \${n} terms\`
    };
}

// Example Usage
console.log(sumEvenIndexedFibGenerator(8));`,
              explanation: [
                "🔹 Generator function se lazy evaluation implement karte hain",
                "🔹 Memory efficient for large sequences",
                "🔹 Values on-demand generate hoti hain",
                "🔹 Flexible and extensible approach"
              ]
            }
          ],
          output: `
Example Output:
Array Based Approach:
{
  sequence: [0, 1, 1, 2, 3, 5, 8, 13],
  evenIndexedNumbers: [0, 1, 3, 8],
  sum: 12
}

Space Optimized Approach:
{
  sum: 12,
  explanation: "Sum of Fibonacci numbers at even indices up to position 7"
}

Generator Based Approach:
{
  evenIndexedNumbers: [0, 1, 3, 8],
  sum: 12,
  explanation: "Used generator to calculate sum of even indexed Fibonacci numbers up to 8 terms"
}`
        },
        practiceProblems: [
          "🔹 Find sum of odd indexed Fibonacci numbers",
          "🔹 Calculate ratio of consecutive even indexed numbers",
          "🔹 Find largest even indexed number less than N",
          "🔹 Compare sums of even vs odd indexed numbers"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki space complexity compare karo",
          "🔹 Generator approach ke advantages kya hain?",
          "🔹 Large numbers ke liye best approach kaunsa hoga?",
          "🔹 Pattern between even indexed Fibonacci numbers?"
        ],
        comparisonTable: [
          {
            approach: "Array Based",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Simple to understand, stores complete sequence",
            cons: "Higher memory usage"
          },
          {
            approach: "Space Optimized",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Minimal memory usage",
            cons: "Doesn't store sequence"
          },
          {
            approach: "Generator Based",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Memory efficient, lazy evaluation",
            cons: "More complex implementation"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider memory constraints",
          "🔹 Generator approach best for large sequences",
          "🔹 Space optimization important for large n"
        ]
      },
      // Q-19. Find the Largest Digit in a Number
      {
        title: "Find the Largest Digit in a Number",
        description: "Given number mei se largest digit find karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo kisi bhi number mei se uski sabse badi digit find kare. For example: 23789 mei largest digit 9 hai.",
        algorithm: [
          "🔹 Number ke digits ko access karo",
          "🔹 Har digit ko check karo",
          "🔹 Maximum digit track karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: String Conversion Approach",
              approach: ["🔹 Convert number to string and compare digits"],
              code: `
function findLargestDigit(num) {
    // Convert number to string
    const numStr = Math.abs(num).toString();
    
    // Find maximum digit using reduce
    const largestDigit = numStr.split('')
                              .reduce((max, digit) => Math.max(max, parseInt(digit)), 0);
    
    return {
        number: num,
        largestDigit: largestDigit,
        explanation: \`Largest digit in \${num} is \${largestDigit}\`
    };
}

// Example Usage
console.log(findLargestDigit(23789));
console.log(findLargestDigit(1234567));`,
              explanation: [
                "🔹 Number ko string mei convert karte hain",
                "🔹 Split karke digits ko array mei store karte hain",
                "🔹 reduce() se maximum digit find karte hain",
                "🔹 Detailed result return karte hain"
              ]
            },
            {
              method: "Method 2: Mathematical Approach",
              approach: ["🔹 Using modulo and division operations"],
              code: `
function findLargestDigitMath(num) {
    let n = Math.abs(num);
    let largest = 0;
    
    while(n > 0) {
        const digit = n % 10;
        largest = Math.max(largest, digit);
        n = Math.floor(n / 10);
    }
    
    return {
        number: num,
        largestDigit: largest,
        allDigits: getDigits(num),
        explanation: \`Found \${largest} as largest digit in \${num}\`
    };
}

function getDigits(num) {
    const digits = [];
    let n = Math.abs(num);
    
    while(n > 0) {
        digits.unshift(n % 10);
        n = Math.floor(n / 10);
    }
    
    return digits;
}

// Example Usage
console.log(findLargestDigitMath(98765));
console.log(findLargestDigitMath(-12345));`,
              explanation: [
                "🔹 Modulo operator se digits extract karte hain",
                "🔹 Math.max() se largest digit track karte hain",
                "🔹 Negative numbers ke liye Math.abs() use karte hain",
                "🔹 All digits bhi return karte hain for analysis"
              ]
            },
            {
              method: "Method 3: Array Method with Advanced Features",
              approach: ["🔹 Using array methods with additional analysis"],
              code: `
class DigitAnalyzer {
    static findLargestDigit(num) {
        const digits = Array.from(Math.abs(num).toString()).map(Number);
        const analysis = {
            number: num,
            digits: digits,
            largestDigit: Math.max(...digits),
            smallestDigit: Math.min(...digits),
            digitCount: digits.length,
            digitSum: digits.reduce((sum, digit) => sum + digit, 0),
            digitAverage: digits.reduce((sum, digit) => sum + digit, 0) / digits.length,
            isAllUnique: new Set(digits).size === digits.length
        };
        
        return {
            ...analysis,
            explanation: this.generateExplanation(analysis)
        };
    }
    
    static generateExplanation(analysis) {
        return \`Number \${analysis.number} has \${analysis.digitCount} digits. 
                Largest: \${analysis.largestDigit}, 
                Smallest: \${analysis.smallestDigit}, 
                Average: \${analysis.digitAverage.toFixed(2)}, 
                Sum: \${analysis.digitSum}, 
                All Unique: \${analysis.isAllUnique ? 'Yes' : 'No'}\`;
    }
    
    static findInRange(start, end) {
        const results = [];
        for(let i = start; i <= end; i++) {
            const analysis = this.findLargestDigit(i);
            if(analysis.largestDigit === 9) { // Can modify condition as needed
                results.push(analysis);
            }
        }
        return results;
    }
}

// Example Usage
console.log(DigitAnalyzer.findLargestDigit(987654));
console.log(DigitAnalyzer.findInRange(90, 100));`,
              explanation: [
                "🔹 Class based organized approach",
                "🔹 Comprehensive digit analysis provide karta hai",
                "🔹 Range based search support",
                "🔹 Multiple metrics calculate karta hai"
              ]
            }
          ],
          output: `
Example Output:
{
  number: 23789,
  largestDigit: 9,
  explanation: "Largest digit in 23789 is 9"
}

Mathematical Approach:
{
  number: 98765,
  largestDigit: 9,
  allDigits: [9, 8, 7, 6, 5],
  explanation: "Found 9 as largest digit in 98765"
}

Advanced Analysis:
{
  number: 987654,
  digits: [9, 8, 7, 6, 5, 4],
  largestDigit: 9,
  smallestDigit: 4,
  digitCount: 6,
  digitSum: 39,
  digitAverage: 6.5,
  isAllUnique: true,
  explanation: "Number 987654 has 6 digits..."
}`
        },
        practiceProblems: [
          "🔹 Find numbers with specific largest digit in range",
          "🔹 Compare largest digits of two numbers",
          "🔹 Find numbers where largest digit appears multiple times",
          "🔹 Calculate difference between largest and smallest digit"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Negative numbers kaise handle karoge?",
          "🔹 Large numbers ke liye konsa approach best hai?",
          "🔹 Memory optimization ke liye kya suggestions hain?"
        ],
        comparisonTable: [
          {
            approach: "String Conversion",
            timeComplexity: "O(n) where n is number of digits",
            spaceComplexity: "O(n)",
            pros: "Simple to implement, good for small numbers",
            cons: "String conversion overhead"
          },
          {
            approach: "Mathematical",
            timeComplexity: "O(log n) base 10",
            spaceComplexity: "O(1)",
            pros: "Memory efficient, works with large numbers",
            cons: "Multiple iterations needed"
          },
          {
            approach: "Array Analysis",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Comprehensive analysis, flexible",
            cons: "Higher memory usage"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider input size and constraints",
          "🔹 Mathematical approach most efficient for simple cases",
          "🔹 Array approach best for detailed analysis"
        ]
      },
      // Q-20. Find LCM of Two Numbers
      {
        title: "Find LCM of Two Numbers",
        description: "LCM (Least Common Multiple) ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo do numbers ka LCM (Least Common Multiple) calculate kare. Different approaches implement karo.",
        algorithm: [
          "🔹 Input numbers ko validate karo",
          "🔹 GCD/HCF calculate karo",
          "🔹 LCM formula use karo: LCM(a,b) = (a*b)/GCD(a,b)",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using GCD",
              approach: ["🔹 Using GCD to calculate LCM"],
              code: `
function calculateLCM(a, b) {
    // Handle negative numbers
    a = Math.abs(a);
    b = Math.abs(b);
    
    // Calculate GCD first using Euclidean algorithm
    function findGCD(x, y) {
        while(y) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    // Calculate LCM using formula: LCM = (a * b) / GCD(a,b)
    const gcd = findGCD(a, b);
    const lcm = (a * b) / gcd;
    
    return {
        numbers: [a, b],
        lcm: lcm,
        gcd: gcd,
        explanation: \`LCM of \${a} and \${b} is \${lcm} (GCD = \${gcd})\`
    };
}

// Example Usage
console.log(calculateLCM(12, 18));`,
              explanation: [
                "🔹 First GCD calculate karte hain using Euclidean algorithm",
                "🔹 LCM formula apply karte hain",
                "🔹 Negative numbers ko handle karte hain",
                "🔹 Detailed result return karte hain"
              ]
            },
            {
              method: "Method 2: Prime Factorization",
              approach: ["🔹 Using prime factors to find LCM"],
              code: `
function findLCMUsingPrimeFactors(a, b) {
    // Get prime factorization
    function getPrimeFactors(n) {
        const factors = {};
        let num = Math.abs(n);
        
        for(let i = 2; i <= num; i++) {
            while(num % i === 0) {
                factors[i] = (factors[i] || 0) + 1;
                num = num / i;
            }
        }
        return factors;
    }
    
    // Get prime factors of both numbers
    const factorsA = getPrimeFactors(a);
    const factorsB = getPrimeFactors(b);
    
    // Combine factors taking maximum power
    const combinedFactors = { ...factorsA };
    for(let prime in factorsB) {
        combinedFactors[prime] = Math.max(
            combinedFactors[prime] || 0,
            factorsB[prime]
        );
    }
    
    // Calculate LCM from combined factors
    let lcm = 1;
    for(let prime in combinedFactors) {
        lcm *= Math.pow(Number(prime), combinedFactors[prime]);
    }
    
    return {
        numbers: [a, b],
        lcm: lcm,
        primeFactorsA: factorsA,
        primeFactorsB: factorsB,
        combinedFactors: combinedFactors,
        explanation: \`LCM of \${a} and \${b} is \${lcm}\`
    };
}

// Example Usage
console.log(findLCMUsingPrimeFactors(15, 20));`,
              explanation: [
                "🔹 Numbers ke prime factors find karte hain",
                "🔹 Har prime factor ka maximum power lete hain",
                "🔹 Combined factors se LCM calculate karte hain",
                "🔹 Detailed analysis provide karte hain"
              ]
            },
            {
              method: "Method 3: Consecutive Multiples",
              approach: ["🔹 Using consecutive multiples to find LCM"],
              code: `
class LCMCalculator {
    static findLCM(a, b) {
        const max = Math.abs(a * b); // LCM can't be greater than product
        const increment = Math.min(Math.abs(a), Math.abs(b));
        let lcm = increment;
        
        while(lcm <= max) {
            if(lcm % a === 0 && lcm % b === 0) {
                return {
                    numbers: [a, b],
                    lcm: lcm,
                    increment: increment,
                    explanation: \`Found LCM by checking multiples of \${increment}\`
                };
            }
            lcm += increment;
        }
        
        return {
            error: "Could not find LCM within reasonable range"
        };
    }
    
    static findLCMForMultipleNumbers(numbers) {
        return numbers.reduce((lcm, current) => {
            return this.findLCM(lcm, current).lcm;
        });
    }
    
    static validateAndCalculate(a, b) {
        if(a === 0 || b === 0) {
            return { error: "LCM is undefined for zero" };
        }
        
        return this.findLCM(a, b);
    }
}

// Example Usage
console.log(LCMCalculator.validateAndCalculate(6, 8));
console.log(LCMCalculator.findLCMForMultipleNumbers([2, 3, 4]));`,
              explanation: [
                "🔹 Increment based approach use karte hain",
                "🔹 Multiple numbers ke liye bhi support hai",
                "🔹 Validation included hai",
                "🔹 Class based organized structure"
              ]
            }
          ],
          output: `
Example Output:
Calculate LCM using GCD:
{
  numbers: [12, 18],
  lcm: 36,
  gcd: 6,
  explanation: "LCM of 12 and 18 is 36 (GCD = 6)"
}

Using Prime Factorization:
{
  numbers: [15, 20],
  lcm: 60,
  primeFactorsA: { '3': 1, '5': 1 },
  primeFactorsB: { '2': 2, '5': 1 },
  combinedFactors: { '2': 2, '3': 1, '5': 1 },
  explanation: "LCM of 15 and 20 is 60"
}

Using Consecutive Multiples:
{
  numbers: [6, 8],
  lcm: 24,
  increment: 6,
  explanation: "Found LCM by checking multiples of 6"
}`
        },
        practiceProblems: [
          "🔹 Find LCM of multiple numbers",
          "🔹 Calculate LCM without using GCD",
          "🔹 Find LCM of fractions",
          "🔹 Optimize for large numbers"
        ],
        interviewQuestions: [
          "🔹 LCM and GCD ka relationship explain karo",
          "🔹 Different approaches ki complexity compare karo",
          "🔹 Large numbers ke liye best approach kaunsa hai?",
          "🔹 Real-world applications kya hain?"
        ],
        comparisonTable: [
          {
            approach: "Using GCD",
            timeComplexity: "O(log min(a,b))",
            spaceComplexity: "O(1)",
            pros: "Fast and efficient for most cases",
            cons: "Depends on GCD calculation"
          },
          {
            approach: "Prime Factorization",
            timeComplexity: "O(√max(a,b))",
            spaceComplexity: "O(log max(a,b))",
            pros: "Provides detailed factorization",
            cons: "Slower for large numbers"
          },
          {
            approach: "Consecutive Multiples",
            timeComplexity: "O(min(a,b))",
            spaceComplexity: "O(1)",
            pros: "Simple to understand",
            cons: "Not efficient for large numbers"
          }
        ],
        conclusion: [
          "🔹 GCD based approach is most efficient",
          "🔹 Choose approach based on requirements",
          "🔹 Consider number size when selecting method",
          "🔹 Handle edge cases properly"
        ]
      },
      // Q-21. Find the Sum of Even Digits in a Number
      {
        title: "Find the Sum of Even Digits in a Number",
        description: "Even digits ka sum calculate karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo number mei se sirf even digits ka sum calculate kare. For example: 1234 mei even digits (2,4) ka sum = 6",
        algorithm: [
          "🔹 Number ke digits ko extract karo",
          "🔹 Har digit check karo even hai ya nahi",
          "🔹 Even digits ka sum calculate karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: String Conversion Approach",
              approach: ["🔹 Convert number to string for easy digit access"],
              code: `
function sumOfEvenDigits(num) {
    // Convert number to string
    const numStr = Math.abs(num).toString();
    
    // Filter even digits and calculate sum
    const sum = numStr.split('')
                     .filter(digit => parseInt(digit) % 2 === 0)
                     .reduce((acc, digit) => acc + parseInt(digit), 0);
    
    return {
        number: num,
        evenDigits: numStr.split('')
                         .filter(digit => parseInt(digit) % 2 === 0),
        sum: sum,
        explanation: \`Even digits in \${num} sum up to \${sum}\`
    };
}

// Example Usage
console.log(sumOfEvenDigits(1234));
console.log(sumOfEvenDigits(5678));`,
              explanation: [
                "🔹 Number ko string mei convert karte hain",
                "🔹 String ko array mei split karte hain",
                "🔹 filter() se even digits find karte hain",
                "🔹 reduce() se sum calculate karte hain"
              ]
            },
            {
              method: "Method 2: Mathematical Approach",
              approach: ["🔹 Using modulo operations to extract digits"],
              code: `
function sumOfEvenDigitsMath(num) {
    let n = Math.abs(num);
    let sum = 0;
    const evenDigits = [];
    
    while(n > 0) {
        const digit = n % 10;
        if(digit % 2 === 0) {
            sum += digit;
            evenDigits.unshift(digit);
        }
        n = Math.floor(n / 10);
    }
    
    return {
        number: num,
        evenDigits: evenDigits,
        sum: sum,
        explanation: \`Found even digits \${evenDigits.join(', ')} with sum \${sum}\`
    };
}

// Example Usage
console.log(sumOfEvenDigitsMath(2468));
console.log(sumOfEvenDigitsMath(13579));`,
              explanation: [
                "🔹 Modulo operator se digits extract karte hain",
                "🔹 Har digit ko check karte hain even hai ya nahi",
                "🔹 Even digits ko store aur sum karte hain",
                "🔹 No string conversion needed"
              ]
            },
            {
              method: "Method 3: Array Method with Advanced Features",
              approach: ["🔹 Using array methods with additional analysis"],
              code: `
class DigitAnalyzer {
    static sumOfEvenDigits(num) {
        const digits = Array.from(Math.abs(num).toString(), Number);
        const evenDigits = digits.filter(digit => digit % 2 === 0);
        
        const analysis = {
            number: num,
            digits: digits,
            evenDigits: evenDigits,
            oddDigits: digits.filter(digit => digit % 2 !== 0),
            evenSum: evenDigits.reduce((sum, digit) => sum + digit, 0),
            oddSum: digits.filter(digit => digit % 2 !== 0)
                         .reduce((sum, digit) => sum + digit, 0),
            evenCount: evenDigits.length,
            oddCount: digits.length - evenDigits.length
        };
        
        return {
            ...analysis,
            explanation: this.generateExplanation(analysis)
        };
    }
    
    static generateExplanation(analysis) {
        return \`Number \${analysis.number} has \${analysis.evenCount} even digits (\${analysis.evenDigits.join(', ')}) 
                with sum \${analysis.evenSum} and \${analysis.oddCount} odd digits (\${analysis.oddDigits.join(', ')}) 
                with sum \${analysis.oddSum}\`;
    }
    
    static findNumbersWithEvenSum(start, end, targetSum) {
        const matches = [];
        for(let i = start; i <= end; i++) {
            const analysis = this.sumOfEvenDigits(i);
            if(analysis.evenSum === targetSum) {
                matches.push(i);
            }
        }
        return matches;
    }
}

// Example Usage
console.log(DigitAnalyzer.sumOfEvenDigits(123456));
console.log(DigitAnalyzer.findNumbersWithEvenSum(100, 200, 6));`,
              explanation: [
                "🔹 Class based organized approach",
                "🔹 Comprehensive digit analysis provide karta hai",
                "🔹 Even and odd digits dono analyze karta hai",
                "🔹 Range based search support"
              ]
            }
          ],
          output: `
Example Output:
String Conversion Approach:
{
  number: 1234,
  evenDigits: ['2', '4'],
  sum: 6,
  explanation: "Even digits in 1234 sum up to 6"
}

Mathematical Approach:
{
  number: 2468,
  evenDigits: [2, 4, 6, 8],
  sum: 20,
  explanation: "Found even digits 2, 4, 6, 8 with sum 20"
}

Advanced Analysis:
{
  number: 123456,
  digits: [1, 2, 3, 4, 5, 6],
  evenDigits: [2, 4, 6],
  oddDigits: [1, 3, 5],
  evenSum: 12,
  oddSum: 9,
  evenCount: 3,
  oddCount: 3,
  explanation: "Number 123456 has 3 even digits (2, 4, 6) with sum 12..."
}`
        },
        practiceProblems: [
          "🔹 Find numbers with specific even digit sum in range",
          "🔹 Compare even and odd digit sums",
          "🔹 Find numbers with more even digits than odd",
          "🔹 Calculate product of even digits"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Large numbers ke liye konsa approach best hai?",
          "🔹 Negative numbers kaise handle karoge?",
          "🔹 Memory optimization ke liye kya suggestions hain?"
        ],
        comparisonTable: [
          {
            approach: "String Conversion",
            timeComplexity: "O(n) where n is number of digits",
            spaceComplexity: "O(n)",
            pros: "Simple to implement, good readability",
            cons: "String conversion overhead"
          },
          {
            approach: "Mathematical",
            timeComplexity: "O(log n) base 10",
            spaceComplexity: "O(1)",
            pros: "Memory efficient, no conversion needed",
            cons: "Slightly more complex logic"
          },
          {
            approach: "Array Analysis",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Comprehensive analysis, flexible",
            cons: "Higher memory usage"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Mathematical approach most efficient for simple sum",
          "🔹 Array approach best for detailed analysis",
          "🔹 Handle edge cases properly (negative numbers, zero)"
        ]
      }
    ],
  },
  // 3️⃣ Date & Condition-Based Questions
  {
    category: "Date & Condition-Based Questions",
    questions: [
      // Q-22. Number of Days in a Month
      {
        title: "Number of Days in a Month",
        description: "Month mei kitne days hain yeh calculate karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo month number (1-12) aur year input lekar us month mei kitne days hain yeh calculate kare. Leap year ko bhi handle karo.",
        algorithm: [
          "🔹 Month number aur year input lo",
          "🔹 Month ke according days calculate karo",
          "🔹 February ke liye leap year check karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Switch Statement",
              approach: ["🔹 Switch case se months handle karenge"],
              code: `
function getDaysInMonth(month, year) {
    // Validate input
    if (month < 1 || month > 12) {
        return "Invalid month";
    }

    // Check if year is leap year
    const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    
    switch(month) {
        case 2: // February
            return isLeapYear ? 29 : 28;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
            return 30;
        default: // All other months
            return 31;
    }
}

// Example Usage
console.log(getDaysInMonth(2, 2024)); // February in leap year
console.log(getDaysInMonth(2, 2023)); // February in non-leap year
console.log(getDaysInMonth(7, 2023)); // July`,
              explanation: [
                "🔹 Month number validate karte hain",
                "🔹 Leap year check karte hain",
                "🔹 Switch case se months handle karte hain",
                "🔹 February ke liye special condition hai"
              ]
            },
            {
              method: "Method 2: Using Arrays",
              approach: ["🔹 Pre-defined array use karenge"],
              code: `
function getDaysInMonthArray(month, year) {
    // Array of days in each month (non-leap year)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Validate month
    if (month < 1 || month > 12) {
        return {
            status: "error",
            message: "Invalid month"
        };
    }
    
    // Adjust for leap year
    const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    if (month === 2 && isLeapYear) {
        return {
            month: month,
            year: year,
            days: 29,
            isLeapYear: true,
            monthName: getMonthName(month)
        };
    }
    
    return {
        month: month,
        year: year,
        days: daysInMonth[month - 1],
        isLeapYear: isLeapYear,
        monthName: getMonthName(month)
    };
}

function getMonthName(month) {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    return months[month - 1];
}

// Example Usage
console.log(getDaysInMonthArray(2, 2024));
console.log(getDaysInMonthArray(7, 2023));`,
              explanation: [
                "🔹 Array mei months ke days store karte hain",
                "🔹 Month name bhi provide karte hain",
                "🔹 Detailed information return karte hain",
                "🔹 Leap year ko handle karte hain"
              ]
            },
            {
              method: "Method 3: Using Date Object",
              approach: ["🔹 JavaScript Date object ka use karenge"],
              code: `
class MonthAnalyzer {
    static getDaysInMonth(month, year) {
        // Get last day of the month
        const lastDay = new Date(year, month, 0).getDate();
        
        const monthInfo = {
            month: month,
            year: year,
            days: lastDay,
            monthName: this.getMonthName(month),
            isLeapYear: this.isLeapYear(year),
            startDay: this.getFirstDayOfMonth(month, year),
            endDay: this.getLastDayOfMonth(month, year),
            weekends: this.countWeekends(month, year)
        };
        
        return {
            ...monthInfo,
            summary: this.generateSummary(monthInfo)
        };
    }
    
    static isLeapYear(year) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }
    
    static getMonthName(month) {
        return new Date(2000, month - 1, 1)
            .toLocaleString('default', { month: 'long' });
    }
    
    static getFirstDayOfMonth(month, year) {
        return new Date(year, month - 1, 1)
            .toLocaleString('default', { weekday: 'long' });
    }
    
    static getLastDayOfMonth(month, year) {
        return new Date(year, month, 0)
            .toLocaleString('default', { weekday: 'long' });
    }
    
    static countWeekends(month, year) {
        let count = 0;
        const lastDay = new Date(year, month, 0).getDate();
        
        for(let day = 1; day <= lastDay; day++) {
            const date = new Date(year, month - 1, day);
            if(date.getDay() === 0 || date.getDay() === 6) {
                count++;
            }
        }
        return count;
    }
    
    static generateSummary(info) {
        return \`\${info.monthName} \${info.year} has \${info.days} days, 
                starts on \${info.startDay}, ends on \${info.endDay}, 
                and has \${info.weekends} weekend days.\`;
    }
}

// Example Usage
console.log(MonthAnalyzer.getDaysInMonth(2, 2024));
console.log(MonthAnalyzer.getDaysInMonth(12, 2023));`,
              explanation: [
                "🔹 Date object se month details extract karte hain",
                "🔹 Comprehensive analysis provide karte hain",
                "🔹 Weekend days bhi count karte hain",
                "🔹 Detailed summary generate karte hain"
              ]
            }
          ],
          output: `
Example Output:

Switch Statement Approach:
29  // February 2024 (Leap Year)
28  // February 2023
31  // July 2023

Array Approach:
{
  month: 2,
  year: 2024,
  days: 29,
  isLeapYear: true,
  monthName: "February"
}

Date Object Approach:
{
  month: 2,
  year: 2024,
  days: 29,
  monthName: "February",
  isLeapYear: true,
  startDay: "Thursday",
  endDay: "Thursday",
  weekends: 8,
  summary: "February 2024 has 29 days, starts on Thursday, ends on Thursday, and has 8 weekend days."
}`
        },
        practiceProblems: [
          "🔹 Calculate working days in a month",
          "🔹 Find months with specific number of days in a year",
          "🔹 Calculate days between two dates",
          "🔹 Find day of week for any date"
        ],
        interviewQuestions: [
          "🔹 Leap year calculation kaise karte hain?",
          "🔹 Different date formats kaise handle karoge?",
          "🔹 Date object ke advantages/disadvantages kya hain?",
          "🔹 Time zones kaise handle karoge?"
        ],
        comparisonTable: [
          {
            approach: "Switch Statement",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and fast",
            cons: "Limited information provided"
          },
          {
            approach: "Array Based",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Easy to modify and maintain",
            cons: "Fixed array size needed"
          },
          {
            approach: "Date Object",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Comprehensive information, handles all edge cases",
            cons: "More complex implementation"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Date object best for detailed analysis",
          "🔹 Handle leap years properly",
          "🔹 Consider timezone issues if relevant"
        ]
      },
      // Q-23. Age Category Message
      {
        title: "Age Category Message",
        description: "Age ke based par different messages display karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo age input lekar appropriate category message return kare. Different age ranges ke liye different messages display karo.",
        algorithm: [
          "🔹 Age input validate karo",
          "🔹 Different age ranges define karo",
          "🔹 Age ke according message return karo",
          "🔹 Edge cases handle karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using If-Else Conditions",
              approach: ["🔹 Basic if-else conditions use karenge"],
              code: `
function getAgeCategory(age) {
    // Validate input
    if (typeof age !== 'number' || age < 0) {
        return "Invalid age input";
    }

    // Check age ranges
    if (age < 3) {
        return "Baby";
    } else if (age < 13) {
        return "Child";
    } else if (age < 20) {
        return "Teenager";
    } else if (age < 60) {
        return "Adult";
    } else {
        return "Senior Citizen";
    }
}

// Example Usage
console.log(getAgeCategory(1));   // Baby
console.log(getAgeCategory(10));  // Child
console.log(getAgeCategory(15));  // Teenager
console.log(getAgeCategory(25));  // Adult
console.log(getAgeCategory(65));  // Senior Citizen`,
              explanation: [
                "🔹 Input validation check karte hain",
                "🔹 Age ranges ke according conditions check karte hain",
                "🔹 Appropriate message return karte hain",
                "🔹 Simple and straightforward approach"
              ]
            },
            {
              method: "Method 2: Using Object Mapping",
              approach: ["🔹 Object mapping for age ranges"],
              code: `
class AgeAnalyzer {
    static ageCategories = [
        { maxAge: 2, category: "Baby" },
        { maxAge: 12, category: "Child" },
        { maxAge: 19, category: "Teenager" },
        { maxAge: 59, category: "Adult" },
        { maxAge: Infinity, category: "Senior Citizen" }
    ];

    static getDetailedAgeCategory(age) {
        // Validate input
        if (typeof age !== 'number' || age < 0) {
            return {
                status: "error",
                message: "Invalid age input",
                isValid: false
            };
        }

        // Find matching category
        const category = this.ageCategories.find(cat => age <= cat.maxAge);
        
        return {
            age: age,
            category: category.category,
            isMinor: age < 18,
            canVote: age >= 18,
            canDrive: age >= 16,
            isRetirementAge: age >= 60,
            details: this.generateDetails(age, category.category)
        };
    }

    static generateDetails(age, category) {
        return \`Age \${age} falls under category '\${category}' with specific permissions and restrictions.\`;
    }
}

// Example Usage
console.log(AgeAnalyzer.getDetailedAgeCategory(15));
console.log(AgeAnalyzer.getDetailedAgeCategory(25));`,
              explanation: [
                "🔹 Object based structured approach",
                "🔹 Detailed information provide karta hai",
                "🔹 Multiple properties calculate karta hai",
                "🔹 Easy to maintain and modify"
              ]
            },
            {
              method: "Method 3: Using Switch Case with Additional Features",
              approach: ["🔹 Switch case with enhanced functionality"],
              code: `
class AgeCategoryAnalyzer {
    static getAgeAnalysis(age) {
        // Validate input
        if (typeof age !== 'number' || age < 0) {
            throw new Error("Invalid age input");
        }

        const baseCategory = this.getBaseCategory(age);
        return {
            ...this.getDetailedInfo(age),
            ...this.getRecommendations(age, baseCategory),
            ...this.getLegalStatus(age)
        };
    }

    static getBaseCategory(age) {
        switch(true) {
            case age < 3:
                return "Baby";
            case age < 13:
                return "Child";
            case age < 20:
                return "Teenager";
            case age < 60:
                return "Adult";
            default:
                return "Senior Citizen";
        }
    }

    static getDetailedInfo(age) {
        return {
            age: age,
            category: this.getBaseCategory(age),
            lifecycle: {
                isInfant: age < 1,
                isToddler: age >= 1 && age < 3,
                isPreschooler: age >= 3 && age < 5,
                isSchoolAge: age >= 5 && age < 13,
                isTeenager: age >= 13 && age < 20,
                isAdult: age >= 20
            }
        };
    }

    static getRecommendations(age, category) {
        const recommendations = {
            activities: [],
            healthChecks: [],
            education: []
        };

        switch(category) {
            case "Baby":
                recommendations.activities = ["Regular checkups", "Playtime"];
                recommendations.healthChecks = ["Vaccination", "Growth monitoring"];
                recommendations.education = ["Early stimulation"];
                break;
            case "Child":
                recommendations.activities = ["Sports", "Creative activities"];
                recommendations.healthChecks = ["Annual checkup"];
                recommendations.education = ["School education"];
                break;
            // Add more cases as needed
        }

        return { recommendations };
    }

    static getLegalStatus(age) {
        return {
            legalStatus: {
                isMinor: age < 18,
                canVote: age >= 18,
                canDrive: age >= 16,
                isRetirementAge: age >= 60
            }
        };
    }
}

// Example Usage
try {
    console.log(AgeCategoryAnalyzer.getAgeAnalysis(15));
    console.log(AgeCategoryAnalyzer.getAgeAnalysis(25));
} catch (error) {
    console.error(error.message);
}`,
              explanation: [
                "🔹 Comprehensive age analysis provide karta hai",
                "🔹 Multiple aspects jaise activities, health checks include karta hai",
                "🔹 Legal status bhi provide karta hai",
                "🔹 Well-organized and maintainable code"
              ]
            }
          ],
          output: `
Example Output:

Basic Approach:
Baby       // Age: 1
Child      // Age: 10
Teenager   // Age: 15
Adult      // Age: 25
Senior Citizen  // Age: 65

Detailed Analysis:
{
  age: 15,
  category: "Teenager",
  isMinor: true,
  canVote: false,
  canDrive: false,
  isRetirementAge: false,
  details: "Age 15 falls under category 'Teenager'..."
}

Comprehensive Analysis:
{
  age: 15,
  category: "Teenager",
  lifecycle: {
    isInfant: false,
    isToddler: false,
    isPreschooler: false,
    isSchoolAge: false,
    isTeenager: true,
    isAdult: false
  },
  recommendations: {
    activities: [...],
    healthChecks: [...],
    education: [...]
  },
  legalStatus: {
    isMinor: true,
    canVote: false,
    canDrive: false,
    isRetirementAge: false
  }
}`
        },
        practiceProblems: [
          "🔹 Add more detailed categories",
          "🔹 Implement age-specific recommendations",
          "🔹 Add gender-specific categories",
          "🔹 Handle special cases and exceptions"
        ],
        interviewQuestions: [
          "🔹 Age categories kaise decide karoge?",
          "🔹 Edge cases kaise handle karoge?",
          "🔹 Different countries ke age laws kaise handle karoge?",
          "🔹 Performance optimization ke liye kya karoge?"
        ],
        comparisonTable: [
          {
            approach: "If-Else",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and easy to understand",
            cons: "Limited functionality, harder to modify"
          },
          {
            approach: "Object Mapping",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Structured and maintainable",
            cons: "Slightly more complex setup"
          },
          {
            approach: "Switch with Features",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Comprehensive analysis, modular",
            cons: "More complex, higher initial setup time"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider future maintenance needs",
          "🔹 Handle edge cases properly",
          "🔹 Include relevant additional information"
        ]
      },
      // Q-24. Even or Odd Sum
      {
        title: "Even or Odd Sum",
        description: "Check if sum of numbers is even or odd.",
        problemStatement: "Ek function likho jo array of numbers ka sum calculate karke bataye ki sum even hai ya odd.",
        algorithm: [
          "🔹 Array of numbers input lo",
          "🔹 Numbers ka sum calculate karo",
          "🔹 Sum even hai ya odd check karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Array Sum",
              approach: ["🔹 Basic array summation with reduce"],
              code: `
function checkSumEvenOdd(numbers) {
    // Calculate sum using reduce
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    
    // Check if sum is even or odd
    return {
        numbers: numbers,
        sum: sum,
        isEven: sum % 2 === 0,
        result: sum % 2 === 0 ? "Even" : "Odd",
        explanation: \`Sum \${sum} is \${sum % 2 === 0 ? 'Even' : 'Odd'}\`
    };
}

// Example Usage
console.log(checkSumEvenOdd([1, 2, 3, 4]));
console.log(checkSumEvenOdd([2, 4, 6, 8]));`,
              explanation: [
                "🔹 reduce() se array ka sum calculate karte hain",
                "🔹 Modulo operator se even/odd check karte hain",
                "🔹 Detailed result object return karte hain",
                "🔹 Simple and straightforward approach"
              ]
            },
            {
              method: "Method 2: Optimized Running Sum",
              approach: ["🔹 Track even/odd status during summation"],
              code: `
function checkSumEvenOddOptimized(numbers) {
    let isEven = true;  // Start with even (0 is even)
    
    // Loop through numbers and track even/odd status
    for(let num of numbers) {
        // If current number is odd, toggle even status
        if(num % 2 !== 0) {
            isEven = !isEven;
        }
    }
    
    return {
        numbers: numbers,
        isEven: isEven,
        result: isEven ? "Even" : "Odd",
        explanation: \`Sum is \${isEven ? 'Even' : 'Odd'} (tracked during summation)\`
    };
}

// Example Usage
console.log(checkSumEvenOddOptimized([1, 2, 3, 4]));
console.log(checkSumEvenOddOptimized([1, 3, 5, 7]));`,
              explanation: [
                "🔹 No need to calculate actual sum",
                "🔹 Even/odd status ko track karte hain",
                "🔹 Space and time efficient",
                "🔹 Works well with large numbers"
              ]
            },
            {
              method: "Method 3: Advanced Analysis",
              approach: ["🔹 Detailed analysis with multiple features"],
              code: `
class SumAnalyzer {
    static analyzeSumEvenOdd(numbers) {
        const analysis = {
            numbers: numbers,
            sum: numbers.reduce((acc, curr) => acc + curr, 0),
            evenCount: numbers.filter(n => n % 2 === 0).length,
            oddCount: numbers.filter(n => n % 2 !== 0).length,
            evenNumbers: numbers.filter(n => n % 2 === 0),
            oddNumbers: numbers.filter(n => n % 2 !== 0)
        };

        analysis.isEven = analysis.sum % 2 === 0;
        analysis.result = analysis.isEven ? "Even" : "Odd";
        analysis.details = this.generateDetails(analysis);

        return analysis;
    }

    static generateDetails(analysis) {
        return \`Array has \${analysis.evenCount} even numbers and \${analysis.oddCount} odd numbers. 
                Sum \${analysis.sum} is \${analysis.result}.\`;
    }

    static findNumbersWithEvenSum(arrays) {
        return arrays.filter(arr => {
            const sum = arr.reduce((acc, curr) => acc + curr, 0);
            return sum % 2 === 0;
        });
    }
}

// Example Usage
console.log(SumAnalyzer.analyzeSumEvenOdd([1, 2, 3, 4, 5]));
console.log(SumAnalyzer.findNumbersWithEvenSum([[1,2,3], [2,4], [1,3,5]]));`,
              explanation: [
                "🔹 Comprehensive analysis provide karta hai",
                "🔹 Even/odd numbers separately track karta hai",
                "🔹 Multiple utility functions",
                "🔹 Array groups bhi handle kar sakta hai"
              ]
            }
          ],
          output: `
Example Output:

Simple Array Sum:
{
  numbers: [1, 2, 3, 4],
  sum: 10,
  isEven: true,
  result: "Even",
  explanation: "Sum 10 is Even"
}

Optimized Approach:
{
  numbers: [1, 2, 3, 4],
  isEven: true,
  result: "Even",
  explanation: "Sum is Even (tracked during summation)"
}

Advanced Analysis:
{
  numbers: [1, 2, 3, 4, 5],
  sum: 15,
  evenCount: 2,
  oddCount: 3,
  evenNumbers: [2, 4],
  oddNumbers: [1, 3, 5],
  isEven: false,
  result: "Odd",
  details: "Array has 2 even numbers and 3 odd numbers. Sum 15 is Odd."
}`
        },
        practiceProblems: [
          "🔹 Find subarrays with even sum",
          "🔹 Count pairs with even sum",
          "🔹 Find continuous sequence with even sum",
          "🔹 Optimize for very large arrays"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki complexity compare karo",
          "🔹 Large numbers ke liye kaise optimize karoge?",
          "🔹 Negative numbers kaise handle karoge?",
          "🔹 Streaming data ke liye kaunsa approach best rahega?"
        ],
        comparisonTable: [
          {
            approach: "Simple Array Sum",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Simple to implement, handles all cases",
            cons: "Needs to calculate full sum"
          },
          {
            approach: "Optimized Running Sum",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "No sum calculation needed, works with large numbers",
            cons: "Doesn't provide actual sum value"
          },
          {
            approach: "Advanced Analysis",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Comprehensive analysis, multiple features",
            cons: "Higher memory usage"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider memory constraints",
          "🔹 Handle edge cases (empty array, null values)",
          "🔹 Optimize based on input size and constraints"
        ]
      }
    ],
  },
  // 4️⃣ String & Character Manipulation
  {
    category: "String & Character Manipulation",
    questions: [
      // Q-25. Character Case Checker
      {
        title: "Character Case Checker",
        description: "String mei character case check karne ke multiple approaches explore karenge",
        problemStatement: "Ek function likho jo string mei har character ka case (uppercase/lowercase/number/special) check kare aur unka count return kare.",
        algorithm: [
          "🔹 Input string ko character by character check karo",
          "🔹 Har character ka type identify karo",
          "🔹 Different types ka count maintain karo",
          "🔹 Results with detailed analysis return karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using RegEx",
              approach: ["🔹 Regular expressions ka use karke character types check karenge"],
              code: `
      function checkCharacterCase(str) {
          // Initialize counters
          const analysis = {
              uppercase: 0,
              lowercase: 0,
              numbers: 0,
              special: 0,
              spaces: 0
          };
          
          // Check each character
          for(let char of str) {
              if(/[A-Z]/.test(char)) analysis.uppercase++;
              else if(/[a-z]/.test(char)) analysis.lowercase++;
              else if(/[0-9]/.test(char)) analysis.numbers++;
              else if(/\s/.test(char)) analysis.spaces++;
              else analysis.special++;
          }
          
          return {
              string: str,
              analysis: analysis,
              total: str.length,
              summary: \`String contains \${analysis.uppercase} uppercase, 
                       \${analysis.lowercase} lowercase, \${analysis.numbers} numbers, 
                       \${analysis.special} special characters and \${analysis.spaces} spaces\`
          };
      }
      
      // Example Usage
      console.log(checkCharacterCase("Hello World! 123"));`,
              explanation: [
                "🔹 RegEx patterns se character type identify karte hain",
                "🔹 Har type ka separate count maintain karte hain",
                "🔹 Detailed analysis provide karte hain",
                "🔹 Easy to understand and modify"
              ]
            },
            {
              method: "Method 2: Using Character Codes",
              approach: ["🔹 ASCII/Unicode character codes ka use karenge"],
              code: `
      function checkCharacterCaseUsingCodes(str) {
          const result = {
              uppercase: [],
              lowercase: [],
              numbers: [],
              special: [],
              spaces: []
          };
          
          for(let char of str) {
              const code = char.charCodeAt(0);
              
              if(code >= 65 && code <= 90) {
                  result.uppercase.push(char);
              }
              else if(code >= 97 && code <= 122) {
                  result.lowercase.push(char);
              }
              else if(code >= 48 && code <= 57) {
                  result.numbers.push(char);
              }
              else if(code === 32) {
                  result.spaces.push(char);
              }
              else {
                  result.special.push(char);
              }
          }
          
          return {
              string: str,
              details: result,
              counts: {
                  uppercase: result.uppercase.length,
                  lowercase: result.lowercase.length,
                  numbers: result.numbers.length,
                  special: result.special.length,
                  spaces: result.spaces.length
              },
              total: str.length
          };
      }
      
      // Example Usage
      console.log(checkCharacterCaseUsingCodes("Hello123!@#"));`,
              explanation: [
                "🔹 Character codes se type identify karte hain",
                "🔹 Actual characters bhi store karte hain",
                "🔹 More precise control over character identification",
                "🔹 Detailed categorization possible"
              ]
            },
            {
              method: "Method 3: Advanced Analysis with Statistics",
              approach: ["🔹 Comprehensive analysis with additional features"],
              code: `
      class StringAnalyzer {
          static analyzeString(str) {
              const analysis = {
                  characters: {
                      uppercase: new Set(),
                      lowercase: new Set(),
                      numbers: new Set(),
                      special: new Set(),
                      spaces: new Set()
                  },
                  positions: {
                      uppercase: [],
                      lowercase: [],
                      numbers: [],
                      special: [],
                      spaces: []
                  },
                  frequency: {},
                  words: str.split(/\\s+/).filter(word => word.length > 0)
              };
              
              // Analyze each character
              [...str].forEach((char, index) => {
                  // Update frequency
                  analysis.frequency[char] = (analysis.frequency[char] || 0) + 1;
                  
                  // Categorize character
                  if(/[A-Z]/.test(char)) {
                      analysis.characters.uppercase.add(char);
                      analysis.positions.uppercase.push(index);
                  }
                  else if(/[a-z]/.test(char)) {
                      analysis.characters.lowercase.add(char);
                      analysis.positions.lowercase.push(index);
                  }
                  else if(/[0-9]/.test(char)) {
                      analysis.characters.numbers.add(char);
                      analysis.positions.numbers.push(index);
                  }
                  else if(/\\s/.test(char)) {
                      analysis.characters.spaces.add(char);
                      analysis.positions.spaces.push(index);
                  }
                  else {
                      analysis.characters.special.add(char);
                      analysis.positions.special.push(index);
                  }
              });
              
              return {
                  string: str,
                  length: str.length,
                  wordCount: analysis.words.length,
                  uniqueChars: new Set(str).size,
                  analysis: this.generateAnalysis(analysis),
                  statistics: this.generateStatistics(analysis),
                  suggestions: this.generateSuggestions(analysis)
              };
          }
          
          static generateAnalysis(data) {
              return {
                  uppercase: {
                      count: data.positions.uppercase.length,
                      unique: data.characters.uppercase.size,
                      chars: Array.from(data.characters.uppercase)
                  },
                  lowercase: {
                      count: data.positions.lowercase.length,
                      unique: data.characters.lowercase.size,
                      chars: Array.from(data.characters.lowercase)
                  },
                  numbers: {
                      count: data.positions.numbers.length,
                      unique: data.characters.numbers.size,
                      chars: Array.from(data.characters.numbers)
                  },
                  special: {
                      count: data.positions.special.length,
                      unique: data.characters.special.size,
                      chars: Array.from(data.characters.special)
                  },
                  spaces: {
                      count: data.positions.spaces.length
                  }
              };
          }
          
          static generateStatistics(data) {
              return {
                  mostFrequent: Object.entries(data.frequency)
                      .sort((a, b) => b[1] - a[1])[0],
                  wordLengths: data.words.map(word => word.length),
                  averageWordLength: data.words.reduce((sum, word) => 
                      sum + word.length, 0) / data.words.length || 0
              };
          }
          
          static generateSuggestions(data) {
              const suggestions = [];
              
              // Add suggestions based on analysis
              if(data.positions.uppercase.length === 0) {
                  suggestions.push("Consider adding uppercase letters for better formatting");
              }
              if(data.positions.numbers.length === 0) {
                  suggestions.push("Adding numbers can make the string more diverse");
              }
              // Add more suggestions as needed
              
              return suggestions;
          }
      }
      
      // Example Usage
      console.log(StringAnalyzer.analyzeString("Hello World! 123 #@$"));`,
              explanation: [
                "🔹 Comprehensive string analysis provide karta hai",
                "🔹 Multiple metrics and statistics calculate karta hai",
                "🔹 Character positions and frequency track karta hai",
                "🔹 Suggestions for improvement bhi provide karta hai"
              ]
            }
          ],
          output: `
      Example Output:
      
      RegEx Approach:
      {
        string: "Hello World! 123",
        analysis: {
          uppercase: 2,
          lowercase: 8,
          numbers: 3,
          special: 1,
          spaces: 1
        },
        total: 15,
        summary: "String contains 2 uppercase, 8 lowercase, 3 numbers, 1 special characters and 1 spaces"
      }
      
      Character Codes Approach:
      {
        string: "Hello123!@#",
        details: {
          uppercase: ["H"],
          lowercase: ["e", "l", "l", "o"],
          numbers: ["1", "2", "3"],
          special: ["!", "@", "#"],
          spaces: []
        },
        counts: {
          uppercase: 1,
          lowercase: 4,
          numbers: 3,
          special: 3,
          spaces: 0
        },
        total: 11
      }
      
      Advanced Analysis:
      {
        string: "Hello World! 123 #@$",
        length: 18,
        wordCount: 2,
        uniqueChars: 14,
        analysis: {
          uppercase: { count: 2, unique: 2, chars: ["H", "W"] },
          lowercase: { count: 8, unique: 5, chars: ["e","l","o","r","d"] },
          numbers: { count: 3, unique: 3, chars: ["1","2","3"] },
          special: { count: 4, unique: 4, chars: ["!","#","@","$"] },
          spaces: { count: 2 }
        },
        statistics: {
          mostFrequent: ["l", 2],
          wordLengths: [5, 5],
          averageWordLength: 5
        },
        suggestions: []
      }`
        },
        practiceProblems: [
          "🔹 Check if string is only uppercase/lowercase",
          "🔹 Find longest sequence of same case characters",
          "🔹 Convert string to alternate case pattern",
          "🔹 Validate password strength based on case mix"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki performance compare karo",
          "🔹 Unicode characters kaise handle karoge?",
          "🔹 Memory optimization ke liye kya suggestions hain?",
          "🔹 Large strings ke liye konsa approach best rahega?"
        ],
        comparisonTable: [
          {
            approach: "RegEx",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Simple to implement and understand",
            cons: "Can be slower for complex patterns"
          },
          {
            approach: "Character Codes",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Precise control, stores actual characters",
            cons: "More complex implementation"
          },
          {
            approach: "Advanced Analysis",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Comprehensive analysis, multiple features",
            cons: "Higher memory usage"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider input string size and complexity",
          "🔹 Handle special cases and Unicode characters",
          "🔹 Balance between features and performance"
        ]
      },
      // Q-26. Largest of Three Numbers
      {
        title: "Largest of Three Numbers",
        description: "Three numbers mei se largest number find karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo teen numbers mei se sabse bada number find kare. Different approaches implement karo.",
        algorithm: [
          "🔹 Three numbers input lo",
          "🔹 Numbers ko compare karo",
          "🔹 Largest number find karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Math.max()",
              approach: ["🔹 Built-in Math.max() function ka use karenge"],
              code: `
function findLargestUsingMath(num1, num2, num3) {
    const largest = Math.max(num1, num2, num3);
    
    return {
        numbers: [num1, num2, num3],
        largest: largest,
        explanation: \`Among \${num1}, \${num2}, and \${num3}, the largest number is \${largest}\`
    };
}

// Example Usage
console.log(findLargestUsingMath(10, 5, 8));
console.log(findLargestUsingMath(-1, -5, -3));`,
              explanation: [
                "🔹 Math.max() function directly largest number return karta hai",
                "🔹 Simple and concise solution",
                "🔹 Multiple numbers handle kar sakta hai",
                "🔹 Negative numbers bhi handle karta hai"
              ]
            },
            {
              method: "Method 2: Using Conditional Statements",
              approach: ["🔹 If-else conditions ka use karke compare karenge"],
              code: `
function findLargestUsingConditions(num1, num2, num3) {
    let largest;
    
    if(num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if(num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
    
    return {
        numbers: [num1, num2, num3],
        largest: largest,
        comparisons: {
            "num1 vs num2": num1 >= num2 ? "num1 is larger" : "num2 is larger",
            "num2 vs num3": num2 >= num3 ? "num2 is larger" : "num3 is larger",
            "num1 vs num3": num1 >= num3 ? "num1 is larger" : "num3 is larger"
        },
        explanation: \`Compared all numbers and found \${largest} is the largest\`
    };
}

// Example Usage
console.log(findLargestUsingConditions(15, 8, 12));`,
              explanation: [
                "🔹 Direct comparison using if-else conditions",
                "🔹 Step by step comparison track karta hai",
                "🔹 Detailed comparison information provide karta hai",
                "🔹 Easy to understand and modify logic"
              ]
            },
            {
              method: "Method 3: Using Array Methods",
              approach: ["🔹 Array methods ka use karke advanced features implement karenge"],
              code: `
class NumberAnalyzer {
    static findLargest(num1, num2, num3) {
        const numbers = [num1, num2, num3];
        
        const analysis = {
            numbers: numbers,
            largest: Math.max(...numbers),
            smallest: Math.min(...numbers),
            sorted: [...numbers].sort((a, b) => b - a),
            average: numbers.reduce((sum, num) => sum + num, 0) / numbers.length,
            sum: numbers.reduce((sum, num) => sum + num, 0),
            range: Math.max(...numbers) - Math.min(...numbers),
            isAllPositive: numbers.every(num => num > 0),
            isAllNegative: numbers.every(num => num < 0)
        };
        
        return {
            ...analysis,
            summary: this.generateSummary(analysis),
            statistics: this.generateStatistics(analysis)
        };
    }
    
    static generateSummary(analysis) {
        return \`Among numbers \${analysis.numbers.join(', ')}, \${analysis.largest} is the largest\`;
    }
    
    static generateStatistics(analysis) {
        return {
            median: analysis.sorted[1],
            isSorted: JSON.stringify(analysis.numbers) === JSON.stringify(analysis.sorted),
            hasEqualNumbers: new Set(analysis.numbers).size !== analysis.numbers.length,
            distribution: {
                positiveCount: analysis.numbers.filter(n => n > 0).length,
                negativeCount: analysis.numbers.filter(n => n < 0).length,
                zeroCount: analysis.numbers.filter(n => n === 0).length
            }
        };
    }
}

// Example Usage
console.log(NumberAnalyzer.findLargest(20, 10, 15));`,
              explanation: [
                "🔹 Comprehensive number analysis provide karta hai",
                "🔹 Multiple statistical metrics calculate karta hai",
                "🔹 Advanced features jaise sorting, range calculation",
                "🔹 Detailed statistics and patterns identify karta hai"
              ]
            }
          ],
          output: `
Example Output:

Math.max() Approach:
{
    numbers: [10, 5, 8],
    largest: 10,
    explanation: "Among 10, 5, and 8, the largest number is 10"
}

Conditional Approach:
{
    numbers: [15, 8, 12],
    largest: 15,
    comparisons: {
        "num1 vs num2": "num1 is larger",
        "num2 vs num3": "num2 is smaller",
        "num1 vs num3": "num1 is larger"
    },
    explanation: "Compared all numbers and found 15 is the largest"
}

Array Method Approach:
{
    numbers: [20, 10, 15],
    largest: 20,
    smallest: 10,
    sorted: [20, 15, 10],
    average: 15,
    sum: 45,
    range: 10,
    isAllPositive: true,
    isAllNegative: false,
    summary: "Among numbers 20, 10, 15, 20 is the largest",
    statistics: {
        median: 15,
        isSorted: false,
        hasEqualNumbers: false,
        distribution: {
            positiveCount: 3,
            negativeCount: 0,
            zeroCount: 0
        }
    }
}`
        },
        practiceProblems: [
          "🔹 Find largest among n numbers",
          "🔹 Find second largest number",
          "🔹 Handle duplicate numbers",
          "🔹 Implement with minimum comparisons"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Edge cases kaise handle karoge?",
          "🔹 Minimum comparisons ke liye kya approach hoga?",
          "🔹 Large numbers ke liye kaise optimize karoge?"
        ],
        comparisonTable: [
          {
            approach: "Math.max()",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and built-in function",
            cons: "Limited additional features"
          },
          {
            approach: "Conditional",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Explicit comparisons, easy to modify",
            cons: "More code to write and maintain"
          },
          {
            approach: "Array Methods",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Comprehensive analysis, multiple features",
            cons: "More complex, might be overkill for simple cases"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider readability vs functionality",
          "🔹 Handle edge cases properly",
          "🔹 Use advanced features when needed"
        ]
      },
      // Q-27. Positive, Negative, or Zero
      {
        title: "Positive, Negative, or Zero",
        description: "Number positive hai, negative hai ya zero hai yeh check karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo number input lekar bataye ki woh positive hai, negative hai ya zero hai. Different approaches implement karo.",
        algorithm: [
          "🔹 Number input lo",
          "🔹 Number ko 0 se compare karo",
          "🔹 Result with proper message return karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Comparison",
              approach: ["🔹 Basic if-else conditions use karenge"],
              code: `
function checkNumber(num) {
    if (num > 0) {
        return {
            number: num,
            type: "Positive",
            message: \`\${num} is a positive number\`
        };
    } else if (num < 0) {
        return {
            number: num,
            type: "Negative",
            message: \`\${num} is a negative number\`
        };
    } else {
        return {
            number: num,
            type: "Zero",
            message: "The number is zero"
        };
    }
}

// Example Usage
console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));`,
              explanation: [
                "🔹 Simple comparison with 0",
                "🔹 Three conditions check karte hain",
                "🔹 Descriptive message return karta hai",
                "🔹 Easy to understand and implement"
              ]
            },
            {
              method: "Method 2: Using Math.sign()",
              approach: ["🔹 Math.sign() function ka use karenge"],
              code: `
function checkNumberUsingSign(num) {
    const sign = Math.sign(num);
    
    const analysis = {
        number: num,
        sign: sign,
        type: sign > 0 ? "Positive" : sign < 0 ? "Negative" : "Zero",
        absoluteValue: Math.abs(num),
        isInteger: Number.isInteger(num)
    };
    
    return {
        ...analysis,
        message: \`\${num} is a \${analysis.type.toLowerCase()} number\`,
        details: \`Absolute value: \${analysis.absoluteValue}, Integer: \${analysis.isInteger}\`
    };
}

// Example Usage
console.log(checkNumberUsingSign(7.5));
console.log(checkNumberUsingSign(-2.8));
console.log(checkNumberUsingSign(0));`,
              explanation: [
                "🔹 Math.sign() returns 1, -1, or 0",
                "🔹 Additional number properties analyze karta hai",
                "🔹 Absolute value bhi provide karta hai",
                "🔹 Integer check bhi include hai"
              ]
            },
            {
              method: "Method 3: Advanced Number Analysis",
              approach: ["🔹 Detailed number analysis with additional features"],
              code: `
class NumberAnalyzer {
    static analyzeNumber(num) {
        const analysis = {
            number: num,
            type: this.getNumberType(num),
            properties: {
                isInteger: Number.isInteger(num),
                isFinite: Number.isFinite(num),
                isNaN: Number.isNaN(num),
                absoluteValue: Math.abs(num),
                floor: Math.floor(num),
                ceil: Math.ceil(num),
                rounded: Math.round(num)
            }
        };

        return {
            ...analysis,
            summary: this.generateSummary(analysis),
            suggestions: this.generateSuggestions(analysis)
        };
    }

    static getNumberType(num) {
        if (num > 0) return "Positive";
        if (num < 0) return "Negative";
        return "Zero";
    }

    static generateSummary(analysis) {
        return \`Number \${analysis.number} is \${analysis.type.toLowerCase()}. 
                It is \${analysis.properties.isInteger ? 'an integer' : 'a decimal'} 
                with absolute value \${analysis.properties.absoluteValue}\`;
    }

    static generateSuggestions(analysis) {
        const suggestions = [];
        
        if (!analysis.properties.isInteger) {
            suggestions.push("Consider rounding to nearest integer");
            suggestions.push(\`Floor value: \${analysis.properties.floor}\`);
            suggestions.push(\`Ceiling value: \${analysis.properties.ceil}\`);
        }

        if (analysis.type === "Negative") {
            suggestions.push("Consider using absolute value for magnitude");
        }

        return suggestions;
    }

    static analyzeRange(start, end) {
        const numbers = [];
        for (let i = start; i <= end; i++) {
            numbers.push(this.analyzeNumber(i));
        }
        return this.generateRangeStatistics(numbers);
    }

    static generateRangeStatistics(numbers) {
        return {
            count: numbers.length,
            positive: numbers.filter(n => n.type === "Positive").length,
            negative: numbers.filter(n => n.type === "Negative").length,
            zero: numbers.filter(n => n.type === "Zero").length
        };
    }
}

// Example Usage
console.log(NumberAnalyzer.analyzeNumber(3.7));
console.log(NumberAnalyzer.analyzeNumber(-5));
console.log(NumberAnalyzer.analyzeRange(-2, 2));`,
              explanation: [
                "🔹 Comprehensive number analysis provide karta hai",
                "🔹 Multiple number properties check karta hai",
                "🔹 Suggestions for number handling deta hai",
                "🔹 Range analysis bhi support karta hai"
              ]
            }
          ],
          output: `
Example Output:

Simple Comparison:
{
    number: 5,
    type: "Positive",
    message: "5 is a positive number"
}

Using Math.sign():
{
    number: 7.5,
    sign: 1,
    type: "Positive",
    absoluteValue: 7.5,
    isInteger: false,
    message: "7.5 is a positive number",
    details: "Absolute value: 7.5, Integer: false"
}

Advanced Analysis:
{
    number: 3.7,
    type: "Positive",
    properties: {
        isInteger: false,
        isFinite: true,
        isNaN: false,
        absoluteValue: 3.7,
        floor: 3,
        ceil: 4,
        rounded: 4
    },
    summary: "Number 3.7 is positive. It is a decimal with absolute value 3.7",
    suggestions: [
        "Consider rounding to nearest integer",
        "Floor value: 3",
        "Ceiling value: 4"
    ]
}`
        },
        practiceProblems: [
          "🔹 Find count of positive/negative numbers in array",
          "🔹 Check if number is valid finite number",
          "🔹 Handle special cases like Infinity and NaN",
          "🔹 Implement range based analysis"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki comparison karo",
          "🔹 Edge cases kaise handle karoge?",
          "🔹 Floating point numbers ke liye kya considerations hain?",
          "🔹 Performance optimization ke liye kya suggestions hain?"
        ],
        comparisonTable: [
          {
            approach: "Simple Comparison",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and direct approach",
            cons: "Limited features"
          },
          {
            approach: "Math.sign()",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Built-in function, handles edge cases",
            cons: "Limited additional analysis"
          },
          {
            approach: "Advanced Analysis",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Comprehensive analysis, multiple features",
            cons: "More complex implementation"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider edge cases and number types",
          "🔹 Use advanced analysis when needed",
          "🔹 Handle special values properly"
        ]
      },
      // Q-28. User Greeting
      {
        title: "User Greeting",
        description: "User ko greet karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo user ka name aur time input lekar appropriate greeting message return kare. For example: Good morning {name} if time is between 5 AM to 12 PM.",
        algorithm: [
          "🔹 User name aur time input lo",
          "🔹 Time ke according greeting select karo",
          "🔹 Name ke sath message format karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Time Based Greeting",
              approach: ["🔹 Basic time ranges ke based par greeting"],
              code: `
function greetUser(name, hour) {
    let greeting = "";
    
    // Validate hour
    if (hour < 0 || hour > 23) {
        return "Invalid hour! Please enter hour between 0-23";
    }

    // Determine greeting based on time
    if (hour >= 5 && hour < 12) {
        greeting = "Good morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good afternoon";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    return {
        name: name,
        hour: hour,
        message: \`\${greeting}, \${name}!\`,
        timeOfDay: greeting.split(' ')[1]
    };
}

// Example Usage
console.log(greetUser("Alice", 8));  // Morning
console.log(greetUser("Bob", 14));   // Afternoon
console.log(greetUser("Charlie", 19)); // Evening`,
              explanation: [
                "🔹 Hour validate karte hain",
                "🔹 Time ranges ke according greeting select karte hain",
                "🔹 Name ke sath message format karte hain",
                "🔹 Basic but effective approach"
              ]
            },
            {
              method: "Method 2: Using Date Object",
              approach: ["🔹 Current time ke sath dynamic greeting"],
              code: `
class GreetingGenerator {
    static generateGreeting(name, customTime = null) {
        // Get current time if not provided
        const now = customTime ? new Date(customTime) : new Date();
        const hour = now.getHours();
        
        const greetingInfo = {
            name: name,
            time: now.toLocaleTimeString(),
            date: now.toLocaleDateString(),
            hour: hour,
            greeting: this.getGreetingByHour(hour),
            isWeekend: [0, 6].includes(now.getDay())
        };

        return {
            ...greetingInfo,
            message: \`\${greetingInfo.greeting}, \${name}!\`,
            fullMessage: this.generateFullMessage(greetingInfo)
        };
    }

    static getGreetingByHour(hour) {
        if (hour >= 5 && hour < 12) return "Good morning";
        if (hour >= 12 && hour < 17) return "Good afternoon";
        if (hour >= 17 && hour < 21) return "Good evening";
        return "Good night";
    }

    static generateFullMessage(info) {
        return \`\${info.greeting}, \${info.name}! 
                It's \${info.time} on \${info.date}\${
                info.isWeekend ? ". Enjoy your weekend!" : "."}\`;
    }
}

// Example Usage
console.log(GreetingGenerator.generateGreeting("David"));
console.log(GreetingGenerator.generateGreeting("Eve", "2024-01-01T08:30:00"));`,
              explanation: [
                "🔹 Date object se current time get karte hain",
                "🔹 Custom time bhi support karta hai",
                "🔹 Weekend check bhi include hai",
                "🔹 Detailed time information provide karta hai"
              ]
            },
            {
              method: "Method 3: Advanced Personalized Greeting",
              approach: ["🔹 Advanced features and customization options"],
              code: `
class AdvancedGreeting {
    static greetings = {
        morning: ["Good morning", "Rise and shine", "Have a great morning"],
        afternoon: ["Good afternoon", "Hope you're having a good day"],
        evening: ["Good evening", "Pleasant evening"],
        night: ["Good night", "Sweet dreams", "Rest well"]
    };

    static generatePersonalizedGreeting(userInfo, options = {}) {
        const {
            name,
            hour = new Date().getHours(),
            language = 'en',
            style = 'formal',
            includeEmoji = true
        } = userInfo;

        const timeInfo = this.getTimeInfo(hour);
        const greeting = this.getCustomGreeting(timeInfo.period, style);
        const emoji = this.getEmoji(timeInfo.period);

        return {
            user: name,
            timeInfo: timeInfo,
            greeting: this.formatGreeting(greeting, name, includeEmoji ? emoji : ''),
            language: language,
            style: style,
            suggestions: this.getSuggestions(timeInfo.period),
            weatherAppropriate: this.getWeatherBasedTips(timeInfo.period)
        };
    }

    static getTimeInfo(hour) {
        let period, timeOfDay, isBusinessHours;

        if (hour >= 5 && hour < 12) {
            period = 'morning';
            timeOfDay = 'AM';
            isBusinessHours = hour >= 9;
        } else if (hour >= 12 && hour < 17) {
            period = 'afternoon';
            timeOfDay = 'PM';
            isBusinessHours = true;
        } else if (hour >= 17 && hour < 21) {
            period = 'evening';
            timeOfDay = 'PM';
            isBusinessHours = hour < 18;
        } else {
            period = 'night';
            timeOfDay = 'PM';
            isBusinessHours = false;
        }

        return { period, timeOfDay, isBusinessHours };
    }

    static getCustomGreeting(period, style) {
        const greetingOptions = this.greetings[period];
        return style === 'casual' ? 
            greetingOptions[Math.floor(Math.random() * greetingOptions.length)] :
            greetingOptions[0];
    }

    static getEmoji(period) {
        const emojis = {
            morning: '🌅',
            afternoon: '☀️',
            evening: '🌆',
            night: '🌙'
        };
        return emojis[period];
    }

    static formatGreeting(greeting, name, emoji) {
        return \`\${greeting}, \${name}! \${emoji}\`;
    }

    static getSuggestions(period) {
        const suggestions = {
            morning: ["Don't forget breakfast!", "Plan your day"],
            afternoon: ["Take a lunch break", "Stay hydrated"],
            evening: ["Start wrapping up work", "Plan tomorrow"],
            night: ["Get good rest", "Set alarm for tomorrow"]
        };
        return suggestions[period];
    }

    static getWeatherBasedTips(period) {
        const tips = {
            morning: "Check weather forecast for the day",
            afternoon: "Stay cool and hydrated",
            evening: "Check tomorrow's weather",
            night: "Prepare clothes for tomorrow"
        };
        return tips[period];
    }
}

// Example Usage
const userInfo = {
    name: "Frank",
    hour: 15,
    language: 'en',
    style: 'casual',
    includeEmoji: true
};

console.log(AdvancedGreeting.generatePersonalizedGreeting(userInfo));`,
              explanation: [
                "🔹 Multiple greeting options for each time period",
                "🔹 Support for different styles and languages",
                "🔹 Includes emojis and suggestions",
                "🔹 Weather tips and business hours awareness"
              ]
            }
          ],
          output: `
Example Output:

Simple Greeting:
{
    name: "Alice",
    hour: 8,
    message: "Good morning, Alice!",
    timeOfDay: "morning"
}

Date Based Greeting:
{
    name: "David",
    time: "14:30:00",
    date: "2024-03-31",
    hour: 14,
    greeting: "Good afternoon",
    isWeekend: false,
    message: "Good afternoon, David!",
    fullMessage: "Good afternoon, David! It's 14:30:00 on 3/31/2024."
}

Advanced Greeting:
{
    user: "Frank",
    timeInfo: {
        period: "afternoon",
        timeOfDay: "PM",
        isBusinessHours: true
    },
    greeting: "Hope you're having a good day, Frank! ☀️",
    language: "en",
    style: "casual",
    suggestions: ["Take a lunch break", "Stay hydrated"],
    weatherAppropriate: "Stay cool and hydrated"
}`
        },
        practiceProblems: [
          "🔹 Add support for different languages",
          "🔹 Implement custom greeting templates",
          "🔹 Handle different time zones",
          "🔹 Add seasonal greetings"
        ],
        interviewQuestions: [
          "🔹 Time zones kaise handle karoge?",
          "🔹 Different cultures ke greetings kaise manage karoge?",
          "🔹 Performance optimization ke liye kya karoge?",
          "🔹 Scalability ke liye kya suggestions hain?"
        ],
        comparisonTable: [
          {
            approach: "Simple Time Based",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and straightforward",
            cons: "Limited features"
          },
          {
            approach: "Date Object Based",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Real-time data, more features",
            cons: "Depends on system time"
          },
          {
            approach: "Advanced Personalized",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Highly customizable, feature-rich",
            cons: "More complex, higher maintenance"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider user experience and culture",
          "🔹 Handle time zones properly",
          "🔹 Make greetings personalized and relevant"
        ]
      },
      // Q-29. Traffic Light System
      {
        title: "Traffic Light System",
        description: "Traffic light system ke multiple approaches explore karenge.",
        problemStatement: "Ek traffic light system implement karo jo different states (red, yellow, green) handle kare aur appropriate timing ke sath state changes kare.",
        algorithm: [
          "🔹 Traffic light states define karo",
          "🔹 State transitions implement karo",
          "🔹 Timing logic add karo",
          "🔹 Different approaches try karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Basic State Machine",
              approach: ["🔹 Simple state machine implementation"],
              code: `
class TrafficLight {
    constructor() {
        this.states = ['RED', 'GREEN', 'YELLOW'];
        this.currentStateIndex = 0;
        this.timings = {
            RED: 30,    // 30 seconds
            GREEN: 20,  // 20 seconds
            YELLOW: 5   // 5 seconds
        };
    }

    getCurrentState() {
        return {
            state: this.states[this.currentStateIndex],
            duration: this.timings[this.states[this.currentStateIndex]],
            nextState: this.states[(this.currentStateIndex + 1) % this.states.length]
        };
    }

    changeState() {
        this.currentStateIndex = (this.currentStateIndex + 1) % this.states.length;
        return this.getCurrentState();
    }

    getStateColor() {
        return this.states[this.currentStateIndex];
    }
}

// Example Usage
const trafficLight = new TrafficLight();
console.log(trafficLight.getCurrentState());
console.log(trafficLight.changeState());`,
              explanation: [
                "🔹 Basic state machine with three states",
                "🔹 Fixed timings for each state",
                "🔹 Simple state transition logic",
                "🔹 Easy to understand and implement"
              ]
            },
            {
              method: "Method 2: Timer Based System",
              approach: ["🔹 Using setInterval for automatic state changes"],
              code: `
class TimedTrafficLight {
    constructor() {
        this.states = {
            RED: { duration: 30000, next: 'GREEN' },
            GREEN: { duration: 20000, next: 'YELLOW' },
            YELLOW: { duration: 5000, next: 'RED' }
        };
        this.currentState = 'RED';
        this.timer = null;
        this.callbacks = [];
    }

    start() {
        this.timer = setInterval(() => {
            this.changeState();
        }, this.states[this.currentState].duration);
        
        return this.getStatus();
    }

    stop() {
        if(this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    changeState() {
        const oldState = this.currentState;
        this.currentState = this.states[this.currentState].next;
        
        // Notify all callbacks
        this.callbacks.forEach(callback => 
            callback(this.getStatus(), oldState));
        
        return this.getStatus();
    }

    getStatus() {
        return {
            currentState: this.currentState,
            duration: this.states[this.currentState].duration / 1000,
            nextState: this.states[this.currentState].next,
            isRunning: this.timer !== null
        };
    }

    onStateChange(callback) {
        this.callbacks.push(callback);
    }
}

// Example Usage
const timedLight = new TimedTrafficLight();
timedLight.onStateChange((newStatus, oldState) => {
    console.log(\`Changed from \${oldState} to \${newStatus.currentState}\`);
});
console.log(timedLight.start());`,
              explanation: [
                "🔹 Automatic state changes using timer",
                "🔹 Event callback system",
                "🔹 Start/stop functionality",
                "🔹 Real-time status updates"
              ]
            },
            {
              method: "Method 3: Advanced Traffic System",
              approach: ["🔹 Complex system with additional features"],
              code: `
class AdvancedTrafficSystem {
    static States = {
        RED: 'RED',
        YELLOW: 'YELLOW',
        GREEN: 'GREEN',
        FLASHING: 'FLASHING',
        OFF: 'OFF'
    };

    constructor(options = {}) {
        this.config = {
            timings: {
                ...{
                    RED: 30000,
                    GREEN: 20000,
                    YELLOW: 5000,
                    FLASHING: 1000
                },
                ...options.timings
            },
            emergency: false,
            nightMode: false,
            maintenance: false
        };

        this.currentState = AdvancedTrafficSystem.States.RED;
        this.timer = null;
        this.listeners = new Set();
        this.stateStartTime = Date.now();
    }

    setState(newState) {
        const oldState = this.currentState;
        this.currentState = newState;
        this.stateStartTime = Date.now();
        
        this.notifyListeners({
            type: 'stateChange',
            oldState,
            newState,
            timestamp: this.stateStartTime
        });
    }

    toggleEmergency() {
        this.config.emergency = !this.config.emergency;
        if(this.config.emergency) {
            this.stop();
            this.startFlashing();
        } else {
            this.stopFlashing();
            this.start();
        }
    }

    startFlashing() {
        this.timer = setInterval(() => {
            this.setState(
                this.currentState === AdvancedTrafficSystem.States.YELLOW ? 
                AdvancedTrafficSystem.States.OFF : 
                AdvancedTrafficSystem.States.YELLOW
            );
        }, this.config.timings.FLASHING);
    }

    stopFlashing() {
        if(this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    start() {
        if(!this.config.maintenance) {
            this.timer = setInterval(() => {
                this.changeState();
            }, this.getRemainingTime());
        }
        return this.getStatus();
    }

    stop() {
        this.stopFlashing();
        if(this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    changeState() {
        switch(this.currentState) {
            case AdvancedTrafficSystem.States.RED:
                this.setState(AdvancedTrafficSystem.States.GREEN);
                break;
            case AdvancedTrafficSystem.States.GREEN:
                this.setState(AdvancedTrafficSystem.States.YELLOW);
                break;
            case AdvancedTrafficSystem.States.YELLOW:
                this.setState(AdvancedTrafficSystem.States.RED);
                break;
        }
    }

    addListener(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    notifyListeners(event) {
        this.listeners.forEach(listener => listener(event));
    }

    getRemainingTime() {
        const elapsedTime = Date.now() - this.stateStartTime;
        return Math.max(0, this.config.timings[this.currentState] - elapsedTime);
    }

    getStatus() {
        return {
            currentState: this.currentState,
            remainingTime: this.getRemainingTime() / 1000,
            isEmergency: this.config.emergency,
            isMaintenance: this.config.maintenance,
            isNightMode: this.config.nightMode,
            config: this.config
        };
    }
}

// Example Usage
const advancedSystem = new AdvancedTrafficSystem({
    timings: { RED: 25000, GREEN: 15000 }
});

const unsubscribe = advancedSystem.addListener(event => {
    console.log(\`Event: \${event.type}\`, event);
});

console.log(advancedSystem.start());
// Test emergency mode
setTimeout(() => {
    advancedSystem.toggleEmergency();
}, 10000);`,
              explanation: [
                "🔹 Advanced features like emergency mode",
                "🔹 Event system with listeners",
                "🔹 Configurable timings",
                "🔹 Multiple modes (night, maintenance)"
              ]
            }
          ],
          output: `
Example Output:

Basic State Machine:
{
    state: "RED",
    duration: 30,
    nextState: "GREEN"
}

Timer Based System:
{
    currentState: "RED",
    duration: 30,
    nextState: "GREEN",
    isRunning: true
}

Advanced System:
{
    currentState: "RED",
    remainingTime: 25,
    isEmergency: false,
    isMaintenance: false,
    isNightMode: false,
    config: { timings: {...}, emergency: false, ... }
}`
        },
        practiceProblems: [
          "🔹 Add pedestrian crossing logic",
          "🔹 Implement multiple intersection coordination",
          "🔹 Add sensor-based timing adjustment",
          "🔹 Handle power failure scenarios"
        ],
        interviewQuestions: [
          "🔹 State machine design kaise improve kar sakte hain?",
          "🔹 Emergency scenarios kaise handle karoge?",
          "🔹 Multiple traffic lights synchronize kaise karoge?",
          "🔹 System failure ke liye kya backup plan hoga?"
        ],
        comparisonTable: [
          {
            approach: "Basic State Machine",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple and easy to understand",
            cons: "Limited functionality"
          },
          {
            approach: "Timer Based",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Automatic state changes, event system",
            cons: "More complex timing logic"
          },
          {
            approach: "Advanced System",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n) where n is number of listeners",
            pros: "Feature-rich, highly configurable",
            cons: "Complex implementation, more maintenance"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider scalability and maintenance",
          "🔹 Handle edge cases and emergencies",
          "🔹 Implement proper error handling"
        ]
      },
      // Q-30. Multiplication Table
      {
        title: "Multiplication Table",
        description: "Multiplication table ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo n ka multiplication table n times tak print kare.",
        algorithm: [
          "🔹 Input number n lo",
          "🔹 1 se n tak multiply karo",
          "🔹 Table format mei print karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Loop Approach",
              approach: ["🔹 Basic for loop use karke table generate karenge"],
              code: `
function printMultiplicationTable(n) {
    const table = [];
    
    // Generate table rows
    for(let i = 1; i <= n; i++) {
        table.push(\`\${n} × \${i} = \${n * i}\`);
    }
    
    return {
        number: n,
        table: table,
        output: table.join('\\n')
    };
}

// Example Usage
console.log(printMultiplicationTable(5).output);`,
              explanation: [
                "🔹 Simple for loop se multiply karte hain",
                "🔹 Each row ko format karte hain",
                "🔹 Array mei store karke return karte hain",
                "🔹 Easy to understand approach"
              ]
            },
            {
              method: "Method 2: Array Methods",
              approach: ["🔹 Modern array methods ka use karenge"],
              code: `
function generateMultiplicationTable(n) {
    // Generate array of numbers from 1 to n
    const multipliers = Array.from({ length: n }, (_, i) => i + 1);
    
    // Generate table using map
    const table = multipliers.map(i => ({
        multiplier: i,
        calculation: \`\${n} × \${i}\`,
        result: n * i,
        expression: \`\${n} × \${i} = \${n * i}\`
    }));
    
    return {
        number: n,
        table: table,
        formattedOutput: table.map(row => row.expression).join('\\n'),
        summary: {
            count: table.length,
            sum: table.reduce((sum, row) => sum + row.result, 0),
            even: table.filter(row => row.result % 2 === 0).length,
            odd: table.filter(row => row.result % 2 !== 0).length
        }
    };
}

// Example Usage
const result = generateMultiplicationTable(5);
console.log(result.formattedOutput);
console.log('Summary:', result.summary);`,
              explanation: [
                "🔹 Array.from() se sequence generate karte hain",
                "🔹 map() se table rows generate karte hain",
                "🔹 Additional statistics calculate karte hain",
                "🔹 Modern and clean code approach"
              ]
            },
            {
              method: "Method 3: Advanced Table Generator",
              approach: ["🔹 Multiple features and formatting options"],
              code: `
class MultiplicationTableGenerator {
    static generateTable(n, options = {}) {
        const {
            showHeader = true,
            showBorder = true,
            includeStats = true,
            maxWidth = 20
        } = options;

        const table = [];
        let stats = {
            sum: 0,
            even: 0,
            odd: 0,
            multiples3: 0,
            multiples5: 0
        };

        // Add header if required
        if(showHeader) {
            table.push(\`Multiplication Table for \${n}\`);
            if(showBorder) table.push('='.repeat(maxWidth));
        }

        // Generate table rows
        for(let i = 1; i <= n; i++) {
            const result = n * i;
            table.push(\`\${n} × \${String(i).padStart(2)} = \${String(result).padStart(3)}\`);
            
            // Update statistics
            stats.sum += result;
            if(result % 2 === 0) stats.even++;
            if(result % 2 !== 0) stats.odd++;
            if(result % 3 === 0) stats.multiples3++;
            if(result % 5 === 0) stats.multiples5++;
        }

        // Add statistics if required
        if(includeStats) {
            if(showBorder) table.push('-'.repeat(maxWidth));
            table.push(\`Sum: \${stats.sum}\`);
            table.push(\`Even numbers: \${stats.even}\`);
            table.push(\`Odd numbers: \${stats.odd}\`);
            table.push(\`Multiples of 3: \${stats.multiples3}\`);
            table.push(\`Multiples of 5: \${stats.multiples5}\`);
        }

        if(showBorder) table.push('='.repeat(maxWidth));

        return {
            table: table.join('\\n'),
            stats: stats,
            raw: Array.from({length: n}, (_, i) => ({
                multiplier: i + 1,
                result: n * (i + 1)
            }))
        };
    }

    static generateMultipleTables(numbers) {
        return numbers.map(n => this.generateTable(n));
    }
}

// Example Usage
console.log(MultiplicationTableGenerator.generateTable(5, {
    showHeader: true,
    showBorder: true,
    includeStats: true
}).table);`,
              explanation: [
                "🔹 Configurable formatting options",
                "🔹 Detailed statistics tracking",
                "🔹 Multiple tables generation support",
                "🔹 Professional looking output"
              ]
            }
          ],
          output: `
Example Output:

Simple Approach:
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25

Advanced Approach:
Multiplication Table for 5
====================
5 ×  1 =   5
5 ×  2 =  10
5 ×  3 =  15
5 ×  4 =  20
5 ×  5 =  25
--------------------
Sum: 75
Even numbers: 3
Odd numbers: 2
Multiples of 3: 1
Multiples of 5: 5
====================`
        },
        practiceProblems: [
          "🔹 Generate table in reverse order",
          "🔹 Print multiple tables side by side",
          "🔹 Add color formatting for special numbers",
          "🔹 Create interactive table generator"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki performance compare karo",
          "🔹 Large numbers ke liye kaise optimize karoge?",
          "🔹 Memory optimization ke liye kya suggestions hain?",
          "🔹 User interface ke liye kya considerations hain?"
        ],
        comparisonTable: [
          {
            approach: "Simple Loop",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Simple to understand and implement",
            cons: "Basic formatting only"
          },
          {
            approach: "Array Methods",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Clean code, additional statistics",
            cons: "Slightly more complex"
          },
          {
            approach: "Advanced Generator",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Feature-rich, configurable",
            cons: "More complex implementation"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on formatting needs",
          "🔹 Consider performance for large tables",
          "🔹 Add useful statistics when needed",
          "🔹 Make output user-friendly"
        ]
      },
      // Q-31. Grade Calculator
      {
        title: "Grade Calculator",
        description: "Grade Calculator ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo marks input lekar grade calculate kare. Different grade ranges aur features implement karo.",
        algorithm: [
          "🔹 Marks input lo (0-100)",
          "🔹 Grade ranges define karo",
          "🔹 Marks ke according grade assign karo",
          "🔹 Additional statistics calculate karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Grade Calculator",
              approach: ["🔹 Basic if-else conditions use karenge"],
              code: `
function calculateGrade(marks) {
    // Validate input
    if (marks < 0 || marks > 100) {
        return "Invalid marks! Please enter marks between 0 and 100";
    }

    // Calculate grade
    let grade;
    if (marks >= 90) {
        grade = 'A+';
    } else if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 70) {
        grade = 'B';
    } else if (marks >= 60) {
        grade = 'C';
    } else if (marks >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return {
        marks: marks,
        grade: grade,
        status: marks >= 50 ? 'Pass' : 'Fail',
        message: \`You got \${grade} grade with \${marks} marks\`
    };
}

// Example Usage
console.log(calculateGrade(85));
console.log(calculateGrade(45));`,
              explanation: [
                "🔹 Input validation karte hain",
                "🔹 Simple if-else conditions se grade decide karte hain",
                "🔹 Pass/Fail status bhi include karte hain",
                "🔹 Basic but effective approach"
              ]
            },
            {
              method: "Method 2: Grade Calculator with Detailed Analysis",
              approach: ["🔹 Additional statistics and analysis provide karenge"],
              code: `
function calculateDetailedGrade(marks) {
    const gradeRanges = [
        { min: 90, grade: 'A+', comment: 'Excellent!' },
        { min: 80, grade: 'A', comment: 'Very Good!' },
        { min: 70, grade: 'B', comment: 'Good!' },
        { min: 60, grade: 'C', comment: 'Satisfactory' },
        { min: 50, grade: 'D', comment: 'Pass' },
        { min: 0, grade: 'F', comment: 'Need Improvement' }
    ];

    // Validate input
    if (marks < 0 || marks > 100) {
        throw new Error("Invalid marks! Please enter marks between 0 and 100");
    }

    // Find appropriate grade
    const result = gradeRanges.find(r => marks >= r.min);
    
    return {
        marks: marks,
        grade: result.grade,
        comment: result.comment,
        status: marks >= 50 ? 'Pass' : 'Fail',
        percentage: marks,
        analysis: {
            distinction: marks >= 75,
            firstClass: marks >= 60 && marks < 75,
            passingMargin: marks >= 50 && marks < 60,
            gapFromNextGrade: calculateGapFromNextGrade(marks, gradeRanges),
            performance: calculatePerformanceMetrics(marks)
        }
    };
}

function calculateGapFromNextGrade(marks, ranges) {
    for (let i = ranges.length - 1; i >= 0; i--) {
        if (marks >= ranges[i].min && i > 0) {
            return {
                nextGrade: ranges[i-1].grade,
                pointsNeeded: ranges[i-1].min - marks
            };
        }
    }
    return null;
}

function calculatePerformanceMetrics(marks) {
    return {
        isTopPerformer: marks >= 85,
        needsImprovement: marks < 60,
        percentile: calculateApproximatePercentile(marks)
    };
}

function calculateApproximatePercentile(marks) {
    // Simple approximation for demonstration
    return Math.min(100, Math.round(marks * 1.2));
}

// Example Usage
console.log(calculateDetailedGrade(88));`,
              explanation: [
                "🔹 Grade ranges array mei define karte hain",
                "🔹 Detailed analysis provide karte hain",
                "🔹 Next grade ke liye gap calculate karte hain",
                "🔹 Performance metrics include karte hain"
              ]
            },
            {
              method: "Method 3: Advanced Grade Management System",
              approach: ["🔹 Complete grade management system with multiple features"],
              code: `
class GradeManagementSystem {
    static gradeRanges = [
        { min: 90, grade: 'A+', points: 4.0, comment: 'Excellent!' },
        { min: 80, grade: 'A', points: 3.7, comment: 'Very Good!' },
        { min: 70, grade: 'B', points: 3.0, comment: 'Good!' },
        { min: 60, grade: 'C', points: 2.0, comment: 'Satisfactory' },
        { min: 50, grade: 'D', points: 1.0, comment: 'Pass' },
        { min: 0, grade: 'F', points: 0.0, comment: 'Need Improvement' }
    ];

    static calculateGrade(studentInfo) {
        const { marks, subject, totalMarks = 100 } = studentInfo;
        
        // Validate input
        if (marks < 0 || marks > totalMarks) {
            throw new Error(\`Invalid marks! Please enter marks between 0 and \${totalMarks}\`);
        }

        // Convert to percentage if totalMarks is different from 100
        const percentage = (marks / totalMarks) * 100;
        const result = this.gradeRanges.find(r => percentage >= r.min);
        
        return {
            student: studentInfo,
            gradeInfo: {
                marks: marks,
                percentage: percentage.toFixed(2),
                grade: result.grade,
                points: result.points,
                comment: result.comment,
                status: percentage >= 50 ? 'Pass' : 'Fail'
            },
            analysis: this.generateAnalysis(percentage),
            suggestions: this.generateSuggestions(percentage),
            statistics: this.generateStatistics(percentage)
        };
    }

    static generateAnalysis(percentage) {
        return {
            performance: {
                level: this.getPerformanceLevel(percentage),
                isTopPerformer: percentage >= 85,
                needsImprovement: percentage < 60
            },
            gradePoints: this.calculateGradePoints(percentage),
            gapAnalysis: this.calculateGapAnalysis(percentage),
            strengths: this.getStrengths(percentage),
            weaknesses: this.getWeaknesses(percentage)
        };
    }

    static getPerformanceLevel(percentage) {
        if (percentage >= 85) return 'Outstanding';
        if (percentage >= 70) return 'Good';
        if (percentage >= 50) return 'Average';
        return 'Below Average';
    }

    static calculateGradePoints(percentage) {
        const gradeInfo = this.gradeRanges.find(r => percentage >= r.min);
        return {
            points: gradeInfo.points,
            maxPoints: 4.0,
            description: this.getGradeDescription(gradeInfo.points)
        };
    }

    static generateSuggestions(percentage) {
        const suggestions = [];
        
        if (percentage < 50) {
            suggestions.push("Consider remedial classes");
            suggestions.push("Focus on fundamental concepts");
        } else if (percentage < 70) {
            suggestions.push("Regular practice needed");
            suggestions.push("Try solving more problems");
        } else if (percentage < 90) {
            suggestions.push("Good performance! Aim higher");
            suggestions.push("Focus on advanced topics");
        } else {
            suggestions.push("Excellent! Consider helping others");
            suggestions.push("Explore additional challenges");
        }

        return suggestions;
    }

    static generateStatistics(percentage) {
        // Mock statistics for demonstration
        return {
            classAverage: 75,
            percentile: this.calculatePercentile(percentage),
            ranking: this.estimateRanking(percentage),
            comparison: this.generateComparison(percentage)
        };
    }

    static calculatePercentile(percentage) {
        // Simple approximation
        return Math.min(100, Math.round(percentage * 1.1));
    }

    static estimateRanking(percentage) {
        // Mock ranking estimation
        const totalStudents = 100;
        const estimatedRank = Math.ceil(totalStudents * (1 - percentage/100));
        return {
            rank: estimatedRank,
            totalStudents: totalStudents
        };
    }
}

// Example Usage
const studentResult = GradeManagementSystem.calculateGrade({
    marks: 85,
    subject: "Mathematics",
    totalMarks: 100
});
console.log(studentResult);`,
              explanation: [
                "🔹 Complete grade management system",
                "🔹 Multiple analysis features",
                "🔹 Suggestions and statistics",
                "🔹 Professional and scalable approach"
              ]
            }
          ],
          output: `
Example Output:

Simple Grade Calculator:
{
    marks: 85,
    grade: 'A',
    status: 'Pass',
    message: 'You got A grade with 85 marks'
}

Detailed Grade Calculator:
{
    marks: 88,
    grade: 'A',
    comment: 'Very Good!',
    status: 'Pass',
    percentage: 88,
    analysis: {
        distinction: true,
        firstClass: false,
        passingMargin: false,
        gapFromNextGrade: {
            nextGrade: 'A+',
            pointsNeeded: 2
        },
        performance: {
            isTopPerformer: true,
            needsImprovement: false,
            percentile: 95
        }
    }
}

Advanced Grade Management System:
{
    student: { marks: 85, subject: "Mathematics", totalMarks: 100 },
    gradeInfo: {
        marks: 85,
        percentage: "85.00",
        grade: "A",
        points: 3.7,
        comment: "Very Good!",
        status: "Pass"
    },
    analysis: { ... detailed analysis ... },
    suggestions: [
        "Good performance! Aim higher",
        "Focus on advanced topics"
    ],
    statistics: { ... detailed statistics ... }
}`
        },
        practiceProblems: [
          "🔹 Multiple subjects ka grade calculate karo",
          "🔹 Class average and ranking calculate karo",
          "🔹 Custom grade ranges implement karo",
          "🔹 Progress tracking system banao"
        ],
        interviewQuestions: [
          "🔹 Different grading systems kaise handle karoge?",
          "🔹 Large number of students ke liye optimize kaise karoge?",
          "🔹 Grade normalization kaise implement karoge?",
          "🔹 Edge cases kaise handle karoge?"
        ],
        comparisonTable: [
          {
            approach: "Simple Calculator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple to implement and understand",
            cons: "Limited features and analysis"
          },
          {
            approach: "Detailed Calculator",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Better analysis and feedback",
            cons: "More complex implementation"
          },
          {
            approach: "Advanced System",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Comprehensive features, professional grade",
            cons: "Complex setup, higher maintenance"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider scalability for large systems",
          "🔹 Provide helpful feedback to students",
          "🔹 Maintain consistent grading standards"
        ]
      },
      // Q-32. Simple Login System
      {
        title: "Simple Login System",
        description: "Simple Login System ke multiple approaches explore karenge.",
        problemStatement: "Ek basic login system implement karo jo username aur password validate kare. Different security features add karo.",
        algorithm: [
          "🔹 Username and password input lo",
          "🔹 Credentials validate karo",
          "🔹 Login success/failure handle karo",
          "🔹 Security features implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Basic Login System",
              approach: ["🔹 Simple validation with hardcoded credentials"],
              code: `
function simpleLogin(username, password) {
    // Hardcoded credentials (for demonstration)
    const validUsername = "admin";
    const validPassword = "password123";
    
    // Validate credentials
    const isValid = username === validUsername && password === validPassword;
    
    return {
        success: isValid,
        message: isValid ? "Login successful!" : "Invalid username or password",
        timestamp: new Date().toISOString(),
        attempts: 1
    };
}

// Example Usage
console.log(simpleLogin("admin", "password123"));
console.log(simpleLogin("user", "wrongpass"));`,
              explanation: [
                "🔹 Basic credentials checking",
                "🔹 Simple success/failure response",
                "🔹 Timestamp for login attempt",
                "🔹 Easy to understand implementation"
              ]
            },
            {
              method: "Method 2: Login System with Multiple Users",
              approach: ["🔹 Using user database and attempt tracking"],
              code: `
class LoginSystem {
    constructor() {
        // Mock user database
        this.users = new Map([
            ["admin", { password: "admin123", role: "admin" }],
            ["user1", { password: "pass123", role: "user" }],
            ["user2", { password: "test123", role: "user" }]
        ]);
        
        this.loginAttempts = new Map();
        this.maxAttempts = 3;
        this.lockoutDuration = 15 * 60 * 1000; // 15 minutes
    }

    login(username, password) {
        // Check if account is locked
        if (this.isAccountLocked(username)) {
            return {
                success: false,
                message: "Account is locked. Try again later.",
                remainingTime: this.getRemainingLockTime(username)
            };
        }

        // Validate credentials
        const user = this.users.get(username);
        if (!user || user.password !== password) {
            return this.handleFailedAttempt(username);
        }

        // Successful login
        this.resetAttempts(username);
        return {
            success: true,
            message: "Login successful!",
            role: user.role,
            timestamp: new Date().toISOString()
        };
    }

    handleFailedAttempt(username) {
        const attempts = (this.loginAttempts.get(username)?.attempts || 0) + 1;
        this.loginAttempts.set(username, {
            attempts: attempts,
            lastAttempt: new Date()
        });

        if (attempts >= this.maxAttempts) {
            this.loginAttempts.set(username, {
                attempts: attempts,
                lastAttempt: new Date(),
                lockedUntil: new Date(Date.now() + this.lockoutDuration)
            });
            return {
                success: false,
                message: "Account locked due to too many failed attempts",
                lockoutTime: this.lockoutDuration / 60000 + " minutes"
            };
        }

        return {
            success: false,
            message: "Invalid credentials",
            remainingAttempts: this.maxAttempts - attempts
        };
    }

    isAccountLocked(username) {
        const userAttempts = this.loginAttempts.get(username);
        if (!userAttempts?.lockedUntil) return false;
        return userAttempts.lockedUntil > new Date();
    }

    getRemainingLockTime(username) {
        const userAttempts = this.loginAttempts.get(username);
        if (!userAttempts?.lockedUntil) return 0;
        return Math.max(0, userAttempts.lockedUntil - new Date());
    }

    resetAttempts(username) {
        this.loginAttempts.delete(username);
    }
}

// Example Usage
const loginSystem = new LoginSystem();
console.log(loginSystem.login("admin", "admin123"));
console.log(loginSystem.login("user1", "wrongpass"));`,
              explanation: [
                "🔹 Multiple users support",
                "🔹 Login attempts tracking",
                "🔹 Account lockout feature",
                "🔹 Role-based access"
              ]
            },
            {
              method: "Method 3: Advanced Security Features",
              approach: ["🔹 Enhanced security with multiple features"],
              code: `
class SecureLoginSystem {
    constructor() {
        this.users = new Map();
        this.sessions = new Map();
        this.loginAttempts = new Map();
        this.config = {
            maxAttempts: 3,
            lockoutDuration: 15 * 60 * 1000, // 15 minutes
            sessionDuration: 30 * 60 * 1000,  // 30 minutes
            passwordMinLength: 8
        };
    }

    registerUser(username, password, email) {
        // Validate input
        if (!this.isValidUsername(username)) {
            return { success: false, message: "Invalid username format" };
        }
        if (!this.isValidPassword(password)) {
            return { success: false, message: "Invalid password format" };
        }
        if (!this.isValidEmail(email)) {
            return { success: false, message: "Invalid email format" };
        }

        // Check if user exists
        if (this.users.has(username)) {
            return { success: false, message: "Username already exists" };
        }

        // Hash password (simplified for demo)
        const hashedPassword = this.hashPassword(password);

        // Store user
        this.users.set(username, {
            password: hashedPassword,
            email: email,
            created: new Date(),
            lastLogin: null
        });

        return { success: true, message: "Registration successful" };
    }

    login(username, password) {
        try {
            // Input validation
            if (!username || !password) {
                throw new Error("Username and password are required");
            }

            // Check lockout
            if (this.isAccountLocked(username)) {
                const remainingTime = this.getRemainingLockTime(username);
                throw new Error(\`Account is locked.Try again in \${ Math.ceil(remainingTime / 60000) } minutes\`);
            }

            // Validate credentials
            const user = this.users.get(username);
            if (!user || user.password !== this.hashPassword(password)) {
                return this.handleFailedAttempt(username);
            }

            // Create session
            const sessionToken = this.generateSessionToken();
            const session = {
                token: sessionToken,
                username: username,
                created: new Date(),
                expires: new Date(Date.now() + this.config.sessionDuration)
            };

            this.sessions.set(sessionToken, session);
            this.resetAttempts(username);

            // Update last login
            user.lastLogin = new Date();
            this.users.set(username, user);

            return {
                success: true,
                message: "Login successful",
                sessionToken: sessionToken,
                expiresIn: this.config.sessionDuration / 1000
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    validateSession(sessionToken) {
        const session = this.sessions.get(sessionToken);
        if (!session) return false;
        if (session.expires < new Date()) {
            this.sessions.delete(sessionToken);
            return false;
        }
        return true;
    }

    logout(sessionToken) {
        if (this.sessions.has(sessionToken)) {
            this.sessions.delete(sessionToken);
            return { success: true, message: "Logout successful" };
        }
        return { success: false, message: "Invalid session" };
    }

    // Helper methods
    isValidUsername(username) {
        return /^[a-zA-Z0-9_]{3,20}$/.test(username);
    }

    isValidPassword(password) {
        return password.length >= this.config.passwordMinLength &&
               /[A-Z]/.test(password) &&
               /[a-z]/.test(password) &&
               /[0-9]/.test(password);
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    hashPassword(password) {
        // Simplified hash for demo (use proper hashing in production)
        return Buffer.from(password).toString('base64');
    }

    generateSessionToken() {
        return Math.random().toString(36).substring(2) +
               Date.now().toString(36);
    }
}

// Example Usage
const secureLogin = new SecureLoginSystem();

// Register user
console.log(secureLogin.registerUser(
    "john_doe",
    "Password123",
    "john@example.com"
));

// Login
const loginResult = secureLogin.login("john_doe", "Password123");
console.log(loginResult);

// Validate session
console.log(secureLogin.validateSession(loginResult.sessionToken));

// Logout
console.log(secureLogin.logout(loginResult.sessionToken));`,
              explanation: [
                "🔹 Complete user management system",
                "🔹 Session handling and validation",
                "🔹 Password hashing (simplified)",
                "🔹 Input validation and security checks"
              ]
            }
          ],
          output: `
Example Output:

Basic Login:
{
    success: true,
    message: "Login successful!",
    timestamp: "2024-03-31T10:00:00.000Z",
    attempts: 1
}

Multiple Users System:
{
    success: true,
    message: "Login successful!",
    role: "admin",
    timestamp: "2024-03-31T10:00:00.000Z"
}

Advanced System:
{
    success: true,
    message: "Login successful",
    sessionToken: "abc123xyz789",
    expiresIn: 1800
}`
        },
        practiceProblems: [
          "🔹 Add password reset functionality",
          "🔹 Implement 2FA authentication",
          "🔹 Add password strength checker",
          "🔹 Implement remember me feature"
        ],
        interviewQuestions: [
          "🔹 Security measures kya implement karoge?",
          "🔹 Password storage kaise secure karoge?",
          "🔹 Session management kaise karoge?",
          "🔹 Brute force attacks se kaise protect karoge?"
        ],
        comparisonTable: [
          {
            approach: "Basic Login",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            pros: "Simple to implement",
            cons: "Limited security features"
          },
          {
            approach: "Multiple Users",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n) where n is number of users",
            pros: "Better security, attempt tracking",
            cons: "More complex implementation"
          },
          {
            approach: "Advanced Security",
            timeComplexity: "O(1)",
            spaceComplexity: "O(n+s) where s is number of sessions",
            pros: "Comprehensive security features",
            cons: "Complex setup and maintenance"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on security needs",
          "🔹 Implement proper validation and sanitization",
          "🔹 Use secure password storage",
          "🔹 Consider scalability and maintenance"
        ]
      }
    ],
  },
  // 5️⃣ Logical Puzzles & Challenges
  {
    category: "Logical Puzzles & Challenges",
    questions: [
      // Q-33. FizzBuzz (Multiple of Both)
      {
        title: "FizzBuzz",
        description: "FizzBuzz problem ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo 1 se n tak ke numbers mei, 3 ke multiples ke liye 'Fizz', 5 ke multiples ke liye 'Buzz', aur dono ke multiples ke liye 'FizzBuzz' print kare.",
        algorithm: [
          "🔹 1 se n tak iterate karo",
          "🔹 Check if number is multiple of 3 and/or 5",
          "🔹 Appropriate string return karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple If-Else Approach",
              approach: ["🔹 Basic if-else conditions use karenge"],
              code: `
function fizzBuzz(n) {
    const result = [];
    
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if(i % 3 === 0) {
            result.push("Fizz");
        } else if(i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    
    return {
        input: n,
        output: result,
        summary: \`Generated FizzBuzz sequence up to \${n}\`
    };
}

// Example Usage
console.log(fizzBuzz(15));`,
              explanation: [
                "🔹 Simple conditions check karte hain",
                "🔹 Array mei results store karte hain",
                "🔹 String mei convert karke store karte hain",
                "🔹 Easy to understand approach"
              ]
            },
            {
              method: "Method 2: Using Map and Modulo Check",
              approach: ["🔹 Array methods ka use karenge"],
              code: `
function fizzBuzzUsingMap(n) {
    return {
        input: n,
        output: Array.from({ length: n }, (_, i) => i + 1).map(num => {
            const fizz = num % 3 === 0;
            const buzz = num % 5 === 0;
            return fizz && buzz ? "FizzBuzz" 
                 : fizz ? "Fizz"
                 : buzz ? "Buzz"
                 : num.toString();
        }),
        analysis: {
            fizz: [...Array(n)].filter((_, i) => (i + 1) % 3 === 0).length,
            buzz: [...Array(n)].filter((_, i) => (i + 1) % 5 === 0).length,
            fizzBuzz: [...Array(n)].filter((_, i) => (i + 1) % 15 === 0).length
        }
    };
}

// Example Usage
console.log(fizzBuzzUsingMap(20));`,
              explanation: [
                "🔹 Array.from() se sequence generate karte hain",
                "🔹 map() se transformation karte hain",
                "🔹 Additional analysis provide karte hain",
                "🔹 Modern and clean approach"
              ]
            },
            {
              method: "Method 3: Advanced FizzBuzz with Custom Rules",
              approach: ["🔹 Configurable rules and enhanced features"],
              code: `
class FizzBuzzGenerator {
    constructor(rules = [
        { divisor: 3, word: "Fizz" },
        { divisor: 5, word: "Buzz" }
    ]) {
        this.rules = rules;
    }

    generate(n) {
        const result = [];
        const analysis = {
            numbers: 0,
            matchedRules: {}
        };

        for(let i = 1; i <= n; i++) {
            const matches = this.rules
                .filter(rule => i % rule.divisor === 0)
                .map(rule => rule.word);
            
            const value = matches.length > 0 ? matches.join("") : i.toString();
            result.push(value);

            // Update analysis
            if(matches.length === 0) {
                analysis.numbers++;
            } else {
                matches.forEach(word => {
                    analysis.matchedRules[word] = (analysis.matchedRules[word] || 0) + 1;
                });
            }
        }

        return {
            input: n,
            output: result,
            analysis: analysis,
            statistics: this.generateStatistics(result)
        };
    }

    generateStatistics(result) {
        return {
            total: result.length,
            uniqueValues: new Set(result).size,
            distribution: result.reduce((acc, val) => {
                acc[val] = (acc[val] || 0) + 1;
                return acc;
            }, {})
        };
    }
}

// Example Usage
const fizzBuzz = new FizzBuzzGenerator();
console.log(fizzBuzz.generate(30));

// Custom rules example
const customFizzBuzz = new FizzBuzzGenerator([
    { divisor: 2, word: "Even" },
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" }
]);
console.log(customFizzBuzz.generate(15));`,
              explanation: [
                "🔹 Configurable rules system",
                "🔹 Detailed analysis and statistics",
                "🔹 Support for custom divisors and words",
                "🔹 Professional and extensible approach"
              ]
            }
          ],
          output: `
Example Output:

Simple Approach (n=15):
{
    input: 15,
    output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"],
    summary: "Generated FizzBuzz sequence up to 15"
}

Map Approach (n=20):
{
    input: 20,
    output: [...],
    analysis: {
        fizz: 6,
        buzz: 4,
        fizzBuzz: 1
    }
}

Advanced Approach (n=30):
{
    input: 30,
    output: [...],
    analysis: {
        numbers: 18,
        matchedRules: {
            Fizz: 8,
            Buzz: 4,
            FizzBuzz: 2
        }
    },
    statistics: {
        total: 30,
        uniqueValues: 4,
        distribution: {
            "Fizz": 8,
            "Buzz": 4,
            "FizzBuzz": 2,
            "1": 1,
            ...
        }
    }
}`
        },
        practiceProblems: [
          "🔹 Add more divisors and words",
          "🔹 Implement reverse FizzBuzz",
          "🔹 Find patterns in FizzBuzz sequence",
          "🔹 Optimize for large numbers"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki complexity compare karo",
          "🔹 Memory optimization ke liye kya kar sakte hain?",
          "🔹 Large numbers ke liye kaise handle karoge?",
          "🔹 Custom rules implement karne ka best way kya hai?"
        ],
        comparisonTable: [
          {
            approach: "If-Else",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Simple to understand and implement",
            cons: "Limited flexibility"
          },
          {
            approach: "Map Based",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Clean code, functional approach",
            cons: "Slightly more complex"
          },
          {
            approach: "Class Based",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Highly configurable, feature-rich",
            cons: "More setup required"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider extensibility needs",
          "🔹 Balance between simplicity and features",
          "🔹 Handle edge cases properly"
        ]
      },
      // Q-34. Number Reversal
      {
        title: "Number Reversal",
        description: "Number reversal ke multiple approaches explore karenge",
        problemStatement: "Ek function likho jo kisi bhi number ko reverse kare. For example: 123 ka reverse 321 hoga.",
        algorithm: [
          "🔹 Input number lo",
          "🔹 Number ko reverse karo",
          "🔹 Edge cases handle karo (negative numbers, etc)",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using String Conversion",
              approach: ["🔹 Convert number to string and reverse it"],
              code: `
function reverseNumber(num) {
    // Handle negative numbers
    const isNegative = num < 0;
    const absNum = Math.abs(num);
    
    // Convert to string, reverse and convert back to number
    const reversed = parseInt(absNum.toString().split('').reverse().join(''));
    
    return {
        input: num,
        reversed: isNegative ? -reversed : reversed,
        explanation: \`Reversed \${num} to \${isNegative ? -reversed : reversed}\`
    };
}

// Example Usage
console.log(reverseNumber(123));
console.log(reverseNumber(-456));`,
              explanation: [
                "🔹 Negative numbers ko handle karte hain",
                "🔹 toString() se string mei convert karte hain",
                "🔹 String ko reverse karke number mei convert karte hain",
                "🔹 Simple and readable approach"
              ]
            },
            {
              method: "Method 2: Mathematical Approach",
              approach: ["🔹 Using modulo and division operations"],
              code: `
function reverseNumberMath(num) {
    let n = Math.abs(num);
    let reversed = 0;
    
    while(n > 0) {
        const digit = n % 10;
        reversed = (reversed * 10) + digit;
        n = Math.floor(n / 10);
    }
    
    const result = num < 0 ? -reversed : reversed;
    
    return {
        input: num,
        reversed: result,
        steps: "Using mathematical operations (modulo and division)",
        explanation: \`Reversed \${num} to \${result} using digit extraction\`
    };
}

// Example Usage
console.log(reverseNumberMath(789));
console.log(reverseNumberMath(-321));`,
              explanation: [
                "🔹 Pure mathematical approach use karte hain",
                "🔹 Modulo se digits extract karte hain",
                "🔹 No string conversion needed",
                "🔹 Memory efficient approach"
              ]
            },
            {
              method: "Method 3: Advanced Number Reversal",
              approach: ["🔹 With overflow checking and additional features"],
              code: `
class NumberReverser {
    static MAX_INT = 2147483647;  // 2^31 - 1
    static MIN_INT = -2147483648; // -2^31

    static reverse(num) {
        let n = Math.abs(num);
        let reversed = 0;
        const digits = [];
        
        // Extract digits and store for analysis
        while(n > 0) {
            const digit = n % 10;
            digits.unshift(digit);
            
            // Check for overflow
            if (reversed > (this.MAX_INT - digit) / 10) {
                return {
                    input: num,
                    reversed: 0,
                    error: "Integer overflow occurred",
                    digits: digits
                };
            }
            
            reversed = (reversed * 10) + digit;
            n = Math.floor(n / 10);
        }
        
        const result = num < 0 ? -reversed : reversed;
        
        return {
            input: num,
            reversed: result,
            digits: digits,
            analysis: {
                digitCount: digits.length,
                isNegative: num < 0,
                isPalindrome: num === result,
                originalSum: digits.reduce((a, b) => a + b, 0),
                reversedSum: digits.reduce((a, b) => a + b, 0)
            }
        };
    }

    static reverseBatch(numbers) {
        return numbers.map(num => this.reverse(num));
    }
}

// Example Usage
console.log(NumberReverser.reverse(12345));
console.log(NumberReverser.reverseBatch([123, -456, 789]));`,
              explanation: [
                "🔹 Integer overflow checking implement karta hai",
                "🔹 Detailed analysis provide karta hai",
                "🔹 Batch processing support",
                "🔹 Professional and feature-rich approach"
              ]
            }
          ],
          output: `
Example Output:

String Conversion Approach:
{
    input: 123,
    reversed: 321,
    explanation: "Reversed 123 to 321"
}

Mathematical Approach:
{
    input: 789,
    reversed: 987,
    steps: "Using mathematical operations (modulo and division)",
    explanation: "Reversed 789 to 987 using digit extraction"
}

Advanced Approach:
{
    input: 12345,
    reversed: 54321,
    digits: [1, 2, 3, 4, 5],
    analysis: {
        digitCount: 5,
        isNegative: false,
        isPalindrome: false,
        originalSum: 15,
        reversedSum: 15
    }
}`
        },
        practiceProblems: [
          "🔹 Handle special cases like trailing zeros",
          "🔹 Find palindromic numbers",
          "🔹 Compare original and reversed sum",
          "🔹 Optimize for very large numbers"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki complexity compare karo",
          "🔹 Overflow cases kaise handle karoge?",
          "🔹 Large numbers ke liye kaunsa approach best hai?",
          "🔹 Memory optimization ke liye kya suggestions hain?"
        ],
        comparisonTable: [
          {
            approach: "String Conversion",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(log n)",
            pros: "Simple to implement and understand",
            cons: "String conversion overhead"
          },
          {
            approach: "Mathematical",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
            pros: "Memory efficient, no conversion needed",
            cons: "Needs overflow handling"
          },
          {
            approach: "Advanced Class",
            timeComplexity: "O(log n)",
            spaceComplexity: "O(log n)",
            pros: "Feature-rich, handles edge cases",
            cons: "More complex implementation"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider number size and constraints",
          "🔹 Handle edge cases properly",
          "🔹 Implement overflow protection for large numbers"
        ]
      },
      // Q-35. Palindrome Checker
      {
        title: "Palindrome Checker",
        description: "Palindrome checking ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo check kare ki given input palindrome hai ya nahi. Input string ya number ho sakta hai.",
        algorithm: [
          "🔹 Input ko string mei convert karo",
          "🔹 Check if string reads same forwards and backwards",
          "🔹 Consider case sensitivity and special characters",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using String Reverse",
              approach: ["🔹 Convert to string and compare with its reverse"],
              code: `
function isPalindrome(input) {
    // Convert input to string and clean it
    const str = input.toString().toLowerCase();
    const cleanStr = str.replace(/[^a-z0-9]/g, '');
    
    // Compare with reverse
    const reversed = cleanStr.split('').reverse().join('');
    
    return {
        input: input,
        cleaned: cleanStr,
        reversed: reversed,
        isPalindrome: cleanStr === reversed,
        explanation: \`\${input} is\${cleanStr === reversed ? '' : ' not'} a palindrome\`
    };
}

// Example Usage
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(12321));
console.log(isPalindrome("race a car"));`,
              explanation: [
                "🔹 Input ko clean karte hain (lowercase, remove special chars)",
                "🔹 String ko reverse karke compare karte hain",
                "🔹 Simple and straightforward approach",
                "🔹 Both string and number inputs handle karta hai"
              ]
            },
            {
              method: "Method 2: Two Pointer Approach",
              approach: ["🔹 Compare characters from both ends"],
              code: `
function isPalindromeTwoPointer(input) {
    const str = input.toString().toLowerCase();
    const cleanStr = str.replace(/[^a-z0-9]/g, '');
    
    let left = 0;
    let right = cleanStr.length - 1;
    
    while(left < right) {
        if(cleanStr[left] !== cleanStr[right]) {
            return {
                input: input,
                cleaned: cleanStr,
                isPalindrome: false,
                mismatchAt: { left, right },
                explanation: \`Mismatch at positions \${left} and \${right}\`
            };
        }
        left++;
        right--;
    }
    
    return {
        input: input,
        cleaned: cleanStr,
        isPalindrome: true,
        explanation: "Characters match from both ends"
    };
}

// Example Usage
console.log(isPalindromeTwoPointer("racecar"));
console.log(isPalindromeTwoPointer("hello"));`,
              explanation: [
                "🔹 Two pointers use karke string ke ends compare karte hain",
                "🔹 Memory efficient approach hai",
                "🔹 Early return if mismatch found",
                "🔹 Position of mismatch bhi batata hai"
              ]
            },
            {
              method: "Method 3: Advanced Palindrome Analysis",
              approach: ["🔹 Comprehensive palindrome checking with additional features"],
              code: `
class PalindromeAnalyzer {
    static analyze(input) {
        const str = input.toString();
        const analysis = {
            original: str,
            cleaned: str.toLowerCase().replace(/[^a-z0-9]/g, ''),
            length: str.length,
            type: this.getInputType(input),
            caseSensitive: this.checkCaseSensitive(str),
            patterns: this.findPatterns(str)
        };
        
        analysis.results = {
            ignoreCase: this.checkPalindrome(analysis.cleaned),
            strictMode: this.checkPalindrome(str),
            numbersOnly: this.checkPalindrome(str.replace(/[^0-9]/g, '')),
            lettersOnly: this.checkPalindrome(str.replace(/[^a-zA-Z]/g, ''))
        };
        
        return {
            ...analysis,
            isPalindrome: analysis.results.ignoreCase,
            summary: this.generateSummary(analysis)
        };
    }

    static getInputType(input) {
        return typeof input === 'number' ? 'number' : 'string';
    }

    static checkCaseSensitive(str) {
        return str.toLowerCase() !== str.toUpperCase();
    }

    static findPatterns(str) {
        return {
            repeating: this.findRepeatingCharacters(str),
            symmetric: this.checkSymmetry(str)
        };
    }

    static findRepeatingCharacters(str) {
        const freq = {};
        [...str].forEach(char => freq[char] = (freq[char] || 0) + 1);
        return freq;
    }

    static checkSymmetry(str) {
        const len = str.length;
        return {
            isSymmetric: str.slice(0, Math.floor(len/2)) === 
                        [...str.slice(Math.ceil(len/2))].reverse().join(''),
            center: len % 2 === 1 ? str[Math.floor(len/2)] : null
        };
    }

    static checkPalindrome(str) {
        return str === [...str].reverse().join('');
    }

    static generateSummary(analysis) {
        return \`"\${analysis.original}" is \${
            analysis.results.ignoreCase ? '' : 'not '
        }a palindrome (ignoring case and special characters).\`;
    }
}

// Example Usage
console.log(PalindromeAnalyzer.analyze("A man, a plan, a canal: Panama"));
console.log(PalindromeAnalyzer.analyze(12321));`,
              explanation: [
                "🔹 Multiple types of palindrome checks",
                "🔹 Pattern analysis provide karta hai",
                "🔹 Case sensitivity aur special characters handle karta hai",
                "🔹 Detailed statistics provide karta hai"
              ]
            }
          ],
          output: `
Example Output:

Simple Approach:
{
    input: "A man, a plan, a canal: Panama",
    cleaned: "amanaplanacanalpanama",
    reversed: "amanaplanacanalpanama",
    isPalindrome: true,
    explanation: "A man, a plan, a canal: Panama is a palindrome"
}

Two Pointer Approach:
{
    input: "racecar",
    cleaned: "racecar",
    isPalindrome: true,
    explanation: "Characters match from both ends"
}

Advanced Analysis:
{
    original: "A man, a plan, a canal: Panama",
    cleaned: "amanaplanacanalpanama",
    length: 30,
    type: "string",
    caseSensitive: true,
    patterns: {
        repeating: { "a": 7, "n": 4, ... },
        symmetric: { isSymmetric: true, center: "c" }
    },
    results: {
        ignoreCase: true,
        strictMode: false,
        numbersOnly: true,
        lettersOnly: true
    },
    isPalindrome: true,
    summary: "\"A man, a plan, a canal: Panama\" is a palindrome..."
}`
        },
        practiceProblems: [
          "🔹 Find longest palindromic substring",
          "🔹 Check if string can be palindrome after one character removal",
          "🔹 Generate palindromic numbers in range",
          "🔹 Find palindromic patterns in text"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Space optimization ke liye kya suggestions hain?",
          "🔹 Special characters kaise handle karoge?",
          "🔹 Large strings ke liye konsa approach best hai?"
        ],
        comparisonTable: [
          {
            approach: "String Reverse",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Simple to implement and understand",
            cons: "Extra space for reversed string"
          },
          {
            approach: "Two Pointer",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Memory efficient, early termination",
            cons: "Only basic palindrome checking"
          },
          {
            approach: "Advanced Analysis",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Comprehensive analysis, multiple features",
            cons: "Higher memory usage, more complex"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider input size and type",
          "🔹 Handle special cases properly",
          "🔹 Balance between features and efficiency"
        ]
      },
      // Q-36. Find Second Largest Number
      {
        title: "Find Second Largest Number",
        description: "Array mei se second largest number find karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo array mei se second largest number find kare. Different edge cases aur approaches handle karo.",
        algorithm: [
          "🔹 Input array validate karo",
          "🔹 Array ko process karke second largest find karo",
          "🔹 Edge cases handle karo (duplicates, no second largest)",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Sort and Find",
              approach: ["🔹 Array ko sort karke second largest find karenge"],
              code: `
function findSecondLargestSort(arr) {
    // Validate input
    if (!arr || arr.length < 2) {
        return {
            error: "Array should have at least 2 elements"
        };
    }

    // Remove duplicates and sort in descending order
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    
    // Check if second largest exists
    if (uniqueSorted.length < 2) {
        return {
            error: "No second largest element exists",
            array: arr,
            largest: uniqueSorted[0]
        };
    }

    return {
        array: arr,
        secondLargest: uniqueSorted[1],
        largest: uniqueSorted[0],
        explanation: \`Second largest number is \${uniqueSorted[1]}\`
    };
}`,
              explanation: [
                "🔹 Array ko unique elements ke sath sort karte hain",
                "🔹 Sort ke baad second element second largest hota hai",
                "🔹 Edge cases handle karte hain",
                "🔹 Simple but not most efficient for large arrays"
              ]
            },
            {
              method: "Method 2: Two Variables Tracking",
              approach: ["🔹 Single traversal with two variables"],
              code: `
function findSecondLargestSinglePass(arr) {
    if (!arr || arr.length < 2) {
        return { error: "Array should have at least 2 elements" };
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    if (second === -Infinity) {
        return {
            error: "No second largest element exists",
            array: arr,
            largest: first
        };
    }

    return {
        array: arr,
        secondLargest: second,
        largest: first,
        explanation: \`Found \${second} as second largest with \${first} as largest\`
    };
}`,
              explanation: [
                "🔹 Single traversal mei solution find karte hain",
                "🔹 Two variables track karte hain largest numbers",
                "🔹 Memory efficient approach hai",
                "🔹 Best time complexity O(n)"
              ]
            },
            {
              method: "Method 3: Advanced Analysis",
              approach: ["🔹 Comprehensive analysis with multiple features"],
              code: `
class SecondLargestFinder {
    static find(arr) {
        if (!arr || arr.length < 2) {
            return { error: "Array should have at least 2 elements" };
        }

        const analysis = {
            originalArray: [...arr],
            arrayLength: arr.length,
            uniqueElements: new Set(arr).size,
            sortedArray: [...new Set(arr)].sort((a, b) => b - a),
            statistics: this.getStatistics(arr)
        };

        if (analysis.uniqueElements < 2) {
            return {
                ...analysis,
                error: "No second largest element exists",
                largest: analysis.sortedArray[0]
            };
        }

        return {
            ...analysis,
            secondLargest: analysis.sortedArray[1],
            largest: analysis.sortedArray[0],
            summary: this.generateSummary(analysis)
        };
    }

    static getStatistics(arr) {
        return {
            min: Math.min(...arr),
            max: Math.max(...arr),
            average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
            distinct: new Set(arr).size,
            frequency: this.getFrequencyMap(arr)
        };
    }

    static getFrequencyMap(arr) {
        return arr.reduce((freq, num) => {
            freq[num] = (freq[num] || 0) + 1;
            return freq;
        }, {});
    }

    static generateSummary(analysis) {
        return \`Found second largest \${analysis.sortedArray[1]} in array of \${
            analysis.arrayLength} elements with \${analysis.uniqueElements} unique values\`;
    }

    static findInMatrixRows(matrix) {
        return matrix.map((row, index) => ({
            row: index,
            ...this.find(row)
        }));
    }
}

// Example Usage
console.log(SecondLargestFinder.find([10, 5, 8, 12, 3]));
console.log(SecondLargestFinder.find([5, 5, 5, 5]));`,
              explanation: [
                "🔹 Comprehensive analysis provide karta hai",
                "🔹 Multiple utility functions",
                "🔹 Matrix support bhi include hai",
                "🔹 Detailed statistics generate karta hai"
              ]
            }
          ],
          output: `
Example Output:

Sort Approach:
{
    array: [10, 5, 8, 12, 3],
    secondLargest: 10,
    largest: 12,
    explanation: "Second largest number is 10"
}

Single Pass Approach:
{
    array: [10, 5, 8, 12, 3],
    secondLargest: 10,
    largest: 12,
    explanation: "Found 10 as second largest with 12 as largest"
}

Advanced Analysis:
{
    originalArray: [10, 5, 8, 12, 3],
    arrayLength: 5,
    uniqueElements: 5,
    sortedArray: [12, 10, 8, 5, 3],
    statistics: {
        min: 3,
        max: 12,
        average: 7.6,
        distinct: 5,
        frequency: {
            "3": 1, "5": 1, "8": 1, "10": 1, "12": 1
        }
    },
    secondLargest: 10,
    largest: 12,
    summary: "Found second largest 10 in array of 5 elements with 5 unique values"
}`
        },
        practiceProblems: [
          "🔹 Find kth largest element",
          "🔹 Handle negative numbers and duplicates",
          "🔹 Find second largest in stream of numbers",
          "🔹 Handle very large arrays efficiently"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Space optimization ke liye kya suggestions hain?",
          "🔹 Edge cases kaise handle karoge?",
          "🔹 Large arrays ke liye best approach kaunsa hai?"
        ],
        comparisonTable: [
          {
            approach: "Sort and Find",
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)",
            pros: "Simple to implement and understand",
            cons: "Not efficient for large arrays"
          },
          {
            approach: "Two Variables",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Most efficient, single pass solution",
            cons: "No additional analysis"
          },
          {
            approach: "Advanced Analysis",
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)",
            pros: "Comprehensive analysis, multiple features",
            cons: "Higher memory usage"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider input size and constraints",
          "🔹 Handle edge cases properly",
          "🔹 Balance between features and efficiency"
        ]
      },
      // Q-37. Find First Non-Repeating Character
      {
        title: "Find First Non-Repeating Character",
        description: "String mei first non-repeating character find karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo string mei sabse pehla non-repeating character find kare. For example: 'leetcode' mei 'l' first non-repeating character hai.",
        algorithm: [
          "🔹 String mei har character ka frequency count karo",
          "🔹 String ko traverse karke first character with frequency 1 find karo",
          "🔹 Different approaches implement karo",
          "🔹 Edge cases handle karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Character Map",
              approach: ["🔹 Map use karke character frequencies store karenge"],
              code: `
function findFirstNonRepeating(str) {
    // Create frequency map
    const charMap = new Map();
    
    // Count frequencies
    for(let char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    
    // Find first non-repeating character
    for(let char of str) {
        if(charMap.get(char) === 1) {
            return {
                string: str,
                character: char,
                position: str.indexOf(char),
                explanation: \`First non-repeating character '\${char}' found at position \${str.indexOf(char)}\`
            };
        }
    }
    
    return {
        string: str,
        character: null,
        explanation: "No non-repeating character found"
    };
}

// Example Usage
console.log(findFirstNonRepeating("leetcode"));
console.log(findFirstNonRepeating("aabbcc"));`,
              explanation: [
                "🔹 Map mei frequencies store karte hain",
                "🔹 Two pass approach hai",
                "🔹 First pass mei frequencies count karte hain",
                "🔹 Second pass mei first non-repeating find karte hain"
              ]
            },
            {
              method: "Method 2: Using Array",
              approach: ["🔹 Fixed size array for character frequencies"],
              code: `
function findFirstNonRepeatingArray(str) {
    // Create array for frequencies (assuming ASCII characters)
    const freq = new Array(256).fill(0);
    
    // Count frequencies
    for(let i = 0; i < str.length; i++) {
        freq[str.charCodeAt(i)]++;
    }
    
    // Find first non-repeating character
    for(let i = 0; i < str.length; i++) {
        if(freq[str.charCodeAt(i)] === 1) {
            return {
                string: str,
                character: str[i],
                position: i,
                frequency: freq[str.charCodeAt(i)],
                analysis: {
                    totalCharacters: str.length,
                    uniqueCharacters: freq.filter(f => f > 0).length,
                    repeatingCharacters: freq.filter(f => f > 1).length
                }
            };
        }
    }
    
    return {
        string: str,
        character: null,
        analysis: {
            totalCharacters: str.length,
            uniqueCharacters: freq.filter(f => f > 0).length,
            repeatingCharacters: freq.filter(f => f > 1).length
        }
    };
}

// Example Usage
console.log(findFirstNonRepeatingArray("statistics"));`,
              explanation: [
                "🔹 Fixed size array use karte hain",
                "🔹 ASCII values ke based par frequencies store karte hain",
                "🔹 Additional analysis provide karta hai",
                "🔹 Memory efficient for small strings"
              ]
            },
            {
              method: "Method 3: Advanced Analysis",
              approach: ["🔹 Comprehensive character analysis with multiple features"],
              code: `
class CharacterAnalyzer {
    static findFirstNonRepeating(str) {
        const analysis = {
            string: str,
            length: str.length,
            frequencies: this.getFrequencies(str),
            characterTypes: this.analyzeCharacterTypes(str)
        };

        // Find first non-repeating
        const result = this.findNonRepeating(str, analysis.frequencies);
        
        return {
            ...analysis,
            ...result,
            statistics: this.generateStatistics(analysis),
            suggestions: this.generateSuggestions(analysis)
        };
    }

    static getFrequencies(str) {
        return str.split('').reduce((freq, char) => {
            freq[char] = (freq[char] || 0) + 1;
            return freq;
        }, {});
    }

    static analyzeCharacterTypes(str) {
        return {
            letters: str.match(/[a-zA-Z]/g)?.length || 0,
            digits: str.match(/[0-9]/g)?.length || 0,
            spaces: str.match(/\\s/g)?.length || 0,
            special: str.match(/[^a-zA-Z0-9\\s]/g)?.length || 0
        };
    }

    static findNonRepeating(str, frequencies) {
        for(let i = 0; i < str.length; i++) {
            if(frequencies[str[i]] === 1) {
                return {
                    character: str[i],
                    position: i,
                    isLetter: /[a-zA-Z]/.test(str[i]),
                    isUpperCase: /[A-Z]/.test(str[i])
                };
            }
        }
        return {
            character: null,
            position: -1
        };
    }

    static generateStatistics(analysis) {
        return {
            uniqueCharacters: Object.keys(analysis.frequencies).length,
            repeatingCharacters: Object.values(analysis.frequencies).filter(f => f > 1).length,
            maxFrequency: Math.max(...Object.values(analysis.frequencies)),
            characterDistribution: analysis.characterTypes
        };
    }

    static generateSuggestions(analysis) {
        const suggestions = [];
        if(analysis.length < 3) {
            suggestions.push("String is too short for meaningful analysis");
        }
        if(Object.values(analysis.frequencies).every(f => f > 1)) {
            suggestions.push("All characters are repeating");
        }
        return suggestions;
    }
}

// Example Usage
console.log(CharacterAnalyzer.findFirstNonRepeating("programming"));
console.log(CharacterAnalyzer.findFirstNonRepeating("aabbccdd"));`,
              explanation: [
                "🔹 Complete character analysis system",
                "🔹 Multiple statistical metrics",
                "🔹 Character type analysis",
                "🔹 Suggestions based on analysis"
              ]
            }
          ],
          output: `
Example Output:

Map Approach:
{
    string: "leetcode",
    character: "l",
    position: 0,
    explanation: "First non-repeating character 'l' found at position 0"
}

Array Approach:
{
    string: "statistics",
    character: "a",
    position: 2,
    frequency: 1,
    analysis: {
        totalCharacters: 10,
        uniqueCharacters: 6,
        repeatingCharacters: 2
    }
}

Advanced Analysis:
{
    string: "programming",
    length: 11,
    frequencies: { "p": 1, "r": 2, "o": 1, "g": 2, "a": 1, "m": 2, "i": 1, "n": 1 },
    characterTypes: { letters: 11, digits: 0, spaces: 0, special: 0 },
    character: "p",
    position: 0,
    isLetter: true,
    isUpperCase: false,
    statistics: {
        uniqueCharacters: 8,
        repeatingCharacters: 3,
        maxFrequency: 2,
        characterDistribution: { letters: 11, digits: 0, spaces: 0, special: 0 }
    }
}`
        },
        practiceProblems: [
          "🔹 Find last non-repeating character",
          "🔹 Find all non-repeating characters in order",
          "🔹 Handle case sensitivity",
          "🔹 Optimize for very long strings"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time/space complexity compare karo",
          "🔹 Large strings ke liye kaunsa approach best hai?",
          "🔹 Memory optimization ke liye kya suggestions hain?",
          "🔹 Unicode characters kaise handle karoge?"
        ],
        comparisonTable: [
          {
            approach: "Character Map",
            timeComplexity: "O(n)",
            spaceComplexity: "O(k) where k is unique characters",
            pros: "Simple to implement, handles all characters",
            cons: "Uses extra space for map"
          },
          {
            approach: "Array",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1) - fixed size array",
            pros: "Memory efficient for ASCII",
            cons: "Limited to ASCII characters"
          },
          {
            approach: "Advanced Analysis",
            timeComplexity: "O(n)",
            spaceComplexity: "O(k)",
            pros: "Comprehensive analysis, multiple features",
            cons: "Higher memory usage, more complex"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider character set limitations",
          "🔹 Handle edge cases properly",
          "🔹 Balance between features and performance"
        ]
      },
      // Q-38. Even Digit Counter
      {
        title: "Even Digit Counter",
        description: "Number mei even digits count karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo kisi bhi number mei even digits (0,2,4,6,8) ka count kare.",
        algorithm: [
          "🔹 Number ke digits ko access karo",
          "🔹 Har digit check karo even hai ya nahi",
          "🔹 Even digits ka count maintain karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: String Conversion",
              approach: ["🔹 Convert number to string and check digits"],
              code: `
function countEvenDigits(num) {
    // Convert to string and filter even digits
    const digits = Math.abs(num).toString().split('');
    const evenDigits = digits.filter(digit => parseInt(digit) % 2 === 0);
    
    return {
        number: num,
        evenDigits: evenDigits,
        count: evenDigits.length,
        explanation: \`Found \${evenDigits.length} even digits: \${evenDigits.join(', ')}\`
    };
}

// Example Usage
console.log(countEvenDigits(2468));
console.log(countEvenDigits(123));`,
              explanation: [
                "🔹 Number ko string mei convert karte hain",
                "🔹 filter() se even digits find karte hain",
                "🔹 Even digits store and count karte hain",
                "🔹 Simple and readable approach"
              ]
            },
            {
              method: "Method 2: Mathematical Approach",
              approach: ["🔹 Using modulo to extract and check digits"],
              code: `
function countEvenDigitsMath(num) {
    let n = Math.abs(num);
    let count = 0;
    const evenDigits = [];
    
    while(n > 0) {
        const digit = n % 10;
        if(digit % 2 === 0) {
            count++;
            evenDigits.unshift(digit);
        }
        n = Math.floor(n / 10);
    }
    
    return {
        number: num,
        evenDigits: evenDigits,
        count: count,
        analysis: {
            totalDigits: Math.abs(num).toString().length,
            evenPercentage: (count * 100 / Math.abs(num).toString().length).toFixed(2)
        }
    };
}

// Example Usage
console.log(countEvenDigitsMath(2468));
console.log(countEvenDigitsMath(123));`,
              explanation: [
                "🔹 Mathematical operations se digits extract karte hain",
                "🔹 No string conversion needed",
                "🔹 Additional analysis provide karta hai",
                "🔹 Memory efficient approach"
              ]
            },
            {
              method: "Method 3: Advanced Digit Analysis",
              approach: ["🔹 Comprehensive digit analysis with additional features"],
              code: `
class DigitAnalyzer {
    static countEvenDigits(num) {
        const digits = Math.abs(num).toString().split('').map(Number);
        
        const analysis = {
            number: num,
            digits: digits,
            evenDigits: digits.filter(d => d % 2 === 0),
            oddDigits: digits.filter(d => d % 2 !== 0),
            digitFrequency: this.getDigitFrequency(digits)
        };
        
        const stats = {
            totalDigits: digits.length,
            evenCount: analysis.evenDigits.length,
            oddCount: analysis.oddDigits.length,
            evenPercentage: (analysis.evenDigits.length * 100 / digits.length).toFixed(2),
            mostFrequent: this.getMostFrequentDigit(analysis.digitFrequency)
        };
        
        return {
            ...analysis,
            statistics: stats,
            summary: this.generateSummary(analysis, stats)
        };
    }
    
    static getDigitFrequency(digits) {
        return digits.reduce((freq, digit) => {
            freq[digit] = (freq[digit] || 0) + 1;
            return freq;
        }, {});
    }
    
    static getMostFrequentDigit(frequency) {
        return Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])[0];
    }
    
    static generateSummary(analysis, stats) {
        return \`Number \${analysis.number} has \${stats.evenCount} even digits 
                (\${analysis.evenDigits.join(', ')}) and \${stats.oddCount} odd digits 
                (\${analysis.oddDigits.join(', ')}). Even digits make up \${stats.evenPercentage}% of total digits.\`;
    }
}

// Example Usage
console.log(DigitAnalyzer.countEvenDigits(24683));
console.log(DigitAnalyzer.countEvenDigits(123));`,
              explanation: [
                "🔹 Comprehensive digit analysis system",
                "🔹 Multiple statistical metrics calculate karta hai",
                "🔹 Frequency analysis included",
                "🔹 Detailed summary generate karta hai"
              ]
            }
          ],
          output: `
Example Output:

String Conversion:
{
    number: 2468,
    evenDigits: ["2", "4", "6", "8"],
    count: 4,
    explanation: "Found 4 even digits: 2, 4, 6, 8"
}

Mathematical Approach:
{
    number: 2468,
    evenDigits: [2, 4, 6, 8],
    count: 4,
    analysis: {
        totalDigits: 4,
        evenPercentage: "100.00"
    }
}

Advanced Analysis:
{
    number: 24683,
    digits: [2, 4, 6, 8, 3],
    evenDigits: [2, 4, 6, 8],
    oddDigits: [3],
    digitFrequency: {"2": 1, "4": 1, "6": 1, "8": 1, "3": 1},
    statistics: {
        totalDigits: 5,
        evenCount: 4,
        oddCount: 1,
        evenPercentage: "80.00",
        mostFrequent: ["2", 1]
    },
    summary: "Number 24683 has 4 even digits (2, 4, 6, 8) and 1 odd digits (3). Even digits make up 80.00% of total digits."
}`
        },
        practiceProblems: [
          "🔹 Find numbers with specific count of even digits",
          "🔹 Compare even and odd digit counts",
          "🔹 Find most frequent even digit",
          "🔹 Optimize for very large numbers"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Large numbers ke liye konsa approach best hai?",
          "🔹 Memory optimization ke liye kya suggestions hain?",
          "🔹 Edge cases kaise handle karoge?"
        ],
        comparisonTable: [
          {
            approach: "String Conversion",
            timeComplexity: "O(n) where n is number of digits",
            spaceComplexity: "O(n)",
            pros: "Simple to implement and understand",
            cons: "String conversion overhead"
          },
          {
            approach: "Mathematical",
            timeComplexity: "O(log n) base 10",
            spaceComplexity: "O(1)",
            pros: "Memory efficient, no conversion needed",
            cons: "Slightly more complex logic"
          },
          {
            approach: "Advanced Analysis",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Comprehensive analysis, multiple features",
            cons: "Higher memory usage"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider input size and constraints",
          "🔹 Mathematical approach most efficient for simple counting",
          "🔹 Advanced analysis best for detailed statistics"
        ]
      },
      // Q-39. Nested Condition Challenge
      {
        title: "Nested Condition Challenge",
        description: "Complex nested conditions ko better way mei implement karne ke approaches explore karenge.",
        problemStatement: "Ek student grading system implement karo with multiple nested conditions jaise marks, attendance, assignments completion etc.",
        algorithm: [
          "🔹 Multiple conditions ko identify karo",
          "🔹 Conditions ko organize karo",
          "🔹 Different approaches implement karo",
          "🔹 Code readability maintain karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Nested If-Else",
              approach: ["🔹 Traditional nested if-else conditions"],
              code: `
function evaluateStudent(student) {
    if (student.marks >= 60) {
        if (student.attendance >= 75) {
            if (student.assignments >= 80) {
                return {
                    status: 'Excellent',
                    grade: 'A',
                    eligible: true
                };
            } else {
                return {
                    status: 'Good',
                    grade: 'B',
                    eligible: true
                };
            }
        } else {
            if (student.assignments >= 90) {
                return {
                    status: 'Fair',
                    grade: 'C',
                    eligible: true
                };
            } else {
                return {
                    status: 'Poor',
                    grade: 'D',
                    eligible: false
                };
            }
        }
    } else {
        return {
            status: 'Failed',
            grade: 'F',
            eligible: false
        };
    }
}

// Example Usage
const student = {
    marks: 75,
    attendance: 80,
    assignments: 85
};
console.log(evaluateStudent(student));`,
              explanation: [
                "🔹 Traditional nested if-else structure",
                "🔹 Multiple conditions check",
                "🔹 Easy to understand but complex to maintain",
                "🔹 Can become messy with more conditions"
              ]
            },
            {
              method: "Method 2: Early Returns",
              approach: ["🔹 Using early returns to avoid nesting"],
              code: `
function evaluateStudentEarlyReturns(student) {
    // Early validations
    if (!student.marks || !student.attendance || !student.assignments) {
        return {
            status: 'Invalid',
            error: 'Missing required fields',
            eligible: false
        };
    }

    // Failed condition
    if (student.marks < 60) {
        return {
            status: 'Failed',
            grade: 'F',
            eligible: false
        };
    }

    // Excellent condition
    if (student.marks >= 60 && student.attendance >= 75 && student.assignments >= 80) {
        return {
            status: 'Excellent',
            grade: 'A',
            eligible: true
        };
    }

    // Good condition
    if (student.marks >= 60 && student.attendance >= 75) {
        return {
            status: 'Good',
            grade: 'B',
            eligible: true
        };
    }

    // Fair condition
    if (student.marks >= 60 && student.assignments >= 90) {
        return {
            status: 'Fair',
            grade: 'C',
            eligible: true
        };
    }

    // Default case
    return {
        status: 'Poor',
        grade: 'D',
        eligible: false
    };
}`,
              explanation: [
                "🔹 Early returns avoid deep nesting",
                "🔹 More maintainable code",
                "🔹 Better error handling",
                "🔹 Clearer logic flow"
              ]
            },
            {
              method: "Method 3: Object Mapping",
              approach: ["🔹 Using object mapping for conditions"],
              code: `
class StudentEvaluator {
    static gradeRules = [
        {
            condition: (s) => s.marks >= 60 && s.attendance >= 75 && s.assignments >= 80,
            result: { status: 'Excellent', grade: 'A', eligible: true }
        },
        {
            condition: (s) => s.marks >= 60 && s.attendance >= 75,
            result: { status: 'Good', grade: 'B', eligible: true }
        },
        {
            condition: (s) => s.marks >= 60 && s.assignments >= 90,
            result: { status: 'Fair', grade: 'C', eligible: true }
        },
        {
            condition: (s) => s.marks >= 60,
            result: { status: 'Poor', grade: 'D', eligible: false }
        },
        {
            condition: (s) => true, // default case
            result: { status: 'Failed', grade: 'F', eligible: false }
        }
    ];

    static evaluate(student) {
        // Validate input
        if (!this.isValidStudent(student)) {
            return {
                status: 'Invalid',
                error: 'Missing required fields',
                eligible: false
            };
        }

        // Find matching rule
        const rule = this.gradeRules.find(r => r.condition(student));
        
        return {
            ...rule.result,
            marks: student.marks,
            attendance: student.attendance,
            assignments: student.assignments,
            analysis: this.generateAnalysis(student)
        };
    }

    static isValidStudent(student) {
        return student.marks != null && 
               student.attendance != null && 
               student.assignments != null;
    }

    static generateAnalysis(student) {
        return {
            marksStatus: this.getMarksStatus(student.marks),
            attendanceStatus: this.getAttendanceStatus(student.attendance),
            assignmentStatus: this.getAssignmentStatus(student.assignments)
        };
    }

    static getMarksStatus(marks) {
        if (marks >= 80) return 'Excellent';
        if (marks >= 60) return 'Good';
        return 'Needs Improvement';
    }

    static getAttendanceStatus(attendance) {
        if (attendance >= 90) return 'Excellent';
        if (attendance >= 75) return 'Good';
        return 'Poor';
    }

    static getAssignmentStatus(assignments) {
        if (assignments >= 90) return 'Excellent';
        if (assignments >= 80) return 'Good';
        return 'Needs Improvement';
    }
}

// Example Usage
const student = {
    marks: 75,
    attendance: 85,
    assignments: 92
};
console.log(StudentEvaluator.evaluate(student));`,
              explanation: [
                "🔹 Organized rules in object format",
                "🔹 Easy to add/modify rules",
                "🔹 Clean and maintainable code",
                "🔹 Includes detailed analysis"
              ]
            }
          ],
          output: `
Example Output:

Method 1:
{
    status: 'Excellent',
    grade: 'A',
    eligible: true
}

Method 2:
{
    status: 'Good',
    grade: 'B',
    eligible: true
}

Method 3:
{
    status: 'Good',
    grade: 'B',
    eligible: true,
    marks: 75,
    attendance: 85,
    assignments: 92,
    analysis: {
        marksStatus: 'Good',
        attendanceStatus: 'Good',
        assignmentStatus: 'Excellent'
    }
}`
        }
      },
      // Q-40. Toggle Case
      {
        title: "Toggle Case",
        description: "String characters ka case toggle karne ke multiple approaches explore karenge.",
        problemStatement: "Ek function likho jo string ke characters ka case toggle kare (uppercase to lowercase and vice versa).",
        algorithm: [
          "🔹 String ke har character ko check karo",
          "🔹 Character ka case identify karo (upper/lower)",
          "🔹 Case ko toggle karo (opposite case mei convert karo)",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using String Methods",
              approach: ["🔹 Built-in string methods use karke"],
              code: `
function toggleCase(str) {
    const toggledString = str.split('').map(char => {
        return char === char.toUpperCase() ? 
               char.toLowerCase() : 
               char.toUpperCase();
    }).join('');
    
    return {
        original: str,
        toggled: toggledString,
        explanation: \`Toggled case of "\${str}" to "\${toggledString}"\`
    };
}

// Example Usage
console.log(toggleCase("Hello World"));
console.log(toggleCase("JavaScript"));`,
              explanation: [
                "🔹 String ko array mei convert karte hain",
                "🔹 map() se har character ka case check karke toggle karte hain",
                "🔹 Simple and straightforward approach",
                "🔹 Easy to understand and implement"
              ]
            },
            {
              method: "Method 2: Using Character Codes",
              approach: ["🔹 ASCII/Unicode character codes ka use karke"],
              code: `
function toggleCaseUsingCharCodes(str) {
    const result = str.split('').map(char => {
        const code = char.charCodeAt(0);
        
        if (code >= 65 && code <= 90) {  // Uppercase
            return String.fromCharCode(code + 32);
        } else if (code >= 97 && code <= 122) {  // Lowercase
            return String.fromCharCode(code - 32);
        }
        return char;  // Non-alphabetic characters
    }).join('');
    
    return {
        original: str,
        toggled: result,
        analysis: {
            originalLength: str.length,
            toggledChars: str.split('').filter(char => 
                /[a-zA-Z]/.test(char)).length,
            unchangedChars: str.split('').filter(char => 
                !/[a-zA-Z]/.test(char)).length
        }
    };
}

// Example Usage
console.log(toggleCaseUsingCharCodes("Hello123!"));`,
              explanation: [
                "🔹 Character codes ka use karke case identify karte hain",
                "🔹 ASCII value manipulation se case toggle karte hain",
                "🔹 Non-alphabetic characters ko handle karta hai",
                "🔹 Performance efficient approach"
              ]
            },
            {
              method: "Method 3: Advanced Case Toggler",
              approach: ["🔹 Advanced features and analysis ke sath"],
              code: `
class CaseToggler {
    static toggle(str) {
        const analysis = {
            original: str,
            originalAnalysis: this.analyzeString(str)
        };
        
        const toggled = str.split('').map(char => {
            if (char >= 'A' && char <= 'Z') return char.toLowerCase();
            if (char >= 'a' && char <= 'z') return char.toUpperCase();
            return char;
        }).join('');
        
        return {
            ...analysis,
            toggled,
            toggledAnalysis: this.analyzeString(toggled),
            summary: this.generateSummary(str, toggled)
        };
    }
    
    static analyzeString(str) {
        return {
            length: str.length,
            uppercase: str.match(/[A-Z]/g)?.length || 0,
            lowercase: str.match(/[a-z]/g)?.length || 0,
            numbers: str.match(/[0-9]/g)?.length || 0,
            spaces: str.match(/\\s/g)?.length || 0,
            special: str.replace(/[A-Za-z0-9\\s]/g, '').length,
            firstChar: str[0],
            lastChar: str[str.length - 1]
        };
    }
    
    static generateSummary(original, toggled) {
        return {
            message: \`Toggled case of "\${original}" to "\${toggled}"\`,
            charChanges: original.split('').reduce((count, char, i) => 
                count + (char !== toggled[i] ? 1 : 0), 0)
        };
    }
    
    static toggleMultiple(strings) {
        return strings.map(str => this.toggle(str));
    }
}

// Example Usage
console.log(CaseToggler.toggle("Hello World! 123"));
console.log(CaseToggler.toggleMultiple(["JavaScript", "Python"]));`,
              explanation: [
                "🔹 Comprehensive string analysis provide karta hai",
                "🔹 Multiple strings ka batch processing support",
                "🔹 Detailed character statistics",
                "🔹 Professional and extensible approach"
              ]
            }
          ],
          output: `
Example Output:

String Methods Approach:
{
    original: "Hello World",
    toggled: "hELLO wORLD",
    explanation: 'Toggled case of "Hello World" to "hELLO wORLD"'
}

Character Codes Approach:
{
    original: "Hello123!",
    toggled: "hELLO123!",
    analysis: {
        originalLength: 8,
        toggledChars: 5,
        unchangedChars: 3
    }
}

Advanced Approach:
{
    original: "Hello World! 123",
    toggled: "hELLO wORLD! 123",
    originalAnalysis: {
        length: 15,
        uppercase: 2,
        lowercase: 8,
        numbers: 3,
        spaces: 1,
        special: 1,
        firstChar: "H",
        lastChar: "3"
    },
    toggledAnalysis: { ... },
    summary: {
        message: 'Toggled case of "Hello World! 123" to "hELLO wORLD! 123"',
        charChanges: 10
    }
}`
        },
        practiceProblems: [
          "🔹 Toggle case of alternate characters",
          "🔹 Toggle case of words only",
          "🔹 Handle special Unicode characters",
          "🔹 Optimize for very long strings"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki performance compare karo",
          "🔹 Unicode characters ke liye kya considerations hain?",
          "🔹 Memory optimization ke liye kya suggestions hain?",
          "🔹 Edge cases kaise handle karoge?"
        ],
        comparisonTable: [
          {
            approach: "String Methods",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Simple to implement, handles basic cases",
            cons: "Multiple string method calls"
          },
          {
            approach: "Character Codes",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "More efficient, direct manipulation",
            cons: "Limited to ASCII characters"
          },
          {
            approach: "Advanced Class",
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            pros: "Feature-rich, comprehensive analysis",
            cons: "Higher memory usage"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider character set limitations",
          "🔹 Handle special cases properly",
          "🔹 Balance between features and performance"
        ]
      },
      // Q-41. Find the Missing Number in a Sequence
      {
        title: "Find Missing Number",
        description: "Array mei missing number find karne ke multiple approaches explore karenge.",
        problemStatement: "Ek array diya gaya hai 1 to n numbers ka jisme ek number missing hai. Missing number find karo.",
        algorithm: [
          "🔹 Array ka sum calculate karo",
          "🔹 1 to n tak ka expected sum calculate karo",
          "🔹 Difference find karke missing number find karo",
          "🔹 Different approaches implement karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Using Sum Formula",
              approach: ["🔹 Mathematical sum formula approach"],
              code: `
function findMissingNumber(arr) {
    const n = arr.length + 1;  // Total numbers should be n+1
    const expectedSum = (n * (n + 1)) / 2;  // Sum formula for 1 to n
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return {
        array: arr,
        missingNumber: expectedSum - actualSum,
        explanation: \`Expected sum: \${expectedSum}, Actual sum: \${actualSum}\`
    };
}

// Example Usage
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Missing: 3
console.log(findMissingNumber([1, 2, 3, 5]));    // Missing: 4`,
              explanation: [
                "🔹 n*(n+1)/2 formula use karte hain",
                "🔹 Actual array ka sum calculate karte hain",
                "🔹 Difference se missing number find karte hain",
                "🔹 Simple and efficient approach"
              ]
            },
            {
              method: "Method 2: Using XOR Operation",
              approach: ["🔹 XOR property ka use karenge"],
              code: `
function findMissingNumberXOR(arr) {
    const n = arr.length + 1;
    let xor = 0;
    
    // XOR all numbers from 1 to n
    for(let i = 1; i <= n; i++) {
        xor ^= i;
    }
    
    // XOR all array elements
    for(let num of arr) {
        xor ^= num;
    }
    
    return {
        array: arr,
        missingNumber: xor,
        analysis: {
            method: "XOR Operation",
            totalNumbers: n,
            arrayLength: arr.length
        }
    };
}

// Example Usage
console.log(findMissingNumberXOR([1, 2, 4, 5])); // Missing: 3`,
              explanation: [
                "🔹 XOR operation property: a^a = 0",
                "🔹 All numbers ko XOR karte hain",
                "🔹 Memory efficient approach",
                "🔹 No overflow problems"
              ]
            },
            {
              method: "Method 3: Advanced Search",
              approach: ["🔹 Binary search based approach with multiple features"],
              code: `
class MissingNumberFinder {
    static find(arr) {
        // Sort array if not sorted
        const sortedArr = [...arr].sort((a, b) => a - b);
        const analysis = {
            original: arr,
            sorted: sortedArr,
            expectedRange: this.generateRange(1, arr.length + 1)
        };

        // Find missing using binary search approach
        let left = 0;
        const missing = [];
        
        for(let i = 1; i <= sortedArr.length + 1; i++) {
            if(sortedArr[left] !== i) {
                missing.push(i);
                continue;
            }
            left++;
        }

        return {
            ...analysis,
            missing: missing[0],
            allMissing: missing,
            statistics: this.generateStatistics(sortedArr, missing)
        };
    }

    static generateRange(start, end) {
        return Array.from({length: end - start + 1}, (_, i) => start + i);
    }

    static generateStatistics(arr, missing) {
        return {
            arrayLength: arr.length,
            expectedLength: arr.length + missing.length,
            minValue: Math.min(...arr),
            maxValue: Math.max(...arr),
            isSorted: this.isSorted(arr)
        };
    }

    static isSorted(arr) {
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] < arr[i-1]) return false;
        }
        return true;
    }

    static findMultipleMissing(arr, range) {
        const expected = new Set(this.generateRange(1, range));
        const actual = new Set(arr);
        return [...expected].filter(num => !actual.has(num));
    }
}

// Example Usage
console.log(MissingNumberFinder.find([1, 2, 4, 5, 6]));
console.log(MissingNumberFinder.findMultipleMissing([1, 2, 4, 6], 6));`,
              explanation: [
                "🔹 Comprehensive approach with multiple features",
                "🔹 Multiple missing numbers find kar sakta hai",
                "🔹 Detailed statistics provide karta hai",
                "🔹 Range based search support"
              ]
            }
          ],
          output: `
Example Output:

Sum Formula Approach:
{
    array: [1, 2, 4, 5, 6],
    missingNumber: 3,
    explanation: "Expected sum: 21, Actual sum: 18"
}

XOR Approach:
{
    array: [1, 2, 4, 5],
    missingNumber: 3,
    analysis: {
        method: "XOR Operation",
        totalNumbers: 5,
        arrayLength: 4
    }
}

Advanced Approach:
{
    original: [1, 2, 4, 5, 6],
    sorted: [1, 2, 4, 5, 6],
    expectedRange: [1, 2, 3, 4, 5, 6],
    missing: 3,
    allMissing: [3],
    statistics: {
        arrayLength: 5,
        expectedLength: 6,
        minValue: 1,
        maxValue: 6,
        isSorted: true
    }
}`
        },
        practiceProblems: [
          "🔹 Find multiple missing numbers",
          "🔹 Handle unsorted arrays",
          "🔹 Find missing number in range",
          "🔹 Handle duplicates in array"
        ],
        interviewQuestions: [
          "🔹 Different approaches ki time complexity compare karo",
          "🔹 Space optimization ke liye kya suggestions hain?",
          "🔹 Edge cases kaise handle karoge?",
          "🔹 Large arrays ke liye konsa approach best hai?"
        ],
        comparisonTable: [
          {
            approach: "Sum Formula",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "Simple to implement and understand",
            cons: "May have integer overflow issues"
          },
          {
            approach: "XOR Operation",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            pros: "No overflow issues, memory efficient",
            cons: "Works only for single missing number"
          },
          {
            approach: "Advanced Search",
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)",
            pros: "Handles multiple cases, detailed analysis",
            cons: "Higher time complexity due to sorting"
          }
        ],
        conclusion: [
          "🔹 Choose approach based on requirements",
          "🔹 Consider array size and constraints",
          "🔹 Handle edge cases properly",
          "🔹 Use XOR for single missing number cases"
        ]
      },
      // Q-42. Convert Number to Words
      {
        title: "Convert Number to Words",
        description: "Number ko words mei convert karne ke multiple approaches explore karenge",
        problemStatement: "Ek function likho jo number ko English words mei convert kare. Example: 123 ko 'One Hundred Twenty Three'",
        algorithm: [
          "🔹 Number ko digits mei break karo",
          "🔹 Har digit ko uske position ke hisab se words mei convert karo",
          "🔹 Special cases handle karo (teens, thousands etc)",
          "🔹 Final string generate karo"
        ],
        solution: {
          methods: [
            {
              method: "Method 1: Simple Array Mapping",
              approach: ["🔹 Basic array mapping for digits and positions"],
              code: `
function numberToWords(num) {
    if (num === 0) return "Zero";
    
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    
    function convert(n) {
        if (n < 10) return ones[n];
        if (n < 20) return teens[n-10];
        if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? " " + ones[n%10] : "");
        if (n < 1000) return ones[Math.floor(n/100)] + " Hundred" + (n%100 ? " " + convert(n%100) : "");
        return "Number too large";
    }
    
    return {
        number: num,
        words: convert(num),
        explanation: \`Converted \${num} to words using array mapping\`
    };
}

// Example Usage
console.log(numberToWords(123));
console.log(numberToWords(45));`,
              explanation: [
                "🔹 Arrays mei words store karte hain",
                "🔹 Position wise conversion karte hain",
                "🔹 Simple but limited to 3 digits",
                "🔹 Easy to understand approach"
              ]
            },
            {
              method: "Method 2: Recursive Large Number Handling",
              approach: ["🔹 Recursion for handling larger numbers"],
              code: `
class NumberConverter {
    static units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    static teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    static tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    static scales = ["", "Thousand", "Million", "Billion"];

    static convertToWords(num) {
        if (num === 0) return "Zero";
        if (num < 0) return "Negative " + this.convertToWords(Math.abs(num));

        let words = "";
        let scaleIndex = 0;

        while (num > 0) {
            if (num % 1000 !== 0) {
                words = this.convertGroup(num % 1000) + " " + this.scales[scaleIndex] + " " + words;
            }
            num = Math.floor(num / 1000);
            scaleIndex++;
        }

        return {
            result: words.trim(),
            formatted: this.formatNumber(num),
            analysis: {
                digits: words.trim().split(' ').length,
                scales: scaleIndex - 1
            }
        };
    }

    static convertGroup(num) {
        if (num === 0) return "";
        if (num < 10) return this.units[num];
        if (num < 20) return this.teens[num - 10];
        if (num < 100) return this.tens[Math.floor(num / 10)] + (num % 10 ? " " + this.units[num % 10] : "");
        return this.units[Math.floor(num / 100)] + " Hundred" + (num % 100 ? " " + this.convertGroup(num % 100) : "");
    }

    static formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

// Example Usage
console.log(NumberConverter.convertToWords(123456));
console.log(NumberConverter.convertToWords(1000000));`,
              explanation: [
                "🔹 Larger numbers ko handle karta hai",
                "🔹 Scale based conversion (thousands, millions)",
                "🔹 Proper formatting support",
                "🔹 Recursive approach for groups of 3 digits"
              ]
            },
            {
              method: "Method 3: Advanced Features and Customization",
              approach: ["🔹 Multiple features and language support"],
              code: `
class AdvancedNumberConverter {
    constructor(config = {}) {
        this.config = {
            language: config.language || 'en',
            currency: config.currency || false,
            separator: config.separator || ' ',
            ...config
        };

        this.translations = {
            en: {
                units: ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
                teens: ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
                tens: ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
                scales: ["", "Thousand", "Million", "Billion"],
                currency: { singular: "Dollar", plural: "Dollars", cents: "Cents" }
            }
            // Add more languages as needed
        };
    }

    convert(num) {
        const analysis = {
            original: num,
            language: this.config.language,
            isCurrency: this.config.currency
        };

        try {
            if (this.config.currency) {
                return this.convertCurrency(num, analysis);
            }
            return this.convertNumber(num, analysis);
        } catch (error) {
            return {
                error: error.message,
                analysis
            };
        }
    }

    convertNumber(num, analysis) {
        const words = this._convert(Math.abs(num));
        const formatted = this.formatNumber(num);

        return {
            number: num,
            words: num < 0 ? "Negative " + words : words,
            formatted: formatted,
            analysis: {
                ...analysis,
                digits: num.toString().replace(/[-.]/g, '').length,
                hasDecimal: num % 1 !== 0,
                isNegative: num < 0
            }
        };
    }

    convertCurrency(num, analysis) {
        const parts = Math.abs(num).toFixed(2).split('.');
        const dollars = this._convert(parseInt(parts[0]));
        const cents = this._convert(parseInt(parts[1]));

        const translation = this.translations[this.config.language];
        const currencyText = parseInt(parts[0]) === 1 ? 
            translation.currency.singular : 
            translation.currency.plural;

        return {
            amount: num,
            words: \`\${dollars} \${currencyText} and \${cents} \${translation.currency.cents}\`,
            formatted: this.formatCurrency(num),
            analysis: {
                ...analysis,
                wholePart: parseInt(parts[0]),
                decimalPart: parseInt(parts[1])
            }
        };
    }

    _convert(num) {
        const translation = this.translations[this.config.language];
        
        if (num === 0) return "Zero";
        if (num < 10) return translation.units[num];
        if (num < 20) return translation.teens[num - 10];
        if (num < 100) {
            return translation.tens[Math.floor(num / 10)] + 
                   (num % 10 ? this.config.separator + translation.units[num % 10] : "");
        }
        if (num < 1000) {
            return translation.units[Math.floor(num / 100)] + " Hundred" + 
                   (num % 100 ? this.config.separator + this._convert(num % 100) : "");
        }

        for (let i = 3; i >= 0; i--) {
            const scale = Math.pow(1000, i);
            if (num >= scale) {
                return this._convert(Math.floor(num / scale)) + 
                       this.config.separator + translation.scales[i] + 
                       (num % scale ? this.config.separator + this._convert(num % scale) : "");
            }
        }
    }

    formatNumber(num) {
        return new Intl.NumberFormat(this.config.language).format(num);
    }

    formatCurrency(num) {
        return new Intl.NumberFormat(this.config.language, {
            style: 'currency',
            currency: 'USD'
        }).format(num);
    }
}

// Example Usage
const converter = new AdvancedNumberConverter({
    language: 'en',
    currency: false,
    separator: ' '
});

console.log(converter.convert(12345.67));
console.log(converter.convert(-1000000));

const currencyConverter = new AdvancedNumberConverter({
    language: 'en',
    currency: true
});

console.log(currencyConverter.convert(1234.56));`,
              explanation: [
                "🔹 Multiple languages support",
                "🔹 Currency conversion feature",
                "🔹 Customizable formatting",
                "🔹 Comprehensive error handling"
              ]
            }
          ],
          output: `
Example Output:

Simple Array Mapping:
{
    number: 123,
    words: "One Hundred Twenty Three",
    explanation: "Converted 123 to words using array mapping"
}

Recursive Approach:
{
    result: "One Hundred Twenty Three Thousand Four Hundred Fifty Six",
    formatted: "123,456",
    analysis: {
        digits: 8,
        scales: 1
    }
}

Advanced Features:
{
    amount: 1234.56,
    words: "One Thousand Two Hundred Thirty Four Dollars and Fifty Six Cents",
    formatted: "$1,234.56",
    analysis: {
        original: 1234.56,
        language: "en",
        isCurrency: true,
        wholePart: 1234,
        decimalPart: 56
    }
}`
        }
      }
    ]
  }
]

