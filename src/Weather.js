import React from "react";
import "./Weather.css";
export default function Weather() {
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
              className="btn btn-primary"
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
}
