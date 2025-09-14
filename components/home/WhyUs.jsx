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
    icon: <IoSchool className="w-8 h-8 text-blue-600" />,
    title: (
      <>
        Students will be <span className="text-blue-600">guided</span> <br /> by
        the teacher to grow and develop
      </>
    ),
    description:
      "The students can become graduates who are competent in the field of IT.",
  },
  {
    icon: <IoPeople className="w-8 h-8 text-blue-600" />,
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
    icon: <IoSparkles className="w-8 h-8 text-blue-600" />,
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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-6 md:px-12">
      {/* Sidebar - scoped inside parent */}
      <div className="absolute left-0 top-0 h-full w-12 bg-blue-600 flex items-center justify-center">
        <div className="text-white text-sm font-semibold transform -rotate-90 whitespace-nowrap tracking-widest">
          WHY US
        </div>
      </div>

      {/* Heading Content */}
      <div className="ml-16 max-w-7xl  mx-auto text-center mb-16 flex gap-10 items-center justify-between">
        <div className="min-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          Choose a <span className="text-blue-600">Quality School</span>
          for a <br /> Bright Future
        </h1>
        </div>
       <div>
         <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Our school is more than just a place of learning – it is a{" "}
          <span className="font-semibold text-gray-800">community of growth and discovery.</span>{" "}
          Through modern teaching techniques, technology integration, and
          values-based education, we strive to create an environment where
          students not only excel academically but also grow into responsible
          global citizens.
        </p>
       </div>
      </div>

      {/* Cards Section */}
      <div className="ml-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col space-y-4 transition hover:shadow-md hover:scale-[1.02] duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 leading-snug">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm">{feature.description}</p>

            {/* Floating Arrow */}
            <div
              className={`absolute w-12 h-12 border border-blue-300 rounded-full flex items-center justify-center bg-white shadow-sm ${
                idx % 2 === 0 ? "top-4 right-4" : "bottom-4 right-4"
              }`}
            >
              <IoArrowForward className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
