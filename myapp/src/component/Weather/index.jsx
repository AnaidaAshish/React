
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Weather/weather.css"

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: city, days: "1" },
      headers: {
        "x-rapidapi-key": "f48114461fmsh1c02aba6eb38357p1aa904jsn0ddbc6a0217d",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setWeatherData(response.data);
      console.log(response.data, "data");
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch weather data");
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchWeatherData(city);
  // }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
    <div className="parent">
      <h1>Weather Forecast</h1>
      <div className="inptAndBtn">
      <input
      className="input"
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      <button className="btn" onClick={() => fetchWeatherData(city)}>Get Weather</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div className="outputs">
          <h3>City : {weatherData.location.name}</h3>
          <h3>Country : {weatherData.location.country}</h3>
          <h3>Region : {weatherData.location.region}</h3>
          <p>Temperature: {weatherData.current.temp_c} °C</p>
          <p>Humidity: {weatherData.current.humidity} </p>

          <img src={weatherData.current.condition.icon} alt="" />
          <p>{weatherData.current.condition.text}</p>
          <p> Wind Degree - {weatherData.current.wind_degree
          }</p>
          <h3>Heat Index : {weatherData.current.heatindex_c}</h3>
          {weatherData.forecast.forecastday[0].hour.map((forecastday) => (
            <div>
              <h4>Forecastday Time {forecastday.time.slice(11)}</h4>
              <h4>Forecastday Temp {forecastday.temp_c}</h4>
            </div>
          ))}
          {/* <p>Weather: {weatherData.weather[0].description}</p> */}
          {/* <p>Humidity: {weatherData.main.humidity}%</p> */}
        </div>
      ) : (
        <div>Data not found!!</div>
      )}
    </div>
    </>
  );
};

export default Weather;
