import { useState } from "react";

export default function Projects() {
  const [showScreenshots, setShowScreenshots] = useState(false);

  const screenshots = [
    "/images/image (1).png",
    "/images/image (7).png",
    "/images/image (6).png",
    "/images/image (5).png",
    "/images/image (4).png",
    "/images/image (3).png",
    "/images/image (2).png",
    
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold mb-10 text-white">Projects</h2>

      {/* Snapnote Project */}
      <div className="mb-12 bg-gray-900 p-6 rounded-lg shadow-md text-gray-200">
        <h3 className="text-2xl font-bold mb-2">Snapnote</h3>
        <p className="mb-4">
          Visual note-taking app built with JavaScript, HTML, and CSS. Features include adding notes, drag and drop, todos, and grouping notes under columns.
        </p>
        <button
          
          className="text-blue-400 underline"
        >
          <a href="https://snapnote-by-anzal.netlify.app"
          target="_blank"
          rel="noopener noreferrer">
          View Live Demo
          </a>
        </button>
      </div>

      {/* Health Archive Project */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-md text-gray-200">
        <h3 className="text-2xl font-bold mb-2">Health Archive</h3>
        <p className="mb-4">
          Medical website made with PHP and SQL (backend under development). Features patient management, appointment booking, and medical records.
        </p>

        <button
          onClick={() => setShowScreenshots(!showScreenshots)}
          className="mb-4 px-4 py-2 bg-blue-700 hover:bg-blue-500 rounded text-white"
        >
          {showScreenshots ? "Hide Screenshots" : "View Screenshots"}
        </button>

        {showScreenshots && (
  <div className="grid grid-cols-3 gap-4">
    {screenshots.map((src, i) => (
      <a
        key={i}
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={src}
          alt={`Screenshot ${i + 1}`}
          className="rounded shadow-md w-full max-h-64 object-cover hover:opacity-90 transition-opacity"
        />
      </a>
    ))}
  </div>
)}



      </div>
    </section>
  );
}
