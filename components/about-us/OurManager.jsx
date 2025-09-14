"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

export default function OurManager() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Manager Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
           Meet Our Manager
          </h2>
          <h3 className="text-xl font-semibold text-blue-600">
            Mr. Subhash Chandra
          </h3>

          <p className="text-gray-700 leading-relaxed">
            <FaQuoteLeft className="inline-block text-blue-500 mr-2" />
            Mr. Subhash Chandra, the proud son of Late Mr. Sampati Ram Ji, has 
            taken the responsibility of continuing his father’s noble mission. 
            With dedication and a strong sense of purpose, he envisions making 
            this institution a beacon of hope and learning for the generations to come.
          </p>

          <p className="text-gray-700 leading-relaxed">
            His dream is to expand his father’s vision of{" "}
            <span className="text-blue-600 font-medium">affordable and accessible education</span>, 
            ensuring that every child—irrespective of background—has an opportunity to 
            learn, grow, and succeed in life.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Under his leadership, the school is steadily moving towards becoming a{" "}
            <span className="text-blue-600 font-medium">center of excellence</span>, 
            blending traditional values with modern teaching methods. 
            His unwavering commitment inspires both teachers and students to 
            strive for success while upholding strong cultural and moral foundations.
          </p>
        </div>

        {/* Manager Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src="/manager.jpg" // 👉 Place manager photo in public/ folder
            alt="Mr. Subhash Chandra"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
