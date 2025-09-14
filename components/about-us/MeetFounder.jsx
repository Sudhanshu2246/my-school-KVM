"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

export default function OurFounder() {
  return (
    <section className="relative bg-white text-gray-800 py-16 px-6 lg:px-12 my-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Founder Image */}
        <div className="flex justify-center">
          <Image
            src="/founder.jpg" // 👉 put founder image in public folder
            alt="Late Mr. Sampati Ram Ji"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Founder Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Founder
          </h2>
          <h3 className="text-xl font-semibold text-blue-600">
            Late Mr. Sampati Ram Ji
          </h3>

          <p className="text-gray-700 leading-relaxed">
            <FaQuoteLeft className="inline-block text-blue-600 mr-2" />
            In 2004, after retiring from his post as a government school teacher, 
            Late Mr. Sampati Ram Ji laid the foundation of this institution with a vision 
            to <span className="font-semibold">educate every child</span> and make quality 
            education <span className="font-semibold">affordable for all sections of society</span>. 
          </p>

          <p className="text-gray-700 leading-relaxed">
            Known for his <span className="text-blue-600 font-medium">hard work, discipline, and dedication</span>, 
            he spent countless hours guiding students, supporting teachers, and ensuring that the school 
            grew with strong values. Even after his retirement, his passion for education never faded.
          </p>

          <p className="text-gray-700 leading-relaxed">
            His tireless efforts, simplicity, and commitment to society inspire us every day to 
            continue his mission of building a better future through education.
          </p>
        </div>
      </div>
    </section>
  );
}
