import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, cityName] = useState("");
  const [weather, weatherDetails] = useState("");

  function displayWeather(response) {
    weatherDetails(
      <div className="weather">
        <div className="overview">
          <h1 className="city">{response.data.name}</h1>
          <ul>
            <li className="date">Last Updated: Thursday 12:50</li>
            <li className="description">
              {response.data.weather[0].description}
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="clearfix weather-temperature">
              <div className="float-left weather-icon">
                <img
                  src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                  alt={response.data.weather[0].description}
                  className="float-left"
                />
                <strong className="temp">
                  {Math.round(response.data.main.temp)}
                </strong>
                <span className="units">
                  <a href="/" className="active fahrenheit-link">
                    °F
                  </a>{" "}
                  |{" "}
                  <a href="/" className="celcius-link">
                    °C
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li className="humidity">
                Humidity: {response.data.main.humidity}%
              </li>
              <li className="wind">
                Wind: {Math.round(response.data.wind.speed)} mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function updateCity(event) {
    event.preventDefault();
    cityName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = `6716d64dfa7a2a0d43ae27d653b8fa6e`;
      let units = `imperial`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(displayWeather);
    } else {
      alert("Please enter a city name 😉");
    }
  }

  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter city here"
                  className="form-control"
                  autoComplete="off"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                  w-100
                />
              </div>
            </div>
          </form>
          <div className="weather-forecast">{weather}</div>
        </div>
        <footer>
          <a href="/" target="_blank" className="reference">
            Open Source Code
          </a>{" "}
          by{" "}
          <a href="/" target="_blank" className="reference">
            Shari Baldie
          </a>
        </footer>
      </div>
    </div>
  );
}
