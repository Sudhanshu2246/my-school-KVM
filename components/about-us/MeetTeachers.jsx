"use client";

import { useState } from "react";
import Image from "next/image";

const teachers = [
  {
    name: "श्री राजेश कुमार",
    subject: "गणित",
    qualification: "एम.एससी. (गणित), बी.एड.",
    image: "/teachers/rajesh.jpg",
  },
  {
    name: "श्रीमती अंजलि वर्मा",
    subject: "विज्ञान",
    qualification: "एम.एससी. (भौतिकी), बी.एड.",
    image: "/teachers/anjali.jpg",
  },
  {
    name: "श्री अरविंद सिंह",
    subject: "अंग्रेज़ी",
    qualification: "एम.ए. (अंग्रेज़ी), बी.एड.",
    image: "/teachers/arvind.jpg",
  },
  {
    name: "श्रीमती पूजा शर्मा",
    subject: "हिंदी",
    qualification: "एम.ए. (हिंदी), बी.एड.",
    image: "/teachers/pooja.jpg",
  },
  {
    name: "श्री सुरेश यादव",
    subject: "सामाजिक अध्ययन",
    qualification: "एम.ए. (इतिहास), बी.एड.",
    image: "/teachers/suresh.jpg",
  },
  {
    name: "श्रीमती नेहा गुप्ता",
    subject: "कंप्यूटर विज्ञान",
    qualification: "बी.टेक, एम.सी.ए.",
    image: "/teachers/neha.jpg",
  },
  {
    name: "श्री रमेश पटेल",
    subject: "भौतिकी",
    qualification: "एम.एससी. (भौतिकी), बी.एड.",
    image: "/teachers/ramesh.jpg",
  },
  {
    name: "श्रीमती शालिनी चौहान",
    subject: "रसायन विज्ञान",
    qualification: "एम.एससी. (रसायन विज्ञान), बी.एड.",
    image: "/teachers/shalini.jpg",
  },
  {
    name: "श्री अमित त्रिपाठी",
    subject: "जीव विज्ञान",
    qualification: "एम.एससी. (जीव विज्ञान), बी.एड.",
    image: "/teachers/amit.jpg",
  },
  {
    name: "श्रीमती कविता सिंह",
    subject: "अर्थशास्त्र",
    qualification: "एम.ए. (अर्थशास्त्र), बी.एड.",
    image: "/teachers/kavita.jpg",
  },
  {
    name: "श्री विनोद कुमार",
    subject: "भूगोल",
    qualification: "एम.ए. (भूगोल), बी.एड.",
    image: "/teachers/vinod.jpg",
  },
  {
    name: "श्रीमती सुनीता देवी",
    subject: "कला",
    qualification: "एम.ए. (ललित कला), बी.एड.",
    image: "/teachers/sunita.jpg",
  },
];

export default function MeetTeachers() {
  const [showAll, setShowAll] = useState(false);

  const visibleTeachers = showAll ? teachers : teachers.slice(0, 3);

  return (
    <section id="teachers" className="py-16 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          हमारे शिक्षकों से मिलिए
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          हमारे समर्पित और योग्य शिक्षक हमारे विद्यालय की रीढ़ हैं। 
          वे केवल पढ़ाते ही नहीं, बल्कि विद्यार्थियों का मार्गदर्शन,
          परामर्श और प्रेरणा भी देते हैं ताकि वे उत्कृष्टता प्राप्त कर सकें।
        </p>
      </div>

      {/* Teacher Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleTeachers.map((teacher, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={200}
              height={200}
              className="rounded-full object-cover border-4 border-blue-100"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {teacher.name}
            </h3>
            <p className="text-blue-600 font-medium">{teacher.subject}</p>
            <p className="text-gray-600 text-sm">{teacher.qualification}</p>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-10">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:scale-105 transition transform"
          >
            और देखें
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition"
          >
            कम दिखाएँ
          </button>
        )}
      </div>
    </section>
  );
}
