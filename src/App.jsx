import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import ReturnPage from "./pages/ReturnPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<ReturnPage/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
