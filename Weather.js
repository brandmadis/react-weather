import React, { Component, useState, useEffect } from "react";
import styles from "./weather.module.css";
import cx from "classnames";

const api = {
  key: "19f53653ec0d1758abd52a731f9ab8e1",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [query, setQuery] = useState("Los Angeles");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    console.log("search function", query);
    if (evt.key === "Enter" || evt === "Init") {
      const url = `${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`;
      console.log("url ", url);
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          // setQuery("");
          console.log("weather: ", result);
        });
    }
  };
  useEffect(() => {
    console.log("useEffect");
    search("Init");
  }, []);
  const setLocation = async (location) => {
    console.log("location", location);
    await setQuery(location);
    console.log("query:", query);
    search("Init");
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div>
      {/* <div className={styles.citySet} onClick={() => setLocation("Dallas")}>
        Dallas
      </div>
      <div
        className={styles.citySet}
        onClick={() => setLocation("Los Angeles")}
      >
        Los Angeles
      </div> */}
      <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 65
              ? cx(styles.app, styles.warm)
              : cx(styles.app)
            : cx(styles.app)
        }
      >
        <main>
          <div className={styles.searchBox}>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className={styles.locationBox}>
                <div className={styles.location}>
                  {weather.name}, {weather.sys.country}
                </div>
                <div className={styles.date}>{dateBuilder(new Date())}</div>
              </div>
              <div className={styles.weatherBox}>
                <div className={styles.temp}>
                  {Math.round(weather.main.temp)}°F
                </div>
                <div className={styles.weather}>{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
