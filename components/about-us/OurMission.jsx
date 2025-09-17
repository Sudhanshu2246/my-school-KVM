"use client";

import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          हमारा <span className="text-blue-400">मिशन</span> और{" "}
          <span className="text-blue-400">विजन</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="bg-gray-800/70 rounded-2xl shadow-lg p-8 hover:scale-105 transition transform">
            <FaBullseye className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">हमारा मिशन</h3>
            <p className="text-gray-300 leading-relaxed">
              किफायती और उच्च-गुणवत्ता वाली शिक्षा प्रदान करना जो हर बच्चे को,
              चाहे उसका पृष्ठभूमि कोई भी हो, शैक्षणिक उत्कृष्टता प्राप्त करने,
              चरित्र निर्माण करने और एक जिम्मेदार नागरिक बनने के लिए सक्षम बनाए।
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-800/70 rounded-2xl shadow-lg p-8 hover:scale-105 transition transform">
            <FaEye className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">हमारा विजन</h3>
            <p className="text-gray-300 leading-relaxed">
              एक आदर्श संस्था बनना जो नवाचार, अनुशासन और आजीवन सीखने को बढ़ावा दे,
              ऐसे नेताओं को तैयार करे जो समाज में सकारात्मक योगदान दें और 
              स्व. श्री संपति राम जी की विरासत को आगे बढ़ाएँ।
            </p>
          </div>

          {/* Philosophy / Values */}
          <div className="bg-gray-800/70 rounded-2xl shadow-lg p-8 hover:scale-105 transition transform">
            <FaLightbulb className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">हमारा दर्शन</h3>
            <p className="text-gray-300 leading-relaxed">
              शिक्षा केवल अकादमिक तक सीमित नहीं है, बल्कि यह 
              सम्मान, कड़ी मेहनत और ईमानदारी जैसे मूल्यों को स्थापित करने के बारे में है,
              ताकि विद्यार्थी जीवन की चुनौतियों का सामना साहस और आत्मविश्वास के साथ कर सकें।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
