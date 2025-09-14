import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <section className="relative bg-gray-50 text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Together, let’s craft a{" "}
            <span className="text-blue-600">brilliant future</span> for your child.
          </h1>
          <p className="text-lg text-gray-600">
            At our Hindi medium school, we are committed to providing quality
            education that shapes young minds and prepares them for a bright
            future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Join with us
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition">
              Get to know more
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600">
                10 <span className="text-gray-800">+</span>
              </h2>
              <p className="text-gray-500">Teachers</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600">
                500 <span className="text-gray-800">+</span>
              </h2>
              <p className="text-gray-500">Students</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600">
                A <span className="text-gray-800">+</span>
              </h2>
              <p className="text-gray-500">Accreditation</p>
            </div>
          </div>
        </div>

        {/* Right Content (Image placeholder) */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/heroImg.jpg" // <- Replace with your actual image in public folder
            alt="School illustration"
            width={500}
            height={500}
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
