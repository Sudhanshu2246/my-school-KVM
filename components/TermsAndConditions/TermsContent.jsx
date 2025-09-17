"use client";

import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaUniversity,
  FaMoneyBill,
  FaGraduationCap,
  FaSync,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import HeaderControl from "../Control/ToggleForLanguage";

const TermsContent = () => {
  const [language, setLanguage] = useState("english"); // english | hindi
  const [date, setDate] = useState("");

  useEffect(() => {
    // Prevent hydration mismatch
    setDate(new Date().toLocaleDateString("en-GB")); // e.g. 17/09/2025
  }, []);

  // ✅ Predefined safe Tailwind color classes
  const colorClasses = {
    blue: "bg-blue-50 border-blue-600",
    green: "bg-green-50 border-green-600",
    yellow: "bg-yellow-50 border-yellow-600",
    purple: "bg-purple-50 border-purple-600",
    pink: "bg-pink-50 border-pink-600",
    red: "bg-red-50 border-red-600",
  };

  const content = {
    english: {
      title: "📜 Terms & Conditions",
      sections: [
        {
          icon: <FaBook className="text-blue-600" />,
          heading: "Acceptance of Terms",
          text: "By accessing and using Kamla Bal Vidya Mandir's services, you accept and agree to be bound by the terms and conditions outlined here.",
          color: "blue",
        },
        {
          icon: <FaUniversity className="text-green-600" />,
          heading: "School Rules & Regulations",
          list: [
            "Students must adhere to the school's dress code and uniform policy.",
            "Regular attendance is mandatory.",
            "Students must maintain discipline and respect school property.",
            "Parents must attend scheduled parent-teacher meetings.",
          ],
          color: "green",
        },
        {
          icon: <FaMoneyBill className="text-yellow-600" />,
          heading: "Fee Policy",
          text: "School fees must be paid within the specified due dates. Late payments may incur additional charges.",
          color: "yellow",
        },
        {
          icon: <FaGraduationCap className="text-purple-600" />,
          heading: "Academic Standards",
          text: "Students are expected to:",
          list: [
            "Complete all assigned homework and projects",
            "Maintain minimum attendance requirements",
            "Participate in class activities",
            "Follow academic integrity guidelines",
          ],
          color: "purple",
        },
        {
          icon: <FaSync className="text-pink-600" />,
          heading: "Changes to Terms",
          text: "The school reserves the right to modify these terms and conditions at any time. Changes will be communicated to parents and students.",
          color: "pink",
        },
        {
          icon: <FaPhoneAlt className="text-red-600" />,
          heading: "Contact Information",
          text: "For any questions regarding these terms, please contact:",
          contact: {
            email: "kvm@gmail.com",
            phone: "+91 9450976674",
          },
          color: "red",
        },
      ],
    },
    hindi: {
      title: "📜 नियम एवं शर्तें",
      sections: [
        {
          icon: <FaBook className="text-blue-600" />,
          heading: "नियमों की स्वीकृति",
          text: "कमला बाल विद्या मंदिर की सेवाओं का उपयोग करने पर, आप यहां दिए गए नियमों और शर्तों का पालन करने के लिए सहमत होते हैं।",
          color: "blue",
        },
        {
          icon: <FaUniversity className="text-green-600" />,
          heading: "विद्यालय के नियम और विनियम",
          list: [
            "छात्रों को विद्यालय की ड्रेस कोड और यूनिफॉर्म नीति का पालन करना अनिवार्य है।",
            "नियमित उपस्थिति अनिवार्य है।",
            "छात्रों को अनुशासन बनाए रखना होगा और विद्यालय की संपत्ति का सम्मान करना होगा।",
            "अभिभावकों को निर्धारित अभिभावक-शिक्षक बैठकों में भाग लेना होगा।",
          ],
          color: "green",
        },
        {
          icon: <FaMoneyBill className="text-yellow-600" />,
          heading: "शुल्क नीति",
          text: "विद्यालय की फीस निर्धारित समय सीमा के भीतर जमा करनी होगी। विलंबित भुगतान पर अतिरिक्त शुल्क लगाया जा सकता है।",
          color: "yellow",
        },
        {
          icon: <FaGraduationCap className="text-purple-600" />,
          heading: "शैक्षिक मानक",
          text: "छात्रों से अपेक्षा की जाती है कि वे:",
          list: [
            "सभी गृहकार्य और प्रोजेक्ट समय पर पूरा करें",
            "न्यूनतम उपस्थिति की शर्तें पूरी करें",
            "कक्षा की गतिविधियों में भाग लें",
            "शैक्षिक ईमानदारी के नियमों का पालन करें",
          ],
          color: "purple",
        },
        {
          icon: <FaSync className="text-pink-600" />,
          heading: "नियमों में परिवर्तन",
          text: "विद्यालय किसी भी समय इन नियमों और शर्तों में बदलाव करने का अधिकार रखता है। बदलाव की जानकारी अभिभावकों और छात्रों को दी जाएगी।",
          color: "pink",
        },
        {
          icon: <FaPhoneAlt className="text-red-600" />,
          heading: "संपर्क जानकारी",
          text: "इन नियमों के संबंध में किसी भी प्रश्न के लिए कृपया संपर्क करें:",
          contact: {
            email: "kvm@gmail.com",
            phone: "+91 9450976674",
          },
          color: "red",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
      {/* Shared Header Control */}
      <HeaderControl language={language} setLanguage={setLanguage} />

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.title}</h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">
          {language === "english"
            ? `Last updated: ${date}`
            : `अंतिम अद्यतन: ${date}`}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {t.sections.map((section, index) => (
          <section
            key={index}
            className={`p-6 rounded-lg border-l-4 ${colorClasses[section.color]}`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              {section.icon}
              {section.heading}
            </h2>
            {section.text && (
              <p className="text-gray-700 mb-3">{section.text}</p>
            )}
            {section.list && (
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.contact && (
              <div className="mt-4 text-gray-700 space-y-2">
                <div className="flex items-center">
                  <FaEnvelope className="text-red-600 mr-2" />
                  <span>Email: {section.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-red-600 mr-2" />
                  <span>Phone: {section.contact.phone}</span>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsContent;
