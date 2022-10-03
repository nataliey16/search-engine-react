import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}`;
  }

  return (
    <div className="weather-forecast-day">
      <div>{day()}</div>
      <img
        className="weather-forecast-icon"
        src={iconUrl}
        alt="weather-icon"
      ></img>{" "}
      <div>
        <span className="weather-forecast-max">{maxTemperature()}˚</span>
        <span className="weather-forecast-min ms-3">{minTemperature()}˚</span>
      </div>
    </div>
  );
}
