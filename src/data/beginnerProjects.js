export const beginnerProjects = [
  {
    category: "Basic JavaScript Projects",
    projects: [
      // 1. Color Changer App 🎨
      {
        title: "Color Changer App 🎨",
        concepts: "Click event, DOM Manipulation, Event Handling",
        description: "Color Changer App ek simple aur interactive JavaScript project hai jo DOM manipulation aur event handling ka basic concept sikhata hai. Iss project me ek button click karne par background color randomly change hota hai.",
        banner: {
          imageUrl: "https://plus.unsplash.com/premium_photo-1741996431660-3736cb7e238b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          sourceCode: "https://github.com/solxex/JavaScript-Projects/tree/main/color-changer",
          demoLink: "https://solxex-color-changer.netlify.app/",
          techStack: ["HTML", "CSS", "JavaScript"]
        },
        features: [
          "✅ Button click karne par background color change hota hai.",
          "✅ Random color generator ka use hota hai.",
          "✅ Smooth color transition effect.",
          "✅ Simple aur clean UI."
        ],

        algorithm: [
          "1️⃣ HTML me ek button aur heading create karo.",
          "2️⃣ CSS me styling do aur smooth transition add karo.",
          "3️⃣ JavaScript me button ko select karo.",
          "4️⃣ Button pr ek event listener lagao jo click hone par color change kare.",
          "5️⃣ Ek function likho jo random RGB color generate kare.",
          "6️⃣ Generated color ko body ke background me apply karo."
        ],

        solution: {
          HTMLCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changer App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Click the button to change background color</h1>
    <button id="changeColorBtn">Change Color</button>

    <script src="script.js"></script>
</body>
</html>
          `,

          CSSCode: `
/* Basic styling */
body {
    text-align: center;
    font-family: Arial, sans-serif;
    transition: background-color 0.5s ease-in-out;
}

button {
    font-size: 18px;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}
          `,

          JSCode: `
// Step 1: Button element ko select karna
let button = document.getElementById("changeColorBtn");

// Step 2: Button pr event listener lagana
button.addEventListener("click", function () {
    // Step 3: Random color generate karna
    let randomColor = getRandomColor();
    
    // Step 4: Body ka background color change karna
    document.body.style.backgroundColor = randomColor;
});

// Function jo random color generate karega
function getRandomColor() {
    // Step 1: RGB values generate karna (0-255)
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    // Step 2: RGB format me color return karna
    return \`rgb(\${r}, \${g}, \${b})\`;
}
          `
        },

        explanation: [
          {
            category: "HTML",
            points: [
              "🔹 Ek button aur heading banaya jo user ko color change karne ke liye guide karega.",
              "🔹 External CSS & JavaScript files ko link kiya.",
              "🔹 Semantic tags ka use kiya taaki page structure clear ho.",
            ]
          },
          {
            category: "CSS",
            points: [
              "🔹 Smooth transition effect diya taaki color change smoothly ho.",
              "🔹 Button styling ki gayi hai jisse uska look acha ho.",
              "🔹 Background color aur text contrast properly set kiya.",
            ]
          },
          {
            category: "JavaScript",
            points: [
              "✅ `getElementById()` ka use karke button select kiya.",
              "✅ Click event listener add kiya jo ek function call karega.",
              "✅ Random RGB color generator function likha jo ek naya color return karega.",
              "✅ Generated color ko `document.body.style.backgroundColor` me apply kiya.",
            ]
          }
        ],

        practiceProjects: [
          "🔹 Ek button ke saath ek input field add karo jisme user apna color enter kar sake.",
          "🔹 Multiple buttons banao jo alag-alag predefined colors set karein.",
          "🔹 Auto color change effect add karo jo har second me color change kare."
        ],

        interviewQuestions: [
          "❓ Kaise pata chalega ki user ne button par click kiya hai?",
          "❓ DOM manipulation aur event listeners ka kya use hota hai?",
          "❓ RGB color format kya hota hai aur kaise kaam karta hai?"
        ],

        conclusion: [
          "🎯 Yeh project ek beginner-friendly exercise hai jo JavaScript events aur DOM manipulation ke concepts clear karta hai.",
          "🎯 Agar tum JavaScript me naye ho to isse implement karke interactive projects ka idea le sakte ho.",
          "🎯 Isme aur naye features add karke isse aur advance bana sakte ho! 🚀"
        ],
      },
      // 2. Image Changer App
    ],
  },
];
