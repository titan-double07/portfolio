import React, { useState } from "react";
import { skills, projects } from "../data";
import img from "../../public/images/zuri-registration-form_img.png";
import { Img } from "react-image";
import { useGlobalContext } from "../components/Context";
import Spinner from "../components/Spinner";


function Projects() {
  const { close, isOpen } = useGlobalContext();
  return (
    <div className="container projects" onClick={isOpen ? close : undefined}>
      <h2>
        My <span className="accent">Projects</span>
      </h2>
      <br />
      <div className="project-item grid">
        {projects.map((project, index) => {
          const { url, text, image, description, tools } = project;
          return (
            <div key={index} className="item">
              <div className="overlay">
                <p>
                  <span className="accent">Description:</span> {description}
                </p>
                <div className="tools flex-wrap">
                  <span className="accent">Tools:</span>
                  {tools.map((tool, index) => {
                    return (
                      <p key={index} className="card">
                        {tool}
                      </p>
                    );
                  })}
                </div>
                <div className="project-link">
                  <a href={url}>visit site &gt;&gt;</a>
                </div>
              </div>
              <Img
                className="project-img card "
                src={image}
                loading={<Spinner />}
              />
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
