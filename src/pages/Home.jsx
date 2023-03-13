import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaTwitter,
  FaFacebookSquare,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoLinkedin } from "react-icons/io5";
function Home() {
  return (
    <div className=" container home capitalize text-center center ">
      <div className="zigzag"></div>
      <div className="content">
        <h1 className="typed typed-1">chisom okereke</h1>
        <h3 className="typed typed-2">frontend developer</h3>
        <br />
        <div className="icon-container fade-in">
          <div className="flex-col">
            <FaHtml5 className="icon html5" />
            <p>html</p>
          </div>
          <div className="flex-col">
            <FaCss3Alt className="icon css3" />
            <p>css</p>
          </div>
          <div className="flex-col">
            <IoLogoJavascript className="icon js" />
            <p>javascript</p>
          </div>
          <div className="flex-col">
            <FaReact className="icon react" />
            <p>react</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
