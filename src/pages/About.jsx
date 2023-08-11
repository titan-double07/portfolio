import React from "react";
import { skills } from "../data";
import { TbCertificate } from "react-icons/tb";
import { FaFreeCodeCamp } from "react-icons/fa";
import { SiUdacity } from "react-icons/si";
import { useGlobalContext } from "../components/Context";

function About() {
  const { close, isOpen } = useGlobalContext();

  return (
    <div className="about container" onClick={isOpen ? close : undefined}>
      <section className="about-text">
        <h2>
          About <span className="accent">Me</span>
        </h2>
        <p>
          Hi there! My name is
          <span className="capitalize accent"> Chisom Okereke</span>, As a
          <span className="capitalize accent">Front-End Developer</span>{" "}
          specializing in Front End Web Development, I aim to build engaging and
          user-friendly websites and web applications that leave a positive
          impression. With expertise in programming and a keen eye for visual
          aesthetics, I aim to create seamless online experiences that are
          visually appealing and optimized for mobile devices. By understanding
          business and user needs, I translate requirements into functional and
          visually stunning interfaces. Continuously learning and staying
          updated with the latest Front End Web development trends, I strive to
          make a meaningful impact through usability, aesthetics, and the
          effective use of visuals.
        </p>
      </section>
      <br />
      <section className="certificates">
  
          <h3>
           My <span className="accent">Certificates</span>{" "}
          </h3>
         
        <div className="certificate">
          <div className="flex-imp">
            <h2>
              <TbCertificate />
            </h2>
            <p className="certificate-link">
              <a href="https://drive.google.com/file/d/14Xe6ycFF2AAulHJ7DHeEP6GjW60Td391/view?usp=sharing">
                JavaScript Algorithms and Data Structures
              </a>
              <a href="https://www.freecodecamp.org/learn"> : FreeCodeCamp</a>
            </p>
          </div>
        </div>

        <div className="certificate ">
          <div className="flex-imp">
            <h2>
              <TbCertificate />
            </h2>
            <p className="certificate-link">
              <a href="https://drive.google.com/file/d/16-xyQSFOYpklTrPqKuS2gtKRj47ydLPu/view?usp=sharing">
                Web Development Foundations
              </a>
              <a href="https://www.udacity.com/"> : Udacitity</a>
            </p>
          </div>
        </div>
      </section>
      <section className="skills">
        <h3>
          My <span className="accent">Skills</span>
        </h3>
        <ul className="skills-container flex-wrap">
          {skills.map((skill, index) => {
            const { text, icon } = skill;
            return (
              <li key={index} className="card flex-col">
                {icon}
                <p>{text}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default About;
