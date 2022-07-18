import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="Submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday 03:30</li>
        <li>Thunderstorm</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="Sunny"
              className="float-left"
            />
            <span className="temperature">75</span>
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 90%</li>
            <li>Humidity: 68%</li>
            <li>Wind: 10mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
