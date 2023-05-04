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
    url: "https://rock-paper-scissors-app-seven.vercel.app/",
    text: "Rock-Paper-Scissors App",
    image: "/images/rock-paper-scissors-app.png",
    description:
      "Enjoy a game of rock-paper-scissors, using redux for state management and react and tailwindCSS for an appealing and smooth UI/UX ",
    tools: ["React", "TailwindCSS", "Redux"],
  },
  {
    url: "https://traders-app-teal.vercel.app/",
    text: "Stock Watchlist App",
    image: "/images/traders-app.png",
    description:
      "A simple stock watchlist where users can keep track of their favoite stocks, showcasing my profiency with react query and api handling PS:for tablets and PCs",
    tools: ["React", "CSS", "ReactQuery"],
  },
  {
    url: "https://chisomwebdev.vercel.app/",
    text: "My Portfolio Website",
    image: "/images/portfolio-img.png",
    description:
      "My very own porfolio website, showcasing my eye for design and my proficiency with react",
    tools: ["React", "CSS"],
  },
  {
    url: "https://ecommerce-product-page-nine-mauve.vercel.app/",
    text: "Ecommerce product page",
    image: "/images/ecommerce-product-page.png",
    description:
      "An ecommerce product page challenge from frontendmentor.io; showcasing my proficiency with react hooks such as useState, useReducer, useContext etc",
    tools: ["React", "Taillwind"],
  },
  {
    url: "https://simple-shopping-cart-two.vercel.app/",
    text: "Simple Shopping Cart",
    image: "/images/simple-shopping-cart.png",
    description: "A Simple Shopping Cart made with redux",
    tools: ["React Redux"],
  },
  {
    url: "https://titanwarlord007.github.io/Make-A-Wish-copy/",
    text: "Make A Wish website",
    image: "/images/Make-A-Wish-copy_img.webp",
    description: "A copy of the Make A Wish foundation landing page",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    url: "https://titanwarlord007.github.io/bootstrap-website/",
    text: "Bootstrap Website",
    image: "/images/bootstrap-website_img.png",
    description: "A mock bootstrap landing page",
    tools: ["Bootstrap"],
  },
];