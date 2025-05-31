import { useState } from "react";

const skills = [
  "React", "Tailwind CSS", "JavaScript", "PHP", "SQL", "Python", "GitHub", "Unity", "Game Dev"
];

export default function Skills() {
  const [index, setIndex] = useState(0);

  function prevSkill() {
    setIndex((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  }

  function nextSkill() {
    setIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  }

  // Helper to get skill by wrapping around array length
  const getSkill = (i) => skills[(index + i) % skills.length];

  return (
    <section id="skills" className="py-20 px-6  rounded-lg text-white max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8">Skills</h2>
      <div className="flex items-center justify-center space-x-4">
        <button 
          onClick={prevSkill} 
          className="bg-blue-900 hover:bg-blue-600 px-4 py-2 rounded"
        >
          Prev
        </button>
        {/* Display 3 skills side by side */}
        <div className="bg-gray-900 flex space-x-6  px-10 py-10 rounded-4xl shadow-lg text-2xl font-medium">
          <div className="bg-gray-700 px-8 py-6 rounded-lg">{getSkill(0)}</div>
          <div className="bg-gray-700 px-8 py-6 rounded-lg">{getSkill(1)}</div>
          <div className="bg-gray-700 px-8 py-6 rounded-lg">{getSkill(2)}</div>
        </div>
        <button 
          onClick={nextSkill} 
          className="bg-blue-900 hover:bg-blue-600 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </section>
  );
}
