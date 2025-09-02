import React from "react";
import bgImage from "../assets/bg-image.jpg"; 

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl">
        <h2 className="text-4xl md:text-5xl font-bold">
          Welcome to Al-Qamar College
        </h2>
        <p className="mt-4 text-lg">
          Shaping futures with knowledge, discipline, and excellence.
        </p>
        <a
          href="#admissions"
          className="mt-6 inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Home;
