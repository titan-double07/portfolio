import React from "react";
import { skills } from "../data";
import { TbCertificate } from "react-icons/tb";
import { FaFreeCodeCamp } from "react-icons/fa";
import { SiUdacity } from "react-icons/si";
import { useGlobalContext } from "../components/Context";

function About() {
  const { close, isOpen } = useGlobalContext();

  return (
    <div className="about container"  >
      <section className="about-text">
        <h2>
          About <span className="accent">Me</span>
        </h2>
        <p>
          Hi there! My name is
          <span className="capitalize accent"> Chisom Okereke</span>, and I'm a
          frontend developer with a passion for creating beautiful, intuitive
          web experiences. I believe that the web has the power to connect
          people from all over the world, and I'm excited to be a part of the
          community that's making that possible.
        </p>
        <p>
          What sets me apart as a developer is my attention to detail and my
          commitment to creating web experiences that are not only beautiful,
          but also accessible and user-friendly. I believe that a great website
          should be easy to navigate, intuitive to use, and accessible to all
          users, regardless of their abilities.
        </p>
      </section>
      <section className="certificates">
        <p>
          Here are some <span className="accent">Certificates</span> i earned
          from some notable organisations on my educational journey
        </p>
        <div className="certificate">
          <div className="flex-imp">
            <h2>
              <TbCertificate />
            </h2>
            <p className="certificate-link">
              <a href="https://drive.google.com/file/d/14Xe6ycFF2AAulHJ7DHeEP6GjW60Td391/view?usp=sharing">
                JavaScript Algorithms and Data Structures
              </a>
            </p>

            <div id="hidden-mobile" className="free-code-camp flex-imp ">
              :
              <p>
                <a href="https://www.freecodecamp.org/learn">FreeCodeCamp</a>
              </p>
              <h3>
                <FaFreeCodeCamp />
              </h3>
            </div>
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
            </p>
            <div id="hidden-mobile" className="flex-imp">
              :
              <p>
                <a href="https://www.udacity.com/">Udacitity</a>
              </p>
              <h4>
                <SiUdacity />
              </h4>
            </div>
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
