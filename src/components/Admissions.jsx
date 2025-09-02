import React from "react";

function Admissions({ admissionsOpen }) {
  return (
    <section
      id="admissions"
      className="p-10 text-center bg-gray-50"
    >
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 font-roboto">
          Admissions
        </h2>

        {admissionsOpen ? (
          <>
            <p className="max-w-xl mx-auto text-gray-600 mb-6 text-lg">
              Admissions are now open for <span className="font-semibold">Intermediate</span> 
              and <span className="font-semibold">Undergraduate</span> programs.
              Apply online or visit our campus for more details.
            </p>
            <button className="mt-4 px-8 py-3 bg-[#800000] text-white font-medium rounded-lg shadow hover:bg-red-700 transition duration-300">
              Apply Now
            </button>
          </>
        ) : (
          <p className="text-gray-500 text-lg">Admissions will open soon...</p>
        )}
      </div>
    </section>
  );
}

export default Admissions;
