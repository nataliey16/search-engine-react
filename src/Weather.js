import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import { LineWave } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleWeatherData(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-md-8 col-lg-10">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="on"
                ></input>
              </div>
              <div className="col-md-4 col-lg-2">
                <input
                  className="btn btn-branding "
                  type="submit"
                  value="Submit"
                ></input>
              </div>
            </div>
          </form>
        </div>
        <header>
          <ul className="weather-header">
            <li className="city">{weatherData.city}</li>
            <li className="current-date">
              <FormattedDate date={weatherData.date} />
            </li>
          </ul>
        </header>
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid weather-icon"
              src={weatherData.iconUrl}
              alt="weather-icon"
            ></img>
          </div>
          <div className="col-md-8 city-information">
            <ul>
              <li className="weather-description text-capitalize">
                {weatherData.description}
              </li>
              <li className="temperature">
                {Math.round(weatherData.temperature)}
                <span className="units font-weight-bolder">˚C</span>
              </li>
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
            <div className="weather-value">{weatherData.humidity}%</div>
          </div>
          <div className="col-md-4">
            Wind
            <div className="weather-value">
              {Math.round(weatherData.wind)}km/hr
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0f380eeef06d6360d28eb090a2663364";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeatherData);
    return (
      <div>
        <LineWave
          height="100"
          width="100"
          color="#430f58"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </div>
    );
  }
}
