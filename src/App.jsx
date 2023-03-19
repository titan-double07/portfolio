import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Shared from "./Shared";
import Preloader from "./components/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   window.onload = function () {
  //     setIsLoading(false);
  //   };
  
  // }, [])

  
  
  return isLoading ? (
    <Preloader />
    ) : (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
