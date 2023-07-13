import React from 'react'
import "../style/nav.css"
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import  { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
export default function  Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  
   
  return (
    
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
    <div className="toggleButton">
      <button
        onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}
      >
        <ReorderIcon />
      </button>
    </div>
    <div className="links">
    <Link to="/">Home</Link>
    <Link to="/Forecast"> 3 Day Forecast </Link>
    <Link to="/Contact"> Contacts Us! </Link>
    <Link to="/Contact"> <EmailIcon /> </Link>
    <Link to="/Contact"> <InstagramIcon /> </Link>
    <Link to="/Contact"> <FacebookIcon /> </Link>
    <Link to="/Contact"> <TwitterIcon /> </Link>
  </div>
  </div>
  )
}
