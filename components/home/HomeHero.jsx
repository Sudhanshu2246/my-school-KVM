import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <section className="relative bg-gray-50 text-gray-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* बाईं ओर का कंटेंट */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            आइए मिलकर आपके बच्चे के लिए{" "}
            <span className="text-blue-600">उज्ज्वल भविष्य</span> का निर्माण करें।
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            हमारे हिंदी माध्यम विद्यालय में हम गुणवत्तापूर्ण शिक्षा देने के लिए 
            प्रतिबद्ध हैं, जो नन्हें मनों को आकार देती है और उन्हें उज्ज्वल 
            भविष्य के लिए तैयार करती है।
          </p>

          {/* बटन */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              हमसे जुड़ें
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition">
              और अधिक जानें
            </button>
          </div>

          {/* आँकड़े अनुभाग */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                10 <span className="text-gray-800">+</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">शिक्षक</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                500 <span className="text-gray-800">+</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">छात्र</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                A <span className="text-gray-800">+</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">मान्यता</p>
            </div>
          </div>
        </div>

        {/* दाईं ओर की इमेज */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/heroImg.jpg" // <- इसे public फ़ोल्डर में अपनी वास्तविक इमेज से बदलें
            alt="विद्यालय का चित्रण"
            width={500}
            height={500}
            className="rounded-2xl shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
