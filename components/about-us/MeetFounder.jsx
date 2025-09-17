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
            src="/founder.jpg" // 👉 founder image public folder में रखें
            alt="स्व. श्री संपति राम जी"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Founder Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            हमारे संस्थापक
          </h2>
          <h3 className="text-xl font-semibold text-blue-600">
            स्व. श्री संपति राम जी
          </h3>

          <p className="text-gray-700 leading-relaxed">
            <FaQuoteLeft className="inline-block text-blue-600 mr-2" />
            वर्ष 2004 में सरकारी विद्यालय में शिक्षक पद से सेवानिवृत्त होने के बाद 
            स्व. श्री संपति राम जी ने इस संस्था की नींव रखी। उनका उद्देश्य था{" "}
            <span className="font-semibold">हर बच्चे को शिक्षा प्रदान करना</span> 
            और गुणवत्तापूर्ण शिक्षा को{" "}
            <span className="font-semibold">समाज के सभी वर्गों के लिए सुलभ बनाना</span>।
          </p>

          <p className="text-gray-700 leading-relaxed">
            अपने <span className="text-blue-600 font-medium">कड़े परिश्रम, अनुशासन और समर्पण</span> 
            के लिए प्रसिद्ध, उन्होंने विद्यार्थियों का मार्गदर्शन करने, शिक्षकों को सहयोग देने और 
            विद्यालय को मजबूत मूल्यों के साथ आगे बढ़ाने में अनगिनत घंटे लगाए। 
            सेवानिवृत्ति के बाद भी उनकी शिक्षा के प्रति लगन कभी कम नहीं हुई।
          </p>

          <p className="text-gray-700 leading-relaxed">
            उनके अथक प्रयास, सरलता और समाज के प्रति प्रतिबद्धता हमें प्रतिदिन प्रेरित करती है 
            कि हम उनकी शिक्षा द्वारा बेहतर भविष्य बनाने की सोच को आगे बढ़ाएँ।
          </p>
        </div>
      </div>
    </section>
  );
}
