import React from "react";

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-6">
          About Us
        </h2>
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed">
            Al-Qamar College was established in 2015 with a mission to provide
            high-quality education. Our faculty is dedicated to nurturing
            students’ intellectual and personal growth. We focus on academic
            excellence and character building to prepare our students for a
            bright future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
