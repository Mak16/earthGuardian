import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className=" w-[80%] mx-auto">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
