import React from "react";
import {
  FaEnvelope,
  FaHome,
  FaSuitcase,
  FaUser,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  
} from "react-icons/fa";
import { IoLogoJavascript} from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome/>,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: <FaUser />,
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
    icon: <FaSuitcase />,
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact",
    icon: <FaEnvelope />,
  },
  //   {
  //     id: 5,
  //     url: "/documents",
  //     text: "documents",
  //     icon: ,
  //   },
];

export const skills = [
  {
    text: "HTML",
    icon: <FaHtml5 className="icon html5" />,
  },
  {
    text: "CSS",
    icon: <FaCss3Alt className="icon css3" />,
  },
  {
    text: "Javascript",
    icon: <IoLogoJavascript className="icon js" />,
  },
  {
    text: "React",
    icon: <FaReact className="icon react" />,
  },
  {
    text: "Bootstrap",
    icon: <FaBootstrap className="icon bootstrap" />,
  },
  {
    text: "Tailwind",
    icon: <SiTailwindcss className="icon tailwind" />,
  },
];

export const projects = [
  {
    url: "https://titanwarlord007.github.io/zuri-registration-form/",
    text: "Zuri Registration Form",
    image: "../src/assets/images/zuri-registration-form_img.png",
  },
  {
    url: "https://titanwarlord007.github.io/Make-A-Wish-copy/",
    text: "Make A Wish copy website",
    image: "../src/assets/images/Make-A-Wish-copy_img.png",
  },
  {
    url: "https://titanwarlord007.github.io/bootstrap-website/",
    text: "Bootstrap Website",
    image: "../src/assets/images/bootstrap-website_img.png",
  },
];