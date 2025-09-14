"use client";

import { FaHandHoldingHeart, FaUsers, FaBalanceScale, FaBookReader, FaGlobe, FaLightbulb } from "react-icons/fa";

export default function CoreValues() {
  const values = [
    {
      icon: <FaHandHoldingHeart className="text-pink-500 text-4xl mb-4" />,
      title: "Compassion",
      description: "We nurture kindness and empathy, ensuring every child grows with a caring heart.",
    },
    {
      icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
      title: "Respect",
      description: "Respect for teachers, peers, and community is the foundation of our learning environment.",
    },
    {
      icon: <FaBalanceScale className="text-green-500 text-4xl mb-4" />,
      title: "Integrity",
      description: "We instill honesty and strong moral principles to shape responsible citizens.",
    },
    {
      icon: <FaBookReader className="text-purple-500 text-4xl mb-4" />,
      title: "Excellence",
      description: "Committed to academic excellence and holistic development of every student.",
    },
    {
      icon: <FaGlobe className="text-yellow-500 text-4xl mb-4" />,
      title: "Diversity",
      description: "We embrace cultural and social diversity, making education inclusive for all.",
    },
    {
      icon: <FaLightbulb className="text-red-500 text-4xl mb-4" />,
      title: "Innovation",
      description: "Encouraging creativity, problem-solving, and forward-thinking for a brighter future.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-pink-500">Core Values</span>
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300 border border-gray-200"
            >
              {value.icon}
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
