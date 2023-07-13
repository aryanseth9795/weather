import React from "react";
import { useState, useEffect } from "react";
import Astro from "./astro.js";
import "../style/forecast.css";
import Typed from "react-typed";
export default function Forecast(props) {
  console.log(props.city);
  const ur = `https://api.weatherapi.com/v1/forecast.json?key=0486afca6b964214bbd35405230306&q=${props.city}&days=7&aqi=yes&alerts=yes`;
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetchApidata(ur);
  }, [props.city]);

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
    <div className="Forecast">
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
          <h3 className="lname" style={{color:"black"}}>Loading Data......</h3>
        </div>
      ) : (
        <div className="renderbox">
          {users.forecast.forecastday.map((item, i) => {
            return (
              <div className="astrobox">
                {/* <h2 style={{color:"white"}}><Typed className="runner"
            strings={[
              `${props.city}`,
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          /></h2> */}
                 
                <Astro
                  id={i}
                  date={item.date}
                  mx={item.day.maxtemp_c}
                  mn={item.day.mintemp_c}
                  text={item.day.condition.text}
                  icon={item.day.condition.icon}
                  city={props.city}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
