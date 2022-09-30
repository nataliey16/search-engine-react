import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
    console.log(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
