import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <div className=" w-[80%] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
