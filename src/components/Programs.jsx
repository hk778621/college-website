import React from "react";

function Programs() {
  
  const programs = [
    "Intermediate (FSc, ICS, ICom, FA)",
    "BS Computer Science",
    "BS Business Administration",
    "BS English Literature",
  ];

  return (
    <section id="programs" className="p-10 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
      <ul className="max-w-xl mx-auto text-gray-700 space-y-3">
        {programs.map((program, index) => (
          <li key={index} className="p-3 bg-white shadow rounded">
            🎓 {program}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Programs;
