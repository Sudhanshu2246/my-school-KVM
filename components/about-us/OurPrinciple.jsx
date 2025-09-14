"use client";

import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Principal Image */}
        <div className="flex justify-center">
          <Image
            src="/principal.jpg" // 🔹 Replace with actual image path
            alt="Principal Mr. Ashok Kumar Yadav"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Principal Message */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Principal’s <span className="text-blue-500">Message</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Education is the foundation of progress and empowerment. At our
            school, we believe in nurturing not only academic excellence but
            also character, discipline, and values. Every child is unique and
            has infinite potential — our role is to guide them to discover their
            strengths and build a bright future.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With the dedication of our teachers, the support of parents, and the
            enthusiasm of our students, we are creating a strong learning
            environment where knowledge meets wisdom.
          </p>

          {/* Principal Info */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-600">
              Mr. Ashok Kumar Yadav
            </h3>
            <p className="text-gray-500">Principal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
