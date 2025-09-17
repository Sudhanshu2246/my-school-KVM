"use client";

import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Principal Image */}
        <div className="flex justify-center">
          <Image
            src="/principal.jpg" // 🔹 असली इमेज पाथ लगाएँ
            alt="प्राचार्य श्री अशोक कुमार यादव"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Principal Message */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            प्राचार्य का <span className="text-blue-500">संदेश</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            शिक्षा प्रगति और सशक्तिकरण की नींव है। हमारे विद्यालय में हम केवल
            शैक्षणिक उत्कृष्टता ही नहीं बल्कि चरित्र, अनुशासन और मूल्यों के
            विकास पर भी विश्वास करते हैं। प्रत्येक बच्चा अद्वितीय है और उसमें
            असीम संभावनाएँ छिपी हैं — हमारा कार्य है उन्हें उनकी क्षमताओं की खोज
            करने और उज्ज्वल भविष्य बनाने के लिए मार्गदर्शन देना।
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            हमारे शिक्षकों की निष्ठा, अभिभावकों का सहयोग और विद्यार्थियों का
            उत्साह मिलकर एक ऐसा सीखने का वातावरण बना रहे हैं जहाँ ज्ञान और
            प्रज्ञा का संगम हो।
          </p>

          {/* Principal Info */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-600">
              श्री अशोक कुमार यादव
            </h3>
            <p className="text-gray-500">प्राचार्य</p>
          </div>
        </div>
      </div>
    </section>
  );
}
