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
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome />,
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
  {
    text: "Next.js",
    icon: <SiNextdotjs className="icon " />,
  },
];

export const projects = [
  {
    url: "https://loopstudios-titanweb.vercel.app/",
    text: "Loopstudios landing page",
    image: "/images/loopstudios-desktop-min.png",
    description:
    "Loop Studios is a captivating responsive webpage created using Next.js, TailwindCSS, Redux, and Framer Motion. With Next.js, it offers excellent performance and responsiveness. TailwindCSS ensures a polished design across devices. Redux enables seamless data flow, while Framer Motion adds engaging animations. Experience a modern and immersive web journey with Loop Studios.",
    tools: ["Next.js", "TailwindCSS", "Redux", "Framer Motion"],
  },
  {
    url: "https://multi-stage-form-beta.vercel.app/",
    text: "Multi-stage SignUp Form",
    image: "/images/multi-stage-signUp-form.png",
    description:
      "A smooth responsive multi-stage signUp form, enabled with basic form validation and efficient data collection and tracking with the help of the react-hook-form library, the web app was built using Next.js, with TailwindCSS and FramerMotion to give it mordern UI/UX and smooth animated transitions",
    tools: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
  {
    url: "https://rock-paper-scissors-app-seven.vercel.app/",
    text: "Rock-Paper-Scissors App",
    image: "/images/rock-paper-scissors-app.png",
    description:
      "The Rock Paper Scissors app is a fun and interactive responsive web application created using React, TailwindCSS, and Redux. It offers an immersive gaming experience with smooth user interactions. The stylish design, powered by TailwindCSS, ensures a visually appealing interface. Redux enables efficient state management, enhancing the game logic and providing a seamless user experience. Enjoy playing Rock Paper Scissors in a modern and engaging way with this app ",
    tools: ["React", "TailwindCSS", "Redux"],
  },
  {
    url: "https://traders-app-teal.vercel.app/",
    text: "Stock Watchlist App",
    image: "/images/traders-app.png",
    description:
      "The Traders app is a web application developed with React, CSS, and React Query. It offers a convenient stock watchlist feature, allowing users to track their favorite stocks and stay updated on their performance. With a user-friendly interface and efficient data management, the Traders app provides an enjoyable trading experience. Stay informed and organized with this powerful stock watchlist application.",
    tools: ["React", "CSS", "ReactQuery"],
  },
  {
    url: "https://chisomwebdev.vercel.app/",
    text: "My Portfolio Website",
    image: "/images/portfolio-img.png",
    description: `ChisomWebDev's portfolio website is a personalized showcase of my web development journey. Powered by CSS and React, it presents a visually appealing and interactive platform to explore my skills and projects. With a clean and modern design, the website offers seamless navigation and highlights the essence of my work. Dive into my portfolio, witness my expertise firsthand, and discover the passion I bring to each project. Experience the artistry and innovation of ChisomWebDev's portfolio website in a concise and engaging format.`,
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
