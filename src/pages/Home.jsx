import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Partener from "../components/Partener";
import Whatwedo from "../components/Whatwedo";
import Project from "../components/Project";
import Spend from "../components/Spend";
import Donate from "../components/Donate";
import News from "../components/News";
import Events from "../components/Events";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="lg:space-y-28 space-y-10">
      {/* <Navbar /> */}
      <Banner />
      <AboutUs />
      <Whatwedo />
      <Partener />
      <Project />
      <Spend />
      <Donate />
      <News />
      <Events />
      {/* <Footer /> */}
    </div>
  );
}
