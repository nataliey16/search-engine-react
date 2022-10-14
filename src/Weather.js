import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import { LineWave } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleWeatherData(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleUpdateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container-fluid">
          <form onClick={handleSubmit}>
            <div className="row">
              <div className="col-sm-8 col-lg-8">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="on"
                  onChange={handleUpdateCity}
                ></input>
              </div>
              <div className="col-sm-4 col-lg-4">
                <input
                  className="btn btn-branding form-control"
                  type="submit"
                  value="Submit"
                ></input>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Loading-spinner text-center">
        <LineWave
          height="500"
          width="500"
          color="#a2a8d3"
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
