import React from "react";
import "../style/home.css";
import { MyLocation } from "@material-ui/icons";
import Typed from "react-typed";
export default function Home() {
  return (
    <div className="home">
      <div className="box">
        <h1>
          {" "}
          <MyLocation className="Mylocation" />
          Whats the Weather : 
          <Typed className="runner"
            strings={[
              " Sunny ?",
              " Rainy ?",
              " Storm ?",
              " Cloudy ?",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h1>
      </div>
          <div className="bubble b r hb mr">Search City.. <br/>To See Weather..</div>
    </div>
  );
}
