import React from "react";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let day = days[date.getDay()];
  console.log(day);

  return (
    <div>
      <div className="weather-forcast-day">{day}</div>
      <img
        className="weather-forcast-icon"
        src="http://openweathermap.org/img/wn/02d@2x.png"
        alt="weather-icon"
      ></img>{" "}
      <div>
        <span className="weather-forecast-max">
          {Math.round(props.data.temp.max)}˚
        </span>
        <span className="weather-forecast-min ms-3">
          {Math.round(props.data.temp.min)}˚
        </span>
      </div>
    </div>
  );
}
