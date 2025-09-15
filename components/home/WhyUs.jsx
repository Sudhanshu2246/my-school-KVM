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
        Students will be <span className="text-blue-600">guided</span>{" "}
        <br className="hidden sm:block" /> by the teacher to grow and develop
      </>
    ),
    description:
      "The students can become graduates who are competent in the field of IT.",
  },
  {
    icon: <IoPeople className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
    title: (
      <>
        Students are <span className="text-blue-600">mentally</span> equipped to
        have big dreams
      </>
    ),
    description:
      "We encourage curiosity, creativity, and confidence so students can dream big and achieve their goals.",
  },
  {
    icon: <IoSparkles className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
    title: (
      <>
        <span className="text-blue-600">Beneficial</span> for many people, both
        in the IT field or others
      </>
    ),
    description:
      "Our programs build skills that are valuable across IT and other fields, shaping well-rounded individuals.",
  },
];

export default function WhyUsCards() {
  return (
    <section className="relative bg-gray-50 py-12 sm:py-16">
      {/* Sidebar */}
      <div className="absolute left-0 top-1/4 -translate-y-1/2 rotate-180 hidden lg:block">
        <div className="bg-blue-600 text-white px-3 py-1 rounded-lg rounded-br-lg text-xs sm:text-sm font-semibold tracking-wider rotate-90">
          WHY US
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-16">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
              Choose a <span className="text-blue-600">Quality School</span>
              <br className="hidden md:block" /> for a Bright Future
            </h1>
          </div>
          <div>
            <p className="mt-4 md:mt-0 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
              Our school is more than just a place of learning – it is a{" "}
              <span className="font-semibold text-gray-800">
                community of growth and discovery.
              </span>{" "}
              Through modern teaching techniques, technology integration, and
              values-based education, we strive to create an environment where
              students not only excel academically but also grow into
              responsible global citizens.
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
