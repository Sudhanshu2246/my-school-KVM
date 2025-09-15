"use client";

import React from "react";
import {
  IoBook,
  IoPeople,
  IoGlobe,
  IoLaptopOutline,
} from "react-icons/io5"; // ✅ valid Io5 icons
import Image from "next/image";

const subjects = [
  {
    id: "01",
    title: "Hindi & Sanskrit",
    description:
      "Focus on Hindi and Sanskrit literature, grammar, and writing skills to strengthen language foundation.",
    icon: <IoBook className="w-6 h-6 text-blue-500" />,
  },
  {
    id: "02",
    title: "Mathematics & Science",
    description:
      "Develop problem-solving skills with strong fundamentals in mathematics and practical science learning.",
    icon: <IoLaptopOutline className="w-6 h-6 text-blue-500" />,
  },
  {
    id: "03",
    title: "Social Studies",
    description:
      "Explore history, geography, and civics to understand society, culture, and values of our nation.",
    icon: <IoGlobe className="w-6 h-6 text-blue-500" />,
  },
  {
    id: "04",
    title: "Moral & Value Education",
    description:
      "Learn discipline, respect, and values inspired by Indian traditions for holistic development.",
    icon: <IoPeople className="w-6 h-6 text-blue-500" />,
  },
];

export default function SubjectsSection() {
  return (
    <section className="relative bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      {/* Sidebar Label */}
      <div className="absolute left-0 top-1/4 -translate-y-1/2 rotate-180 hidden sm:block">
        <div className="bg-blue-600 text-white px-3 py-1 rounded-lg rounded-br-lg text-xs sm:text-sm font-semibold tracking-wider rotate-90">
          SUBJECTS
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 sm:mb-6">
            Upgrade Your Skill, <br className="hidden sm:block" /> Upgrade Your
            Life
          </h2>
          <p className="text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
            The following are some of the subjects taught at our school under
            the UP Board curriculum. Along with academics, we also emphasize
            values, culture, and overall development of every child.
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
              src="/classroom.jpg" // 👉 replace with an image in your public folder
              alt="Classroom learning"
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
