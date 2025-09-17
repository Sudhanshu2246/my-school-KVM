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
          हमारे विद्यालय की विरासत
        </motion.h1>

        {/* Subheading / Journey */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed"
        >
          हमारी यात्रा की शुरुआत{" "}
          <span className="text-yellow-400 font-semibold">2004</span> में हुई,
          जब{" "}
          <span className="text-pink-400 font-semibold">
            स्वर्गीय श्री संपति राम जी
          </span>{" "}
          ने सरकारी शिक्षक पद से सेवानिवृत्ति के बाद इस विद्यालय की नींव रखी।
          अपने हाथों से उन्होंने{" "}
          <span className="text-yellow-400 font-semibold">
            तीन झोपड़ी जैसी कक्षाओं
          </span>{" "}
          का निर्माण किया ताकि समाज के हर बच्चे को सस्ती शिक्षा मिल सके।
        </motion.p>

        {/* Struggles */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 leading-relaxed"
        >
          इस मार्ग में उन्होंने अनगिनत{" "}
          <span className="text-yellow-400 font-semibold">विरोधों</span> और
          कठिनाइयों का सामना किया, फिर भी उनका दृष्टिकोण और संकल्प कभी नहीं
          रुका। उनके त्याग उस संस्था की नींव बने जो आज भी नन्हें-मुन्नों के
          मन को{" "}
          <span className="text-blue-400 font-semibold">
            मूल्यों, ज्ञान और आशा
          </span>{" "}
          से सिंचित कर रही है।
        </motion.p>

        {/* Family & Friend Contribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 leading-relaxed"
        >
          इस यात्रा में उनके सुपुत्र{" "}
          <span className="text-pink-400 font-semibold">
            श्री सुभाष चन्द्र
          </span>{" "}
          ने  मजबूत स्तंभ की तरह खड़े रहकर अपने पिता के
          मिशन को आगे बढ़ाया। उतना ही महत्वपूर्ण योगदान उनके  मित्र{" "}
          <span className="text-pink-400 font-semibold">
            स्वर्गीय श्री नरेंद्र बहादुर सिंह
          </span>{" "}
          का भी रहा, जिनका उत्साहवर्धन, मार्गदर्शन और निःस्वार्थ योगदान इस
          स्वप्न को साकार करने में प्रेरक शक्ति बना।
        </motion.p>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 italic"
        >
          मिलकर उन्होंने एक साधारण शुरुआत को ऐसी विरासत में बदल दिया, जो
          आज भी पीढ़ियों को प्रेरित और शिक्षित कर रही है।
        </motion.p>
      </div>
    </section>
  );
}
