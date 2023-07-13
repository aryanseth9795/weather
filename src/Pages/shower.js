import React from "react";
import "../style/shower.css";
import rainypeople_l from "../asset/Screenshot_2023-06-04_114616-removebg-preview.png";
import rain from "../asset/cloudbg.png";
import sun from "../asset/sun-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Shower() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/Detail");
    }, 3000);
  }, );
  return (
    <div className="show-container">
      <div className="rainbox">
        <div className="rainimg">
          <img src={rain} id="sun" />
        </div>
        <div className="sunimg">
          <img src={sun} id="rain" />
        </div>
      </div>
      <div className="content">
        <h1>Fetching...........</h1>
      </div>
      <div>
        <div className="peoplebox">
          {" "}
          <img src={rainypeople_l} className="people" />
        </div>
      </div>
    </div>
  );
}
