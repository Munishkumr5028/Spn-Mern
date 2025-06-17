// HomePage.js
import React from "react";
import Slider from "./Slider/Slider";
import About from "./About/About";
import FounderPage from "./FounderPage/FounderPage";
import Event from "./News_Events/Event";

function HomePage() {
  return (
    <>
      <Slider />
      <About />
      <FounderPage />
      <Event />
    </>
  );
}

export default HomePage;
