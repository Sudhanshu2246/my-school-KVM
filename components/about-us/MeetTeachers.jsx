"use client";

import { useState } from "react";
import Image from "next/image";

const teachers = [
  {
    name: "Mr. Rajesh Kumar",
    subject: "Mathematics",
    qualification: "M.Sc. (Math), B.Ed.",
    image: "/teachers/rajesh.jpg",
  },
  {
    name: "Mrs. Anjali Verma",
    subject: "Science",
    qualification: "M.Sc. (Physics), B.Ed.",
    image: "/teachers/anjali.jpg",
  },
  {
    name: "Mr. Arvind Singh",
    subject: "English",
    qualification: "M.A. (English), B.Ed.",
    image: "/teachers/arvind.jpg",
  },
  {
    name: "Mrs. Pooja Sharma",
    subject: "Hindi",
    qualification: "M.A. (Hindi), B.Ed.",
    image: "/teachers/pooja.jpg",
  },
  {
    name: "Mr. Suresh Yadav",
    subject: "Social Studies",
    qualification: "M.A. (History), B.Ed.",
    image: "/teachers/suresh.jpg",
  },
  {
    name: "Mrs. Neha Gupta",
    subject: "Computer Science",
    qualification: "B.Tech, M.C.A.",
    image: "/teachers/neha.jpg",
  },
  {
    name: "Mr. Ramesh Patel",
    subject: "Physics",
    qualification: "M.Sc. (Physics), B.Ed.",
    image: "/teachers/ramesh.jpg",
  },
  {
    name: "Mrs. Shalini Chauhan",
    subject: "Chemistry",
    qualification: "M.Sc. (Chemistry), B.Ed.",
    image: "/teachers/shalini.jpg",
  },
  {
    name: "Mr. Amit Tripathi",
    subject: "Biology",
    qualification: "M.Sc. (Biology), B.Ed.",
    image: "/teachers/amit.jpg",
  },
  {
    name: "Mrs. Kavita Singh",
    subject: "Economics",
    qualification: "M.A. (Economics), B.Ed.",
    image: "/teachers/kavita.jpg",
  },
  {
    name: "Mr. Vinod Kumar",
    subject: "Geography",
    qualification: "M.A. (Geography), B.Ed.",
    image: "/teachers/vinod.jpg",
  },
  {
    name: "Mrs. Sunita Devi",
    subject: "Arts",
    qualification: "M.A. (Fine Arts), B.Ed.",
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
          Meet Our Teachers
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our dedicated and qualified teachers are the backbone of our school. 
          They not only teach but also mentor, guide, and inspire students to achieve excellence.
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
            See More
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}
