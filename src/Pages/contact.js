import React from "react";
import "../style/contact.css";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="contact-container">
      <div className="About">
        <h1>Contact Form</h1>
        <p></p>
      </div>
      <div className="form-cont">
        <form className="form">
          <h2>
            Name :{" "}
            <input
              type="text"
              placeholder="Enter Your Name"
              className="inpbox"
            />
          </h2>
          <h2>
            Mobile Number :{" "}
            <input
              type="Number"
              placeholder="Enter Your Mobile Number "
              className="inpbox"
            />
          </h2>
          <h2>
            Email Address :{" "}
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="inpbox"
            />
          </h2>
          <h2>
            Reason :{" "}
            <input
              type="text"
              placeholder="Enter Your Query"
              className="inpbox"
            />
          </h2>
          <button
            onClick={() => {
              navigate("/Done");
            }}
            className="inpbox butt"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
