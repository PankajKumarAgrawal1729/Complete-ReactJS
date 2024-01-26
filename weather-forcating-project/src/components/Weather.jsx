import React from "react";
import { useWeather } from "../context/Weather";

const Weather = () => {
  const weather = useWeather();
  console.log(weather);
  let currentTemp = weather?.data?.current?.temp_c;
  let currentHumidity = weather?.data?.current?.humidity;
  let city = weather?.data?.location?.name;
  let country = weather?.data?.location?.country;
  let time = weather?.data?.location?.localtime;
  let icon = "http:" + weather?.data?.current?.condition?.icon;

  return (
    <div className="main-container">
      <h1 >Weather Forecast</h1>
      <div className="search-weather">
        <input
          type="text"
          className="search-box"
          placeholder="Enter Your City, Country name"
          onChange={(e) => weather.setSearchCity(e.target.value)}
          value={weather?.searchCity}
        />
        <button type="button" className="search-btn" onClick={weather?.fetchData}>
          Search
        </button>
      </div>
      <div className="weather-card">
        <div className="weather-image">
          <img src={icon} alt="" />
        </div>
        <div className="weather-info">
          <h4>
            {currentTemp}
            <sup>o</sup>C
          </h4>
          <h4>{currentHumidity}%</h4>
        </div>
        <h2>
          {city}, {country}
        </h2>
        <p>{new Date(time).toLocaleString()}</p>
        <button type="button" className="search-btn" onClick={weather?.fetchData}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Weather;
