import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "70364b058f5b4645ec579f5a5b226617";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={32} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">94</span>
            <span className="WeatherForecast-temperature-min">77</span>
          </div>
        </div>
      </div>
    </div>
  );
}
