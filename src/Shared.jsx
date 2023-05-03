import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import profileImg from "/images/profile.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaTwitter,
  FaFacebookSquare,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoLinkedin } from "react-icons/io5";
import { useGlobalContext } from "../src/components/Context";

export default function Shared() {
  const { close, isOpen } = useGlobalContext();
  return (
    // <div onClick={isOpen ? close : undefined}>
    // </div>
    <div className="xl-container">
      <div
        id="hidden-tab"
        className="profile fade-in flex-col text-center no-white-space capitalize"
      >
        <div className="profile-photo">
          <img src={profileImg} alt="profileimage" />
        </div>
        <br />
        <h2 style={{ fontSize: "2.5rem" }}>chisom okereke</h2>
        <h4>frontend developer</h4>
        {/* <div className="icon-container">
          <a href="">
            <IoLogoLinkedin className="icon linkedin" />
          </a>
          <a href="">
            <FaTwitter className="icon twitter" />
          </a>
          <a href="">
            <FaFacebookSquare className="icon facebook" />
          </a>
        </div> */}
        <div className="tel-no">
          <FaWhatsapp /> : +234 701 438 5856
        </div>
        <div className="email lowercase">
          <FaEnvelope /> :{" "}
          <a href="mailto:chisomwebdev@outlook.com">chisomwebdev@outlook</a>
        </div>
        <button className="cv-btn"><a href="https://drive.google.com/file/d/1cXMznTFdK8RXDO1FPuRWD67zv0EhPOUf/view?usp=sharing">Download CV</a> </button>
      </div>

      <Navbar />

      <Outlet />

    </div>
  );
}
