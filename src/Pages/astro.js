import React from "react";
import "../style/astro.css";
import { useNavigate } from "react-router-dom";
function Astro({ id, date, mx, mn, text, icon ,city}) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/day/" + (id + 1));
      }}
    >
      <h4> {city} </h4>
      <h4> {date} </h4>
      <img src={icon} className="ico" />
      <h4> {text} </h4>
      <h4> Max Temperature : {mx}°C </h4>
      <h4> Min Temp : {mn}°C </h4>
    </div>
  );
}
export default Astro;
