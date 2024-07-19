import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";

function App() {
  return (
    <>
      <Navbar />
      <div className=" w-[80%] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
