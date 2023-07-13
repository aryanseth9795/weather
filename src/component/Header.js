import React from "react";
import logo from "../asset/logo.png";
import logoname from "../asset/name_logo-removebg-preview.png";
import "../style/header.css";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logoimg">
          <img src={logo} className="logo" />
        </div>
        <div className="heading">
          <img src={logoname} className="logonameimg" />
        </div>
        <div className="last-content">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <EmailIcon />
        </div>
      </div>
    </>
  );
}
