# 🌤️ Weather App

A simple weather application built with React and Vite that provides real-time weather updates based on user input.

## 🚀 Features
- 🌍 Get current weather data for any location
- ☀️ Displays weather conditions
- 🔔 Alert messages for errors and updates
- 🎨 Simple and user-friendly UI

## 🏗️ Project Structure
```
📦 weather-app
├── 📂 public
│   ├── 🌥️ cloudy.jpg
│   ├── 🌧️ rainy.webp
│   ├── ❄️ snowy.jpg
│   ├── ☀️ sunny.jpg
│   ├── 🔹 vite.svg
├── 📂 src
│   ├── 📂 components
│   │   ├── 🛎️ AlertMessages.jsx
│   │   ├── 🌤️ Weather.jsx
│   ├── 🏗️ App.jsx
│   ├── 🎨 index.css
│   ├── 🚀 main.jsx
├── 📜 .gitignore
├── 📜 README.md
├── 📜 eslint.config.js
├── 📜 index.html
├── 📜 package-lock.json
├── 📜 package.json
└── 📜 vite.config.js
```

## 🛠️ Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## 🌍 API Configuration
To fetch real-time weather data, configure your `.env` file:
```
VITE_WEATHER_API_KEY=your_api_key_here
```

## 📜 License
This project is licensed under the MIT License.