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
      <div className=" weather-description text-capitalize text-center mt-4">
        {props.data.description}
      </div>
      <div className="row">
        <div className="col-sm-6">
          <img
            className="img-fluid weather-icon"
            src={props.data.iconUrl}
            alt="weather-icon"
          ></img>{" "}
        </div>
        <div className="col-sm-6 city-information  text-center">
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <hr></hr>
        <div className="row  weather-atmosphere mb-2 text-center">
          <div className="col-md-6">
            Humidity
            <div className="weather-value">{props.data.humidity}%</div>
          </div>
          <div className="col-md-6">
            Wind
            <div className="weather-value">
              {Math.round(props.data.wind)}km/hr
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
