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
import { skills } from "../data";
import { useGlobalContext } from "../components/Context";

function Home() {
  const { close, isOpen } = useGlobalContext();

  return (
    <div
      className=" container home capitalize text-center center "
      onClick={isOpen ? close : undefined}
    >
      <div className="zigzag"></div>
      <div className="content">
        <h1 className="typed typed-1">chisom okereke</h1>
        <h3 className="typed typed-2">frontend developer</h3>
        <br />
        <div className="icon-container fade-in flex-wrap">
          {
            skills.map((skill, index) => {
            const { text, icon } = skill;
              
              return (
                <div className="flex-col">
                  {icon}
                  <p>{text}</p>
                </div>
              );
            })
          }

        </div>
      </div>
    </div>
  );
}

export default Home;
