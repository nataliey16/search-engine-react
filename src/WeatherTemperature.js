import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function handleShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function handleShowCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div>
        <span className="temperature">
          {Math.round(props.celcius)}
          <span className="units font-weight-bolder">
            ˚C |
            <a href="/" onClick={handleShowFahrenheit}>
              ˚F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">
          {Math.round(fahrenheit())}
          <span className="units font-weight-bolder">
            <a href="/" onClick={handleShowCelcius}>
              ˚C
            </a>{" "}
            |˚F
          </span>
        </span>
      </div>
    );
  }
}
