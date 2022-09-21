import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-md-10">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city"
            ></input>
          </div>
          <div className="col-md-2">
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
        <div className="col-md-6">
          <ul>
            <li>Calgary</li>
            <li>Wednesday, 12:00pm</li>
            <li>Sunny</li>
            <li>
              {" "}
              <h1>25˚C</h1>
            </li>
          </ul>
        </div>
      </div>

      <div className="row pt-5">
        <div className="row weather-description">
          <ul>
            <li>Precipitation:0%</li>
            <li>Humidity: 10%</li>
            <li>Wind: 13 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
