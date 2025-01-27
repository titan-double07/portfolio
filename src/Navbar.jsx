import React, { useEffect, useState,useRef } from "react";
import HamBtn from "./components/HamBtn";
import { NavLink } from "react-router-dom";
import { links } from "./data";
import profileImg from "/images/profile.jpg";
import {
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { useGlobalContext } from "./components/Context";

export default function Navbar() {

  const { isOpen } = useGlobalContext()

  
  return (
    <nav className="nav">
      <HamBtn />
      <div id="hidden-desktop" className={`ham-menu ${isOpen && "show"}`}>
        <div className="ham-profile">
          <div className="profile-photo">
            <img src={profileImg} alt="profileimage" />
          </div>
          <h2>chisom okereke</h2>
          <h4>frontend developer</h4>
        </div>
           <ul className="ham-links">
          //links to the pages
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink to={url}>{text}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="cv-btn">
          <a href="https://drive.google.com/file/d/1cXMznTFdK8RXDO1FPuRWD67zv0EhPOUf/view?usp=sharing">
            Download CV
          </a>{" "}
        </button>
        <div className="tel-no">
          <FaWhatsapp /> : +234 701 438 5856
        </div>
        <div className="email lowercase">
          <FaEnvelope /> :{" "}
          <a href="mailto:chisomwebdev@outlook.com">chisomwebdev@outlook</a>
        </div>
      </div>
      <div className="nav-links-container">
        <ul id="hidden-tab" className="nav-links ">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li className="link-container" key={id}>
                <NavLink className="link fade-in" to={url}>
                  {icon}
                </NavLink>
                <p className="link-text">{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
