"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          The Legacy of Our School
        </motion.h1>

        {/* Subheading / Journey */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed"
        >
          Our journey began in{" "}
          <span className="text-yellow-400 font-semibold">2004</span>, when{" "}
          <span className="text-pink-400 font-semibold">
            Late Mr. Sampati Ram Ji
          </span>
          , after retiring from his government teaching post, laid the
          foundation of this school. With his own hands, he built the first{" "}
          <span className="text-yellow-400 font-semibold">
            three-shed classrooms
          </span>{" "}
          to provide affordable education to every child in the community.
        </motion.p>

        {/* Struggles */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 leading-relaxed"
        >
          Though he faced countless{" "}
          <span className="text-yellow-400 font-semibold">resistances{" "}</span>
           and hardships on this path, his vision and determination never
          stopped. His sacrifices became the foundation of an institution that
          today continues to nurture young minds with{" "}
          <span className="text-blue-400 font-semibold">
            values, knowledge, and hope
          </span>
          .
        </motion.p>

        {/* Family & Friend Contribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 leading-relaxed"
        >
          In this journey, his son{" "}
          <span className="text-pink-400 font-semibold">
            Mr. Subhash Chandra
          </span>
          , along with his family, stood as a strong pillar of support, carrying
          forward his father’s mission with dedication. Equally important was
          his dear friend{" "}
          <span className="text-pink-400 font-semibold">
            Late Mr. Narendra Bahadur Singh
          </span>
          , whose encouragement, guidance, and selfless contribution became a
          driving force in turning this vision into reality.
        </motion.p>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 italic"
        >
          Together, they transformed a humble beginning into a legacy that
          continues to inspire and educate generations.
        </motion.p>
      </div>
    </section>
  );
}
