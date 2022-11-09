import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <header className="row">
        <ul className="weather-header col-md-6">
          <li className="city">{props.data.city}</li>
          <li className="current-date">
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
        <div className="col-md-6 justify-content-right">
          <img
            className="img-fluid weather-icon"
            src={props.data.iconUrl}
            alt="weather-icon"
          ></img>
        </div>
      </header>
      <div className="row temp-weather ">
        <div className="col weather-description text-capitalize text-center">
          {" "}
          {props.data.description}
        </div>
        <div className="col">
          {" "}
          <WeatherTemperature celcius={props.data.temperature} />{" "}
        </div>
      </div>

      <div className="row  weather-atmosphere">
        <div className="col-sm-6">
          Humidity
          <div className="atmosphere-value">{props.data.humidity}%</div>
        </div>
        <div className="col-sm-6">
          Wind
          <div className="atmosphere-value">
            {Math.round(props.data.wind)}km/hr
          </div>
        </div>
      </div>
      <div className="row"></div>
      <hr></hr>
    </div>
  );
}
