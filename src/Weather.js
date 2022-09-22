import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let apiKey = "0f380eeef06d6360d28eb090a2663364";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleWeatherData);

  function handleWeatherData(response) {
    return console.log(response.data);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-md-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-md-3">
              <input
                className="btn btn-branding"
                type="submit"
                value="Submit"
              ></input>
            </div>
          </div>
        </form>
        <div className="row pt-5">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather-icon"
            ></img>
          </div>
          <div className="col-md-6 city-information">
            <ul>
              <li>Wednesday</li>
              <li>12:00 pm</li>
              <li>Sunny</li>
              <li className="temperature">
                25
                <span className="units">˚C</span>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="row pt-3 weather-description">
          <div className="col-md-4">
            Precipitation
            <div className="weather-value">10%</div>
          </div>
          <div className="col-md-4">
            Humidity
            <div className="weather-value">10%</div>
          </div>
          <div className="col-md-4">
            Wind
            <div className="weather-value">30km</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
