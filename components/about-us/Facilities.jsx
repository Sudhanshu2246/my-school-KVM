"use client";

import {
  FaBookOpen,
  FaFlask,
  FaLaptop,
  FaFutbol,
  FaBusAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function Facilities() {
  const facilities = [
    {
      icon: <FaFutbol className="text-red-500 text-4xl mb-4" />,
      title: "Sports Facilities",
      description:
        "Playgrounds and indoor facilities that encourage students to participate in physical education and sports.",
    },
    {
      icon: <FaBusAlt className="text-yellow-500 text-4xl mb-4" />,
      title: "Transport",
      description:
        "Safe and reliable school van service connecting nearby  villages.",
    },
    {
      icon: <FaChalkboardTeacher className="text-pink-500 text-4xl mb-4" />,
      title: "Dedicated Teachers",
      description:
        "Our experienced and passionate teachers are committed to guiding every student toward excellence.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-blue-500">Facilities</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300 border border-gray-200"
            >
              {facility.icon}
              <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
