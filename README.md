Weather App

A sleek and simple real-time weather application that provides instant weather updates for any city worldwide. Built with HTML, CSS, JavaScript, and the OpenWeatherMap API.

 

✨ Features

✅ Search weather by city name✅ Real-time temperature display (°C)✅ Weather condition icons & descriptions✅ Humidity & Wind Speed indicators✅ Responsive design for all devices✅ Error handling for invalid inputs✅ Clean, modern UI with gradient background

🛠️ Installation

1️⃣ Clone the Repository:

 git clone https://github.com/yourusername/weather-app.git

2️⃣ Get a Free API Key from OpenWeatherMap:

Sign up at OpenWeatherMap

Go to API Keys and copy your default key

3️⃣ Setup Image Assets:

Ensure your project includes the following weather icons inside an images/ folder:

project-root/
├─ images/
│  ├─ clear.png
│  ├─ clouds.png
│  ├─ drizzle.png
│  ├─ humidity.png
│  ├─ mist.png
│  ├─ rain.png
│  ├─ search.png
│  ├─ snow.png
│  └─ wind.png

4️⃣ Insert Your API Key in index.js:

const apiKey = 'YOUR_API_KEY_HERE'; // Replace this with your OpenWeatherMap API key

🚀 Usage

🔹 Open index.html in your web browser🔹 Enter a city name in the search field🔹 Click the search button or press Enter🔹 View current weather conditions with icons

📁 Folder Structure

weather-app/
├─ images/          # Weather icons
├─ index.html       # Main HTML file
├─ index.css        # Styling
└─ index.js         # JavaScript functionality

📦 Dependencies

🔹 Modern web browser🔹 Internet connection🔹 OpenWeatherMap API access

🎨 Customization

🔸 Modify colors & styles in index.css🔸 Add new weather condition icons🔸 Change temperature unit (°C ↔ °F)🔸 Display more weather parameters🔸 Customize layout & animations

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

⚠️ Troubleshooting

🔹 Images not showing? → Verify image paths and folder structure🔹 API errors? → Check browser console (Press F12) for error messages🔹 No weather data? → Ensure valid API key and internet connection

💙 Made with love using the OpenWeatherMap API

🔗 GitHub Repository: yourusername/weather-app

