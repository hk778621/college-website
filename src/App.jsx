import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Admissions from "./components/Admissions";
import Programs from "./components/Programs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <Home />
      <About />
      <Admissions />
      <Programs />
      <Footer />
    </div>
  );
}

export default App;
