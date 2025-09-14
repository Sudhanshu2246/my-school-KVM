"use client";

import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-blue-400">Mission</span> &{" "}
          <span className="text-blue-400">Vision</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="bg-gray-800/70 rounded-2xl shadow-lg p-8 hover:scale-105 transition transform">
            <FaBullseye className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To provide affordable, high-quality education that empowers every
              child, regardless of background, to achieve academic excellence,
              build character, and become a responsible citizen.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-800/70 rounded-2xl shadow-lg p-8 hover:scale-105 transition transform">
            <FaEye className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be a model institution that nurtures innovation, discipline,
              and lifelong learning, creating leaders who contribute positively
              to society and carry forward the legacy of Late Mr. Sampati Ram Ji.
            </p>
          </div>

          {/* Philosophy / Values */}
          <div className="bg-gray-800/70 rounded-2xl shadow-lg p-8 hover:scale-105 transition transform">
            <FaLightbulb className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Philosophy</h3>
            <p className="text-gray-300 leading-relaxed">
              Education is not just about academics, but also about instilling
              values of respect, hard work, and integrity, preparing students
              for life’s challenges with courage and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
