"use client";

import React from "react";
import {
  IoBook,
  IoPeople,
  IoGlobe,
  IoLaptopOutline,
} from "react-icons/io5"; 
import Image from "next/image";

const subjects = [
  {
    id: "01",
    title: "हिंदी एवं संस्कृत",
    description:
      "हिंदी और संस्कृत साहित्य, व्याकरण तथा लेखन कौशल पर ध्यान देकर भाषा की नींव मजबूत करना।",
    icon: <IoBook className="w-6 h-6 text-blue-500" />,
  },
  {
    id: "02",
    title: "गणित एवं विज्ञान",
    description:
      "गणित में मजबूत आधार और व्यावहारिक विज्ञान शिक्षा के साथ समस्या-समाधान कौशल विकसित करना।",
    icon: <IoLaptopOutline className="w-6 h-6 text-blue-500" />,
  },
  {
    id: "03",
    title: "सामाजिक अध्ययन",
    description:
      "इतिहास, भूगोल और नागरिक शास्त्र का अध्ययन कर समाज, संस्कृति और राष्ट्र के मूल्यों को समझना।",
    icon: <IoGlobe className="w-6 h-6 text-blue-500" />,
  },
  {
    id: "04",
    title: "नैतिक एवं मूल्य शिक्षा",
    description:
      "भारतीय परंपराओं से प्रेरित अनुशासन, सम्मान और मूल्यों को सीखकर सर्वांगीण विकास करना।",
    icon: <IoPeople className="w-6 h-6 text-blue-500" />,
  },
];

export default function SubjectsSection() {
  return (
    <section className="relative bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      {/* Sidebar Label */}
      <div className="absolute left-0 top-1/4 -translate-y-1/2 rotate-180 hidden sm:block">
        <div className="bg-blue-600 text-white px-3 py-1 rounded-lg rounded-br-lg text-xs sm:text-sm font-semibold tracking-wider rotate-90">
          विषय
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 sm:mb-6">
            अपने कौशल को बढ़ाएँ, <br className="hidden sm:block" /> अपना जीवन सुधारें
          </h2>
          <p className="text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
            निम्नलिखित विषय यूपी बोर्ड पाठ्यक्रम के अंतर्गत हमारे विद्यालय में पढ़ाए जाते हैं। 
            शैक्षणिक शिक्षा के साथ-साथ हम मूल्यों, संस्कृति और प्रत्येक बच्चे के 
            सर्वांगीण विकास पर भी विशेष ध्यान देते हैं।
          </p>

          <div className="space-y-6 sm:space-y-8">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                {/* Number */}
                <span className="text-blue-400 font-semibold text-base sm:text-lg">
                  {subject.id}
                </span>

                {/* Icon + Text */}
                <div>
                  <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                    {subject.icon} {subject.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    {subject.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg w-full max-w-sm sm:max-w-md">
            <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-700">
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-500 rounded-full"></span>
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full"></span>
            </div>
            <Image
              src="/classroom.jpg" // 👉 अपने public फोल्डर में उपलब्ध इमेज लगाएँ
              alt="कक्षा में सीखना"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
