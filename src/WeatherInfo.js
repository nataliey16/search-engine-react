import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <header className="row">
        <ul className="weather-header col-sm-6">
          <li className="city">{props.data.city}</li>
          <li className="current-date">
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
        <div className="col-sm-6">
          {" "}
          <WeatherTemperature celcius={props.data.temperature} />{" "}
        </div>
      </header>
      <div className=" weather-description text-capitalize text-center ">
        {props.data.description}
      </div>{" "}
      <img
        className="img-fluid weather-icon weather-description text-capitalize text-center"
        src={props.data.iconUrl}
        alt="weather-icon"
      ></img>{" "}
      <div className="row  weather-atmosphere  text-center">
        <div className="col-sm-6">
          Humidity
          <div className="weather-value">{props.data.humidity}%</div>
        </div>
        <div className="col-sm-6">
          Wind
          <div className="weather-value">
            {Math.round(props.data.wind)}km/hr
          </div>
        </div>
      </div>
      <div className="row"></div>
      <hr></hr>
    </div>
  );
}
