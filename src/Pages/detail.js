import React from "react";
import "../style/detail.css";
import { useEffect, useState } from "react";
import sunrun from "../asset/sunrun.png";
import cloudy from "../asset/cloudbg.png";
export default function Detail({ city }) {
  const ur = `https://api.weatherapi.com/v1/forecast.json?key=0486afca6b964214bbd35405230306&q=${city}&days=7&aqi=yes&alerts=yes`;
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetchApidata(ur);
  }, [city]);

  const fetchApidata = async (url) => {
    try {
      const res = await fetch(
        url,
        { mode: "cors" },
        { method: "GET", headers: { accept: "application/json" } }
      );
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!users ? (
        <div className="loader">
          <div id="containerload">
            <svg id="pageloader">
              <circle cx="75" cy="75" r="20" />
              <circle cx="75" cy="75" r="35" />
              <circle cx="75" cy="75" r="50" />
              <circle cx="75" cy="75" r="65" />
            </svg>
          </div>
          <h3 className="lname" style={{ color: "black" }}>
            Loading Data......
          </h3>
        </div>
      ) : (
        <div className="detail-container">
          <div className="location-detail">
            <div className="local-time">
              Date : <br />
              {users.location.localtime}
            </div>
            <div className="exact-location-detail">
              <div className="city-display">{users.location.name}</div>
              <div className="region-display">
                {users.location.region} {users.location.country}
              </div>
            </div>
            <div className="lagitute">
              Latitute :{users.location.lat}
              <br />
              Longitude :{users.location.lon}
            </div>
          </div>
          <div className="details-content">
            <div className="rainbox1">
              <h1>Rain</h1>
              <div className="rain-detail">
                <h3> Precipitation in mm : {users.current.precip_mm} </h3>
                <h3> Precipitation in inch : {users.current.wind_degree} </h3>
                <h3> Humidity : {users.current.humidity}% </h3>
                <h3> Cloud : {users.current.cloud}% </h3>
              </div>
            </div>
            <div className="tempbox">
              <div className="wea-icon">
                {users.current.condition.text === "Sunny" ? (
                  <img src={sunrun} className="sunrun" />
                ) : (
                  <img src={cloudy} className="cloudy-weather" />
                )}
              </div>
              <div className="type-weather">
                <h1
                  className={
                    users.current.condition.text === "Sunny" ? "sunn" : "cloody"
                  }
                >
                  {users.current.condition.text}
                </h1>
                {/* <br /> */}
                <h2 className="temphead">
                  Temperature : {users.current.temp_c}°C <br />
                  feels like : {users.current.feelslike_c}
                </h2>
              </div>
            </div>
            <div className="windbox">
              <h1>Wind</h1>
              <div className="wind-detail">
                <h3> Wind kmph : {users.current.wind_kph} </h3>
                <h3> Wind Degree : {users.current.wind_degree} </h3>
                <h3> Gust kmph : {users.current.gust_kph} </h3>
                <h3> UV : {users.current.uv} </h3>
              </div>
            </div>
          </div>
          <div className="morebutton">
            <button className="morebt">More</button>
          </div>
        </div>
      )}
    </>
  );
}
