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
            हमारे प्रबंधक से मिलिए
          </h2>
          <h3 className="text-xl font-semibold text-blue-600">
            श्री सुभाष चन्द्र
          </h3>

          <p className="text-gray-700 leading-relaxed">
            <FaQuoteLeft className="inline-block text-blue-500 mr-2" />
            श्री सुभाष चन्द्र, स्वर्गीय श्री संपति राम जी के गौरवशाली पुत्र,
            ने अपने पिता के इस महान मिशन को आगे बढ़ाने की जिम्मेदारी
            संभाली है। समर्पण और दृढ़ संकल्प के साथ वे इस संस्थान को आने
            वाली पीढ़ियों के लिए{" "}
            <span className="text-blue-600 font-medium">
              आशा और शिक्षा का केंद्र
            </span>{" "}
            बनाने का स्वप्न देखते हैं।
          </p>

          <p className="text-gray-700 leading-relaxed">
            उनका सपना है कि अपने पिता के{" "}
            <span className="text-blue-600 font-medium">
              सस्ती और सुलभ शिक्षा
            </span>{" "}
            के विज़न को विस्तार दें, ताकि हर बच्चा—चाहे उसकी पृष्ठभूमि
            कोई भी हो—सीखने, बढ़ने और जीवन में सफल होने का अवसर पा सके।
          </p>

          <p className="text-gray-700 leading-relaxed">
            उनके नेतृत्व में विद्यालय निरंतर{" "}
            <span className="text-blue-600 font-medium">
              उत्कृष्टता का केंद्र
            </span>{" "}
            बनने की ओर अग्रसर है, जहाँ परंपरागत मूल्यों को आधुनिक शिक्षण
            पद्धतियों के साथ जोड़ा जा रहा है। उनकी अटूट प्रतिबद्धता
            शिक्षकों और विद्यार्थियों दोनों को प्रेरित करती है कि वे सफलता
            की ओर बढ़ें और साथ ही मजबूत सांस्कृतिक एवं नैतिक नींव को भी
            बनाए रखें।
          </p>
        </div>

        {/* Manager Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src="/manager.jpg" // 👉 public/manager.jpg में फ़ोटो रखें
            alt="श्री सुभाष चन्द्र"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
