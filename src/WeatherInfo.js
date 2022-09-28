import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <header>
        <ul className="weather-header">
          <li className="city">{props.data.city}</li>
          <li className="current-date">
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </header>
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid weather-icon"
            src={props.data.iconUrl}
            alt="weather-icon"
          ></img>{" "}
        </div>
        <div className="col-md-6 city-information">
          <ul>
            <li className="weather-description text-capitalize">
              {props.data.description}
            </li>
            <WeatherTemperature celcius={props.data.temperature} />
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="row pt-3 weather-atmosphere">
        <div className="col-md-4">
          Precipitation
          <div className="weather-value">10%</div>
        </div>
        <div className="col-md-4">
          Humidity
          <div className="weather-value">{props.data.humidity}%</div>
        </div>
        <div className="col-md-4">
          Wind
          <div className="weather-value">
            {Math.round(props.data.wind)}km/hr
          </div>
        </div>
      </div>
    </div>
  );
}
