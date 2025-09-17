"use client";

import React, { useState } from "react";
import {
  FaInfoCircle,
  FaShieldAlt,
  FaEnvelope,
  FaPhone,
  FaCheck,
} from "react-icons/fa";
import HeaderControl from "../Control/ToggleForLanguage";

const PrivacyContent = () => {
  const [language, setLanguage] = useState("english"); // 'english' | 'hindi'

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
      {/* ✅ Reusable Header Control */}
      <HeaderControl language={language} setLanguage={setLanguage} />

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {language === "english" ? "Privacy Policy" : "गोपनीयता नीति"}
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">
          {language === "english"
            ? `Last updated: ${new Date().toLocaleDateString()}`
            : `अंतिम अद्यतन: ${new Date().toLocaleDateString()}`}
        </p>
      </div>

      <div className="space-y-10">
        {/* Information We Collect */}
        <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-blue-600" />
            {language === "english"
              ? "Information We Collect"
              : "हम कौन सी जानकारी एकत्र करते हैं"}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === "english"
              ? "We collect information that you provide directly to us, including:"
              : "हम वह जानकारी एकत्र करते हैं जो आप सीधे हमें प्रदान करते हैं, जिसमें शामिल हैं:"}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start">
              <FaCheck className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              {language === "english"
                ? "Name and contact information"
                : "नाम और संपर्क जानकारी"}
            </li>
            <li className="flex items-start">
              <FaCheck className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              {language === "english"
                ? "Student information for admission purposes"
                : "प्रवेश उद्देश्यों के लिए छात्र जानकारी"}
            </li>
            <li className="flex items-start">
              <FaCheck className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              {language === "english"
                ? "Communications you send to us"
                : "आपके द्वारा हमें भेजे गए संचार"}
            </li>
            <li className="flex items-start">
              <FaCheck className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              {language === "english"
                ? "Information provided through forms"
                : "फॉर्म के माध्यम से प्रदान की गई जानकारी"}
            </li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-green-600" />
            {language === "english"
              ? "How We Use Information"
              : "हम जानकारी का उपयोग कैसे करते हैं"}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === "english"
              ? "We use the collected information for:"
              : "हम एकत्रित जानकारी का उपयोग इन उद्देश्यों के लिए करते हैं:"}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start">
              <FaCheck className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
              {language === "english"
                ? "Processing admissions and enrollments"
                : "प्रवेश और नामांकन की प्रक्रिया"}
            </li>
            <li className="flex items-start">
              <FaCheck className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
              {language === "english"
                ? "Communicating about school activities and updates"
                : "स्कूल की गतिविधियों और अपडेट के बारे में संचार"}
            </li>
            <li className="flex items-start">
              <FaCheck className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
              {language === "english"
                ? "Responding to inquiries and requests"
                : "पूछताछ और अनुरोधों का जवाब देना"}
            </li>
            <li className="flex items-start">
              <FaCheck className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
              {language === "english"
                ? "Improving our educational services"
                : "हमारी शैक्षिक सेवाओं में सुधार"}
            </li>
          </ul>
        </section>

        {/* Information Security */}
        <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaShieldAlt className="mr-2 text-purple-600" />
            {language === "english" ? "Information Security" : "सूचना सुरक्षा"}
          </h2>
          <p className="text-gray-700">
            {language === "english"
              ? "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse."
              : "हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुंच, प्रकटीकरण या दुरुपयोग से बचाने के लिए उपयुक्त सुरक्षा उपाय लागू करते हैं।"}
          </p>
        </section>

        {/* Contact Us */}
        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-yellow-600" />
            {language === "english" ? "Contact Us" : "हमसे संपर्क करें"}
          </h2>
          <p className="text-gray-700">
            {language === "english"
              ? "If you have any questions about our Privacy Policy, please contact us at:"
              : "यदि आपके पास हमारी गोपनीयता नीति के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:"}
          </p>
          <div className="mt-4 text-gray-700 space-y-3">
            <div className="flex items-center">
              <FaEnvelope className="text-yellow-600 mr-3" />
              <span>Email: kvm@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-yellow-600 mr-3" />
              <span>Phone: +91 9450976674</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyContent;
