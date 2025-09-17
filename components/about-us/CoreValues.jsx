"use client";

import {
  FaHandHoldingHeart,
  FaUsers,
  FaBalanceScale,
  FaBookReader,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

export default function CoreValues() {
  const values = [
    {
      icon: <FaHandHoldingHeart className="text-pink-500 text-4xl mb-4" />,
      title: "सहानुभूति",
      description:
        "हम दया और सहानुभूति को प्रोत्साहित करते हैं, ताकि प्रत्येक बच्चा एक संवेदनशील हृदय के साथ बड़ा हो।",
    },
    {
      icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
      title: "सम्मान",
      description:
        "शिक्षकों, साथियों और समाज के प्रति सम्मान हमारे सीखने के वातावरण की नींव है।",
    },
    {
      icon: <FaBalanceScale className="text-green-500 text-4xl mb-4" />,
      title: "ईमानदारी",
      description:
        "हम बच्चों में ईमानदारी और मजबूत नैतिक मूल्यों को विकसित करते हैं ताकि वे जिम्मेदार नागरिक बन सकें।",
    },
    {
      icon: <FaBookReader className="text-purple-500 text-4xl mb-4" />,
      title: "उत्कृष्टता",
      description:
        "हम प्रत्येक छात्र की शैक्षणिक उत्कृष्टता और समग्र विकास के लिए प्रतिबद्ध हैं।",
    },
    {
      icon: <FaGlobe className="text-yellow-500 text-4xl mb-4" />,
      title: "विविधता",
      description:
        "हम सांस्कृतिक और सामाजिक विविधता को अपनाते हैं और शिक्षा को सभी के लिए सुलभ बनाते हैं।",
    },
    {
      icon: <FaLightbulb className="text-red-500 text-4xl mb-4" />,
      title: "नवाचार",
      description:
        "हम रचनात्मकता, समस्या-समाधान और दूरदर्शी सोच को प्रोत्साहित करते हैं ताकि उज्ज्वल भविष्य बनाया जा सके।",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          हमारे <span className="text-pink-500">मूल्य</span>
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl p-8 border border-gray-200 transition duration-300"
            >
              {value.icon}
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
