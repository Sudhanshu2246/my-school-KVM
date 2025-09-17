"use client";

import React from "react";
import {
  IoSchool,
  IoPeople,
  IoSparkles,
  IoArrowForward,
} from "react-icons/io5";

const features = [
  {
    icon: <IoSchool className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
    title: (
      <>
        विद्यार्थियों को <span className="text-blue-600">मार्गदर्शन</span>{" "}
        <br className="hidden sm:block" /> शिक्षक द्वारा दिया जाएगा ताकि वे बढ़ें और विकसित हों
      </>
    ),
    description:
      "विद्यार्थी ऐसे स्नातक बन सकते हैं जो आईटी क्षेत्र में दक्ष और सक्षम हों।",
  },
  {
    icon: <IoPeople className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
    title: (
      <>
        विद्यार्थियों को <span className="text-blue-600">मानसिक रूप से</span> बड़े सपने देखने के लिए तैयार किया जाता है
      </>
    ),
    description:
      "हम जिज्ञासा, रचनात्मकता और आत्मविश्वास को प्रोत्साहित करते हैं ताकि विद्यार्थी बड़े सपने देख सकें और अपने लक्ष्य हासिल कर सकें।",
  },
  {
    icon: <IoSparkles className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
    title: (
      <>
        <span className="text-blue-600">लाभकारी</span> अनेक लोगों के लिए, चाहे आईटी क्षेत्र हो या अन्य
      </>
    ),
    description:
      "हमारे कार्यक्रम ऐसे कौशल विकसित करते हैं जो आईटी और अन्य क्षेत्रों दोनों में मूल्यवान हैं, जिससे सर्वांगीण व्यक्तित्व का निर्माण होता है।",
  },
];

export default function WhyUsCards() {
  return (
    <section className="relative bg-gray-50 py-12 sm:py-16">
      {/* Sidebar */}
      <div className="absolute left-0 top-1/4 -translate-y-1/2 rotate-180 hidden lg:block">
        <div className="bg-blue-600 text-white px-3 py-1 rounded-lg rounded-br-lg text-xs sm:text-sm font-semibold tracking-wider rotate-90">
          क्यों चुनें हम?
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-16">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
              एक <span className="text-blue-600">गुणवत्तापूर्ण स्कूल</span> चुनें
              <br className="hidden md:block" /> उज्ज्वल भविष्य के लिए
            </h1>
          </div>
          <div>
            <p className="mt-4 md:mt-0 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
              हमारा विद्यालय केवल पढ़ाई का स्थान नहीं है – यह{" "}
              <span className="font-semibold text-gray-800">
                विकास और खोज का समुदाय
              </span>{" "}
              है। आधुनिक शिक्षण पद्धतियों, तकनीकी एकीकरण और मूल्यों पर आधारित शिक्षा के माध्यम से हम ऐसा वातावरण बनाते हैं जहाँ विद्यार्थी न केवल शैक्षणिक रूप से उत्कृष्ट हों, बल्कि जिम्मेदार वैश्विक नागरिक भी बनें।
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 flex flex-col space-y-3 sm:space-y-4 transition hover:shadow-md hover:scale-[1.02] duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-50 rounded-lg">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm sm:text-base">
                {feature.description}
              </p>

              {/* Floating Arrow */}
              <div
                className={`absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-blue-300 rounded-full flex items-center justify-center bg-white shadow-sm ${
                  idx % 2 === 0
                    ? "top-3 sm:top-4 right-3 sm:right-4"
                    : "bottom-3 sm:bottom-4 right-3 sm:right-4"
                }`}
              >
                <IoArrowForward className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
