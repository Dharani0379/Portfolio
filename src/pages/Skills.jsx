import React, { useState } from "react";
import Navbar from "../component/Navbar";

const skillData = {
     "Data Analyst": [
    { name: "Excel", level: 85 },
    { name: "PowerBI", level: 75 },
    { name: "Tableau", level: 70 },
    { name: "SQL", level: 65 },
    { name: "Python (Pandas, NumPy)", level: 75 },
  ],
  "Frontend": [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 65 },
  ],
  "Programming Languages": [
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 70 },
    { name: "C", level: 60 },
  ],
 
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <Navbar />

      <div className="flex md:flex-row flex-col-reverse gap-12 p-10 items-center justify-center md:mt-30">
        
        {/* Left Side - Skills */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-white">
            Skills - <span className="text-blue-400">{selectedCategory}</span>
          </h2>
          {skillData[selectedCategory].map((skill, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between text-sm mb-1 text-gray-200">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Category Select */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <label className="block mb-3 text-xl font-semibold text-gray-300">
            🔍 Select Category
          </label>
          <select
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {Object.keys(skillData).map((category) => (
              <option key={category} className="text-black">
                {category}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
}
