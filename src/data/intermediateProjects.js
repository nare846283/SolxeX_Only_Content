export const intermediateProjects = [
    // 1️⃣ DOM & Interactive UI
    {
      category: "DOM & Interactive UI",
      projects: [
        // P-1. Digital Clock 🕰️
        {
          title: "Digital Clock 🕰️",
          concepts: "'setInterval()', 'Date Object', 'DOM Manipulation'",
          description: "Ek simple digital clock jo real-time me time update karega. Yeh project beginners ko Date object aur setInterval function ka use sikhayega.",
          banner: {
            imageUrl: "https://plus.unsplash.com/premium_photo-1741996431660-3736cb7e238b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            sourceCode: "https://github.com/solxex/JavaScript-Projects/tree/main/color-changer",
            demoLink: "https://solxex-color-changer.netlify.app/",
            techStack: ["HTML", "CSS", "JavaScript"]
          },          
          features: [
            "✅ Real-time clock jo har second update hota hai.",
            "✅ Stylish UI jo dark mode support karta hai.",
            "✅ JavaScript ka use karke Date object aur setInterval ka implementation.",
          ],
          algorithm: [
            "1️⃣ HTML me ek div create karo jo time display karega.",
            "2️⃣ CSS ka use karke clock ka look aur feel improve karo.",
            "3️⃣ JavaScript me Date object ka use karke current time lo.",
            "4️⃣ setInterval function ka use karke har second time update karo.",
            "5️⃣ Time ko dynamically update karne ke liye innerText ka use karo.",
          ],
          solution: {
            code: {
              HTMLCode: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Digital Clock</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div class="clock" id="clock">00:00:00</div>
      <script src="script.js"></script>
  </body>
  </html>
              `,
              CSSCode: `
  body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #222;
      color: white;
      font-family: Arial, sans-serif;
  }
  
  .clock {
      font-size: 3rem;
      font-weight: bold;
  }
              `,
              JSCode: `
  // Step 1: Clock element ko select karo
  const clock = document.getElementById("clock");
  
  // Step 2: Function jo current time fetch karega
  function updateClock() {
      let now = new Date();
      let hours = now.getHours().toString().padStart(2, '0');
      let minutes = now.getMinutes().toString().padStart(2, '0');
      let seconds = now.getSeconds().toString().padStart(2, '0');
      
      clock.innerText = \`\${hours}:\${minutes}:\${seconds}\`;
  }
  
  // Step 3: setInterval ka use karke har second update karo
  setInterval(updateClock, 1000);
  
  // Initial call taaki turant time show ho
  updateClock();
              `,
            },
            explanation: {
              HTML: ["🔹 Ek div create kiya jisme time display hoga.", "🔹 External CSS & JavaScript files ko link kiya."],
              CSS: ["🔹 Background color aur text styling diya.", "🔹 Font size aur positioning adjust ki gayi."],
              JS: ["✅ Date object ka use karke hours, minutes, aur seconds extract kiye.", "✅ setInterval function ka use karke har second update kiya."]
            },
          },
          practiceProjects: [
            "🔹 Clock ko AM/PM format me dikhane ka option add karo.",
            "🔹 Ek stopwatch functionality implement karo.",
            "🔹 Clock ke background ko time ke hisaab se change karo (morning/day/night effect)."
          ],
          interviewQuestions: [
            "❓ Date object me time kaise retrieve kar sakte hain?",
            "❓ setInterval aur setTimeout me kya difference hai?",
            "❓ InnerText aur InnerHTML me kya difference hai?"
          ],
          conclusion: [
            "🎯 Digital Clock ek interactive UI project hai jo Date object aur setInterval ka use sikhata hai.",
            "🎯 Is project ko aur bhi advanced features ke saath enhance kiya ja sakta hai.",
          ],
        },
      ],
    },
  ];
  