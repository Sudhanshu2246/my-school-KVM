"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6"; // react-icons

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-gray-700 to-slate-900 text-white py-10 rounded-2xl my-10 mx-4 sm:mx-8 lg:mx-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-0">
          क्या आप हमारे साथ जुड़ने के लिए तैयार हैं?
        </h2>

        {/* CTA Button */}
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
        >
          शुरुआत करें
          <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
