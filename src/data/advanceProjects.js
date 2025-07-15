export const advanceProjects = [
    // 1️⃣ Real-Time Applications
    {
      category: "Real-Time Applications",
      projects: [
        // P-1. Weather App 🌦️
        {
          title: "Weather App 🌦️",
          concepts: "'API Fetching', 'Async/Await', 'Dynamic UI'",
          description: "Ek real-time weather app jo OpenWeather API se data fetch karega aur user ke location ke hisaab se temperature show karega.",
          banner: {
            imageUrl: "https://plus.unsplash.com/premium_photo-1741996431660-3736cb7e238b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            sourceCode: "https://github.com/solxex/JavaScript-Projects/tree/main/color-changer",
            demoLink: "https://solxex-color-changer.netlify.app/",
            techStack: ["HTML", "CSS", "JavaScript"]
          },
          features: [
            "✅ Real-time weather data API se fetch hota hai.",
            "✅ User ki location ke hisaab se temperature aur conditions show karta hai.",
            "✅ Responsive aur stylish UI.",
          ],
          algorithm: [
            "1️⃣ HTML me ek input field aur button add karo jisme user city ka naam enter karega.",
            "2️⃣ CSS ka use karke UI ko attractive banao.",
            "3️⃣ JavaScript me fetch API ka use karke OpenWeather API se data lo.",
            "4️⃣ Data ko JSON format me convert karo aur required values extract karo.",
            "5️⃣ UI me dynamically temperature aur weather conditions show karo.",
          ],
          solution: {
            code: {
              HTMLCode: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Weather App</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div class="weather-container">
          <input type="text" id="cityInput" placeholder="Enter city name">
          <button onclick="getWeather()">Get Weather</button>
          <h2 id="weatherInfo">Weather info will appear here...</h2>
      </div>
      <script src="script.js"></script>
  </body>
  </html>
              `,
              CSSCode: `
  body {
      text-align: center;
      font-family: Arial, sans-serif;
  }
  
  .weather-container {
      margin-top: 20px;
  }
  
  input {
      padding: 8px;
      font-size: 16px;
  }
  
  button {
      padding: 8px 12px;
      font-size: 16px;
      cursor: pointer;
  }
              `,
              JSCode: `
  // Step 1: API Fetch function
  async function getWeather() {
      let city = document.getElementById("cityInput").value;
      let apiKey = "YOUR_API_KEY";
      let url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`;
  
      try {
          let response = await fetch(url);
          let data = await response.json();
          document.getElementById("weatherInfo").innerText = \`Temperature: \${data.main.temp}°C, \${data.weather[0].description}\`;
      } catch (error) {
          document.getElementById("weatherInfo").innerText = "Invalid city name or API error.";
      }
  }
              `,
            },
            explanation: {
              HTML: ["🔹 Input field aur button banaya jisme user city ka naam enter karega."],
              CSS: ["🔹 Responsive aur simple styling di gayi hai."],
              JS: ["✅ Fetch API ka use karke OpenWeather API se data fetch kiya.", "✅ Async/Await ka use karke asynchronous request manage ki."]
            },
          },
          practiceProjects: [
            "🔹 Current location ke hisaab se auto weather fetch karne ka option add karo.",
            "🔹 7-day forecast dikhane ka feature add karo.",
          ],
          conclusion: [
            "🎯 Weather App ek real-world project hai jo API fetching aur async JavaScript ka use sikhata hai.",
          ],
        },
      ],
    },
  ];
  