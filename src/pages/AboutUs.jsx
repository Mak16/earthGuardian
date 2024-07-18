import React from "react";
import About from "../components/About";
import Mission from "../components/Mission";
import Team from "../components/Team";
import Donate from "../components/Donate";
import News from "../components/News";
import Events from "../components/Events";

export default function AboutUs() {
  return (
    <div className="lg:space-y-28 space-y-10">
      <About />
      <Mission />
      <Team />
      <Donate />
      <News />
      <Events />
    </div>
  );
}
