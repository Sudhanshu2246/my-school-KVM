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
      title: "खेल सुविधाएँ",
      description:
        "खुले मैदान और इनडोर सुविधाएँ जो विद्यार्थियों को शारीरिक शिक्षा और खेलों में भाग लेने के लिए प्रोत्साहित करती हैं।",
    },
    {
      icon: <FaBusAlt className="text-yellow-500 text-4xl mb-4" />,
      title: "परिवहन",
      description:
        "सुरक्षित और विश्वसनीय स्कूल वैन सेवा जो आस-पास के गाँवों को जोड़ती है।",
    },
    {
      icon: <FaChalkboardTeacher className="text-pink-500 text-4xl mb-4" />,
      title: "समर्पित शिक्षक",
      description:
        "हमारे अनुभवी और उत्साही शिक्षक हर विद्यार्थी को उत्कृष्टता की ओर मार्गदर्शन करने के लिए प्रतिबद्ध हैं।",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          हमारी <span className="text-blue-500">सुविधाएँ</span>
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
