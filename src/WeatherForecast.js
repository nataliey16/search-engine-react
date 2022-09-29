import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="weather-forcast-day">Thu</div>
      <img
        className="weather-forcast-icon"
        src="http://openweathermap.org/img/wn/02d@2x.png"
        alt="weather-icon"
      ></img>{" "}
      <div>
        <span className="weather-forecast-max">19˚</span>
        <span className="weather-forecast-min ms-3">10˚</span>
      </div>
    </div>
  );
}
