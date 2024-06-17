import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Most cloudly</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ss1.gstatic.com/onebox/weather/64/partly_cloudly.png"
            alt="mostly cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:75%</li>
            <li>Wind:13km/h</li>
          </ul>
        </div>
      </div>
      Hello from Weather
    </div>
  );
}
