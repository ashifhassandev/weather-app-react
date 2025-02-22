import { useState } from "react";
import axios from "axios";
import AlertMessage from "./AlertMessages";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [alertMessage, setAlertMessage] = useState(false);
  const [isBadRequest, setBadRequest] = useState(false);

  const showAlertMessage = (type, message) => setAlertMessage({ type, message });
  const closeAlertMessage = () => setAlertMessage(null);

  const fetchWeatherData = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API;

    if (!city.trim()) {
      setWeather(null);
      setBadRequest(false);
      return showAlertMessage("info", "Please enter a city name");
    }

    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
      );

      setWeather(data);
      setBadRequest(false);
      showAlertMessage("success", "Weather data fetched successfully");
    } catch (error) {
      console.error("An error occurred: ", error);

      if (error.response && error.response.status === 400) {
        setWeather(null);
        setBadRequest(true);
        showAlertMessage("error", "Please enter a valid city name");
      } else {
        setWeather(null);
        showAlertMessage("error", "An error occurred. Try again later.");
      }
    }
  };

  return (
    <>
      {alertMessage && (
        <AlertMessage
          type={alertMessage.type}
          message={alertMessage.message}
          onClose={closeAlertMessage}
        />
      )}

      <div className="weather">
        <h1>Weather Now</h1>
        <input
          type="text"
          placeholder="Enter a city..."
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button onClick={fetchWeatherData} className="search-button">
          Search
        </button>
      </div>

      {(isBadRequest || weather) && (
        <div className="weather-details">
          {isBadRequest && !weather && (
            <>
              <h2>Oops! Bad Request</h2>
              <p>Please enter a valid city name to fetch weather data.</p>
            </>
          )}

          {weather && !isBadRequest && (
            <>
              <h2>
                {weather.location.name}, {weather.location.country}
              </h2>
              <p>Temperature: {weather.current.temp_c}°C</p>
              <p>Condition: {weather.current.condition.text}</p>
              <img src={weather.current.condition.icon} alt="Weather icon" />
              <p>Humidity: {weather.current.humidity}%</p>
              <p>Wind Speed: {weather.current.wind_kph} km/h</p>
              <p>Feels Like: {weather.current.feelslike_c}°C</p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Weather;